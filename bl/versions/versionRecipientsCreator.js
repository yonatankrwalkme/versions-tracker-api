const configValueProvider = require('../../services/configValueProvider');

exports.generate = (version) => {
    // return version.commits.map((commit) => {
    //     return `${commit.name}${configValueProvider.getValue("EMAILING_SUFFIX")}`
    // })

    return ["yonatan.k@walkme.com"] // TODO : Return this;
};