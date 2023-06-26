step.createNewListMailchimp = function (inputs) {

    var inputsLogic = {
        name: inputs.name || "",
        contact: {
            address2: inputs.address2 || "",
            state: inputs.state || "",
            zip: inputs.zip || "",
            phone: inputs.phone || "",
            company: inputs.company || "",
            address1: inputs.address1 || "",
            city: inputs.city || "",
            country: inputs.country || ""
        },
        state: inputs.state || "",
        permission_reminder: inputs.permissionReminder || "",
        campaign_defaults: {
            from_name: inputs.fromName ||  "",
            from_email: inputs.fromEmail || "",
            subject: inputs.subject ||  "",
            language: inputs.language ||  ""
        },
        email_type_option: inputs.emailTypeOption || false,
        use_archive_bar: inputs.useArchiveBar || false,
        notify_on_subscribe: inputs.notifyOnSubscribe || "",
        notify_on_unsubscribe: inputs.notifyOnUnsubscribe || "",
        double_optin: inputs.doubleOptin || false,
        marketing_permissions: inputs.marketingPermissions || false
    };

    var options = {
        path: "/lists",
        body: inputsLogic
    }

    return endpoint._post(options);

}