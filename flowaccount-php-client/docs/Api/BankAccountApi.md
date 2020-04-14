# OpenAPI\Client\BankAccountApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountsGet**](BankAccountApi.md#bankAccountsGet) | **GET** /bank-accounts | Get list all My Bank Account
[**bankAccountsPost**](BankAccountApi.md#bankAccountsPost) | **POST** /bank-accounts | Create bank account.



## bankAccountsGet

> \OpenAPI\Client\Model\BankAccountResponse bankAccountsGet($authorization)

Get list all My Bank Account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 

try {
    $result = $apiInstance->bankAccountsGet($authorization);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->bankAccountsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**\OpenAPI\Client\Model\BankAccountResponse**](../Model/BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## bankAccountsPost

> \OpenAPI\Client\Model\BankAccountResponse bankAccountsPost($authorization, $bank_account)

Create bank account.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\BankAccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$bank_account = new \OpenAPI\Client\Model\BankAccount(); // \OpenAPI\Client\Model\BankAccount | 

try {
    $result = $apiInstance->bankAccountsPost($authorization, $bank_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BankAccountApi->bankAccountsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **bank_account** | [**\OpenAPI\Client\Model\BankAccount**](../Model/BankAccount.md)|  |

### Return type

[**\OpenAPI\Client\Model\BankAccountResponse**](../Model/BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

