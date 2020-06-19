# Flowaccount.OpenAPITools.Api.ContactsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContactsGet**](ContactsApi.md#contactsget) | **GET** /contacts | Get list all contacts.
[**ContactsIdDelete**](ContactsApi.md#contactsiddelete) | **DELETE** /contacts/{id} | Delete contacts.
[**ContactsIdGet**](ContactsApi.md#contactsidget) | **GET** /contacts/{id} | Get contacts.
[**ContactsIdPut**](ContactsApi.md#contactsidput) | **PUT** /contacts/{id} | Update contacts.
[**ContactsPost**](ContactsApi.md#contactspost) | **POST** /contacts | Create contacts



## ContactsGet

> ContactResponse ContactsGet (string authorization, int? currentPage = null, int? pageSize = null, string sortBy = null, string filter = null)

Get list all contacts.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ContactsGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ContactsApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var currentPage = 56;  // int? | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex> (optional) 
            var pageSize = 56;  // int? | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex> (optional) 
            var sortBy = sortBy_example;  // string | Contact Sort By Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex> (optional) 
            var filter = filter_example;  // string | Contact Filter Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex> (optional) 

            try
            {
                // Get list all contacts.
                ContactResponse result = apiInstance.ContactsGet(authorization, currentPage, pageSize, sortBy, filter);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactsApi.ContactsGet: " + e.Message );
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
 **currentPage** | **int?**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [optional] 
 **pageSize** | **int?**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | [optional] 
 **sortBy** | **string**| Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **string**| Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

### Return type

[**ContactResponse**](ContactResponse.md)

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


## ContactsIdDelete

> DeleteResponse ContactsIdDelete (string authorization, string id)

Delete contacts.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ContactsIdDeleteExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ContactsApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | เลข Id Contact

            try
            {
                // Delete contacts.
                DeleteResponse result = apiInstance.ContactsIdDelete(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactsApi.ContactsIdDelete: " + e.Message );
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
 **id** | **string**| เลข Id Contact | 

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


## ContactsIdGet

> ContactResponse ContactsIdGet (string authorization, string id)

Get contacts.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ContactsIdGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ContactsApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | เลข Id Contact

            try
            {
                // Get contacts.
                ContactResponse result = apiInstance.ContactsIdGet(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactsApi.ContactsIdGet: " + e.Message );
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
 **id** | **string**| เลข Id Contact | 

### Return type

[**ContactResponse**](ContactResponse.md)

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


## ContactsIdPut

> ContactResponse ContactsIdPut (string authorization, string id, Contact contact)

Update contacts.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ContactsIdPutExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ContactsApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | เลข Id Contact
            var contact = new Contact(); // Contact | 

            try
            {
                // Update contacts.
                ContactResponse result = apiInstance.ContactsIdPut(authorization, id, contact);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactsApi.ContactsIdPut: " + e.Message );
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
 **id** | **string**| เลข Id Contact | 
 **contact** | [**Contact**](Contact.md)|  | 

### Return type

[**ContactResponse**](ContactResponse.md)

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


## ContactsPost

> ContactResponse ContactsPost (string authorization, Contact contact)

Create contacts

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ContactsPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ContactsApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var contact = new Contact(); // Contact | 

            try
            {
                // Create contacts
                ContactResponse result = apiInstance.ContactsPost(authorization, contact);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContactsApi.ContactsPost: " + e.Message );
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
 **contact** | [**Contact**](Contact.md)|  | 

### Return type

[**ContactResponse**](ContactResponse.md)

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

