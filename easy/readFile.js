const fs = require("fs");

const reader = async () => {
  const response = await fs.readFile("./read.txt", "utf-8", (err, data) => {
    console.log(data);
  });
};

reader();
