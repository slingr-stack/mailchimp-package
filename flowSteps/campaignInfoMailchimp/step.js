/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.campaignInfoMailchimp = function (inputs) {

	var inputsLogic = {
		campaignId: inputs.campaignId || "",
	};

	var options = {
		url: config.get("mailChimpApiUrl") + "/campaigns/" + inputsLogic.campaignId,
		authorization:{
			type: "basic",
			username: "anyUser",
			password: config.get("apiKey")
		}
	}

	return httpService.get(options);

}