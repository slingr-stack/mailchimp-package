# Javascript API

The Javascript API of the mailchimp package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `PATCH`,`POST`,`GET`,`DELETE`,`PUT` requests to the [mailchimp API](API_URL_HERE) like this:
```javascript
var response = pkg.mailchimp.functions.patch('/ecommerce/stores/:store_id/orders/:order_id', body)
var response = pkg.mailchimp.functions.patch('/ecommerce/stores/:store_id/orders/:order_id')
var response = pkg.mailchimp.functions.post('/lists/:list_id/interest-categories', body)
var response = pkg.mailchimp.functions.post('/lists/:list_id/interest-categories')
var response = pkg.mailchimp.functions.get('/conversations')
var response = pkg.mailchimp.functions.delete('/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id')
var response = pkg.mailchimp.functions.put('/lists/:list_id/members/:subscriber_hash', body)
var response = pkg.mailchimp.functions.put('/lists/:list_id/members/:subscriber_hash')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/authorized-apps'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.authorizedApps.post(body)
```
---
* API URL: '/authorized-apps'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.authorizedApps.get()
```
---
* API URL: '/authorized-apps/:app_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.authorizedApps.get()
```
---
* API URL: '/automations'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.automations.get()
```
---
* API URL: '/automations/:workflow_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.automations.get()
```
---
* API URL: '/automations/:workflow_id/emails'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.automations.emails.get()
```
---
* API URL: '/automations/:workflow_id/removed-subscribers'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.automations.removedSubscribers.post(workflowId, body)
```
---
* API URL: '/automations/:workflow_id/removed-subscribers'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.automations.removedSubscribers.get(workflowId)
```
---
* API URL: '/automations/:workflow_id/actions/pause-all-emails'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.automations.actions.pauseAllEmails.post(workflowId, body)
```
---
* API URL: '/automations/:workflow_id/actions/start-all-emails'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.automations.actions.startAllEmails.post(workflowId, body)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.automations.emails.get(workflowId)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.automations.emails.delete(workflowId, workflowEmailId)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/queue'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.automations.emails.queue.post(workflowId, workflowEmailId, body)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/queue'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.automations.emails.queue.get(workflowId)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/actions/pause'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.automations.emails.actions.pause.post(workflowId, workflowEmailId, body)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/actions/start'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.automations.emails.actions.start.post(workflowId, workflowEmailId, body)
```
---
* API URL: '/automations/:workflow_id/emails/:workflow_email_id/queue/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.automations.emails.queue.get(workflowId, workflowEmailId)
```
---
* API URL: '/batch-webhooks'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.batchWebhooks.post(body)
```
---
* API URL: '/batch-webhooks'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.batchWebhooks.get()
```
---
* API URL: '/batch-webhooks/:batch_webhook_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.batchWebhooks.patch(batchWebhookId, body)
```
---
* API URL: '/batch-webhooks/:batch_webhook_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.batchWebhooks.get()
```
---
* API URL: '/batch-webhooks/:batch_webhook_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.batchWebhooks.delete(batchWebhookId)
```
---
* API URL: '/batches'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.batches.post(body)
```
---
* API URL: '/batches'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.batches.get()
```
---
* API URL: '/batches/:batch_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.batches.get()
```
---
* API URL: '/batches/:batch_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.batches.delete(batchId)
```
---
* API URL: '/campaign-folders'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaignFolders.post(body)
```
---
* API URL: '/campaign-folders'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaignFolders.get()
```
---
* API URL: '/campaign-folders/:folder_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.campaignFolders.patch(folderId, body)
```
---
* API URL: '/campaign-folders/:folder_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaignFolders.get()
```
---
* API URL: '/campaign-folders/:folder_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.campaignFolders.delete(folderId)
```
---
* API URL: '/campaigns'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.post(body)
```
---
* API URL: '/campaigns'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaigns.get()
```
---
* API URL: '/campaigns/:campaign_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.campaigns.patch(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaigns.get()
```
---
* API URL: '/campaigns/:campaign_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.campaigns.delete(campaignId)
```
---
* API URL: '/campaigns/:campaign_id/content'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaigns.content.get(campaignId)
```
---
* API URL: '/campaigns/:campaign_id/content'
* HTTP Method: 'PUT'
```javascript
pkg.mailchimp.functions.campaigns.content.put(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/feedback'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.feedback.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/feedback'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaigns.feedback.get()
```
---
* API URL: '/campaigns/:campaign_id/send-checklist'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaigns.sendChecklist.get(campaignId)
```
---
* API URL: '/campaigns/:campaign_id/actions/cancel-send'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.cancelSend.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/pause'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.pause.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/replicate'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.replicate.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/resume'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.resume.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/schedule'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.schedule.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/send'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.send.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/test'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.test.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/actions/unschedule'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.campaigns.actions.unschedule.post(campaignId, body)
```
---
* API URL: '/campaigns/:campaign_id/feedback/:feedback_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.campaigns.feedback.patch(campaignId, feedbackId, body)
```
---
* API URL: '/campaigns/:campaign_id/feedback/:feedback_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.campaigns.feedback.get(campaignId)
```
---
* API URL: '/campaigns/:campaign_id/feedback/:feedback_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.campaigns.feedback.delete(campaignId, feedbackId)
```
---
* API URL: '/conversations'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.conversations.get()
```
---
* API URL: '/conversations/:conversation_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.conversations.get()
```
---
* API URL: '/conversations/:conversation_id/messages'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.conversations.messages.post(conversationId, body)
```
---
* API URL: '/conversations/:conversation_id/messages'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.conversations.messages.get()
```
---
* API URL: '/conversations/:conversation_id/messages/:message_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.conversations.messages.get(conversationId)
```
---
* API URL: '/ecommerce/stores'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.post(body)
```
---
* API URL: '/ecommerce/stores'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.get()
```
---
* API URL: '/ecommerce/stores/:store_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.patch(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.get()
```
---
* API URL: '/ecommerce/stores/:store_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.delete(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/carts'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.post(body)
```
---
* API URL: '/ecommerce/stores/:store_id/customers'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.customers.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/customers'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.customers.get()
```
---
* API URL: '/ecommerce/stores/:store_id/orders'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/orders'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.get()
```
---
* API URL: '/ecommerce/stores/:store_id/products'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.get()
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.patch(storeId, cartId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.post(storeId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.delete(storeId, cartId)
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.customers.patch(storeId, customerId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.customers.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.customers.delete(storeId, customerId)
```
---
* API URL: '/ecommerce/stores/:store_id/customers/:customer_id'
* HTTP Method: 'PUT'
```javascript
pkg.mailchimp.functions.ecommerce.stores.customers.put(storeId, customerId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.patch(storeId, orderId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.delete(storeId, orderId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.patch(storeId, productId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.delete(storeId, productId)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.lines.post(storeId, cartId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.lines.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.lines.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.images.post(storeId, productId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.images.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.variants.post(storeId, productId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.variants.get(storeId)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.lines.patch(storeId, cartId, lineId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.lines.get(storeId, cartId)
```
---
* API URL: '/ecommerce/stores/:store_id/carts/:cart_id/lines/:line_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.carts.lines.delete(storeId, cartId, lineId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.lines.patch(storeId, orderId, lineId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.lines.get(storeId, orderId)
```
---
* API URL: '/ecommerce/stores/:store_id/orders/:order_id/lines/:line_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.orders.lines.delete(storeId, orderId, lineId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images/:image_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.images.patch(storeId, productId, imageId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images/:image_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.images.get(storeId, productId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/images/:image_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.images.delete(storeId, productId, imageId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.variants.patch(storeId, productId, variantId, body)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.variants.get(storeId, productId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.variants.delete(storeId, productId, variantId)
```
---
* API URL: '/ecommerce/stores/:store_id/products/:product_id/variants/:variant_id'
* HTTP Method: 'PUT'
```javascript
pkg.mailchimp.functions.ecommerce.stores.products.variants.put(storeId, productId, variantId, body)
```
---
* API URL: '/file-manager/files'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.fileManager.files.post(body)
```
---
* API URL: '/file-manager/files'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.fileManager.files.get()
```
---
* API URL: '/file-manager/folders'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.fileManager.folders.post(body)
```
---
* API URL: '/file-manager/folders'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.fileManager.folders.get()
```
---
* API URL: '/file-manager/files/:file_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.fileManager.files.patch(fileId, body)
```
---
* API URL: '/file-manager/files/:file_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.fileManager.files.get()
```
---
* API URL: '/file-manager/files/:file_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.fileManager.files.delete(fileId)
```
---
* API URL: '/file-manager/folders/:folder_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.fileManager.folders.patch(folderId, body)
```
---
* API URL: '/file-manager/folders/:folder_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.fileManager.folders.get()
```
---
* API URL: '/file-manager/folders/:folder_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.fileManager.folders.delete(folderId)
```
---
* API URL: '/lists'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.post(body)
```
---
* API URL: '/lists'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.get()
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.patch(listId, body)
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.post(body)
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.get()
```
---
* API URL: '/lists/:list_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.delete(listId)
```
---
* API URL: '/lists/:list_id/abuse-reports'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.abuseReports.get()
```
---
* API URL: '/lists/:list_id/activity'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.activity.get(listId)
```
---
* API URL: '/lists/:list_id/clients'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.clients.get(listId)
```
---
* API URL: '/lists/:list_id/growth-history'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.growthHistory.get()
```
---
* API URL: '/lists/:list_id/interest-categories'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.interestCategories.post(body)
```
---
* API URL: '/lists/:list_id/locations'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.locations.get(listId)
```
---
* API URL: '/lists/:list_id/members'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.members.post(listId, body)
```
---
* API URL: '/lists/:list_id/members'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.members.get()
```
---
* API URL: '/lists/:list_id/merge-fields'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.mergeFields.post(listId, body)
```
---
* API URL: '/lists/:list_id/merge-fields'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.mergeFields.get()
```
---
* API URL: '/lists/:list_id/segments'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.segments.post(body)
```
---
* API URL: '/lists/:list_id/segments'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.segments.get()
```
---
* API URL: '/lists/:list_id/signup-forms'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.signupForms.post(listId, body)
```
---
* API URL: '/lists/:list_id/signup-forms'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.signupForms.get(listId)
```
---
* API URL: '/lists/:list_id/webhooks'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.webhooks.post(listId, body)
```
---
* API URL: '/lists/:list_id/webhooks'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.webhooks.get()
```
---
* API URL: '/lists/:list_id/abuse-reports/:report_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.abuseReports.get(listId)
```
---
* API URL: '/lists/:list_id/growth-history/:month'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.growthHistory.get(listId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.interestCategories.patch(listId, interestCategoryId, body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.interestCategories.post(listId, body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.interestCategories.delete(listId, interestCategoryId)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.members.patch(listId, subscriberHash, body)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.members.get(listId)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.members.delete(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash'
* HTTP Method: 'PUT'
```javascript
pkg.mailchimp.functions.lists.members.put(listId, subscriberHash, body)
```
---
* API URL: '/lists/:list_id/merge-fields/:merge_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.mergeFields.patch(listId, mergeId, body)
```
---
* API URL: '/lists/:list_id/merge-fields/:merge_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.mergeFields.get(listId)
```
---
* API URL: '/lists/:list_id/merge-fields/:merge_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.mergeFields.delete(listId, mergeId)
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.segments.patch(listId, segmentId, body)
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.segments.post(listId, body)
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.segments.get(listId)
```
---
* API URL: '/lists/:list_id/segments/:segment_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.segments.delete(listId, segmentId)
```
---
* API URL: '/lists/:list_id/webhooks/:webhook_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.webhooks.patch(listId, webhookId, body)
```
---
* API URL: '/lists/:list_id/webhooks/:webhook_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.webhooks.get(listId)
```
---
* API URL: '/lists/:list_id/webhooks/:webhook_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.webhooks.delete(listId, webhookId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.interestCategories.interests.post(listId, interestCategoryId, body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.interestCategories.interests.get(listId)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/activity'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.members.activity.get(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/goals'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.members.goals.get(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.members.notes.post(listId, subscriberHash, body)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.members.notes.get(listId)
```
---
* API URL: '/lists/:list_id/segments/:segment_id/members'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.lists.segments.members.post(listId, segmentId, body)
```
---
* API URL: '/lists/:list_id/segments/:segment_id/members'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.segments.members.get(listId, segmentId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.interestCategories.interests.patch(listId, interestCategoryId, interestId, body)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.interestCategories.interests.get(listId, interestCategoryId)
```
---
* API URL: '/lists/:list_id/interest-categories/:interest_category_id/interests/:interest_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.interestCategories.interests.delete(listId, interestCategoryId, interestId)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes/:note_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.lists.members.notes.patch(listId, subscriberHash, noteId, body)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes/:note_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.lists.members.notes.get(listId, subscriberHash)
```
---
* API URL: '/lists/:list_id/members/:subscriber_hash/notes/:note_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.members.notes.delete(listId, subscriberHash, noteId)
```
---
* API URL: '/lists/:list_id/segments/:segment_id/members/:subscriber_hash'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.lists.segments.members.delete(listId, segmentId, subscriberHash)
```
---
* API URL: '/reports'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.get()
```
---
* API URL: '/reports/:campaign_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.get()
```
---
* API URL: '/reports/:campaign_id/abuse-reports'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.abuseReports.get()
```
---
* API URL: '/reports/:campaign_id/advice'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.advice.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/click-details'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.clickDetails.get()
```
---
* API URL: '/reports/:campaign_id/domain-performance'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.domainPerformance.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/eepurl'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.eepurl.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/email-activity'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.emailActivity.get()
```
---
* API URL: '/reports/:campaign_id/locations'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.locations.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/sent-to'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.sentTo.get()
```
---
* API URL: '/reports/:campaign_id/sub-reports'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.subReports.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/unsubscribed'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.unsubscribed.get()
```
---
* API URL: '/reports/:campaign_id/abuse-reports/:report_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.abuseReports.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/click-details/:link_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.clickDetails.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/email-activity/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.emailActivity.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/sent-to/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.sentTo.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/unsubscribed/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.unsubscribed.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/click-details/:link_id/members'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.clickDetails.members.get(campaignId)
```
---
* API URL: '/reports/:campaign_id/click-details/:link_id/members/:subscriber_hash'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.reports.clickDetails.members.get(campaignId, linkId)
```
---
* API URL: '/search-campaigns'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.searchCampaigns.get()
```
---
* API URL: '/search-members'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.searchMembers.get()
```
---
* API URL: '/template-folders'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.templateFolders.post(body)
```
---
* API URL: '/template-folders'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.templateFolders.get()
```
---
* API URL: '/template-folders/:folder_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.templateFolders.patch(folderId, body)
```
---
* API URL: '/template-folders/:folder_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.templateFolders.get()
```
---
* API URL: '/template-folders/:folder_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.templateFolders.delete(folderId)
```
---
* API URL: '/templates'
* HTTP Method: 'POST'
```javascript
pkg.mailchimp.functions.templates.post(body)
```
---
* API URL: '/templates'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.templates.get()
```
---
* API URL: '/templates/:template_id'
* HTTP Method: 'PATCH'
```javascript
pkg.mailchimp.functions.templates.patch(templateId, body)
```
---
* API URL: '/templates/:template_id'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.templates.get()
```
---
* API URL: '/templates/:template_id'
* HTTP Method: 'DELETE'
```javascript
pkg.mailchimp.functions.templates.delete(templateId)
```
---
* API URL: '/templates/:template_id/default-content'
* HTTP Method: 'GET'
```javascript
pkg.mailchimp.functions.templates.defaultContent.get(templateId)
```
---

</details>

