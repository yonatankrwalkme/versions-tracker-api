const BuildModel = require('./buildModel');

function buildRepository() {

    function convertToDto(build) {
        return {application: build.application, deployStatus: build.deployStatus, buildData: build.buildData}
    }

    function save(build) {
        BuildModel
            .sync({force: false})
            .then(() => {
                return BuildModel.create(convertToDto);
            });
    }

    function getAll(daysBack) {
        daysBack = daysBack ? daysBack : 10;
        BuildModel.findAll({
            where: {
                createdAt: {
                    $gt: new Date(new Date() - daysBack * 24 * 60 * 60 * 1000)
                }
            }
        })
    }

    return {save: save}
}

module.exports = buildRepository;