/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listCampaignsMailchimp = function (inputs) {

	var options = {
		url: config.get("mailChimpApiUrl") + "/campaigns",
		authorization:{
			type: "basic",
			username: "anyUser",
			password: config.get("apiKey")
		}
	}

	return httpService.get(options);

}