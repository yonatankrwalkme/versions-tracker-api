const emailer = require('../../emailer/emailer');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const versionSubjectGenerator = require('../versionSubjectGenerator');
const config = require('config');

exports.handle = (version) => {
    if (version.status !== "init" && version.status !== "complete")
        return Promise.resolve();

    return emailer.sendMail(
        `version-${version.status}`,
        {version},
        versionRecipientsCreator.generate(version),
        versionSubjectGenerator.generate(version),
        config.get("mailing").sender);
};