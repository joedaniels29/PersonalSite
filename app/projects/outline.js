import Ember from 'ember';

export default {
    "skills": [
        {name: "Swift"}, {name: "Objective-C"}, {name: "C"}, {name: "C++"}, {name: "ReactiveCocoa"},
        {name: "Core Data"}, {name: "Ruby"}, {name: "Rails"}, {name: "JRuby"}, {name: "Gem Development"},
        {name: "ActiveRecord"}, {name: "Javascript (ES6)"}, {name: "Ember.js"}, {name: "jQuery"}, {name: "CoffeeScript"},
        {name: "Cordova"}, {name: "Node.js"}, {name: "NPM Package Development"}, {name: "Express"}, {name: "Appgyver Supersonic/Steroids"},
        {name: "HTML"}, {name: "SCSS"}, {name: "LESS"}, {name: "Bootstrap"}, {name: "Git"},
        {name: "SDLC"}, {name: "Agile"}, {name: "Wireframing"}, {name: "Mockups"}, {name: "Prototyping"},
        {name: "PostgreSQL"}, {name: "Python"}, {name: "Asterisk PBX with WebRTC"}, {name: "ZSH"}, {name: "Bash"},
        {name: "Mathematica"}, {name: "Lisp"},
    ],
    "hopkins": [
        {
            "tagline": "",
            "name": "Radiologists Engaging and Collaborating in Healthcare (REACH)",
            "color": {"primary":"#FFC700", "secondary":"#515BB2",},
            "id": "reach",
            "icon": "",
            "logo":"",
            "headshot": "",
            "screenshots": [],
            "news": [],
            "customClasses": ["grid-item-big"],
            "description": "An iOS teleconsultation application connecting radiologists to clinicians.",
            "technologies": [7, 8, 9, 10, 11, 12, 13, 14],
            'content': [
                "Designed/Built/Maintain iOS application in Swift and Objective-C.",
                "Embedded enterprise clinical medical image viewer into native iOS client application.",
                "Leveraged open source where possible: SIP video soft-phone library Liblinphone, JSON modeling framework Mantle, networking framework Alamofire, functional reactive programming",
                "Built web client with Ember.js leveraging WebRTC library SIP.js to connect iOS clients to Chrome, Firefox users.",
                "Configured a HIPAA compliant on-site Asterisk PBX server for WebRTC and h.264.",
            ]

        },

        {
            "name": "OASIS",
            "tagline": "",
            "color": {"primary":"#81a2be"},
            "customClasses": [],
            "id": "oasis",
            "icon": "",
            "logo":"",
            "headshot": "",
            "screenshots": [],
            "news": [],
            "description": "Clinical data research tool",
            "technologies": [],
            'content': [
                "Designed/Built/Maintain iOS application in Swift and Objective-C.",
                "Embedded enterprise clinical medical image viewer into native iOS client application.",
                "Leveraged open source where possible: SIP video soft-phone library Liblinphone, JSON modeling framework Mantle, networking framework Alamofire, functional reactive programming",
                "Built web client with Ember.js leveraging WebRTC library SIP.js to connect iOS clients to Chrome, Firefox users.",
                "Configured a HIPAA compliant on-site Asterisk PBX server for WebRTC and h.264.",
            ]

        },


        {
            "name": "EpiWatch",
            "tagline": "",
            "color": {"primary":"#9A5BB9","secondary":"#00C5AC"},
            "customClasses": ["grid-item-big"],
            "id": "epiwatch",
            "icon": "",
            "logo":"",
            "headshot": "",
            "screenshots": [],
            "news": [
                {
                    "title": "The Apple Watch App For Seizures May Soon Predict Their Onset",
                    "date": " 07.25.16",
                    "link": "http://www.fastcompany.com/3059828/the-apple-watch-app-for-seizures-may-soon-predict-their-onset",
                    "comment": "This article was awesome, You should read it!"
                },
                {
                    "title": "Johns Hopkins tests EpiWatch app on Apple Watch to track seizures",
                    "date": " 08.05.2016",
                    "link": "http://www.healthcareitnews.com/news/john-hopkins-tests-epiwatch-app-apple-watch-track-seizures"
                },
                {
                    "title": "Apple Watch used to study epileptic seizures",
                    "date": "11.22.2015",
                    "link": "http://money.cnn.com/2015/10/19/technology/researchkit-seizure/"
                },
                {
                    "title": "Turning the Apple Watch into a seizure detector",
                    "date": "10.19.2015",
                    "link": "http://money.cnn.com/2015/10/19/technology/researchkit-seizure/"
                },
                {
                    "title": "Johns Hopkins researchers to use Apple Watch data to study epilepsy",
                    "date": "10.15.2015",
                    "link": "http://hub.jhu.edu/2015/10/15/apple-watch-epiwatch/"
                }
            ],
            "description": "Seizure Tracking on Apple Watch.",
            "technologies": [],
            "links": {
                "Homepage": "hopkinsmedicine.org/epiwatch",
            },
            'content': [
                "Designed/Built/Maintain iOS application in Swift and Objective-C.",
                "Embedded enterprise clinical medical image viewer into native iOS client application.",
                "Leveraged open source where possible: SIP video soft-phone library Liblinphone, JSON modeling framework Mantle, networking framework Alamofire, functional reactive programming",
                "Built web client with Ember.js leveraging WebRTC library SIP.js to connect iOS clients to Chrome, Firefox users.",
                "Configured a HIPAA compliant on-site Asterisk PBX server for WebRTC and h.264.",
            ]
        },


// $base_color: #264358;
// $rw00: lighten($base_color, 10%);
// $rw01: desaturate($base_color, 30%);
// $rw02: saturate(lighten($base_color, 45%), 5%);
// $rw04: desaturate($rw02, 30%);

        {
            "name": "Resident Worklist",
            "tagline": "",
            "color": {"primary":"#264358"},
            "customClasses": [],
            "id": "resident-worklist",
            "icon": "",
            "logo":"",
            "headshot": "",
            "screenshots": [],
            "news": [],
            "description": "Teaching tool gives resident radiologists feedback on their reports by showing a diff between their report and the final report.",
            "technologies": [],
            'content': [
                "Designed/Built/Maintain iOS application in Swift and Objective-C.",
                "Embedded enterprise clinical medical image viewer into native iOS client application.",
                "Leveraged open source where possible: SIP video soft-phone library Liblinphone, JSON modeling framework Mantle, networking framework Alamofire, functional reactive programming",
                "Built web client with Ember.js leveraging WebRTC library SIP.js to connect iOS clients to Chrome, Firefox users.",
                "Configured a HIPAA compliant on-site Asterisk PBX server for WebRTC and h.264.",


            ]

        },
        {
            "name": "Peer Review",
            "tagline": "",
            "color": {"primary":"blue"},
            "customClasses": [],
            "id": "peer-review",
            "icon": "",
            "logo":"",
            "headshot": "",
            "screenshots": [],
            "news": [],
            "description": "federal departmental compliance",
            "technologies": [],
            'content': [
                "Designed/Built/Maintain iOS application in Swift and Objective-C.",
                "Embedded enterprise clinical medical image viewer into native iOS client application.",
                "Leveraged open source where possible: SIP video soft-phone library Liblinphone, JSON modeling framework Mantle, networking framework Alamofire, functional reactive programming",
                "Built web client with Ember.js leveraging WebRTC library SIP.js to connect iOS clients to Chrome, Firefox users.",
                "Configured a HIPAA compliant on-site Asterisk PBX server for WebRTC and h.264.",


            ]

        },
        {
            "name": "Accomplishments",
            "tagline": "",
            "color": {"primary":"red"},
            "customClasses": [],
            "id": "achievements",
            "icon": "",
            "logo":"",
            "headshot": "",
            "screenshots": [],
            "news": [],
            "description": "An iOS teleconsultation application connecting radiologists to clinicians.",
            "technologies": [],
            'content': [
                "Created on Ruby on Rails gem consolidating assets, deployment and development scripts, common app functionality, and RESTful APIs to patient data. This gem is now integrated into 5 applications.",
                "3 published NPM packages for Ember-CLI."
            ]

        }
    ],
    "contract": [
        {
            "name": "ReadAhead Hybrid",
            "tagline": "",
            "color": {"primary":"#2e83d6","secondary":"#8ac53e"},
            "customClasses": ["grid-item-big"],
            "id": "achievements",
            "icon": "",
            "logo":"",
            "headshot": "",
            "screenshots": [],
            "news": [],
            "links": {
                "Homepage": "http://youtu.be/XM1nrW_uLqM",
                "iTunes": "http://youtu.be/XM1nrW_uLqM",
                "Google Play": "http://youtu.be/XM1nrW_uLqM"
            },
            "description": "An iOS teleconsultation application connecting radiologists to clinicians.",
            "technologies": [],
            'content': [
                "Created on Ruby on Rails gem consolidating assets, deployment and development scripts, common app functionality, and RESTful APIs to patient data. This gem is now integrated into 5 applications.",
                "3 published NPM packages for Ember-CLI.",
            ]

        }

    ]

};