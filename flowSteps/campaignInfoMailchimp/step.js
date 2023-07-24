/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.campaignInfoMailchimp = function (inputs) {

	var inputsLogic = {
		campaignId: inputs.campaignId || "",
	};

	var options = {
		url: config.get("url") + "/campaigns/" + inputsLogic.campaignId
	}

	return httpService.get(options);

}