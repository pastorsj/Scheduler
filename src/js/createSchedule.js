(function() {
	var schedule = angular.module('schedule', ["ngSanitize"]);
	schedule.controller('ScheduleController', function() {
		this.scheduleObject = parseIntoScheduleSession();
	});
})();