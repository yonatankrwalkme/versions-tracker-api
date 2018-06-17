const VersionsRepository = require('../../dal/versionsRepository');

const splitIntoBuckets = (versions) => {
    const buckets = {};

    for (var i = 0; i < versions.length; i++) {
        var version = versions[i];
        console.log(version);
        const name = version.projectName.toLowerCase();
        let workedOnBucket = buckets[name];
        if (!workedOnBucket) {
            buckets[name] = []
            workedOnBucket = buckets[name];
        }

        if (workedOnBucket.length < 2 && (workedOnBucket.length == 0 || workedOnBucket[0].buildStatus != 'complete')) {
            workedOnBucket.push(version)
        }
    }

    return buckets;
};

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
    var num = Math.round(Math.random() * 100) + 1;
    var isMale = (num % 2) === 0
    if (isMale) {
        commitData.imageUrl = `https://randomuser.me/api/portraits/men/${num}.jpg`
    } else {
        commitData.imageUrl = `https://randomuser.me/api/portraits/women/${num}.jpg`
    }
};

exports.provide = function () {
    return new Promise((resolve, reject) => {
        return VersionsRepository
            .getAll()
            .then((versions) => {
                const projectsBuckets = splitIntoBuckets(versions);
                resolve(augment(projectsBuckets));
            });

    })

};