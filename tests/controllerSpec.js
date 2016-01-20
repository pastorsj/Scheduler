describe('ScheduleController', function() {

    //  load module in which controller is defined
    beforeEach(module('routingApp'));

    //  Our tests will go here.
    // var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {


        scope = $rootScope.$new();

        ctrl = $controller('ScheduleController', {
            $scope: scope,
        });
    }));

    it('should generate headers', function() {
        var header = scope.header;
        expect(header.length).toBe(4);
    });
     it('should generate scheduleComponentNames', function() {
         var scheduleComponentNames = scope.scheduleComponentNames;
         var expected = ["Week", "Session", "Readings", "HW Due", "Topics", "Outline", "Resources", "HW Assigned", "Milestone"];
         for (var i = 0; i < expected.length; i++) {
             expect(expected[i]).toEqual(scheduleComponentNames[i]);
         }
     });

     it('should generate the object', function() {
         var object = scope.object;
         expect(object.length).toBe(40);
     });

});
 describe('HomeworkController', function() {

      // load module in which controller is defined
     beforeEach(module('routingApp'));

      // Our tests will go here.
     var ctrl, scope;

     beforeEach(inject(function($controller, $rootScope) {


         scope = $rootScope.$new();

         ctrl = $controller('HomeworkController', {
             $scope: scope,
         });
     }));

     it('should generate homeworkComponents', function() {
         var homeworkComponents = scope.homeworkComponents;
         expect(homeworkComponents[0].type).toEqual("Homework");
     });

     it('should generate the object', function() {
         var object = scope.object;
         expect(object.length).toBe(40);
     });
     it('should get correct session date', function() {
         var getSessionDate = scope.getSessionDate;
         expect(getSessionDate(1)).toEqual(" 11/30/2015");
         expect(getSessionDate(40)).toEqual(" 02/19/2016");
         expect(getSessionDate(41)).not.toBeDefined();

     });
 });
 describe('ExamController', function() {

      // load module in which controller is defined
     beforeEach(module('routingApp'));

      // Our tests will go here.
     var ctrl, scope;

     beforeEach(inject(function($controller, $rootScope) {


         scope = $rootScope.$new();

         ctrl = $controller('ExamController', {
             $scope: scope,
         });
     }));

     it('should generate examComponents', function() {
         var examComponents = scope.examComponents;
         expect(examComponents[0].type).toEqual("Exam");
     });
     it('should generate the object', function() {
         var object = scope.object;
         expect(object.length).toBe(40);
     });
 });
 describe('LabController', function() {

      // load module in which controller is defined
     beforeEach(module('routingApp'));

      // Our tests will go here.
     var ctrl, scope;

     beforeEach(inject(function($controller, $rootScope) {


         scope = $rootScope.$new();

         ctrl = $controller('LabController', {
             $scope: scope,
         });
     }));


     it('should generate labComponents', function() {
         var labComponents = scope.labComponents;
         expect(labComponents[0].type).toEqual("Lab");
     });
     it('should generate the object', function() {
         var object = scope.object;
         expect(object.length).toBe(40);
     });
 });
