# FlowAccountOpenApi.AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenPost**](AuthenticationApi.md#tokenPost) | **POST** /token | Generate Access Token



## tokenPost

> AuthenResponse tokenPost(contentType, opts)

Generate Access Token

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.AuthenticationApi();
let contentType = "'application/x-www-form-urlencoded'"; // String | 
let opts = {
  'grantType': "grantType_example", // String | 
  'scope': "scope_example", // String | 
  'clientId': "clientId_example", // String | 
  'clientSecret': "clientSecret_example", // String | 
  'guid': "guid_example" // String | 
};
apiInstance.tokenPost(contentType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to &#39;application/x-www-form-urlencoded&#39;]
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

