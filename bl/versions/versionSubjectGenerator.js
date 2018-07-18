exports.generate = (version) => {
    const title = `${version.projectName} - ${version.versionId}`;
    if (version.status.toLowerCase() === "init")
        return `${title} - STARTING DEPLOYMENT`;
    if (version.status.toLowerCase() === "deploying")
        return `${title} - PASSED BETA - DEPLOYING TO PRODUCTION`;
    if (version.status.toLowerCase() === "complete")
        return `${title} - DEPLOYMENT COMPLETE`;
    if (version.status.toLowerCase() === "fail")
        return `${title} - FAILED TO DEPLOY`;
    return `${version.projectName} - ${version.status.toUpperCase()}.`;
};