let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {

    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param 
    // You must always end/destroy the DB connection after it's used
    rds.query({
        instanceIdentifier: 'issueValidation',
        query: 'INSERT into Person(PersonID, LastName, FirstName,Address,City)Values(?,?,?,?,?)',
        inserts: [0, Kannangara, Andun, Galle, Galle]
    }, function (error, results, connection) {
        if (error) {
            console.log("Error occurred");
            throw error;
        } else {
            console.log("Success")
            console.log(results);
        }

        connection.end();

        // You can pass the existing connection to this function.
        // A new connection will be created if it's not present as the third param 
        // You must always end/destroy the DB connection after it's used
    });

    callback(null, 'Successfully executed');
}