(function () {
    var app = angular.module('scheduler', ["ngSanitize"]);
    app.controller("ScheduleController", function () {

        this.schedule = new Schedule(configObject);
        this.configObject = configObject;
        this.scheduleComponentNames = scheduleComponentNames;
        this.scheduleComponent = scheduleComponent;
        this.scheduleSession = scheduleSession;
    });

    var configObject = {
        sessionDays: "MWR",
        startDate: "11/30/2015",
        startWeekNumber: 1,
        breakStartDate: "12/21/2015",
        resumeDate: "1/4/2016",
        numberOfSessions: 30
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
        // this.startDate = scheduleObject.startDate;
        // this.numberOfSessions = scheduleObject.numberOfSessions;
        this.sessions = createSessionsArray(date, sessionDays, numberOfSessions, weekNumber, breakStartDate, resumeDate);
    }

    function createSessionsArray(date, sessionDays, numberOfSessions, weekNumber, breakStartDate, resumeDate) {
        // console.log("0: M; 1: W, 2: R")
        this.sessions = [];
        var dow = 0;
        var day;
        var week = weekNumber;
        for (var i = 0; i < numberOfSessions; i++) {
            dow = i % sessionDays.length;
            day = sessionDays.charAt(dow);
            if (dow === 0) {
                week++;
            }
            date = getDate(date, sessionDays, day, dow, i, breakStartDate, resumeDate);
            this.sessions.push({
                "sessionNumber": i + 1,
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
        if (newDate >= breakStartDate && newDate <= resumeDate) {
            var singleDay = 1000 * 60 * 60 * 24;
            var difference = Math.round(Math.abs((breakStartDate.getTime() - resumeDate.getTime()) / (singleDay)));
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
        if (index !== 0) {
            if (--dow < 0) {
                dow = sessionDays.length - 1;
            }
            numDays = (weekDayConversion[day] - weekDayConversion[sessionDays.charAt(dow)] + 7) % 7;
        }
        return numDays;
    };

// Use for tabular column headers. Place them in the order in which they
// should be displayed on the page
    var scheduleComponentNames = ["Week", "Session", "Due", "Topics", "Resources", "Reading", "Programs"];

// sample session component object that can be used in a schedule session
    var scheduleComponent = {
        name: "Due",
        values: ["Things"] // list of things to display for this component
    };

// This will not be used in this lab, but will be useful in a subsequent lab
    var courseComponent = {
        type: 'Lab',
        name: 'Schedule Object',
        number: 1,
        sessionDue: 3,
        url: '../Assignments/SchedulerLab.pdf',
        solution: '',
        sample: ''
    };

// this represents a row that will be displayed in a session table
    var scheduleSession = {
        week: 1, // value comes from a session object
        session: 2, // value comes from a session object
        sessionDate: 'Wednesday Dec 2', // value comes from a session object
        scheduleComponents: [
            {
                name: "Topics",
                values: [
                    "Review of course syllabus",
                    "Brief introduction to Express.js",
                    "MongoDB installation",
                    "Getting started with MongoDB"
                ]
            },
            {
                name: "Resources",
                values: [
                    '<a href="../Slides/Introductions.pdf">Slides</a>',
                    '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                    '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                ]
            },
            {
                name: "Reading",
                values: [
                    '<a href="../syllabus.html">Course Syllabus</a>',
                    '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
                    ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
                    '<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
                    '<a href="../Assignments/GettingStartedWithMongoDB.pdf">Getting Started with MongoDB</a>'
                ]
            }
        ]
    };
})();
