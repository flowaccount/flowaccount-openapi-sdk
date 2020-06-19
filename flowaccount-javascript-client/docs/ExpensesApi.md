# FlowAccountOpenApi.ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expensesCategoriesAccountingGet**](ExpensesApi.md#expensesCategoriesAccountingGet) | **GET** /expenses/categories/accounting | Accounting categories expenses document.
[**expensesCategoriesBusinessGet**](ExpensesApi.md#expensesCategoriesBusinessGet) | **GET** /expenses/categories/business | Business categories expenses document.
[**expensesEmailDocumentPost**](ExpensesApi.md#expensesEmailDocumentPost) | **POST** /expenses/email-document | Send email expenses document.
[**expensesGet**](ExpensesApi.md#expensesGet) | **GET** /expenses | Get list all expenses documents.
[**expensesIdAttachmentPost**](ExpensesApi.md#expensesIdAttachmentPost) | **POST** /expenses/{id}/attachment | Attachment to expenses document.
[**expensesIdDelete**](ExpensesApi.md#expensesIdDelete) | **DELETE** /expenses/{id} | Delete expenses document.
[**expensesIdGet**](ExpensesApi.md#expensesIdGet) | **GET** /expenses/{id} | Get expenses document.
[**expensesIdPaymentPost**](ExpensesApi.md#expensesIdPaymentPost) | **POST** /expenses/{id}/payment | Change status is paid expenses document.
[**expensesIdPut**](ExpensesApi.md#expensesIdPut) | **PUT** /expenses/{id} | Edit expenses document.
[**expensesIdStatusStatusIdPost**](ExpensesApi.md#expensesIdStatusStatusIdPost) | **POST** /expenses/{id}/status/{statusId} | Change status expenses document.
[**expensesInlinePost**](ExpensesApi.md#expensesInlinePost) | **POST** /expenses/inline | Create expenses document inline discount or inline vat.
[**expensesInlineWithPaymentPost**](ExpensesApi.md#expensesInlineWithPaymentPost) | **POST** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
[**expensesPost**](ExpensesApi.md#expensesPost) | **POST** /expenses | Create expenses document.
[**expensesSharedocumentPost**](ExpensesApi.md#expensesSharedocumentPost) | **POST** /expenses/sharedocument | Share link expenses document.
[**expensesWithPaymentPost**](ExpensesApi.md#expensesWithPaymentPost) | **POST** /expenses/with-payment | Create expenses document with payment.



## expensesCategoriesAccountingGet

> BusinessCategory expensesCategoriesAccountingGet(authorization)

Accounting categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
apiInstance.expensesCategoriesAccountingGet(authorization, (error, data, response) => {
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

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesCategoriesBusinessGet

> BusinessCategory expensesCategoriesBusinessGet(authorization)

Business categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
apiInstance.expensesCategoriesBusinessGet(authorization, (error, data, response) => {
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

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesEmailDocumentPost

> SendEmailResponse expensesEmailDocumentPost(authorization, sendEmailSimple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let sendEmailSimple = new FlowAccountOpenApi.SendEmailSimple(); // SendEmailSimple | 
apiInstance.expensesEmailDocumentPost(authorization, sendEmailSimple, (error, data, response) => {
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
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesGet

> AllExpenseDocumentResponse expensesGet(currentPage, pageSize, authorization, opts)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let currentPage = 56; // Number | Query current page expenses document. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
let pageSize = 56; // Number | Query expenses document list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
let authorization = "'Bearer accessToken'"; // String | 
let opts = {
  'sortBy': "sortBy_example", // String | Query sort by expense document. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  'filter': "filter_example" // String | Query filter expenses document. <br>Example Pattern: <ex> /expenses?filter=[{'columnName':'Status','columnValue':'processed','columnPredicateOperator':'And'}] </ex>
};
apiInstance.expensesGet(currentPage, pageSize, authorization, opts, (error, data, response) => {
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
 **currentPage** | **Number**| Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Number**| Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sortBy** | **String**| Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesIdAttachmentPost

> AttachmentResponse expensesIdAttachmentPost(authorization, id, opts)

Attachment to expenses document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.expensesIdAttachmentPost(authorization, id, opts, (error, data, response) => {
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
 **file** | **File**|  | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## expensesIdDelete

> DeleteResponse expensesIdDelete(authorization, id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.expensesIdDelete(authorization, id, (error, data, response) => {
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


## expensesIdGet

> AllExpenseDocumentResponse expensesIdGet(authorization, id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | 
apiInstance.expensesIdGet(authorization, id, (error, data, response) => {
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

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesIdPaymentPost

> ExpenseSimpleDocumentResponse expensesIdPaymentPost(authorization, id, paymentPaidDocument)

Change status is paid expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId หรือ documentId
let paymentPaidDocument = new FlowAccountOpenApi.PaymentPaidDocument(); // PaymentPaidDocument | 
apiInstance.expensesIdPaymentPost(authorization, id, paymentPaidDocument, (error, data, response) => {
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
 **paymentPaidDocument** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesIdPut

> ExpenseInlineDocumentResponse expensesIdPut(authorization, id, updateExpenseDocument)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let updateExpenseDocument = new FlowAccountOpenApi.UpdateExpenseDocument(); // UpdateExpenseDocument | 
apiInstance.expensesIdPut(authorization, id, updateExpenseDocument, (error, data, response) => {
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
 **updateExpenseDocument** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesIdStatusStatusIdPost

> ExpenseInlineDocumentResponse expensesIdStatusStatusIdPost(authorization, id, statusId)

Change status expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก
apiInstance.expensesIdStatusStatusIdPost(authorization, id, statusId, (error, data, response) => {
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
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesInlinePost

> ExpenseInlineDocumentResponse expensesInlinePost(authorization, expenseInlineDocument)

Create expenses document inline discount or inline vat.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let expenseInlineDocument = new FlowAccountOpenApi.ExpenseInlineDocument(); // ExpenseInlineDocument | 
apiInstance.expensesInlinePost(authorization, expenseInlineDocument, (error, data, response) => {
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
 **expenseInlineDocument** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesInlineWithPaymentPost

> ExpenseInlineDocumentResponse expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid)

Create expenses document inline discount or inline vat with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let expenseInlineDocumentWithPaymentPaid = new FlowAccountOpenApi.ExpenseInlineDocumentWithPaymentPaid(); // ExpenseInlineDocumentWithPaymentPaid | 
apiInstance.expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid, (error, data, response) => {
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
 **expenseInlineDocumentWithPaymentPaid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesPost

> ExpenseSimpleDocumentResponse expensesPost(authorization, expenseSimpleDocument)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let expenseSimpleDocument = new FlowAccountOpenApi.ExpenseSimpleDocument(); // ExpenseSimpleDocument | 
apiInstance.expensesPost(authorization, expenseSimpleDocument, (error, data, response) => {
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
 **expenseSimpleDocument** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesSharedocumentPost

> ShareDocumentResponse expensesSharedocumentPost(authorization, shareDocument)

Share link expenses document.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let shareDocument = new FlowAccountOpenApi.ShareDocument(); // ShareDocument | 
apiInstance.expensesSharedocumentPost(authorization, shareDocument, (error, data, response) => {
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


## expensesWithPaymentPost

> ExpenseSimpleDocumentResponse expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid)

Create expenses document with payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ExpensesApi();
let authorization = "'Bearer accessToken'"; // String | 
let expenseSimpleDocumentWithPaymentPaid = new FlowAccountOpenApi.ExpenseSimpleDocumentWithPaymentPaid(); // ExpenseSimpleDocumentWithPaymentPaid | 
apiInstance.expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid, (error, data, response) => {
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
 **expenseSimpleDocumentWithPaymentPaid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

