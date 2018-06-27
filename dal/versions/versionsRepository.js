const VersionModel = require('./versionModel');
const moment = require('moment');

function convertToDto(version) {
    return {
        projectName: version.projectName,
        status: version.status,
        commits: JSON.stringify(version.commits),
        versionId: version.versionId,
        environment: version.environment
    }
}

function convertToDomain(dto) {
    return {
        projectName: dto.projectName,
        status: dto.status,
        commits: JSON.parse(dto.commits),
        versionId: dto.versionId,
        environment: dto.environment
    }
}

exports.save = function (version) {
    return VersionModel.create(convertToDto(version));
};

exports.getById = function (versionId) {
    return VersionModel.findOne({
        where: {
            versionId: versionId
        }
    }).then((result) => {
        return convertToDomain(result);
    });
};

exports.updateStatus = (id, status) => {
    return VersionModel.update(
        {
            status: (status),
        }, {
            where: {
                id: id
            }
        });
};

exports.getAll = function (daysBack) {
    return new Promise((resolve, reject) => {
        daysBack = daysBack
            ? daysBack
            : 10;
        VersionModel.findAll({
            where: {
                createdAt: {
                    $gte: moment().subtract(daysBack, 'days').toDate()
                }
            },
            order: [['id', 'DESC']],
            raw: true
        }).then((dtos) => {
            resolve(dtos.map((dto) => convertToDomain(dto)));
        })
    })
};