# OpenAPI\Client\ContactsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsGet**](ContactsApi.md#contactsGet) | **GET** /contacts | Get list all contacts.
[**contactsIdDelete**](ContactsApi.md#contactsIdDelete) | **DELETE** /contacts/{id} | Delete contacts.
[**contactsIdGet**](ContactsApi.md#contactsIdGet) | **GET** /contacts/{id} | Get contacts.
[**contactsIdPut**](ContactsApi.md#contactsIdPut) | **PUT** /contacts/{id} | Update contacts.
[**contactsPost**](ContactsApi.md#contactsPost) | **POST** /contacts | Create contacts



## contactsGet

> \OpenAPI\Client\Model\ContactResponse contactsGet($authorization, $current_page, $page_size, $sort_by, $filter)

Get list all contacts.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$current_page = 56; // int | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex>
$page_size = 56; // int | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex>
$sort_by = 'sort_by_example'; // string | Contact Sort By Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex>
$filter = 'filter_example'; // string | Contact Filter Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex>

try {
    $result = $apiInstance->contactsGet($authorization, $current_page, $page_size, $sort_by, $filter);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->contactsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **current_page** | **int**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [optional]
 **page_size** | **int**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | [optional]
 **sort_by** | **string**| Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **string**| Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional]

### Return type

[**\OpenAPI\Client\Model\ContactResponse**](../Model/ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## contactsIdDelete

> \OpenAPI\Client\Model\DeleteResponse contactsIdDelete($authorization, $id)

Delete contacts.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | เลข Id Contact

try {
    $result = $apiInstance->contactsIdDelete($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->contactsIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| เลข Id Contact |

### Return type

[**\OpenAPI\Client\Model\DeleteResponse**](../Model/DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## contactsIdGet

> \OpenAPI\Client\Model\ContactResponse contactsIdGet($authorization, $id)

Get contacts.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | เลข Id Contact

try {
    $result = $apiInstance->contactsIdGet($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->contactsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| เลข Id Contact |

### Return type

[**\OpenAPI\Client\Model\ContactResponse**](../Model/ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## contactsIdPut

> \OpenAPI\Client\Model\ContactResponse contactsIdPut($authorization, $id, $contact)

Update contacts.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | เลข Id Contact
$contact = new \OpenAPI\Client\Model\Contact(); // \OpenAPI\Client\Model\Contact | 

try {
    $result = $apiInstance->contactsIdPut($authorization, $id, $contact);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->contactsIdPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| เลข Id Contact |
 **contact** | [**\OpenAPI\Client\Model\Contact**](../Model/Contact.md)|  |

### Return type

[**\OpenAPI\Client\Model\ContactResponse**](../Model/ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## contactsPost

> \OpenAPI\Client\Model\ContactResponse contactsPost($authorization, $contact)

Create contacts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$contact = new \OpenAPI\Client\Model\Contact(); // \OpenAPI\Client\Model\Contact | 

try {
    $result = $apiInstance->contactsPost($authorization, $contact);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->contactsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **contact** | [**\OpenAPI\Client\Model\Contact**](../Model/Contact.md)|  |

### Return type

[**\OpenAPI\Client\Model\ContactResponse**](../Model/ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

