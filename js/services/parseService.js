var app = angular.module("parseQueue")

app.service("parseService", function($http, $q){
	this.postData = function(question){
		return $http({
			method: "POST",
			url: "https://api.parse.com/1/classes/parseQ",
			data: {text: question, status: "red"}
		})
	} 	

	this.getData = function(){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "https://api.parse.com/1/classes/parseQ?order=-createdAt"
		}).then(function(data){
			mainData = data.data.results;
			deferred.resolve(mainData)
		})
		return deferred.promise;
	}

	this.updateData = function(objId){
		return $http({
			method: "PUT",
			url: "https://api.parse.com/1/classes/parseQ/" + objId,
			data: {status: "yellow"}
		})
	}

	this.deleteData = function(objId){
		return $http({
			method: "DELETE",
			url: "https://api.parse.com/1/classes/parseQ/" + objId
		})
	}
})