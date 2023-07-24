/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listMembersInfoMailchimp = function (inputs) {

	var inputsLogic = {
		listId: inputs.listId || "",
	};

	var options = {
		url: config.get("url") + "/lists/" + inputsLogic.listId + "/members"
	}

	return httpService.get(options);

}