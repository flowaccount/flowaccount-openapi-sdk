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



## expensesCategoriesAccountingGet

> BusinessCategory expensesCategoriesAccountingGet(authorization)

Accounting categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
try {
    BusinessCategory result = apiInstance.expensesCategoriesAccountingGet(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesCategoriesAccountingGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesCategoriesBusinessGet

> BusinessCategory expensesCategoriesBusinessGet(authorization)

Business categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
try {
    BusinessCategory result = apiInstance.expensesCategoriesBusinessGet(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesCategoriesBusinessGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesEmailDocumentPost

> SendEmailResponse expensesEmailDocumentPost(authorization, sendEmailSimple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
SendEmailSimple sendEmailSimple = new SendEmailSimple(); // SendEmailSimple | 
try {
    SendEmailResponse result = apiInstance.expensesEmailDocumentPost(authorization, sendEmailSimple);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesEmailDocumentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md)|  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesGet

> AllExpenseDocumentResponse expensesGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
Integer currentPage = null; // Integer | Query current page expenses document. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query expenses document list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query sort by expense document. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | Query filter expenses document. <br>Example Pattern: <ex> /expenses?filter=[{'columnName':'Status','columnValue':'processed','columnPredicateOperator':'And'}] </ex>
try {
    AllExpenseDocumentResponse result = apiInstance.expensesGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**| Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] [default to null]

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesIdAttachmentPost

> AttachmentResponse expensesIdAttachmentPost(authorization, id, file)

Attachment to expenses document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | 
File file = null; // File | 
try {
    AttachmentResponse result = apiInstance.expensesIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesIdAttachmentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**|  | [default to null]
 **file** | **File**|  | [optional] [default to null]

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## expensesIdDelete

> DeleteResponse expensesIdDelete(authorization, id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.expensesIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesIdDelete");
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


## expensesIdGet

> AllExpenseDocumentResponse expensesIdGet(authorization, id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | 
try {
    AllExpenseDocumentResponse result = apiInstance.expensesIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesIdGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**|  | [default to null]

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesIdPaymentPost

> ExpenseSimpleDocumentResponse expensesIdPaymentPost(authorization, id, paymentPaidDocument)

Change status is paid expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId หรือ documentId
PaymentPaidDocument paymentPaidDocument = new PaymentPaidDocument(); // PaymentPaidDocument | 
try {
    ExpenseSimpleDocumentResponse result = apiInstance.expensesIdPaymentPost(authorization, id, paymentPaidDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesIdPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | [default to null]
 **paymentPaidDocument** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesIdPut

> ExpenseInlineDocumentResponse expensesIdPut(authorization, id, updateExpenseDocument)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateExpenseDocument updateExpenseDocument = new UpdateExpenseDocument(); // UpdateExpenseDocument | 
try {
    ExpenseInlineDocumentResponse result = apiInstance.expensesIdPut(authorization, id, updateExpenseDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesIdPut");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **updateExpenseDocument** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesIdStatusStatusIdPost

> ExpenseInlineDocumentResponse expensesIdStatusStatusIdPost(authorization, id, statusId)

Change status expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก
try {
    ExpenseInlineDocumentResponse result = apiInstance.expensesIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesIdStatusStatusIdPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก | [default to null]

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expensesInlinePost

> ExpenseInlineDocumentResponse expensesInlinePost(authorization, expenseInlineDocument)

Create expenses document inline discount or inline vat.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
ExpenseInlineDocument expenseInlineDocument = new ExpenseInlineDocument(); // ExpenseInlineDocument | 
try {
    ExpenseInlineDocumentResponse result = apiInstance.expensesInlinePost(authorization, expenseInlineDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesInlinePost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **expenseInlineDocument** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesInlineWithPaymentPost

> ExpenseInlineDocumentResponse expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid)

Create expenses document inline discount or inline vat with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
ExpenseInlineDocumentWithPaymentPaid expenseInlineDocumentWithPaymentPaid = new ExpenseInlineDocumentWithPaymentPaid(); // ExpenseInlineDocumentWithPaymentPaid | 
try {
    ExpenseInlineDocumentResponse result = apiInstance.expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesInlineWithPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **expenseInlineDocumentWithPaymentPaid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesPost

> ExpenseSimpleDocumentResponse expensesPost(authorization, expenseSimpleDocument)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
ExpenseSimpleDocument expenseSimpleDocument = new ExpenseSimpleDocument(); // ExpenseSimpleDocument | 
try {
    ExpenseSimpleDocumentResponse result = apiInstance.expensesPost(authorization, expenseSimpleDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **expenseSimpleDocument** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expensesSharedocumentPost

> ShareDocumentResponse expensesSharedocumentPost(authorization, shareDocument)

Share link expenses document.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.expensesSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesSharedocumentPost");
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


## expensesWithPaymentPost

> ExpenseSimpleDocumentResponse expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid)

Create expenses document with payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```java
// Import classes:
//import org.openapitools.client.api.ExpensesApi;

ExpensesApi apiInstance = new ExpensesApi();
String authorization = Bearer accessToken; // String | 
ExpenseSimpleDocumentWithPaymentPaid expenseSimpleDocumentWithPaymentPaid = new ExpenseSimpleDocumentWithPaymentPaid(); // ExpenseSimpleDocumentWithPaymentPaid | 
try {
    ExpenseSimpleDocumentResponse result = apiInstance.expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ExpensesApi#expensesWithPaymentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **expenseSimpleDocumentWithPaymentPaid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

