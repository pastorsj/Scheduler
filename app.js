(function () {
    //   var app = angular.module('scheduler', ["ngSanitize"]);
    var routingApp = angular.module("routingApp", ['ngRoute', 'ngSanitize']);

    routingApp.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home.html",
                controller: "ScheduleController"
            })

            .when("/schedule", {
                templateUrl: "views/schedule.html",
                controller: "ScheduleController"
            })

            .when("/homework", {
                templateUrl: "views/homework.html",
                controller: "HomeworkController"
            })

            .when("/labs", {
                templateUrl: "views/labs.html",
                controller: "LabController"
            })

            .when("/exams", {
                templateUrl: "views/exams.html",
                controller: "ExamController"
            })

            .otherwise({
                redirectTo: '/home'
            });
    });


    routingApp.controller("ScheduleController", function ($scope) {
        $scope.header = header;
        $scope.scheduleComponentNames = scheduleComponentNames;
        $scope.scheduleComponent = scheduleComponent;
        $scope.object = object;
    });

    routingApp.controller("HomeworkController", function ($scope) {
        $scope.homeworkComponents = homeworkComponents;
        $scope.object = object;

        $scope.getSessionDate = function (session) {
            for (var i = 0; i < object.length; i++) {
                var temp = object[i];
                if (temp.session === session) {
                    return temp.sessionDate.substring(temp.sessionDate.indexOf(" "));
                }
            }
        }
    });

    routingApp.controller("ExamController", function ($scope) {
        $scope.examComponents = examComponents;
        $scope.object = object;

        $scope.getSessionDate = function (session) {
            for (var i = 0; i < object.length; i++) {
                var temp = object[i];
                if (temp.session === session) {
                    return temp.sessionDate.substring(temp.sessionDate.indexOf(" "));
                }
            }
        }
    });

    routingApp.controller("LabController", function ($scope) {
        $scope.labComponents = labComponents;
        $scope.object = object;

        $scope.getSessionDate = function (session) {
            for (var i = 0; i < object.length; i++) {
                var temp = object[i];
                if (temp.session === session) {
                    return temp.sessionDate.substring(temp.sessionDate.indexOf(" "));
                }
            }
        }
    });

    var header = [
        {
            "attribute": "courseID",
            "value": "CSSE332"
        },
        {
            "attribute": "courseName",
            "value": "Operating Systems"
        },
        {
            "attribute": "term",
            "value": "Winter 2013-2014 (a.k.a. 201420)"
        },
        {
            "attribute": "description",
            "value": "<em>Readings</em> are to be completed after each class session.  <em>All written assignments</em> are due at the start of class unless otherwise noted.  <em>All electronic assignments</em> are due by 11:59 PM on their due dates. Remember to use the <strong>Late Day Bank</strong> survey on Moodle if you want to spend or deposit a late day. <p><strong>Note:</strong> This schedule is initially based on last spring's schedule and will change substantively as the quarter progresses. There will be changes to class activities and HW assignments up until the time of any day's class meetings. </p><p> The <a href=\"../index.html\">main page for the course</a> is accessible from this location. You might want to bookmark it in your favorite browser.</p>"
        }
    ];


// Use for tabular column headers. Place them in the order in which they
// should be displayed on the page
    var scheduleComponentNames = ["Week", "Session", "Readings", "HW Due", "Topics", "Outline", "Resources", "HW Assigned", "Milestone"];

// sample session component object that can be used in a schedule session
    var scheduleComponent = {
        name: "Due",
        values: ["Thing"] // list of things to display for this component
    };

