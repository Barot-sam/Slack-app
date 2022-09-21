const asyncHandler = require('../../middlewares/async');
const slkModel = require('../../models/slkModel');
const slkPhoto = require('../../models/slkPhoto');
const { getrdmMeme } = require('../randomMemes/getrdmMeme');


exports.memePlz = asyncHandler(async ({ say }) => {

    try {
        const randomPhoto = getrdmMeme();
        const photoModel = slkPhoto(randomPhoto);

        await say(slkModel(photoModel));
    }

    catch (error) {
        console.log(error);
        await say("server cant'listen \n  Please contact memebiz customer support");
    }
})