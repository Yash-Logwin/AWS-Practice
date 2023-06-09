// For old method functions
exports.handler = (event, context, callback) => {
  const error = new Error("An error occurred");
  callback(error);
};

// For async functions
exports.handler = async (event, context, callback) => {
  const error = new Error("An error occurred");
  throw error
};

// For logging
exports.handler = async (event, context, callback) => {
  console.error("An error occurred");
  console.log("A log message");
  console.info("An informative message");
  console.warn("Warning message");
};