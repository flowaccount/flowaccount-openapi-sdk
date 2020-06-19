# OpenapiClient::BillingNotesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_notes_email_document_post**](BillingNotesApi.md#billing_notes_email_document_post) | **POST** /billing-notes/email-document | Send email billing notes document.
[**billing_notes_get**](BillingNotesApi.md#billing_notes_get) | **GET** /billing-notes | Get all billing notes documents.
[**billing_notes_id_attachment_post**](BillingNotesApi.md#billing_notes_id_attachment_post) | **POST** /billing-notes/{id}/attachment | Attachment billing notes document.
[**billing_notes_id_delete**](BillingNotesApi.md#billing_notes_id_delete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
[**billing_notes_id_get**](BillingNotesApi.md#billing_notes_id_get) | **GET** /billing-notes/{id} | Get billing notes document.
[**billing_notes_id_put**](BillingNotesApi.md#billing_notes_id_put) | **PUT** /billing-notes/{id} | Edit billing notes document.
[**billing_notes_id_status_status_id_post**](BillingNotesApi.md#billing_notes_id_status_status_id_post) | **POST** /billing-notes/{id}/status/{statusId} | Change status billing notes document.
[**billing_notes_inline_post**](BillingNotesApi.md#billing_notes_inline_post) | **POST** /billing-notes/inline | Create billing notes document inline discount or inline vat.
[**billing_notes_post**](BillingNotesApi.md#billing_notes_post) | **POST** /billing-notes | Create billing notes document.
[**billing_notes_sharedocument_post**](BillingNotesApi.md#billing_notes_sharedocument_post) | **POST** /billing-notes/sharedocument | Share link billing notes document.



## billing_notes_email_document_post

> SendEmailResponse billing_notes_email_document_post(authorization, send_email_coppies)

Send email billing notes document.

ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
send_email_coppies = OpenapiClient::SendEmailCoppies.new # SendEmailCoppies | 

begin
  #Send email billing notes document.
  result = api_instance.billing_notes_email_document_post(authorization, send_email_coppies)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_email_document_post: #{e}"
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


## billing_notes_get

> AllDocumentResponse billing_notes_get(current_page, page_size, authorization, opts)

Get all billing notes documents.

เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
current_page = 56 # Integer | Query current page document billing notes. <br>Example Pattern: <ex>/billing-notes?currentPage=1 </ex><ex>/billing-notes?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/billing-notes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | Query filter billing-notes. <br>Example Pattern: <ex> /billing-notes?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex>
}

begin
  #Get all billing notes documents.
  result = api_instance.billing_notes_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document billing notes. &lt;br&gt;Example Pattern: &lt;ex&gt;/billing-notes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/billing-notes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query filter billing-notes. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billing_notes_id_attachment_post

> AttachmentResponse billing_notes_id_attachment_post(authorization, id, opts)

Attachment billing notes document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
opts = {
  file: File.new('/path/to/file') # File | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
}

begin
  #Attachment billing notes document.
  result = api_instance.billing_notes_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_id_attachment_post: #{e}"
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


## billing_notes_id_delete

> DeleteResponse billing_notes_id_delete(authorization, id)

Delete billing notes document.

ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete billing notes document.
  result = api_instance.billing_notes_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_id_delete: #{e}"
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


## billing_notes_id_get

> InlineDocumentResponse billing_notes_id_get(authorization, id)

Get billing notes document.

เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Get billing notes document.
  result = api_instance.billing_notes_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_id_get: #{e}"
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


## billing_notes_id_put

> InlineDocumentResponse billing_notes_id_put(authorization, id, update_inline_document)

Edit billing notes document.

แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_inline_document = OpenapiClient::UpdateInlineDocument.new # UpdateInlineDocument | 

begin
  #Edit billing notes document.
  result = api_instance.billing_notes_id_put(authorization, id, update_inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_id_put: #{e}"
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


## billing_notes_id_status_status_id_post

> InlineDocumentResponse billing_notes_id_status_status_id_post(authorization, id, status_id)

Change status billing notes document.

เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รอวางบิล <br> approved = วางบิลแล้ว <br> approvedandprocessed = เปิดบิลแล้ว <br> void = ยกเลิก

begin
  #Change status billing notes document.
  result = api_instance.billing_notes_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รอวางบิล &lt;br&gt; approved &#x3D; วางบิลแล้ว &lt;br&gt; approvedandprocessed &#x3D; เปิดบิลแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billing_notes_inline_post

> InlineDocumentResponse billing_notes_inline_post(authorization, inline_document)

Create billing notes document inline discount or inline vat.

สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
inline_document = OpenapiClient::InlineDocument.new # InlineDocument | 

begin
  #Create billing notes document inline discount or inline vat.
  result = api_instance.billing_notes_inline_post(authorization, inline_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_inline_post: #{e}"
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


## billing_notes_post

> SimpleDocumentResponse billing_notes_post(authorization, simple_document)

Create billing notes document.

สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
simple_document = OpenapiClient::SimpleDocument.new # SimpleDocument | 

begin
  #Create billing notes document.
  result = api_instance.billing_notes_post(authorization, simple_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_post: #{e}"
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


## billing_notes_sharedocument_post

> ShareDocumentResponse billing_notes_sharedocument_post(authorization, share_document)

Share link billing notes document.

แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BillingNotesApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link billing notes document.
  result = api_instance.billing_notes_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BillingNotesApi->billing_notes_sharedocument_post: #{e}"
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

