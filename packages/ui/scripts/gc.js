#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import fse from 'fs-extra';
import { resolve }  from 'path';
import handlebars from "handlebars";
import {insetComponentInstallTemplete, creatDemoTemplete, creatMdTemplete, creatTemplete, creatPluginTemplete} from './templete.js';

/**
 * 读取路径信息
 * @param {string} path 路径
 */
const getStat = (path) => {
    return new Promise((resolve, reject) => {
        fs.exists(path, (stats) => {
            if (stats) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};
/**
 * 判断组件是否存在
 * @param {*} dir
 * @returns
 */
const dirExists = async (dir) => {
    let isExists = await getStat(dir);
    return isExists ? true : false;
};
/**
 * 创建路径
 * @param {*} dir
 * @returns
 */
const mkdirVali = (dir) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};
/**
 * 写入文件模版
 * @param {*} path 写入路径
 * @param {*} temple 模版
 * @returns
 */
const writeFilesTemplete = async (path, temple) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, temple, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};
/**
 * 文件读取
 * @param {*} path 
 * @returns 
 */
const readFilesTemplet = async (path, type='utf-8') => {
    return new Promise((resolve, reject) => {
        fse.readFile(path, type, (err, data) => {
            if (err) {
                resolve(false);
            } else {
                resolve(data);
            }
        });
    });
};
/**
 * 读取 packages/ui/src/pluginList.json 并更新
 */
const writePluginListJson = async(meta)=>{
    let filePath = './src/pluginList.json';
    let pluginList = await readFilesTemplet(filePath);
    const pluginListContent = JSON.parse(pluginList);
    pluginListContent.push(meta);
    const newListFileContentFile = JSON.stringify(pluginListContent, null, 2);
    const updateTemplete = await writeFilesTemplete(filePath, newListFileContentFile );
    if(updateTemplete){
        return pluginListContent;
    }
};
/**
 * 组件注册
 * @param {*} name 
 */
const initComponent =async (name, list)=>{
    // let info = await readFilesTemplet('./src/index.ts');
    const templete = insetComponentInstallTemplete(name);
    const templeteMate = {
        importPlugins: list
            .filter((i) => {
                return !i.isNotPlugin;
            })
            .map(
                ({ componentName }) => `import { ${componentName}Plugin } from './${componentName}';`
            )
            .join("\n"),
    
        installPlugins:list
            .filter((i) => {
                return !i.isNotPlugin;
            })
            .map(({ componentName }) => `${componentName}Plugin.install?.(app);`)
            .join("\n    "),
        exportPlugins:list
            .filter((i) => {
                return !i.isNotPlugin;
            })
            .map(({ componentName }) => `export * from './${componentName}'`)
            .join("\n"),

    };
    const installFileContent = handlebars.compile(templete, {
        noEscape: true,
    })(templeteMate);
    fse.outputFile(
        './src/index.ts',
        installFileContent,
        (err) => {
            if (err) console.log(err);
            console.log(`组件注册成功`);
        }
    );
};
/**
 * 创建组件对应文件模版
 * @param {*} name
 */
const creatComponentsFiles = async (info) => {
    const { componentName } = info;
    let dirPath = `./src/${componentName}`;
    let mainPath = await mkdirVali(`${dirPath}`);
    if (mainPath) {
        let childrenPath = await Promise.all([
            mkdirVali(`${dirPath}/src`),
            mkdirVali(`${dirPath}/doc`),
        ]);
        if (!childrenPath.includes(false)) {
            let wirteComplete = await Promise.all([
                writeFilesTemplete(`${dirPath}/src/${componentName}.vue`, creatTemplete(componentName)),
                writeFilesTemplete(`${dirPath}/index.ts`, creatPluginTemplete(componentName)),
                writeFilesTemplete(`${dirPath}/doc/demo.vue`,creatDemoTemplete(componentName)),
                writeFilesTemplete(`${dirPath}/doc/README.md`,creatMdTemplete(componentName)),
            ]);
            if (!wirteComplete.includes(false)) {
                //初始化组件
              
                console.log(`组件创建完成，请在 src/${componentName} 目录进行组件开发`);
            }
        }
    }
};
/**
 * 命令交互校验
 * TODO  待补 组件重名校验。。。。。
 */
const creatComponents = async () => {
    const info = await inquirer.prompt([
        {
            type: "input",
            message: "请输入要创建的组件名称：",
            name: "componentName",
            validate(answer) {
                const done = this.async();
                const validateRes = /^[A-Z]/.test(answer);
                if (!validateRes) {
                    done("请输入正确的组件名！");
                    return;
                }

                done(null, true);
            },
        },
        {
            type: "input",
            message: "请输入组件的功能描述：",
            name: "componentDesc",
            default: "默认：这是一个新组件",
        },
    ]);
  
    info.type='组件';
    info.isNotPlugin = false;
    info.compZhName = '基础组件';
    return info;
};
const run = async ()=>{
    let info =await creatComponents();
    const  {componentName} = info;
    creatComponentsFiles(info);
    // 更新组件list文件
    const pluginlist = await writePluginListJson(info);
    initComponent(componentName, pluginlist);
};
run();

