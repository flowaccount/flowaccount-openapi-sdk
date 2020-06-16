# AuthenticationAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenPost**](AuthenticationAPI.md#tokenpost) | **POST** /token | Generate Access Token


# **tokenPost**
```swift
    open class func tokenPost(contentType: String, grantType: String? = nil, scope: String? = nil, clientId: String? = nil, clientSecret: String? = nil, guid: String? = nil, completion: @escaping (_ data: AuthenResponse?, _ error: Error?) -> Void)
```

Generate Access Token

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let contentType = "contentType_example" // String |  (default to "application/x-www-form-urlencoded")
let grantType = "grantType_example" // String |  (optional)
let scope = "scope_example" // String |  (optional)
let clientId = "clientId_example" // String |  (optional)
let clientSecret = "clientSecret_example" // String |  (optional)
let guid = "guid_example" // String |  (optional)

// Generate Access Token
AuthenticationAPI.tokenPost(contentType: contentType, grantType: grantType, scope: scope, clientId: clientId, clientSecret: clientSecret, guid: guid) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String** |  | [default to &quot;application/x-www-form-urlencoded&quot;]
 **grantType** | **String** |  | [optional] 
 **scope** | **String** |  | [optional] 
 **clientId** | **String** |  | [optional] 
 **clientSecret** | **String** |  | [optional] 
 **guid** | **String** |  | [optional] 

### Return type

[**AuthenResponse**](AuthenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

