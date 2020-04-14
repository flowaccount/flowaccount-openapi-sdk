# openapi_client.BankAccountApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bank_accounts_get**](BankAccountApi.md#bank_accounts_get) | **GET** /bank-accounts | Get list all My Bank Account
[**bank_accounts_post**](BankAccountApi.md#bank_accounts_post) | **POST** /bank-accounts | Create bank account.


# **bank_accounts_get**
> BankAccountResponse bank_accounts_get(authorization)

Get list all My Bank Account

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.BankAccountApi()
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')

try:
    # Get list all My Bank Account
    api_response = api_instance.bank_accounts_get(authorization)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BankAccountApi->bank_accounts_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

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

# **bank_accounts_post**
> BankAccountResponse bank_accounts_post(authorization, bank_account)

Create bank account.

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.BankAccountApi()
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
bank_account = openapi_client.BankAccount() # BankAccount | 

try:
    # Create bank account.
    api_response = api_instance.bank_accounts_post(authorization, bank_account)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BankAccountApi->bank_accounts_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **bank_account** | [**BankAccount**](BankAccount.md)|  | 

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

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

