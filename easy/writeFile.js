const fs = require("fs");

const content = "this data is being written via fs";

const writer = () => {
  fs.writeFile("./write.txt", content, (err) => {
    if (err) {
      console.log("error has occured");
    } else {
      console.log("data written successfully");
    }
  });
};

writer();
