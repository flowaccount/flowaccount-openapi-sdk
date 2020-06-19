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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
    try {
      SendEmailResponse result = apiInstance.purchasesEmailDocumentPost(authorization, sendEmailCoppies);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesEmailDocumentPost");
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
 **sendEmailCoppies** | [**SendEmailCoppies**](SendEmailCoppies.md)|  |

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

<a name="purchasesGet"></a>
# **purchasesGet**
> AllDocumentResponse purchasesGet(currentPage, pageSize, authorization, sortBy, filter)

Get all receiving inventory documents.

เรียกดูข้อมูลเอกสารใบรับสินค้าทั้งหมดในระบบ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    Integer currentPage = 56; // Integer | Query current page document purchases. <br>Example Pattern: <ex>/purchases?currentPage=1 </ex><ex>/purchases?currentPage=1&pageSize=20</ex>
    Integer pageSize = 56; // Integer | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?pageSize=20 </ex>
    String authorization = "\"Bearer accessToken\""; // String | 
    String sortBy = "sortBy_example"; // String | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
    String filter = "filter_example"; // String | Query filter purchases. <br>Example Pattern: <ex> /purchases?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
    try {
      AllDocumentResponse result = apiInstance.purchasesGet(currentPage, pageSize, authorization, sortBy, filter);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesGet");
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
 **currentPage** | **Integer**| Query current page document purchases. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **Integer**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **String**| Query filter purchases. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

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

<a name="purchasesIdAttachmentPost"></a>
# **purchasesIdAttachmentPost**
> AttachmentResponse purchasesIdAttachmentPost(authorization, id, file)

Attachment receiving inventory document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
    File file = new File("/path/to/file"); // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
    try {
      AttachmentResponse result = apiInstance.purchasesIdAttachmentPost(authorization, id, file);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdAttachmentPost");
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
 **id** | **String**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ |
 **file** | **File**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional]

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

<a name="purchasesIdDelete"></a>
# **purchasesIdDelete**
> DeleteResponse purchasesIdDelete(authorization, id)

Delete receiving inventory document.

ลบ เอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    try {
      DeleteResponse result = apiInstance.purchasesIdDelete(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdDelete");
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

<a name="purchasesIdGet"></a>
# **purchasesIdGet**
> InlineDocumentResponse purchasesIdGet(authorization, id)

Get receiving inventory document.

เรียกดูข้อมูลเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    try {
      InlineDocumentResponse result = apiInstance.purchasesIdGet(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdGet");
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

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

<a name="purchasesIdPaymentPost"></a>
# **purchasesIdPaymentPost**
> InlineDocumentResponse purchasesIdPaymentPost(authorization, id, paymentPaidDocument)

Change status is paid receiving inventory document.

ขำระเงิน เอกสารใบรับสินค้าเปลี่ยนสถานะเป็น ชำระเงินแล้ว

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId หรือ documentId
    PaymentPaidDocument paymentPaidDocument = new PaymentPaidDocument(); // PaymentPaidDocument | 
    try {
      InlineDocumentResponse result = apiInstance.purchasesIdPaymentPost(authorization, id, paymentPaidDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdPaymentPost");
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

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

<a name="purchasesIdPut"></a>
# **purchasesIdPut**
> InlineDocumentResponse purchasesIdPut(authorization, id, updateInlineDocument)

Edit receiving inventory document.

แก้ไขข้อมูลเอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
    try {
      InlineDocumentResponse result = apiInstance.purchasesIdPut(authorization, id, updateInlineDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdPut");
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
 **updateInlineDocument** | [**UpdateInlineDocument**](UpdateInlineDocument.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

<a name="purchasesIdStatusStatusIdPost"></a>
# **purchasesIdStatusStatusIdPost**
> InlineDocumentResponse purchasesIdStatusStatusIdPost(authorization, id, statusId)

Change status receiving inventory document.

เปลี่ยนสถานะของเอกสารใบรับสินค้า สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    String statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> void = ยกเลิก
    try {
      InlineDocumentResponse result = apiInstance.purchasesIdStatusStatusIdPost(authorization, id, statusId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesIdStatusStatusIdPost");
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
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

<a name="purchasesInlinePost"></a>
# **purchasesInlinePost**
> InlineDocumentResponse purchasesInlinePost(authorization, inlineDocument)

Create receiving inventory document inline discount or inline vat.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
    try {
      InlineDocumentResponse result = apiInstance.purchasesInlinePost(authorization, inlineDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesInlinePost");
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
 **inlineDocument** | [**InlineDocument**](InlineDocument.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

<a name="purchasesInlineWithPaymentPost"></a>
# **purchasesInlineWithPaymentPost**
> InlineDocumentResponse purchasesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentPaid)

Create receiving inventory document inline discount or inline vat with payment.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    InlineDocumentWithPaymentPaid inlineDocumentWithPaymentPaid = new InlineDocumentWithPaymentPaid(); // InlineDocumentWithPaymentPaid | 
    try {
      InlineDocumentResponse result = apiInstance.purchasesInlineWithPaymentPost(authorization, inlineDocumentWithPaymentPaid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesInlineWithPaymentPost");
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
 **inlineDocumentWithPaymentPaid** | [**InlineDocumentWithPaymentPaid**](InlineDocumentWithPaymentPaid.md)|  |

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

<a name="purchasesPost"></a>
# **purchasesPost**
> SimpleDocumentResponse purchasesPost(authorization, simpleDocument)

Create receiving inventory document.

สร้างเอกสารใบรับสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
    try {
      SimpleDocumentResponse result = apiInstance.purchasesPost(authorization, simpleDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesPost");
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
 **simpleDocument** | [**SimpleDocument**](SimpleDocument.md)|  |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

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

<a name="purchasesSharedocumentPost"></a>
# **purchasesSharedocumentPost**
> ShareDocumentResponse purchasesSharedocumentPost(authorization, shareDocument)

Share link receiving inventory document.

แชร์ลิงค์ เอกสารใบรับสินค้าที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
    try {
      ShareDocumentResponse result = apiInstance.purchasesSharedocumentPost(authorization, shareDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesSharedocumentPost");
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

<a name="purchasesWithPaymentPost"></a>
# **purchasesWithPaymentPost**
> SimpleDocumentResponse purchasesWithPaymentPost(authorization, simpleDocumentWithPaymentPaid)

Create receiving inventory document with payment.

สร้างเอกสารใบรับสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceivingInventoryApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceivingInventoryApi apiInstance = new ReceivingInventoryApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SimpleDocumentWithPaymentPaid simpleDocumentWithPaymentPaid = new SimpleDocumentWithPaymentPaid(); // SimpleDocumentWithPaymentPaid | 
    try {
      SimpleDocumentResponse result = apiInstance.purchasesWithPaymentPost(authorization, simpleDocumentWithPaymentPaid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivingInventoryApi#purchasesWithPaymentPost");
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
 **simpleDocumentWithPaymentPaid** | [**SimpleDocumentWithPaymentPaid**](SimpleDocumentWithPaymentPaid.md)|  |

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

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

