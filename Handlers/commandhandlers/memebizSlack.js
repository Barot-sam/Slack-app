const asyncHandler = require('../../middlewares/async');
const slackModel = require('../../models/slkModel');
const slkPhoto = require('../../models/slkPhoto');
const slkActionBtn = require('../../models/slkActionBtn');
const { getrdmMeme } = require('../randomMemes/getrdmMeme');

exports.slhMemebiz = asyncHandler(async ({ say, ack, respond, body }) => {
    // Acknowledge the command request
    await ack();

    try {
        const meme = getrdmMeme();
        console.log('body :- ', body);
        const photoModel = slkPhoto(meme);
        await respond(slackModel(photoModel, slkActionBtn));
    }
    catch (error) {
        console.log("error", error);
        await respond("server cant'listen \n  Please contact memebiz customer support");
    }
})