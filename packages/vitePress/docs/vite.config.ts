import { defineConfig } from "vite";
import prismjs from 'vite-plugin-prismjs';

export default defineConfig({
    plugins: [
        prismjs({
            // 'languages': ['javascript', 'java', 'css', 'markup', 'python'],
            languages: 'all',
            plugins: ["line-numbers"], //配置显示行号插件
            theme: "tomorrow", //主题名称  solarizedlight tomorrow twilight OKAIDIA  
            css: true,
            
          }),
    ],
    resolve:{
        alias:[
                
        ]
    }
});

