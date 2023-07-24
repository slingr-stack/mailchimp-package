/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listCampaignsMailchimp = function (inputs) {

	var options = {
		url: config.get("url") + "/campaigns"
	}

	return httpService.get(options);

}