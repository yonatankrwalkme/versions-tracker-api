const BetaApprovalModel = require('./betaApprovalModel');

function convertToDto(betaApproval) {
    return {
        id: betaApproval.Id,
        versionId: betaApproval.versionId,
        committer: betaApproval.committer,
        status: betaApproval.status,
    }
}

function convertToDomain(dto) {
    return {
        id: dto.id,
        versionId: dto.versionId,
        committer: dto.committer,
        status: dto.status === 1,
    }
}

exports.save = function (betaApproval) {
    return BetaApprovalModel.create(convertToDto(betaApproval)).then((result) => {
        return result.dataValues;
    });
};

function getById (id) {
    return BetaApprovalModel.findById(id).then((result) => {
        return convertToDomain(result);
    })
}

exports.updateStatus = function (betaApprovalRequest) {
    return BetaApprovalModel.update(
        {
            status: (betaApprovalRequest.status === 'true'),
        },{
            where: {
                id: betaApprovalRequest.id
            }
        }).then(() => {
            return getById(betaApprovalRequest.id);
        }
    )
};

exports.getPendingApprovalRequests = (betaApprovalRequest) => {
    return new Promise((resolve, reject) => {
        // const daysBack = daysBack
        //     ? daysBack
        //     : 10;
        BetaApprovalModel.findAll({
            where: {
                status: false,
                versionId: betaApprovalRequest.versionId
            },
            raw: true
        }).then((dtos) => {
            resolve(dtos.map((dto) => convertToDomain(dto)));
        })
    })
};

// exports.getAll = function () {
//     return new Promise((resolve, reject) => {
//         BetaApprovalModel.findAll({
//             order: [['id', 'DESC']],
//             raw: true
//         }).then((dtos) => {
//             resolve(dtos.map((dto) => convertToDomain(dto)));
//         })
//     })
// };