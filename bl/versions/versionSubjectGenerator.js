exports.generate = (version) => {
    if (version.status.toLowerCase() === "init")
        return `${version.projectName} - STARTING DEPLOYMENT`;
    if (version.status.toLowerCase() === "deploying")
        return `${version.projectName} - PASSED BETA - DEPLOYING TO PRODUCTION`;
    if (version.status.toLowerCase() === "complete")
        return `${version.projectName} Version ${version.versionId} - deployment COMPLETE`;
    if (version.status.toLowerCase() === "fail")
        return `${version.projectName} Version ${version.versionId} - FAILED to deploy`;
    return `${version.projectName} - ${version.status.toUpperCase()}.`;
};