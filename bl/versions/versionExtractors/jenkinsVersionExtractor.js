const uuidv1 = require('uuid/v1');

exports.extract = (ciDataRequest) => {
    return {
        projectName : ciDataRequest.projectName,
        versionId : ciDataRequest.versionId === "v-123" ? uuidv1() : ciDataRequest.versionId,
        status : ciDataRequest.status,
        commits : ciDataRequest.commits,
        environment : ciDataRequest.environment
    }
};