step.addCampaignMailchimp = function (inputs) {

    var inputsLogic = {
        name: inputs.type || "regular",
        recipients: {
            list_id: inputs.listId || "",
        }
    };

    var options = {
        path: "/campaigns",
        body: inputsLogic
    }

    return endpoint._post(options);

}