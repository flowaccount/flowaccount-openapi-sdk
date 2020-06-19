# BusinessInfomationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyInfoGet**](BusinessInfomationApi.md#companyInfoGet) | **GET** /company/info | Get business infomation
[**companyInfoPut**](BusinessInfomationApi.md#companyInfoPut) | **PUT** /company/info | Edit business infomation


<a name="companyInfoGet"></a>
# **companyInfoGet**
> CompanyInfoResponse companyInfoGet(authorization)

Get business infomation

เรียกดูข้อมูลธรุกิจ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BusinessInfomationApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : CompanyInfoResponse = apiInstance.companyInfoGet(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BusinessInfomationApi#companyInfoGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BusinessInfomationApi#companyInfoGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="companyInfoPut"></a>
# **companyInfoPut**
> CompanyInfoResponse companyInfoPut(authorization, companyInfo)

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BusinessInfomationApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val companyInfo : CompanyInfo =  // CompanyInfo | 
try {
    val result : CompanyInfoResponse = apiInstance.companyInfoPut(authorization, companyInfo)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BusinessInfomationApi#companyInfoPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BusinessInfomationApi#companyInfoPut")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **companyInfo** | [**CompanyInfo**](CompanyInfo.md)|  |

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

