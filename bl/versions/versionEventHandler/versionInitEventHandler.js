const emailer = require('../../emailer/emailer');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const versionSubjectGenerator = require('../versionSubjectGenerator');
const configValueProvider = require('../../../services/configValueProvider');

exports.handle = (version) => {
    // if (version.status !== "init")
        return Promise.resolve();

    // return emailer.sendMail(
    //     `version-status`,
    //     {version},
    //     versionRecipientsCreator.generate(version),
    //     versionSubjectGenerator.generate(version),
    //     configValueProvider.getValue("EMAILING_SENDER"))
};