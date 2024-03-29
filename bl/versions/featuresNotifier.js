var regex = /(\w*VIS-\w*)/g;
const backstageApiHelper = require('../backstageapi/backstageapiHelper');
const clientEventsEmitter = require('../eventsManager/clientEventsEmitter');

function getFeatureId(version) {
    var found = version.commits[0].commitMessage.match(regex);
    if (!found || found.length === 0)
        return false;

    return found[0];
}

exports.checkForFeatureAndNotify = async (version) => {
    const featureKey = getFeatureId(version);
    if (!featureKey)
        return Promise.resolve();

    const feature = JSON.parse(await backstageApiHelper.getJiraIssue(featureKey));
    console.log(`feature =  ${JSON.stringify(feature)}`);
    let isStory = feature.fields.issuetype.name === "Story";
    if (!isStory || !feature.fields.assignee) {
        console.log(`checkForFeatureAndNotify - resolving empty : issuetype.name - ${feature.fields.issuetype.name}, feature.fields.assignee - ${feature.fields.assignee}`)
        return Promise.resolve();
    }

    version.summery = feature.fields.summary;
    version.key = feature.key;

    const newFeatureData = {
        "featureOwner": feature.fields.assignee.name,
        "featureName": feature.fields.summary,
        "isStory" : isStory
    };

    await clientEventsEmitter.newFeatureDeployedEvent(newFeatureData);

    return Promise.resolve(newFeatureData);
};
