const memeList = require('../../_data_/_data');

exports.getrdmMeme = () => {
    const random = Math.floor(Math.random() * memeList.length);
    return memeList[random];
}