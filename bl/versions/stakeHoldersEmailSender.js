const configValueProvider = require('../../services/configValueProvider');
const emailer = require('../emailer/emailer');
const versionSubjectGenerator = require('./versionSubjectGenerator');

exports.sendToStakeHolders = (templateToSend, mailParams) => {
    return emailer.sendMail(templateToSend, mailParams,
        // ["yonatan.k@walkme.com", "dor.d@walkme.com"],
        ["yonatan.k@walkme.com"],
        versionSubjectGenerator.generate(mailParams.version),
        configValueProvider.getValue("EMAILING_SENDER"))
};