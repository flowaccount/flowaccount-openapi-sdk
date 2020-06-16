# OpenapiClient::BusinessInfomationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**company_info_get**](BusinessInfomationApi.md#company_info_get) | **GET** /company/info | Get business infomation
[**company_info_put**](BusinessInfomationApi.md#company_info_put) | **PUT** /company/info | Edit business infomation



## company_info_get

> CompanyInfoResponse company_info_get(authorization)

Get business infomation

เรียกดูข้อมูลธรุกิจ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BusinessInfomationApi.new
authorization = 'Bearer accessToken' # String | 

begin
  #Get business infomation
  result = api_instance.company_info_get(authorization)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BusinessInfomationApi->company_info_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## company_info_put

> CompanyInfoResponse company_info_put(authorization, company_info)

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BusinessInfomationApi.new
authorization = 'Bearer accessToken' # String | 
company_info = OpenapiClient::CompanyInfo.new # CompanyInfo | 

begin
  #Edit business infomation
  result = api_instance.company_info_put(authorization, company_info)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BusinessInfomationApi->company_info_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **company_info** | [**CompanyInfo**](CompanyInfo.md)|  | 

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

