const VersionModel = require('./versionModel');

function convertToDto(build) {
    return {
        projectName: build.projectName, 
        buildStatus: build.buildStatus, 
        commitsData: JSON.stringify(build.commitsData),
        versionData: JSON.stringify(build.versionData),
    }
}

function convertToDomain(dto) {
    return {
        projectName: dto.projectName, 
        buildStatus: dto.buildStatus, 
        commitsData: JSON.parse(dto.commitsData),
        versionData: JSON.parse(dto.versionData),
    }
}

exports.save = function (build) {
    return VersionModel.create(convertToDto(build));
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