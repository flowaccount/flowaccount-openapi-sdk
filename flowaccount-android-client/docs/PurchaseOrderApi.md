# PurchaseOrderApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchasesOrdersEmailDocumentPost**](PurchaseOrderApi.md#purchasesOrdersEmailDocumentPost) | **POST** /purchases-orders/email-document | Send email purchase order document.
[**purchasesOrdersGet**](PurchaseOrderApi.md#purchasesOrdersGet) | **GET** /purchases-orders | Get all purchase order documents.
[**purchasesOrdersIdAttachmentPost**](PurchaseOrderApi.md#purchasesOrdersIdAttachmentPost) | **POST** /purchases-orders/{id}/attachment | Attachment purchase order document.
[**purchasesOrdersIdDelete**](PurchaseOrderApi.md#purchasesOrdersIdDelete) | **DELETE** /purchases-orders/{id} | Delete purchase order document.
[**purchasesOrdersIdGet**](PurchaseOrderApi.md#purchasesOrdersIdGet) | **GET** /purchases-orders/{id} | Get purchase order document.
[**purchasesOrdersIdPut**](PurchaseOrderApi.md#purchasesOrdersIdPut) | **PUT** /purchases-orders/{id} | Edit purchase order document.
[**purchasesOrdersIdStatusStatusIdPost**](PurchaseOrderApi.md#purchasesOrdersIdStatusStatusIdPost) | **POST** /purchases-orders/{id}/status/{statusId} | Change status purchase order document.
[**purchasesOrdersInlinePost**](PurchaseOrderApi.md#purchasesOrdersInlinePost) | **POST** /purchases-orders/inline | Create purchase order document inline discount or inline vat.
[**purchasesOrdersPost**](PurchaseOrderApi.md#purchasesOrdersPost) | **POST** /purchases-orders | Create purchase order document.
[**purchasesOrdersSharedocumentPost**](PurchaseOrderApi.md#purchasesOrdersSharedocumentPost) | **POST** /purchases-orders/sharedocument | Share link purchase order document.



## purchasesOrdersEmailDocumentPost

> SendEmailResponse purchasesOrdersEmailDocumentPost(authorization, sendEmailCoppies)

Send email purchase order document.

ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
try {
    SendEmailResponse result = apiInstance.purchasesOrdersEmailDocumentPost(authorization, sendEmailCoppies);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersEmailDocumentPost");
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


## purchasesOrdersGet

> AllDocumentResponse purchasesOrdersGet(currentPage, pageSize, authorization, sortBy, filter)

Get all purchase order documents.

เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
Integer currentPage = null; // Integer | Query current page document purchase orders. <br>Example Pattern: <ex>/purchases-orders?currentPage=1 </ex><ex>/purchases-orders?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases-orders?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | Query filter purchases-orders. <br>Example Pattern: <ex> /purchases-orders?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    AllDocumentResponse result = apiInstance.purchasesOrdersGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document purchase orders. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases-orders?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases-orders?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**| Query filter purchases-orders. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] [default to null]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchasesOrdersIdAttachmentPost

> AttachmentResponse purchasesOrdersIdAttachmentPost(authorization, id, file)

Attachment purchase order document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
File file = null; // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    AttachmentResponse result = apiInstance.purchasesOrdersIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdAttachmentPost");
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


## purchasesOrdersIdDelete

> DeleteResponse purchasesOrdersIdDelete(authorization, id)

Delete purchase order document.

ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.purchasesOrdersIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdDelete");
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


## purchasesOrdersIdGet

> InlineDocumentResponse purchasesOrdersIdGet(authorization, id)

Get purchase order document.

เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    InlineDocumentResponse result = apiInstance.purchasesOrdersIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdGet");
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


## purchasesOrdersIdPut

> InlineDocumentResponse purchasesOrdersIdPut(authorization, id, updateInlineDocument)

Edit purchase order document.

แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.purchasesOrdersIdPut(authorization, id, updateInlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdPut");
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


## purchasesOrdersIdStatusStatusIdPost

> InlineDocumentResponse purchasesOrdersIdStatusStatusIdPost(authorization, id, statusId)

Change status purchase order document.

เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> void = ยกเลิก
try {
    InlineDocumentResponse result = apiInstance.purchasesOrdersIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdStatusStatusIdPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก | [default to null]

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchasesOrdersInlinePost

> InlineDocumentResponse purchasesOrdersInlinePost(authorization, inlineDocument)

Create purchase order document inline discount or inline vat.

สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.purchasesOrdersInlinePost(authorization, inlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersInlinePost");
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


## purchasesOrdersPost

> SimpleDocumentResponse purchasesOrdersPost(authorization, simpleDocument)

Create purchase order document.

สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
try {
    SimpleDocumentResponse result = apiInstance.purchasesOrdersPost(authorization, simpleDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersPost");
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


## purchasesOrdersSharedocumentPost

> ShareDocumentResponse purchasesOrdersSharedocumentPost(authorization, shareDocument)

Share link purchase order document.

แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```java
// Import classes:
//import org.openapitools.client.api.PurchaseOrderApi;

PurchaseOrderApi apiInstance = new PurchaseOrderApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.purchasesOrdersSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersSharedocumentPost");
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

