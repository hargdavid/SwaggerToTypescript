import { fetchJsonSwagger } from "./fetchData";
import { structureData } from "./mapping/structureData";
import fs from "fs";
import { swaggerJson } from "../mocks/swagger";
import { createEndpoints } from "./mapping/createEndpoints";
import emoji from "node-emoji";

module.exports = async () => {
  //fetch data from swagger
  /* const response = await fetchJsonSwagger(); */
  const response = swaggerJson;

  //structure data
  /* const structuredData = structureData(response["components"]["schemas"]); */
  const structuredData: string = structureData(response["definitions"]);

  const structuredEndpoints: string = createEndpoints(response["paths"]);

  //crete dir
  const typesDir = `${process.env.OUTPUT_TYPES_FOLDER_PATH}/types`;
  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir, { recursive: true });
  }

  //write to file to dir
  const writeStream = fs.createWriteStream(
    `${process.env.OUTPUT_TYPES_FOLDER_PATH}types/types.ts`
  );
  writeStream.write(structuredData);
  writeStream.end();

  //TODO make this more dynamic
  const apiDir = `${process.env.OUTPUT_TYPES_FOLDER_PATH}/api`;
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
  }

  //write to file to dir
  const newWriteStream = fs.createWriteStream(
    `${process.env.OUTPUT_TYPES_FOLDER_PATH}api/api.ts`
  );
  newWriteStream.write(structuredEndpoints);
  newWriteStream.end();

  console.log(
    `${emoji.get(
      "white_check_mark"
    )} Success: Created types and api endpoints to ${
      process.env.OUTPUT_TYPES_FOLDER_PATH
    }`
  );
};
