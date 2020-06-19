# CashInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cashInvoicesEmailDocumentPost**](CashInvoiceApi.md#cashInvoicesEmailDocumentPost) | **POST** /cash-invoices/email-document | Send email cash invoices document.
[**cashInvoicesGet**](CashInvoiceApi.md#cashInvoicesGet) | **GET** /cash-invoices | Get all cash invoices documents
[**cashInvoicesIdAttachmentPost**](CashInvoiceApi.md#cashInvoicesIdAttachmentPost) | **POST** /cash-invoices/{id}/attachment | Attachment cash invoices document.
[**cashInvoicesIdDelete**](CashInvoiceApi.md#cashInvoicesIdDelete) | **DELETE** /cash-invoices/{id} | Delete cash invoices document.
[**cashInvoicesIdGet**](CashInvoiceApi.md#cashInvoicesIdGet) | **GET** /cash-invoices/{id} | Get cash invoices document.
[**cashInvoicesIdPaymentPost**](CashInvoiceApi.md#cashInvoicesIdPaymentPost) | **POST** /cash-invoices/{id}/payment | Change status is paid cash invoices document.
[**cashInvoicesIdPut**](CashInvoiceApi.md#cashInvoicesIdPut) | **PUT** /cash-invoices/{id} | Edit cash invoices document.
[**cashInvoicesIdStatusStatusIdPost**](CashInvoiceApi.md#cashInvoicesIdStatusStatusIdPost) | **POST** /cash-invoices/{id}/status/{statusId} | Change status cash invoices document.
[**cashInvoicesInlinePost**](CashInvoiceApi.md#cashInvoicesInlinePost) | **POST** /cash-invoices/inline | Create cash invoices document inline discount or inline vat.
[**cashInvoicesInlineWithPaymentPost**](CashInvoiceApi.md#cashInvoicesInlineWithPaymentPost) | **POST** /cash-invoices/inline/with-payment | Create cash invoices document inline discount or inline vat with payment.
[**cashInvoicesPost**](CashInvoiceApi.md#cashInvoicesPost) | **POST** /cash-invoices | Create cash invoices document.
[**cashInvoicesSharedocumentPost**](CashInvoiceApi.md#cashInvoicesSharedocumentPost) | **POST** /cash-invoices/sharedocument | Share link cash invoices document.
[**cashInvoicesWithPaymentPost**](CashInvoiceApi.md#cashInvoicesWithPaymentPost) | **POST** /cash-invoices/with-payment | Create cash invoices document with payment.


<a name="cashInvoicesEmailDocumentPost"></a>
# **cashInvoicesEmailDocumentPost**
> SendEmailResponse cashInvoicesEmailDocumentPost(authorization, sendEmailCoppies)

Send email cash invoices document.

ส่งเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailCoppies : SendEmailCoppies =  // SendEmailCoppies | 
try {
    val result : SendEmailResponse = apiInstance.cashInvoicesEmailDocumentPost(authorization, sendEmailCoppies)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesEmailDocumentPost")
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

<a name="cashInvoicesGet"></a>
# **cashInvoicesGet**
> AllDocumentResponse cashInvoicesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all cash invoices documents

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document cash invoices. <br>Example Pattern: <ex>/cash-invoices?currentPage=1 </ex><ex>/cash-invoices?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/cash-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter cash-invoices. <br>Example Pattern: <ex> /cash-invoices?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllDocumentResponse = apiInstance.cashInvoicesGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document cash invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/cash-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/cash-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter cash-invoices. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cashInvoicesIdAttachmentPost"></a>
# **cashInvoicesIdAttachmentPost**
> AttachmentResponse cashInvoicesIdAttachmentPost(authorization, id, file)

Attachment cash invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
val file : java.io.File = BINARY_DATA_HERE // java.io.File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    val result : AttachmentResponse = apiInstance.cashInvoicesIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesIdAttachmentPost")
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

<a name="cashInvoicesIdDelete"></a>
# **cashInvoicesIdDelete**
> DeleteResponse cashInvoicesIdDelete(authorization, id)

Delete cash invoices document.

ลบ เอกสารใบกำกับ/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.cashInvoicesIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesIdDelete")
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

<a name="cashInvoicesIdGet"></a>
# **cashInvoicesIdGet**
> InlineDocumentResponse cashInvoicesIdGet(authorization, id)

Get cash invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : InlineDocumentResponse = apiInstance.cashInvoicesIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cashInvoicesIdPaymentPost"></a>
# **cashInvoicesIdPaymentPost**
> InlineDocumentResponse cashInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument)

Change status is paid cash invoices document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId หรือ documentId
val paymentReceivingDocument : PaymentReceivingDocument =  // PaymentReceivingDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.cashInvoicesIdPaymentPost(authorization, id, paymentReceivingDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesIdPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesIdPaymentPost")
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

<a name="cashInvoicesIdPut"></a>
# **cashInvoicesIdPut**
> InlineDocumentResponse cashInvoicesIdPut(authorization, id, updateInlineDocument)

Edit cash invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateInlineDocument : UpdateInlineDocument =  // UpdateInlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.cashInvoicesIdPut(authorization, id, updateInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesIdPut")
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

<a name="cashInvoicesIdStatusStatusIdPost"></a>
# **cashInvoicesIdStatusStatusIdPost**
> InlineDocumentResponse cashInvoicesIdStatusStatusIdPost(authorization, id, statusId)

Change status cash invoices document.

เปลี่ยนสถานะของเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก
try {
    val result : InlineDocumentResponse = apiInstance.cashInvoicesIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesIdStatusStatusIdPost")
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

<a name="cashInvoicesInlinePost"></a>
# **cashInvoicesInlinePost**
> InlineDocumentResponse cashInvoicesInlinePost(authorization, inlineDocument)

Create cash invoices document inline discount or inline vat.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocument : InlineDocument =  // InlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.cashInvoicesInlinePost(authorization, inlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesInlinePost")
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

<a name="cashInvoicesInlineWithPaymentPost"></a>
# **cashInvoicesInlineWithPaymentPost**
> InlineDocumentResponse cashInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create cash invoices document inline discount or inline vat with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocumentWithPaymentReceiving : InlineDocumentWithPaymentReceiving =  // InlineDocumentWithPaymentReceiving | 
try {
    val result : InlineDocumentResponse = apiInstance.cashInvoicesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesInlineWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesInlineWithPaymentPost")
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

<a name="cashInvoicesPost"></a>
# **cashInvoicesPost**
> SimpleDocumentResponse cashInvoicesPost(authorization, simpleDocument)

Create cash invoices document.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocument : SimpleDocument =  // SimpleDocument | 
try {
    val result : SimpleDocumentResponse = apiInstance.cashInvoicesPost(authorization, simpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesPost")
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

<a name="cashInvoicesSharedocumentPost"></a>
# **cashInvoicesSharedocumentPost**
> ShareDocumentResponse cashInvoicesSharedocumentPost(authorization, shareDocument)

Share link cash invoices document.

แชร์ลิงค์ เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.cashInvoicesSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesSharedocumentPost")
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

<a name="cashInvoicesWithPaymentPost"></a>
# **cashInvoicesWithPaymentPost**
> SimpleDocumentResponse cashInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create cash invoices document with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CashInvoiceApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocumentWithPaymentReceiving : SimpleDocumentWithPaymentReceiving =  // SimpleDocumentWithPaymentReceiving | 
try {
    val result : SimpleDocumentResponse = apiInstance.cashInvoicesWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CashInvoiceApi#cashInvoicesWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CashInvoiceApi#cashInvoicesWithPaymentPost")
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

