import Ember from 'ember';
import projects from './projects';

export default {
    "hopkins": [
        {
            "name": "Radiologists Engaging and Collaborating in Healthcare (REACH)",
            "color":"blue",
            "route": "reach",
            "customClasses": ["grid-item-big"],
            "description": "An iOS teleconsultation application connecting radiologists to clinicians.",
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
            "color":"blue",
            "customClasses":[],
            "route": "epiwatch",
            "description": "Seizure Tracking on Apple Watch.",
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


        {
            "name": "OASIS",
            "color":"blue",
            "customClasses":[],
            "route": "oasis",
            "description": "Clinical data research tool",
            'content': [
                "Designed/Built/Maintain iOS application in Swift and Objective-C.",
                "Embedded enterprise clinical medical image viewer into native iOS client application.",
                "Leveraged open source where possible: SIP video soft-phone library Liblinphone, JSON modeling framework Mantle, networking framework Alamofire, functional reactive programming",
                "Built web client with Ember.js leveraging WebRTC library SIP.js to connect iOS clients to Chrome, Firefox users.",
                "Configured a HIPAA compliant on-site Asterisk PBX server for WebRTC and h.264.",


            ]

        },


        {
            "name": "Resident Worklist",
            "color":"blue",
            "customClasses":[],
            "route": "resident-worklist",
            "description": "Teaching tool gives resident radiologists feedback on their reports by showing a diff between their report and the final report.",
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
            "color":"blue",
            "customClasses":[],
            "route": "peer-review",
            "description": "federal departmental compliance",
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
            "color":"blue",
            "customClasses":[],
            "route": "achievements",
            "description": "An iOS teleconsultation application connecting radiologists to clinicians.",
            'content': [
                "Created on Ruby on Rails gem consolidating assets, deployment and development scripts, common app functionality, and RESTful APIs to patient data. This gem is now integrated into 5 applications.",
                "3 published NPM packages for Ember-CLI."
            ]

        }
    ],
    "contract": [
        {
            "name": "Accomplishments",
            "color":"blue",
            "customClasses":[],
            "route": "achievements",
            "links": {
                "Homepage": "http://youtu.be/XM1nrW_uLqM",
                "iTunes": "http://youtu.be/XM1nrW_uLqM",
                "Google Play": "http://youtu.be/XM1nrW_uLqM"
            },
            "description": "An iOS teleconsultation application connecting radiologists to clinicians.",
            'content': [
                "Created on Ruby on Rails gem consolidating assets, deployment and development scripts, common app functionality, and RESTful APIs to patient data. This gem is now integrated into 5 applications.",
                "3 published NPM packages for Ember-CLI.",
            ]

        }

    ]

};