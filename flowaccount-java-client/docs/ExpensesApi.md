# ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expensesCategoriesAccountingGet**](ExpensesApi.md#expensesCategoriesAccountingGet) | **GET** /expenses/categories/accounting | Accounting categorys expenses document.
[**expensesCategoriesBusinessGet**](ExpensesApi.md#expensesCategoriesBusinessGet) | **GET** /expenses/categories/business | Business categorys expenses document.
[**expensesEmailDocumentPost**](ExpensesApi.md#expensesEmailDocumentPost) | **POST** /expenses/email-document | Send email expenses document.
[**expensesGet**](ExpensesApi.md#expensesGet) | **GET** /expenses | Get list all expenses documents.
[**expensesIdAttachmentPost**](ExpensesApi.md#expensesIdAttachmentPost) | **POST** /expenses/{id}/attachment | Add Attachment to expenses.
[**expensesIdDelete**](ExpensesApi.md#expensesIdDelete) | **DELETE** /expenses/{id} | Delete expenses document.
[**expensesIdGet**](ExpensesApi.md#expensesIdGet) | **GET** /expenses/{id} | Get expenses document.
[**expensesIdPaymentPost**](ExpensesApi.md#expensesIdPaymentPost) | **POST** /expenses/{id}/payment | Change paid status of expenses document.
[**expensesIdPut**](ExpensesApi.md#expensesIdPut) | **PUT** /expenses/{id} | Edit expenses document.
[**expensesIdStatusStatusIdPost**](ExpensesApi.md#expensesIdStatusStatusIdPost) | **POST** /expenses/{id}/status/{statusId} | Change status of expenses document.
[**expensesInlinePost**](ExpensesApi.md#expensesInlinePost) | **POST** /expenses/inline | Create expenses document with discount and tax inline.
[**expensesInlineWithPaymentPost**](ExpensesApi.md#expensesInlineWithPaymentPost) | **POST** /expenses/inline/with-payment | Create expenses document with discount and tax inline with payment.
[**expensesPost**](ExpensesApi.md#expensesPost) | **POST** /expenses | Create expenses document.
[**expensesSharedocumentPost**](ExpensesApi.md#expensesSharedocumentPost) | **POST** /expenses/sharedocument | Share link expenses documents.
[**expensesWithPaymentPost**](ExpensesApi.md#expensesWithPaymentPost) | **POST** /expenses/with-payment | Create expenses document with-payment.


<a name="expensesCategoriesAccountingGet"></a>
# **expensesCategoriesAccountingGet**
> BusinessCategory expensesCategoriesAccountingGet(authorization)

Accounting categorys expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    try {
      BusinessCategory result = apiInstance.expensesCategoriesAccountingGet(authorization);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesCategoriesAccountingGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesCategoriesBusinessGet"></a>
# **expensesCategoriesBusinessGet**
> BusinessCategory expensesCategoriesBusinessGet(authorization)

Business categorys expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    try {
      BusinessCategory result = apiInstance.expensesCategoriesBusinessGet(authorization);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesCategoriesBusinessGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesEmailDocumentPost"></a>
# **expensesEmailDocumentPost**
> SendEmailResponse expensesEmailDocumentPost(authorization, sendEmailSimple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SendEmailSimple sendEmailSimple = new SendEmailSimple(); // SendEmailSimple | 
    try {
      SendEmailResponse result = apiInstance.expensesEmailDocumentPost(authorization, sendEmailSimple);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesEmailDocumentPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md)|  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesGet"></a>
# **expensesGet**
> AllExpenseDocumentResponse expensesGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    Integer currentPage = 56; // Integer | Query current page document expenses. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
    Integer pageSize = 56; // Integer | Query document expenses list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
    String authorization = "\"Bearer accessToken\""; // String | 
    String sortBy = "sortBy_example"; // String | Query document expenses list amount per page. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
    String filter = "filter_example"; // String | 
    try {
      AllExpenseDocumentResponse result = apiInstance.expensesGet(currentPage, pageSize, authorization, sortBy, filter);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document expenses. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **Integer**| Query document expenses list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String**| Query document expenses list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **String**|  | [optional]

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesIdAttachmentPost"></a>
# **expensesIdAttachmentPost**
> AttachmentResponse expensesIdAttachmentPost(authorization, id, file)

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | 
    File file = new File("/path/to/file"); // File | 
    try {
      AttachmentResponse result = apiInstance.expensesIdAttachmentPost(authorization, id, file);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesIdAttachmentPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**|  |
 **file** | **File**|  | [optional]

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesIdDelete"></a>
# **expensesIdDelete**
> DeleteResponse expensesIdDelete(authorization, id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    try {
      DeleteResponse result = apiInstance.expensesIdDelete(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesIdDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**| ID เอกสารใช้ recordId |

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesIdGet"></a>
# **expensesIdGet**
> ExpenseInlineDocumentResponse expensesIdGet(authorization, id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | 
    try {
      ExpenseInlineDocumentResponse result = apiInstance.expensesIdGet(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesIdPaymentPost"></a>
# **expensesIdPaymentPost**
> ExpenseSimpleDocumentResponse expensesIdPaymentPost(authorization, id, paymentPaidDocument)

Change paid status of expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId หรือ documentId
    PaymentPaidDocument paymentPaidDocument = new PaymentPaidDocument(); // PaymentPaidDocument | 
    try {
      ExpenseSimpleDocumentResponse result = apiInstance.expensesIdPaymentPost(authorization, id, paymentPaidDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesIdPaymentPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId |
 **paymentPaidDocument** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesIdPut"></a>
# **expensesIdPut**
> ExpenseInlineDocumentResponse expensesIdPut(authorization, id, updateExpenseDocument)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    UpdateExpenseDocument updateExpenseDocument = new UpdateExpenseDocument(); // UpdateExpenseDocument | 
    try {
      ExpenseInlineDocumentResponse result = apiInstance.expensesIdPut(authorization, id, updateExpenseDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**| ID เอกสารใช้ recordId |
 **updateExpenseDocument** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesIdStatusStatusIdPost"></a>
# **expensesIdStatusStatusIdPost**
> ExpenseInlineDocumentResponse expensesIdStatusStatusIdPost(authorization, id, statusId)

Change status of expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    String statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก
    try {
      ExpenseInlineDocumentResponse result = apiInstance.expensesIdStatusStatusIdPost(authorization, id, statusId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesIdStatusStatusIdPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**| ID เอกสารใช้ recordId |
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesInlinePost"></a>
# **expensesInlinePost**
> ExpenseInlineDocumentResponse expensesInlinePost(authorization, expenseInlineDocument)

Create expenses document with discount and tax inline.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ExpenseInlineDocument expenseInlineDocument = new ExpenseInlineDocument(); // ExpenseInlineDocument | 
    try {
      ExpenseInlineDocumentResponse result = apiInstance.expensesInlinePost(authorization, expenseInlineDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesInlinePost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseInlineDocument** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesInlineWithPaymentPost"></a>
# **expensesInlineWithPaymentPost**
> ExpenseInlineDocumentResponse expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid)

Create expenses document with discount and tax inline with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ExpenseInlineDocumentWithPaymentPaid expenseInlineDocumentWithPaymentPaid = new ExpenseInlineDocumentWithPaymentPaid(); // ExpenseInlineDocumentWithPaymentPaid | 
    try {
      ExpenseInlineDocumentResponse result = apiInstance.expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesInlineWithPaymentPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseInlineDocumentWithPaymentPaid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md)|  |

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesPost"></a>
# **expensesPost**
> ExpenseSimpleDocumentResponse expensesPost(authorization, expenseSimpleDocument)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ExpenseSimpleDocument expenseSimpleDocument = new ExpenseSimpleDocument(); // ExpenseSimpleDocument | 
    try {
      ExpenseSimpleDocumentResponse result = apiInstance.expensesPost(authorization, expenseSimpleDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseSimpleDocument** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesSharedocumentPost"></a>
# **expensesSharedocumentPost**
> ShareDocumentResponse expensesSharedocumentPost(authorization, shareDocument)

Share link expenses documents.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
    try {
      ShareDocumentResponse result = apiInstance.expensesSharedocumentPost(authorization, shareDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesSharedocumentPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **shareDocument** | [**ShareDocument**](ShareDocument.md)|  |

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="expensesWithPaymentPost"></a>
# **expensesWithPaymentPost**
> ExpenseSimpleDocumentResponse expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid)

Create expenses document with-payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ExpensesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ExpensesApi apiInstance = new ExpensesApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ExpenseSimpleDocumentWithPaymentPaid expenseSimpleDocumentWithPaymentPaid = new ExpenseSimpleDocumentWithPaymentPaid(); // ExpenseSimpleDocumentWithPaymentPaid | 
    try {
      ExpenseSimpleDocumentResponse result = apiInstance.expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ExpensesApi#expensesWithPaymentPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **expenseSimpleDocumentWithPaymentPaid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md)|  |

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

