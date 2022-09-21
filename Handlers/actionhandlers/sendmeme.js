const asyncHandler = require('../middlewares/async');

exports.sendMeme = asyncHandler(async ({ ack, body, context, client }) => {
    // Acknowledge the button request
    ack();

    try {
        const result = await client.chat.postMessage({

        })
    }
    catch (error) {
        console.error(error);
    }
})