const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  // Create an instance of the AWS SDK
  const cloudwatchEvents = new AWS.CloudWatchEvents();
  const lambda = new AWS.Lambda();

  try {
    // Define the rule parameters for NewsAsset1
    const ruleParams = {
      Name: 'NewsAsset1',
      Description: 'news asset 1',
      ScheduleExpression: 'rate(1 minute)',
      State: 'ENABLED',
    };

    // Create the rule for NewsAsset1
    const ruleResponse = await cloudwatchEvents.putRule(ruleParams).promise();

    // Define the target parameters for NewsAsset1
    const targetParams = {
      Rule: 'NewsAsset1',
      Targets: [
        {
          Arn: "arn:aws:lambda:us-east-1:947677187707:function:aws-scheduler-dev-world",
          Id: 'NewsAsset1',
        },
      ],
    };

    // Create the target for NewsAsset1
    const targetResponse = await cloudwatchEvents.putTargets(targetParams).promise();

    // Log the response or perform other operations
    console.log('Scheduler created for NewsAsset1:', ruleResponse, targetResponse);

    // Retrieve the ARN of the Lambda function
    const lambdaFunctionArn = "arn:aws:lambda:us-east-1:947677187707:function:aws-scheduler-dev-world";

    // Define the permission parameters for NewsAsset1
    const permissionParams = {
      FunctionName: lambdaFunctionArn,
      StatementId: 'NewsAsset1',
      Action: 'lambda:InvokeFunction',
      Principal: 'events.amazonaws.com',
      SourceArn: ruleResponse.RuleArn,
    };

    // Add permission to allow CloudWatch Events to invoke the Lambda function for NewsAsset1
    await lambda.addPermission(permissionParams).promise();


    // Define the rule parameters for NewsAsset2
    const ruleParams2 = {
      Name: 'NewsAsset2',
      Description: 'NewsAsset2 scheduled rule',
      ScheduleExpression: 'rate(1 minute)',
      State: 'ENABLED',
    };

    // Create the rule for NewsAsset2
    const ruleResponse2 = await cloudwatchEvents.putRule(ruleParams2).promise();

    // Define the target parameters for NewsAsset2
    const targetParams2 = {
      Rule: 'NewsAsset2',
      Targets: [
        {
          Arn: "arn:aws:lambda:us-east-1:947677187707:function:aws-scheduler-dev-world",
          Id: 'NewsAsset2',
        },
      ],
    };

    // Create the target for NewsAsset2
    const targetResponse2 = await cloudwatchEvents.putTargets(targetParams2).promise();

    // Log the response or perform other operations
    console.log('Scheduler created for NewsAsset2:', ruleResponse2, targetResponse2);

    // Retrieve the ARN of the Lambda function
    const lambdaFunctionArn2 = "arn:aws:lambda:us-east-1:947677187707:function:aws-scheduler-dev-world";

    // Define the permission parameters for NewsAsset2
    const permissionParams2 = {
      FunctionName: lambdaFunctionArn2,
      StatementId: 'NewsAsset2',
      Action: 'lambda:InvokeFunction',
      Principal: 'events.amazonaws.com',
      SourceArn: ruleResponse2.RuleArn,
    };

    // Add permission to allow CloudWatch Events to invoke the Lambda function for NewsAsset2
    await lambda.addPermission(permissionParams2).promise();

    // Return a response indicating success
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Scheduler created successfully and trigger added to the Lambda function',
        input: event,
      }),
    };
  } catch (error) {
    // Handle any errors
    console.error('Error creating scheduler:', error);

    // Return a response indicating failure
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error creating scheduler',
        error: error.message,
        input: event,
      }),
    };
  }
};
