exports.handle = (version) => {
    if (version.status !== "fail")
        return Promise.resolve();

        return bluebird.all([
            adminSender.sendToAdmins('version-status',{version, approvalLinks}),
            emailer.sendMail(
                `version-status`,
                {version},
                versionRecipientsCreator.generate(version),
                versionSubjectGenerator.generate(version),
                configValueProvider.getValue("EMAILING_SENDER"))
                ]);
};