/****************************************************
 Dependencies
 ****************************************************/

var httpReference = dependencies.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.error(JSON.stringify(error));
        sys.logs.info("[mailchimp] Handling request...");
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.batchWebhooks = {};

exports.campaignFolders = {};

exports.campaigns = {};

exports.campaigns.feedback = {};

exports.ecommerce = {};

exports.ecommerce.stores = {};

exports.ecommerce.stores.carts = {};

exports.ecommerce.stores.carts.lines = {};

exports.ecommerce.stores.customers = {};

exports.ecommerce.stores.orders = {};

exports.ecommerce.stores.orders.lines = {};

exports.ecommerce.stores.products = {};

exports.ecommerce.stores.products.images = {};

exports.ecommerce.stores.products.variants = {};

exports.fileManager = {};

exports.fileManager.files = {};

exports.fileManager.folders = {};

exports.lists = {};

exports.lists.interestCategories = {};

exports.lists.interestCategories.interests = {};

exports.lists.members = {};

exports.lists.members.notes = {};

exports.lists.mergeFields = {};

exports.lists.segments = {};

exports.lists.webhooks = {};

exports.templateFolders = {};

exports.templates = {};

exports.authorizedApps = {};

exports.automations = {};

exports.automations.actions = {};

exports.automations.actions.pauseAllEmails = {};

exports.automations.actions.startAllEmails = {};

exports.automations.emails = {};

exports.automations.emails.actions = {};

exports.automations.emails.actions.pause = {};

exports.automations.emails.actions.start = {};

exports.automations.emails.queue = {};

exports.automations.removedSubscribers = {};

exports.batches = {};

exports.campaigns.actions = {};

exports.campaigns.actions.cancelSend = {};

exports.campaigns.actions.pause = {};

exports.campaigns.actions.replicate = {};

exports.campaigns.actions.resume = {};

exports.campaigns.actions.schedule = {};

exports.campaigns.actions.send = {};

exports.campaigns.actions.test = {};

exports.campaigns.actions.unschedule = {};

exports.conversations = {};

exports.conversations.messages = {};

exports.lists.segments.members = {};

exports.lists.signupForms = {};

exports.campaigns.content = {};

exports.campaigns.sendChecklist = {};

exports.lists.abuseReports = {};

exports.lists.activity = {};

exports.lists.clients = {};

exports.lists.growthHistory = {};

exports.lists.locations = {};

exports.lists.members.activity = {};

exports.lists.members.goals = {};

exports.reports = {};

exports.reports.abuseReports = {};

exports.reports.advice = {};

exports.reports.clickDetails = {};

exports.reports.clickDetails.members = {};

exports.reports.domainPerformance = {};

exports.reports.eepurl = {};

exports.reports.emailActivity = {};

exports.reports.locations = {};

exports.reports.sentTo = {};

exports.reports.subReports = {};

exports.reports.unsubscribed = {};

exports.searchCampaigns = {};

exports.searchMembers = {};

exports.templates.defaultContent = {};

