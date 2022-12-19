import chokidar from "chokidar";
import fse from "fs-extra";
import path   from 'path';
import { dirname, resolve }  from 'path';
import { fileURLToPath } from 'url';
import { getPathExists, outputFileTo} from './libs/node';
 
const _dirname = dirname(fileURLToPath(import.meta.url));
console.log(resolve(_dirname, '../../vitePress/docs'));
import process from 'process';
const PROJECT_PATH = process.cwd();
const watcher = chokidar.watch("./src", {
    ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "*vite-env.d.ts*",
        "*index.ts*",
        "pluginList.json",
    ],
});
watcher.on("all", (event, pathname) => {
    const rootFilenames = fse.readdirSync(`${PROJECT_PATH}/src`);
    rootFilenames.forEach((file)=>{
        const newPath = path.join(PROJECT_PATH, `/src/${file}/`);
        fse.stat(newPath, (err, stats) => {
            if (err) {
                console.error(err);
            } else {
                const isDir = stats.isDirectory(); //是文件夹
                if (isDir) {
                    const subFilenanmes = fse.readdirSync(newPath);
                    subFilenanmes.forEach((sfile)=>{
                        if(sfile ==='doc'){
                            // console.log(path.join(newPath, sfile));
                            fse.copySync(path.join(newPath, sfile), resolve(_dirname, `../../vitePress/docs/${file}`));
                        }
                    });
                }
            }
        });
    });
});
