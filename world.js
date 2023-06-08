const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  // Get the current time
  const currentTime = new Date();
  console.log('Current bd time:', currentTime);

  // Fetch and log the scheduler input value
  if (event.hasOwnProperty('schedulerInput')) {
    console.log('Scheduler input value:', event.schedulerInput);
  }

  // Return a response indicating success
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world call from AWS Scheduler',
    }),
  };
};
