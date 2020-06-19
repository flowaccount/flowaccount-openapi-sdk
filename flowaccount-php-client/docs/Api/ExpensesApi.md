# OpenAPI\Client\ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expensesCategoriesAccountingGet**](ExpensesApi.md#expensesCategoriesAccountingGet) | **GET** /expenses/categories/accounting | Accounting categories expenses document.
[**expensesCategoriesBusinessGet**](ExpensesApi.md#expensesCategoriesBusinessGet) | **GET** /expenses/categories/business | Business categories expenses document.
[**expensesEmailDocumentPost**](ExpensesApi.md#expensesEmailDocumentPost) | **POST** /expenses/email-document | Send email expenses document.
[**expensesGet**](ExpensesApi.md#expensesGet) | **GET** /expenses | Get list all expenses documents.
[**expensesIdAttachmentPost**](ExpensesApi.md#expensesIdAttachmentPost) | **POST** /expenses/{id}/attachment | Attachment to expenses document.
[**expensesIdDelete**](ExpensesApi.md#expensesIdDelete) | **DELETE** /expenses/{id} | Delete expenses document.
[**expensesIdGet**](ExpensesApi.md#expensesIdGet) | **GET** /expenses/{id} | Get expenses document.
[**expensesIdPaymentPost**](ExpensesApi.md#expensesIdPaymentPost) | **POST** /expenses/{id}/payment | Change status is paid expenses document.
[**expensesIdPut**](ExpensesApi.md#expensesIdPut) | **PUT** /expenses/{id} | Edit expenses document.
[**expensesIdStatusStatusIdPost**](ExpensesApi.md#expensesIdStatusStatusIdPost) | **POST** /expenses/{id}/status/{statusId} | Change status expenses document.
[**expensesInlinePost**](ExpensesApi.md#expensesInlinePost) | **POST** /expenses/inline | Create expenses document inline discount or inline vat.
[**expensesInlineWithPaymentPost**](ExpensesApi.md#expensesInlineWithPaymentPost) | **POST** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
[**expensesPost**](ExpensesApi.md#expensesPost) | **POST** /expenses | Create expenses document.
[**expensesSharedocumentPost**](ExpensesApi.md#expensesSharedocumentPost) | **POST** /expenses/sharedocument | Share link expenses document.
[**expensesWithPaymentPost**](ExpensesApi.md#expensesWithPaymentPost) | **POST** /expenses/with-payment | Create expenses document with payment.



## expensesCategoriesAccountingGet

> \OpenAPI\Client\Model\BusinessCategory expensesCategoriesAccountingGet($authorization)

Accounting categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 

try {
    $result = $apiInstance->expensesCategoriesAccountingGet($authorization);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesCategoriesAccountingGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**\OpenAPI\Client\Model\BusinessCategory**](../Model/BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesCategoriesBusinessGet

> \OpenAPI\Client\Model\BusinessCategory expensesCategoriesBusinessGet($authorization)

Business categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 

try {
    $result = $apiInstance->expensesCategoriesBusinessGet($authorization);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesCategoriesBusinessGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**\OpenAPI\Client\Model\BusinessCategory**](../Model/BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesEmailDocumentPost

> \OpenAPI\Client\Model\SendEmailResponse expensesEmailDocumentPost($authorization, $send_email_simple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$send_email_simple = new \OpenAPI\Client\Model\SendEmailSimple(); // \OpenAPI\Client\Model\SendEmailSimple | 

try {
    $result = $apiInstance->expensesEmailDocumentPost($authorization, $send_email_simple);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesEmailDocumentPost: ', $e->getMessage(), PHP_EOL;
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


## expensesGet

> \OpenAPI\Client\Model\AllExpenseDocumentResponse expensesGet($current_page, $page_size, $authorization, $sort_by, $filter)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$current_page = 56; // int | Query current page expenses document. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
$page_size = 56; // int | Query expenses document list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
$authorization = 'Bearer accessToken'; // string | 
$sort_by = 'sort_by_example'; // string | Query sort by expense document. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
$filter = 'filter_example'; // string | Query filter expenses document. <br>Example Pattern: <ex> /expenses?filter=[{'columnName':'Status','columnValue':'processed','columnPredicateOperator':'And'}] </ex>

try {
    $result = $apiInstance->expensesGet($current_page, $page_size, $authorization, $sort_by, $filter);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **int**| Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **page_size** | **int**| Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **string**| Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **string**| Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional]

### Return type

[**\OpenAPI\Client\Model\AllExpenseDocumentResponse**](../Model/AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesIdAttachmentPost

> \OpenAPI\Client\Model\AttachmentResponse expensesIdAttachmentPost($authorization, $id, $file)

Attachment to expenses document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | 
$file = "/path/to/file.txt"; // \SplFileObject | 

try {
    $result = $apiInstance->expensesIdAttachmentPost($authorization, $id, $file);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesIdAttachmentPost: ', $e->getMessage(), PHP_EOL;
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


## expensesIdDelete

> \OpenAPI\Client\Model\DeleteResponse expensesIdDelete($authorization, $id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId

try {
    $result = $apiInstance->expensesIdDelete($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesIdDelete: ', $e->getMessage(), PHP_EOL;
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


## expensesIdGet

> \OpenAPI\Client\Model\AllExpenseDocumentResponse expensesIdGet($authorization, $id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | 

try {
    $result = $apiInstance->expensesIdGet($authorization, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\AllExpenseDocumentResponse**](../Model/AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesIdPaymentPost

> \OpenAPI\Client\Model\ExpenseSimpleDocumentResponse expensesIdPaymentPost($authorization, $id, $payment_paid_document)

Change status is paid expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId หรือ documentId
$payment_paid_document = new \OpenAPI\Client\Model\PaymentPaidDocument(); // \OpenAPI\Client\Model\PaymentPaidDocument | 

try {
    $result = $apiInstance->expensesIdPaymentPost($authorization, $id, $payment_paid_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesIdPaymentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId หรือ documentId |
 **payment_paid_document** | [**\OpenAPI\Client\Model\PaymentPaidDocument**](../Model/PaymentPaidDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\ExpenseSimpleDocumentResponse**](../Model/ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesIdPut

> \OpenAPI\Client\Model\ExpenseInlineDocumentResponse expensesIdPut($authorization, $id, $update_expense_document)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$update_expense_document = new \OpenAPI\Client\Model\UpdateExpenseDocument(); // \OpenAPI\Client\Model\UpdateExpenseDocument | 

try {
    $result = $apiInstance->expensesIdPut($authorization, $id, $update_expense_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesIdPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |
 **update_expense_document** | [**\OpenAPI\Client\Model\UpdateExpenseDocument**](../Model/UpdateExpenseDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\ExpenseInlineDocumentResponse**](../Model/ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesIdStatusStatusIdPost

> \OpenAPI\Client\Model\ExpenseInlineDocumentResponse expensesIdStatusStatusIdPost($authorization, $id, $status_id)

Change status expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$id = 'id_example'; // string | ID เอกสารใช้ recordId
$status_id = 'status_id_example'; // string | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก

try {
    $result = $apiInstance->expensesIdStatusStatusIdPost($authorization, $id, $status_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesIdStatusStatusIdPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **string**| ID เอกสารใช้ recordId |
 **status_id** | **string**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก |

### Return type

[**\OpenAPI\Client\Model\ExpenseInlineDocumentResponse**](../Model/ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesInlinePost

> \OpenAPI\Client\Model\ExpenseInlineDocumentResponse expensesInlinePost($authorization, $expense_inline_document)

Create expenses document inline discount or inline vat.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$expense_inline_document = new \OpenAPI\Client\Model\ExpenseInlineDocument(); // \OpenAPI\Client\Model\ExpenseInlineDocument | 

try {
    $result = $apiInstance->expensesInlinePost($authorization, $expense_inline_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesInlinePost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_inline_document** | [**\OpenAPI\Client\Model\ExpenseInlineDocument**](../Model/ExpenseInlineDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\ExpenseInlineDocumentResponse**](../Model/ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesInlineWithPaymentPost

> \OpenAPI\Client\Model\ExpenseInlineDocumentResponse expensesInlineWithPaymentPost($authorization, $expense_inline_document_with_payment_paid)

Create expenses document inline discount or inline vat with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$expense_inline_document_with_payment_paid = new \OpenAPI\Client\Model\ExpenseInlineDocumentWithPaymentPaid(); // \OpenAPI\Client\Model\ExpenseInlineDocumentWithPaymentPaid | 

try {
    $result = $apiInstance->expensesInlineWithPaymentPost($authorization, $expense_inline_document_with_payment_paid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesInlineWithPaymentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_inline_document_with_payment_paid** | [**\OpenAPI\Client\Model\ExpenseInlineDocumentWithPaymentPaid**](../Model/ExpenseInlineDocumentWithPaymentPaid.md)|  |

### Return type

[**\OpenAPI\Client\Model\ExpenseInlineDocumentResponse**](../Model/ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesPost

> \OpenAPI\Client\Model\ExpenseSimpleDocumentResponse expensesPost($authorization, $expense_simple_document)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$expense_simple_document = new \OpenAPI\Client\Model\ExpenseSimpleDocument(); // \OpenAPI\Client\Model\ExpenseSimpleDocument | 

try {
    $result = $apiInstance->expensesPost($authorization, $expense_simple_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_simple_document** | [**\OpenAPI\Client\Model\ExpenseSimpleDocument**](../Model/ExpenseSimpleDocument.md)|  |

### Return type

[**\OpenAPI\Client\Model\ExpenseSimpleDocumentResponse**](../Model/ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)


## expensesSharedocumentPost

> \OpenAPI\Client\Model\ShareDocumentResponse expensesSharedocumentPost($authorization, $share_document)

Share link expenses document.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$share_document = new \OpenAPI\Client\Model\ShareDocument(); // \OpenAPI\Client\Model\ShareDocument | 

try {
    $result = $apiInstance->expensesSharedocumentPost($authorization, $share_document);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesSharedocumentPost: ', $e->getMessage(), PHP_EOL;
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


## expensesWithPaymentPost

> \OpenAPI\Client\Model\ExpenseSimpleDocumentResponse expensesWithPaymentPost($authorization, $expense_simple_document_with_payment_paid)

Create expenses document with payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


$apiInstance = new OpenAPI\Client\Api\ExpensesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$authorization = 'Bearer accessToken'; // string | 
$expense_simple_document_with_payment_paid = new \OpenAPI\Client\Model\ExpenseSimpleDocumentWithPaymentPaid(); // \OpenAPI\Client\Model\ExpenseSimpleDocumentWithPaymentPaid | 

try {
    $result = $apiInstance->expensesWithPaymentPost($authorization, $expense_simple_document_with_payment_paid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ExpensesApi->expensesWithPaymentPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_simple_document_with_payment_paid** | [**\OpenAPI\Client\Model\ExpenseSimpleDocumentWithPaymentPaid**](../Model/ExpenseSimpleDocumentWithPaymentPaid.md)|  |

### Return type

[**\OpenAPI\Client\Model\ExpenseSimpleDocumentResponse**](../Model/ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../../README.md#documentation-for-models)
[[Back to README]](../../README.md)

