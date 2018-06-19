const bluebird = require('bluebird');
const emailer = require('../../emailer/emailer');
const betaApprovalManager = require('../../betaApprovalsManager/betaApprovalsManager');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const approvalLinksGenerator = require('../../betaApprovalsManager/approvalLinksGenerator');

function generateVersionSubject(version) {
    return `Verion ${version.versionId} is in BETA`;
}

function sendToAdmins(version, approvalLinks) {
    return emailer.sendMail('version-beta-approval', {
        approvalLinks,
        version
    }, "yonatan.k@walkme.com", generateVersionSubject(version))
}

function sendToIndividuals(version, approvalLinks) {
    return approvalLinks.forEach((approvalLink) => {
        return emailer.sendMail('version-beta-approval', {
            approvalLink,
            version
        }, versionRecipientsCreator.generate(version), generateVersionSubject(version))
    })
}

exports.handle = (version) => {
    if (version.status !== "beta")
        return Promise.resolve();

    return betaApprovalManager.createApprovals(version).then((approvals) => {
        const approvalLinks = approvalLinksGenerator.generate(approvals);
        return bluebird.all([
            sendToAdmins(version, approvalLinks),
            //sendToIndividuals(version, approvalLinks),
        ]);
    })
};
