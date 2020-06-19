# \ContactsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContactsGet**](ContactsApi.md#ContactsGet) | **Get** /contacts | Get list all contacts.
[**ContactsIdDelete**](ContactsApi.md#ContactsIdDelete) | **Delete** /contacts/{id} | Delete contacts.
[**ContactsIdGet**](ContactsApi.md#ContactsIdGet) | **Get** /contacts/{id} | Get contacts.
[**ContactsIdPut**](ContactsApi.md#ContactsIdPut) | **Put** /contacts/{id} | Update contacts.
[**ContactsPost**](ContactsApi.md#ContactsPost) | **Post** /contacts | Create contacts



## ContactsGet

> ContactResponse ContactsGet(ctx, authorization, optional)

Get list all contacts.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
 **optional** | ***ContactsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ContactsGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **currentPage** | **optional.Int32**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **optional.Int32**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | 
 **sortBy** | **optional.String**| Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | 
 **filter** | **optional.String**| Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ContactsIdDelete

> DeleteResponse ContactsIdDelete(ctx, authorization, id)

Delete contacts.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| เลข Id Contact | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ContactsIdGet

> ContactResponse ContactsIdGet(ctx, authorization, id)

Get contacts.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| เลข Id Contact | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ContactsIdPut

> ContactResponse ContactsIdPut(ctx, authorization, id, contact)

Update contacts.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| เลข Id Contact | 
**contact** | [**Contact**](Contact.md)|  | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ContactsPost

> ContactResponse ContactsPost(ctx, authorization, contact)

Create contacts

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**contact** | [**Contact**](Contact.md)|  | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

