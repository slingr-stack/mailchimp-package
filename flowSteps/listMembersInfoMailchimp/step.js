step.listMembersInfoMailchimp = function (inputs) {

	var inputsLogic = {
		listId: inputs.listId || "",
	};

	var options = {
		path: "/lists/" + inputsLogic.listId + "/members"
	}

	return endpoint._get(options);

}