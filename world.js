const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
    // Get the current time
  const currentTime = new Date();
  console.log('Current bd time:', currentTime);
  
    // Return a response indicating success
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello world call from AWS Scheduler',
        })
    }
};
