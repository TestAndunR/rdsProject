module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["issueValidation"] = {
        host: process.env.EndPoint_rdsIssueValidation,
        port: process.env.Port_rdsIssueValidation,
        user: process.env.User_rdsIssueValidation,
        password: process.env.Password_rdsIssueValidation,
        database: "issuevalidation"
    };
    this.dbConnections["issueValidatio"] = {
        host: process.env.EndPoint_rdsIssueValidatio,
        port: process.env.Port_rdsIssueValidatio,
        user: process.env.User_rdsIssueValidatio,
        password: process.env.Password_rdsIssueValidatio,
        database: "aaaa"
    };
};