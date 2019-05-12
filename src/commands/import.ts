import { Command, flags } from "@oclif/command";

export default class Import extends Command {
  static description = "import data from selected sources";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    source: flags.string({ char: "s", description: "data source to import" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Import);

    const source = flags.source;
    this.log(`import ${source} data`);
  }
}
