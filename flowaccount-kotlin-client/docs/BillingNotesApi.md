# BillingNotesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billingNotesEmailDocumentPost**](BillingNotesApi.md#billingNotesEmailDocumentPost) | **POST** /billing-notes/email-document | Send email billing notes document.
[**billingNotesGet**](BillingNotesApi.md#billingNotesGet) | **GET** /billing-notes | Get all billing notes documents.
[**billingNotesIdAttachmentPost**](BillingNotesApi.md#billingNotesIdAttachmentPost) | **POST** /billing-notes/{id}/attachment | Attachment billing notes document.
[**billingNotesIdDelete**](BillingNotesApi.md#billingNotesIdDelete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
[**billingNotesIdGet**](BillingNotesApi.md#billingNotesIdGet) | **GET** /billing-notes/{id} | Get billing notes document.
[**billingNotesIdPut**](BillingNotesApi.md#billingNotesIdPut) | **PUT** /billing-notes/{id} | Edit billing notes document.
[**billingNotesIdStatusStatusIdPost**](BillingNotesApi.md#billingNotesIdStatusStatusIdPost) | **POST** /billing-notes/{id}/status/{statusId} | Change status billing notes document.
[**billingNotesInlinePost**](BillingNotesApi.md#billingNotesInlinePost) | **POST** /billing-notes/inline | Create billing notes document inline discount or inline vat.
[**billingNotesPost**](BillingNotesApi.md#billingNotesPost) | **POST** /billing-notes | Create billing notes document.
[**billingNotesSharedocumentPost**](BillingNotesApi.md#billingNotesSharedocumentPost) | **POST** /billing-notes/sharedocument | Share link billing notes document.


<a name="billingNotesEmailDocumentPost"></a>
# **billingNotesEmailDocumentPost**
> SendEmailResponse billingNotesEmailDocumentPost(authorization, sendEmailCoppies)

Send email billing notes document.

ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailCoppies : SendEmailCoppies =  // SendEmailCoppies | 
try {
    val result : SendEmailResponse = apiInstance.billingNotesEmailDocumentPost(authorization, sendEmailCoppies)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesEmailDocumentPost")
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

<a name="billingNotesGet"></a>
# **billingNotesGet**
> AllDocumentResponse billingNotesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all billing notes documents.

เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document billing notes. <br>Example Pattern: <ex>/billing-notes?currentPage=1 </ex><ex>/billing-notes?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/billing-notes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter billing-notes. <br>Example Pattern: <ex> /billing-notes?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllDocumentResponse = apiInstance.billingNotesGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document billing notes. &lt;br&gt;Example Pattern: &lt;ex&gt;/billing-notes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/billing-notes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter billing-notes. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="billingNotesIdAttachmentPost"></a>
# **billingNotesIdAttachmentPost**
> AttachmentResponse billingNotesIdAttachmentPost(authorization, id, file)

Attachment billing notes document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
val file : java.io.File = BINARY_DATA_HERE // java.io.File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    val result : AttachmentResponse = apiInstance.billingNotesIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesIdAttachmentPost")
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

<a name="billingNotesIdDelete"></a>
# **billingNotesIdDelete**
> DeleteResponse billingNotesIdDelete(authorization, id)

Delete billing notes document.

ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.billingNotesIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesIdDelete")
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

<a name="billingNotesIdGet"></a>
# **billingNotesIdGet**
> InlineDocumentResponse billingNotesIdGet(authorization, id)

Get billing notes document.

เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : InlineDocumentResponse = apiInstance.billingNotesIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesIdGet")
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

<a name="billingNotesIdPut"></a>
# **billingNotesIdPut**
> InlineDocumentResponse billingNotesIdPut(authorization, id, updateInlineDocument)

Edit billing notes document.

แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateInlineDocument : UpdateInlineDocument =  // UpdateInlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.billingNotesIdPut(authorization, id, updateInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesIdPut")
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

<a name="billingNotesIdStatusStatusIdPost"></a>
# **billingNotesIdStatusStatusIdPost**
> InlineDocumentResponse billingNotesIdStatusStatusIdPost(authorization, id, statusId)

Change status billing notes document.

เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รอวางบิล <br> approved = วางบิลแล้ว <br> approvedandprocessed = เปิดบิลแล้ว <br> void = ยกเลิก
try {
    val result : InlineDocumentResponse = apiInstance.billingNotesIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รอวางบิล &lt;br&gt; approved &#x3D; วางบิลแล้ว &lt;br&gt; approvedandprocessed &#x3D; เปิดบิลแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="billingNotesInlinePost"></a>
# **billingNotesInlinePost**
> InlineDocumentResponse billingNotesInlinePost(authorization, inlineDocument)

Create billing notes document inline discount or inline vat.

สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocument : InlineDocument =  // InlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.billingNotesInlinePost(authorization, inlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesInlinePost")
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

<a name="billingNotesPost"></a>
# **billingNotesPost**
> SimpleDocumentResponse billingNotesPost(authorization, simpleDocument)

Create billing notes document.

สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocument : SimpleDocument =  // SimpleDocument | 
try {
    val result : SimpleDocumentResponse = apiInstance.billingNotesPost(authorization, simpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesPost")
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

<a name="billingNotesSharedocumentPost"></a>
# **billingNotesSharedocumentPost**
> ShareDocumentResponse billingNotesSharedocumentPost(authorization, shareDocument)

Share link billing notes document.

แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BillingNotesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.billingNotesSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BillingNotesApi#billingNotesSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BillingNotesApi#billingNotesSharedocumentPost")
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