exports.batchWebhooks.patch = function(batchWebhookId, httpOptions) {
    if (!batchWebhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
        return;
    }
    var url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.campaignFolders.patch = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/campaign-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.campaigns.patch = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id', [campaignId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.campaigns.feedback.patch = function(campaignId, feedbackId, httpOptions) {
    if (!campaignId || !feedbackId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.patch = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id', [storeId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.carts.patch = function(storeId, cartId, httpOptions) {
    if (!storeId || !cartId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.carts.lines.patch = function(storeId, cartId, lineId, httpOptions) {
    if (!storeId || !cartId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.customers.patch = function(storeId, customerId, httpOptions) {
    if (!storeId || !customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.orders.patch = function(storeId, orderId, httpOptions) {
    if (!storeId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.orders.lines.patch = function(storeId, orderId, lineId, httpOptions) {
    if (!storeId || !orderId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.products.patch = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.products.images.patch = function(storeId, productId, imageId, httpOptions) {
    if (!storeId || !productId || !imageId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.ecommerce.stores.products.variants.patch = function(storeId, productId, variantId, httpOptions) {
    if (!storeId || !productId || !variantId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.fileManager.files.patch = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/file-manager/files/:file_id', [fileId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.fileManager.folders.patch = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/file-manager/folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.patch = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id', [listId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.interestCategories.patch = function(listId, interestCategoryId, httpOptions) {
    if (!listId || !interestCategoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.interestCategories.interests.patch = function(listId, interestCategoryId, interestId, httpOptions) {
    if (!listId || !interestCategoryId || !interestId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.members.patch = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.members.notes.patch = function(listId, subscriberHash, noteId, httpOptions) {
    if (!listId || !subscriberHash || !noteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.mergeFields.patch = function(listId, mergeId, httpOptions) {
    if (!listId || !mergeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
        return;
    }
    var url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.segments.patch = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.lists.webhooks.patch = function(listId, webhookId, httpOptions) {
    if (!listId || !webhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
        return;
    }
    var url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.templateFolders.patch = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/template-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.templates.patch = function(templateId, httpOptions) {
    if (!templateId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
        return;
    }
    var url = parse('/templates/:template_id', [templateId]);
    sys.logs.debug('[mailchimp] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options));
};

exports.authorizedApps.post = function(httpOptions) {
    var url = parse('/authorized-apps');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.automations.actions.pauseAllEmails.post = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/actions/pause-all-emails', [workflowId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.automations.actions.startAllEmails.post = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/actions/start-all-emails', [workflowId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.automations.emails.actions.pause.post = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id/actions/pause', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.automations.emails.actions.start.post = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id/actions/start', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.automations.emails.queue.post = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.automations.removedSubscribers.post = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/removed-subscribers', [workflowId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.batches.post = function(httpOptions) {
    var url = parse('/batches');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.batchWebhooks.post = function(httpOptions) {
    var url = parse('/batch-webhooks');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaignFolders.post = function(httpOptions) {
    var url = parse('/campaign-folders');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.post = function(httpOptions) {
    var url = parse('/campaigns');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.cancelSend.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/cancel-send', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.pause.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/pause', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.replicate.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/replicate', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.resume.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/resume', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.schedule.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/schedule', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.send.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/send', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.test.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/test', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.actions.unschedule.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/actions/unschedule', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.campaigns.feedback.post = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/feedback', [campaignId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.conversations.messages.post = function(conversationId, httpOptions) {
    if (!conversationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [conversationId].');
        return;
    }
    var url = parse('/conversations/:conversation_id/messages', [conversationId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.post = function(httpOptions) {
    var url = parse('/ecommerce/stores');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.carts.post = function(storeId, cartId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/ecommerce/stores/:store_id/carts', [storeId]);
			break;
		case 2:
			url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.carts.lines.post = function(storeId, cartId, httpOptions) {
    if (!storeId || !cartId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines', [storeId, cartId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.customers.post = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers', [storeId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.orders.post = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders', [storeId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.products.post = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products', [storeId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.products.images.post = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/images', [storeId, productId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.ecommerce.stores.products.variants.post = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants', [storeId, productId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.fileManager.files.post = function(httpOptions) {
    var url = parse('/file-manager/files');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.fileManager.folders.post = function(httpOptions) {
    var url = parse('/file-manager/folders');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.lists.post = function(listId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/lists');
			break;
		case 1:
			url = parse('/lists/:list_id', [listId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Mailchimp(options));
};

exports.lists.interestCategories.post = function(listId, interestCategoryId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/lists/:list_id/interest-categories', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Mailchimp(options));
};

exports.lists.interestCategories.interests.post = function(listId, interestCategoryId, httpOptions) {
    if (!listId || !interestCategoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests', [listId, interestCategoryId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.lists.members.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/members', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.lists.members.notes.post = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/notes', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.lists.mergeFields.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/merge-fields', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.lists.segments.post = function(listId, segmentId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/lists/:list_id/segments', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Mailchimp(options));
};

exports.lists.segments.members.post = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id/members', [listId, segmentId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.lists.signupForms.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/signup-forms', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.lists.webhooks.post = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/webhooks', [listId]);
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.templateFolders.post = function(httpOptions) {
    var url = parse('/template-folders');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.templates.post = function(httpOptions) {
    var url = parse('/templates');
    sys.logs.debug('[mailchimp] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options));
};

exports.authorizedApps.get = function(appId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/authorized-apps');
			break;
		case 1:
			url = parse('/authorized-apps/:app_id', [appId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.automations.get = function(workflowId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/automations');
			break;
		case 1:
			url = parse('/automations/:workflow_id', [workflowId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.automations.emails.get = function(workflowId, workflowEmailId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/automations/:workflow_id/emails', [workflowId]);
			break;
		case 2:
			url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId, workflowEmailId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.automations.emails.queue.get = function(workflowId, workflowEmailId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue', [workflowId, workflowEmailId]);
			break;
		case 3:
			url = parse('/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash', [workflowId, workflowEmailId, subscriberHash]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.automations.removedSubscribers.get = function(workflowId, httpOptions) {
    if (!workflowId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId].');
        return;
    }
    var url = parse('/automations/:workflow_id/removed-subscribers', [workflowId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.batches.get = function(batchId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/batches');
			break;
		case 1:
			url = parse('/batches/:batch_id', [batchId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.batchWebhooks.get = function(batchWebhookId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/batch-webhooks');
			break;
		case 1:
			url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.campaignFolders.get = function(folderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/campaign-folders');
			break;
		case 1:
			url = parse('/campaign-folders/:folder_id', [folderId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.campaigns.get = function(campaignId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/campaigns');
			break;
		case 1:
			url = parse('/campaigns/:campaign_id', [campaignId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.campaigns.content.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/content', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.campaigns.feedback.get = function(campaignId, feedbackId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/campaigns/:campaign_id/feedback', [campaignId]);
			break;
		case 2:
			url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.campaigns.sendChecklist.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/send-checklist', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.conversations.get = function(conversationId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/conversations');
			break;
		case 1:
			url = parse('/conversations/:conversation_id', [conversationId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.conversations.messages.get = function(conversationId, messageId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/conversations/:conversation_id/messages', [conversationId]);
			break;
		case 2:
			url = parse('/conversations/:conversation_id/messages/:message_id', [conversationId, messageId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.get = function(storeId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/ecommerce/stores');
			break;
		case 1:
			url = parse('/ecommerce/stores/:store_id', [storeId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.carts.lines.get = function(storeId, cartId, lineId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines', [storeId, cartId]);
			break;
		case 3:
			url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.customers.get = function(storeId, customerId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/ecommerce/stores/:store_id/customers', [storeId]);
			break;
		case 2:
			url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.orders.get = function(storeId, orderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/ecommerce/stores/:store_id/orders', [storeId]);
			break;
		case 2:
			url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.orders.lines.get = function(storeId, orderId, lineId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines', [storeId, orderId]);
			break;
		case 3:
			url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.products.get = function(storeId, productId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/ecommerce/stores/:store_id/products', [storeId]);
			break;
		case 2:
			url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.products.images.get = function(storeId, productId, imageId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/ecommerce/stores/:store_id/products/:product_id/images', [storeId, productId]);
			break;
		case 3:
			url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.ecommerce.stores.products.variants.get = function(storeId, productId, variantId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/ecommerce/stores/:store_id/products/:product_id/variants', [storeId, productId]);
			break;
		case 3:
			url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.fileManager.files.get = function(fileId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/file-manager/files');
			break;
		case 1:
			url = parse('/file-manager/files/:file_id', [fileId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.fileManager.folders.get = function(folderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/file-manager/folders');
			break;
		case 1:
			url = parse('/file-manager/folders/:folder_id', [folderId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.get = function(listId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/lists');
			break;
		case 1:
			url = parse('/lists/:list_id', [listId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.abuseReports.get = function(listId, reportId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/lists/:list_id/abuse-reports', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/abuse-reports/:report_id', [listId, reportId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.activity.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/activity', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.lists.clients.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/clients', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.lists.growthHistory.get = function(listId, month, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/lists/:list_id/growth-history', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/growth-history/:month', [listId, month]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.interestCategories.interests.get = function(listId, interestCategoryId, interestId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests', [listId, interestCategoryId]);
			break;
		case 3:
			url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.locations.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/locations', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.lists.members.get = function(listId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/lists/:list_id/members', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.members.activity.get = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/activity', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.lists.members.goals.get = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/goals', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.lists.members.notes.get = function(listId, subscriberHash, noteId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/lists/:list_id/members/:subscriber_hash/notes', [listId, subscriberHash]);
			break;
		case 3:
			url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.mergeFields.get = function(listId, mergeId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/lists/:list_id/merge-fields', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.segments.get = function(listId, segmentId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/lists/:list_id/segments', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.lists.segments.members.get = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id/members', [listId, segmentId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.lists.signupForms.get = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id/signup-forms', [listId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.lists.webhooks.get = function(listId, webhookId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/lists/:list_id/webhooks', [listId]);
			break;
		case 2:
			url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.reports.get = function(campaignId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/reports');
			break;
		case 1:
			url = parse('/reports/:campaign_id', [campaignId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.reports.abuseReports.get = function(campaignId, reportId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/reports/:campaign_id/abuse-reports', [campaignId]);
			break;
		case 2:
			url = parse('/reports/:campaign_id/abuse-reports/:report_id', [campaignId, reportId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.reports.advice.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/advice', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.reports.clickDetails.get = function(campaignId, linkId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/reports/:campaign_id/click-details', [campaignId]);
			break;
		case 2:
			url = parse('/reports/:campaign_id/click-details/:link_id', [campaignId, linkId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.reports.clickDetails.members.get = function(campaignId, linkId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/reports/:campaign_id/click-details/:link_id/members', [campaignId, linkId]);
			break;
		case 3:
			url = parse('/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash', [campaignId, linkId, subscriberHash]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.reports.domainPerformance.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/domain-performance', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.reports.eepurl.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/eepurl', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.reports.emailActivity.get = function(campaignId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/reports/:campaign_id/email-activity', [campaignId]);
			break;
		case 2:
			url = parse('/reports/:campaign_id/email-activity/:subscriber_hash', [campaignId, subscriberHash]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.reports.locations.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/locations', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.reports.sentTo.get = function(campaignId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/reports/:campaign_id/sent-to', [campaignId]);
			break;
		case 2:
			url = parse('/reports/:campaign_id/sent-to/:subscriber_hash', [campaignId, subscriberHash]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.reports.subReports.get = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/reports/:campaign_id/sub-reports', [campaignId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.reports.unsubscribed.get = function(campaignId, subscriberHash, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/reports/:campaign_id/unsubscribed', [campaignId]);
			break;
		case 2:
			url = parse('/reports/:campaign_id/unsubscribed/:subscriber_hash', [campaignId, subscriberHash]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.searchCampaigns.get = function(httpOptions) {
    var url = parse('/search-campaigns');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.searchMembers.get = function(httpOptions) {
    var url = parse('/search-members');
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.templateFolders.get = function(folderId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/template-folders');
			break;
		case 1:
			url = parse('/template-folders/:folder_id', [folderId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.templates.get = function(templateId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/templates');
			break;
		case 1:
			url = parse('/templates/:template_id', [templateId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[mailchimp] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Mailchimp(options));
};

exports.templates.defaultContent.get = function(templateId, httpOptions) {
    if (!templateId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
        return;
    }
    var url = parse('/templates/:template_id/default-content', [templateId]);
    sys.logs.debug('[mailchimp] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options));
};

exports.automations.emails.delete = function(workflowId, workflowEmailId, httpOptions) {
    if (!workflowId || !workflowEmailId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [workflowId,workflowEmailId].');
        return;
    }
    var url = parse('/automations/:workflow_id/emails/:workflow_email_id', [workflowId, workflowEmailId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.batches.delete = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/batches/:batch_id', [batchId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.batchWebhooks.delete = function(batchWebhookId, httpOptions) {
    if (!batchWebhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchWebhookId].');
        return;
    }
    var url = parse('/batch-webhooks/:batch_webhook_id', [batchWebhookId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.campaignFolders.delete = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/campaign-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.campaigns.delete = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id', [campaignId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.campaigns.feedback.delete = function(campaignId, feedbackId, httpOptions) {
    if (!campaignId || !feedbackId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId,feedbackId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/feedback/:feedback_id', [campaignId, feedbackId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.delete = function(storeId, httpOptions) {
    if (!storeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id', [storeId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.carts.delete = function(storeId, cartId, httpOptions) {
    if (!storeId || !cartId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id', [storeId, cartId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.carts.lines.delete = function(storeId, cartId, lineId, httpOptions) {
    if (!storeId || !cartId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,cartId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id', [storeId, cartId, lineId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.customers.delete = function(storeId, customerId, httpOptions) {
    if (!storeId || !customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.orders.delete = function(storeId, orderId, httpOptions) {
    if (!storeId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id', [storeId, orderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.orders.lines.delete = function(storeId, orderId, lineId, httpOptions) {
    if (!storeId || !orderId || !lineId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,orderId,lineId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id', [storeId, orderId, lineId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.products.delete = function(storeId, productId, httpOptions) {
    if (!storeId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id', [storeId, productId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.products.images.delete = function(storeId, productId, imageId, httpOptions) {
    if (!storeId || !productId || !imageId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,imageId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/images/:image_id', [storeId, productId, imageId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.ecommerce.stores.products.variants.delete = function(storeId, productId, variantId, httpOptions) {
    if (!storeId || !productId || !variantId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.fileManager.files.delete = function(fileId, httpOptions) {
    if (!fileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [fileId].');
        return;
    }
    var url = parse('/file-manager/files/:file_id', [fileId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.fileManager.folders.delete = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/file-manager/folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.delete = function(listId, httpOptions) {
    if (!listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId].');
        return;
    }
    var url = parse('/lists/:list_id', [listId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.interestCategories.delete = function(listId, interestCategoryId, httpOptions) {
    if (!listId || !interestCategoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id', [listId, interestCategoryId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.interestCategories.interests.delete = function(listId, interestCategoryId, interestId, httpOptions) {
    if (!listId || !interestCategoryId || !interestId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,interestCategoryId,interestId].');
        return;
    }
    var url = parse('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id', [listId, interestCategoryId, interestId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.members.delete = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.members.notes.delete = function(listId, subscriberHash, noteId, httpOptions) {
    if (!listId || !subscriberHash || !noteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash,noteId].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash/notes/:note_id', [listId, subscriberHash, noteId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.mergeFields.delete = function(listId, mergeId, httpOptions) {
    if (!listId || !mergeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,mergeId].');
        return;
    }
    var url = parse('/lists/:list_id/merge-fields/:merge_id', [listId, mergeId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.segments.delete = function(listId, segmentId, httpOptions) {
    if (!listId || !segmentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id', [listId, segmentId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.segments.members.delete = function(listId, segmentId, subscriberHash, httpOptions) {
    if (!listId || !segmentId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,segmentId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/segments/:segment_id/members/:subscriber_hash', [listId, segmentId, subscriberHash]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.lists.webhooks.delete = function(listId, webhookId, httpOptions) {
    if (!listId || !webhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,webhookId].');
        return;
    }
    var url = parse('/lists/:list_id/webhooks/:webhook_id', [listId, webhookId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.templateFolders.delete = function(folderId, httpOptions) {
    if (!folderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [folderId].');
        return;
    }
    var url = parse('/template-folders/:folder_id', [folderId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.templates.delete = function(templateId, httpOptions) {
    if (!templateId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [templateId].');
        return;
    }
    var url = parse('/templates/:template_id', [templateId]);
    sys.logs.debug('[mailchimp] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options));
};

exports.campaigns.content.put = function(campaignId, httpOptions) {
    if (!campaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [campaignId].');
        return;
    }
    var url = parse('/campaigns/:campaign_id/content', [campaignId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Mailchimp(options));
};

exports.ecommerce.stores.customers.put = function(storeId, customerId, httpOptions) {
    if (!storeId || !customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,customerId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/customers/:customer_id', [storeId, customerId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Mailchimp(options));
};

exports.ecommerce.stores.products.variants.put = function(storeId, productId, variantId, httpOptions) {
    if (!storeId || !productId || !variantId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [storeId,productId,variantId].');
        return;
    }
    var url = parse('/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id', [storeId, productId, variantId]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Mailchimp(options));
};

exports.lists.members.put = function(listId, subscriberHash, httpOptions) {
    if (!listId || !subscriberHash) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [listId,subscriberHash].');
        return;
    }
    var url = parse('/lists/:list_id/members/:subscriber_hash', [listId, subscriberHash]);
    sys.logs.debug('[mailchimp] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Mailchimp(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Mailchimp(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Mailchimp(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Mailchimp(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Mailchimp(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Mailchimp(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(Mailchimp(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(Mailchimp(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[pandadoc] Get property: '+property);
    return config.get(property);
};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[mailchimp] Get property: '+property);
    return config.get(property);
};

exports.utils.verifySignature = function (body, signature) {
    sys.logs.info("Checking signature");
    var secret = config.get("webhookSecret");
    if (!secret || secret === "" ||
        !sys.utils.crypto.verifySignatureWithHmac(body, signature.replace("sha1=",""), secret, "HmacSHA256")) {
        sys.logs.error("Invalid signature or body");
        return false;
    }
    return true;
};

/****************************************************
 Private helpers
 ****************************************************/

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}


/****************************************************
 Configurator
 ****************************************************/

var Mailchimp = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var url = options.path || "";
    options.url = config.get("mailChimpApiUrl") + url;
    sys.logs.debug('[mailchimp] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    sys.logs.debug('[mailchimp] Setting header basic oauth');
    var authorization = options.authorization || {};
    authorization = mergeJSON(authorization, {
        type: "basic",
        username: "anyUser",
        password: config.get("apiKey")
    });
    options.authorization = authorization;
    return options;
}

function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
