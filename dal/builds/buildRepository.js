const BuildModel = require('./buildModel');

function convertToDto(buildData) {
    return {
        buildData: JSON.stringify(buildData)
    }
}

function convertToDomain(dto) {
    return {
        buildData: JSON.parse(dto.buildData)
    }
}

exports.save = function (build) {
    return BuildModel.create(convertToDto(build));
};

exports.getAll = function (daysBack) {
    return new Promise((resolve, reject) => {
    daysBack = daysBack
        ? daysBack
        : 10;
    BuildModel.findAll({
        order: [['id', 'DESC']],
        raw : true
    }).then((dtos) => {
          resolve(dtos.map((dto) => convertToDomain(dto)));
        })
    })
};