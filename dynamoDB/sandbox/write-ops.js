const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

// Create / Update Item in table
/*
// If item exists with primary key, Put method will overwrite the item
docClient.put(
  {
    TableName: "tb_notes_sdk",
    Item: {
      user_id: "u1",
      timestamp: 1, // Primary key
      title: "title u1",
      content: "content u1",
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

// Update Item in table
/*
docClient.update(
  {
    TableName: "tb_notes_sdk",
    Key: {
      user_id: "u1",
      timestamp: 1,
    },
    UpdateExpression: "set #t = :t",
    ExpressionAttributeNames: { "#t": "title" },
    ExpressionAttributeValues: { ":t": "update title u1" },
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

// Delete Item in table
/*
docClient.delete(
  {
    TableName: "tb_notes_sdk",
    Key: {
      user_id: "u1",
      timestamp: 1,
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

// Batch Write Items in table
/*
docClient.batchWrite(
  {
    RequestItems: {
      tb_notes_sdk: [
        // delete item
        {
          DeleteRequest: {
            Key: {
              user_id: "u1",
              timestamp: 1,
            },
          },
        },
        // update item if exists
        {
          PutRequest: {
            Item: {
              user_id: "u3",
              timestamp: 3,
              title: "hgere title u1",
              content: "updated content u1",
            },
          },
        },
        // create new item
        {
          PutRequest: {
            Item: {
              user_id: "u4",
              timestamp: 4,
              title: "hehe title u4",
              content: "created content u4",
            },
          },
        },
      ],
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
