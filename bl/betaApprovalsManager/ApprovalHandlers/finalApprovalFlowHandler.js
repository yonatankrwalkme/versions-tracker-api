const emailer = require('../../emailer/emailer');
const versionRecipientsCreator = require('../../versions/versionRecipientsCreator');
const versionSubjectGenerator = require('../../versions/versionSubjectGenerator');
const versionsRepository = require('../../../dal/versions/versionsRepository');
const bluebird = require('bluebird');
const configValueProvider = require('../../../services/configValueProvider');
const eventsEmitter = require('../../eventsManager/clientEventsEmitter');
const rp = require('request-promise');

exports.handle = (version) => {

    version.status = "deploying";
    const ciApproveVersionLink = `${configValueProvider.getValue('versionTrackerApiUrl')}?versionId=${version.versionId}`;
    const options = {
        uri : ciApproveVersionLink
    };

    return versionsRepository.updateStatus(version.id, version.status).then(() => {
        return bluebird.all([
            eventsEmitter.notifyBetaStatusChange(version),
            emailer.sendMail(
                `version-status`,
                {version},
                versionRecipientsCreator.generate(version),
                versionSubjectGenerator.generate(version),
                config.get("mailing").sender
            ),
            rp(options)

        ]).then((results)=> {
            return results[1];
        });
    });
};