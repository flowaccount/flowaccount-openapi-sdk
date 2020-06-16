# OpenapiClient::TaxInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tax_invoices_email_document_post**](TaxInvoiceApi.md#tax_invoices_email_document_post) | **POST** /tax-invoices/email-document | Send Email tax invoice document
[**tax_invoices_get**](TaxInvoiceApi.md#tax_invoices_get) | **GET** /tax-invoices | Get list all tax invocie documents.
[**tax_invoices_id_attachment_post**](TaxInvoiceApi.md#tax_invoices_id_attachment_post) | **POST** /tax-invoices/{id}/attachment | Add Attachment to tax Invoices document.
[**tax_invoices_id_delete**](TaxInvoiceApi.md#tax_invoices_id_delete) | **DELETE** /tax-invoices/{id} | Delete tax invoices document.
[**tax_invoices_id_get**](TaxInvoiceApi.md#tax_invoices_id_get) | **GET** /tax-invoices/{id} | Get tax invoices document.
[**tax_invoices_id_payment_post**](TaxInvoiceApi.md#tax_invoices_id_payment_post) | **POST** /tax-invoices/{id}/payment | Change paid status of tax-invoice document.
[**tax_invoices_id_put**](TaxInvoiceApi.md#tax_invoices_id_put) | **PUT** /tax-invoices/{id} | Edit tax invoices document.
[**tax_invoices_id_status_status_id_post**](TaxInvoiceApi.md#tax_invoices_id_status_status_id_post) | **POST** /tax-invoices/{id}/status/{statusId} | Change status of tax invoices document.
[**tax_invoices_inline_post**](TaxInvoiceApi.md#tax_invoices_inline_post) | **POST** /tax-invoices/inline | Create tax invocie document with discount and tax inline.
[**tax_invoices_inline_with_payment_post**](TaxInvoiceApi.md#tax_invoices_inline_with_payment_post) | **POST** /tax-invoices/inline/with-payment | Create tax invocie document with discount and tax inline with payment.
[**tax_invoices_post**](TaxInvoiceApi.md#tax_invoices_post) | **POST** /tax-invoices | Create tax invocie document.
[**tax_invoices_sharedocument_post**](TaxInvoiceApi.md#tax_invoices_sharedocument_post) | **POST** /tax-invoices/sharedocument | Share link tax invoice document.
[**tax_invoices_with_payment_post**](TaxInvoiceApi.md#tax_invoices_with_payment_post) | **POST** /tax-invoices/with-payment | Create tax invocie document with payment.



## tax_invoices_email_document_post

> SendEmailResponse tax_invoices_email_document_post(authorization, send_email_coppies)

Send Email tax invoice document

ส่งเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
send_email_coppies = OpenapiClient::SendEmailCoppies.new # SendEmailCoppies | 

begin
  #Send Email tax invoice document
  result = api_instance.tax_invoices_email_document_post(authorization, send_email_coppies)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_email_document_post: #{e}"
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


## tax_invoices_get

> AllDocumentResponse tax_invoices_get(current_page, page_size, authorization, opts)

Get list all tax invocie documents.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
current_page = 56 # Integer | Query current page document tax invoices. <br>Example Pattern: <ex>/tax-invoices?currentPage=1 </ex><ex>/tax-invoices?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document tax invoices list amount per page. <br>Example Pattern: <ex> /tax-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/tax-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/tax-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | 
}

begin
  #Get list all tax invocie documents.
  result = api_instance.tax_invoices_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document tax invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/tax-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/tax-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tax_invoices_id_attachment_post

> AttachmentResponse tax_invoices_id_attachment_post(authorization, id, opts)

Add Attachment to tax Invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
opts = {
  file: File.new('/path/to/file') # File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
}

begin
  #Add Attachment to tax Invoices document.
  result = api_instance.tax_invoices_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_id_attachment_post: #{e}"
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


## tax_invoices_id_delete

> DeleteResponse tax_invoices_id_delete(authorization, id)

Delete tax invoices document.

ลบ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะรอดำเนินการ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete tax invoices document.
  result = api_instance.tax_invoices_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_id_delete: #{e}"
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


## tax_invoices_id_get

> SimpleDocumentResponse tax_invoices_id_get(authorization, id)

Get tax invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | ID เอกสารใช้ recordId
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Get tax invoices document.
  result = api_instance.tax_invoices_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| ID เอกสารใช้ recordId | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tax_invoices_id_payment_post

> InlineDocumentResponse tax_invoices_id_payment_post(authorization, id, payment_receiving_document)

Change paid status of tax-invoice document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId หรือ documentId
payment_receiving_document = OpenapiClient::PaymentReceivingDocument.new # PaymentReceivingDocument | 

begin
  #Change paid status of tax-invoice document.
  result = api_instance.tax_invoices_id_payment_post(authorization, id, payment_receiving_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_id_payment_post: #{e}"
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


## tax_invoices_id_put

> InlineDocumentResponse tax_invoices_id_put(authorization, id, update_inline_document)

Edit tax invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_inline_document = OpenapiClient::UpdateInlineDocument.new # UpdateInlineDocument | 

begin
  #Edit tax invoices document.
  result = api_instance.tax_invoices_id_put(authorization, id, update_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_id_put: #{e}"
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


## tax_invoices_id_status_status_id_post

> InlineDocumentResponse tax_invoices_id_status_status_id_post(authorization, id, status_id)

Change status of tax invoices document.

เปลี่ยนสถานะของเอกสารเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก

begin
  #Change status of tax invoices document.
  result = api_instance.tax_invoices_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_id_status_status_id_post: #{e}"
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


## tax_invoices_inline_post

> InlineDocumentResponse tax_invoices_inline_post(authorization, inline_document)

Create tax invocie document with discount and tax inline.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
inline_document = OpenapiClient::InlineDocument.new # InlineDocument | 

begin
  #Create tax invocie document with discount and tax inline.
  result = api_instance.tax_invoices_inline_post(authorization, inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_inline_post: #{e}"
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


## tax_invoices_inline_with_payment_post

> InlineDocumentResponse tax_invoices_inline_with_payment_post(authorization, inline_document_with_payment_receiving)

Create tax invocie document with discount and tax inline with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
inline_document_with_payment_receiving = OpenapiClient::InlineDocumentWithPaymentReceiving.new # InlineDocumentWithPaymentReceiving | 

begin
  #Create tax invocie document with discount and tax inline with payment.
  result = api_instance.tax_invoices_inline_with_payment_post(authorization, inline_document_with_payment_receiving)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_inline_with_payment_post: #{e}"
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


## tax_invoices_post

> SimpleDocumentResponse tax_invoices_post(authorization, simple_document)

Create tax invocie document.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
simple_document = OpenapiClient::SimpleDocument.new # SimpleDocument | 

begin
  #Create tax invocie document.
  result = api_instance.tax_invoices_post(authorization, simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_post: #{e}"
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


## tax_invoices_sharedocument_post

> ShareDocumentResponse tax_invoices_sharedocument_post(authorization, share_document)

Share link tax invoice document.

แชร์ลิงค์ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link tax invoice document.
  result = api_instance.tax_invoices_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_sharedocument_post: #{e}"
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


## tax_invoices_with_payment_post

> SimpleDocumentResponse tax_invoices_with_payment_post(authorization, simple_document_with_payment_receiving)

Create tax invocie document with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::TaxInvoiceApi.new
authorization = 'Bearer accessToken' # String | 
simple_document_with_payment_receiving = OpenapiClient::SimpleDocumentWithPaymentReceiving.new # SimpleDocumentWithPaymentReceiving | 

begin
  #Create tax invocie document with payment.
  result = api_instance.tax_invoices_with_payment_post(authorization, simple_document_with_payment_receiving)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling TaxInvoiceApi->tax_invoices_with_payment_post: #{e}"
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

