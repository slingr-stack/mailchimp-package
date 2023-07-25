/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listMembersInfoMailchimp = function (inputs) {

	var inputsLogic = {
		listId: inputs.listId || "",
	};

	var options = {
		url: config.get("mailChimpApiUrl") + "/lists/" + inputsLogic.listId + "/members",
		authorization:{
			type: "basic",
			username: "anyUser",
			password: config.get("apiKey")
		}
	}

	return httpService.get(options);

}
