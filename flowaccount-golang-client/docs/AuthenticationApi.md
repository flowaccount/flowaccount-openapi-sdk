# \AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TokenPost**](AuthenticationApi.md#TokenPost) | **Post** /token | Generate Access Token



## TokenPost

> AuthenResponse TokenPost(ctx, contentType, optional)

Generate Access Token

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**contentType** | **string**|  | [default to application/x-www-form-urlencoded]
 **optional** | ***TokenPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a TokenPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **grantType** | **optional.String**|  | 
 **scope** | **optional.String**|  | 
 **clientId** | **optional.String**|  | 
 **clientSecret** | **optional.String**|  | 
 **guid** | **optional.String**|  | 

### Return type

[**AuthenResponse**](AuthenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

