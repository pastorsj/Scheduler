(function() {
	var schedule = angular.module('schedule', []);
	schedule.controller('ScheduleController', function() {
		this.schedule = getScheduleObject();
	});
})();