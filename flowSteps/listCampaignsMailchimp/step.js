step.listCampaignsMailchimp = function (inputs) {

	var options = {
		path: "/campaigns"
	}

	return endpoint._get(options);

}