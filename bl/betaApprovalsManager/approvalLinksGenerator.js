const approveLinksUrl = "http://localhost:3001/respondToApprovalLink";

exports.generate = (approvals) => {
    return approvals.map((approval) => {
        return {
            committer : approval.committer,
            accept : `${approveLinksUrl}?id=${approval.id}&response=true`,
            reject : `${approveLinksUrl}?id=${approval.id}&response=false`,
        }
    })
};