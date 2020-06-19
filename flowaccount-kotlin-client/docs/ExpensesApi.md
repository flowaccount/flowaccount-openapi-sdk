# ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expensesCategoriesAccountingGet**](ExpensesApi.md#expensesCategoriesAccountingGet) | **GET** /expenses/categories/accounting | Accounting categories expenses document.
[**expensesCategoriesBusinessGet**](ExpensesApi.md#expensesCategoriesBusinessGet) | **GET** /expenses/categories/business | Business categories expenses document.
[**expensesEmailDocumentPost**](ExpensesApi.md#expensesEmailDocumentPost) | **POST** /expenses/email-document | Send email expenses document.
[**expensesGet**](ExpensesApi.md#expensesGet) | **GET** /expenses | Get list all expenses documents.
[**expensesIdAttachmentPost**](ExpensesApi.md#expensesIdAttachmentPost) | **POST** /expenses/{id}/attachment | Attachment to expenses document.
[**expensesIdDelete**](ExpensesApi.md#expensesIdDelete) | **DELETE** /expenses/{id} | Delete expenses document.
[**expensesIdGet**](ExpensesApi.md#expensesIdGet) | **GET** /expenses/{id} | Get expenses document.
[**expensesIdPaymentPost**](ExpensesApi.md#expensesIdPaymentPost) | **POST** /expenses/{id}/payment | Change status is paid expenses document.
[**expensesIdPut**](ExpensesApi.md#expensesIdPut) | **PUT** /expenses/{id} | Edit expenses document.
[**expensesIdStatusStatusIdPost**](ExpensesApi.md#expensesIdStatusStatusIdPost) | **POST** /expenses/{id}/status/{statusId} | Change status expenses document.
[**expensesInlinePost**](ExpensesApi.md#expensesInlinePost) | **POST** /expenses/inline | Create expenses document inline discount or inline vat.
[**expensesInlineWithPaymentPost**](ExpensesApi.md#expensesInlineWithPaymentPost) | **POST** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
[**expensesPost**](ExpensesApi.md#expensesPost) | **POST** /expenses | Create expenses document.
[**expensesSharedocumentPost**](ExpensesApi.md#expensesSharedocumentPost) | **POST** /expenses/sharedocument | Share link expenses document.
[**expensesWithPaymentPost**](ExpensesApi.md#expensesWithPaymentPost) | **POST** /expenses/with-payment | Create expenses document with payment.


<a name="expensesCategoriesAccountingGet"></a>
# **expensesCategoriesAccountingGet**
> BusinessCategory expensesCategoriesAccountingGet(authorization)

Accounting categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : BusinessCategory = apiInstance.expensesCategoriesAccountingGet(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesCategoriesAccountingGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesCategoriesAccountingGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expensesCategoriesBusinessGet"></a>
# **expensesCategoriesBusinessGet**
> BusinessCategory expensesCategoriesBusinessGet(authorization)

Business categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : BusinessCategory = apiInstance.expensesCategoriesBusinessGet(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesCategoriesBusinessGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesCategoriesBusinessGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expensesEmailDocumentPost"></a>
# **expensesEmailDocumentPost**
> SendEmailResponse expensesEmailDocumentPost(authorization, sendEmailSimple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sendEmailSimple : SendEmailSimple =  // SendEmailSimple | 
try {
    val result : SendEmailResponse = apiInstance.expensesEmailDocumentPost(authorization, sendEmailSimple)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesEmailDocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesEmailDocumentPost")
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

<a name="expensesGet"></a>
# **expensesGet**
> AllExpenseDocumentResponse expensesGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page expenses document. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query expenses document list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Query sort by expense document. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Query filter expenses document. <br>Example Pattern: <ex> /expenses?filter=[{'columnName':'Status','columnValue':'processed','columnPredicateOperator':'And'}] </ex>
try {
    val result : AllExpenseDocumentResponse = apiInstance.expensesGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expensesIdAttachmentPost"></a>
# **expensesIdAttachmentPost**
> AttachmentResponse expensesIdAttachmentPost(authorization, id, file)

Attachment to expenses document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | 
val file : java.io.File = BINARY_DATA_HERE // java.io.File | 
try {
    val result : AttachmentResponse = apiInstance.expensesIdAttachmentPost(authorization, id, file)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesIdAttachmentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesIdAttachmentPost")
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

<a name="expensesIdDelete"></a>
# **expensesIdDelete**
> DeleteResponse expensesIdDelete(authorization, id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
try {
    val result : DeleteResponse = apiInstance.expensesIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesIdDelete")
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

<a name="expensesIdGet"></a>
# **expensesIdGet**
> AllExpenseDocumentResponse expensesIdGet(authorization, id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : AllExpenseDocumentResponse = apiInstance.expensesIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**|  |

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expensesIdPaymentPost"></a>
# **expensesIdPaymentPost**
> ExpenseSimpleDocumentResponse expensesIdPaymentPost(authorization, id, paymentPaidDocument)

Change status is paid expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId หรือ documentId
val paymentPaidDocument : PaymentPaidDocument =  // PaymentPaidDocument | 
try {
    val result : ExpenseSimpleDocumentResponse = apiInstance.expensesIdPaymentPost(authorization, id, paymentPaidDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesIdPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesIdPaymentPost")
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

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expensesIdPut"></a>
# **expensesIdPut**
> ExpenseInlineDocumentResponse expensesIdPut(authorization, id, updateExpenseDocument)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val updateExpenseDocument : UpdateExpenseDocument =  // UpdateExpenseDocument | 
try {
    val result : ExpenseInlineDocumentResponse = apiInstance.expensesIdPut(authorization, id, updateExpenseDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesIdPut")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **updateExpenseDocument** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expensesIdStatusStatusIdPost"></a>
# **expensesIdStatusStatusIdPost**
> ExpenseInlineDocumentResponse expensesIdStatusStatusIdPost(authorization, id, statusId)

Change status expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | ID เอกสารใช้ recordId
val statusId : kotlin.String = statusId_example // kotlin.String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก
try {
    val result : ExpenseInlineDocumentResponse = apiInstance.expensesIdStatusStatusIdPost(authorization, id, statusId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesIdStatusStatusIdPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesIdStatusStatusIdPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| ID เอกสารใช้ recordId |
 **statusId** | **kotlin.String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expensesInlinePost"></a>
# **expensesInlinePost**
> ExpenseInlineDocumentResponse expensesInlinePost(authorization, expenseInlineDocument)

Create expenses document inline discount or inline vat.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val expenseInlineDocument : ExpenseInlineDocument =  // ExpenseInlineDocument | 
try {
    val result : ExpenseInlineDocumentResponse = apiInstance.expensesInlinePost(authorization, expenseInlineDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesInlinePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesInlinePost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseInlineDocument** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expensesInlineWithPaymentPost"></a>
# **expensesInlineWithPaymentPost**
> ExpenseInlineDocumentResponse expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid)

Create expenses document inline discount or inline vat with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val expenseInlineDocumentWithPaymentPaid : ExpenseInlineDocumentWithPaymentPaid =  // ExpenseInlineDocumentWithPaymentPaid | 
try {
    val result : ExpenseInlineDocumentResponse = apiInstance.expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesInlineWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesInlineWithPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseInlineDocumentWithPaymentPaid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expensesPost"></a>
# **expensesPost**
> ExpenseSimpleDocumentResponse expensesPost(authorization, expenseSimpleDocument)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val expenseSimpleDocument : ExpenseSimpleDocument =  // ExpenseSimpleDocument | 
try {
    val result : ExpenseSimpleDocumentResponse = apiInstance.expensesPost(authorization, expenseSimpleDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseSimpleDocument** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expensesSharedocumentPost"></a>
# **expensesSharedocumentPost**
> ShareDocumentResponse expensesSharedocumentPost(authorization, shareDocument)

Share link expenses document.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val shareDocument : ShareDocument =  // ShareDocument | 
try {
    val result : ShareDocumentResponse = apiInstance.expensesSharedocumentPost(authorization, shareDocument)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesSharedocumentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesSharedocumentPost")
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

<a name="expensesWithPaymentPost"></a>
# **expensesWithPaymentPost**
> ExpenseSimpleDocumentResponse expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid)

Create expenses document with payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExpensesApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val expenseSimpleDocumentWithPaymentPaid : ExpenseSimpleDocumentWithPaymentPaid =  // ExpenseSimpleDocumentWithPaymentPaid | 
try {
    val result : ExpenseSimpleDocumentResponse = apiInstance.expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExpensesApi#expensesWithPaymentPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExpensesApi#expensesWithPaymentPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseSimpleDocumentWithPaymentPaid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

