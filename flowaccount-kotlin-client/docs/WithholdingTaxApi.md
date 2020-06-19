# WithholdingTaxApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withholdingTaxesEmailDocumentPost**](WithholdingTaxApi.md#withholdingTaxesEmailDocumentPost) | **POST** /withholding-taxes/email-document | Send email withholding tax.
[**withholdingTaxesGet**](WithholdingTaxApi.md#withholdingTaxesGet) | **GET** /withholding-taxes | Get all withholding tax documents.
[**withholdingTaxesIdAttachmentPost**](WithholdingTaxApi.md#withholdingTaxesIdAttachmentPost) | **POST** /withholding-taxes/{id}/attachment | Attachment withholding tax.
[**withholdingTaxesIdDelete**](WithholdingTaxApi.md#withholdingTaxesIdDelete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
[**withholdingTaxesIdGet**](WithholdingTaxApi.md#withholdingTaxesIdGet) | **GET** /withholding-taxes/{id} | Get withholding tax document.
[**withholdingTaxesIdPut**](WithholdingTaxApi.md#withholdingTaxesIdPut) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
[**withholdingTaxesIdStatusStatusIdPost**](WithholdingTaxApi.md#withholdingTaxesIdStatusStatusIdPost) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status withholding tax document.
[**withholdingTaxesPost**](WithholdingTaxApi.md#withholdingTaxesPost) | **POST** /withholding-taxes | Create withholding tax document.
[**withholdingTaxesSharedocumentPost**](WithholdingTaxApi.md#withholdingTaxesSharedocumentPost) | **POST** /withholding-taxes/sharedocument | Share link withholding tax.


<a name="withholdingTaxesEmailDocumentPost"></a>
# **withholdingTaxesEmailDocumentPost**
> SendEmailResponse withholdingTaxesEmailDocumentPost(authorization, sendEmailSimple)

Send email withholding tax.

ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailSimple : SendEmailSimple =  // SendEmailSimple | 
try {
    val result : SendEmailResponse = apiInstance.withholdingTaxesEmailDocumentPost(authorization, sendEmailSimple)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesEmailDocumentPost")
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

<a name="withholdingTaxesGet"></a>
# **withholdingTaxesGet**
> AllWithholidingTaxDocumentResponse withholdingTaxesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all withholding tax documents.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page document withholding tax. <br>Example Pattern: <ex>/withholding-taxes?currentPage=1 </ex><ex>/withholding-taxes?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query sort by withholding tax. <br>Example Pattern: <ex> /withholding-taxes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/withholding-taxes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'entity','sortOrder':'asc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter withholding tax. <br>Example Pattern: <ex> /withholding-taxes?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllWithholidingTaxDocumentResponse = apiInstance.withholdingTaxesGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query sort by withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllWithholidingTaxDocumentResponse**](AllWithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="withholdingTaxesIdAttachmentPost"></a>
# **withholdingTaxesIdAttachmentPost**
> AttachmentResponse withholdingTaxesIdAttachmentPost(authorization, id, file)

Attachment withholding tax.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | 
val file : java.io.File = BINARY_DATA_HERE // java.io.File | 
try {
    val result : AttachmentResponse = apiInstance.withholdingTaxesIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesIdAttachmentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**|  |
 **file** | **java.io.File**|  | [optional]

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="withholdingTaxesIdDelete"></a>
# **withholdingTaxesIdDelete**
> DeleteResponse withholdingTaxesIdDelete(authorization, id)

Delete withholding tax document.

ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.withholdingTaxesIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesIdDelete")
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

<a name="withholdingTaxesIdGet"></a>
# **withholdingTaxesIdGet**
> WithholidingTaxDocumentResponse withholdingTaxesIdGet(authorization, id)

Get withholding tax document.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId หรือ documentId
try {
    val result : WithholidingTaxDocumentResponse = apiInstance.withholdingTaxesIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId หรือ documentId |

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="withholdingTaxesIdPut"></a>
# **withholdingTaxesIdPut**
> WithholidingTaxDocumentResponse withholdingTaxesIdPut(authorization, id, updateWithholidingTaxDocument)

Edit withholding tax document.

แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateWithholidingTaxDocument : UpdateWithholidingTaxDocument =  // UpdateWithholidingTaxDocument | 
try {
    val result : WithholidingTaxDocumentResponse = apiInstance.withholdingTaxesIdPut(authorization, id, updateWithholidingTaxDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesIdPut")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **updateWithholidingTaxDocument** | [**UpdateWithholidingTaxDocument**](UpdateWithholidingTaxDocument.md)|  |

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="withholdingTaxesIdStatusStatusIdPost"></a>
# **withholdingTaxesIdStatusStatusIdPost**
> WithholidingTaxDocumentResponse withholdingTaxesIdStatusStatusIdPost(authorization, id, statusId)

Change status withholding tax document.

เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> processed = ดำเนินการแล้ว <br> void = ยกเลิก
try {
    val result : WithholidingTaxDocumentResponse = apiInstance.withholdingTaxesIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="withholdingTaxesPost"></a>
# **withholdingTaxesPost**
> WithholidingTaxDocumentResponse withholdingTaxesPost(authorization, withholidingTaxDocument)

Create withholding tax document.

สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val withholidingTaxDocument : WithholidingTaxDocument =  // WithholidingTaxDocument | 
try {
    val result : WithholidingTaxDocumentResponse = apiInstance.withholdingTaxesPost(authorization, withholidingTaxDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **withholidingTaxDocument** | [**WithholidingTaxDocument**](WithholidingTaxDocument.md)|  |

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="withholdingTaxesSharedocumentPost"></a>
# **withholdingTaxesSharedocumentPost**
> ShareDocumentResponse withholdingTaxesSharedocumentPost(authorization, shareDocument)

Share link withholding tax.

แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WithholdingTaxApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.withholdingTaxesSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WithholdingTaxApi#withholdingTaxesSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WithholdingTaxApi#withholdingTaxesSharedocumentPost")
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

