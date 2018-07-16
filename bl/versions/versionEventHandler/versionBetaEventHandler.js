const bluebird = require('bluebird');
const emailer = require('../../emailer/emailer');
const configValueProvider = require('../../../services/configValueProvider');
const betaApprovalManager = require('../../betaApprovalsManager/betaApprovalsManager');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const approvalLinksGenerator = require('../../betaApprovalsManager/approvalLinksGenerator');
const versionSubjectGenerator = require('../versionSubjectGenerator');
const adminSender = require('../adminEmailSender');

function sendToIndividuals(version, approvalLinks) {
    return approvalLinks.forEach((approvalLink) => {
        return emailer.sendMail('version-beta-approval', {
                approvalLink,
                version
            },
            versionRecipientsCreator.generate(version),
            versionSubjectGenerator.generate(version),
            configValueProvider.getValue("EMAILING_SENDER"))
    });
}

exports.handle = (version) => {
    if (version.status !== "beta")
        return Promise.resolve();

    return betaApprovalManager.createApprovals(version).then((approvals) => {
        const approvalLinks = approvalLinksGenerator.generate(approvals);
        return bluebird.all([
            adminSender.sendToAdmins('version-beta-approval', {version, approvalLinks}),
            sendToIndividuals(version, approvalLinks),
        ]);
    })
};
