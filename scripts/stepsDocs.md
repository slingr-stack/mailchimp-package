## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>


### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>PATCH,POST,GET,DELETE,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/batch-webhooks/{batch_webhook_id}<br>/campaign-folders/{folder_id}<br>/campaigns/{campaign_id}<br>/campaigns/{campaign_id}/feedback/{feedback_id}<br>/ecommerce/stores/{store_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}<br>/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/customers/{customer_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}<br>/ecommerce/stores/{store_id}/products/{product_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}<br>/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}<br>/file-manager/files/{file_id}<br>/file-manager/folders/{folder_id}<br>/lists/{list_id}<br>/lists/{list_id}/interest-categories/{interest_category_id}<br>/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}<br>/lists/{list_id}/members/{subscriber_hash}<br>/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}<br>/lists/{list_id}/merge-fields/{merge_id}<br>/lists/{list_id}/segments/{segment_id}<br>/lists/{list_id}/webhooks/{webhook_id}<br>/template-folders/{folder_id}<br>/templates/{template_id}<br>/authorized-apps<br>/automations/{workflow_id}/actions/pause-all-emails<br>/automations/{workflow_id}/actions/start-all-emails<br>/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause<br>/automations/{workflow_id}/emails/{workflow_email_id}/actions/start<br>/automations/{workflow_id}/emails/{workflow_email_id}/queue<br>/automations/{workflow_id}/removed-subscribers<br>/batches<br>/batch-webhooks<br>/campaign-folders<br>/campaigns<br>/campaigns/{campaign_id}/actions/cancel-send<br>/campaigns/{campaign_id}/actions/pause<br>/campaigns/{campaign_id}/actions/replicate<br>/campaigns/{campaign_id}/actions/resume<br>/campaigns/{campaign_id}/actions/schedule<br>/campaigns/{campaign_id}/actions/send<br>/campaigns/{campaign_id}/actions/test<br>/campaigns/{campaign_id}/actions/unschedule<br>/campaigns/{campaign_id}/feedback<br>/conversations/{conversation_id}/messages<br>/ecommerce/stores<br>/ecommerce/stores/{store_id}/carts<br>/ecommerce/stores/{store_id}/carts/{cart_id}/lines<br>/ecommerce/stores/{store_id}/customers<br>/ecommerce/stores/{store_id}/orders<br>/ecommerce/stores/{store_id}/products<br>/ecommerce/stores/{store_id}/products/{product_id}/images<br>/ecommerce/stores/{store_id}/products/{product_id}/variants<br>/file-manager/files<br>/file-manager/folders<br>/lists<br>/lists/{list_id}/interest-categories<br>/lists/{list_id}/interest-categories/{interest_category_id}/interests<br>/lists/{list_id}/members<br>/lists/{list_id}/members/{subscriber_hash}/notes<br>/lists/{list_id}/merge-fields<br>/lists/{list_id}/segments<br>/lists/{list_id}/segments/{segment_id}/members<br>/lists/{list_id}/signup-forms<br>/lists/{list_id}/webhooks<br>/template-folders<br>/templates<br>/authorized-apps/{app_id}<br>/automations<br>/automations/{workflow_id}<br>/automations/{workflow_id}/emails<br>/automations/{workflow_id}/emails/{workflow_email_id}<br>/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}<br>/batches/{batch_id}<br>/campaigns/{campaign_id}/content<br>/campaigns/{campaign_id}/send-checklist<br>/conversations<br>/conversations/{conversation_id}<br>/conversations/{conversation_id}/messages/{message_id}<br>/ecommerce/stores/{store_id}/orders/{order_id}/lines<br>/lists/{list_id}/abuse-reports<br>/lists/{list_id}/abuse-reports/{report_id}<br>/lists/{list_id}/activity<br>/lists/{list_id}/clients<br>/lists/{list_id}/growth-history<br>/lists/{list_id}/growth-history/{month}<br>/lists/{list_id}/locations<br>/lists/{list_id}/members/{subscriber_hash}/activity<br>/lists/{list_id}/members/{subscriber_hash}/goals<br>/reports<br>/reports/{campaign_id}<br>/reports/{campaign_id}/abuse-reports<br>/reports/{campaign_id}/abuse-reports/{report_id}<br>/reports/{campaign_id}/advice<br>/reports/{campaign_id}/click-details<br>/reports/{campaign_id}/click-details/{link_id}<br>/reports/{campaign_id}/click-details/{link_id}/members<br>/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}<br>/reports/{campaign_id}/domain-performance<br>/reports/{campaign_id}/eepurl<br>/reports/{campaign_id}/email-activity<br>/reports/{campaign_id}/email-activity/{subscriber_hash}<br>/reports/{campaign_id}/locations<br>/reports/{campaign_id}/sent-to<br>/reports/{campaign_id}/sent-to/{subscriber_hash}<br>/reports/{campaign_id}/sub-reports<br>/reports/{campaign_id}/unsubscribed<br>/reports/{campaign_id}/unsubscribed/{subscriber_hash}<br>/search-campaigns<br>/search-members<br>/templates/{template_id}/default-content<br>/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}</strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*
