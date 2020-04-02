# Flowaccount.OpenAPITools.Api.TaxInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TaxInvoicesEmailDocumentPost**](TaxInvoiceApi.md#taxinvoicesemaildocumentpost) | **POST** /tax-invoices/email-document | Send Email tax invoice document
[**TaxInvoicesGet**](TaxInvoiceApi.md#taxinvoicesget) | **GET** /tax-invoices | Get list all tax invocie documents.
[**TaxInvoicesIdAttachmentPost**](TaxInvoiceApi.md#taxinvoicesidattachmentpost) | **POST** /tax-invoices/{id}/attachment | Add Attachment to tax Invoices document.
[**TaxInvoicesIdDelete**](TaxInvoiceApi.md#taxinvoicesiddelete) | **DELETE** /tax-invoices/{id} | Get tax invoices document.
[**TaxInvoicesIdGet**](TaxInvoiceApi.md#taxinvoicesidget) | **GET** /tax-invoices/{id} | Get tax invoices document.
[**TaxInvoicesIdPaymentPost**](TaxInvoiceApi.md#taxinvoicesidpaymentpost) | **POST** /tax-invoices/{id}/payment | Change paid status of tax-invoice document.
[**TaxInvoicesIdStatusKeyStatusIdPost**](TaxInvoiceApi.md#taxinvoicesidstatuskeystatusidpost) | **POST** /tax-invoices/{id}/status-key/{statusId} | Change status of tax invoices document.
[**TaxInvoicesInlinePost**](TaxInvoiceApi.md#taxinvoicesinlinepost) | **POST** /tax-invoices/inline | Create tax invocie document with discount and tax inline.
[**TaxInvoicesPost**](TaxInvoiceApi.md#taxinvoicespost) | **POST** /tax-invoices | Create tax invocie document.
[**TaxInvoicesSharedocumentPost**](TaxInvoiceApi.md#taxinvoicessharedocumentpost) | **POST** /tax-invoices/sharedocument | Share link tax invoice document.



## TaxInvoicesEmailDocumentPost

> SendEmailResponse TaxInvoicesEmailDocumentPost (string authorization, SendEmailCoppies sendEmailCoppies)

Send Email tax invoice document

ส่งเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesEmailDocumentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var sendEmailCoppies = new SendEmailCoppies(); // SendEmailCoppies | 

            try
            {
                // Send Email tax invoice document
                SendEmailResponse result = apiInstance.TaxInvoicesEmailDocumentPost(authorization, sendEmailCoppies);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesEmailDocumentPost: " + e.Message );
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


## TaxInvoicesGet

> InlineDocumentResponse TaxInvoicesGet (int currentPage, int pageSize, string authorization, string sortBy = null, string filter = null)

Get list all tax invocie documents.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var currentPage = 56;  // int | Query current page document tax invoices. <br>Example Pattern: <ex>/tax-invoices?currentPage=1 </ex><ex>/tax-invoices?currentPage=1&pageSize=20</ex>
            var pageSize = 56;  // int | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?pageSize=20 </ex>
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var sortBy = sortBy_example;  // string |  (optional) 
            var filter = filter_example;  // string |  (optional) 

            try
            {
                // Get list all tax invocie documents.
                InlineDocumentResponse result = apiInstance.TaxInvoicesGet(currentPage, pageSize, authorization, sortBy, filter);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesGet: " + e.Message );
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
 **currentPage** | **int**| Query current page document tax invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/tax-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/tax-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **int**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **string**|  | [optional] 
 **filter** | **string**|  | [optional] 

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


## TaxInvoicesIdAttachmentPost

> AttachmentResponse TaxInvoicesIdAttachmentPost (string authorization, string id, System.IO.Stream file = null)

Add Attachment to tax Invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesIdAttachmentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
            var file = BINARY_DATA_HERE;  // System.IO.Stream | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional) 

            try
            {
                // Add Attachment to tax Invoices document.
                AttachmentResponse result = apiInstance.TaxInvoicesIdAttachmentPost(authorization, id, file);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesIdAttachmentPost: " + e.Message );
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


## TaxInvoicesIdDelete

> DeleteResponse TaxInvoicesIdDelete (string authorization, string id)

Get tax invoices document.

ลบ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะรอดำเนินการ 

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesIdDeleteExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId

            try
            {
                // Get tax invoices document.
                DeleteResponse result = apiInstance.TaxInvoicesIdDelete(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesIdDelete: " + e.Message );
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


## TaxInvoicesIdGet

> SimpleDocumentResponse TaxInvoicesIdGet (string authorization, string id)

Get tax invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesIdGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string | ID เอกสารใช้ recordId (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId

            try
            {
                // Get tax invoices document.
                SimpleDocumentResponse result = apiInstance.TaxInvoicesIdGet(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesIdGet: " + e.Message );
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
 **authorization** | **string**| ID เอกสารใช้ recordId | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**| ID เอกสารใช้ recordId | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

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


## TaxInvoicesIdPaymentPost

> InlineDocumentResponse TaxInvoicesIdPaymentPost (string authorization, string id, PaymentDocument paymentDocument)

Change paid status of tax-invoice document.

เก็บเงิน เอกสารพร้อมเปลี่ยนสถานะเอกสาร เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (Tax Invoice/Reciept)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesIdPaymentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId หรือ documentId
            var paymentDocument = new PaymentDocument(); // PaymentDocument | 

            try
            {
                // Change paid status of tax-invoice document.
                InlineDocumentResponse result = apiInstance.TaxInvoicesIdPaymentPost(authorization, id, paymentDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesIdPaymentPost: " + e.Message );
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
 **id** | **string**| ID เอกสารใช้ recordId หรือ documentId | 
 **paymentDocument** | [**PaymentDocument**](PaymentDocument.md)|  | 

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


## TaxInvoicesIdStatusKeyStatusIdPost

> InlineDocumentResponse TaxInvoicesIdStatusKeyStatusIdPost (string authorization, string id, string statusId)

Change status of tax invoices document.

เปลี่ยนสถานะของเอกสารเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesIdStatusKeyStatusIdPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId
            var statusId = statusId_example;  // string | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก

            try
            {
                // Change status of tax invoices document.
                InlineDocumentResponse result = apiInstance.TaxInvoicesIdStatusKeyStatusIdPost(authorization, id, statusId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesIdStatusKeyStatusIdPost: " + e.Message );
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
 **statusId** | **string**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก | 

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


## TaxInvoicesInlinePost

> InlineDocumentResponse TaxInvoicesInlinePost (string authorization, InlineDocument inlineDocument)

Create tax invocie document with discount and tax inline.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesInlinePostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var inlineDocument = new InlineDocument(); // InlineDocument | 

            try
            {
                // Create tax invocie document with discount and tax inline.
                InlineDocumentResponse result = apiInstance.TaxInvoicesInlinePost(authorization, inlineDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesInlinePost: " + e.Message );
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


## TaxInvoicesPost

> SimpleDocumentResponse TaxInvoicesPost (string authorization, SimpleDocument simpleDocument)

Create tax invocie document.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var simpleDocument = new SimpleDocument(); // SimpleDocument | 

            try
            {
                // Create tax invocie document.
                SimpleDocumentResponse result = apiInstance.TaxInvoicesPost(authorization, simpleDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesPost: " + e.Message );
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


## TaxInvoicesSharedocumentPost

> ShareDocumentResponse TaxInvoicesSharedocumentPost (string authorization, ShareDocument shareDocument)

Share link tax invoice document.

แชร์ลิงค์ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TaxInvoicesSharedocumentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new TaxInvoiceApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var shareDocument = new ShareDocument(); // ShareDocument | 

            try
            {
                // Share link tax invoice document.
                ShareDocumentResponse result = apiInstance.TaxInvoicesSharedocumentPost(authorization, shareDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TaxInvoiceApi.TaxInvoicesSharedocumentPost: " + e.Message );
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

