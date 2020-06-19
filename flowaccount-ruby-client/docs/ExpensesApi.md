# OpenapiClient::ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expenses_categories_accounting_get**](ExpensesApi.md#expenses_categories_accounting_get) | **GET** /expenses/categories/accounting | Accounting categories expenses document.
[**expenses_categories_business_get**](ExpensesApi.md#expenses_categories_business_get) | **GET** /expenses/categories/business | Business categories expenses document.
[**expenses_email_document_post**](ExpensesApi.md#expenses_email_document_post) | **POST** /expenses/email-document | Send email expenses document.
[**expenses_get**](ExpensesApi.md#expenses_get) | **GET** /expenses | Get list all expenses documents.
[**expenses_id_attachment_post**](ExpensesApi.md#expenses_id_attachment_post) | **POST** /expenses/{id}/attachment | Attachment to expenses document.
[**expenses_id_delete**](ExpensesApi.md#expenses_id_delete) | **DELETE** /expenses/{id} | Delete expenses document.
[**expenses_id_get**](ExpensesApi.md#expenses_id_get) | **GET** /expenses/{id} | Get expenses document.
[**expenses_id_payment_post**](ExpensesApi.md#expenses_id_payment_post) | **POST** /expenses/{id}/payment | Change status is paid expenses document.
[**expenses_id_put**](ExpensesApi.md#expenses_id_put) | **PUT** /expenses/{id} | Edit expenses document.
[**expenses_id_status_status_id_post**](ExpensesApi.md#expenses_id_status_status_id_post) | **POST** /expenses/{id}/status/{statusId} | Change status expenses document.
[**expenses_inline_post**](ExpensesApi.md#expenses_inline_post) | **POST** /expenses/inline | Create expenses document inline discount or inline vat.
[**expenses_inline_with_payment_post**](ExpensesApi.md#expenses_inline_with_payment_post) | **POST** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
[**expenses_post**](ExpensesApi.md#expenses_post) | **POST** /expenses | Create expenses document.
[**expenses_sharedocument_post**](ExpensesApi.md#expenses_sharedocument_post) | **POST** /expenses/sharedocument | Share link expenses document.
[**expenses_with_payment_post**](ExpensesApi.md#expenses_with_payment_post) | **POST** /expenses/with-payment | Create expenses document with payment.



## expenses_categories_accounting_get

> BusinessCategory expenses_categories_accounting_get(authorization)

Accounting categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 

begin
  #Accounting categories expenses document.
  result = api_instance.expenses_categories_accounting_get(authorization)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_categories_accounting_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expenses_categories_business_get

> BusinessCategory expenses_categories_business_get(authorization)

Business categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 

begin
  #Business categories expenses document.
  result = api_instance.expenses_categories_business_get(authorization)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_categories_business_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expenses_email_document_post

> SendEmailResponse expenses_email_document_post(authorization, send_email_simple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
send_email_simple = OpenapiClient::SendEmailSimple.new # SendEmailSimple | 

begin
  #Send email expenses document.
  result = api_instance.expenses_email_document_post(authorization, send_email_simple)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_email_document_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **send_email_simple** | [**SendEmailSimple**](SendEmailSimple.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expenses_get

> AllExpenseDocumentResponse expenses_get(current_page, page_size, authorization, opts)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
current_page = 56 # Integer | Query current page expenses document. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query expenses document list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query sort by expense document. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | Query filter expenses document. <br>Example Pattern: <ex> /expenses?filter=[{'columnName':'Status','columnValue':'processed','columnPredicateOperator':'And'}] </ex>
}

begin
  #Get list all expenses documents.
  result = api_instance.expenses_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expenses_id_attachment_post

> AttachmentResponse expenses_id_attachment_post(authorization, id, opts)

Attachment to expenses document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | 
opts = {
  file: File.new('/path/to/file') # File | 
}

begin
  #Attachment to expenses document.
  result = api_instance.expenses_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_id_attachment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**|  | 
 **file** | **File**|  | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## expenses_id_delete

> DeleteResponse expenses_id_delete(authorization, id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete expenses document.
  result = api_instance.expenses_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_id_delete: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expenses_id_get

> AllExpenseDocumentResponse expenses_id_get(authorization, id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | 

begin
  #Get expenses document.
  result = api_instance.expenses_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**|  | 

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expenses_id_payment_post

> ExpenseSimpleDocumentResponse expenses_id_payment_post(authorization, id, payment_paid_document)

Change status is paid expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId หรือ documentId
payment_paid_document = OpenapiClient::PaymentPaidDocument.new # PaymentPaidDocument | 

begin
  #Change status is paid expenses document.
  result = api_instance.expenses_id_payment_post(authorization, id, payment_paid_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_id_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | 
 **payment_paid_document** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expenses_id_put

> ExpenseInlineDocumentResponse expenses_id_put(authorization, id, update_expense_document)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_expense_document = OpenapiClient::UpdateExpenseDocument.new # UpdateExpenseDocument | 

begin
  #Edit expenses document.
  result = api_instance.expenses_id_put(authorization, id, update_expense_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_id_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **update_expense_document** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expenses_id_status_status_id_post

> ExpenseInlineDocumentResponse expenses_id_status_status_id_post(authorization, id, status_id)

Change status expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก

begin
  #Change status expenses document.
  result = api_instance.expenses_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expenses_inline_post

> ExpenseInlineDocumentResponse expenses_inline_post(authorization, expense_inline_document)

Create expenses document inline discount or inline vat.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
expense_inline_document = OpenapiClient::ExpenseInlineDocument.new # ExpenseInlineDocument | 

begin
  #Create expenses document inline discount or inline vat.
  result = api_instance.expenses_inline_post(authorization, expense_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_inline_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_inline_document** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expenses_inline_with_payment_post

> ExpenseInlineDocumentResponse expenses_inline_with_payment_post(authorization, expense_inline_document_with_payment_paid)

Create expenses document inline discount or inline vat with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
expense_inline_document_with_payment_paid = OpenapiClient::ExpenseInlineDocumentWithPaymentPaid.new # ExpenseInlineDocumentWithPaymentPaid | 

begin
  #Create expenses document inline discount or inline vat with payment.
  result = api_instance.expenses_inline_with_payment_post(authorization, expense_inline_document_with_payment_paid)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_inline_with_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_inline_document_with_payment_paid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expenses_post

> ExpenseSimpleDocumentResponse expenses_post(authorization, expense_simple_document)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
expense_simple_document = OpenapiClient::ExpenseSimpleDocument.new # ExpenseSimpleDocument | 

begin
  #Create expenses document.
  result = api_instance.expenses_post(authorization, expense_simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_simple_document** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expenses_sharedocument_post

> ShareDocumentResponse expenses_sharedocument_post(authorization, share_document)

Share link expenses document.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link expenses document.
  result = api_instance.expenses_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_sharedocument_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **share_document** | [**ShareDocument**](ShareDocument.md)|  | 

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expenses_with_payment_post

> ExpenseSimpleDocumentResponse expenses_with_payment_post(authorization, expense_simple_document_with_payment_paid)

Create expenses document with payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ExpensesApi.new
authorization = 'Bearer accessToken' # String | 
expense_simple_document_with_payment_paid = OpenapiClient::ExpenseSimpleDocumentWithPaymentPaid.new # ExpenseSimpleDocumentWithPaymentPaid | 

begin
  #Create expenses document with payment.
  result = api_instance.expenses_with_payment_post(authorization, expense_simple_document_with_payment_paid)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ExpensesApi->expenses_with_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_simple_document_with_payment_paid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

