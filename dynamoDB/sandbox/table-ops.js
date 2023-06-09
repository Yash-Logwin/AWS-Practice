const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamoDB = new AWS.DynamoDB();

// list out all tables
/*
dynamoDB.listTables({}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
*/

// Describe DynamoDB table
/*
dynamoDB.describeTable({ TableName: "tb_notes_sdk" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
*/

// Create DynamoDb table
/*
dynamoDB.createTable(
  {
    TableName: "tb_notes_sdk",
    AttributeDefinitions: [
      {
        AttributeName: "user_id",
        AttributeType: "S",
      },
      {
        AttributeName: "timestamp",
        AttributeType: "N",
      },
    ],
    KeySchema: [
      {
        AttributeName: "user_id",
        KeyType: "HASH",
      },
      {
        AttributeName: "timestamp",
        KeyType: "RANGE",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);
*/

// Update DynamoDb table
/*
dynamoDB.updateTable(
  {
    TableName: "tb_notes_sdk",
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);
*/

// Delete DynamoDB table
/*
dynamoDB.deleteTable({ TableName: 'tb_notes_sdk' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
*/