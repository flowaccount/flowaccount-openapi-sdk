# openapi_client.AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_post**](AuthenticationApi.md#token_post) | **POST** /token | Generate Access Token


# **token_post**
> AuthenResponse token_post(content_type, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)

Generate Access Token

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.AuthenticationApi()
content_type = 'application/x-www-form-urlencoded' # str |  (default to 'application/x-www-form-urlencoded')
grant_type = 'grant_type_example' # str |  (optional)
scope = 'scope_example' # str |  (optional)
client_id = 'client_id_example' # str |  (optional)
client_secret = 'client_secret_example' # str |  (optional)

try:
    # Generate Access Token
    api_response = api_instance.token_post(content_type, grant_type=grant_type, scope=scope, client_id=client_id, client_secret=client_secret)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AuthenticationApi->token_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | [default to &#39;application/x-www-form-urlencoded&#39;]
 **grant_type** | **str**|  | [optional] 
 **scope** | **str**|  | [optional] 
 **client_id** | **str**|  | [optional] 
 **client_secret** | **str**|  | [optional] 

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
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

