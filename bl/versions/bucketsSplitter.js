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

        if (workedOnBucket.length === 0 || version.status === "complete") {
            workedOnBucket.push(version);
        }
    }

    return buckets;
};
