const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
    // Create an instance of the STS service
    const sts = new AWS.STS();
    // Get the current time
    const currentTime = new Date();
    console.log('Current time:', currentTime);

    // Retrieve the AWS account ID
    const { Account: accountId } = await sts.getCallerIdentity().promise();

  
    // Return a response indicating success
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello world call from AWS Scheduler',
            arn: accountId
        })
    }
};
