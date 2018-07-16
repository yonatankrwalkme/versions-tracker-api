const uuidv1 = require('uuid/v1');

function fixUserName(emailUserName) {
    if (!emailUserName.includes("@"))
        return emailUserName;

    const emailSplit = emailUserName.split("@");
    return emailSplit[0];
}

function fixUserNames(commits) {
    return commits.map((commit) => {
        return {
            name : fixUserName(commit.name),
            commitMessage : commit.commitMessage
        }
    })
}

exports.extract = (ciDataRequest) => {
    return {
        projectName : ciDataRequest.projectName,
        versionId : ciDataRequest.versionId === "v-123" ? uuidv1() : ciDataRequest.versionId,
        status : ciDataRequest.status,
        commits : fixUserNames(ciDataRequest.commits),
        environment : ciDataRequest.environment
    }
};