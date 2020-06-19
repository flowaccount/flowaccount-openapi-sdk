# TaxInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxInvoicesEmailDocumentPost**](TaxInvoiceApi.md#taxInvoicesEmailDocumentPost) | **POST** /tax-invoices/email-document | Send Email tax invoice document
[**taxInvoicesGet**](TaxInvoiceApi.md#taxInvoicesGet) | **GET** /tax-invoices | Get all tax invocie documents.
[**taxInvoicesIdAttachmentPost**](TaxInvoiceApi.md#taxInvoicesIdAttachmentPost) | **POST** /tax-invoices/{id}/attachment | Attachment tax Invoices document.
[**taxInvoicesIdDelete**](TaxInvoiceApi.md#taxInvoicesIdDelete) | **DELETE** /tax-invoices/{id} | Delete tax invoices document.
[**taxInvoicesIdGet**](TaxInvoiceApi.md#taxInvoicesIdGet) | **GET** /tax-invoices/{id} | Get tax invoices document.
[**taxInvoicesIdPaymentPost**](TaxInvoiceApi.md#taxInvoicesIdPaymentPost) | **POST** /tax-invoices/{id}/payment | Change status is paid tax-invoice document.
[**taxInvoicesIdPut**](TaxInvoiceApi.md#taxInvoicesIdPut) | **PUT** /tax-invoices/{id} | Edit tax invoices document.
[**taxInvoicesIdStatusStatusIdPost**](TaxInvoiceApi.md#taxInvoicesIdStatusStatusIdPost) | **POST** /tax-invoices/{id}/status/{statusId} | Change status tax invoices document.
[**taxInvoicesInlinePost**](TaxInvoiceApi.md#taxInvoicesInlinePost) | **POST** /tax-invoices/inline | Create tax invocie document inline discount or inline vat.
[**taxInvoicesInlineWithPaymentPost**](TaxInvoiceApi.md#taxInvoicesInlineWithPaymentPost) | **POST** /tax-invoices/inline/with-payment | Create tax invocie document inline discount or inline vat with payment.
[**taxInvoicesPost**](TaxInvoiceApi.md#taxInvoicesPost) | **POST** /tax-invoices | Create tax invocie document.
[**taxInvoicesSharedocumentPost**](TaxInvoiceApi.md#taxInvoicesSharedocumentPost) | **POST** /tax-invoices/sharedocument | Share link tax invoice document.
[**taxInvoicesWithPaymentPost**](TaxInvoiceApi.md#taxInvoicesWithPaymentPost) | **POST** /tax-invoices/with-payment | Create tax invocie document with payment.



## taxInvoicesEmailDocumentPost

> SendEmailResponse taxInvoicesEmailDocumentPost(authorization, sendEmailCoppies)

Send Email tax invoice document

ส่งเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
try {
    SendEmailResponse result = apiInstance.taxInvoicesEmailDocumentPost(authorization, sendEmailCoppies);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesEmailDocumentPost");
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


## taxInvoicesGet

> AllDocumentResponse taxInvoicesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all tax invocie documents.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
Integer currentPage = null; // Integer | Query current page document tax invoices. <br>Example Pattern: <ex>/tax-invoices?currentPage=1 </ex><ex>/tax-invoices?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/tax-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | Query filter tax-invoices. <br>Example Pattern: <ex> /tax-invoices?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    AllDocumentResponse result = apiInstance.taxInvoicesGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document tax invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/tax-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/tax-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**| Query filter tax-invoices. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] [default to null]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taxInvoicesIdAttachmentPost

> AttachmentResponse taxInvoicesIdAttachmentPost(authorization, id, file)

Attachment tax Invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
File file = null; // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    AttachmentResponse result = apiInstance.taxInvoicesIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesIdAttachmentPost");
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


## taxInvoicesIdDelete

> DeleteResponse taxInvoicesIdDelete(authorization, id)

Delete tax invoices document.

ลบ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะรอดำเนินการ 

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.taxInvoicesIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesIdDelete");
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


## taxInvoicesIdGet

> SimpleDocumentResponse taxInvoicesIdGet(authorization, id)

Get tax invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | ID เอกสารใช้ recordId
String id = null; // String | ID เอกสารใช้ recordId
try {
    SimpleDocumentResponse result = apiInstance.taxInvoicesIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesIdGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| ID เอกสารใช้ recordId | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taxInvoicesIdPaymentPost

> InlineDocumentResponse taxInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument)

Change status is paid tax-invoice document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId หรือ documentId
PaymentReceivingDocument paymentReceivingDocument = new PaymentReceivingDocument(); // PaymentReceivingDocument | 
try {
    InlineDocumentResponse result = apiInstance.taxInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesIdPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | [default to null]
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

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.taxInvoicesIdPut(authorization, id, updateInlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesIdPut");
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


## taxInvoicesIdStatusStatusIdPost

> InlineDocumentResponse taxInvoicesIdStatusStatusIdPost(authorization, id, statusId)

Change status tax invoices document.

เปลี่ยนสถานะของเอกสารเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก
try {
    InlineDocumentResponse result = apiInstance.taxInvoicesIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesIdStatusStatusIdPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก | [default to null]

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taxInvoicesInlinePost

> InlineDocumentResponse taxInvoicesInlinePost(authorization, inlineDocument)

Create tax invocie document inline discount or inline vat.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.taxInvoicesInlinePost(authorization, inlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesInlinePost");
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


## taxInvoicesInlineWithPaymentPost

> InlineDocumentResponse taxInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create tax invocie document inline discount or inline vat with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
InlineDocumentWithPaymentReceiving inlineDocumentWithPaymentReceiving = new InlineDocumentWithPaymentReceiving(); // InlineDocumentWithPaymentReceiving | 
try {
    InlineDocumentResponse result = apiInstance.taxInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesInlineWithPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
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

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
try {
    SimpleDocumentResponse result = apiInstance.taxInvoicesPost(authorization, simpleDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesPost");
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


## taxInvoicesSharedocumentPost

> ShareDocumentResponse taxInvoicesSharedocumentPost(authorization, shareDocument)

Share link tax invoice document.

แชร์ลิงค์ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.taxInvoicesSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesSharedocumentPost");
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


## taxInvoicesWithPaymentPost

> SimpleDocumentResponse taxInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create tax invocie document with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.TaxInvoiceApi;

TaxInvoiceApi apiInstance = new TaxInvoiceApi();
String authorization = Bearer accessToken; // String | 
SimpleDocumentWithPaymentReceiving simpleDocumentWithPaymentReceiving = new SimpleDocumentWithPaymentReceiving(); // SimpleDocumentWithPaymentReceiving | 
try {
    SimpleDocumentResponse result = apiInstance.taxInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TaxInvoiceApi#taxInvoicesWithPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **simpleDocumentWithPaymentReceiving** | [**SimpleDocumentWithPaymentReceiving**](SimpleDocumentWithPaymentReceiving.md)|  |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

