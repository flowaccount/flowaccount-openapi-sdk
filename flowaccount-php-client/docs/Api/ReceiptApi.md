# OpenAPI\Client\ReceiptApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiptsEmailDocumentPost**](ReceiptApi.md#receiptsEmailDocumentPost) | **POST** /receipts/email-document | Send email receipt document.
[**receiptsGet**](ReceiptApi.md#receiptsGet) | **GET** /receipts | Get all receipt documents
[**receiptsIdAttachmentPost**](ReceiptApi.md#receiptsIdAttachmentPost) | **POST** /receipts/{id}/attachment | Attachment receipt document.
[**receiptsIdDelete**](ReceiptApi.md#receiptsIdDelete) | **DELETE** /receipts/{id} | Delete receipt document.
[**receiptsIdGet**](ReceiptApi.md#receiptsIdGet) | **GET** /receipts/{id} | Get receipt document.
[**receiptsIdPaymentPost**](ReceiptApi.md#receiptsIdPaymentPost) | **POST** /receipts/{id}/payment | Change status is paid receipt document.
[**receiptsIdPut**](ReceiptApi.md#receiptsIdPut) | **PUT** /receipts/{id} | Edit receipt document.
[**receiptsIdStatusStatusIdPost**](ReceiptApi.md#receiptsIdStatusStatusIdPost) | **POST** /receipts/{id}/status/{statusId} | Change status receipt document.
[**receiptsInlinePost**](ReceiptApi.md#receiptsInlinePost) | **POST** /receipts/inline | Create receipt document inline discount or inline vat.
[**receiptsInlineWithPaymentPost**](ReceiptApi.md#receiptsInlineWithPaymentPost) | **POST** /receipts/inline/with-payment | Create receipt document inline discount or inline vat with payment.
[**receiptsPost**](ReceiptApi.md#receiptsPost) | **POST** /receipts | Create receipt document.
[**receiptsSharedocumentPost**](ReceiptApi.md#receiptsSharedocumentPost) | **POST** /receipts/sharedocument | Share link receipt document.
[**receiptsWithPaymentPost**](ReceiptApi.md#receiptsWithPaymentPost) | **POST** /receipts/with-payment | Create receipt document with payment.



## receiptsEmailDocumentPost

> \OpenAPI\Client\Model\SendEmailResponse receiptsEmailDocumentPost($authorization, $send_email_coppies)

Send email receipt document.

ส่งเอกสารใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$send_email_coppies = new \OpenAPI\Client\Model\SendEmailCoppies(); // \OpenAPI\Client\Model\SendEmailCoppies | 

try {
    $result = $apiInstance->receiptsEmailDocumentPost($authorization, $send_email_coppies);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsEmailDocumentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **send_email_coppies** | [**\OpenAPI\Client\Model\SendEmailCoppies**](../Model/SendEmailCoppies.md)|  |

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


## receiptsGet

> \OpenAPI\Client\Model\AllDocumentResponse receiptsGet($current_page, $page_size, $authorization, $sort_by, $filter)

Get all receipt documents

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$current_page = 56; // int | Query current page document receipts. <br>Example Pattern: <ex>/receipts?currentPage=1 </ex><ex>/receipts?currentPage=1&pageSize=20</ex>
$page_size = 56; // int | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?pageSize=20 </ex>
$authorization = 'Bearer accessToken'; // string | 
$sort_by = 'sort_by_example'; // string | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/receipts?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
$filter = 'filter_example'; // string | Query filter receipts. <br>Example Pattern: <ex> /receipts?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>

try {
    $result = $apiInstance->receiptsGet($current_page, $page_size, $authorization, $sort_by, $filter);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **int**| Query current page document receipts. &lt;br&gt;Example Pattern: &lt;ex&gt;/receipts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/receipts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **page_size** | **int**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **string**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **string**| Query filter receipts. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

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


## receiptsIdAttachmentPost

> \OpenAPI\Client\Model\AttachmentResponse receiptsIdAttachmentPost($authorization, $id, $file)

Attachment receipt document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
$file = "/path/to/file.txt"; // \SplFileObject | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary

try {
    $result = $apiInstance->receiptsIdAttachmentPost($authorization, $id, $file);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsIdAttachmentPost: ', $e->getMessage(), PHP_EOL;
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


## receiptsIdDelete

> \OpenAPI\Client\Model\DeleteResponse receiptsIdDelete($authorization, $id)

Delete receipt document.

ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId

try {
    $result = $apiInstance->receiptsIdDelete($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsIdDelete: ', $e->getMessage(), PHP_EOL;
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


## receiptsIdGet

> \OpenAPI\Client\Model\InlineDocumentResponse receiptsIdGet($authorization, $id)

Get receipt document.

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId

try {
    $result = $apiInstance->receiptsIdGet($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsIdGet: ', $e->getMessage(), PHP_EOL;
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


## receiptsIdPaymentPost

> \OpenAPI\Client\Model\InlineDocumentResponse receiptsIdPaymentPost($authorization, $id, $payment_receiving_document)

Change status is paid receipt document.

เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId หรือ documentId
$payment_receiving_document = new \OpenAPI\Client\Model\PaymentReceivingDocument(); // \OpenAPI\Client\Model\PaymentReceivingDocument | 

try {
    $result = $apiInstance->receiptsIdPaymentPost($authorization, $id, $payment_receiving_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsIdPaymentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId หรือ documentId |
 **payment_receiving_document** | [**\OpenAPI\Client\Model\PaymentReceivingDocument**](../Model/PaymentReceivingDocument.md)|  |

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


## receiptsIdPut

> \OpenAPI\Client\Model\InlineDocumentResponse receiptsIdPut($authorization, $id, $update_inline_document)

Edit receipt document.

แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$update_inline_document = new \OpenAPI\Client\Model\UpdateInlineDocument(); // \OpenAPI\Client\Model\UpdateInlineDocument | 

try {
    $result = $apiInstance->receiptsIdPut($authorization, $id, $update_inline_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsIdPut: ', $e->getMessage(), PHP_EOL;
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


## receiptsIdStatusStatusIdPost

> \OpenAPI\Client\Model\InlineDocumentResponse receiptsIdStatusStatusIdPost($authorization, $id, $status_id)

Change status receipt document.

เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$status_id = 'status_id_example'; // string | เปลี่ยนสถานะเอกสารได้ 1 สถานะ <br> void = ยกเลิก

try {
    $result = $apiInstance->receiptsIdStatusStatusIdPost($authorization, $id, $status_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsIdStatusStatusIdPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |
 **status_id** | **string**| เปลี่ยนสถานะเอกสารได้ 1 สถานะ &lt;br&gt; void &#x3D; ยกเลิก |

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


## receiptsInlinePost

> \OpenAPI\Client\Model\InlineDocumentResponse receiptsInlinePost($authorization, $inline_document)

Create receipt document inline discount or inline vat.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$inline_document = new \OpenAPI\Client\Model\InlineDocument(); // \OpenAPI\Client\Model\InlineDocument | 

try {
    $result = $apiInstance->receiptsInlinePost($authorization, $inline_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsInlinePost: ', $e->getMessage(), PHP_EOL;
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


## receiptsInlineWithPaymentPost

> \OpenAPI\Client\Model\InlineDocumentResponse receiptsInlineWithPaymentPost($authorization, $inline_document_with_payment_receiving)

Create receipt document inline discount or inline vat with payment.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$inline_document_with_payment_receiving = new \OpenAPI\Client\Model\InlineDocumentWithPaymentReceiving(); // \OpenAPI\Client\Model\InlineDocumentWithPaymentReceiving | 

try {
    $result = $apiInstance->receiptsInlineWithPaymentPost($authorization, $inline_document_with_payment_receiving);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsInlineWithPaymentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **inline_document_with_payment_receiving** | [**\OpenAPI\Client\Model\InlineDocumentWithPaymentReceiving**](../Model/InlineDocumentWithPaymentReceiving.md)|  |

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


## receiptsPost

> \OpenAPI\Client\Model\SimpleDocumentResponse receiptsPost($authorization, $simple_document)

Create receipt document.

สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$simple_document = new \OpenAPI\Client\Model\SimpleDocument(); // \OpenAPI\Client\Model\SimpleDocument | 

try {
    $result = $apiInstance->receiptsPost($authorization, $simple_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document** | [**\OpenAPI\Client\Model\SimpleDocument**](../Model/SimpleDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\SimpleDocumentResponse**](../Model/SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## receiptsSharedocumentPost

> \OpenAPI\Client\Model\ShareDocumentResponse receiptsSharedocumentPost($authorization, $share_document)

Share link receipt document.

แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$share_document = new \OpenAPI\Client\Model\ShareDocument(); // \OpenAPI\Client\Model\ShareDocument | 

try {
    $result = $apiInstance->receiptsSharedocumentPost($authorization, $share_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsSharedocumentPost: ', $e->getMessage(), PHP_EOL;
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


## receiptsWithPaymentPost

> \OpenAPI\Client\Model\SimpleDocumentResponse receiptsWithPaymentPost($authorization, $simple_document_with_payment_receiving)

Create receipt document with payment.

สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ReceiptApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$simple_document_with_payment_receiving = new \OpenAPI\Client\Model\SimpleDocumentWithPaymentReceiving(); // \OpenAPI\Client\Model\SimpleDocumentWithPaymentReceiving | 

try {
    $result = $apiInstance->receiptsWithPaymentPost($authorization, $simple_document_with_payment_receiving);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReceiptApi->receiptsWithPaymentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document_with_payment_receiving** | [**\OpenAPI\Client\Model\SimpleDocumentWithPaymentReceiving**](../Model/SimpleDocumentWithPaymentReceiving.md)|  |

### Return type

[**\OpenAPI\Client\Model\SimpleDocumentResponse**](../Model/SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

