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
        sys.logs.info('Received Mailchimp webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        sys.logs.info('Valid webhook received. Triggering event.');
        sys.events.triggerEvent('mailchimp:webhook', {
            body: body,
            params: params
        });
        return "ok";
    }
};
