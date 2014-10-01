var app = angular.module("parseQueue");

app.factory("httpRequestInterceptor", function(){
	return {
		request: function(config){
			config.headers = {"X-Parse-Application-ID": "M9O5NYVtaUHQoAa5VkBBpSJ4t5NaBmlMGfkRmBcU", "X-Parse-REST-API-Key": "ldqtFosnwzEypxOmWzdJX4SasDqovBxim2578Bbr"}
			return config;
		}
	};
});