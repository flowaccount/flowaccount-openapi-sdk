# ReceivingInventoryApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchasesEmailDocumentPost**](ReceivingInventoryApi.md#purchasesEmailDocumentPost) | **POST** /purchases/email-document | Send email receiving inventory document.
[**purchasesGet**](ReceivingInventoryApi.md#purchasesGet) | **GET** /purchases | Get list all receiving inventory documents.
[**purchasesIdAttachmentPost**](ReceivingInventoryApi.md#purchasesIdAttachmentPost) | **POST** /purchases/{id}/attachment | Add Attachment to receiving inventory document.
[**purchasesIdDelete**](ReceivingInventoryApi.md#purchasesIdDelete) | **DELETE** /purchases/{id} | Delete receiving inventory document.
[**purchasesIdGet**](ReceivingInventoryApi.md#purchasesIdGet) | **GET** /purchases/{id} | Get receiving inventory document.
[**purchasesIdPaymentPost**](ReceivingInventoryApi.md#purchasesIdPaymentPost) | **POST** /purchases/{id}/payment | Change paid status of receiving inventory document.
[**purchasesIdPut**](ReceivingInventoryApi.md#purchasesIdPut) | **PUT** /purchases/{id} | Edit receiving inventory document.
[**purchasesIdStatusStatusIdPost**](ReceivingInventoryApi.md#purchasesIdStatusStatusIdPost) | **POST** /purchases/{id}/status/{statusId} | Change status of receiving inventory document.
[**purchasesInlinePost**](ReceivingInventoryApi.md#purchasesInlinePost) | **POST** /purchases/inline | Create receiving inventory document with discount and tax inline.
[**purchasesInlineWithPaymentPost**](ReceivingInventoryApi.md#purchasesInlineWithPaymentPost) | **POST** /purchases/inline/with-payment | Create receiving inventory document with discount and tax inline with payment.
[**purchasesPost**](ReceivingInventoryApi.md#purchasesPost) | **POST** /purchases | Create receiving inventory document.
[**purchasesSharedocumentPost**](ReceivingInventoryApi.md#purchasesSharedocumentPost) | **POST** /purchases/sharedocument | Share link receiving inventory document.
[**purchasesWithPaymentPost**](ReceivingInventoryApi.md#purchasesWithPaymentPost) | **POST** /purchases/with-payment | Create receiving inventory document with payment.



## purchasesEmailDocumentPost

> SendEmailResponse purchasesEmailDocumentPost(authorization, sendEmailCoppies)

Send email receiving inventory document.

ส่งเอกสารใบรับสินค้า ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
try {
    SendEmailResponse result = apiInstance.purchasesEmailDocumentPost(authorization, sendEmailCoppies);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesEmailDocumentPost");
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


## purchasesGet

> InlineDocumentResponse purchasesGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all receiving inventory documents.

เรียกดูข้อมูลเอกสารใบรับสินค้าทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
Integer currentPage = null; // Integer | Query current page document purchases. <br>Example Pattern: <ex>/purchases?currentPage=1 </ex><ex>/purchases?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | 
try {
    InlineDocumentResponse result = apiInstance.purchasesGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document purchases. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**|  | [optional] [default to null]

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchasesIdAttachmentPost

> AttachmentResponse purchasesIdAttachmentPost(authorization, id, file)

Add Attachment to receiving inventory document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
File file = null; // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    AttachmentResponse result = apiInstance.purchasesIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdAttachmentPost");
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


## purchasesIdDelete

> DeleteResponse purchasesIdDelete(authorization, id)

Delete receiving inventory document.

ลบ เอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.purchasesIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdDelete");
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


## purchasesIdGet

> InlineDocumentResponse purchasesIdGet(authorization, id)

Get receiving inventory document.

เรียกดูข้อมูลเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    InlineDocumentResponse result = apiInstance.purchasesIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdGet");
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


## purchasesIdPaymentPost

> InlineDocumentResponse purchasesIdPaymentPost(authorization, id, UNKNOWN_BASE_TYPE)

Change paid status of receiving inventory document.

ขำระเงิน เอกสารใบรับสินค้าเปลี่ยนสถานะเป็น ชำระเงินแล้ว

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId หรือ documentId
UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
try {
    InlineDocumentResponse result = apiInstance.purchasesIdPaymentPost(authorization, id, UNKNOWN_BASE_TYPE);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | [default to null]
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## purchasesIdPut

> InlineDocumentResponse purchasesIdPut(authorization, id, updateInlineDocument)

Edit receiving inventory document.

แก้ไขข้อมูลเอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.purchasesIdPut(authorization, id, updateInlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdPut");
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


## purchasesIdStatusStatusIdPost

> InlineDocumentResponse purchasesIdStatusStatusIdPost(authorization, id, statusId)

Change status of receiving inventory document.

เปลี่ยนสถานะของเอกสารใบรับสินค้า สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> void = ยกเลิก
try {
    InlineDocumentResponse result = apiInstance.purchasesIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdStatusStatusIdPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; void &#x3D; ยกเลิก | [default to null]

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchasesInlinePost

> InlineDocumentResponse purchasesInlinePost(authorization, inlineDocument)

Create receiving inventory document with discount and tax inline.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.purchasesInlinePost(authorization, inlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesInlinePost");
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


## purchasesInlineWithPaymentPost

> InlineDocumentResponse purchasesInlineWithPaymentPost(authorization, UNKNOWN_BASE_TYPE)

Create receiving inventory document with discount and tax inline with payment.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
try {
    InlineDocumentResponse result = apiInstance.purchasesInlineWithPaymentPost(authorization, UNKNOWN_BASE_TYPE);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesInlineWithPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## purchasesPost

> SimpleDocumentResponse purchasesPost(authorization, simpleDocument)

Create receiving inventory document.

สร้างเอกสารใบรับสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
try {
    SimpleDocumentResponse result = apiInstance.purchasesPost(authorization, simpleDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesPost");
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


## purchasesSharedocumentPost

> ShareDocumentResponse purchasesSharedocumentPost(authorization, shareDocument)

Share link receiving inventory document.

แชร์ลิงค์ เอกสารใบรับสินค้าที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.purchasesSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesSharedocumentPost");
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


## purchasesWithPaymentPost

> SimpleDocumentResponse purchasesWithPaymentPost(authorization, UNKNOWN_BASE_TYPE)

Create receiving inventory document with payment.

สร้างเอกสารใบรับสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ReceivingInventoryApi;

ReceivingInventoryApi apiInstance = new ReceivingInventoryApi();
String authorization = Bearer accessToken; // String | 
UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
try {
    SimpleDocumentResponse result = apiInstance.purchasesWithPaymentPost(authorization, UNKNOWN_BASE_TYPE);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ReceivingInventoryApi#purchasesWithPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

