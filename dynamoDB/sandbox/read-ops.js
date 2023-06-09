const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

// Find by ID and sortkeys
/*
docClient.get(
  {
    TableName: "tb_notes_sdk",
    Key: {
      user_id: "u4",
      timestamp: 4,
    },
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
*/

// Find by query
/*
docClient.query(
  {
    TableName: "tb_notes_sdk",
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
      ":uid": "u4",
    },
    ScanIndexForward: false,
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
*/

// Scan items from table
/*
docClient.scan(
  {
    TableName: "tb_notes",
    FilterExpression: "cat = :cat",
    ExpressionAttributeValues: {
      ":cat": "general",
    },
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
*/

// Batch get from multiple tables
docClient.batchGet(
  {
    RequestItems: {
      tb_notes_sdk: {
        Keys: [
          {
            user_id: "u4",
            timestamp: 4,
          },
        ],
      },
      tb_notes: {
        Keys: [
          {
            user_id: "u1",
            timestamp: 1686054496,
          },
        ],
      },
    },
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
