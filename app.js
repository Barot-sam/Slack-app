const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, './config/config.env') });
const { app } = require('./models/app');
const { memePlz } = require('./Handlers/messagehandlers/memePlz');
const { slhMemebiz } = require('./Handlers/commandhandlers/memebizSlack');
const { sendMeme, suffelMeme } = require('./Handlers/actionhandlers/actions');

// Listen for messages
app.message('meme plz', memePlz);

// Listen for a actions
app.action('shuffel_meme', suffelMeme);
app.action('send_meme', sendMeme);

// Listen for a slash command
app.command('/memebiz', slhMemebiz);

(async () => {
    // Start your app
    await app.start();

    console.log('⚡️ Bolt app is running!');
})();