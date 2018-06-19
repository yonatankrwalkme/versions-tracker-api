const bluebird = require('bluebird');
const betaApprovalRepository = require('../../dal/betaApprovals/betaApprovalRepository');

exports.createApprovals = (version) => {

    const promises = [];

    version.commits.forEach((commit) => {
        const betaApproval = {
            versionId: version.versionId,
            committer: commit.name,
            status: 0
        };

        promises.push(betaApprovalRepository.save(betaApproval));
    });

    return bluebird.all(promises).then((results) => {
        const res = [];
        for (let i = 0; i < results.length; i++) {
            res.push(results[i])
        }
        return res;
    });
};