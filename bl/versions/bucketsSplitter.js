exports.splitIntoBuckets = (versions) => {
    const buckets = {};

    for (let i = 0; i < versions.length; i++) {
        const version = versions[i];
        console.log(version);
        const name = version.projectName.toLowerCase();
        let workedOnBucket = buckets[name];
        if (!workedOnBucket) {
            buckets[name] = [];
            workedOnBucket = buckets[name];
        }

        if (workedOnBucket.length > 0 && workedOnBucket[0].status === "complete") {
            continue;
        }

        if (workedOnBucket.length === 0 || (version.status === "complete" && workedOnBucket.length < 2)) {
            workedOnBucket.push(version);
        }
    }

    return buckets;
};
