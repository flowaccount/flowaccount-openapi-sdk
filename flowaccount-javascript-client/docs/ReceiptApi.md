# FlowAccountOpenApi.ReceiptApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiptsEmailDocumentPost**](ReceiptApi.md#receiptsEmailDocumentPost) | **POST** /receipts/email-document | Send email receipt document.
[**receiptsGet**](ReceiptApi.md#receiptsGet) | **GET** /receipts | Get all receipt documents
[**receiptsIdAttachmentPost**](ReceiptApi.md#receiptsIdAttachmentPost) | **POST** /receipts/{id}/attachment | Attachment receipt document.
[**receiptsIdDelete**](ReceiptApi.md#receiptsIdDelete) | **DELETE** /receipts/{id} | Delete receipt document.
[**receiptsIdGet**](ReceiptApi.md#receiptsIdGet) | **GET** /receipts/{id} | Get receipt document.
[**receiptsIdPaymentPost**](ReceiptApi.md#receiptsIdPaymentPost) | **POST** /receipts/{id}/payment | Change status is paid receipt document.
[**receiptsIdPut**](ReceiptApi.md#receiptsIdPut) | **PUT** /receipts/{id} | Edit receipt document.
[**receiptsIdStatusStatusIdPost**](ReceiptApi.md#receiptsIdStatusStatusIdPost) | **POST** /receipts/{id}/status/{statusId} | Change status receipt document.
[**receiptsInlinePost**](ReceiptApi.md#receiptsInlinePost) | **POST** /receipts/inline | Create receipt document inline discount or inline vat.
[**receiptsInlineWithPaymentPost**](ReceiptApi.md#receiptsInlineWithPaymentPost) | **POST** /receipts/inline/with-payment | Create receipt document inline discount or inline vat with payment.
[**receiptsPost**](ReceiptApi.md#receiptsPost) | **POST** /receipts | Create receipt document.
[**receiptsSharedocumentPost**](ReceiptApi.md#receiptsSharedocumentPost) | **POST** /receipts/sharedocument | Share link receipt document.
[**receiptsWithPaymentPost**](ReceiptApi.md#receiptsWithPaymentPost) | **POST** /receipts/with-payment | Create receipt document with payment.



## receiptsEmailDocumentPost

> SendEmailResponse receiptsEmailDocumentPost(authorization, sendEmailCoppies)

Send email receipt document.

ส่งเอกสารใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let sendEmailCoppies = new FlowAccountOpenApi.SendEmailCoppies(); // SendEmailCoppies | 
apiInstance.receiptsEmailDocumentPost(authorization, sendEmailCoppies, (error, data, response) => {
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


## receiptsGet

> AllDocumentResponse receiptsGet(currentPage, pageSize, authorization, opts)

Get all receipt documents

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let currentPage = 56; // Number | Query current page document receipts. <br>Example Pattern: <ex>/receipts?currentPage=1 </ex><ex>/receipts?currentPage=1&pageSize=20</ex>
let pageSize = 56; // Number | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?pageSize=20 </ex>
let authorization = "'Bearer accessToken'"; // String | 
let opts = {
  'sortBy': "sortBy_example", // String | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/receipts?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  'filter': "filter_example" // String | Query filter receipts. <br>Example Pattern: <ex> /receipts?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
};
apiInstance.receiptsGet(currentPage, pageSize, authorization, opts, (error, data, response) => {
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
 **currentPage** | **Number**| Query current page document receipts. &lt;br&gt;Example Pattern: &lt;ex&gt;/receipts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/receipts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Number**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sortBy** | **String**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter receipts. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receiptsIdAttachmentPost

> AttachmentResponse receiptsIdAttachmentPost(authorization, id, opts)

Attachment receipt document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let opts = {
  'file': "/path/to/file" // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
};
apiInstance.receiptsIdAttachmentPost(authorization, id, opts, (error, data, response) => {
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


## receiptsIdDelete

> DeleteResponse receiptsIdDelete(authorization, id)

Delete receipt document.

ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.receiptsIdDelete(authorization, id, (error, data, response) => {
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


## receiptsIdGet

> InlineDocumentResponse receiptsIdGet(authorization, id)

Get receipt document.

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.receiptsIdGet(authorization, id, (error, data, response) => {
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


## receiptsIdPaymentPost

> InlineDocumentResponse receiptsIdPaymentPost(authorization, id, paymentReceivingDocument)

Change status is paid receipt document.

เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId หรือ documentId
let paymentReceivingDocument = new FlowAccountOpenApi.PaymentReceivingDocument(); // PaymentReceivingDocument | 
apiInstance.receiptsIdPaymentPost(authorization, id, paymentReceivingDocument, (error, data, response) => {
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
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | 
 **paymentReceivingDocument** | [**PaymentReceivingDocument**](PaymentReceivingDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## receiptsIdPut

> InlineDocumentResponse receiptsIdPut(authorization, id, updateInlineDocument)

Edit receipt document.

แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let updateInlineDocument = new FlowAccountOpenApi.UpdateInlineDocument(); // UpdateInlineDocument | 
apiInstance.receiptsIdPut(authorization, id, updateInlineDocument, (error, data, response) => {
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


## receiptsIdStatusStatusIdPost

> InlineDocumentResponse receiptsIdStatusStatusIdPost(authorization, id, statusId)

Change status receipt document.

เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 1 สถานะ <br> void = ยกเลิก
apiInstance.receiptsIdStatusStatusIdPost(authorization, id, statusId, (error, data, response) => {
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
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 1 สถานะ &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receiptsInlinePost

> InlineDocumentResponse receiptsInlinePost(authorization, inlineDocument)

Create receipt document inline discount or inline vat.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocument = new FlowAccountOpenApi.InlineDocument(); // InlineDocument | 
apiInstance.receiptsInlinePost(authorization, inlineDocument, (error, data, response) => {
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


## receiptsInlineWithPaymentPost

> InlineDocumentResponse receiptsInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create receipt document inline discount or inline vat with payment.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocumentWithPaymentReceiving = new FlowAccountOpenApi.InlineDocumentWithPaymentReceiving(); // InlineDocumentWithPaymentReceiving | 
apiInstance.receiptsInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving, (error, data, response) => {
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
 **inlineDocumentWithPaymentReceiving** | [**InlineDocumentWithPaymentReceiving**](InlineDocumentWithPaymentReceiving.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## receiptsPost

> SimpleDocumentResponse receiptsPost(authorization, simpleDocument)

Create receipt document.

สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocument = new FlowAccountOpenApi.SimpleDocument(); // SimpleDocument | 
apiInstance.receiptsPost(authorization, simpleDocument, (error, data, response) => {
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


## receiptsSharedocumentPost

> ShareDocumentResponse receiptsSharedocumentPost(authorization, shareDocument)

Share link receipt document.

แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let shareDocument = new FlowAccountOpenApi.ShareDocument(); // ShareDocument | 
apiInstance.receiptsSharedocumentPost(authorization, shareDocument, (error, data, response) => {
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


## receiptsWithPaymentPost

> SimpleDocumentResponse receiptsWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create receipt document with payment.

สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ReceiptApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocumentWithPaymentReceiving = new FlowAccountOpenApi.SimpleDocumentWithPaymentReceiving(); // SimpleDocumentWithPaymentReceiving | 
apiInstance.receiptsWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving, (error, data, response) => {
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
 **simpleDocumentWithPaymentReceiving** | [**SimpleDocumentWithPaymentReceiving**](SimpleDocumentWithPaymentReceiving.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

