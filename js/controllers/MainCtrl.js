var app = angular.module("parseQueue");

app.controller("mainCtrl", function($scope, parseService){

	//$scope.test = "please work"
	$scope.postData = function(){
		parseService.postData($scope.studentQuestion)
		.then(function(data){
			getParseData();
		})
		$scope.studentQuestion = '';
	}

	var getParseData = function(){
		parseService.getData()
			.then(function(data){
				$scope.questions = mainData
				console.log(data)
			})
	}
	getParseData();

	$scope.changeStatus = function(question){
		// debugger;
		parseService.updateData(question.objectId)
		.then(function(data){
			getParseData();
		})
			
		}
	$scope.deleteQuestion = function(question){
		// debugger;
		parseService.deleteData(question.objectId)
		.then(function(data){
			getParseData();
		})
		
	}

})