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
        path: "/lists/"+inputsLogic.listId+"/members",
        body: inputsLogic
    }

    return endpoint._post(options);

}