import {readFileTemplSync, readFilesTemplet,mkdirVali, writeFilesTemplete,outputFileTo, getDirname} from './node';
import handlebars from "handlebars";
import {  resolve }  from 'path';
export const _dirname = getDirname(import.meta.url);

const TEMEPLETE_PATH = {
    //DOCS
    DOCS_README_TEMPLETE_PATH: './templetes/docs/README.md.tpl',
    DOCS_DEMO_TEMPLETE_PATH:'./templetes/docs/demo.vue.tpl',
    //SRC
    SRC_INDEX_TEMPLETE_PATH:'./templetes/src/index.vue.tpl',
    SRC_INDEXTSX_TEMPLETE_PATH:'./templetes/src/index.tsx.tpl',
    // E2E
    E2E_TEMPLETE_PATH:'./templetes/e2e/demo.spec.tpl',
    //TEST
    TEST_TEMPLETE_PATH:'./templetes/test/index.ts.tpl',
    // MAIN
    INDEX_TEMPLETE_PATH:'./templetes/index.ts.tpl',
    INSTALL_REMPLETE_PATH:'./templetes/install.ts.tpl',
    //组件list配置文件
    PlUGIN_LIST_JSON_PATH:'../../src/pluginList.json'
};

const TEMPLETE_OUTPUT_PATH = {

};
/**
 * 读取src/tsx文件模版
 * @returns 
 */
const readTsxTemplete = (name)=>{
    const templ = readFileTemplSync(TEMEPLETE_PATH.SRC_INDEXTSX_TEMPLETE_PATH);
    const templeteMate = {
        componentName: name
    };
    const content = handlebars.compile(templ, {
        noEscape: true,
    })(templeteMate);
    return content;
};
/**
 * 读取测试模版
 */
const readTestTemplet = (name)=>{
    const templ = readFileTemplSync(TEMEPLETE_PATH.TEST_TEMPLETE_PATH);
    const templeteMate = {
        componentName: name
    };
    const content = handlebars.compile(templ, {
        noEscape: true,
    })(templeteMate);
    return content;
};
/**
 * e2e模版读取
 * @param name 
 * @returns 
 */
const readTempletE2e = (name)=>{
    const templ = readFileTemplSync(TEMEPLETE_PATH.E2E_TEMPLETE_PATH);
    const templeteMate = {
        componentName: name
    };
    const content = handlebars.compile(templ, {
        noEscape: true,
    })(templeteMate);
    return content;
};

/**
 * 组件导出模版index.ts
 * @param {*} name 
 * @returns 
 */
const creatPluginTemplete = (name) => {
    const templ = readFileTemplSync(TEMEPLETE_PATH.INDEX_TEMPLETE_PATH);
    const templeteMate = {
        componentName: name
    };
    const content = handlebars.compile(templ, {
        noEscape: true,
    })(templeteMate);
    return content;
};
/**
 * src/index.vue
 * 组件编写模版
 * @param {*} name 
 * @returns 
 */
const creatTemplete = (name) => {
    const templ = readFileTemplSync(TEMEPLETE_PATH.SRC_INDEX_TEMPLETE_PATH);
    const templeteMate = {
        componentName: name
    };
    const content = handlebars.compile(templ, {
        noEscape: true,
    })(templeteMate);
    return content;
};
/**
 * doc/README.md文件模版
 * @param {*} name 
 * @returns 
 */
const  creatMdTemplete = (name) => {
    const templ = readFileTemplSync(TEMEPLETE_PATH.DOCS_README_TEMPLETE_PATH);
    const templeteMate = {
        componentName: name
    };
    const MkileContent = handlebars.compile(templ, {
        noEscape: true,
    })(templeteMate);
    return MkileContent;
};

/***
  * doc/demo.vue文件模版
 * @param {*} name 
 * @returns 
 */
