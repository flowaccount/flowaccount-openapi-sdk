# FlowAccountOpenApi.TaxInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxInvoicesEmailDocumentPost**](TaxInvoiceApi.md#taxInvoicesEmailDocumentPost) | **POST** /tax-invoices/email-document | Send Email tax invoice document
[**taxInvoicesGet**](TaxInvoiceApi.md#taxInvoicesGet) | **GET** /tax-invoices | Get list all tax invocie documents.
[**taxInvoicesIdAttachmentPost**](TaxInvoiceApi.md#taxInvoicesIdAttachmentPost) | **POST** /tax-invoices/{id}/attachment | Add Attachment to tax Invoices document.
[**taxInvoicesIdDelete**](TaxInvoiceApi.md#taxInvoicesIdDelete) | **DELETE** /tax-invoices/{id} | Delete tax invoices document.
[**taxInvoicesIdGet**](TaxInvoiceApi.md#taxInvoicesIdGet) | **GET** /tax-invoices/{id} | Get tax invoices document.
[**taxInvoicesIdPaymentPost**](TaxInvoiceApi.md#taxInvoicesIdPaymentPost) | **POST** /tax-invoices/{id}/payment | Change paid status of tax-invoice document.
[**taxInvoicesIdPut**](TaxInvoiceApi.md#taxInvoicesIdPut) | **PUT** /tax-invoices/{id} | Edit tax invoices document.
[**taxInvoicesIdStatusStatusIdPost**](TaxInvoiceApi.md#taxInvoicesIdStatusStatusIdPost) | **POST** /tax-invoices/{id}/status/{statusId} | Change status of tax invoices document.
[**taxInvoicesInlinePost**](TaxInvoiceApi.md#taxInvoicesInlinePost) | **POST** /tax-invoices/inline | Create tax invocie document with discount and tax inline.
[**taxInvoicesInlineWithPaymentPost**](TaxInvoiceApi.md#taxInvoicesInlineWithPaymentPost) | **POST** /tax-invoices/inline/with-payment | Create tax invocie document with discount and tax inline with payment.
[**taxInvoicesPost**](TaxInvoiceApi.md#taxInvoicesPost) | **POST** /tax-invoices | Create tax invocie document.
[**taxInvoicesSharedocumentPost**](TaxInvoiceApi.md#taxInvoicesSharedocumentPost) | **POST** /tax-invoices/sharedocument | Share link tax invoice document.
[**taxInvoicesWithPaymentPost**](TaxInvoiceApi.md#taxInvoicesWithPaymentPost) | **POST** /tax-invoices/with-payment | Create tax invocie document with payment.



## taxInvoicesEmailDocumentPost

> SendEmailResponse taxInvoicesEmailDocumentPost(authorization, sendEmailCoppies)

Send Email tax invoice document

ส่งเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let sendEmailCoppies = new FlowAccountOpenApi.SendEmailCoppies(); // SendEmailCoppies | 
apiInstance.taxInvoicesEmailDocumentPost(authorization, sendEmailCoppies, (error, data, response) => {
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


## taxInvoicesGet

> AllDocumentResponse taxInvoicesGet(currentPage, pageSize, authorization, opts)

Get list all tax invocie documents.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let currentPage = 56; // Number | Query current page document tax invoices. <br>Example Pattern: <ex>/tax-invoices?currentPage=1 </ex><ex>/tax-invoices?currentPage=1&pageSize=20</ex>
let pageSize = 56; // Number | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?pageSize=20 </ex>
let authorization = "'Bearer accessToken'"; // String | 
let opts = {
  'sortBy': "sortBy_example", // String | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/tax-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  'filter': "filter_example" // String | 
};
apiInstance.taxInvoicesGet(currentPage, pageSize, authorization, opts, (error, data, response) => {
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
 **currentPage** | **Number**| Query current page document tax invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/tax-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/tax-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Number**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sortBy** | **String**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taxInvoicesIdAttachmentPost

> AttachmentResponse taxInvoicesIdAttachmentPost(authorization, id, opts)

Add Attachment to tax Invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let opts = {
  'file': "/path/to/file" // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
};
apiInstance.taxInvoicesIdAttachmentPost(authorization, id, opts, (error, data, response) => {
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


## taxInvoicesIdDelete

> DeleteResponse taxInvoicesIdDelete(authorization, id)

Delete tax invoices document.

ลบ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะรอดำเนินการ 

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.taxInvoicesIdDelete(authorization, id, (error, data, response) => {
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


## taxInvoicesIdGet

> SimpleDocumentResponse taxInvoicesIdGet(authorization, id)

Get tax invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | ID เอกสารใช้ recordId
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.taxInvoicesIdGet(authorization, id, (error, data, response) => {
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
 **authorization** | **String**| ID เอกสารใช้ recordId | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taxInvoicesIdPaymentPost

> InlineDocumentResponse taxInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument)

Change paid status of tax-invoice document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId หรือ documentId
let paymentReceivingDocument = new FlowAccountOpenApi.PaymentReceivingDocument(); // PaymentReceivingDocument | 
apiInstance.taxInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument, (error, data, response) => {
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


## taxInvoicesIdPut

> InlineDocumentResponse taxInvoicesIdPut(authorization, id, updateInlineDocument)

Edit tax invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let updateInlineDocument = new FlowAccountOpenApi.UpdateInlineDocument(); // UpdateInlineDocument | 
apiInstance.taxInvoicesIdPut(authorization, id, updateInlineDocument, (error, data, response) => {
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


## taxInvoicesIdStatusStatusIdPost

> InlineDocumentResponse taxInvoicesIdStatusStatusIdPost(authorization, id, statusId)

Change status of tax invoices document.

เปลี่ยนสถานะของเอกสารเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก
apiInstance.taxInvoicesIdStatusStatusIdPost(authorization, id, statusId, (error, data, response) => {
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
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taxInvoicesInlinePost

> InlineDocumentResponse taxInvoicesInlinePost(authorization, inlineDocument)

Create tax invocie document with discount and tax inline.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocument = new FlowAccountOpenApi.InlineDocument(); // InlineDocument | 
apiInstance.taxInvoicesInlinePost(authorization, inlineDocument, (error, data, response) => {
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


## taxInvoicesInlineWithPaymentPost

> InlineDocumentResponse taxInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create tax invocie document with discount and tax inline with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocumentWithPaymentReceiving = new FlowAccountOpenApi.InlineDocumentWithPaymentReceiving(); // InlineDocumentWithPaymentReceiving | 
apiInstance.taxInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving, (error, data, response) => {
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


## taxInvoicesPost

> SimpleDocumentResponse taxInvoicesPost(authorization, simpleDocument)

Create tax invocie document.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocument = new FlowAccountOpenApi.SimpleDocument(); // SimpleDocument | 
apiInstance.taxInvoicesPost(authorization, simpleDocument, (error, data, response) => {
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


## taxInvoicesSharedocumentPost

> ShareDocumentResponse taxInvoicesSharedocumentPost(authorization, shareDocument)

Share link tax invoice document.

แชร์ลิงค์ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let shareDocument = new FlowAccountOpenApi.ShareDocument(); // ShareDocument | 
apiInstance.taxInvoicesSharedocumentPost(authorization, shareDocument, (error, data, response) => {
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


## taxInvoicesWithPaymentPost

> SimpleDocumentResponse taxInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create tax invocie document with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.TaxInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocumentWithPaymentReceiving = new FlowAccountOpenApi.SimpleDocumentWithPaymentReceiving(); // SimpleDocumentWithPaymentReceiving | 
apiInstance.taxInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving, (error, data, response) => {
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

