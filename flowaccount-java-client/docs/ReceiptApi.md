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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
    try {
      SendEmailResponse result = apiInstance.receiptsEmailDocumentPost(authorization, sendEmailCoppies);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsEmailDocumentPost");
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

<a name="receiptsGet"></a>
# **receiptsGet**
> AllDocumentResponse receiptsGet(currentPage, pageSize, authorization, sortBy, filter)

Get all receipt documents

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    Integer currentPage = 56; // Integer | Query current page document receipts. <br>Example Pattern: <ex>/receipts?currentPage=1 </ex><ex>/receipts?currentPage=1&pageSize=20</ex>
    Integer pageSize = 56; // Integer | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?pageSize=20 </ex>
    String authorization = "\"Bearer accessToken\""; // String | 
    String sortBy = "sortBy_example"; // String | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/receipts?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
    String filter = "filter_example"; // String | Query filter receipts. <br>Example Pattern: <ex> /receipts?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
    try {
      AllDocumentResponse result = apiInstance.receiptsGet(currentPage, pageSize, authorization, sortBy, filter);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsGet");
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
 **currentPage** | **Integer**| Query current page document receipts. &lt;br&gt;Example Pattern: &lt;ex&gt;/receipts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/receipts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **Integer**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **String**| Query filter receipts. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

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

<a name="receiptsIdAttachmentPost"></a>
# **receiptsIdAttachmentPost**
> AttachmentResponse receiptsIdAttachmentPost(authorization, id, file)

Attachment receipt document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
    File file = new File("/path/to/file"); // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
    try {
      AttachmentResponse result = apiInstance.receiptsIdAttachmentPost(authorization, id, file);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsIdAttachmentPost");
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

<a name="receiptsIdDelete"></a>
# **receiptsIdDelete**
> DeleteResponse receiptsIdDelete(authorization, id)

Delete receipt document.

ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    try {
      DeleteResponse result = apiInstance.receiptsIdDelete(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsIdDelete");
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

<a name="receiptsIdGet"></a>
# **receiptsIdGet**
> InlineDocumentResponse receiptsIdGet(authorization, id)

Get receipt document.

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    try {
      InlineDocumentResponse result = apiInstance.receiptsIdGet(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsIdGet");
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

<a name="receiptsIdPaymentPost"></a>
# **receiptsIdPaymentPost**
> InlineDocumentResponse receiptsIdPaymentPost(authorization, id, paymentReceivingDocument)

Change status is paid receipt document.

เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId หรือ documentId
    PaymentReceivingDocument paymentReceivingDocument = new PaymentReceivingDocument(); // PaymentReceivingDocument | 
    try {
      InlineDocumentResponse result = apiInstance.receiptsIdPaymentPost(authorization, id, paymentReceivingDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsIdPaymentPost");
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
 **paymentReceivingDocument** | [**PaymentReceivingDocument**](PaymentReceivingDocument.md)|  |

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

<a name="receiptsIdPut"></a>
# **receiptsIdPut**
> InlineDocumentResponse receiptsIdPut(authorization, id, updateInlineDocument)

Edit receipt document.

แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
    try {
      InlineDocumentResponse result = apiInstance.receiptsIdPut(authorization, id, updateInlineDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsIdPut");
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

<a name="receiptsIdStatusStatusIdPost"></a>
# **receiptsIdStatusStatusIdPost**
> InlineDocumentResponse receiptsIdStatusStatusIdPost(authorization, id, statusId)

Change status receipt document.

เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    String statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 1 สถานะ <br> void = ยกเลิก
    try {
      InlineDocumentResponse result = apiInstance.receiptsIdStatusStatusIdPost(authorization, id, statusId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsIdStatusStatusIdPost");
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
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 1 สถานะ &lt;br&gt; void &#x3D; ยกเลิก |

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

<a name="receiptsInlinePost"></a>
# **receiptsInlinePost**
> InlineDocumentResponse receiptsInlinePost(authorization, inlineDocument)

Create receipt document inline discount or inline vat.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
    try {
      InlineDocumentResponse result = apiInstance.receiptsInlinePost(authorization, inlineDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsInlinePost");
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

<a name="receiptsInlineWithPaymentPost"></a>
# **receiptsInlineWithPaymentPost**
> InlineDocumentResponse receiptsInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving)

Create receipt document inline discount or inline vat with payment.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    InlineDocumentWithPaymentReceiving inlineDocumentWithPaymentReceiving = new InlineDocumentWithPaymentReceiving(); // InlineDocumentWithPaymentReceiving | 
    try {
      InlineDocumentResponse result = apiInstance.receiptsInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsInlineWithPaymentPost");
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
 **inlineDocumentWithPaymentReceiving** | [**InlineDocumentWithPaymentReceiving**](InlineDocumentWithPaymentReceiving.md)|  |

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

<a name="receiptsPost"></a>
# **receiptsPost**
> SimpleDocumentResponse receiptsPost(authorization, simpleDocument)

Create receipt document.

สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
    try {
      SimpleDocumentResponse result = apiInstance.receiptsPost(authorization, simpleDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsPost");
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

<a name="receiptsSharedocumentPost"></a>
# **receiptsSharedocumentPost**
> ShareDocumentResponse receiptsSharedocumentPost(authorization, shareDocument)

Share link receipt document.

แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
    try {
      ShareDocumentResponse result = apiInstance.receiptsSharedocumentPost(authorization, shareDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsSharedocumentPost");
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

<a name="receiptsWithPaymentPost"></a>
# **receiptsWithPaymentPost**
> SimpleDocumentResponse receiptsWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving)

Create receipt document with payment.

สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ReceiptApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ReceiptApi apiInstance = new ReceiptApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SimpleDocumentWithPaymentReceiving simpleDocumentWithPaymentReceiving = new SimpleDocumentWithPaymentReceiving(); // SimpleDocumentWithPaymentReceiving | 
    try {
      SimpleDocumentResponse result = apiInstance.receiptsWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceiptApi#receiptsWithPaymentPost");
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
 **simpleDocumentWithPaymentReceiving** | [**SimpleDocumentWithPaymentReceiving**](SimpleDocumentWithPaymentReceiving.md)|  |

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

