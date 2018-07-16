const configValueProvider = require('../../services/configValueProvider');
const emailer = require('../emailer/emailer');
const versionSubjectGenerator = require('./versionSubjectGenerator');

exports.sendToAdmins = (templateToSend, mailParams) => {
    return emailer.sendMail(templateToSend, mailParams,
        // ["yonatan.k@walkme.com","tomer.l@walkme.com","itai.s@walkme.com"], // TODO : Redo this.
        ["yonatan.k@walkme.com"],
        versionSubjectGenerator.generate(mailParams.version),
        configValueProvider.getValue("EMAILING_SENDER"))
};