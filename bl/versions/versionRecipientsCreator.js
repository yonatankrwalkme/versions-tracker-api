const configValueProvider = require('../../services/configValueProvider');

exports.generate = (version) => {
    return version.commits.map((commit) => {
        return `${commit.name}${configValueProvider.getValue("EMAILING_SUFFIX")}`
    })
};