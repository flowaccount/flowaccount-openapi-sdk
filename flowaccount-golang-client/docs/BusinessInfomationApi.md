# \BusinessInfomationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CompanyInfoGet**](BusinessInfomationApi.md#CompanyInfoGet) | **Get** /company/info | Get business infomation
[**CompanyInfoPut**](BusinessInfomationApi.md#CompanyInfoPut) | **Put** /company/info | Edit business infomation



## CompanyInfoGet

> CompanyInfoResponse CompanyInfoGet(ctx, authorization)

Get business infomation

เรียกดูข้อมูลธรุกิจ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompanyInfoPut

> CompanyInfoResponse CompanyInfoPut(ctx, authorization, companyInfo)

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**companyInfo** | [**CompanyInfo**](CompanyInfo.md)|  | 

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

