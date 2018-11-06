const emailer = require('../../emailer/emailer');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const versionSubjectGenerator = require('../versionSubjectGenerator');
const configValueProvider = require('../../../services/configValueProvider');
const stakeHoldersEmailSender = require('../stakeHoldersEmailSender');
const bluebird = require('bluebird');
const featuresNotifier = require('../featuresNotifier');

exports.handle = (version) => {
    if (version.status !== "complete")
        return Promise.resolve();

    return bluebird.all([
        stakeHoldersEmailSender.sendToStakeHolders('version-status', {version}),
        featuresNotifier.checkForFeatureAndNotify(version),
        emailer.sendMail(
            `version-status`,
            {version},
            versionRecipientsCreator.generate(version),
            versionSubjectGenerator.generate(version),
            configValueProvider.getValue("EMAILING_SENDER"))
    ])
};