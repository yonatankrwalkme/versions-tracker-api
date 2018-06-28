const config = require('config');
const approveLinksUrl = `${config.get("api").uri}/versions/respondToApprovalLink`;

exports.generate = (approvals) => {
    return approvals.map((approval) => {
        return {
            committer : approval.committer,
            accept : `${approveLinksUrl}?id=${approval.id}&status=true`,
            reject : `${approveLinksUrl}?id=${approval.id}&status=false`,
        }
    })
};