export const structureData = (data: unknown) => {
  const dataKeys: string[] = Object.keys(data);

  dataKeys.forEach((dataKey) => {
    if (data[dataKey].type === "object") {
    }
    // check type "type"
    // go into properties if object
    // check keys in properties and check format
    // check format
    // check if enum exists in string
    // ref should just be a type to another definition
    // write to filename

    console.log(`${dataKey}`, data[dataKey]);
  });
};
