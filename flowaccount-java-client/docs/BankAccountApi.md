# BankAccountApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountsGet**](BankAccountApi.md#bankAccountsGet) | **GET** /bank-accounts | Get list all My Bank Account
[**bankAccountsPost**](BankAccountApi.md#bankAccountsPost) | **POST** /bank-accounts | Create bank account.


<a name="bankAccountsGet"></a>
# **bankAccountsGet**
> AllBankAccountResponse bankAccountsGet(authorization)

Get list all My Bank Account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BankAccountApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    BankAccountApi apiInstance = new BankAccountApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    try {
      AllBankAccountResponse result = apiInstance.bankAccountsGet(authorization);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BankAccountApi#bankAccountsGet");
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

### Return type

[**AllBankAccountResponse**](AllBankAccountResponse.md)

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

<a name="bankAccountsPost"></a>
# **bankAccountsPost**
> BankAccountResponse bankAccountsPost(authorization, bankAccount)

Create bank account.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BankAccountApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    BankAccountApi apiInstance = new BankAccountApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    BankAccount bankAccount = new BankAccount(); // BankAccount | 
    try {
      BankAccountResponse result = apiInstance.bankAccountsPost(authorization, bankAccount);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BankAccountApi#bankAccountsPost");
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
 **bankAccount** | [**BankAccount**](BankAccount.md)|  |

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

