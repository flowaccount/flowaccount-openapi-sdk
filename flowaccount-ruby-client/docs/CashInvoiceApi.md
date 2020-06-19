# OpenapiClient::CashInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cash_invoices_email_document_post**](CashInvoiceApi.md#cash_invoices_email_document_post) | **POST** /cash-invoices/email-document | Send email cash invoices document.
[**cash_invoices_get**](CashInvoiceApi.md#cash_invoices_get) | **GET** /cash-invoices | Get all cash invoices documents
[**cash_invoices_id_attachment_post**](CashInvoiceApi.md#cash_invoices_id_attachment_post) | **POST** /cash-invoices/{id}/attachment | Attachment cash invoices document.
[**cash_invoices_id_delete**](CashInvoiceApi.md#cash_invoices_id_delete) | **DELETE** /cash-invoices/{id} | Delete cash invoices document.
[**cash_invoices_id_get**](CashInvoiceApi.md#cash_invoices_id_get) | **GET** /cash-invoices/{id} | Get cash invoices document.
[**cash_invoices_id_payment_post**](CashInvoiceApi.md#cash_invoices_id_payment_post) | **POST** /cash-invoices/{id}/payment | Change status is paid cash invoices document.
[**cash_invoices_id_put**](CashInvoiceApi.md#cash_invoices_id_put) | **PUT** /cash-invoices/{id} | Edit cash invoices document.
[**cash_invoices_id_status_status_id_post**](CashInvoiceApi.md#cash_invoices_id_status_status_id_post) | **POST** /cash-invoices/{id}/status/{statusId} | Change status cash invoices document.
[**cash_invoices_inline_post**](CashInvoiceApi.md#cash_invoices_inline_post) | **POST** /cash-invoices/inline | Create cash invoices document inline discount or inline vat.
[**cash_invoices_inline_with_payment_post**](CashInvoiceApi.md#cash_invoices_inline_with_payment_post) | **POST** /cash-invoices/inline/with-payment | Create cash invoices document inline discount or inline vat with payment.
[**cash_invoices_post**](CashInvoiceApi.md#cash_invoices_post) | **POST** /cash-invoices | Create cash invoices document.
[**cash_invoices_sharedocument_post**](CashInvoiceApi.md#cash_invoices_sharedocument_post) | **POST** /cash-invoices/sharedocument | Share link cash invoices document.
[**cash_invoices_with_payment_post**](CashInvoiceApi.md#cash_invoices_with_payment_post) | **POST** /cash-invoices/with-payment | Create cash invoices document with payment.



## cash_invoices_email_document_post

> SendEmailResponse cash_invoices_email_document_post(authorization, send_email_coppies)

Send email cash invoices document.

ส่งเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
send_email_coppies = OpenapiClient::SendEmailCoppies.new # SendEmailCoppies | 

begin
  #Send email cash invoices document.
  result = api_instance.cash_invoices_email_document_post(authorization, send_email_coppies)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_email_document_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **send_email_coppies** | [**SendEmailCoppies**](SendEmailCoppies.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cash_invoices_get

> AllDocumentResponse cash_invoices_get(current_page, page_size, authorization, opts)

Get all cash invoices documents

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
current_page = 56 # Integer | Query current page document cash invoices. <br>Example Pattern: <ex>/cash-invoices?currentPage=1 </ex><ex>/cash-invoices?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/cash-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | Query filter cash-invoices. <br>Example Pattern: <ex> /cash-invoices?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
}

begin
  #Get all cash invoices documents
  result = api_instance.cash_invoices_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document cash invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/cash-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/cash-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter cash-invoices. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cash_invoices_id_attachment_post

> AttachmentResponse cash_invoices_id_attachment_post(authorization, id, opts)

Attachment cash invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
opts = {
  file: File.new('/path/to/file') # File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
}

begin
  #Attachment cash invoices document.
  result = api_instance.cash_invoices_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_id_attachment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ | 
 **file** | **File**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## cash_invoices_id_delete

> DeleteResponse cash_invoices_id_delete(authorization, id)

Delete cash invoices document.

ลบ เอกสารใบกำกับ/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete cash invoices document.
  result = api_instance.cash_invoices_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_id_delete: #{e}"
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


## cash_invoices_id_get

> InlineDocumentResponse cash_invoices_id_get(authorization, id)

Get cash invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | 

begin
  #Get cash invoices document.
  result = api_instance.cash_invoices_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cash_invoices_id_payment_post

> InlineDocumentResponse cash_invoices_id_payment_post(authorization, id, payment_receiving_document)

Change status is paid cash invoices document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId หรือ documentId
payment_receiving_document = OpenapiClient::PaymentReceivingDocument.new # PaymentReceivingDocument | 

begin
  #Change status is paid cash invoices document.
  result = api_instance.cash_invoices_id_payment_post(authorization, id, payment_receiving_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_id_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | 
 **payment_receiving_document** | [**PaymentReceivingDocument**](PaymentReceivingDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cash_invoices_id_put

> InlineDocumentResponse cash_invoices_id_put(authorization, id, update_inline_document)

Edit cash invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_inline_document = OpenapiClient::UpdateInlineDocument.new # UpdateInlineDocument | 

begin
  #Edit cash invoices document.
  result = api_instance.cash_invoices_id_put(authorization, id, update_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_id_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **update_inline_document** | [**UpdateInlineDocument**](UpdateInlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cash_invoices_id_status_status_id_post

> InlineDocumentResponse cash_invoices_id_status_status_id_post(authorization, id, status_id)

Change status cash invoices document.

เปลี่ยนสถานะของเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก

begin
  #Change status cash invoices document.
  result = api_instance.cash_invoices_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cash_invoices_inline_post

> InlineDocumentResponse cash_invoices_inline_post(authorization, inline_document)

Create cash invoices document inline discount or inline vat.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
inline_document = OpenapiClient::InlineDocument.new # InlineDocument | 

begin
  #Create cash invoices document inline discount or inline vat.
  result = api_instance.cash_invoices_inline_post(authorization, inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_inline_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **inline_document** | [**InlineDocument**](InlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cash_invoices_inline_with_payment_post

> InlineDocumentResponse cash_invoices_inline_with_payment_post(authorization, inline_document_with_payment_receiving)

Create cash invoices document inline discount or inline vat with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
inline_document_with_payment_receiving = OpenapiClient::InlineDocumentWithPaymentReceiving.new # InlineDocumentWithPaymentReceiving | 

begin
  #Create cash invoices document inline discount or inline vat with payment.
  result = api_instance.cash_invoices_inline_with_payment_post(authorization, inline_document_with_payment_receiving)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_inline_with_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **inline_document_with_payment_receiving** | [**InlineDocumentWithPaymentReceiving**](InlineDocumentWithPaymentReceiving.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cash_invoices_post

> SimpleDocumentResponse cash_invoices_post(authorization, simple_document)

Create cash invoices document.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
simple_document = OpenapiClient::SimpleDocument.new # SimpleDocument | 

begin
  #Create cash invoices document.
  result = api_instance.cash_invoices_post(authorization, simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document** | [**SimpleDocument**](SimpleDocument.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cash_invoices_sharedocument_post

> ShareDocumentResponse cash_invoices_sharedocument_post(authorization, share_document)

Share link cash invoices document.

แชร์ลิงค์ เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link cash invoices document.
  result = api_instance.cash_invoices_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_sharedocument_post: #{e}"
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


## cash_invoices_with_payment_post

> SimpleDocumentResponse cash_invoices_with_payment_post(authorization, simple_document_with_payment_receiving)

Create cash invoices document with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CashInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
simple_document_with_payment_receiving = OpenapiClient::SimpleDocumentWithPaymentReceiving.new # SimpleDocumentWithPaymentReceiving | 

begin
  #Create cash invoices document with payment.
  result = api_instance.cash_invoices_with_payment_post(authorization, simple_document_with_payment_receiving)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CashInvoiceApi->cash_invoices_with_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document_with_payment_receiving** | [**SimpleDocumentWithPaymentReceiving**](SimpleDocumentWithPaymentReceiving.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

