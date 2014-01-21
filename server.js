// Require1
console.log("0");
var watchr = require('watchr');


console.log("1");
var paths = function getPaths() {
/* read paths from json object return
* an of string paths
*/

    var paths = ["TestDirectory"];
    return paths;
};
console.log("2");
var logListVar = function logListener(logfile) {
    if (logfile.indexOf("create") !== -1) {
        console.log("an event has occurred: ", arguments);
    }
};

console.log("3");
var errorListVar = function errorListener(err) {
    console.log("and error has occurred: " + err);
};

console.log("4");
var watchListVar = function watchingListener(changeType, filePath, fuleCurrentStat, filePreviousStat) {
    if (err) {
        console.log("watching the path " + watcherInstance.path + " failed with error", err);
    } else {
        console.log("watching the path " + watcherInstance.path + " completed");
    }
};

console.log("4");
var changeListVar = function changeListener(changeType, filePath, fileCurrentStat, filePreviousStat) {
    console.log('a change event occured:',arguments);
};
console.log("--ON--");
console.log("call to getPaths returned: " + paths());


// Watch a directory or file
console.log("Watch our paths");
watchr.watch({
    paths: paths(),
    listeners: {
        log: logListVar,
        error: errorListVar,
        watching: watchListVar,
        change: changeListVar
    }
});




