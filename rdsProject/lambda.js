let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);
let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

let search = "serverless";
let count = 10;
exports.handler = function (event, context, callback) {
    twitter.searchTweets({
        "searchParams": {
            "q": search,
            "count": count
        },
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
        console.log(data);
    }).catch(err => {
        console.log(err);
    });


    callback(null, 'Successfully executed');
}