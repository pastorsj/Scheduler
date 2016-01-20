function readFileToString() {
    var fs = require('browserify-fs');
    var array = fs.readFileSync('schedule.txt').toString().split("Session: ");
    return parseArray(array);
}

function parseArray(array) {
    var firstPart = array[0];
    this.sessionObject = [];
    for (var i = 1; i < array.length; i++) {
        this.sessionObject.push(parseSessions(array, i));
    }
    return this.sessionObject;
}

function parseSessions(array, i) {
    var Session, Reading, HW_DUE, Topics, Outline, Resources, HW_Assigned, Milestone;
    var sessionArray = array[i].split("Reading:");
    var temp = [];
    Session = sessionArray[0].replace(/(\r?\n|\r)/g, "");
    var readingArray = sessionArray[1].split("HW Due:");
    if (!readingArray[1]) {
        readingArray[1] = readingArray[0];
        Reading = "";
    } else {
        temp = readingArray[0].replace(/(\r?\n|\r)/g, "").split("\t");
        temp.shift();
        Reading = temp;
    }
    var hwDueArray = readingArray[1].split("Topics:");
    temp = hwDueArray[0].replace(/(\r?\n|\r)/g, "").split("\t");
    temp.shift();
    HW_DUE = temp;
    var topicsArray = hwDueArray[1].split("Outline:");
    temp = topicsArray[0].replace(/(\r?\n|\r)/g, "").split("\t");
    temp.shift();
    Topics = temp;
    var outlineArray = topicsArray[1].split("Resources:");
    temp = outlineArray[0].replace(/(\r?\n|\r)/g, "").split("\t");
    temp.shift();
    Outline = temp;
    var resourcesArray = outlineArray[1].split("HW Assigned:");
    temp = resourcesArray[0].replace(/(\r?\n|\r)/g, "").split("\t");
    temp.shift();
    Resources = temp;
    var hwAssignedArray = resourcesArray[1].split("Milestone:");
    temp = hwAssignedArray[0].replace(/(\r?\n|\r)/g, "");
    temp = temp.split("\t");
    temp.shift();
    HW_Assigned = temp;
    if (HW_Assigned[temp.length - 1] && HW_Assigned[temp.length - 1].endsWith("-------")) {
        var index = HW_Assigned[0].indexOf("// --");
        HW_Assigned[temp.length - 1] = HW_Assigned[temp.length - 1].substring(0, index - 1);
    }
    if (!hwAssignedArray[1]) {
        Milestone = "";
    } else {
        Milestone = hwAssignedArray[1].replace(/(\r?\n|\r)/g, "");
        var index = Milestone.indexOf("// --");
        if (index > -1) {
            Milestone = Milestone.substring(0, index - 1);
        }
    }
    return {
        Session: Session,
        Reading: Reading,
        HW_Due: HW_DUE,
        Topics: Topics,
        Outline: Outline,
        Resources: Resources,
        HW_Assigned: HW_Assigned,
        Milestone: Milestone
    }
}

function parseIntoScheduleSession() {
    var scheduleObject = readFileToString();
    var sessionObject = getScheduleObject();
    var scheduleSession = [];
    for (var i = 0; i < sessionObject.numberOfSessions; i++) {
        var sessionVar = getScheduleComponents(scheduleObject, i);
        var singleSession = {
            week: sessionObject.sessions[i].week,
            session: sessionObject.sessions[i].sessionNumber,
            sessionDate: sessionObject.sessions[i].sessionWeekDay + " " + sessionObject.sessions[i].sessionDate,
            scheduleComponents: sessionVar
        };
        scheduleSession.push(singleSession);
    }
    return scheduleSession;
}

function getScheduleComponents(scheduleObject, i) {
    var components = [];
    var keys = [];
    keys = Object.keys(scheduleObject[i]);
    for (var j = 0; j < keys.length; j++) {
        var nameValue = {
            name: keys[j],
            value: scheduleObject[i][keys[j]]
        };
        components.push(nameValue);
    }
    return components;
}

parseIntoScheduleSession();
