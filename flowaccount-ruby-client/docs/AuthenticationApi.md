# OpenapiClient::AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**token_post**](AuthenticationApi.md#token_post) | **POST** /token | Generate Access Token



## token_post

> AuthenResponse token_post(content_type, opts)

Generate Access Token

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::AuthenticationApi.new
content_type = 'application/x-www-form-urlencoded' # String | 
opts = {
  grant_type: 'grant_type_example', # String | 
  scope: 'scope_example', # String | 
  client_id: 'client_id_example', # String | 
  client_secret: 'client_secret_example', # String | 
  guid: 'guid_example' # String | 
}

begin
  #Generate Access Token
  result = api_instance.token_post(content_type, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AuthenticationApi->token_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **String**|  | [default to &#39;application/x-www-form-urlencoded&#39;]
 **grant_type** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 
 **client_id** | **String**|  | [optional] 
 **client_secret** | **String**|  | [optional] 
 **guid** | **String**|  | [optional] 

### Return type

[**AuthenResponse**](AuthenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

