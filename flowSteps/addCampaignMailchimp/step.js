/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.addCampaignMailchimp = function (inputs) {

    var inputsLogic = {
        name: inputs.type || "regular",
        recipients: {
            list_id: inputs.listId || "",
        }
    };

    var options = {
        url: config.get("mailChimpApiUrl") + "/campaigns",
        authorization:{
            type: "basic",
            username: "anyUser",
            password: config.get("apiKey")
        },
        body: inputsLogic
    }

    return httpService.post(options);

}