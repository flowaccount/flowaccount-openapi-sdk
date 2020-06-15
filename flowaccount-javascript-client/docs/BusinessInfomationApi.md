# FlowAccountOpenApi.BusinessInfomationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyInfoGet**](BusinessInfomationApi.md#companyInfoGet) | **GET** /company/info | Get business infomation
[**companyInfoPut**](BusinessInfomationApi.md#companyInfoPut) | **PUT** /company/info | Edit business infomation



## companyInfoGet

> CompanyInfoResponse companyInfoGet(authorization)

Get business infomation

เรียกดูข้อมูลธรุกิจ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BusinessInfomationApi();
let authorization = "'Bearer accessToken'"; // String | 
apiInstance.companyInfoGet(authorization, (error, data, response) => {
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
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyInfoPut

> CompanyInfoResponse companyInfoPut(authorization, companyInfo)

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BusinessInfomationApi();
let authorization = "'Bearer accessToken'"; // String | 
let companyInfo = new FlowAccountOpenApi.CompanyInfo(); // CompanyInfo | 
apiInstance.companyInfoPut(authorization, companyInfo, (error, data, response) => {
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
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **companyInfo** | [**CompanyInfo**](CompanyInfo.md)|  | 

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

