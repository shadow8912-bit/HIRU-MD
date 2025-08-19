const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WQcSFDaA#Wy8TzQevHwZqHbK_K0f1gdkBQ2y-oyF5wjSqjKc-Syo", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:sjjkkd",  //ඔයාගෙ mongoDb url එක
};
 
