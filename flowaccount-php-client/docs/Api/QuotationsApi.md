# OpenAPI\Client\QuotationsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotationsEmailDocumentPost**](QuotationsApi.md#quotationsEmailDocumentPost) | **POST** /quotations/email-document | Send email quotations document.
[**quotationsGet**](QuotationsApi.md#quotationsGet) | **GET** /quotations | Get all quotations documents.
[**quotationsIdAttachmentPost**](QuotationsApi.md#quotationsIdAttachmentPost) | **POST** /quotations/{id}/attachment | Attachment quotations document.
[**quotationsIdDelete**](QuotationsApi.md#quotationsIdDelete) | **DELETE** /quotations/{id} | Delete quotations document.
[**quotationsIdGet**](QuotationsApi.md#quotationsIdGet) | **GET** /quotations/{id} | Get quotations document.
[**quotationsIdPut**](QuotationsApi.md#quotationsIdPut) | **PUT** /quotations/{id} | Edit quotations document.
[**quotationsIdStatusStatusIdPost**](QuotationsApi.md#quotationsIdStatusStatusIdPost) | **POST** /quotations/{id}/status/{statusId} | Change status quotations document.
[**quotationsInlinePost**](QuotationsApi.md#quotationsInlinePost) | **POST** /quotations/inline | Create quotations document inline discount or inline vat.
[**quotationsPost**](QuotationsApi.md#quotationsPost) | **POST** /quotations | Create quotations document.
[**quotationsSharedocumentPost**](QuotationsApi.md#quotationsSharedocumentPost) | **POST** /quotations/sharedocument | Share link quotations document.



## quotationsEmailDocumentPost

> \OpenAPI\Client\Model\SendEmailResponse quotationsEmailDocumentPost($authorization, $send_email_simple)

Send email quotations document.

ส่งเอกสารใบเสนอราคา ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$send_email_simple = new \OpenAPI\Client\Model\SendEmailSimple(); // \OpenAPI\Client\Model\SendEmailSimple | 

try {
    $result = $apiInstance->quotationsEmailDocumentPost($authorization, $send_email_simple);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsEmailDocumentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **send_email_simple** | [**\OpenAPI\Client\Model\SendEmailSimple**](../Model/SendEmailSimple.md)|  |

### Return type

[**\OpenAPI\Client\Model\SendEmailResponse**](../Model/SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsGet

> \OpenAPI\Client\Model\AllDocumentResponse quotationsGet($current_page, $page_size, $authorization, $sort_by, $filter)

Get all quotations documents.

เรียกดูข้อมูลเอกสารใบเสนอราคาทั้งหมดในระบบ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$current_page = 56; // int | Query current page document quotations. <br>Example Pattern: <ex>/quotations?currentPage=1 </ex><ex>/quotations?currentPage=1&pageSize=20</ex>
$page_size = 56; // int | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?pageSize=20 </ex>
$authorization = 'Bearer accessToken'; // string | 
$sort_by = 'sort_by_example'; // string | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/quotations?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
$filter = 'filter_example'; // string | Query filter quotations. <br>Example Pattern: <ex> /quotations?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>

try {
    $result = $apiInstance->quotationsGet($current_page, $page_size, $authorization, $sort_by, $filter);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **int**| Query current page document quotations. &lt;br&gt;Example Pattern: &lt;ex&gt;/quotations?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/quotations?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **page_size** | **int**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **string**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **string**| Query filter quotations. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**\OpenAPI\Client\Model\AllDocumentResponse**](../Model/AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsIdAttachmentPost

> \OpenAPI\Client\Model\AttachmentResponse quotationsIdAttachmentPost($authorization, $id, $file)

Attachment quotations document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
$file = "/path/to/file.txt"; // \SplFileObject | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary

try {
    $result = $apiInstance->quotationsIdAttachmentPost($authorization, $id, $file);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsIdAttachmentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ |
 **file** | **\SplFileObject****\SplFileObject**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional]

### Return type

[**\OpenAPI\Client\Model\AttachmentResponse**](../Model/AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsIdDelete

> \OpenAPI\Client\Model\DeleteResponse quotationsIdDelete($authorization, $id)

Delete quotations document.

ลบ เอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId

try {
    $result = $apiInstance->quotationsIdDelete($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsIdDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |

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


## quotationsIdGet

> \OpenAPI\Client\Model\InlineDocumentResponse quotationsIdGet($authorization, $id)

Get quotations document.

เรียกดูข้อมูลเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId

try {
    $result = $apiInstance->quotationsIdGet($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |

### Return type

[**\OpenAPI\Client\Model\InlineDocumentResponse**](../Model/InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsIdPut

> \OpenAPI\Client\Model\InlineDocumentResponse quotationsIdPut($authorization, $id, $update_inline_document)

Edit quotations document.

แก้ไขข้อมูลเอกสารใบเสนอราคา ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$update_inline_document = new \OpenAPI\Client\Model\UpdateInlineDocument(); // \OpenAPI\Client\Model\UpdateInlineDocument | 

try {
    $result = $apiInstance->quotationsIdPut($authorization, $id, $update_inline_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsIdPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |
 **update_inline_document** | [**\OpenAPI\Client\Model\UpdateInlineDocument**](../Model/UpdateInlineDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\InlineDocumentResponse**](../Model/InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsIdStatusStatusIdPost

> \OpenAPI\Client\Model\InlineDocumentResponse quotationsIdStatusStatusIdPost($authorization, $id, $status_id)

Change status quotations document.

เปลี่ยนสถานะของเอกสารใบเสนอราคา สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$status_id = 'status_id_example'; // string | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> rejected = ยกเลิก

try {
    $result = $apiInstance->quotationsIdStatusStatusIdPost($authorization, $id, $status_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsIdStatusStatusIdPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |
 **status_id** | **string**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; rejected &#x3D; ยกเลิก |

### Return type

[**\OpenAPI\Client\Model\InlineDocumentResponse**](../Model/InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsInlinePost

> \OpenAPI\Client\Model\InlineDocumentResponse quotationsInlinePost($authorization, $inline_document)

Create quotations document inline discount or inline vat.

สร้างเอกสารใบเสนอราคา แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$inline_document = new \OpenAPI\Client\Model\InlineDocument(); // \OpenAPI\Client\Model\InlineDocument | 

try {
    $result = $apiInstance->quotationsInlinePost($authorization, $inline_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsInlinePost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **inline_document** | [**\OpenAPI\Client\Model\InlineDocument**](../Model/InlineDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\InlineDocumentResponse**](../Model/InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsPost

> \OpenAPI\Client\Model\InlineDocumentResponse quotationsPost($authorization, $simple_document)

Create quotations document.

สร้างเอกสารใบเสนอราคา เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$simple_document = new \OpenAPI\Client\Model\SimpleDocument(); // \OpenAPI\Client\Model\SimpleDocument | 

try {
    $result = $apiInstance->quotationsPost($authorization, $simple_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document** | [**\OpenAPI\Client\Model\SimpleDocument**](../Model/SimpleDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\InlineDocumentResponse**](../Model/InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## quotationsSharedocumentPost

> \OpenAPI\Client\Model\ShareDocumentResponse quotationsSharedocumentPost($authorization, $share_document)

Share link quotations document.

แชร์ลิงค์ เอกสารใบเสนอราคาที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\QuotationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$share_document = new \OpenAPI\Client\Model\ShareDocument(); // \OpenAPI\Client\Model\ShareDocument | 

try {
    $result = $apiInstance->quotationsSharedocumentPost($authorization, $share_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling QuotationsApi->quotationsSharedocumentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **share_document** | [**\OpenAPI\Client\Model\ShareDocument**](../Model/ShareDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\ShareDocumentResponse**](../Model/ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

