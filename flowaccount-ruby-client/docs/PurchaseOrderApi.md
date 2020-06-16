# OpenapiClient::PurchaseOrderApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchases_orders_email_document_post**](PurchaseOrderApi.md#purchases_orders_email_document_post) | **POST** /purchases-orders/email-document | Send email purchase order document.
[**purchases_orders_get**](PurchaseOrderApi.md#purchases_orders_get) | **GET** /purchases-orders | Get list all purchase order documents.
[**purchases_orders_id_attachment_post**](PurchaseOrderApi.md#purchases_orders_id_attachment_post) | **POST** /purchases-orders/{id}/attachment | Add Attachment to purchase order document.
[**purchases_orders_id_delete**](PurchaseOrderApi.md#purchases_orders_id_delete) | **DELETE** /purchases-orders/{id} | Delete purchase order document.
[**purchases_orders_id_get**](PurchaseOrderApi.md#purchases_orders_id_get) | **GET** /purchases-orders/{id} | Get purchase order document.
[**purchases_orders_id_put**](PurchaseOrderApi.md#purchases_orders_id_put) | **PUT** /purchases-orders/{id} | Edit purchase order document.
[**purchases_orders_id_status_status_id_post**](PurchaseOrderApi.md#purchases_orders_id_status_status_id_post) | **POST** /purchases-orders/{id}/status/{statusId} | Change status of purchase order document.
[**purchases_orders_inline_post**](PurchaseOrderApi.md#purchases_orders_inline_post) | **POST** /purchases-orders/inline | Create purchase order document with discount and tax inline.
[**purchases_orders_post**](PurchaseOrderApi.md#purchases_orders_post) | **POST** /purchases-orders | Create purchase order document.
[**purchases_orders_sharedocument_post**](PurchaseOrderApi.md#purchases_orders_sharedocument_post) | **POST** /purchases-orders/sharedocument | Share link purchase order document.



## purchases_orders_email_document_post

> SendEmailResponse purchases_orders_email_document_post(authorization, send_email_coppies)

Send email purchase order document.

ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
send_email_coppies = OpenapiClient::SendEmailCoppies.new # SendEmailCoppies | 

begin
  #Send email purchase order document.
  result = api_instance.purchases_orders_email_document_post(authorization, send_email_coppies)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_email_document_post: #{e}"
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


## purchases_orders_get

> AllDocumentResponse purchases_orders_get(current_page, page_size, authorization, opts)

Get list all purchase order documents.

เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
current_page = 56 # Integer | Query current page document purchase orders. <br>Example Pattern: <ex>/purchases-orders?currentPage=1 </ex><ex>/purchases-orders?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases-orders?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | 
}

begin
  #Get list all purchase order documents.
  result = api_instance.purchases_orders_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document purchase orders. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases-orders?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases-orders?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchases_orders_id_attachment_post

> AttachmentResponse purchases_orders_id_attachment_post(authorization, id, opts)

Add Attachment to purchase order document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
opts = {
  file: File.new('/path/to/file') # File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
}

begin
  #Add Attachment to purchase order document.
  result = api_instance.purchases_orders_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_id_attachment_post: #{e}"
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


## purchases_orders_id_delete

> DeleteResponse purchases_orders_id_delete(authorization, id)

Delete purchase order document.

ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete purchase order document.
  result = api_instance.purchases_orders_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_id_delete: #{e}"
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


## purchases_orders_id_get

> InlineDocumentResponse purchases_orders_id_get(authorization, id)

Get purchase order document.

เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Get purchase order document.
  result = api_instance.purchases_orders_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_id_get: #{e}"
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


## purchases_orders_id_put

> InlineDocumentResponse purchases_orders_id_put(authorization, id, update_inline_document)

Edit purchase order document.

แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_inline_document = OpenapiClient::UpdateInlineDocument.new # UpdateInlineDocument | 

begin
  #Edit purchase order document.
  result = api_instance.purchases_orders_id_put(authorization, id, update_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_id_put: #{e}"
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


## purchases_orders_id_status_status_id_post

> InlineDocumentResponse purchases_orders_id_status_status_id_post(authorization, id, status_id)

Change status of purchase order document.

เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> void = ยกเลิก

begin
  #Change status of purchase order document.
  result = api_instance.purchases_orders_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purchases_orders_inline_post

> InlineDocumentResponse purchases_orders_inline_post(authorization, inline_document)

Create purchase order document with discount and tax inline.

สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
inline_document = OpenapiClient::InlineDocument.new # InlineDocument | 

begin
  #Create purchase order document with discount and tax inline.
  result = api_instance.purchases_orders_inline_post(authorization, inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_inline_post: #{e}"
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


## purchases_orders_post

> SimpleDocumentResponse purchases_orders_post(authorization, simple_document)

Create purchase order document.

สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
simple_document = OpenapiClient::SimpleDocument.new # SimpleDocument | 

begin
  #Create purchase order document.
  result = api_instance.purchases_orders_post(authorization, simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_post: #{e}"
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


## purchases_orders_sharedocument_post

> ShareDocumentResponse purchases_orders_sharedocument_post(authorization, share_document)

Share link purchase order document.

แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PurchaseOrderApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link purchase order document.
  result = api_instance.purchases_orders_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PurchaseOrderApi->purchases_orders_sharedocument_post: #{e}"
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

