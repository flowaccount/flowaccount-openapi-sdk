# FlowAccountOpenApi.BillingNotesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billingNotesEmailDocumentPost**](BillingNotesApi.md#billingNotesEmailDocumentPost) | **POST** /billing-notes/email-document | Send email billing notes document.
[**billingNotesGet**](BillingNotesApi.md#billingNotesGet) | **GET** /billing-notes | Get all billing notes documents.
[**billingNotesIdAttachmentPost**](BillingNotesApi.md#billingNotesIdAttachmentPost) | **POST** /billing-notes/{id}/attachment | Attachment billing notes document.
[**billingNotesIdDelete**](BillingNotesApi.md#billingNotesIdDelete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
[**billingNotesIdGet**](BillingNotesApi.md#billingNotesIdGet) | **GET** /billing-notes/{id} | Get billing notes document.
[**billingNotesIdPut**](BillingNotesApi.md#billingNotesIdPut) | **PUT** /billing-notes/{id} | Edit billing notes document.
[**billingNotesIdStatusStatusIdPost**](BillingNotesApi.md#billingNotesIdStatusStatusIdPost) | **POST** /billing-notes/{id}/status/{statusId} | Change status billing notes document.
[**billingNotesInlinePost**](BillingNotesApi.md#billingNotesInlinePost) | **POST** /billing-notes/inline | Create billing notes document inline discount or inline vat.
[**billingNotesPost**](BillingNotesApi.md#billingNotesPost) | **POST** /billing-notes | Create billing notes document.
[**billingNotesSharedocumentPost**](BillingNotesApi.md#billingNotesSharedocumentPost) | **POST** /billing-notes/sharedocument | Share link billing notes document.



## billingNotesEmailDocumentPost

> SendEmailResponse billingNotesEmailDocumentPost(authorization, sendEmailCoppies)

Send email billing notes document.

ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let sendEmailCoppies = new FlowAccountOpenApi.SendEmailCoppies(); // SendEmailCoppies | 
apiInstance.billingNotesEmailDocumentPost(authorization, sendEmailCoppies, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sendEmailCoppies** | [**SendEmailCoppies**](SendEmailCoppies.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## billingNotesGet

> AllDocumentResponse billingNotesGet(currentPage, pageSize, authorization, opts)

Get all billing notes documents.

เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let currentPage = 56; // Number | Query current page document billing notes. <br>Example Pattern: <ex>/billing-notes?currentPage=1 </ex><ex>/billing-notes?currentPage=1&pageSize=20</ex>
let pageSize = 56; // Number | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?pageSize=20 </ex>
let authorization = "'Bearer accessToken'"; // String | 
let opts = {
  'sortBy': "sortBy_example", // String | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/billing-notes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  'filter': "filter_example" // String | Query filter billing-notes. <br>Example Pattern: <ex> /billing-notes?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
};
apiInstance.billingNotesGet(currentPage, pageSize, authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Number**| Query current page document billing notes. &lt;br&gt;Example Pattern: &lt;ex&gt;/billing-notes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/billing-notes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Number**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sortBy** | **String**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter billing-notes. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingNotesIdAttachmentPost

> AttachmentResponse billingNotesIdAttachmentPost(authorization, id, opts)

Attachment billing notes document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let opts = {
  'file': "/path/to/file" // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
};
apiInstance.billingNotesIdAttachmentPost(authorization, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ | 
 **file** | **File**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## billingNotesIdDelete

> DeleteResponse billingNotesIdDelete(authorization, id)

Delete billing notes document.

ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.billingNotesIdDelete(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingNotesIdGet

> InlineDocumentResponse billingNotesIdGet(authorization, id)

Get billing notes document.

เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.billingNotesIdGet(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingNotesIdPut

> InlineDocumentResponse billingNotesIdPut(authorization, id, updateInlineDocument)

Edit billing notes document.

แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let updateInlineDocument = new FlowAccountOpenApi.UpdateInlineDocument(); // UpdateInlineDocument | 
apiInstance.billingNotesIdPut(authorization, id, updateInlineDocument, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **updateInlineDocument** | [**UpdateInlineDocument**](UpdateInlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## billingNotesIdStatusStatusIdPost

> InlineDocumentResponse billingNotesIdStatusStatusIdPost(authorization, id, statusId)

Change status billing notes document.

เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รอวางบิล <br> approved = วางบิลแล้ว <br> approvedandprocessed = เปิดบิลแล้ว <br> void = ยกเลิก
apiInstance.billingNotesIdStatusStatusIdPost(authorization, id, statusId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รอวางบิล &lt;br&gt; approved &#x3D; วางบิลแล้ว &lt;br&gt; approvedandprocessed &#x3D; เปิดบิลแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingNotesInlinePost

> InlineDocumentResponse billingNotesInlinePost(authorization, inlineDocument)

Create billing notes document inline discount or inline vat.

สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocument = new FlowAccountOpenApi.InlineDocument(); // InlineDocument | 
apiInstance.billingNotesInlinePost(authorization, inlineDocument, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **inlineDocument** | [**InlineDocument**](InlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## billingNotesPost

> SimpleDocumentResponse billingNotesPost(authorization, simpleDocument)

Create billing notes document.

สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocument = new FlowAccountOpenApi.SimpleDocument(); // SimpleDocument | 
apiInstance.billingNotesPost(authorization, simpleDocument, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **simpleDocument** | [**SimpleDocument**](SimpleDocument.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## billingNotesSharedocumentPost

> ShareDocumentResponse billingNotesSharedocumentPost(authorization, shareDocument)

Share link billing notes document.

แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BillingNotesApi();
let authorization = "'Bearer accessToken'"; // String | 
let shareDocument = new FlowAccountOpenApi.ShareDocument(); // ShareDocument | 
apiInstance.billingNotesSharedocumentPost(authorization, shareDocument, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **shareDocument** | [**ShareDocument**](ShareDocument.md)|  | 

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

