const BetaApprovalModel = require('./betaApprovalModel');

function convertToDto(betaApproval) {
    return {
        versionId: betaApproval.versionId,
        committer: betaApproval.committer,
        status: betaApproval.status,
    }
}

function convertToDomain(dto) {
    return {
        versionId: dto.versionId,
        committer: dto.committer,
        status: dto.status,
    }
}

exports.save = function (build) {
    return BetaApprovalModel.create(convertToDto(build)).then((result) => {
        return result.dataValues;
    });
};

exports.getAll = function (versionId) {
    return new Promise((resolve, reject) => {
        daysBack = daysBack
            ? daysBack
            : 10;
        BetaApprovalModel.findAll({
            order: [['id', 'DESC']],
            raw: true
        }).then((dtos) => {
            resolve(dtos.map((dto) => convertToDomain(dto)));
        })
    })
};