const creatDemoTemplete = (name)=>{
    const templ = readFileTemplSync(TEMEPLETE_PATH.DOCS_DEMO_TEMPLETE_PATH);
    const templeteMate = {
        componentName: name
    };
    const content = handlebars.compile(templ, {
        noEscape: true,
    })(templeteMate);
    return content;
};
/**
 * 组件注册初始化
 * @returns 
 */
const insetComponentInstallTemplete =(name)=>{
    const templ = readFileTemplSync(TEMEPLETE_PATH.INSTALL_REMPLETE_PATH);
    return templ;
};
/**
 * 读取 packages/ui/src/pluginList.json 并更新
 * @param meta 
 * @returns 
 */
const writePluginListJson = async(meta)=>{
    let filePath = resolve(_dirname, TEMEPLETE_PATH.PlUGIN_LIST_JSON_PATH);
    let pluginList:any = await readFilesTemplet(filePath);
    const pluginListContent = JSON.parse(pluginList);
    pluginListContent.push(meta);
    const newListFileContentFile = JSON.stringify(pluginListContent, null, 2);
    const updateTemplete = await writeFilesTemplete(filePath, newListFileContentFile);
    if(updateTemplete){
        return pluginListContent;
    }
};


/**
 * 组件注册
 * @param {*} name 
 */
const initComponent = (name, list)=>{
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
    return installFileContent;
};
/**
 * 创建模版路径
 * @param info 
 * @returns 
 */
const mkAllDir = async (info) =>{
    const { componentName } = info;
    let dirPath = resolve(_dirname, `../../src/${componentName}`);
    let mainPath = await mkdirVali(`${dirPath}`);
    if (mainPath) {
        let childrenPath = await Promise.all([
            mkdirVali(`${dirPath}/src`),
            mkdirVali(`${dirPath}/doc`),
            mkdirVali(`${dirPath}/e2e`),
            mkdirVali(`${dirPath}/test`),
        ]);
        return childrenPath;
    }
};
/**
 * 写入模版到组件
 * @param info 
 * @returns 
 */
const writeAllTempleteToFiles = async(info)=>{
    const { componentName } = info;
    let dirPath = resolve(_dirname, `../../src/${componentName}`);
    let wirteComplete = await Promise.all([
        outputFileTo(`${dirPath}/src/${componentName}.vue`, creatTemplete(componentName)),
        outputFileTo(`${dirPath}/index.ts`, creatPluginTemplete(componentName)),
        outputFileTo(`${dirPath}/doc/demo.vue`,creatDemoTemplete(componentName)),
        outputFileTo(`${dirPath}/doc/README.md`,creatMdTemplete(componentName)),
        outputFileTo(`${dirPath}/e2e/${componentName}.spec.tsx`,readTempletE2e(componentName)),
        outputFileTo(`${dirPath}/test/index.ts`,readTestTemplet(componentName)),
    ]);
    return wirteComplete;
};
/**
 * tsx组件文件创建
 * @param info 
 * @returns 
 */
const writeAllTempleteToTSXFiles = async(info)=>{
    const { componentName } = info;
    let dirPath = resolve(_dirname, `../../src/${componentName}`);
    let wirteComplete = await Promise.all([
        outputFileTo(`${dirPath}/src/${componentName}.tsx`, readTsxTemplete(componentName)),
        outputFileTo(`${dirPath}/index.ts`, creatPluginTemplete(componentName)),
        outputFileTo(`${dirPath}/doc/demo.tsx`,creatDemoTemplete(componentName)),
        outputFileTo(`${dirPath}/doc/README.md`,creatMdTemplete(componentName)),
        outputFileTo(`${dirPath}/e2e/${componentName}.spec.tsx`,readTempletE2e(componentName)),
        outputFileTo(`${dirPath}/test/index.ts`,readTestTemplet(componentName)),
    ]);
    return wirteComplete;
};
export { initComponent, readTestTemplet, readTsxTemplete, writeAllTempleteToFiles, mkAllDir, readTempletE2e, writeAllTempleteToTSXFiles,insetComponentInstallTemplete,
    writePluginListJson, creatDemoTemplete, creatMdTemplete, creatTemplete, creatPluginTemplete};
