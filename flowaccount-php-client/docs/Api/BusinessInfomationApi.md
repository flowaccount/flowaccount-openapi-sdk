# OpenAPI\Client\BusinessInfomationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyInfoGet**](BusinessInfomationApi.md#companyInfoGet) | **GET** /company/info | Get business infomation
[**companyInfoPut**](BusinessInfomationApi.md#companyInfoPut) | **PUT** /company/info | Edit business infomation



## companyInfoGet

> \OpenAPI\Client\Model\CompanyInfoResponse companyInfoGet($authorization)

Get business infomation

เรียกดูข้อมูลธรุกิจ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\BusinessInfomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 

try {
    $result = $apiInstance->companyInfoGet($authorization);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BusinessInfomationApi->companyInfoGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**\OpenAPI\Client\Model\CompanyInfoResponse**](../Model/CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## companyInfoPut

> \OpenAPI\Client\Model\CompanyInfoResponse companyInfoPut($authorization, $company_info)

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\BusinessInfomationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$company_info = new \OpenAPI\Client\Model\CompanyInfo(); // \OpenAPI\Client\Model\CompanyInfo | 

try {
    $result = $apiInstance->companyInfoPut($authorization, $company_info);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BusinessInfomationApi->companyInfoPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **company_info** | [**\OpenAPI\Client\Model\CompanyInfo**](../Model/CompanyInfo.md)|  |

### Return type

[**\OpenAPI\Client\Model\CompanyInfoResponse**](../Model/CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

