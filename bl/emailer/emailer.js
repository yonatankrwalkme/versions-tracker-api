const rp = require('request-promise');
// const emailerApi = "http://backstageapi.walkme.local" // TODO : take this to configuration
const emailerApi = "http://localhost:3002/emailing"; // TODO : take this to configuration

exports.sendMail = (templateName, dataModel, recipients, subject) => {

    const mailModel = {templateName, dataModel, recipients, subject};

    var options = {
        method: 'POST',
        uri: emailerApi,
        body: mailModel,
        json: true // Automatically stringifies the body to JSON
    };
    return rp(options).catch((err) => {
        console.log(`sendMail`, err);
        return err
    });
};