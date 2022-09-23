const asyncHandler = require('../../middlewares/async');
const { getrdmMeme } = require('../randomMemes/getrdmMeme');
const slackModel = require('../../models/slkModel');
const slkPhoto = require('../../models/slkPhoto');
const slkActionBtn = require('../../models/slkActionBtn');

exports.sendMeme = asyncHandler(
    async (req) => {

        await req.ack();
        const user = await req.client.users.info({
            token: req.token,
            user: req.body.user.id
        }).then(({ user }) => user)
        console.log('user', req);
        console.log('user', user);
        await req.client.chat.postMessage({
            channel: req.body.channel.id,
            icon_url: user.profile.image_original,
            username: user.name,
            text: user.name
        })
        // await req.respond({
        //     delete_original: true
        // })
    }
)

exports.suffelMeme = asyncHandler(
    async (req) => {
        const meme = getrdmMeme();

        const photoModel = slkPhoto(meme);
        await req.respond({
            replace_original: true,
            ...slackModel(photoModel, slkActionBtn)
        })
    }
)

exports.cancelMeme = asyncHandler(
    async (req) => {
        await req.respond({
            delete_original: true
        })
    }
)