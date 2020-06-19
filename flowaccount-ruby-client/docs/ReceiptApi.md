# OpenapiClient::ReceiptApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receipts_email_document_post**](ReceiptApi.md#receipts_email_document_post) | **POST** /receipts/email-document | Send email receipt document.
[**receipts_get**](ReceiptApi.md#receipts_get) | **GET** /receipts | Get all receipt documents
[**receipts_id_attachment_post**](ReceiptApi.md#receipts_id_attachment_post) | **POST** /receipts/{id}/attachment | Attachment receipt document.
[**receipts_id_delete**](ReceiptApi.md#receipts_id_delete) | **DELETE** /receipts/{id} | Delete receipt document.
[**receipts_id_get**](ReceiptApi.md#receipts_id_get) | **GET** /receipts/{id} | Get receipt document.
[**receipts_id_payment_post**](ReceiptApi.md#receipts_id_payment_post) | **POST** /receipts/{id}/payment | Change status is paid receipt document.
[**receipts_id_put**](ReceiptApi.md#receipts_id_put) | **PUT** /receipts/{id} | Edit receipt document.
[**receipts_id_status_status_id_post**](ReceiptApi.md#receipts_id_status_status_id_post) | **POST** /receipts/{id}/status/{statusId} | Change status receipt document.
[**receipts_inline_post**](ReceiptApi.md#receipts_inline_post) | **POST** /receipts/inline | Create receipt document inline discount or inline vat.
[**receipts_inline_with_payment_post**](ReceiptApi.md#receipts_inline_with_payment_post) | **POST** /receipts/inline/with-payment | Create receipt document inline discount or inline vat with payment.
[**receipts_post**](ReceiptApi.md#receipts_post) | **POST** /receipts | Create receipt document.
[**receipts_sharedocument_post**](ReceiptApi.md#receipts_sharedocument_post) | **POST** /receipts/sharedocument | Share link receipt document.
[**receipts_with_payment_post**](ReceiptApi.md#receipts_with_payment_post) | **POST** /receipts/with-payment | Create receipt document with payment.



## receipts_email_document_post

> SendEmailResponse receipts_email_document_post(authorization, send_email_coppies)

Send email receipt document.

ส่งเอกสารใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
send_email_coppies = OpenapiClient::SendEmailCoppies.new # SendEmailCoppies | 

begin
  #Send email receipt document.
  result = api_instance.receipts_email_document_post(authorization, send_email_coppies)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_email_document_post: #{e}"
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


## receipts_get

> AllDocumentResponse receipts_get(current_page, page_size, authorization, opts)

Get all receipt documents

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
current_page = 56 # Integer | Query current page document receipts. <br>Example Pattern: <ex>/receipts?currentPage=1 </ex><ex>/receipts?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/receipts?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | Query filter receipts. <br>Example Pattern: <ex> /receipts?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
}

begin
  #Get all receipt documents
  result = api_instance.receipts_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document receipts. &lt;br&gt;Example Pattern: &lt;ex&gt;/receipts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/receipts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter receipts. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receipts_id_attachment_post

> AttachmentResponse receipts_id_attachment_post(authorization, id, opts)

Attachment receipt document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
opts = {
  file: File.new('/path/to/file') # File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
}

begin
  #Attachment receipt document.
  result = api_instance.receipts_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_id_attachment_post: #{e}"
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


## receipts_id_delete

> DeleteResponse receipts_id_delete(authorization, id)

Delete receipt document.

ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete receipt document.
  result = api_instance.receipts_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_id_delete: #{e}"
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


## receipts_id_get

> InlineDocumentResponse receipts_id_get(authorization, id)

Get receipt document.

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Get receipt document.
  result = api_instance.receipts_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receipts_id_payment_post

> InlineDocumentResponse receipts_id_payment_post(authorization, id, payment_receiving_document)

Change status is paid receipt document.

เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId หรือ documentId
payment_receiving_document = OpenapiClient::PaymentReceivingDocument.new # PaymentReceivingDocument | 

begin
  #Change status is paid receipt document.
  result = api_instance.receipts_id_payment_post(authorization, id, payment_receiving_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_id_payment_post: #{e}"
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


## receipts_id_put

> InlineDocumentResponse receipts_id_put(authorization, id, update_inline_document)

Edit receipt document.

แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_inline_document = OpenapiClient::UpdateInlineDocument.new # UpdateInlineDocument | 

begin
  #Edit receipt document.
  result = api_instance.receipts_id_put(authorization, id, update_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_id_put: #{e}"
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


## receipts_id_status_status_id_post

> InlineDocumentResponse receipts_id_status_status_id_post(authorization, id, status_id)

Change status receipt document.

เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 1 สถานะ <br> void = ยกเลิก

begin
  #Change status receipt document.
  result = api_instance.receipts_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 1 สถานะ &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receipts_inline_post

> InlineDocumentResponse receipts_inline_post(authorization, inline_document)

Create receipt document inline discount or inline vat.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
inline_document = OpenapiClient::InlineDocument.new # InlineDocument | 

begin
  #Create receipt document inline discount or inline vat.
  result = api_instance.receipts_inline_post(authorization, inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_inline_post: #{e}"
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


## receipts_inline_with_payment_post

> InlineDocumentResponse receipts_inline_with_payment_post(authorization, inline_document_with_payment_receiving)

Create receipt document inline discount or inline vat with payment.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
inline_document_with_payment_receiving = OpenapiClient::InlineDocumentWithPaymentReceiving.new # InlineDocumentWithPaymentReceiving | 

begin
  #Create receipt document inline discount or inline vat with payment.
  result = api_instance.receipts_inline_with_payment_post(authorization, inline_document_with_payment_receiving)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_inline_with_payment_post: #{e}"
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


## receipts_post

> SimpleDocumentResponse receipts_post(authorization, simple_document)

Create receipt document.

สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
simple_document = OpenapiClient::SimpleDocument.new # SimpleDocument | 

begin
  #Create receipt document.
  result = api_instance.receipts_post(authorization, simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_post: #{e}"
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


## receipts_sharedocument_post

> ShareDocumentResponse receipts_sharedocument_post(authorization, share_document)

Share link receipt document.

แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link receipt document.
  result = api_instance.receipts_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_sharedocument_post: #{e}"
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


## receipts_with_payment_post

> SimpleDocumentResponse receipts_with_payment_post(authorization, simple_document_with_payment_receiving)

Create receipt document with payment.

สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceiptApi.new
authorization = 'Bearer accessToken' # String | 
simple_document_with_payment_receiving = OpenapiClient::SimpleDocumentWithPaymentReceiving.new # SimpleDocumentWithPaymentReceiving | 

begin
  #Create receipt document with payment.
  result = api_instance.receipts_with_payment_post(authorization, simple_document_with_payment_receiving)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceiptApi->receipts_with_payment_post: #{e}"
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

