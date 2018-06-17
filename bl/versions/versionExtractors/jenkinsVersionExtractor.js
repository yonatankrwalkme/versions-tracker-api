exports.extract = (ciDataRequest) => {
    return {
        projectName : ciDataRequest.projectName,
        versionId : ciDataRequest.versionId,
        status : ciDataRequest.status,
        commits : ciDataRequest.commits,
        environment : ciDataRequest.environment
    }
};