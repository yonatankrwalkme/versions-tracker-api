const emailGenerator = require('../../services/emailGenerator');

exports.sendMail = (templateName, dataModel, recipients, subject, sender) => {

    return emailGenerator.generateEmail(templateName, dataModel).then((email) => {

        var send = require('gmail-send')({
            user: sender,
            pass: 'hcgxx5%Up',
            to: recipients,
            subject: subject,
            html: email
        });

        return send({}, function (err, res) {
            console.log('email sending callback returned: err:', err, '; res:', res);
            return res;
        });
    });
};