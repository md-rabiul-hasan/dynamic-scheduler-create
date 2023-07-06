module.exports.handler = async (event) => {
    const rssId = event.rssId;

    console.log('Fetched rssId:', rssId);

    console.log('Function 2 calling callback');

    // Modify the response body with the extracted rssId
    const responseBody = {
        message: 'I am function 2',
        rssId: rssId,
    };

    // Return a response indicating success
    return {
        statusCode: 200,
        body: JSON.stringify(responseBody),
    };
};
