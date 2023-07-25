/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listInfoMailchimp = function (inputs) {

	var options = {
		url: config.get("mailChimpApiUrl") + "/lists"
	}

	return httpService.get(options);

}