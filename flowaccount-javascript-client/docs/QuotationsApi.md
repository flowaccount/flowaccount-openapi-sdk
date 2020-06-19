# FlowAccountOpenApi.QuotationsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotationsEmailDocumentPost**](QuotationsApi.md#quotationsEmailDocumentPost) | **POST** /quotations/email-document | Send email quotations document.
[**quotationsGet**](QuotationsApi.md#quotationsGet) | **GET** /quotations | Get all quotations documents.
[**quotationsIdAttachmentPost**](QuotationsApi.md#quotationsIdAttachmentPost) | **POST** /quotations/{id}/attachment | Attachment quotations document.
[**quotationsIdDelete**](QuotationsApi.md#quotationsIdDelete) | **DELETE** /quotations/{id} | Delete quotations document.
[**quotationsIdGet**](QuotationsApi.md#quotationsIdGet) | **GET** /quotations/{id} | Get quotations document.
[**quotationsIdPut**](QuotationsApi.md#quotationsIdPut) | **PUT** /quotations/{id} | Edit quotations document.
[**quotationsIdStatusStatusIdPost**](QuotationsApi.md#quotationsIdStatusStatusIdPost) | **POST** /quotations/{id}/status/{statusId} | Change status quotations document.
[**quotationsInlinePost**](QuotationsApi.md#quotationsInlinePost) | **POST** /quotations/inline | Create quotations document inline discount or inline vat.
[**quotationsPost**](QuotationsApi.md#quotationsPost) | **POST** /quotations | Create quotations document.
[**quotationsSharedocumentPost**](QuotationsApi.md#quotationsSharedocumentPost) | **POST** /quotations/sharedocument | Share link quotations document.



## quotationsEmailDocumentPost

> SendEmailResponse quotationsEmailDocumentPost(authorization, sendEmailSimple)

Send email quotations document.

ส่งเอกสารใบเสนอราคา ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let sendEmailSimple = new FlowAccountOpenApi.SendEmailSimple(); // SendEmailSimple | 
apiInstance.quotationsEmailDocumentPost(authorization, sendEmailSimple, (error, data, response) => {
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


## quotationsGet

> AllDocumentResponse quotationsGet(currentPage, pageSize, authorization, opts)

Get all quotations documents.

เรียกดูข้อมูลเอกสารใบเสนอราคาทั้งหมดในระบบ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let currentPage = 56; // Number | Query current page document quotations. <br>Example Pattern: <ex>/quotations?currentPage=1 </ex><ex>/quotations?currentPage=1&pageSize=20</ex>
let pageSize = 56; // Number | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?pageSize=20 </ex>
let authorization = "'Bearer accessToken'"; // String | 
let opts = {
  'sortBy': "sortBy_example", // String | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/quotations?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  'filter': "filter_example" // String | Query filter quotations. <br>Example Pattern: <ex> /quotations?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
};
apiInstance.quotationsGet(currentPage, pageSize, authorization, opts, (error, data, response) => {
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
 **currentPage** | **Number**| Query current page document quotations. &lt;br&gt;Example Pattern: &lt;ex&gt;/quotations?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/quotations?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Number**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sortBy** | **String**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter quotations. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quotationsIdAttachmentPost

> AttachmentResponse quotationsIdAttachmentPost(authorization, id, opts)

Attachment quotations document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let opts = {
  'file': "/path/to/file" // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
};
apiInstance.quotationsIdAttachmentPost(authorization, id, opts, (error, data, response) => {
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


## quotationsIdDelete

> DeleteResponse quotationsIdDelete(authorization, id)

Delete quotations document.

ลบ เอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.quotationsIdDelete(authorization, id, (error, data, response) => {
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


## quotationsIdGet

> InlineDocumentResponse quotationsIdGet(authorization, id)

Get quotations document.

เรียกดูข้อมูลเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
apiInstance.quotationsIdGet(authorization, id, (error, data, response) => {
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


## quotationsIdPut

> InlineDocumentResponse quotationsIdPut(authorization, id, updateInlineDocument)

Edit quotations document.

แก้ไขข้อมูลเอกสารใบเสนอราคา ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let updateInlineDocument = new FlowAccountOpenApi.UpdateInlineDocument(); // UpdateInlineDocument | 
apiInstance.quotationsIdPut(authorization, id, updateInlineDocument, (error, data, response) => {
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


## quotationsIdStatusStatusIdPost

> InlineDocumentResponse quotationsIdStatusStatusIdPost(authorization, id, statusId)

Change status quotations document.

เปลี่ยนสถานะของเอกสารใบเสนอราคา สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | ID เอกสารใช้ recordId
let statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> rejected = ยกเลิก
apiInstance.quotationsIdStatusStatusIdPost(authorization, id, statusId, (error, data, response) => {
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
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; rejected &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quotationsInlinePost

> InlineDocumentResponse quotationsInlinePost(authorization, inlineDocument)

Create quotations document inline discount or inline vat.

สร้างเอกสารใบเสนอราคา แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let inlineDocument = new FlowAccountOpenApi.InlineDocument(); // InlineDocument | 
apiInstance.quotationsInlinePost(authorization, inlineDocument, (error, data, response) => {
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


## quotationsPost

> InlineDocumentResponse quotationsPost(authorization, simpleDocument)

Create quotations document.

สร้างเอกสารใบเสนอราคา เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let simpleDocument = new FlowAccountOpenApi.SimpleDocument(); // SimpleDocument | 
apiInstance.quotationsPost(authorization, simpleDocument, (error, data, response) => {
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

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## quotationsSharedocumentPost

> ShareDocumentResponse quotationsSharedocumentPost(authorization, shareDocument)

Share link quotations document.

แชร์ลิงค์ เอกสารใบเสนอราคาที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.QuotationsApi();
let authorization = "'Bearer accessToken'"; // String | 
let shareDocument = new FlowAccountOpenApi.ShareDocument(); // ShareDocument | 
apiInstance.quotationsSharedocumentPost(authorization, shareDocument, (error, data, response) => {
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

