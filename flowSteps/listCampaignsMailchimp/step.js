step.listCampaignsMailchimp = function (inputs) {

	var options = {
		path: "/campaigns"
	}

	return pkg.mailchimp.get(options);

}