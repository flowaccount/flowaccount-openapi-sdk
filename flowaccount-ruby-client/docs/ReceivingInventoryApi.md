# OpenapiClient::ReceivingInventoryApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchases_email_document_post**](ReceivingInventoryApi.md#purchases_email_document_post) | **POST** /purchases/email-document | Send email receiving inventory document.
[**purchases_get**](ReceivingInventoryApi.md#purchases_get) | **GET** /purchases | Get list all receiving inventory documents.
[**purchases_id_attachment_post**](ReceivingInventoryApi.md#purchases_id_attachment_post) | **POST** /purchases/{id}/attachment | Add Attachment to receiving inventory document.
[**purchases_id_delete**](ReceivingInventoryApi.md#purchases_id_delete) | **DELETE** /purchases/{id} | Delete receiving inventory document.
[**purchases_id_get**](ReceivingInventoryApi.md#purchases_id_get) | **GET** /purchases/{id} | Get receiving inventory document.
[**purchases_id_payment_post**](ReceivingInventoryApi.md#purchases_id_payment_post) | **POST** /purchases/{id}/payment | Change paid status of receiving inventory document.
[**purchases_id_put**](ReceivingInventoryApi.md#purchases_id_put) | **PUT** /purchases/{id} | Edit receiving inventory document.
[**purchases_id_status_status_id_post**](ReceivingInventoryApi.md#purchases_id_status_status_id_post) | **POST** /purchases/{id}/status/{statusId} | Change status of receiving inventory document.
[**purchases_inline_post**](ReceivingInventoryApi.md#purchases_inline_post) | **POST** /purchases/inline | Create receiving inventory document with discount and tax inline.
[**purchases_inline_with_payment_post**](ReceivingInventoryApi.md#purchases_inline_with_payment_post) | **POST** /purchases/inline/with-payment | Create receiving inventory document with discount and tax inline with payment.
[**purchases_post**](ReceivingInventoryApi.md#purchases_post) | **POST** /purchases | Create receiving inventory document.
[**purchases_sharedocument_post**](ReceivingInventoryApi.md#purchases_sharedocument_post) | **POST** /purchases/sharedocument | Share link receiving inventory document.
[**purchases_with_payment_post**](ReceivingInventoryApi.md#purchases_with_payment_post) | **POST** /purchases/with-payment | Create receiving inventory document with payment.



## purchases_email_document_post

> SendEmailResponse purchases_email_document_post(authorization, send_email_coppies)

Send email receiving inventory document.

ส่งเอกสารใบรับสินค้า ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
send_email_coppies = OpenapiClient::SendEmailCoppies.new # SendEmailCoppies | 

begin
  #Send email receiving inventory document.
  result = api_instance.purchases_email_document_post(authorization, send_email_coppies)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_email_document_post: #{e}"
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


## purchases_get

> AllDocumentResponse purchases_get(current_page, page_size, authorization, opts)

Get list all receiving inventory documents.

เรียกดูข้อมูลเอกสารใบรับสินค้าทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
current_page = 56 # Integer | Query current page document purchases. <br>Example Pattern: <ex>/purchases?currentPage=1 </ex><ex>/purchases?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | 
}

begin
  #Get list all receiving inventory documents.
  result = api_instance.purchases_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document purchases. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchases_id_attachment_post

> AttachmentResponse purchases_id_attachment_post(authorization, id, opts)

Add Attachment to receiving inventory document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
opts = {
  file: File.new('/path/to/file') # File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
}

begin
  #Add Attachment to receiving inventory document.
  result = api_instance.purchases_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_id_attachment_post: #{e}"
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


## purchases_id_delete

> DeleteResponse purchases_id_delete(authorization, id)

Delete receiving inventory document.

ลบ เอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete receiving inventory document.
  result = api_instance.purchases_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_id_delete: #{e}"
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


## purchases_id_get

> InlineDocumentResponse purchases_id_get(authorization, id)

Get receiving inventory document.

เรียกดูข้อมูลเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Get receiving inventory document.
  result = api_instance.purchases_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_id_get: #{e}"
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


## purchases_id_payment_post

> InlineDocumentResponse purchases_id_payment_post(authorization, id, payment_paid_document)

Change paid status of receiving inventory document.

ขำระเงิน เอกสารใบรับสินค้าเปลี่ยนสถานะเป็น ชำระเงินแล้ว

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId หรือ documentId
payment_paid_document = OpenapiClient::PaymentPaidDocument.new # PaymentPaidDocument | 

begin
  #Change paid status of receiving inventory document.
  result = api_instance.purchases_id_payment_post(authorization, id, payment_paid_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_id_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | 
 **payment_paid_document** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## purchases_id_put

> InlineDocumentResponse purchases_id_put(authorization, id, update_inline_document)

Edit receiving inventory document.

แก้ไขข้อมูลเอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_inline_document = OpenapiClient::UpdateInlineDocument.new # UpdateInlineDocument | 

begin
  #Edit receiving inventory document.
  result = api_instance.purchases_id_put(authorization, id, update_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_id_put: #{e}"
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


## purchases_id_status_status_id_post

> InlineDocumentResponse purchases_id_status_status_id_post(authorization, id, status_id)

Change status of receiving inventory document.

เปลี่ยนสถานะของเอกสารใบรับสินค้า สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> void = ยกเลิก

begin
  #Change status of receiving inventory document.
  result = api_instance.purchases_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchases_inline_post

> InlineDocumentResponse purchases_inline_post(authorization, inline_document)

Create receiving inventory document with discount and tax inline.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
inline_document = OpenapiClient::InlineDocument.new # InlineDocument | 

begin
  #Create receiving inventory document with discount and tax inline.
  result = api_instance.purchases_inline_post(authorization, inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_inline_post: #{e}"
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


## purchases_inline_with_payment_post

> InlineDocumentResponse purchases_inline_with_payment_post(authorization, inline_document_with_payment_paid)

Create receiving inventory document with discount and tax inline with payment.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
inline_document_with_payment_paid = OpenapiClient::InlineDocumentWithPaymentPaid.new # InlineDocumentWithPaymentPaid | 

begin
  #Create receiving inventory document with discount and tax inline with payment.
  result = api_instance.purchases_inline_with_payment_post(authorization, inline_document_with_payment_paid)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_inline_with_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **inline_document_with_payment_paid** | [**InlineDocumentWithPaymentPaid**](InlineDocumentWithPaymentPaid.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## purchases_post

> SimpleDocumentResponse purchases_post(authorization, simple_document)

Create receiving inventory document.

สร้างเอกสารใบรับสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
simple_document = OpenapiClient::SimpleDocument.new # SimpleDocument | 

begin
  #Create receiving inventory document.
  result = api_instance.purchases_post(authorization, simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_post: #{e}"
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


## purchases_sharedocument_post

> ShareDocumentResponse purchases_sharedocument_post(authorization, share_document)

Share link receiving inventory document.

แชร์ลิงค์ เอกสารใบรับสินค้าที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link receiving inventory document.
  result = api_instance.purchases_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_sharedocument_post: #{e}"
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


## purchases_with_payment_post

> SimpleDocumentResponse purchases_with_payment_post(authorization, simple_document_with_payment_paid)

Create receiving inventory document with payment.

สร้างเอกสารใบรับสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ReceivingInventoryApi.new
authorization = 'Bearer accessToken' # String | 
simple_document_with_payment_paid = OpenapiClient::SimpleDocumentWithPaymentPaid.new # SimpleDocumentWithPaymentPaid | 

begin
  #Create receiving inventory document with payment.
  result = api_instance.purchases_with_payment_post(authorization, simple_document_with_payment_paid)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ReceivingInventoryApi->purchases_with_payment_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document_with_payment_paid** | [**SimpleDocumentWithPaymentPaid**](SimpleDocumentWithPaymentPaid.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

