const emailer = require('../../emailer/emailer');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const versionSubjectGenerator = require('../versionSubjectGenerator');
const configValueProvider = require('../../../services/configValueProvider');
const bluebird = require('bluebird');
const featuresNotifier = require('../featuresNotifier');

function attachFeatureMailingList(featureCheckResponse) {
    const emails = ["yonatan.k@walkme.com"];
    if (!featureCheckResponse || !featureCheckResponse.isStory)
        return emails;

    return emails.concat(["dor.d@walkme.com", "assaf.c@walkme.com", "adi.g@walkme.com"]);
}

exports.handle = async (version) => {
    if (version.status !== "complete")
        return Promise.resolve();

    const featureCheckResponse = await featuresNotifier.checkForFeatureAndNotify(version);

    return bluebird.all([
        emailer.sendMail(
            `version-status`,
            {version},
            versionRecipientsCreator.generate(version).concat(attachFeatureMailingList(featureCheckResponse)),
            versionSubjectGenerator.generate(version),
            configValueProvider.getValue("EMAILING_SENDER"))
    ])
};