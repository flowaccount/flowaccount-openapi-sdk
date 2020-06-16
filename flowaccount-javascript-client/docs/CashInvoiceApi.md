# FlowAccountOpenApi.CashInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cashInvoicesEmailDocumentPost**](CashInvoiceApi.md#cashInvoicesEmailDocumentPost) | **POST** /cash-invoices/email-document | Send email cash invoices document.
[**cashInvoicesGet**](CashInvoiceApi.md#cashInvoicesGet) | **GET** /cash-invoices | Get list all cash invoices documents
[**cashInvoicesIdAttachmentPost**](CashInvoiceApi.md#cashInvoicesIdAttachmentPost) | **POST** /cash-invoices/{id}/attachment | Add Attachment to cash invoices document.
[**cashInvoicesIdDelete**](CashInvoiceApi.md#cashInvoicesIdDelete) | **DELETE** /cash-invoices/{id} | Delete cash invoices document.
[**cashInvoicesIdGet**](CashInvoiceApi.md#cashInvoicesIdGet) | **GET** /cash-invoices/{id} | Get cash invoices document.
[**cashInvoicesIdPaymentPost**](CashInvoiceApi.md#cashInvoicesIdPaymentPost) | **POST** /cash-invoices/{id}/payment | Change paid status of cash invoices document.
[**cashInvoicesIdPut**](CashInvoiceApi.md#cashInvoicesIdPut) | **PUT** /cash-invoices/{id} | Edit cash invoices document.
[**cashInvoicesIdStatusStatusIdPost**](CashInvoiceApi.md#cashInvoicesIdStatusStatusIdPost) | **POST** /cash-invoices/{id}/status/{statusId} | Change status of cash invoices document.
[**cashInvoicesInlinePost**](CashInvoiceApi.md#cashInvoicesInlinePost) | **POST** /cash-invoices/inline | Create cash invoices document with discount and tax inline.
[**cashInvoicesInlineWithPaymentPost**](CashInvoiceApi.md#cashInvoicesInlineWithPaymentPost) | **POST** /cash-invoices/inline/with-payment | Create cash invoices document with discount and tax inline with payment.
[**cashInvoicesPost**](CashInvoiceApi.md#cashInvoicesPost) | **POST** /cash-invoices | Create cash invoices document.
[**cashInvoicesSharedocumentPost**](CashInvoiceApi.md#cashInvoicesSharedocumentPost) | **POST** /cash-invoices/sharedocument | Share link cash invoices document.
[**cashInvoicesWithPaymentPost**](CashInvoiceApi.md#cashInvoicesWithPaymentPost) | **POST** /cash-invoices/with-payment | Create cash invoices document with payment.



## cashInvoicesEmailDocumentPost

> SendEmailResponse cashInvoicesEmailDocumentPost(authorization, sendEmailCoppies)

Send email cash invoices document.

ส่งเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let sendEmailCoppies = new FlowAccountOpenApi.SendEmailCoppies(); // SendEmailCoppies | 
apiInstance.cashInvoicesEmailDocumentPost(authorization, sendEmailCoppies, (error, data, response) => {
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


## cashInvoicesGet

> AllDocumentResponse cashInvoicesGet(currentPage, pageSize, authorization, opts)

Get list all cash invoices documents

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ทั้งหมดในระบบ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let currentPage = 56; // Number | Query current page document cash invoices. <br>Example Pattern: <ex>/cash-invoices?currentPage=1 </ex><ex>/cash-invoices?currentPage=1&pageSize=20</ex>
let pageSize = 56; // Number | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?pageSize=20 </ex>
let authorization = "'Bearer accessToken'"; // String | 
let opts = {
  'sortBy': "sortBy_example", // String | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/cash-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  'filter': "filter_example" // String | 
};
apiInstance.cashInvoicesGet(currentPage, pageSize, authorization, opts, (error, data, response) => {
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
 **currentPage** | **Number**| Query current page document cash invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/cash-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/cash-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Number**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sortBy** | **String**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cashInvoicesIdAttachmentPost

> AttachmentResponse cashInvoicesIdAttachmentPost(authorization, id, opts)

Add Attachment to cash invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let opts = {
  'file': "/path/to/file" // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
};
apiInstance.cashInvoicesIdAttachmentPost(authorization, id, opts, (error, data, response) => {
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


## cashInvoicesIdDelete

> DeleteResponse cashInvoicesIdDelete(authorization, id)

Delete cash invoices document.

ลบ เอกสารใบกำกับ/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.cashInvoicesIdDelete(authorization, id, (error, data, response) => {
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


## cashInvoicesIdGet

> InlineDocumentResponse cashInvoicesIdGet(authorization, id)

Get cash invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | 
apiInstance.cashInvoicesIdGet(authorization, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cashInvoicesIdPaymentPost

> InlineDocumentResponse cashInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument)

Change paid status of cash invoices document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId หรือ documentId
let paymentReceivingDocument = new FlowAccountOpenApi.PaymentReceivingDocument(); // PaymentReceivingDocument | 
apiInstance.cashInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument, (error, data, response) => {
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


## cashInvoicesIdPut

> InlineDocumentResponse cashInvoicesIdPut(authorization, id, updateInlineDocument)

Edit cash invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let updateInlineDocument = new FlowAccountOpenApi.UpdateInlineDocument(); // UpdateInlineDocument | 
apiInstance.cashInvoicesIdPut(authorization, id, updateInlineDocument, (error, data, response) => {
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


## cashInvoicesIdStatusStatusIdPost

> InlineDocumentResponse cashInvoicesIdStatusStatusIdPost(authorization, id, statusId)

Change status of cash invoices document.

เปลี่ยนสถานะของเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก
apiInstance.cashInvoicesIdStatusStatusIdPost(authorization, id, statusId, (error, data, response) => {
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


## cashInvoicesInlinePost

> InlineDocumentResponse cashInvoicesInlinePost(authorization, inlineDocument)

Create cash invoices document with discount and tax inline.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocument = new FlowAccountOpenApi.InlineDocument(); // InlineDocument | 
apiInstance.cashInvoicesInlinePost(authorization, inlineDocument, (error, data, response) => {
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


## cashInvoicesInlineWithPaymentPost

> InlineDocumentResponse cashInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create cash invoices document with discount and tax inline with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocumentWithPaymentReceiving = new FlowAccountOpenApi.InlineDocumentWithPaymentReceiving(); // InlineDocumentWithPaymentReceiving | 
apiInstance.cashInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving, (error, data, response) => {
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


## cashInvoicesPost

> SimpleDocumentResponse cashInvoicesPost(authorization, simpleDocument)

Create cash invoices document.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocument = new FlowAccountOpenApi.SimpleDocument(); // SimpleDocument | 
apiInstance.cashInvoicesPost(authorization, simpleDocument, (error, data, response) => {
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


## cashInvoicesSharedocumentPost

> ShareDocumentResponse cashInvoicesSharedocumentPost(authorization, shareDocument)

Share link cash invoices document.

แชร์ลิงค์ เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let shareDocument = new FlowAccountOpenApi.ShareDocument(); // ShareDocument | 
apiInstance.cashInvoicesSharedocumentPost(authorization, shareDocument, (error, data, response) => {
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


## cashInvoicesWithPaymentPost

> SimpleDocumentResponse cashInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create cash invoices document with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.CashInvoiceApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocumentWithPaymentReceiving = new FlowAccountOpenApi.SimpleDocumentWithPaymentReceiving(); // SimpleDocumentWithPaymentReceiving | 
apiInstance.cashInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving, (error, data, response) => {
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

