exports.generate = (version) => {
    if (version.status.toLowerCase() === "init")
        return `STARTING DEPLOYMENT of ${version.projectName} Version ${version.versionId}`;
    if (version.status.toLowerCase() === "complete")
        return `${version.projectName} Version ${version.versionId} - deployment COMPLETE`;
    return `${version.projectName} Version ${version.versionId} is in ${version.status.toUpperCase()}.`;
};