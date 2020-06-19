# ReceiptApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiptsEmailDocumentPost**](ReceiptApi.md#receiptsEmailDocumentPost) | **POST** /receipts/email-document | Send email receipt document.
[**receiptsGet**](ReceiptApi.md#receiptsGet) | **GET** /receipts | Get all receipt documents
[**receiptsIdAttachmentPost**](ReceiptApi.md#receiptsIdAttachmentPost) | **POST** /receipts/{id}/attachment | Attachment receipt document.
[**receiptsIdDelete**](ReceiptApi.md#receiptsIdDelete) | **DELETE** /receipts/{id} | Delete receipt document.
[**receiptsIdGet**](ReceiptApi.md#receiptsIdGet) | **GET** /receipts/{id} | Get receipt document.
[**receiptsIdPaymentPost**](ReceiptApi.md#receiptsIdPaymentPost) | **POST** /receipts/{id}/payment | Change status is paid receipt document.
[**receiptsIdPut**](ReceiptApi.md#receiptsIdPut) | **PUT** /receipts/{id} | Edit receipt document.
[**receiptsIdStatusStatusIdPost**](ReceiptApi.md#receiptsIdStatusStatusIdPost) | **POST** /receipts/{id}/status/{statusId} | Change status receipt document.
[**receiptsInlinePost**](ReceiptApi.md#receiptsInlinePost) | **POST** /receipts/inline | Create receipt document inline discount or inline vat.
[**receiptsInlineWithPaymentPost**](ReceiptApi.md#receiptsInlineWithPaymentPost) | **POST** /receipts/inline/with-payment | Create receipt document inline discount or inline vat with payment.
[**receiptsPost**](ReceiptApi.md#receiptsPost) | **POST** /receipts | Create receipt document.
[**receiptsSharedocumentPost**](ReceiptApi.md#receiptsSharedocumentPost) | **POST** /receipts/sharedocument | Share link receipt document.
[**receiptsWithPaymentPost**](ReceiptApi.md#receiptsWithPaymentPost) | **POST** /receipts/with-payment | Create receipt document with payment.


<a name="receiptsEmailDocumentPost"></a>
# **receiptsEmailDocumentPost**
> SendEmailResponse receiptsEmailDocumentPost(authorization, sendEmailCoppies)

Send email receipt document.

ส่งเอกสารใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailCoppies : SendEmailCoppies =  // SendEmailCoppies | 
try {
    val result : SendEmailResponse = apiInstance.receiptsEmailDocumentPost(authorization, sendEmailCoppies)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsEmailDocumentPost")
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

<a name="receiptsGet"></a>
# **receiptsGet**
> AllDocumentResponse receiptsGet(currentPage, pageSize, authorization, sortBy, filter)

Get all receipt documents

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document receipts. <br>Example Pattern: <ex>/receipts?currentPage=1 </ex><ex>/receipts?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/receipts?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter receipts. <br>Example Pattern: <ex> /receipts?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllDocumentResponse = apiInstance.receiptsGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document receipts. &lt;br&gt;Example Pattern: &lt;ex&gt;/receipts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/receipts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter receipts. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="receiptsIdAttachmentPost"></a>
# **receiptsIdAttachmentPost**
> AttachmentResponse receiptsIdAttachmentPost(authorization, id, file)

Attachment receipt document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
val file : java.io.File = BINARY_DATA_HERE // java.io.File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    val result : AttachmentResponse = apiInstance.receiptsIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsIdAttachmentPost")
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

<a name="receiptsIdDelete"></a>
# **receiptsIdDelete**
> DeleteResponse receiptsIdDelete(authorization, id)

Delete receipt document.

ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.receiptsIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsIdDelete")
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

<a name="receiptsIdGet"></a>
# **receiptsIdGet**
> InlineDocumentResponse receiptsIdGet(authorization, id)

Get receipt document.

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : InlineDocumentResponse = apiInstance.receiptsIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="receiptsIdPaymentPost"></a>
# **receiptsIdPaymentPost**
> InlineDocumentResponse receiptsIdPaymentPost(authorization, id, paymentReceivingDocument)

Change status is paid receipt document.

เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId หรือ documentId
val paymentReceivingDocument : PaymentReceivingDocument =  // PaymentReceivingDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.receiptsIdPaymentPost(authorization, id, paymentReceivingDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsIdPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsIdPaymentPost")
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

<a name="receiptsIdPut"></a>
# **receiptsIdPut**
> InlineDocumentResponse receiptsIdPut(authorization, id, updateInlineDocument)

Edit receipt document.

แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateInlineDocument : UpdateInlineDocument =  // UpdateInlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.receiptsIdPut(authorization, id, updateInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsIdPut")
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

<a name="receiptsIdStatusStatusIdPost"></a>
# **receiptsIdStatusStatusIdPost**
> InlineDocumentResponse receiptsIdStatusStatusIdPost(authorization, id, statusId)

Change status receipt document.

เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 1 สถานะ <br> void = ยกเลิก
try {
    val result : InlineDocumentResponse = apiInstance.receiptsIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 1 สถานะ &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="receiptsInlinePost"></a>
# **receiptsInlinePost**
> InlineDocumentResponse receiptsInlinePost(authorization, inlineDocument)

Create receipt document inline discount or inline vat.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocument : InlineDocument =  // InlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.receiptsInlinePost(authorization, inlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsInlinePost")
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

<a name="receiptsInlineWithPaymentPost"></a>
# **receiptsInlineWithPaymentPost**
> InlineDocumentResponse receiptsInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create receipt document inline discount or inline vat with payment.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocumentWithPaymentReceiving : InlineDocumentWithPaymentReceiving =  // InlineDocumentWithPaymentReceiving | 
try {
    val result : InlineDocumentResponse = apiInstance.receiptsInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsInlineWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsInlineWithPaymentPost")
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

<a name="receiptsPost"></a>
# **receiptsPost**
> SimpleDocumentResponse receiptsPost(authorization, simpleDocument)

Create receipt document.

สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocument : SimpleDocument =  // SimpleDocument | 
try {
    val result : SimpleDocumentResponse = apiInstance.receiptsPost(authorization, simpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsPost")
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

<a name="receiptsSharedocumentPost"></a>
# **receiptsSharedocumentPost**
> ShareDocumentResponse receiptsSharedocumentPost(authorization, shareDocument)

Share link receipt document.

แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.receiptsSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsSharedocumentPost")
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

<a name="receiptsWithPaymentPost"></a>
# **receiptsWithPaymentPost**
> SimpleDocumentResponse receiptsWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create receipt document with payment.

สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceiptApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocumentWithPaymentReceiving : SimpleDocumentWithPaymentReceiving =  // SimpleDocumentWithPaymentReceiving | 
try {
    val result : SimpleDocumentResponse = apiInstance.receiptsWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceiptApi#receiptsWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceiptApi#receiptsWithPaymentPost")
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

