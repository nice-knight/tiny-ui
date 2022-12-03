import fs from "fs";
import fse from "fs-extra";
import { dirname, resolve }  from 'path';
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));
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
        let templeStr = Object.prototype.toString.call(temple)==="[object String]"? temple: JSON.stringify(temple);
        fs.writeFile(path, templeStr, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};

/**
 * 相对路径文件读取
 * @param {*} path
 * @returns
 */
const readFilesTemplet = async (path, type = "utf-8") => {
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
 * 根据绝对路径同步读取文件 
 * @param {*} path 
 * @param {*} type 
 * @returns 
 */
const readFileTemplSync = (path, type="utf-8")=>{
    const fileTpl = fse.readFileSync(resolve(_dirname, path), type as any);
    return fileTpl;
};
/**
 * 
 * @param {*} path 写入文件的路径
 * @param {*} info 写入文件的字符串
 * @returns 
 */
const outputFileTo = async (path, info) => {
    return new Promise((resolve, reject) => {
        fse.outputFile(path, info, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};
export { readFilesTemplet, readFileTemplSync, writeFilesTemplete, outputFileTo, mkdirVali, dirExists };
