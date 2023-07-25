/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.addMemberToListMailchimp = function (inputs) {

    var inputsLogic = {
        listId : inputs.listId || "",
        email_address: inputs.emailAddress || "",
        status: inputs.status || "",
        merge_fields: {
            FNAME: inputs.firstName || "",
            LNAME: inputs.lastName || ""
        }
    };


    var options = {
        url: config.get("mailChimpApiUrl") + "/lists/"+inputsLogic.listId+"/members",
        authorization:{
            type: "basic",
            username: "anyUser",
            password: config.get("apiKey")
        },
        body: inputsLogic,
    }

    return httpService.post(options);

}