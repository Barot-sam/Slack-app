const asyncHandler = require('../../middlewares/async');

exports.sendMeme = asyncHandler(
    async (req) => {

        console.log("send - body", req);
        await req.client.chat.postEphemeral({
            channel: req.body.channel.id,
            ts: req.body.container.message_ts,
            text: "hello babe",
            as_user: true,
            user: req.body.user.id
        })
    }
)

exports.suffelMeme = asyncHandler(
    async (req) => {
        console.log("suffel - body", req);
        await req.client.chat.update({
            token: req.body.token,
            channel: req.body.channel.id,
            ts: req.body.container.message_ts,
            text: "hello babe",
            as_user: true,
            user: req.body.user.id
        })
    }
)