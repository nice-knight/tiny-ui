#!/usr/bin/env node

import inquirer from "inquirer";
import { initComponent, writePluginListJson,mkAllDir, writeAllTempleteToFiles} from './libs/temp';
import {  outputFileTo} from './libs/node';

/**
 * 创建组件对应文件模版
 * @param {*} name
 */
const creatComponentsTemplete = async (info) => {
    const { componentName } = info;
    let childrenPath:any =await mkAllDir(info);
    if (childrenPath&& !childrenPath.includes(false)) {
        let wirteComplete = await writeAllTempleteToFiles(info);
        if (!wirteComplete.includes(false)) {
            //初始化组件
            console.log(`组件创建完成，请在 src/${componentName} 目录进行组件开发`);
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
        {
            type: "list",
            message: "选择要新增的类型",
            choices: [".tsx", ".vue"],
            name: "type",
        },
    ]);
  
    info.type='组件';
    info.isNotPlugin = false;
    info.compZhName = '基础组件';
    return info;
};

// 创建组件脚本主入口
const run = async ()=>{
    let info =await creatComponents();
    const  {componentName} = info;
    creatComponentsTemplete(info);
    // 更新组件list文件
    const pluginlist = await writePluginListJson(info);
    let installFileContent =  initComponent(componentName, pluginlist);
    let outputinfo = await outputFileTo('./src/index.ts', installFileContent);
    if(outputinfo){
        console.log(`组件自动注册注册成功`);
    }
};
run();

