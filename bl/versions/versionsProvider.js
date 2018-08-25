const VersionsRepository = require('../../dal/versions/versionsRepository');
const configValueProvider = require('../../services/configValueProvider');
const bucketsSplitter = require('./bucketsSplitter');

const augment = (projectBuckets) => {
    for (projectName in projectBuckets)
        if (projectBuckets.hasOwnProperty(projectName)) {
            const versions = projectBuckets[projectName];
            for (var i = 0; i < versions.length; i++) {
                var version = versions[i];
                for (var j = 0; j < version.commits.length; j++) {
                    var commit = version.commits[j];
                    appendImage(commit);
                }

            }
        }
    return projectBuckets;
};


const appendImage = (commitData) => {
    let commitName = commitData.name;

    if (commitData.name.includes("@"))
        commitName = commitData.name.split("@")[0];

    commitName = commitName.split(".");
    let imageName = `${commitName[0].toLowerCase()}${commitName[1].toUpperCase()}.jpg`;
    commitData.imageUrl = `${configValueProvider.getValue("VERSIONS_TRACKER_CLIENT_URL")}/${imageName}`;
};

exports.provide = function () {
    return new Promise((resolve, reject) => {
        return VersionsRepository
            .getAll()
            .then((versions) => {
                const projectsBuckets = bucketsSplitter.splitIntoBuckets(versions);
                resolve(augment(projectsBuckets));
            });

    })

};