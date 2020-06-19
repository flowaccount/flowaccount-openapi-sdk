# OpenapiClient::QuotationsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotations_email_document_post**](QuotationsApi.md#quotations_email_document_post) | **POST** /quotations/email-document | Send email quotations document.
[**quotations_get**](QuotationsApi.md#quotations_get) | **GET** /quotations | Get all quotations documents.
[**quotations_id_attachment_post**](QuotationsApi.md#quotations_id_attachment_post) | **POST** /quotations/{id}/attachment | Attachment quotations document.
[**quotations_id_delete**](QuotationsApi.md#quotations_id_delete) | **DELETE** /quotations/{id} | Delete quotations document.
[**quotations_id_get**](QuotationsApi.md#quotations_id_get) | **GET** /quotations/{id} | Get quotations document.
[**quotations_id_put**](QuotationsApi.md#quotations_id_put) | **PUT** /quotations/{id} | Edit quotations document.
[**quotations_id_status_status_id_post**](QuotationsApi.md#quotations_id_status_status_id_post) | **POST** /quotations/{id}/status/{statusId} | Change status quotations document.
[**quotations_inline_post**](QuotationsApi.md#quotations_inline_post) | **POST** /quotations/inline | Create quotations document inline discount or inline vat.
[**quotations_post**](QuotationsApi.md#quotations_post) | **POST** /quotations | Create quotations document.
[**quotations_sharedocument_post**](QuotationsApi.md#quotations_sharedocument_post) | **POST** /quotations/sharedocument | Share link quotations document.



## quotations_email_document_post

> SendEmailResponse quotations_email_document_post(authorization, send_email_simple)

Send email quotations document.

ส่งเอกสารใบเสนอราคา ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
send_email_simple = OpenapiClient::SendEmailSimple.new # SendEmailSimple | 

begin
  #Send email quotations document.
  result = api_instance.quotations_email_document_post(authorization, send_email_simple)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_email_document_post: #{e}"
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


## quotations_get

> AllDocumentResponse quotations_get(current_page, page_size, authorization, opts)

Get all quotations documents.

เรียกดูข้อมูลเอกสารใบเสนอราคาทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
current_page = 56 # Integer | Query current page document quotations. <br>Example Pattern: <ex>/quotations?currentPage=1 </ex><ex>/quotations?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/quotations?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | Query filter quotations. <br>Example Pattern: <ex> /quotations?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
}

begin
  #Get all quotations documents.
  result = api_instance.quotations_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document quotations. &lt;br&gt;Example Pattern: &lt;ex&gt;/quotations?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/quotations?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter quotations. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quotations_id_attachment_post

> AttachmentResponse quotations_id_attachment_post(authorization, id, opts)

Attachment quotations document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
opts = {
  file: File.new('/path/to/file') # File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
}

begin
  #Attachment quotations document.
  result = api_instance.quotations_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_id_attachment_post: #{e}"
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


## quotations_id_delete

> DeleteResponse quotations_id_delete(authorization, id)

Delete quotations document.

ลบ เอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete quotations document.
  result = api_instance.quotations_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_id_delete: #{e}"
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


## quotations_id_get

> InlineDocumentResponse quotations_id_get(authorization, id)

Get quotations document.

เรียกดูข้อมูลเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Get quotations document.
  result = api_instance.quotations_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_id_get: #{e}"
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


## quotations_id_put

> InlineDocumentResponse quotations_id_put(authorization, id, update_inline_document)

Edit quotations document.

แก้ไขข้อมูลเอกสารใบเสนอราคา ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_inline_document = OpenapiClient::UpdateInlineDocument.new # UpdateInlineDocument | 

begin
  #Edit quotations document.
  result = api_instance.quotations_id_put(authorization, id, update_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_id_put: #{e}"
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


## quotations_id_status_status_id_post

> InlineDocumentResponse quotations_id_status_status_id_post(authorization, id, status_id)

Change status quotations document.

เปลี่ยนสถานะของเอกสารใบเสนอราคา สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> rejected = ยกเลิก

begin
  #Change status quotations document.
  result = api_instance.quotations_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; rejected &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quotations_inline_post

> InlineDocumentResponse quotations_inline_post(authorization, inline_document)

Create quotations document inline discount or inline vat.

สร้างเอกสารใบเสนอราคา แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
inline_document = OpenapiClient::InlineDocument.new # InlineDocument | 

begin
  #Create quotations document inline discount or inline vat.
  result = api_instance.quotations_inline_post(authorization, inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_inline_post: #{e}"
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


## quotations_post

> InlineDocumentResponse quotations_post(authorization, simple_document)

Create quotations document.

สร้างเอกสารใบเสนอราคา เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
simple_document = OpenapiClient::SimpleDocument.new # SimpleDocument | 

begin
  #Create quotations document.
  result = api_instance.quotations_post(authorization, simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document** | [**SimpleDocument**](SimpleDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## quotations_sharedocument_post

> ShareDocumentResponse quotations_sharedocument_post(authorization, share_document)

Share link quotations document.

แชร์ลิงค์ เอกสารใบเสนอราคาที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::QuotationsApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link quotations document.
  result = api_instance.quotations_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling QuotationsApi->quotations_sharedocument_post: #{e}"
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

