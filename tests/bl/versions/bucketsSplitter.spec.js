const assert = require('chai').assert;
const target = require('../../../bl/versions/bucketsSplitter');

function generateComplete() {
    return {
        projectName: "abc",
        status: "complete"
    }
}

function generateBeta() {
    return {
        projectName: "abc",
        status: "beta"
    }
}

function generateInit() {
    return {
        projectName: "abc",
        status: "init"
    }
}

function generateFail() {
    return {
        projectName: "abc",
        status: "fail"
    }
}

describe('bucketSplitter', function () {
    describe('splitIntoBuckets', function () {
        it('should return complete only', function () {
            const inputVersions = [generateComplete(), generateBeta(), generateInit()];
            const result = target.splitIntoBuckets(inputVersions);

            assert.equal(result["abc"].length, 1, "length is equal to 1");
            assert.equal(result["abc"][0].status, "complete");
        });

        it('should return beta and complete ', function () {
            const inputVersions = [generateBeta(), generateInit(), generateComplete()];
            const result = target.splitIntoBuckets(inputVersions);

            assert.equal(result["abc"].length, 2, "length is equal to 2");
            assert.equal(result["abc"][0].status, "beta");
            assert.equal(result["abc"][1].status, "complete");
        });

        it('should return beta and complete ', function () {
            const inputVersions = [generateFail(), generateBeta(), generateComplete()];
            const result = target.splitIntoBuckets(inputVersions);

            assert.equal(result["abc"].length, 2, "length is equal to 2");
            assert.equal(result["abc"][0].status, "fail");
            assert.equal(result["abc"][1].status, "complete");
        });
    });
});