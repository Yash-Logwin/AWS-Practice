// Old method in node
/*
exports.handler = (event, context, callback) => {
    // ... function logic
    callback(null, result);
}
*/

// calling an async funtion inside handler
/*
exports.handler = async (event, context) => {
  // Where context can be use full
  context.getRemainingTimeInMillis();
  context.functionName;
  context.functionVersion;
  context.functionArn;
  context.awsRequestId;
  context.memoryLimitInMB;
  context.identity;
  context.logGroupName;
  context.logStreamName;
  context.clientContext;


  const data = event.data;
  let newImage = await resizeImage();
  return newImage;
};
*/

// Using the promise instead of callBack
/*
const resizeImage = (data) =>
  new Promise((resolve, reject) => {
    // ...
    // ...
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
*/

const moment = require("moment");
const greeting = {
  en: "Hello",
  fr: "Bonjour",
  hi: "Namaste",
  es: "Hola",
  pt: "Ola",
  ur: "Assalamo Aleikum",
  it: "Ciao",
  de: "Hallo",
};

exports.handler = async (event) => {
  const name = event.pathParameters.name;
  const { lang, ...info } = event.queryStringParameters || {};

  const message = `${greeting[lang] ? greeting[lang] : greeting.en} ${name}`;
  const response = { message, info, timestamp: moment().unix() };
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(response),
  };
};
