import fs from "fs";
import path from "path";
const __dirname = path.resolve();

export const createFile = (req, res) => {
  const time = new Date().getTime();
  // return res.send({
  //   message: `The server is working on fine with this time ${time} and date ${new Date().toDateString()}`,
  // });
  fs.writeFileSync(
    `${__dirname}/mnt/testing/textFile.txt`,
    "Hello world",
    (err) => {
      if (err) {
        return res.send(err);
      }
      return res.send("file Created successfully");
    }
  );
};
export const getFile = (req, res) => {
  try {
    const data = fs.readFileSync(
      `${__dirname}/mnt/testing/textFile.txt`,
      "utf8"
    );
    return res.send(data);
  } catch (err) {
    return res.send(err);
  }
};
export const deleteFile = (req, res) => {
  try {
    const data = fs.unlinkSync(`${__dirname}/mnt/testing/textFile.txt`, "utf8");
    return res.send("deleted successfully");
  } catch (err) {
    return res.send(err);
  }
};
