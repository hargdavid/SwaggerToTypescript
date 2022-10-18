import { fetchJsonSwagger } from "./fetchData";
import { structureData } from "./mapping/structureData";

module.exports = async () => {
  //fetch data from swagger
  const response = await fetchJsonSwagger();

  //structure data
  structureData(response["components"]["schemas"]);

  //write to dir

  console.log("Done");
};
