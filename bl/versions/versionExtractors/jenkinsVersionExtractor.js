const uuidv1 = require('uuid/v1');

const fixToUserName = (commitName) => {

    const githubusers = {
        "itayadler": "itay.a"
    };

    let githubUserToUser = githubusers[commitName];
    return githubUserToUser ? githubUserToUser : commitName;
};


function fixUserName(emailUserName) {
    if (!emailUserName.includes("@"))
        return fixToUserName(emailUserName);

    let emailSplit = emailUserName.split("@")[0];

    emailSplit = fixToUserName(emailSplit);

    return emailSplit;
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