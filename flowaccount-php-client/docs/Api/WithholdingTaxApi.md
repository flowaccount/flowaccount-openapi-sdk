# OpenAPI\Client\WithholdingTaxApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withholdingTaxesEmailDocumentPost**](WithholdingTaxApi.md#withholdingTaxesEmailDocumentPost) | **POST** /withholding-taxes/email-document | Send email withholding tax document.
[**withholdingTaxesGet**](WithholdingTaxApi.md#withholdingTaxesGet) | **GET** /withholding-taxes | Get list all withholding tax documents.
[**withholdingTaxesIdAttachmentPost**](WithholdingTaxApi.md#withholdingTaxesIdAttachmentPost) | **POST** /withholding-taxes/{id}/attachment | Add Attachment to expenses.
[**withholdingTaxesIdDelete**](WithholdingTaxApi.md#withholdingTaxesIdDelete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
[**withholdingTaxesIdGet**](WithholdingTaxApi.md#withholdingTaxesIdGet) | **GET** /withholding-taxes/{id} | Get withholding tax document.
[**withholdingTaxesIdPut**](WithholdingTaxApi.md#withholdingTaxesIdPut) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
[**withholdingTaxesIdStatusStatusIdPost**](WithholdingTaxApi.md#withholdingTaxesIdStatusStatusIdPost) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status of withholding tax document.
[**withholdingTaxesPost**](WithholdingTaxApi.md#withholdingTaxesPost) | **POST** /withholding-taxes | Create withholding tax document.
[**withholdingTaxesSharedocumentPost**](WithholdingTaxApi.md#withholdingTaxesSharedocumentPost) | **POST** /withholding-taxes/sharedocument | Share link withholding tax documents.



## withholdingTaxesEmailDocumentPost

> \OpenAPI\Client\Model\SendEmailResponse withholdingTaxesEmailDocumentPost($authorization, $send_email_simple)

Send email withholding tax document.

ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$send_email_simple = new \OpenAPI\Client\Model\SendEmailSimple(); // \OpenAPI\Client\Model\SendEmailSimple | 

try {
    $result = $apiInstance->withholdingTaxesEmailDocumentPost($authorization, $send_email_simple);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesEmailDocumentPost: ', $e->getMessage(), PHP_EOL;
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


## withholdingTaxesGet

> \OpenAPI\Client\Model\AllWithholidingTaxDocumentResponse withholdingTaxesGet($current_page, $page_size, $authorization, $sort_by, $filter)

Get list all withholding tax documents.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$current_page = 56; // int | Query current page document withholding tax. <br>Example Pattern: <ex>/withholding-taxes?currentPage=1 </ex><ex>/withholding-taxes?currentPage=1&pageSize=20</ex>
$page_size = 56; // int | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?pageSize=20 </ex>
$authorization = 'Bearer accessToken'; // string | 
$sort_by = 'sort_by_example'; // string | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/withholding-taxes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'entity','sortOrder':'asc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
$filter = 'filter_example'; // string | 

try {
    $result = $apiInstance->withholdingTaxesGet($current_page, $page_size, $authorization, $sort_by, $filter);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **int**| Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **page_size** | **int**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **string**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **string**|  | [optional]

### Return type

[**\OpenAPI\Client\Model\AllWithholidingTaxDocumentResponse**](../Model/AllWithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## withholdingTaxesIdAttachmentPost

> \OpenAPI\Client\Model\AttachmentResponse withholdingTaxesIdAttachmentPost($authorization, $id, $file)

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | 
$file = "/path/to/file.txt"; // \SplFileObject | 

try {
    $result = $apiInstance->withholdingTaxesIdAttachmentPost($authorization, $id, $file);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesIdAttachmentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**|  |
 **file** | **\SplFileObject****\SplFileObject**|  | [optional]

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


## withholdingTaxesIdDelete

> \OpenAPI\Client\Model\DeleteResponse withholdingTaxesIdDelete($authorization, $id)

Delete withholding tax document.

ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId

try {
    $result = $apiInstance->withholdingTaxesIdDelete($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesIdDelete: ', $e->getMessage(), PHP_EOL;
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


## withholdingTaxesIdGet

> \OpenAPI\Client\Model\WithholidingTaxDocumentResponse withholdingTaxesIdGet($authorization, $id)

Get withholding tax document.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId หรือ documentId

try {
    $result = $apiInstance->withholdingTaxesIdGet($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId หรือ documentId |

### Return type

[**\OpenAPI\Client\Model\WithholidingTaxDocumentResponse**](../Model/WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## withholdingTaxesIdPut

> \OpenAPI\Client\Model\WithholidingTaxDocumentResponse withholdingTaxesIdPut($authorization, $id, $update_withholiding_tax_document)

Edit withholding tax document.

แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$update_withholiding_tax_document = new \OpenAPI\Client\Model\UpdateWithholidingTaxDocument(); // \OpenAPI\Client\Model\UpdateWithholidingTaxDocument | 

try {
    $result = $apiInstance->withholdingTaxesIdPut($authorization, $id, $update_withholiding_tax_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesIdPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |
 **update_withholiding_tax_document** | [**\OpenAPI\Client\Model\UpdateWithholidingTaxDocument**](../Model/UpdateWithholidingTaxDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\WithholidingTaxDocumentResponse**](../Model/WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## withholdingTaxesIdStatusStatusIdPost

> \OpenAPI\Client\Model\WithholidingTaxDocumentResponse withholdingTaxesIdStatusStatusIdPost($authorization, $id, $status_id)

Change status of withholding tax document.

เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$status_id = 'status_id_example'; // string | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> processed = ดำเนินการแล้ว <br> void = ยกเลิก

try {
    $result = $apiInstance->withholdingTaxesIdStatusStatusIdPost($authorization, $id, $status_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesIdStatusStatusIdPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |
 **status_id** | **string**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**\OpenAPI\Client\Model\WithholidingTaxDocumentResponse**](../Model/WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## withholdingTaxesPost

> \OpenAPI\Client\Model\WithholidingTaxDocumentResponse withholdingTaxesPost($authorization, $withholiding_tax_document)

Create withholding tax document.

สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) <br> <br> ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$withholiding_tax_document = new \OpenAPI\Client\Model\WithholidingTaxDocument(); // \OpenAPI\Client\Model\WithholidingTaxDocument | 

try {
    $result = $apiInstance->withholdingTaxesPost($authorization, $withholiding_tax_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **withholiding_tax_document** | [**\OpenAPI\Client\Model\WithholidingTaxDocument**](../Model/WithholidingTaxDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\WithholidingTaxDocumentResponse**](../Model/WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## withholdingTaxesSharedocumentPost

> \OpenAPI\Client\Model\ShareDocumentResponse withholdingTaxesSharedocumentPost($authorization, $share_document)

Share link withholding tax documents.

แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\WithholdingTaxApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$share_document = new \OpenAPI\Client\Model\ShareDocument(); // \OpenAPI\Client\Model\ShareDocument | 

try {
    $result = $apiInstance->withholdingTaxesSharedocumentPost($authorization, $share_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithholdingTaxApi->withholdingTaxesSharedocumentPost: ', $e->getMessage(), PHP_EOL;
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

