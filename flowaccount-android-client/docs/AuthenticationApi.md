# AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenPost**](AuthenticationApi.md#tokenPost) | **POST** /token | Generate Access Token



## tokenPost

> AuthenResponse tokenPost(contentType, grantType, scope, clientId, clientSecret, guid)

Generate Access Token

### Example

```java
// Import classes:
//import org.openapitools.client.api.AuthenticationApi;

AuthenticationApi apiInstance = new AuthenticationApi();
String contentType = application/x-www-form-urlencoded; // String | 
String grantType = null; // String | 
String scope = null; // String | 
String clientId = null; // String | 
String clientSecret = null; // String | 
String guid = null; // String | 
try {
    AuthenResponse result = apiInstance.tokenPost(contentType, grantType, scope, clientId, clientSecret, guid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationApi#tokenPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to application/x-www-form-urlencoded]
 **grantType** | **String**|  | [optional] [default to null]
 **scope** | **String**|  | [optional] [default to null]
 **clientId** | **String**|  | [optional] [default to null]
 **clientSecret** | **String**|  | [optional] [default to null]
 **guid** | **String**|  | [optional] [default to null]

### Return type

[**AuthenResponse**](AuthenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

