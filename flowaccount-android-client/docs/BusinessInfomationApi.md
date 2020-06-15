# BusinessInfomationApi

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

```java
// Import classes:
//import org.openapitools.client.api.BusinessInfomationApi;

BusinessInfomationApi apiInstance = new BusinessInfomationApi();
String authorization = Bearer accessToken; // String | 
try {
    CompanyInfoResponse result = apiInstance.companyInfoGet(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BusinessInfomationApi#companyInfoGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]

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

```java
// Import classes:
//import org.openapitools.client.api.BusinessInfomationApi;

BusinessInfomationApi apiInstance = new BusinessInfomationApi();
String authorization = Bearer accessToken; // String | 
CompanyInfo companyInfo = new CompanyInfo(); // CompanyInfo | 
try {
    CompanyInfoResponse result = apiInstance.companyInfoPut(authorization, companyInfo);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BusinessInfomationApi#companyInfoPut");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **companyInfo** | [**CompanyInfo**](CompanyInfo.md)|  |

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

