# BillingNotesApi

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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
try {
    SendEmailResponse result = apiInstance.billingNotesEmailDocumentPost(authorization, sendEmailCoppies);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesEmailDocumentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sendEmailCoppies** | [**SendEmailCoppies**](SendEmailCoppies.md)|  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## billingNotesGet

> AllDocumentResponse billingNotesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all billing notes documents.

เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
Integer currentPage = null; // Integer | Query current page document billing notes. <br>Example Pattern: <ex>/billing-notes?currentPage=1 </ex><ex>/billing-notes?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/billing-notes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | Query filter billing-notes. <br>Example Pattern: <ex> /billing-notes?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    AllDocumentResponse result = apiInstance.billingNotesGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document billing notes. &lt;br&gt;Example Pattern: &lt;ex&gt;/billing-notes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/billing-notes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**| Query filter billing-notes. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] [default to null]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingNotesIdAttachmentPost

> AttachmentResponse billingNotesIdAttachmentPost(authorization, id, file)

Attachment billing notes document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
File file = null; // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    AttachmentResponse result = apiInstance.billingNotesIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesIdAttachmentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ | [default to null]
 **file** | **File**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional] [default to null]

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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.billingNotesIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesIdDelete");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]

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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    InlineDocumentResponse result = apiInstance.billingNotesIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesIdGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]

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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.billingNotesIdPut(authorization, id, updateInlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesIdPut");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รอวางบิล <br> approved = วางบิลแล้ว <br> approvedandprocessed = เปิดบิลแล้ว <br> void = ยกเลิก
try {
    InlineDocumentResponse result = apiInstance.billingNotesIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesIdStatusStatusIdPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รอวางบิล &lt;br&gt; approved &#x3D; วางบิลแล้ว &lt;br&gt; approvedandprocessed &#x3D; เปิดบิลแล้ว &lt;br&gt; void &#x3D; ยกเลิก | [default to null]

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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.billingNotesInlinePost(authorization, inlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesInlinePost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
try {
    SimpleDocumentResponse result = apiInstance.billingNotesPost(authorization, simpleDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
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

```java
// Import classes:
//import org.openapitools.client.api.BillingNotesApi;

BillingNotesApi apiInstance = new BillingNotesApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.billingNotesSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BillingNotesApi#billingNotesSharedocumentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **shareDocument** | [**ShareDocument**](ShareDocument.md)|  |

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

