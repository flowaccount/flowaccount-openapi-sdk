# QuotationsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotationsEmailDocumentPost**](QuotationsApi.md#quotationsEmailDocumentPost) | **POST** /quotations/email-document | Send email quotations document.
[**quotationsGet**](QuotationsApi.md#quotationsGet) | **GET** /quotations | Get all quotations documents.
[**quotationsIdAttachmentPost**](QuotationsApi.md#quotationsIdAttachmentPost) | **POST** /quotations/{id}/attachment | Attachment quotations document.
[**quotationsIdDelete**](QuotationsApi.md#quotationsIdDelete) | **DELETE** /quotations/{id} | Delete quotations document.
[**quotationsIdGet**](QuotationsApi.md#quotationsIdGet) | **GET** /quotations/{id} | Get quotations document.
[**quotationsIdPut**](QuotationsApi.md#quotationsIdPut) | **PUT** /quotations/{id} | Edit quotations document.
[**quotationsIdStatusStatusIdPost**](QuotationsApi.md#quotationsIdStatusStatusIdPost) | **POST** /quotations/{id}/status/{statusId} | Change status quotations document.
[**quotationsInlinePost**](QuotationsApi.md#quotationsInlinePost) | **POST** /quotations/inline | Create quotations document inline discount or inline vat.
[**quotationsPost**](QuotationsApi.md#quotationsPost) | **POST** /quotations | Create quotations document.
[**quotationsSharedocumentPost**](QuotationsApi.md#quotationsSharedocumentPost) | **POST** /quotations/sharedocument | Share link quotations document.


<a name="quotationsEmailDocumentPost"></a>
# **quotationsEmailDocumentPost**
> SendEmailResponse quotationsEmailDocumentPost(authorization, sendEmailSimple)

Send email quotations document.

ส่งเอกสารใบเสนอราคา ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailSimple : SendEmailSimple =  // SendEmailSimple | 
try {
    val result : SendEmailResponse = apiInstance.quotationsEmailDocumentPost(authorization, sendEmailSimple)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsEmailDocumentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md)|  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="quotationsGet"></a>
# **quotationsGet**
> AllDocumentResponse quotationsGet(currentPage, pageSize, authorization, sortBy, filter)

Get all quotations documents.

เรียกดูข้อมูลเอกสารใบเสนอราคาทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document quotations. <br>Example Pattern: <ex>/quotations?currentPage=1 </ex><ex>/quotations?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/quotations?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter quotations. <br>Example Pattern: <ex> /quotations?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllDocumentResponse = apiInstance.quotationsGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document quotations. &lt;br&gt;Example Pattern: &lt;ex&gt;/quotations?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/quotations?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter quotations. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="quotationsIdAttachmentPost"></a>
# **quotationsIdAttachmentPost**
> AttachmentResponse quotationsIdAttachmentPost(authorization, id, file)

Attachment quotations document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
val file : java.io.File = BINARY_DATA_HERE // java.io.File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
try {
    val result : AttachmentResponse = apiInstance.quotationsIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsIdAttachmentPost")
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

<a name="quotationsIdDelete"></a>
# **quotationsIdDelete**
> DeleteResponse quotationsIdDelete(authorization, id)

Delete quotations document.

ลบ เอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.quotationsIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsIdDelete")
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

<a name="quotationsIdGet"></a>
# **quotationsIdGet**
> InlineDocumentResponse quotationsIdGet(authorization, id)

Get quotations document.

เรียกดูข้อมูลเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : InlineDocumentResponse = apiInstance.quotationsIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsIdGet")
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

<a name="quotationsIdPut"></a>
# **quotationsIdPut**
> InlineDocumentResponse quotationsIdPut(authorization, id, updateInlineDocument)

Edit quotations document.

แก้ไขข้อมูลเอกสารใบเสนอราคา ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateInlineDocument : UpdateInlineDocument =  // UpdateInlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.quotationsIdPut(authorization, id, updateInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsIdPut")
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

<a name="quotationsIdStatusStatusIdPost"></a>
# **quotationsIdStatusStatusIdPost**
> InlineDocumentResponse quotationsIdStatusStatusIdPost(authorization, id, statusId)

Change status quotations document.

เปลี่ยนสถานะของเอกสารใบเสนอราคา สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> rejected = ยกเลิก
try {
    val result : InlineDocumentResponse = apiInstance.quotationsIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; rejected &#x3D; ยกเลิก |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="quotationsInlinePost"></a>
# **quotationsInlinePost**
> InlineDocumentResponse quotationsInlinePost(authorization, inlineDocument)

Create quotations document inline discount or inline vat.

สร้างเอกสารใบเสนอราคา แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val inlineDocument : InlineDocument =  // InlineDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.quotationsInlinePost(authorization, inlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsInlinePost")
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

<a name="quotationsPost"></a>
# **quotationsPost**
> InlineDocumentResponse quotationsPost(authorization, simpleDocument)

Create quotations document.

สร้างเอกสารใบเสนอราคา เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val simpleDocument : SimpleDocument =  // SimpleDocument | 
try {
    val result : InlineDocumentResponse = apiInstance.quotationsPost(authorization, simpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **simpleDocument** | [**SimpleDocument**](SimpleDocument.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="quotationsSharedocumentPost"></a>
# **quotationsSharedocumentPost**
> ShareDocumentResponse quotationsSharedocumentPost(authorization, shareDocument)

Share link quotations document.

แชร์ลิงค์ เอกสารใบเสนอราคาที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = QuotationsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.quotationsSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling QuotationsApi#quotationsSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling QuotationsApi#quotationsSharedocumentPost")
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

