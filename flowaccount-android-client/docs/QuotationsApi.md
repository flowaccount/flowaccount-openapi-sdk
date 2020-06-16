# QuotationsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotationsEmailDocumentPost**](QuotationsApi.md#quotationsEmailDocumentPost) | **POST** /quotations/email-document | Send email quotations document.
[**quotationsGet**](QuotationsApi.md#quotationsGet) | **GET** /quotations | Get list all quotations documents.
[**quotationsIdAttachmentPost**](QuotationsApi.md#quotationsIdAttachmentPost) | **POST** /quotations/{id}/attachment | Add Attachment to quotations document.
[**quotationsIdDelete**](QuotationsApi.md#quotationsIdDelete) | **DELETE** /quotations/{id} | Delete quotations document.
[**quotationsIdGet**](QuotationsApi.md#quotationsIdGet) | **GET** /quotations/{id} | Get quotations document.
[**quotationsIdPut**](QuotationsApi.md#quotationsIdPut) | **PUT** /quotations/{id} | Edit quotations document.
[**quotationsIdStatusStatusIdPost**](QuotationsApi.md#quotationsIdStatusStatusIdPost) | **POST** /quotations/{id}/status/{statusId} | Change status of quotations document.
[**quotationsInlinePost**](QuotationsApi.md#quotationsInlinePost) | **POST** /quotations/inline | Create quotations document with discount and tax inline.
[**quotationsPost**](QuotationsApi.md#quotationsPost) | **POST** /quotations | Create quotations document.
[**quotationsSharedocumentPost**](QuotationsApi.md#quotationsSharedocumentPost) | **POST** /quotations/sharedocument | Share link quotations document.



## quotationsEmailDocumentPost

> SendEmailResponse quotationsEmailDocumentPost(authorization, sendEmailSimple)

Send email quotations document.

ส่งเอกสารใบเสนอราคา ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
SendEmailSimple sendEmailSimple = new SendEmailSimple(); // SendEmailSimple | 
try {
    SendEmailResponse result = apiInstance.quotationsEmailDocumentPost(authorization, sendEmailSimple);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsEmailDocumentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md)|  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## quotationsGet

> AllDocumentResponse quotationsGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all quotations documents.

เรียกดูข้อมูลเอกสารใบเสนอราคาทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
Integer currentPage = null; // Integer | Query current page document quotations. <br>Example Pattern: <ex>/quotations?currentPage=1 </ex><ex>/quotations?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/quotations?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | 
try {
    AllDocumentResponse result = apiInstance.quotationsGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document quotations. &lt;br&gt;Example Pattern: &lt;ex&gt;/quotations?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/quotations?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**|  | [optional] [default to null]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quotationsIdAttachmentPost

> AttachmentResponse quotationsIdAttachmentPost(authorization, id, file)

Add Attachment to quotations document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
File file = null; // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    AttachmentResponse result = apiInstance.quotationsIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsIdAttachmentPost");
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


## quotationsIdDelete

> DeleteResponse quotationsIdDelete(authorization, id)

Delete quotations document.

ลบ เอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.quotationsIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsIdDelete");
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


## quotationsIdGet

> InlineDocumentResponse quotationsIdGet(authorization, id)

Get quotations document.

เรียกดูข้อมูลเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    InlineDocumentResponse result = apiInstance.quotationsIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsIdGet");
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


## quotationsIdPut

> InlineDocumentResponse quotationsIdPut(authorization, id, updateInlineDocument)

Edit quotations document.

แก้ไขข้อมูลเอกสารใบเสนอราคา ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.quotationsIdPut(authorization, id, updateInlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsIdPut");
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


## quotationsIdStatusStatusIdPost

> InlineDocumentResponse quotationsIdStatusStatusIdPost(authorization, id, statusId)

Change status of quotations document.

เปลี่ยนสถานะของเอกสารใบเสนอราคา สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> rejected = ยกเลิก
try {
    InlineDocumentResponse result = apiInstance.quotationsIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsIdStatusStatusIdPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; rejected &#x3D; ยกเลิก | [default to null]

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quotationsInlinePost

> InlineDocumentResponse quotationsInlinePost(authorization, inlineDocument)

Create quotations document with discount and tax inline.

สร้างเอกสารใบเสนอราคา แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.quotationsInlinePost(authorization, inlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsInlinePost");
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


## quotationsPost

> InlineDocumentResponse quotationsPost(authorization, simpleDocument)

Create quotations document.

สร้างเอกสารใบเสนอราคา เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
try {
    InlineDocumentResponse result = apiInstance.quotationsPost(authorization, simpleDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
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

```java
// Import classes:
//import org.openapitools.client.api.QuotationsApi;

QuotationsApi apiInstance = new QuotationsApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.quotationsSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuotationsApi#quotationsSharedocumentPost");
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

