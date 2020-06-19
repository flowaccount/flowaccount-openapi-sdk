# AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenPost**](AuthenticationApi.md#tokenPost) | **POST** /token | Generate Access Token


<a name="tokenPost"></a>
# **tokenPost**
> AuthenResponse tokenPost(contentMinusType, grantType, scope, clientId, clientSecret, guid)

Generate Access Token

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthenticationApi()
val contentMinusType : kotlin.String = contentMinusType_example // kotlin.String | 
val grantType : kotlin.String = grantType_example // kotlin.String | 
val scope : kotlin.String = scope_example // kotlin.String | 
val clientId : kotlin.String = clientId_example // kotlin.String | 
val clientSecret : kotlin.String = clientSecret_example // kotlin.String | 
val guid : kotlin.String = guid_example // kotlin.String | 
try {
    val result : AuthenResponse = apiInstance.tokenPost(contentMinusType, grantType, scope, clientId, clientSecret, guid)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthenticationApi#tokenPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthenticationApi#tokenPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentMinusType** | **kotlin.String**|  | [default to &quot;application/x-www-form-urlencoded&quot;]
 **grantType** | **kotlin.String**|  | [optional]
 **scope** | **kotlin.String**|  | [optional]
 **clientId** | **kotlin.String**|  | [optional]
 **clientSecret** | **kotlin.String**|  | [optional]
 **guid** | **kotlin.String**|  | [optional]

### Return type

[**AuthenResponse**](AuthenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

