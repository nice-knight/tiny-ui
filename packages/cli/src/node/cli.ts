import { cac } from "cac";

const version = require("../../package.json").version;

const cli = cac("tiny-ui").version(version).help();

cli
  .command("[root]", "start dev server")
  .alias("dev")
  .action(async (root: string) => {
    console.log("dev", root);
  });

cli
  .command("build [root]", "build for production")
  .action(async (root: string) => {
    console.log("build", root);
  });


cli.command("gen [name]","create component").action(
    async (name: string) => {
        console.log("创建了个组件：", name);
      }
)


cli.parse();