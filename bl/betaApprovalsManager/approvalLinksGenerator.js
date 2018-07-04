const configValueProvider = require('../../services/configValueProvider');
const approveLinksUrl = `${configValueProvider.getValue("VERSION_TRACKER_API_URL")}/versions/respondToApprovalLink`;

exports.generate = (approvals) => {
    return approvals.map((approval) => {
        return {
            committer : approval.committer,
            accept : `${approveLinksUrl}?id=${approval.id}&status=true`,
            reject : `${approveLinksUrl}?id=${approval.id}&status=false`,
        }
    })
};