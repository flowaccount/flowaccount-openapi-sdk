# Flowaccount.OpenAPITools.Api.BillingNotesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BillingNotesEmailDocumentPost**](BillingNotesApi.md#billingnotesemaildocumentpost) | **POST** /billing-notes/email-document | Send email billing notes document.
[**BillingNotesGet**](BillingNotesApi.md#billingnotesget) | **GET** /billing-notes | Get list all billing notes documents.
[**BillingNotesIdAttachmentPost**](BillingNotesApi.md#billingnotesidattachmentpost) | **POST** /billing-notes/{id}/attachment | Add Attachment to billing notes document.
[**BillingNotesIdDelete**](BillingNotesApi.md#billingnotesiddelete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
[**BillingNotesIdGet**](BillingNotesApi.md#billingnotesidget) | **GET** /billing-notes/{id} | Get billing notes document.
[**BillingNotesIdPut**](BillingNotesApi.md#billingnotesidput) | **PUT** /billing-notes/{id} | Edit billing notes document.
[**BillingNotesIdStatusStatusIdPost**](BillingNotesApi.md#billingnotesidstatusstatusidpost) | **POST** /billing-notes/{id}/status/{statusId} | Change status of billing notes document.
[**BillingNotesInlinePost**](BillingNotesApi.md#billingnotesinlinepost) | **POST** /billing-notes/inline | Create billing notes document with discount and tax inline.
[**BillingNotesPost**](BillingNotesApi.md#billingnotespost) | **POST** /billing-notes | Create billing notes document.
[**BillingNotesSharedocumentPost**](BillingNotesApi.md#billingnotessharedocumentpost) | **POST** /billing-notes/sharedocument | Share link billing notes document.



## BillingNotesEmailDocumentPost

> SendEmailResponse BillingNotesEmailDocumentPost (string authorization, SendEmailCoppies sendEmailCoppies)

Send email billing notes document.

ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesEmailDocumentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 

            try
            {
                // Send email billing notes document.
                SendEmailResponse result = apiInstance.BillingNotesEmailDocumentPost(authorization, sendEmailCoppies);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesEmailDocumentPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesGet

> AllDocumentResponse BillingNotesGet (int currentPage, int pageSize, string authorization, string sortBy = null, string filter = null)

Get list all billing notes documents.

เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var currentPage = 56;  // int | Query current page document billing notes. <br>Example Pattern: <ex>/billing-notes?currentPage=1 </ex><ex>/billing-notes?currentPage=1&pageSize=20</ex>
            var pageSize = 56;  // int | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?pageSize=20 </ex>
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var sortBy = sortBy_example;  // string | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/billing-notes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional) 
            var filter = filter_example;  // string |  (optional) 

            try
            {
                // Get list all billing notes documents.
                AllDocumentResponse result = apiInstance.BillingNotesGet(currentPage, pageSize, authorization, sortBy, filter);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **int**| Query current page document billing notes. &lt;br&gt;Example Pattern: &lt;ex&gt;/billing-notes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/billing-notes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **int**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **string**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **string**|  | [optional] 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesIdAttachmentPost

> AttachmentResponse BillingNotesIdAttachmentPost (string authorization, string id, System.IO.Stream file = null)

Add Attachment to billing notes document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesIdAttachmentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
            var file = BINARY_DATA_HERE;  // System.IO.Stream | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional) 

            try
            {
                // Add Attachment to billing notes document.
                AttachmentResponse result = apiInstance.BillingNotesIdAttachmentPost(authorization, id, file);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesIdAttachmentPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ | 
 **file** | **System.IO.Stream**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional] 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesIdDelete

> DeleteResponse BillingNotesIdDelete (string authorization, string id)

Delete billing notes document.

ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesIdDeleteExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId

            try
            {
                // Delete billing notes document.
                DeleteResponse result = apiInstance.BillingNotesIdDelete(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesIdDelete: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**| ID เอกสารใช้ recordId | 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesIdGet

> InlineDocumentResponse BillingNotesIdGet (string authorization, string id)

Get billing notes document.

เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesIdGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId

            try
            {
                // Get billing notes document.
                InlineDocumentResponse result = apiInstance.BillingNotesIdGet(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesIdGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**| ID เอกสารใช้ recordId | 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesIdPut

> InlineDocumentResponse BillingNotesIdPut (string authorization, string id, UpdateInlineDocument updateInlineDocument)

Edit billing notes document.

แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesIdPutExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId
            var updateInlineDocument = new UpdateInlineDocument(); // UpdateInlineDocument | 

            try
            {
                // Edit billing notes document.
                InlineDocumentResponse result = apiInstance.BillingNotesIdPut(authorization, id, updateInlineDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesIdPut: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**| ID เอกสารใช้ recordId | 
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesIdStatusStatusIdPost

> InlineDocumentResponse BillingNotesIdStatusStatusIdPost (string authorization, string id, string statusId)

Change status of billing notes document.

เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesIdStatusStatusIdPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId
            var statusId = statusId_example;  // string | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รอวางบิล <br> approved = วางบิลแล้ว <br> approvedandprocessed = เปิดบิลแล้ว <br> void = ยกเลิก

            try
            {
                // Change status of billing notes document.
                InlineDocumentResponse result = apiInstance.BillingNotesIdStatusStatusIdPost(authorization, id, statusId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesIdStatusStatusIdPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**| ID เอกสารใช้ recordId | 
 **statusId** | **string**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รอวางบิล &lt;br&gt; approved &#x3D; วางบิลแล้ว &lt;br&gt; approvedandprocessed &#x3D; เปิดบิลแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesInlinePost

> InlineDocumentResponse BillingNotesInlinePost (string authorization, InlineDocument inlineDocument)

Create billing notes document with discount and tax inline.

สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesInlinePostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var inlineDocument = new InlineDocument(); // InlineDocument | 

            try
            {
                // Create billing notes document with discount and tax inline.
                InlineDocumentResponse result = apiInstance.BillingNotesInlinePost(authorization, inlineDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesInlinePost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesPost

> SimpleDocumentResponse BillingNotesPost (string authorization, SimpleDocument simpleDocument)

Create billing notes document.

สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var simpleDocument = new SimpleDocument(); // SimpleDocument | 

            try
            {
                // Create billing notes document.
                SimpleDocumentResponse result = apiInstance.BillingNotesPost(authorization, simpleDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BillingNotesSharedocumentPost

> ShareDocumentResponse BillingNotesSharedocumentPost (string authorization, ShareDocument shareDocument)

Share link billing notes document.

แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class BillingNotesSharedocumentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new BillingNotesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var shareDocument = new ShareDocument(); // ShareDocument | 

            try
            {
                // Share link billing notes document.
                ShareDocumentResponse result = apiInstance.BillingNotesSharedocumentPost(authorization, shareDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BillingNotesApi.BillingNotesSharedocumentPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

