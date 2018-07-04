const configValueProvider = require('../../services/configValueProvider');
const approveLinksUrl = `${configValueProvider.getValue("versionTrackerApiUrl")}/versions/respondToApprovalLink`;

exports.generate = (approvals) => {
    return approvals.map((approval) => {
        return {
            committer : approval.committer,
            accept : `${approveLinksUrl}?id=${approval.id}&status=true`,
            reject : `${approveLinksUrl}?id=${approval.id}&status=false`,
        }
    })
};