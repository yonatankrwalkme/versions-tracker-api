const extractors = [require('./jenkinsVersionExtractor')];

exports.extract = (ciRequestData) => {
    const versions = extractors.map((extractor) => {
        return extractor.extract(ciRequestData)
    });
    if (versions.length > 0)
        return versions[0];
    return null
};
