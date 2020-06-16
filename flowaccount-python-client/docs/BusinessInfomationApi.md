# openapi_client.BusinessInfomationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**company_info_get**](BusinessInfomationApi.md#company_info_get) | **GET** /company/info | Get business infomation
[**company_info_put**](BusinessInfomationApi.md#company_info_put) | **PUT** /company/info | Edit business infomation


# **company_info_get**
> CompanyInfoResponse company_info_get(authorization)

Get business infomation

เรียกดูข้อมูลธรุกิจ

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BusinessInfomationApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')

    try:
        # Get business infomation
        api_response = api_instance.company_info_get(authorization)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling BusinessInfomationApi->company_info_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **company_info_put**
> CompanyInfoResponse company_info_put(authorization, company_info)

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BusinessInfomationApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
company_info = openapi_client.CompanyInfo() # CompanyInfo | 

    try:
        # Edit business infomation
        api_response = api_instance.company_info_put(authorization, company_info)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling BusinessInfomationApi->company_info_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **company_info** | [**CompanyInfo**](CompanyInfo.md)|  | 

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

