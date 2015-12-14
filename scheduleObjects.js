// Use for tabular column headers. Place them in the order in which they 
// should be displayed on the page 
var scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];

// sample session component object that can be used in a schedule session
var scheduleComponent = {
    name: "Due",
    values: [''] // list of things to display for this component
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