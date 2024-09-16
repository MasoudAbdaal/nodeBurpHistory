import { Parser } from "xml2js";
import * as fs from "fs";

import { IXMLRoot } from "./types/IRoot";

function readFile(): void {
  const parser = new Parser();
  let root: IXMLRoot | undefined;
  fs.readFile(String(process.env.BURP_HISTORY_FILE_PATH), (er, data) => {
    parser.parseString(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      root = res.items.item[0];
      const responsed: any = atob(root?.request[0]._!);
      console.debug(root?.protocol.join(""));
      console.debug(responsed);
    });
  });
}

readFile();
