/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listInfoMailchimp = function (inputs) {

	sys.logs.error(JSON.stringify(inputs));

	var options = {
		url: config.get("mailChimpApiUrl") + "/lists",
		authorization:{
			type: "basic",
			username: "anyUser",
			password: config.get("apiKey")
		}
	}

	return httpService.get(options);

}