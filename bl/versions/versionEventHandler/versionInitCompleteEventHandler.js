const emailer = require('../../emailer/emailer');
const versionRecipientsCreator = require('../versionRecipientsCreator');

exports.handle = (version) => {
    if (version.status !== "init" &&  version.status !== "complete")
        return Promise.resolve();

    return emailer.sendEmail(`version-${version.status}`, {version}, versionRecipientsCreator.create(version))
};