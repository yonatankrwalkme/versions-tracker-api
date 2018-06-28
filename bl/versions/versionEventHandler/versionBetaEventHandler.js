const bluebird = require('bluebird');
const emailer = require('../../emailer/emailer');
const config = require('config');
const betaApprovalManager = require('../../betaApprovalsManager/betaApprovalsManager');
const versionRecipientsCreator = require('../versionRecipientsCreator');
const approvalLinksGenerator = require('../../betaApprovalsManager/approvalLinksGenerator');
const versionSubjectGenerator = require('../versionSubjectGenerator');

function sendToAdmins(version, approvalLinks) {
    return emailer.sendMail('version-beta-approval', {
            approvalLinks,
            version
        },
        // ["yonatan.k@walkme.com","tomer.l@walkme.com","itai.s@walkme.com"], // TODO : Redo this.
        ["yonatan.k@walkme.com"],
        versionSubjectGenerator.generate(version),
        config.get("mailing").sender)
}

function sendToIndividuals(version, approvalLinks) {
    return approvalLinks.forEach((approvalLink) => {
        return emailer.sendMail('version-beta-approval', {
                approvalLink,
                version
            },
            versionRecipientsCreator.generate(version),
            versionSubjectGenerator.generate(version),
            config.get("mailing").sender)
    });
}

exports.handle = (version) => {
    if (version.status !== "beta")
        return Promise.resolve();

    return betaApprovalManager.createApprovals(version).then((approvals) => {
        const approvalLinks = approvalLinksGenerator.generate(approvals);
        return bluebird.all([
            sendToAdmins(version, approvalLinks),
            sendToIndividuals(version, approvalLinks),
        ]);
    })
};
