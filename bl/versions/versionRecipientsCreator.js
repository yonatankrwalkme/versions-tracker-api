exports.generate = (version) => {
    return version.commits.map((commit) => {
        return `${commit.name}@walkme.com` //TODO : Take this into configuration
    })
};