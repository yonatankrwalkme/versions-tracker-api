const config = require('config');

exports.generate = (version) => {
    // return version.commits.map((commit) => {
    //     return `${commit.name}${config.get("mailing").suffix}`
    // })

    return ["yonatan.k@walkme.com"] // TODO : Return this;
};