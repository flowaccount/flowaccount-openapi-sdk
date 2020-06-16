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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BusinessInfomationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    BusinessInfomationApi apiInstance = new BusinessInfomationApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    try {
      CompanyInfoResponse result = apiInstance.companyInfoGet(authorization);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BusinessInfomationApi#companyInfoGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="companyInfoPut"></a>
# **companyInfoPut**
> CompanyInfoResponse companyInfoPut(authorization, companyInfo)

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BusinessInfomationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    BusinessInfomationApi apiInstance = new BusinessInfomationApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    CompanyInfo companyInfo = new CompanyInfo(); // CompanyInfo | 
    try {
      CompanyInfoResponse result = apiInstance.companyInfoPut(authorization, companyInfo);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BusinessInfomationApi#companyInfoPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **companyInfo** | [**CompanyInfo**](CompanyInfo.md)|  |

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

