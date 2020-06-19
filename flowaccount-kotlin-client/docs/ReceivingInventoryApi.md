# ReceivingInventoryApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchasesEmailDocumentPost**](ReceivingInventoryApi.md#purchasesEmailDocumentPost) | **POST** /purchases/email-document | Send email receiving inventory document.
[**purchasesGet**](ReceivingInventoryApi.md#purchasesGet) | **GET** /purchases | Get all receiving inventory documents.
[**purchasesIdAttachmentPost**](ReceivingInventoryApi.md#purchasesIdAttachmentPost) | **POST** /purchases/{id}/attachment | Attachment receiving inventory document.
[**purchasesIdDelete**](ReceivingInventoryApi.md#purchasesIdDelete) | **DELETE** /purchases/{id} | Delete receiving inventory document.
[**purchasesIdGet**](ReceivingInventoryApi.md#purchasesIdGet) | **GET** /purchases/{id} | Get receiving inventory document.
[**purchasesIdPaymentPost**](ReceivingInventoryApi.md#purchasesIdPaymentPost) | **POST** /purchases/{id}/payment | Change status is paid receiving inventory document.
[**purchasesIdPut**](ReceivingInventoryApi.md#purchasesIdPut) | **PUT** /purchases/{id} | Edit receiving inventory document.
[**purchasesIdStatusStatusIdPost**](ReceivingInventoryApi.md#purchasesIdStatusStatusIdPost) | **POST** /purchases/{id}/status/{statusId} | Change status receiving inventory document.
[**purchasesInlinePost**](ReceivingInventoryApi.md#purchasesInlinePost) | **POST** /purchases/inline | Create receiving inventory document inline discount or inline vat.
[**purchasesInlineWithPaymentPost**](ReceivingInventoryApi.md#purchasesInlineWithPaymentPost) | **POST** /purchases/inline/with-payment | Create receiving inventory document inline discount or inline vat with payment.
[**purchasesPost**](ReceivingInventoryApi.md#purchasesPost) | **POST** /purchases | Create receiving inventory document.
[**purchasesSharedocumentPost**](ReceivingInventoryApi.md#purchasesSharedocumentPost) | **POST** /purchases/sharedocument | Share link receiving inventory document.
[**purchasesWithPaymentPost**](ReceivingInventoryApi.md#purchasesWithPaymentPost) | **POST** /purchases/with-payment | Create receiving inventory document with payment.


<a name="purchasesEmailDocumentPost"></a>
# **purchasesEmailDocumentPost**
> SendEmailResponse purchasesEmailDocumentPost(authorization, sendEmailCoppies)

Send email receiving inventory document.

ส่งเอกสารใบรับสินค้า ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailCoppies : SendEmailCoppies =  // SendEmailCoppies | 
try {
    val result : SendEmailResponse = apiInstance.purchasesEmailDocumentPost(authorization, sendEmailCoppies)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesEmailDocumentPost")
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

<a name="purchasesGet"></a>
# **purchasesGet**
> AllDocumentResponse purchasesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all receiving inventory documents.

เรียกดูข้อมูลเอกสารใบรับสินค้าทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document purchases. <br>Example Pattern: <ex>/purchases?currentPage=1 </ex><ex>/purchases?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter purchases. <br>Example Pattern: <ex> /purchases?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllDocumentResponse = apiInstance.purchasesGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document purchases. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter purchases. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="purchasesIdAttachmentPost"></a>
# **purchasesIdAttachmentPost**
> AttachmentResponse purchasesIdAttachmentPost(authorization, id, file)

Attachment receiving inventory document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
val file : java.io.File = BINARY_DATA_HERE // java.io.File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    val result : AttachmentResponse = apiInstance.purchasesIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesIdAttachmentPost")
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

<a name="purchasesIdDelete"></a>
# **purchasesIdDelete**
> DeleteResponse purchasesIdDelete(authorization, id)

Delete receiving inventory document.

ลบ เอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.purchasesIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesIdDelete")
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

<a name="purchasesIdGet"></a>
# **purchasesIdGet**
> InlineDocumentResponse purchasesIdGet(authorization, id)

Get receiving inventory document.

เรียกดูข้อมูลเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : InlineDocumentResponse = apiInstance.purchasesIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesIdGet")
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

<a name="purchasesIdPaymentPost"></a>
# **purchasesIdPaymentPost**
> InlineDocumentResponse purchasesIdPaymentPost(authorization, id, paymentPaidDocument)

Change status is paid receiving inventory document.

ขำระเงิน เอกสารใบรับสินค้าเปลี่ยนสถานะเป็น ชำระเงินแล้ว

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId หรือ documentId
val paymentPaidDocument : PaymentPaidDocument =  // PaymentPaidDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.purchasesIdPaymentPost(authorization, id, paymentPaidDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesIdPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesIdPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId หรือ documentId |
 **paymentPaidDocument** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="purchasesIdPut"></a>
# **purchasesIdPut**
> InlineDocumentResponse purchasesIdPut(authorization, id, updateInlineDocument)

Edit receiving inventory document.

แก้ไขข้อมูลเอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateInlineDocument : UpdateInlineDocument =  // UpdateInlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.purchasesIdPut(authorization, id, updateInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesIdPut")
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

<a name="purchasesIdStatusStatusIdPost"></a>
# **purchasesIdStatusStatusIdPost**
> InlineDocumentResponse purchasesIdStatusStatusIdPost(authorization, id, statusId)

Change status receiving inventory document.

เปลี่ยนสถานะของเอกสารใบรับสินค้า สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> void = ยกเลิก
try {
    val result : InlineDocumentResponse = apiInstance.purchasesIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="purchasesInlinePost"></a>
# **purchasesInlinePost**
> InlineDocumentResponse purchasesInlinePost(authorization, inlineDocument)

Create receiving inventory document inline discount or inline vat.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocument : InlineDocument =  // InlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.purchasesInlinePost(authorization, inlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesInlinePost")
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

<a name="purchasesInlineWithPaymentPost"></a>
# **purchasesInlineWithPaymentPost**
> InlineDocumentResponse purchasesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentPaid)

Create receiving inventory document inline discount or inline vat with payment.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocumentWithPaymentPaid : InlineDocumentWithPaymentPaid =  // InlineDocumentWithPaymentPaid | 
try {
    val result : InlineDocumentResponse = apiInstance.purchasesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentPaid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesInlineWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesInlineWithPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **inlineDocumentWithPaymentPaid** | [**InlineDocumentWithPaymentPaid**](InlineDocumentWithPaymentPaid.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="purchasesPost"></a>
# **purchasesPost**
> SimpleDocumentResponse purchasesPost(authorization, simpleDocument)

Create receiving inventory document.

สร้างเอกสารใบรับสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocument : SimpleDocument =  // SimpleDocument | 
try {
    val result : SimpleDocumentResponse = apiInstance.purchasesPost(authorization, simpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesPost")
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

<a name="purchasesSharedocumentPost"></a>
# **purchasesSharedocumentPost**
> ShareDocumentResponse purchasesSharedocumentPost(authorization, shareDocument)

Share link receiving inventory document.

แชร์ลิงค์ เอกสารใบรับสินค้าที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.purchasesSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesSharedocumentPost")
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

<a name="purchasesWithPaymentPost"></a>
# **purchasesWithPaymentPost**
> SimpleDocumentResponse purchasesWithPaymentPost(authorization, simpleDocumentWithPaymentPaid)

Create receiving inventory document with payment.

สร้างเอกสารใบรับสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReceivingInventoryApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocumentWithPaymentPaid : SimpleDocumentWithPaymentPaid =  // SimpleDocumentWithPaymentPaid | 
try {
    val result : SimpleDocumentResponse = apiInstance.purchasesWithPaymentPost(authorization, simpleDocumentWithPaymentPaid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReceivingInventoryApi#purchasesWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReceivingInventoryApi#purchasesWithPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **simpleDocumentWithPaymentPaid** | [**SimpleDocumentWithPaymentPaid**](SimpleDocumentWithPaymentPaid.md)|  |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

