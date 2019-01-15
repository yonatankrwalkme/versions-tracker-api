const configValueProvider = require('../../services/configValueProvider');
const emailer = require('../emailer/emailer');
const versionSubjectGenerator = require('./versionSubjectGenerator');

exports.sendToAdmins = (templateToSend, mailParams) => {
    return emailer.sendMail(templateToSend, mailParams,
        versionSubjectGenerator.generate(mailParams.version),
        configValueProvider.getValue("EMAILING_SENDER"))
};