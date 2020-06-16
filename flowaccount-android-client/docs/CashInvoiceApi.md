# CashInvoiceApi

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

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
try {
    SendEmailResponse result = apiInstance.cashInvoicesEmailDocumentPost(authorization, sendEmailCoppies);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesEmailDocumentPost");
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


## cashInvoicesGet

> AllDocumentResponse cashInvoicesGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all cash invoices documents

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
Integer currentPage = null; // Integer | Query current page document cash invoices. <br>Example Pattern: <ex>/cash-invoices?currentPage=1 </ex><ex>/cash-invoices?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/cash-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | 
try {
    AllDocumentResponse result = apiInstance.cashInvoicesGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document cash invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/cash-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/cash-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**|  | [optional] [default to null]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cashInvoicesIdAttachmentPost

> AttachmentResponse cashInvoicesIdAttachmentPost(authorization, id, file)

Add Attachment to cash invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
File file = null; // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    AttachmentResponse result = apiInstance.cashInvoicesIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesIdAttachmentPost");
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


## cashInvoicesIdDelete

> DeleteResponse cashInvoicesIdDelete(authorization, id)

Delete cash invoices document.

ลบ เอกสารใบกำกับ/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.cashInvoicesIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesIdDelete");
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


## cashInvoicesIdGet

> InlineDocumentResponse cashInvoicesIdGet(authorization, id)

Get cash invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | 
try {
    InlineDocumentResponse result = apiInstance.cashInvoicesIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesIdGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**|  | [default to null]

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

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId หรือ documentId
PaymentReceivingDocument paymentReceivingDocument = new PaymentReceivingDocument(); // PaymentReceivingDocument | 
try {
    InlineDocumentResponse result = apiInstance.cashInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesIdPaymentPost");
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


## cashInvoicesIdPut

> InlineDocumentResponse cashInvoicesIdPut(authorization, id, updateInlineDocument)

Edit cash invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.cashInvoicesIdPut(authorization, id, updateInlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesIdPut");
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


## cashInvoicesIdStatusStatusIdPost

> InlineDocumentResponse cashInvoicesIdStatusStatusIdPost(authorization, id, statusId)

Change status of cash invoices document.

เปลี่ยนสถานะของเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก
try {
    InlineDocumentResponse result = apiInstance.cashInvoicesIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesIdStatusStatusIdPost");
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


## cashInvoicesInlinePost

> InlineDocumentResponse cashInvoicesInlinePost(authorization, inlineDocument)

Create cash invoices document with discount and tax inline.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
try {
    InlineDocumentResponse result = apiInstance.cashInvoicesInlinePost(authorization, inlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesInlinePost");
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


## cashInvoicesInlineWithPaymentPost

> InlineDocumentResponse cashInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create cash invoices document with discount and tax inline with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
InlineDocumentWithPaymentReceiving inlineDocumentWithPaymentReceiving = new InlineDocumentWithPaymentReceiving(); // InlineDocumentWithPaymentReceiving | 
try {
    InlineDocumentResponse result = apiInstance.cashInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesInlineWithPaymentPost");
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


## cashInvoicesPost

> SimpleDocumentResponse cashInvoicesPost(authorization, simpleDocument)

Create cash invoices document.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
try {
    SimpleDocumentResponse result = apiInstance.cashInvoicesPost(authorization, simpleDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesPost");
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


## cashInvoicesSharedocumentPost

> ShareDocumentResponse cashInvoicesSharedocumentPost(authorization, shareDocument)

Share link cash invoices document.

แชร์ลิงค์ เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.cashInvoicesSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesSharedocumentPost");
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


## cashInvoicesWithPaymentPost

> SimpleDocumentResponse cashInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create cash invoices document with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.CashInvoiceApi;

CashInvoiceApi apiInstance = new CashInvoiceApi();
String authorization = Bearer accessToken; // String | 
SimpleDocumentWithPaymentReceiving simpleDocumentWithPaymentReceiving = new SimpleDocumentWithPaymentReceiving(); // SimpleDocumentWithPaymentReceiving | 
try {
    SimpleDocumentResponse result = apiInstance.cashInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CashInvoiceApi#cashInvoicesWithPaymentPost");
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

