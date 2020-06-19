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


<a name="purchasesOrdersEmailDocumentPost"></a>
# **purchasesOrdersEmailDocumentPost**
> SendEmailResponse purchasesOrdersEmailDocumentPost(authorization, sendEmailCoppies)

Send email purchase order document.

ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailCoppies : SendEmailCoppies =  // SendEmailCoppies | 
try {
    val result : SendEmailResponse = apiInstance.purchasesOrdersEmailDocumentPost(authorization, sendEmailCoppies)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersEmailDocumentPost")
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

<a name="purchasesOrdersGet"></a>
# **purchasesOrdersGet**
> AllDocumentResponse purchasesOrdersGet(currentPage, pageSize, authorization, sortBy, filter)

Get all purchase order documents.

เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document purchase orders. <br>Example Pattern: <ex>/purchases-orders?currentPage=1 </ex><ex>/purchases-orders?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases-orders?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter purchases-orders. <br>Example Pattern: <ex> /purchases-orders?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllDocumentResponse = apiInstance.purchasesOrdersGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document purchase orders. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases-orders?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases-orders?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter purchases-orders. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="purchasesOrdersIdAttachmentPost"></a>
# **purchasesOrdersIdAttachmentPost**
> AttachmentResponse purchasesOrdersIdAttachmentPost(authorization, id, file)

Attachment purchase order document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
val file : java.io.File = BINARY_DATA_HERE // java.io.File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    val result : AttachmentResponse = apiInstance.purchasesOrdersIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersIdAttachmentPost")
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

<a name="purchasesOrdersIdDelete"></a>
# **purchasesOrdersIdDelete**
> DeleteResponse purchasesOrdersIdDelete(authorization, id)

Delete purchase order document.

ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.purchasesOrdersIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersIdDelete")
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

<a name="purchasesOrdersIdGet"></a>
# **purchasesOrdersIdGet**
> InlineDocumentResponse purchasesOrdersIdGet(authorization, id)

Get purchase order document.

เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : InlineDocumentResponse = apiInstance.purchasesOrdersIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersIdGet")
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

<a name="purchasesOrdersIdPut"></a>
# **purchasesOrdersIdPut**
> InlineDocumentResponse purchasesOrdersIdPut(authorization, id, updateInlineDocument)

Edit purchase order document.

แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateInlineDocument : UpdateInlineDocument =  // UpdateInlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.purchasesOrdersIdPut(authorization, id, updateInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersIdPut")
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

<a name="purchasesOrdersIdStatusStatusIdPost"></a>
# **purchasesOrdersIdStatusStatusIdPost**
> InlineDocumentResponse purchasesOrdersIdStatusStatusIdPost(authorization, id, statusId)

Change status purchase order document.

เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> void = ยกเลิก
try {
    val result : InlineDocumentResponse = apiInstance.purchasesOrdersIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="purchasesOrdersInlinePost"></a>
# **purchasesOrdersInlinePost**
> InlineDocumentResponse purchasesOrdersInlinePost(authorization, inlineDocument)

Create purchase order document inline discount or inline vat.

สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocument : InlineDocument =  // InlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.purchasesOrdersInlinePost(authorization, inlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersInlinePost")
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

<a name="purchasesOrdersPost"></a>
# **purchasesOrdersPost**
> SimpleDocumentResponse purchasesOrdersPost(authorization, simpleDocument)

Create purchase order document.

สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocument : SimpleDocument =  // SimpleDocument | 
try {
    val result : SimpleDocumentResponse = apiInstance.purchasesOrdersPost(authorization, simpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersPost")
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

<a name="purchasesOrdersSharedocumentPost"></a>
# **purchasesOrdersSharedocumentPost**
> ShareDocumentResponse purchasesOrdersSharedocumentPost(authorization, shareDocument)

Share link purchase order document.

แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PurchaseOrderApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.purchasesOrdersSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PurchaseOrderApi#purchasesOrdersSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PurchaseOrderApi#purchasesOrdersSharedocumentPost")
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

