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


<a name="taxInvoicesEmailDocumentPost"></a>
# **taxInvoicesEmailDocumentPost**
> SendEmailResponse taxInvoicesEmailDocumentPost(authorization, sendEmailCoppies)

Send Email tax invoice document

ส่งเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailCoppies : SendEmailCoppies =  // SendEmailCoppies | 
try {
    val result : SendEmailResponse = apiInstance.taxInvoicesEmailDocumentPost(authorization, sendEmailCoppies)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesEmailDocumentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sendEmailCoppies** | [**SendEmailCoppies**](SendEmailCoppies.md)|  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taxInvoicesGet"></a>
# **taxInvoicesGet**
> AllDocumentResponse taxInvoicesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all tax invocie documents.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document tax invoices. <br>Example Pattern: <ex>/tax-invoices?currentPage=1 </ex><ex>/tax-invoices?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/tax-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter tax-invoices. <br>Example Pattern: <ex> /tax-invoices?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllDocumentResponse = apiInstance.taxInvoicesGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document tax invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/tax-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/tax-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter tax-invoices. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="taxInvoicesIdAttachmentPost"></a>
# **taxInvoicesIdAttachmentPost**
> AttachmentResponse taxInvoicesIdAttachmentPost(authorization, id, file)

Attachment tax Invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
val file : java.io.File = BINARY_DATA_HERE // java.io.File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    val result : AttachmentResponse = apiInstance.taxInvoicesIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesIdAttachmentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ |
 **file** | **java.io.File**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional]

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="taxInvoicesIdDelete"></a>
# **taxInvoicesIdDelete**
> DeleteResponse taxInvoicesIdDelete(authorization, id)

Delete tax invoices document.

ลบ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะรอดำเนินการ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.taxInvoicesIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesIdDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="taxInvoicesIdGet"></a>
# **taxInvoicesIdGet**
> SimpleDocumentResponse taxInvoicesIdGet(authorization, id)

Get tax invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | ID เอกสารใช้ recordId
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : SimpleDocumentResponse = apiInstance.taxInvoicesIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**| ID เอกสารใช้ recordId | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="taxInvoicesIdPaymentPost"></a>
# **taxInvoicesIdPaymentPost**
> InlineDocumentResponse taxInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument)

Change status is paid tax-invoice document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId หรือ documentId
val paymentReceivingDocument : PaymentReceivingDocument =  // PaymentReceivingDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.taxInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesIdPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesIdPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId หรือ documentId |
 **paymentReceivingDocument** | [**PaymentReceivingDocument**](PaymentReceivingDocument.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taxInvoicesIdPut"></a>
# **taxInvoicesIdPut**
> InlineDocumentResponse taxInvoicesIdPut(authorization, id, updateInlineDocument)

Edit tax invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateInlineDocument : UpdateInlineDocument =  // UpdateInlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.taxInvoicesIdPut(authorization, id, updateInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesIdPut")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **updateInlineDocument** | [**UpdateInlineDocument**](UpdateInlineDocument.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taxInvoicesIdStatusStatusIdPost"></a>
# **taxInvoicesIdStatusStatusIdPost**
> InlineDocumentResponse taxInvoicesIdStatusStatusIdPost(authorization, id, statusId)

Change status tax invoices document.

เปลี่ยนสถานะของเอกสารเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก
try {
    val result : InlineDocumentResponse = apiInstance.taxInvoicesIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="taxInvoicesInlinePost"></a>
# **taxInvoicesInlinePost**
> InlineDocumentResponse taxInvoicesInlinePost(authorization, inlineDocument)

Create tax invocie document inline discount or inline vat.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocument : InlineDocument =  // InlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.taxInvoicesInlinePost(authorization, inlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesInlinePost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **inlineDocument** | [**InlineDocument**](InlineDocument.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taxInvoicesInlineWithPaymentPost"></a>
# **taxInvoicesInlineWithPaymentPost**
> InlineDocumentResponse taxInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create tax invocie document inline discount or inline vat with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocumentWithPaymentReceiving : InlineDocumentWithPaymentReceiving =  // InlineDocumentWithPaymentReceiving | 
try {
    val result : InlineDocumentResponse = apiInstance.taxInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesInlineWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesInlineWithPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **inlineDocumentWithPaymentReceiving** | [**InlineDocumentWithPaymentReceiving**](InlineDocumentWithPaymentReceiving.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taxInvoicesPost"></a>
# **taxInvoicesPost**
> SimpleDocumentResponse taxInvoicesPost(authorization, simpleDocument)

Create tax invocie document.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocument : SimpleDocument =  // SimpleDocument | 
try {
    val result : SimpleDocumentResponse = apiInstance.taxInvoicesPost(authorization, simpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **simpleDocument** | [**SimpleDocument**](SimpleDocument.md)|  |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taxInvoicesSharedocumentPost"></a>
# **taxInvoicesSharedocumentPost**
> ShareDocumentResponse taxInvoicesSharedocumentPost(authorization, shareDocument)

Share link tax invoice document.

แชร์ลิงค์ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.taxInvoicesSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesSharedocumentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **shareDocument** | [**ShareDocument**](ShareDocument.md)|  |

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="taxInvoicesWithPaymentPost"></a>
# **taxInvoicesWithPaymentPost**
> SimpleDocumentResponse taxInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create tax invocie document with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TaxInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocumentWithPaymentReceiving : SimpleDocumentWithPaymentReceiving =  // SimpleDocumentWithPaymentReceiving | 
try {
    val result : SimpleDocumentResponse = apiInstance.taxInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TaxInvoiceApi#taxInvoicesWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TaxInvoiceApi#taxInvoicesWithPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **simpleDocumentWithPaymentReceiving** | [**SimpleDocumentWithPaymentReceiving**](SimpleDocumentWithPaymentReceiving.md)|  |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

