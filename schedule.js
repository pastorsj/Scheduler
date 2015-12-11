var configObject = {
	sessionDays: "MTWRF",
	startDate: "11/30/2015",
	startWeekNumber: 1,
	breakStartDate: "12/21/2015",
	resumeDate: "1/4/2016",
	numberOfSessions: 50
};

var weekConversion = {
	M: "Monday",
	T: "Tuesday",
	W: "Wednesday",
	R: "Thursday",
	F: "Friday",
	S: "Saturday",
	U: "Sunday"
};

//Date is a 0 based object
var weekDayConversion = {
	M: 1,
	T: 2,
	W: 3,
	R: 4,
	F: 5,
	S: 6,
	U: 7
};

function Schedule(scheduleObject) {
	var date = new Date(scheduleObject.startDate);
	var sessionDays = scheduleObject.sessionDays;
	var numberOfSessions = scheduleObject.numberOfSessions;
	var weekNumber = scheduleObject.startWeekNumber - 1; //Accounts for the first week, first day
	var breakStartDate = new Date(scheduleObject.breakStartDate);
	var resumeDate = new Date(scheduleObject.resumeDate);
	this.startDate = scheduleObject.startDate;
	this.numberOfSessions = scheduleObject.numberOfSessions;
	this.sessions = createSessionsArray(date, sessionDays, numberOfSessions, weekNumber, breakStartDate, resumeDate);
}

function createSessionsArray(date, sessionDays, numberOfSessions, weekNumber, breakStartDate, resumeDate) {
	// console.log("0: M; 1: W, 2: R")
	this.sessions = [];
	var dow = 0;
	var day;
	var week = weekNumber;
	for(var i = 0; i < numberOfSessions; i++) {
		dow = i % sessionDays.length;
		day = sessionDays.charAt(dow);
		if(dow === 0) {
			week++;
		}
		date = getDate(date, sessionDays, day, dow, i, breakStartDate, resumeDate);
		this.sessions.push({
			"sessionNumber": i+1,
			"sessionWeekDay": weekConversion[day],
			"sessionDate": date,
			"week": week
		});
	}
	return this.sessions;
}

function getDate(date, sessionDays, day, dow, index, breakStartDate, resumeDate) {
	var newDate = new Date(date);
	var numDays = getNumberOfDays(sessionDays, day, dow, index);
	newDate.setDate(newDate.getDate() + numDays);	
	if(newDate >= breakStartDate && newDate <= resumeDate) { 
		var singleDay = 1000*60*60*24;
		var difference = Math.round(Math.abs((breakStartDate.getTime() - resumeDate.getTime())/(singleDay)));
		newDate.setDate(newDate.getDate() + difference);
	}
	return formatDate(newDate.toDateString().substring(4));
}

/*
 * From http://stackoverflow.com/questions/23593052/format-javascript-date-to-yyyy-mm-dd
 * author: user3470953
 * modified by Sam Pastoriza
 */
function formatDate(date) {
    var d = new Date(date),
	month = '' + (d.getMonth() + 1),
	day = '' + d.getDate(),
	year = d.getFullYear();

	if (month.length < 2) 
		month = '0' + month;
	if (day.length < 2) 
		day = '0' + day;

    return [month, day, year].join('/');
}

function getNumberOfDays(sessionDays, day, dow, index) {
	var numDays = 0;
	if(index !== 0) {
		if(--dow < 0) {
			dow = sessionDays.length - 1;
		}
		numDays = (weekDayConversion[day] - weekDayConversion[sessionDays.charAt(dow)] + 7) % 7;
	}
	return numDays;
}

function getScheduleObject() {
	return JSON.stringify(new Schedule(configObject), null, 4);
}