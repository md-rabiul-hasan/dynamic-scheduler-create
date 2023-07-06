const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
    // Trigger the world Lambda function asynchronously
    invokeWorldLambda();

    // Return a response indicating success
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'I am function 1 and calling function 2',
        })
    }
};

// Function to invoke the "world" Lambda
const invokeWorldLambda = () => {
    console.log('Calling function');

    // Create an instance of the AWS.Lambda class
    const lambda = new AWS.Lambda();

    // Define the payload to be sent to the "world" Lambda function
    const payload = {
        rssId: '123456789',
    };

    // Set the parameters for invoking the "world" Lambda function
    const params = {
        FunctionName: 'aws-scheduler-dev-functionTwo', // Replace with your actual "world" Lambda function name
        InvocationType: 'Event', // Invoke asynchronously without waiting for response
        Payload: JSON.stringify(payload),
    };

    // Invoke the "world" Lambda function without waiting for a response
    lambda.invoke(params, (err, data) => {
        if (err) {
            console.error('Error invoking World Lambda:', err);
        } else {
            console.log('World Lambda triggered successfully.');
        }
    });
};
