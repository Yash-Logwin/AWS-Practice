const im = require("imagemagick");
const fs = require("fs");
const os = require("os");
const uuidV4 = require("uuid").v4();
const { promisify } = require("util");
const AWS = require("aws-sdk");

const resizeAsync = promisify(im.resize);
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);

AWS.config.update({ region: "us-east-1" });
const s3 = new AWS.S3();

exports.handler = async (event) => {
  const filesProcessed = event.Records.map(async (record) => {
    const bucket = record.s3.bucket.name;
    const filename = record.s3.object.name;

    // Get file from s3
    let params = {
      Bucket: bucket,
      Key: filename,
    };
    const inputData = await s3.getObject(params).promise();

    console.log("==>> 1 DONE");

    // Resize the file
    const tempFile = `${os.tmpdir()}/${uuidV4()}.jpg`;
    const resizeArgs = {
      srcData: inputData.Body,
      dstPath: tempFile,
      width: 150,
    };
    await resizeAsync(resizeArgs);

    console.log("==>> 2 DONE");

    // Read the resized file
    const resizedData = await readFileAsync(tempFile);

    console.log("==>> 3 DONE");

    // Upload the new file to s3 bucket
    const targetFilename = `${filename.substring(
      0,
      filename.lastIndexOf(".")
    )}-small.jpg`;
    params = {
      Bucket: bucket + "-dest",
      Key: targetFilename,
      Body: new Buffer(resizedData),
      ContentType: "image/jpeg",
    };

    console.log("==>> 4 DONE");

    await s3.putObject(params).promise();
    return await unlinkAsync(tempFile);
  });

  await Promise.all(filesProcessed);
  console.log("Done");
  return "Done";
};
