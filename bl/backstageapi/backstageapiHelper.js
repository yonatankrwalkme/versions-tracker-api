const configValueProvider = require('../../services/configValueProvider');
const rp = require("request-promise");

exports.getJiraIssue = (issueKey) => {
    const backStageApiUrl = `${configValueProvider.getValue("BACKSTAGE_API_URL")}/jiraUtils/getIssueInfo?issueId=${issueKey}`;
    console.log(`getJiraIssue - trying to call : ${backStageApiUrl}`);
    const options = {
        uri : backStageApiUrl
    };
    return rp(options);
};