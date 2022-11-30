#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import fse from 'fs-extra';
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
const readFilesTemplet = async (path) => {
    return new Promise((resolve, reject) => {
        fse.readFile(path, "utf-8", (err, data) => {
            if (err) {
                resolve(false);
            } else {
                resolve(data);
            }
        });
    });
};
/**
 * 组件注册
 * @param {*} name 
 */
const initComponent =async (name)=>{
    // let info = await readFilesTemplet('./src/index.ts');
    // console.log(555, info);
    const templete = insetComponentInstallTemplete(name);
    const templeteMate = {
        importPlugins:`import { ${name}Plugin } from "./${name}";`,
        installPlugins:`${name}Plugin.install?.(app);`,
        exportPlugins:`export * from './${name}';`

    };
    const installFileContent = handlebars.compile(templete, {
        noEscape: true,
    })(templeteMate);
    console.log(6, installFileContent);
    // fse.outputFile(
    //     resolve(__dirname, './src/index.ts'),
    //     installFileContent,
    //     (err) => {
    //         if (err) console.log(err);
    //     }
    // );
};
/**
 * 创建组件对应文件模版
 * @param {*} name
 */
const creatComponentsFiles = async (name) => {
    let dirPath = `./src/${name}`;
    let mainPath = await mkdirVali(`${dirPath}`);
    if (mainPath) {
        let childrenPath = await Promise.all([
            mkdirVali(`${dirPath}/src`),
            mkdirVali(`${dirPath}/doc`),
        ]);
        if (!childrenPath.includes(false)) {
            let wirteComplete = await Promise.all([
                writeFilesTemplete(`${dirPath}/src/${name}.vue`, creatTemplete(name)),
                writeFilesTemplete(`${dirPath}/index.ts`, creatPluginTemplete(name)),
                writeFilesTemplete(`${dirPath}/doc/demo.vue`,creatDemoTemplete(name)),
                writeFilesTemplete(`${dirPath}/doc/README.md`,creatMdTemplete(name)),
            ]);
            if (!wirteComplete.includes(false)) {
                //初始化组件
                initComponent(name);
                console.log(`组件创建完成，请在 src/${name} 目录进行组件开发`);
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
    ]);
    const { componentName } = info;
    creatComponentsFiles(componentName);
};
creatComponents();
