# AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenPost**](AuthenticationApi.md#tokenPost) | **POST** /token | Generate Access Token


<a name="tokenPost"></a>
# **tokenPost**
> AuthenResponse tokenPost(contentType, grantType, scope, clientId, clientSecret, guid)

Generate Access Token

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    String contentType = "\"application/x-www-form-urlencoded\""; // String | 
    String grantType = "grantType_example"; // String | 
    String scope = "scope_example"; // String | 
    String clientId = "clientId_example"; // String | 
    String clientSecret = "clientSecret_example"; // String | 
    String guid = "guid_example"; // String | 
    try {
      AuthenResponse result = apiInstance.tokenPost(contentType, grantType, scope, clientId, clientSecret, guid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#tokenPost");
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
 **contentType** | **String**|  | [default to &quot;application/x-www-form-urlencoded&quot;]
 **grantType** | **String**|  | [optional]
 **scope** | **String**|  | [optional]
 **clientId** | **String**|  | [optional]
 **clientSecret** | **String**|  | [optional]
 **guid** | **String**|  | [optional]

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