// This will not be used in this lab, but will be useful in a subsequent lab
    var labComponents = [{
        type: 'Lab',
        name: 'LINUX Installation, C Programming',
        number: 1,
        sessionDue: 6,
        url: '"../Labs/lab01.html',
        solution: '',
        sample: ''
    }, {
        type: 'Lab',
        name: 'gdb and C Programming',
        number: 2,
        sessionDue: 10,
        url: '"../Labs/lab02.html',
        solution: '',
        sample: ''
    }, {
        type: 'Lab',
        name: 'Queue and Process Management',
        number: 3,
        sessionDue: 14,
        url: '"../Labs/lab03.html',
        solution: '',
        sample: ''
    }, {
        type: 'Lab',
        name: 'Thread Management',
        number: 4,
        sessionDue: 19,
        url: '"../Labs/lab04.html',
        solution: '',
        sample: ''
    }, {
        type: 'Lab',
        name: 'Process communication and synchronization',
        number: 5,
        sessionDue: 30,
        url: '"../Labs/lab05.html',
        solution: '',
        sample: ''
    }];

    var examComponents = [{
        type: 'Exam',
        name: 'Exam 1',
        number: 1,
        sessionDue: 19,
        url: '',
        solution: '',
        sample: "<a href=\"../Exams/Exam 1 Resources/csse332-SampleExams-Exam1.zip\">Sample Test1"

    }, {
        type: 'Exam',
        name: 'Exam 2',
        number: 2,
        sessionDue: 35,
        url: '',
        solution: '',
        sample: "<a href=\"../Exams/Exam 2 Resources/csse332-SampleExams-Exam2.zip\">Sample Test2"

    }];


    var homeworkComponents = [{
        type: 'Homework',
        name: 'HW 1',
        number: 1,
        sessionDue: 5,
        url: '../Homework/hw01.html',
        solution: '',
        sample: ''
    },
        {
            type: 'Homework',
            name: 'HW 4',
            number: 2,
            sessionDue: 8,
            url: '../Homework/hw04.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 10',
            number: 3,
            sessionDue: 13,
            url: '../Homework/hw10.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 13',
            number: 4,
            sessionDue: 17,
            url: '../Homework/hw13.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 20',
            number: 5,
            sessionDue: 24,
            url: '../Homework/hw20.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 25',
            number: 6,
            sessionDue: 28,
            url: '../Homework/hw25.html',
            solution: '',
            sample: ''
        }
        ,
        {
            type: 'Homework',
            name: 'HW 29',
            number: 7,
            sessionDue: 32,
            url: '../Homework/hw29.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 32',
            number: 8,
            sessionDue: 33,
            url: '../Homework/hw32.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 34',
            number: 9,
            sessionDue: 36,
            url: '../Homework/hw34.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 36',
            number: 10,
            sessionDue: 38,
            url: '../Homework/hw36.html',
            solution: '',
            sample: ''
        },
        {
            type: 'Homework',
            name: 'HW 38',
            number: 11,
            sessionDue: 40,
            url: '../Homework/hw38.html',
            solution: '',
            sample: ''
        }];

    var courseComponentNames = ["type", "name", "number", "sessionDue", "url", "solution", "sample"]

    var object = [
        {
            "week": 1,
            "session": 1,
            "sessionDate": "Monday 11/30/2015",
            "scheduleComponents": [
                {
                    "name": "Reading",
                    "values": [
                        "  <a href=\"../syllabus.html\">Syllabus</a>",
                        "  Silberschatz Chapter 1"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Overview of Course",
                        "  Introduction to Operating Systems",
                        "  Basic introduction to Processes"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/Introduction.pdf\">Slides</a>: Introduction",
                        "  <a href=\" https://piazza.com/rose-hulman/winter2014/csse332/home\">Piazza</a>, a wiki-style Q&A platform"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw01.html\">HW 1</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": []
                }
            ]
        },
        {
            "week": 1,
            "session": 2,
            "sessionDate": "Tuesday 12/01/2015",
            "scheduleComponents": [
                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 1",
                        "  <a href=\"https://videos.csse.rose-hulman.edu/private/www/Schedule/Schedule.htm\"> C video lectures</a> on <ul><li>strings and printf</li> <li>scanf</li> <li>structs</li> <li>arrays</li> </ul>"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Introduction to Linux",
                        "  Brief Introduction to C Programming",
                        "  Preprocessor directives",
                        "  External Library files",
                        "  Standard C Library",
                        "  Arrays",
                        "  Structures",
                        "  Command line arguments",
                        "  Using Make to compile programs"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/IntroToC.pdf\">Slides</a>: Intro to Linux and C",
                        "  Description of code in <a href=\"../Code/Examples/DescriptionsOfExamples.html\"> Examples </a> folder",
                        "  <a href=\"https://videos.csse.rose-hulman.edu/private/www/Schedule/Schedule.htm\"> C Video Lectures</a>: These lectures provide a quick review of C",
                        "  <a href=\"http://www.cplusplus.com/reference/clibrary/\"> Standard C Library</a>:  Header files you can include to access various functionality"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": []
                }
            ]
        },
        {
            "week": 1,
            "session": 3,
            "sessionDate": "Thursday 12/03/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  <a href=\"https://videos.csse.rose-hulman.edu/private/www/Schedule/Schedule.htm\"> C video lectures</a> on <ul> <li>scanf</li> <li>separate compilation</li> <li>array concepts</li> <li>string concepts</li> <li>file concepts</li></ul>"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <a href=\"../Labs/lab01.html\">Lab 1: LINUX Installation, C Programming</a>",
                        "  Simple data types",
                        "  Arrays and strings",
                        "  File Handling",
                        "  Functions"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab01.html\" class=\"detailsLink\">Lab 1</a> <br /> Linux Install <br /> Power <br /> Inventory <br /> FileCop"]
                }
            ]
        },
        {
            "week": 1,
            "session": 4,
            "sessionDate": "Friday 12/04/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 2",
                        "  <a href=\"https://videos.csse.rose-hulman.edu/private/www/Schedule/Schedule.htm\"> C video lectures</a> on <ul><li>pointers (every video)</li> <li>more box and pointers</li> <li>arrays and pointers</li> </ul>"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  C Programming",
                        "  Introduction to Pointers",
                        "  Pointers and arrays",
                        "  Pointer arithmetic"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/IntroToPointers.pdf\">Slides</a>: Introduction to Pointers",
                        "  <a href=\"https://videos.csse.rose-hulman.edu/private/www/Schedule/Schedule.htm\"> C Video Lectures</a>: These lectures provide a quick review of C",
                        "  <a href=\"http://cslibrary.stanford.edu/104/\"> Binky Pointer Fun Video</a>: Fun 3 minute video that explains the basics features of pointers and memory"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw04.html\">HW 4</a>",
                        "  Homework assignments are numbered by session numbers."
                    ]
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab01.html\" class=\"detailsLink\">Lab 1</a> <br /> Linux Install <br /> Power <br /> Inventory <br /> FileCop"]
                }
            ]
        },
        {
            "week": 2,
            "session": 5,
            "sessionDate": "Monday 12/07/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 3"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw01.html\">HW 1</a>",
                        "  This is the due date for Homework 1."
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  The Process Model",
                        "  Process description",
                        "  Process state models",
                        "  The process control block (PCB)",
                        "  Process Scheduling Queues",
                        "  Schedulers"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ProcessIntro.pdf\">Slides</a>: Intro to processes"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab01.html\" class=\"detailsLink\">Lab 1</a> <br /> Linux Install <br /> Power <br /> Inventory <br /> FileCop"]
                }
            ]
        },
        {
            "week": 2,
            "session": 6,
            "sessionDate": "Tuesday 12/08/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 3"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Process scheduling",
                        "  Process switch",
                        "  Mode switch",
                        "  Unix Process Creation, fork"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/Processes.pdf\">Slides</a>: Processes operations"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab01.html\" class=\"detailsLink\">Lab 1</a> <br /> Linux Install <br /> Power <br /> Inventory <br /> FileCop"]
                }
            ]
        },
        {
            "week": 2,
            "session": 7,
            "sessionDate": "Thursday 12/10/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": ""
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <a href=\"../Labs/lab02.html\">Lab 2: gdb and C Programming</a>",
                        "  Using the GNU debugger",
                        "  C Programming",
                        "  Explicit memory allocation",
                        "  Dynamic array",
                        "  Array of Pointers",
                        "  Common errors",
                        "  Functions - pointers as arguments",
                        "  Passing and returning arrays, structs"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/MemoryAllocationParameters.pdf\">Slides</a>: Explicit Memory Allocation"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab02.html\" class=\"detailsLink\">Lab 2</a> <br /> GDB tutorial <br /> PigLatin <br /> InventoryUpdate"]
                }
            ]
        },
        {
            "week": 2,
            "session": 8,
            "sessionDate": "Friday 12/11/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 3"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw04.html\">HW 4</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Interprocess Communication",
                        "  Shared Memory",
                        "  Message Passing"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/InterProcessCommunication.pdf\">Slides</a>: Interprocess Communication"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab02.html\" class=\"detailsLink\">Lab 2</a> <br /> GDB tutorial <br /> PigLatin <br /> InventoryUpdate"]
                }
            ]
        },
        {
            "week": 3,
            "session": 9,
            "sessionDate": "Monday 12/14/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 4"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Threads overview",
                        "  Motivation and benefits of multithreading",
                        "  Multicore programming",
                        "  Multithreading models"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ThreadsIntro.pdf\">Slides</a>: Introduction to threads"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab02.html\" class=\"detailsLink\">Lab 2</a> <br /> GDB tutorial <br /> PigLatin <br /> InventoryUpdate"]
                }
            ]
        },
        {
            "week": 3,
            "session": 10,
            "sessionDate": "Tuesday 12/15/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 4"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Thread libraries",
                        "  Threading issues",
                        "  Signal handling (Interrupts, traps/exceptions)"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/Threads.pdf\">Slides</a>: Threads"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw10.html\">HW 10</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab02.html\" class=\"detailsLink\">Lab 2</a> <br /> GDB tutorial <br /> PigLatin <br /> InventoryUpdate"]
                }
            ]
        },
        {
            "week": 3,
            "session": 11,
            "sessionDate": "Thursday 12/17/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  overlaying process images (exec functions)",
                        "  Unix Process termination",
                        "  wait and waitpid",
                        "  <a href=\"../Labs/lab03.html\">Lab 3: Queue and Process Management</a>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab03.html\" class=\"detailsLink\">Lab 3</a> <br /> Queue Implementation<br /> Process Chai"]
                }
            ]
        },
        {
            "week": 3,
            "session": 12,
            "sessionDate": "Friday 12/18/2015",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 5"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  CPU Scheduling",
                        "  Basic concepts in CPU Scheduling",
                        "  CPU - I/O burst cycles",
                        "  CPU scheduler",
                        "  Preemptive vs nonpreemptive scheduling",
                        "  Scheduling criteria",
                        "  Scheduling algorithms"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/CPUScheduling.pdf\">Slides</a>: CPU Scheduling"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab03.html\" class=\"detailsLink\">Lab 3</a> <br /> Queue Implementation<br /> Process Chai"]
                }
            ]
        },
        {
            "week": 4,
            "session": 13,
            "sessionDate": "Monday 01/04/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 5"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw10.html\">HW 10</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  CPU scheduling",
                        "  CPU scheduling algorithms"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/CPUSchedulingAlgorithms.pdf\">Slides</a>: CPU Scheduling algorithms"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw13.html\">HW 13</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab03.html\" class=\"detailsLink\">Lab 3</a> <br /> Queue Implementation<br /> Process Chai"]
                }
            ]
        },
        {
            "week": 4,
            "session": 14,
            "sessionDate": "Tuesday 01/05/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 5"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Thread scheduling",
                        "  Multiprocessor scheduling"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ThreadAndProcessorScheduling.pdf\">Slides</a>: Threads and multiprocessor scheduling"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab03.html\" class=\"detailsLink\">Lab 3</a> <br /> Queue Implementation<br /> Process Chai"]
                }
            ]
        },
        {
            "week": 4,
            "session": 15,
            "sessionDate": "Thursday 01/07/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <a href=\"../Labs/lab04.html\">Lab 4: Thread Management</a>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"http://www.cprogramming.com/tutorial/function-pointers.html\">Programs as Data: Function Pointers </a>"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab04.html\" class=\"detailsLink\">Lab 4</a> <br /> Threads <br /> Signal Handlin"]
                }
            ]
        },
        {
            "week": 4,
            "session": 16,
            "sessionDate": "Friday 01/08/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": ""
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Projects/BareMetalOS/OS_paper_for_sigcse_2009_final.PDF\">Build an OS from scratch</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Building an operating system from scratch.",
                        "  <span class=\"exam\">Project kick-off</span>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ProjectKickoff.pdf\">Slides</a>: Project Kickoff"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab04.html\" class=\"detailsLink\">Lab 4</a> <br /> Threads <br /> Signal Handling, <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Booting Getting Starte"]
                }
            ]
        },
        {
            "week": 5,
            "session": 17,
            "sessionDate": "Monday 01/11/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw13.html\">HW 13</a> at 5:10 PM"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Exam 1 review"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Exams/Exam 1 Resources/csse332-SampleExams-Exam1.zip\">Resources for Exam 1</a>: List of key ideas, sample exam questions, etc"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab04.html\" class=\"detailsLink\">Lab 4</a> <br /> Threads <br /> Signal Handling, <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Booting Getting Starte"]
                }
            ]
        },
        {
            "week": 5,
            "session": 18,
            "sessionDate": "Tuesday 01/12/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 10 (10.1 to 10.3, 10.6)"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  File system Interface",
                        "  File structure, attributes, operations",
                        "  Directory structure, operations, organization",
                        "  File system structure"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/FileSystemInterface.pdf\">Slides</a>:   File System Interface"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab04.html\" class=\"detailsLink\">Lab 4</a> <br /> Threads <br /> Signal Handling, <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Booting Getting Starte"]
                }
            ]
        },
        {
            "week": 5,
            "session": 19,
            "sessionDate": "Thursday 01/14/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <span class=\"exam\">Exam 1 <br /> To be done in-class during lab period</span>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab04.html\" class=\"detailsLink\">Lab 4</a> <br /> Threads <br /> Signal Handling, <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Booting Getting Starte"]
                }
            ]
        },
        {
            "week": 5,
            "session": 20,
            "sessionDate": "Friday 01/15/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <span class=\"exam\">Review exam 1</span>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Labs/lab04.html\" class=\"detailsLink\">Lab 4</a> <br /> Threads <br /> Signal Handling, <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Booting Getting Starte"]
                }
            ]
        },
        {
            "week": 6,
            "session": 21,
            "sessionDate": "Monday 01/18/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 11 (11.1 to 11.5)"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  File System Implementation",
                        "  File Allocation Methods",
                        "  Inode",
                        "  Free space management"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/FileSystemImplementation.pdf\">Slides</a>:   File System Implementation"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw20.html\">HW 20</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> System Call"]
                }
            ]
        },
        {
            "week": 6,
            "session": 22,
            "sessionDate": "Tuesday 01/19/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 6"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Exam 1 redux",
                        "  Process synchronization",
                        "  Race condition",
                        "  Critical-section problem",
                        "  Paterson's software solution",
                        "  Synchronization hardware solutions"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ProcessSynchronization.pdf\">Slides</a>: Process synchronization"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": ["  <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> System Call"]
                }
            ]
        },
        {
            "week": 6,
            "session": 23,
            "sessionDate": "Thursday 01/21/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 6"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Paterson's software solution (cont.)",
                        "  Synchronization hardware solutions (cont.)"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ProcessSynchronization-Semaphores.pdf\">Slides</a>: Process synchronization"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": ["  <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> System Call"]
                }
            ]
        },
        {
            "week": 6,
            "session": 24,
            "sessionDate": "Friday 01/22/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 6"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw20.html\">HW 20</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Process synchronization",
                        "  Critical-section problem",
                        "  Semaphores",
                        "  Bounded-Buffer Problem"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ProcessSynchronization-SemaphoresPractice.pdf\">Slides</a>: Concurrency, Enforcing Mutual Exclusion, Semaphores"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": ["   <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Loading Files and Executing Program"]
                }
            ]
        },
        {
            "week": 7,
            "session": 25,
            "sessionDate": "Monday 01/25/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 6"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Process synchronization",
                        "  Critical-section problem",
                        "  Monitors"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/ProcessSynchronization-Monitors.pdf\">Slides</a>: Concurrency with Monitors"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw25.html\">HW 25</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": ["   <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Loading Files and Executing Program"]
                }
            ]
        },
        {
            "week": 7,
            "session": 26,
            "sessionDate": "Tuesday 01/26/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 7"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Deadlock",
                        "  Necessary and sufficient conditions for deadlock",
                        "  Deadlock Handling",
                        "  Deadlock prevention"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/DeadlockAndStarvation.pdf\">Slides</a>: Deadlock and starvation"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": ["   <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Loading Files and Executing Program"]
                }
            ]
        },
        {
            "week": 7,
            "session": 27,
            "sessionDate": "Thursday 01/28/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <a href=\"../Labs/lab06.html\">Lab 6: Process communication and synchronization</a>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": ["   <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Loading Files and Executing Programs, <a href=\"../Labs/lab06.html\" class=\"detailsLink\">Lab 6</a> <br /> Process <br /> synchronizatio"]
                }
            ]
        },
        {
            "week": 7,
            "session": 28,
            "sessionDate": "Friday 01/29/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 7"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw25.html\">HW 25</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Deadlock",
                        "  Deadlock Handling",
                        "  Deadlock Avoidance",
                        "  Banker's Algorithm"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/DeadlockAvoidance.pdf\">Slides</a>: Deadlock Avoidance"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Writing Files and Improving Shell, <a href=\"../Labs/lab06.html\" class=\"detailsLink\">Lab 6</a> <br /> Process <br /> synchronizatio"]
                }
            ]
        },
        {
            "week": 8,
            "session": 29,
            "sessionDate": "Monday 02/01/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 7"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Deadlock",
                        "  Deadlock Handling",
                        "  Deadlock Detection and Recovery",
                        "  Dining philosophers problem"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/DeadlockDetectionAndRecovery.pdf\">Slides</a>: Deadlock Detection and Recovery"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw29.html\">HW 29</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Writing Files and Improving Shell, <a href=\"../Labs/lab06.html\" class=\"detailsLink\">Lab 6</a> <br /> Process <br /> synchronizatio"]
                }
            ]
        },
        {
            "week": 8,
            "session": 30,
            "sessionDate": "Tuesday 02/02/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 8 (8.1 to 8.3)"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Main Memory",
                        "  Logical vs Physical Address Space",
                        "  Swapping Processes",
                        "  Contiguous Memory Allocation"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/MainMemory.pdf\">Slides</a>: Main Memory"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Writing Files and Improving Shell, <a href=\"../Labs/lab06.html\" class=\"detailsLink\">Lab 6</a> <br /> Process <br /> synchronizatio"]
                }
            ]
        },
        {
            "week": 8,
            "session": 31,
            "sessionDate": "Thursday 02/04/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <span class=\"exam\">Student lab time</span>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Writing Files and Improving Shel"]
                }
            ]
        },
        {
            "week": 8,
            "session": 32,
            "sessionDate": "Friday 02/05/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 8 (8.4 and 8.6)"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw29.html\">HW 29</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Main Memory",
                        "  Simple Paging",
                        "  Segmentation"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/MainMemoryPagingSegmentation.pdf\">Slides</a>: Paging and Segmentation"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw32.html\">HW 32</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Processes and Multitaskin"]
                }
            ]
        },
        {
            "week": 9,
            "session": 33,
            "sessionDate": "Monday 02/08/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 9"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw32.html\">HW 32</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Virtual Memory",
                        "  Support needed for virtual memory",
                        "  Virtual memory with simple paging",
                        "  Benefits of Virtual memory",
                        "  Intro to page replacement"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/VirtualMemory.pdf\">Slides</a>: Virtual Memory"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Processes and Multitaskin"]
                }
            ]
        },
        {
            "week": 9,
            "session": 34,
            "sessionDate": "Tuesday 02/09/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 9"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Virtual Memory",
                        "  Page replacement algorithms"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/VirtualMemoryPageReplacement.pdf\">Slides</a>: Virtual Memory Page Replacement Policies"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw34.html\">HW 34</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": [" <a href=\"../Projects/BareMetalOS/index.html\" class=\"detailsLink\">Build an OS from scratch</a> <br /> Processes and Multitaskin"]
                }
            ]
        },
        {
            "week": 9,
            "session": 35,
            "sessionDate": "Thursday 02/11/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <span class=\"exam\">Project Presentation</span>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Projects/BareMetalOS/presentationSchedule.html\">Presentation Schedule</a>"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": [" Exam 2"]
                }
            ]
        },
        {
            "week": 9,
            "session": 36,
            "sessionDate": "Friday 02/12/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 8 (8.5)"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw34.html\">HW 34</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Main Memory Page Table Structure",
                        "  Hierarchal Paging",
                        "  Inverted Page Tables",
                        "  Paging with Translation Lookaside Buffer (TLB)"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/MemoryPageTableStructure.pdf\">Slides</a>: Page Table Structure"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw36.html\">HW 36</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": []
                }
            ]
        },
        {
            "week": 10,
            "session": 37,
            "sessionDate": "Monday 02/15/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Exam 2 review"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Exams/Exam 2 Resources/csse332-SampleExams-Exam2.zip\">Resources for Exam 2</a>: List of key ideas, sample exam questions, etc.  This is not complete since the course has evolved."
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": []
                }
            ]
        },
        {
            "week": 10,
            "session": 38,
            "sessionDate": "Tuesday 02/16/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": [
                        "  Silberschatz Chapter 12"
                    ]
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw36.html\">HW 36</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Mass Storage structure",
                        "  Disk Scheduling"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": [
                        "  <a href=\"../Slides/MassStorageDiskScheduling.pdf\">Slides</a>: Mass Storage Structure: Disk Scheduling"
                    ]
                },
                {
                    "name": "HW_Assigned",
                    "values": [
                        "  <a href=\"../Homework/hw38.html\">HW 38</a>"
                    ]
                },
                {
                    "name": "Milestone",
                    "values": []
                }
            ]
        },
        {
            "week": 10,
            "session": 39,
            "sessionDate": "Thursday 02/18/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": []
                },
                {
                    "name": "Topics",
                    "values": [
                        "  <span class=\"exam\">Exam 2 <br /> To be done in-class during lab period</span>"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": []
                }
            ]
        },
        {
            "week": 10,
            "session": 40,
            "sessionDate": "Friday 02/19/2016",
            "scheduleComponents": [

                {
                    "name": "Reading",
                    "values": []
                },
                {
                    "name": "HW_Due",
                    "values": [
                        "  <a href=\"../Homework/hw38.html\">HW 38</a>"
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        "  Complete course evaluations"
                    ]
                },
                {
                    "name": "Outline",
                    "values": []
                },
                {
                    "name": "Resources",
                    "values": []
                },
                {
                    "name": "HW_Assigned",
                    "values": []
                },
                {
                    "name": "Milestone",
                    "values": []
                }
            ]
        }
    ];


})();
