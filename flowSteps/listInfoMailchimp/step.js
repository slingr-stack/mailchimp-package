step.listInfoMailchimp = function (inputs) {

	var options = {
		path: "/lists"
	}

	return pkg.mailchimp.get(options);

}