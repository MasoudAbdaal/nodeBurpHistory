import * as fs from 'fs';
import { Parser } from 'xml2js';

import { IEndPoint, IShape } from '../DataStructure';
import { IXMLEntity } from './types/IXMLEntity';

function readFile(): void {
  const parser = new Parser();
  // let item: IXMLEntity | undefined;

  fs.readFile(String(process.env.BURP_HISTORY_FILE_PATH), (er, data) => {
    let finalEntity: IEndPoint = {};
    parser.parseString(data, (err, res) => {
      if (err) {
        return console.log(err?.message);
      }

      res.items.item.forEach((item: IXMLEntity) => {
        let addType;
        try {
          if (item.mimetype != undefined) {
            addType = item.mimetype![0];
          } else {
            addType = item.type![0];
          }

          if (
            item.method[0] !== 'OPTIONS' &&
            (addType == 'JSON' || addType == '' || item.extension[0] == 'null')
          ) {
            const request = atob(item?.request[0]._!);

            const reqBody = request.split('\r\n');
            const shapes: { [name: string]: IShape } = {};

            if (reqBody[reqBody.length - 1] != '') {
              try {
                const finalBody = JSON.parse(reqBody[reqBody.length - 1]);

                Object.keys(finalBody).forEach((x) => {
                  const leng = String(finalBody[x]).length;

                  shapes[x] = {
                    value: finalBody[x],
                    max: 0,
                    min: leng,
                    required: true,
                    type: typeof finalBody[x],
                  };
                });
              } catch (e) {
                console.log(e);
              }
            }

            const url = item?.path[0]!;

            finalEntity[url] = {
              url: url,
              method: item?.method[0]!,
              shape: shapes,
            };
          }
        } catch (e) {
          console.error(
            'method:',
            item.method[0],
            item.url[0],
            '\n',
            'extension:',
            item.extension[0],
            e
          );
        }
      });
    });
    fs.writeFileSync('./output.json', JSON.stringify(finalEntity), 'utf-8');
    console.log(finalEntity);
  });
}

readFile();
