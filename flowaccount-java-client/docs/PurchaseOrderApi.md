# PurchaseOrderApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchasesOrdersEmailDocumentPost**](PurchaseOrderApi.md#purchasesOrdersEmailDocumentPost) | **POST** /purchases-orders/email-document | Send email purchase order document.
[**purchasesOrdersGet**](PurchaseOrderApi.md#purchasesOrdersGet) | **GET** /purchases-orders | Get list all purchase order documents.
[**purchasesOrdersIdAttachmentPost**](PurchaseOrderApi.md#purchasesOrdersIdAttachmentPost) | **POST** /purchases-orders/{id}/attachment | Add Attachment to purchase order document.
[**purchasesOrdersIdDelete**](PurchaseOrderApi.md#purchasesOrdersIdDelete) | **DELETE** /purchases-orders/{id} | Delete purchase order document.
[**purchasesOrdersIdGet**](PurchaseOrderApi.md#purchasesOrdersIdGet) | **GET** /purchases-orders/{id} | Get purchase order document.
[**purchasesOrdersIdPut**](PurchaseOrderApi.md#purchasesOrdersIdPut) | **PUT** /purchases-orders/{id} | Edit purchase order document.
[**purchasesOrdersIdStatusStatusIdPost**](PurchaseOrderApi.md#purchasesOrdersIdStatusStatusIdPost) | **POST** /purchases-orders/{id}/status/{statusId} | Change status of purchase order document.
[**purchasesOrdersInlinePost**](PurchaseOrderApi.md#purchasesOrdersInlinePost) | **POST** /purchases-orders/inline | Create purchase order document with discount and tax inline.
[**purchasesOrdersPost**](PurchaseOrderApi.md#purchasesOrdersPost) | **POST** /purchases-orders | Create purchase order document.
[**purchasesOrdersSharedocumentPost**](PurchaseOrderApi.md#purchasesOrdersSharedocumentPost) | **POST** /purchases-orders/sharedocument | Share link purchase order document.


<a name="purchasesOrdersEmailDocumentPost"></a>
# **purchasesOrdersEmailDocumentPost**
> SendEmailResponse purchasesOrdersEmailDocumentPost(authorization, sendEmailCoppies)

Send email purchase order document.

ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SendEmailCoppies sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 
    try {
      SendEmailResponse result = apiInstance.purchasesOrdersEmailDocumentPost(authorization, sendEmailCoppies);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersEmailDocumentPost");
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

<a name="purchasesOrdersGet"></a>
# **purchasesOrdersGet**
> AllDocumentResponse purchasesOrdersGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all purchase order documents.

เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    Integer currentPage = 56; // Integer | Query current page document purchase orders. <br>Example Pattern: <ex>/purchases-orders?currentPage=1 </ex><ex>/purchases-orders?currentPage=1&pageSize=20</ex>
    Integer pageSize = 56; // Integer | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?pageSize=20 </ex>
    String authorization = "\"Bearer accessToken\""; // String | 
    String sortBy = "sortBy_example"; // String | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases-orders?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
    String filter = "filter_example"; // String | 
    try {
      AllDocumentResponse result = apiInstance.purchasesOrdersGet(currentPage, pageSize, authorization, sortBy, filter);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersGet");
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
 **currentPage** | **Integer**| Query current page document purchase orders. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases-orders?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases-orders?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **Integer**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **String**|  | [optional]

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

<a name="purchasesOrdersIdAttachmentPost"></a>
# **purchasesOrdersIdAttachmentPost**
> AttachmentResponse purchasesOrdersIdAttachmentPost(authorization, id, file)

Add Attachment to purchase order document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
    File file = new File("/path/to/file"); // File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
    try {
      AttachmentResponse result = apiInstance.purchasesOrdersIdAttachmentPost(authorization, id, file);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdAttachmentPost");
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

<a name="purchasesOrdersIdDelete"></a>
# **purchasesOrdersIdDelete**
> DeleteResponse purchasesOrdersIdDelete(authorization, id)

Delete purchase order document.

ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    try {
      DeleteResponse result = apiInstance.purchasesOrdersIdDelete(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdDelete");
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

<a name="purchasesOrdersIdGet"></a>
# **purchasesOrdersIdGet**
> InlineDocumentResponse purchasesOrdersIdGet(authorization, id)

Get purchase order document.

เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    try {
      InlineDocumentResponse result = apiInstance.purchasesOrdersIdGet(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdGet");
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

<a name="purchasesOrdersIdPut"></a>
# **purchasesOrdersIdPut**
> InlineDocumentResponse purchasesOrdersIdPut(authorization, id, updateInlineDocument)

Edit purchase order document.

แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    UpdateInlineDocument updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 
    try {
      InlineDocumentResponse result = apiInstance.purchasesOrdersIdPut(authorization, id, updateInlineDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdPut");
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

<a name="purchasesOrdersIdStatusStatusIdPost"></a>
# **purchasesOrdersIdStatusStatusIdPost**
> InlineDocumentResponse purchasesOrdersIdStatusStatusIdPost(authorization, id, statusId)

Change status of purchase order document.

เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | ID เอกสารใช้ recordId
    String statusId = "statusId_example"; // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> void = ยกเลิก
    try {
      InlineDocumentResponse result = apiInstance.purchasesOrdersIdStatusStatusIdPost(authorization, id, statusId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersIdStatusStatusIdPost");
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
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

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

<a name="purchasesOrdersInlinePost"></a>
# **purchasesOrdersInlinePost**
> InlineDocumentResponse purchasesOrdersInlinePost(authorization, inlineDocument)

Create purchase order document with discount and tax inline.

สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    InlineDocument inlineDocument = new InlineDocument(); // InlineDocument | 
    try {
      InlineDocumentResponse result = apiInstance.purchasesOrdersInlinePost(authorization, inlineDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersInlinePost");
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

<a name="purchasesOrdersPost"></a>
# **purchasesOrdersPost**
> SimpleDocumentResponse purchasesOrdersPost(authorization, simpleDocument)

Create purchase order document.

สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    SimpleDocument simpleDocument = new SimpleDocument(); // SimpleDocument | 
    try {
      SimpleDocumentResponse result = apiInstance.purchasesOrdersPost(authorization, simpleDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersPost");
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

<a name="purchasesOrdersSharedocumentPost"></a>
# **purchasesOrdersSharedocumentPost**
> ShareDocumentResponse purchasesOrdersSharedocumentPost(authorization, shareDocument)

Share link purchase order document.

แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PurchaseOrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    PurchaseOrderApi apiInstance = new PurchaseOrderApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
    try {
      ShareDocumentResponse result = apiInstance.purchasesOrdersSharedocumentPost(authorization, shareDocument);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PurchaseOrderApi#purchasesOrdersSharedocumentPost");
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

