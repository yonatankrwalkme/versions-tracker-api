const rp = require('request-promise');
const configValueProvider = require('../../services/configValueProvider');
const emailerApi = `${configValueProvider.getValue("BACKSTAGE_API_URL")}/emailing`;

exports.sendMail = (templateName, dataModel, recipients, subject, sender) => {
    const mailModel = {templateName, dataModel, recipients, subject, sender};
    const options = {
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