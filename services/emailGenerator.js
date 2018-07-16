const Handlebars = require('handlebars');

Handlebars.registerHelper('convertToDisplayablePercentage', (num) => {
   return Math.floor(num * 100);
});

const fs = require('fs');

const emailMappings = {
    'version-status' : './bl/versions/versionStatus.html',
    'version-beta-approval' : './bl/versions/versionBetaApproval.html'
};

function generateEmail(templateName, dataModel) {
    return new Promise((resolve, reject) => {
        fs.readFile(emailMappings[templateName], 'utf8', function (err, data) {
            const template = Handlebars.compile(data);
            resolve(template(dataModel));
        });
    })
}

exports.generateEmail = generateEmail;
