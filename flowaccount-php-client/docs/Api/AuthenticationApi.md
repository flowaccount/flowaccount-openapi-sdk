# OpenAPI\Client\AuthenticationApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenPost**](AuthenticationApi.md#tokenPost) | **POST** /token | Generate Access Token



## tokenPost

> \OpenAPI\Client\Model\AuthenResponse tokenPost($content_type, $grant_type, $scope, $client_id, $client_secret, $guid)

Generate Access Token

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\AuthenticationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$content_type = 'application/x-www-form-urlencoded'; // string | 
$grant_type = 'grant_type_example'; // string | 
$scope = 'scope_example'; // string | 
$client_id = 'client_id_example'; // string | 
$client_secret = 'client_secret_example'; // string | 
$guid = 'guid_example'; // string | 

try {
    $result = $apiInstance->tokenPost($content_type, $grant_type, $scope, $client_id, $client_secret, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthenticationApi->tokenPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **string**|  | [default to &#39;application/x-www-form-urlencoded&#39;]
 **grant_type** | **string**|  | [optional]
 **scope** | **string**|  | [optional]
 **client_id** | **string**|  | [optional]
 **client_secret** | **string**|  | [optional]
 **guid** | **string**|  | [optional]

### Return type

[**\OpenAPI\Client\Model\AuthenResponse**](../Model/AuthenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

