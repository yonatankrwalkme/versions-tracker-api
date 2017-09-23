var express = require('express');
var router = express.Router();
var eventsManager = require('../bl/eventsManager/index')();

const versions_data = [
    {
        applicationData: {
            application: "Visions",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234",
            status: "completed"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]

    }, {
        applicationData: {
            application: "WalkMe Editor",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234",
            status: "deploying"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]

    }, {
        applicationData: {
            application: "WalkMe Store",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234",
            status: "reverted"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]

    }, {
        applicationData: {
            application: "WalkMe PCA",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234",
            status: "reverted"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]

    }, {
        applicationData: {
            application: "WalkMe EA",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.1.234",
            status: "reverted"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]

    }, {
        applicationData: {
            application: "Walkme Lib",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234",
            status: "reverted"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]

    }, {
        applicationData: {
            application: "Visions",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234",
            status: "reverted"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]

    }, {
        applicationData: {
            application: "Visions",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234",
            status: "reverted"
        },
        committers: [
            {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }, {
                committer: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }
        ]
    }
];

router.get('/', function (req, res, next) {
    res.json(versions_data);
});

router.get('/notifyChange', function (req, res, next) {
    console.log('notifyingChange');
    eventsManager.notifyVersionChange(versions_data[0]);
    res.json("OK");
})

module.exports = router;