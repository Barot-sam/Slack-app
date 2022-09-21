const asyncHandler = require('../../middlewares/async');
const slackModel = require('../../models/slkModel');
const slkPhoto = require('../../models/slkPhoto');
const slkActionBtn = require('../../models/slkActionBtn');
const { getrdmMeme } = require('../randomMemes/getrdmMeme');

exports.slhMemebiz = asyncHandler(async ({ say, ack, respond }) => {
    // Acknowledge the command request
    await ack();

    try {
        const meme = getrdmMeme();
        const photoModel = slkPhoto(meme);
        const res = await respond(slackModel(photoModel, slkActionBtn));
        // const res = await respond({
        //     "response_type": "ephemeral",
        //     "text": "Sorry, slash commando, that didn't work. Please try again."
        // });
        console.log("res", res);
    }
    catch (error) {
        console.log("error", error);
        await respond("server cant'listen \n  Please contact memebiz customer support");
    }
})