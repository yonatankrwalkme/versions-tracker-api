const VersionModel = require('./versionModel');

function convertToDto(version) {
    return {
        projectName: version.projectName,
        status: version.status,
        commitsData: JSON.stringify(version.commitsData),
        versionData: JSON.stringify(version.versionData),
        versionId : version.versionId
    }
}

function convertToDomain(dto) {
    return {
        projectName: dto.projectName, 
        status: dto.status,
        commitsData: JSON.parse(dto.commitsData),
        versionData: JSON.parse(dto.versionData),
        versionId : dto.versionId
    }
}

exports.save = function (version) {
    return VersionModel.create(convertToDto(version));
};

exports.getAll = function (daysBack) {
    return new Promise((resolve, reject) => {
    daysBack = daysBack
        ? daysBack
        : 10;
    VersionModel.findAll({
        order: [['id', 'DESC']],
        raw : true
    }).then((dtos) => {
          resolve(dtos.map((dto) => convertToDomain(dto)));
        })
    })
};