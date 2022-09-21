const path = require('path');
const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
const { memePlz } = require('./Handlers/messagehandlers/memePlz');
const { slhMemebiz } = require('./Handlers/commandhandlers/memebizSlack');

dotenv.config({ path: path.join(__dirname, './config/config.env') });

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

// Listen for a actions
app.action('send_gif', async (req) => {

    console.log("body",req);
    await app.client.chat.delete({
        channel: req.body.channel.id,
        ts: req.body.container.message_ts,
        as_user: true
    })
})

// Listen for messages
app.message('meme plz', memePlz);

// Listen for a slash command
app.command('/memebiz', slhMemebiz);


(async () => {
    // Start your app
    await app.start();

    console.log('⚡️ Bolt app is running!');
})();