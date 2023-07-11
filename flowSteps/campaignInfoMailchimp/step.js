step.campaignInfoMailchimp = function (inputs) {

	var inputsLogic = {
		campaignId: inputs.campaignId || "",
	};

	var options = {
		path: "/campaigns/" + inputsLogic.campaignId
	}

	return pkg.mailchimp.functions.get(options);

}