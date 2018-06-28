const betaApprovalRepository = require('../../dal/betaApprovals/betaApprovalRepository');
const versionsRepository = require('../../dal/versions/versionsRepository');
const finalApprovalFlowHandler = require('./ApprovalHandlers/finalApprovalFlowHandler');
const eventsEmitter = require('../eventsManager/clientEventsEmitter');

const handlePositiveApproval = (approval) => {
    return betaApprovalRepository.getPendingApprovalRequests(approval).then((pendingApprovalRequests) => {
        eventsEmitter.notifyBetaStatusChange(approval);
        if (pendingApprovalRequests.length === 0) {
            return versionsRepository.getById(approval.versionId).then((version) => {
                return finalApprovalFlowHandler.handle(version);
            });
        }
    })
};

const handleNegativeFalse = (approvalRequest) => {

};

exports.handle = (req) => {
    const approvalRequest = req.query;
    return betaApprovalRepository.updateStatus(approvalRequest).then((approval) => {
        if (approval.status === true) {
            return handlePositiveApproval(approval);
        } else {
            return handleNegativeFalse(approval);
        }
    })
};