# Flowaccount.OpenAPITools.Api.ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExpensesCategoriesAccountingGet**](ExpensesApi.md#expensescategoriesaccountingget) | **GET** /expenses/categories/accounting | Accounting categories expenses document.
[**ExpensesCategoriesBusinessGet**](ExpensesApi.md#expensescategoriesbusinessget) | **GET** /expenses/categories/business | Business categories expenses document.
[**ExpensesEmailDocumentPost**](ExpensesApi.md#expensesemaildocumentpost) | **POST** /expenses/email-document | Send email expenses document.
[**ExpensesGet**](ExpensesApi.md#expensesget) | **GET** /expenses | Get list all expenses documents.
[**ExpensesIdAttachmentPost**](ExpensesApi.md#expensesidattachmentpost) | **POST** /expenses/{id}/attachment | Attachment to expenses document.
[**ExpensesIdDelete**](ExpensesApi.md#expensesiddelete) | **DELETE** /expenses/{id} | Delete expenses document.
[**ExpensesIdGet**](ExpensesApi.md#expensesidget) | **GET** /expenses/{id} | Get expenses document.
[**ExpensesIdPaymentPost**](ExpensesApi.md#expensesidpaymentpost) | **POST** /expenses/{id}/payment | Change status is paid expenses document.
[**ExpensesIdPut**](ExpensesApi.md#expensesidput) | **PUT** /expenses/{id} | Edit expenses document.
[**ExpensesIdStatusStatusIdPost**](ExpensesApi.md#expensesidstatusstatusidpost) | **POST** /expenses/{id}/status/{statusId} | Change status expenses document.
[**ExpensesInlinePost**](ExpensesApi.md#expensesinlinepost) | **POST** /expenses/inline | Create expenses document inline discount or inline vat.
[**ExpensesInlineWithPaymentPost**](ExpensesApi.md#expensesinlinewithpaymentpost) | **POST** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
[**ExpensesPost**](ExpensesApi.md#expensespost) | **POST** /expenses | Create expenses document.
[**ExpensesSharedocumentPost**](ExpensesApi.md#expensessharedocumentpost) | **POST** /expenses/sharedocument | Share link expenses document.
[**ExpensesWithPaymentPost**](ExpensesApi.md#expenseswithpaymentpost) | **POST** /expenses/with-payment | Create expenses document with payment.



## ExpensesCategoriesAccountingGet

> BusinessCategory ExpensesCategoriesAccountingGet (string authorization)

Accounting categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesCategoriesAccountingGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")

            try
            {
                // Accounting categories expenses document.
                BusinessCategory result = apiInstance.ExpensesCategoriesAccountingGet(authorization);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesCategoriesAccountingGet: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesCategoriesBusinessGet

> BusinessCategory ExpensesCategoriesBusinessGet (string authorization)

Business categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesCategoriesBusinessGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")

            try
            {
                // Business categories expenses document.
                BusinessCategory result = apiInstance.ExpensesCategoriesBusinessGet(authorization);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesCategoriesBusinessGet: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesEmailDocumentPost

> SendEmailResponse ExpensesEmailDocumentPost (string authorization, SendEmailSimple sendEmailSimple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesEmailDocumentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var sendEmailSimple = new SendEmailSimple(); // SendEmailSimple | 

            try
            {
                // Send email expenses document.
                SendEmailResponse result = apiInstance.ExpensesEmailDocumentPost(authorization, sendEmailSimple);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesEmailDocumentPost: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesGet

> AllExpenseDocumentResponse ExpensesGet (int currentPage, int pageSize, string authorization, string sortBy = null, string filter = null)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var currentPage = 56;  // int | Query current page expenses document. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
            var pageSize = 56;  // int | Query expenses document list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var sortBy = sortBy_example;  // string | Query sort by expense document. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional) 
            var filter = filter_example;  // string | Query filter expenses document. <br>Example Pattern: <ex> /expenses?filter=[{'columnName':'Status','columnValue':'processed','columnPredicateOperator':'And'}] </ex> (optional) 

            try
            {
                // Get list all expenses documents.
                AllExpenseDocumentResponse result = apiInstance.ExpensesGet(currentPage, pageSize, authorization, sortBy, filter);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesGet: " + e.Message );
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
 **currentPage** | **int**| Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **int**| Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **string**| Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **string**| Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdAttachmentPost

> AttachmentResponse ExpensesIdAttachmentPost (string authorization, string id, System.IO.Stream file = null)

Attachment to expenses document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesIdAttachmentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | 
            var file = BINARY_DATA_HERE;  // System.IO.Stream |  (optional) 

            try
            {
                // Attachment to expenses document.
                AttachmentResponse result = apiInstance.ExpensesIdAttachmentPost(authorization, id, file);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesIdAttachmentPost: " + e.Message );
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
 **id** | **string**|  | 
 **file** | **System.IO.Stream**|  | [optional] 

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


## ExpensesIdDelete

> DeleteResponse ExpensesIdDelete (string authorization, string id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesIdDeleteExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId

            try
            {
                // Delete expenses document.
                DeleteResponse result = apiInstance.ExpensesIdDelete(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesIdDelete: " + e.Message );
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


## ExpensesIdGet

> AllExpenseDocumentResponse ExpensesIdGet (string authorization, string id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesIdGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | 

            try
            {
                // Get expenses document.
                AllExpenseDocumentResponse result = apiInstance.ExpensesIdGet(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesIdGet: " + e.Message );
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
 **id** | **string**|  | 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdPaymentPost

> ExpenseSimpleDocumentResponse ExpensesIdPaymentPost (string authorization, string id, PaymentPaidDocument paymentPaidDocument)

Change status is paid expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesIdPaymentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId หรือ documentId
            var paymentPaidDocument = new PaymentPaidDocument(); // PaymentPaidDocument | 

            try
            {
                // Change status is paid expenses document.
                ExpenseSimpleDocumentResponse result = apiInstance.ExpensesIdPaymentPost(authorization, id, paymentPaidDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesIdPaymentPost: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdPut

> ExpenseInlineDocumentResponse ExpensesIdPut (string authorization, string id, UpdateExpenseDocument updateExpenseDocument)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesIdPutExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId
            var updateExpenseDocument = new UpdateExpenseDocument(); // UpdateExpenseDocument | 

            try
            {
                // Edit expenses document.
                ExpenseInlineDocumentResponse result = apiInstance.ExpensesIdPut(authorization, id, updateExpenseDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesIdPut: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdStatusStatusIdPost

> ExpenseInlineDocumentResponse ExpensesIdStatusStatusIdPost (string authorization, string id, string statusId)

Change status expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesIdStatusStatusIdPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | ID เอกสารใช้ recordId
            var statusId = statusId_example;  // string | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก

            try
            {
                // Change status expenses document.
                ExpenseInlineDocumentResponse result = apiInstance.ExpensesIdStatusStatusIdPost(authorization, id, statusId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesIdStatusStatusIdPost: " + e.Message );
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
 **statusId** | **string**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesInlinePost

> ExpenseInlineDocumentResponse ExpensesInlinePost (string authorization, ExpenseInlineDocument expenseInlineDocument)

Create expenses document inline discount or inline vat.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesInlinePostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var expenseInlineDocument = new ExpenseInlineDocument(); // ExpenseInlineDocument | 

            try
            {
                // Create expenses document inline discount or inline vat.
                ExpenseInlineDocumentResponse result = apiInstance.ExpensesInlinePost(authorization, expenseInlineDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesInlinePost: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesInlineWithPaymentPost

> ExpenseInlineDocumentResponse ExpensesInlineWithPaymentPost (string authorization, ExpenseInlineDocumentWithPaymentPaid expenseInlineDocumentWithPaymentPaid)

Create expenses document inline discount or inline vat with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesInlineWithPaymentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var expenseInlineDocumentWithPaymentPaid = new ExpenseInlineDocumentWithPaymentPaid(); // ExpenseInlineDocumentWithPaymentPaid | 

            try
            {
                // Create expenses document inline discount or inline vat with payment.
                ExpenseInlineDocumentResponse result = apiInstance.ExpensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesInlineWithPaymentPost: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesPost

> ExpenseSimpleDocumentResponse ExpensesPost (string authorization, ExpenseSimpleDocument expenseSimpleDocument)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var expenseSimpleDocument = new ExpenseSimpleDocument(); // ExpenseSimpleDocument | 

            try
            {
                // Create expenses document.
                ExpenseSimpleDocumentResponse result = apiInstance.ExpensesPost(authorization, expenseSimpleDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesPost: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesSharedocumentPost

> ShareDocumentResponse ExpensesSharedocumentPost (string authorization, ShareDocument shareDocument)

Share link expenses document.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesSharedocumentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var shareDocument = new ShareDocument(); // ShareDocument | 

            try
            {
                // Share link expenses document.
                ShareDocumentResponse result = apiInstance.ExpensesSharedocumentPost(authorization, shareDocument);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesSharedocumentPost: " + e.Message );
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


## ExpensesWithPaymentPost

> ExpenseSimpleDocumentResponse ExpensesWithPaymentPost (string authorization, ExpenseSimpleDocumentWithPaymentPaid expenseSimpleDocumentWithPaymentPaid)

Create expenses document with payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ExpensesWithPaymentPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ExpensesApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var expenseSimpleDocumentWithPaymentPaid = new ExpenseSimpleDocumentWithPaymentPaid(); // ExpenseSimpleDocumentWithPaymentPaid | 

            try
            {
                // Create expenses document with payment.
                ExpenseSimpleDocumentResponse result = apiInstance.ExpensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ExpensesApi.ExpensesWithPaymentPost: " + e.Message );
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
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

