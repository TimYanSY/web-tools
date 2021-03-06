//
// DO NOT EDIT THIS FILE
//
const formReporter = {
  parseRequest: request => {
    const report = {};
    report.method = request.method;
    report.path = request.path;
    report.url = request.originalUrl;

    switch( request.method ) {
      case 'GET':
        report.vars = request.query;
        break;
      case 'POST':
        report.vars = request.body;
        break;
      default:
        report.vars = [];
        break;
    }
    return report;
  },
  reporter: report => {
    const statements = [];
    statements.push(`---\nNew Request`);
    statements.push(`You used method ${report.method}`);
    statements.push(`With url of ${report.url}`);
    statements.push(`Which points to the file ${report.path}`);
    const keys = Object.keys(report.vars).sort();
    keys.forEach( key => {
      statements.push(`You sent param ${key} with value: ${report.vars[key]}`);
    });
    return statements;
  }
};
module.exports = formReporter;
