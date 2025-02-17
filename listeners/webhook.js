/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookMailchimp = {
    label: 'Catch HTTP mailchimp events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/mailchimp',
        }
    },
    callback: function(event) {
        sys.logs.info('[mailchimp] Received Mailchimp webhook. Processing and triggering a package event.');
        var params = event.data.parameters;
        sys.events.triggerEvent('mailchimp:webhook', event.data);
        return "ok";
    }
};
