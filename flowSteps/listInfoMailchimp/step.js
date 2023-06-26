step.listInfoMailchimp = function (inputs) {

	var options = {
		path: "/lists"
	}

	return endpoint._get(options);

}