const bluebird = require('bluebird');
const adminSender = require('../adminEmailSender');
const emailer = require('../../emailer/emailer');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const versionSubjectGenerator = require('../versionSubjectGenerator');
const configValueProvider = require('../../../services/configValueProvider');

exports.handle = (version) => {
    if (version.status !== "fail")
        return Promise.resolve();

    return bluebird.all([
        adminSender.sendToAdmins('version-status', {version}),
        emailer.sendMail(
            `version-status`,
            {version},
            versionRecipientsCreator.generate(version),
            versionSubjectGenerator.generate(version),
            configValueProvider.getValue("EMAILING_SENDER"))
    ]);
};