# Flowaccount.OpenAPITools.Api.AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TokenPost**](AuthenticationApi.md#tokenpost) | **POST** /token | Generate Access Token



## TokenPost

> AuthenResponse TokenPost (string contentType, string grantType = null, string scope = null, string clientId = null, string clientSecret = null)

Generate Access Token

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class TokenPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new AuthenticationApi(Configuration.Default);
            var contentType = contentType_example;  // string |  (default to "application/x-www-form-urlencoded")
            var grantType = grantType_example;  // string |  (optional) 
            var scope = scope_example;  // string |  (optional) 
            var clientId = clientId_example;  // string |  (optional) 
            var clientSecret = clientSecret_example;  // string |  (optional) 

            try
            {
                // Generate Access Token
                AuthenResponse result = apiInstance.TokenPost(contentType, grantType, scope, clientId, clientSecret);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AuthenticationApi.TokenPost: " + e.Message );
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
 **contentType** | **string**|  | [default to &quot;application/x-www-form-urlencoded&quot;]
 **grantType** | **string**|  | [optional] 
 **scope** | **string**|  | [optional] 
 **clientId** | **string**|  | [optional] 
 **clientSecret** | **string**|  | [optional] 

### Return type

[**AuthenResponse**](AuthenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
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

