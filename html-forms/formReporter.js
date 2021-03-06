//
// DO NOT EDIT THIS FILE
//
const formReporter = {
  parseRequest: request => {
    switch( request.method ) {
      case 'GET':
        return request.query;
        break;
      case 'POST':
        return request.body;
        break;
      default:
        return {};
        break;
    }
  },
  reporter: report => {
    const err = [];
    ['name', 'favorite', 'friendliness'].forEach( param => {
      if(!report[param]) {
        err.push(`no param "${param}" sent`);
      }
    });
    let badFavorite = true;
    ['read', 'watch', 'socialize'].forEach( val => {
      if(report.favorite === val) {
        badFavorite = false;
      }
    });
    if(badFavorite) {
      err.push(`incorrect value sent for param "favorite"`);
    }
    let badFriends = true;
    if(report.friendliness >= 1 && report.friendliness <= 5) {
      badFriends = false;
    }
    if(badFriends) {
      err.push(`incorrect value sent for param "friendliness"`);
    }
    const keys = Object.keys(report).sort();
    const bad = keys.filter( key => key !== 'name' && key !== 'friendliness' && key !== 'favorite' );
    bad.forEach( key => {
      err.push(`Invalid param ${report[key]} sent`);
    });
    return err;
  },
  failText: {
    GET: 'You are sending a GET request, not a POST request',
    TARGET: 'You are sending the wrong action value',
    POST: 'You are sending a POST request, not a GET request',
    CSS: 'You are not requesting a CSS file by the correct name!'
  }
};
module.exports = formReporter;
