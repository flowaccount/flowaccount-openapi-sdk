# OpenapiClient::WithholdingTaxApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withholding_taxes_email_document_post**](WithholdingTaxApi.md#withholding_taxes_email_document_post) | **POST** /withholding-taxes/email-document | Send email withholding tax document.
[**withholding_taxes_get**](WithholdingTaxApi.md#withholding_taxes_get) | **GET** /withholding-taxes | Get list all withholding tax documents.
[**withholding_taxes_id_attachment_post**](WithholdingTaxApi.md#withholding_taxes_id_attachment_post) | **POST** /withholding-taxes/{id}/attachment | Add Attachment to expenses.
[**withholding_taxes_id_delete**](WithholdingTaxApi.md#withholding_taxes_id_delete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
[**withholding_taxes_id_get**](WithholdingTaxApi.md#withholding_taxes_id_get) | **GET** /withholding-taxes/{id} | Get withholding tax document.
[**withholding_taxes_id_put**](WithholdingTaxApi.md#withholding_taxes_id_put) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
[**withholding_taxes_id_status_status_id_post**](WithholdingTaxApi.md#withholding_taxes_id_status_status_id_post) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status of withholding tax document.
[**withholding_taxes_post**](WithholdingTaxApi.md#withholding_taxes_post) | **POST** /withholding-taxes | Create withholding tax document.
[**withholding_taxes_sharedocument_post**](WithholdingTaxApi.md#withholding_taxes_sharedocument_post) | **POST** /withholding-taxes/sharedocument | Share link withholding tax documents.



## withholding_taxes_email_document_post

> SendEmailResponse withholding_taxes_email_document_post(authorization, send_email_simple)

Send email withholding tax document.

ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
send_email_simple = OpenapiClient::SendEmailSimple.new # SendEmailSimple | 

begin
  #Send email withholding tax document.
  result = api_instance.withholding_taxes_email_document_post(authorization, send_email_simple)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_email_document_post: #{e}"
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


## withholding_taxes_get

> AllWithholidingTaxDocumentResponse withholding_taxes_get(current_page, page_size, authorization, opts)

Get list all withholding tax documents.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
current_page = 56 # Integer | Query current page document withholding tax. <br>Example Pattern: <ex>/withholding-taxes?currentPage=1 </ex><ex>/withholding-taxes?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/withholding-taxes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'entity','sortOrder':'asc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | 
}

begin
  #Get list all withholding tax documents.
  result = api_instance.withholding_taxes_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**AllWithholidingTaxDocumentResponse**](AllWithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withholding_taxes_id_attachment_post

> AttachmentResponse withholding_taxes_id_attachment_post(authorization, id, opts)

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | 
opts = {
  file: File.new('/path/to/file') # File | 
}

begin
  #Add Attachment to expenses.
  result = api_instance.withholding_taxes_id_attachment_post(authorization, id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_id_attachment_post: #{e}"
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


## withholding_taxes_id_delete

> DeleteResponse withholding_taxes_id_delete(authorization, id)

Delete withholding tax document.

ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId

begin
  #Delete withholding tax document.
  result = api_instance.withholding_taxes_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_id_delete: #{e}"
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


## withholding_taxes_id_get

> WithholidingTaxDocumentResponse withholding_taxes_id_get(authorization, id)

Get withholding tax document.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId หรือ documentId

begin
  #Get withholding tax document.
  result = api_instance.withholding_taxes_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withholding_taxes_id_put

> WithholidingTaxDocumentResponse withholding_taxes_id_put(authorization, id, update_withholiding_tax_document)

Edit withholding tax document.

แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
update_withholiding_tax_document = OpenapiClient::UpdateWithholidingTaxDocument.new # UpdateWithholidingTaxDocument | 

begin
  #Edit withholding tax document.
  result = api_instance.withholding_taxes_id_put(authorization, id, update_withholiding_tax_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_id_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **update_withholiding_tax_document** | [**UpdateWithholidingTaxDocument**](UpdateWithholidingTaxDocument.md)|  | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withholding_taxes_id_status_status_id_post

> WithholidingTaxDocumentResponse withholding_taxes_id_status_status_id_post(authorization, id, status_id)

Change status of withholding tax document.

เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | ID เอกสารใช้ recordId
status_id = 'status_id_example' # String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> processed = ดำเนินการแล้ว <br> void = ยกเลิก

begin
  #Change status of withholding tax document.
  result = api_instance.withholding_taxes_id_status_status_id_post(authorization, id, status_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_id_status_status_id_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| ID เอกสารใช้ recordId | 
 **status_id** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withholding_taxes_post

> WithholidingTaxDocumentResponse withholding_taxes_post(authorization, withholiding_tax_document)

Create withholding tax document.

สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) <br> <br> ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
withholiding_tax_document = OpenapiClient::WithholidingTaxDocument.new # WithholidingTaxDocument | 

begin
  #Create withholding tax document.
  result = api_instance.withholding_taxes_post(authorization, withholiding_tax_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **withholiding_tax_document** | [**WithholidingTaxDocument**](WithholidingTaxDocument.md)|  | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withholding_taxes_sharedocument_post

> ShareDocumentResponse withholding_taxes_sharedocument_post(authorization, share_document)

Share link withholding tax documents.

แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::WithholdingTaxApi.new
authorization = 'Bearer accessToken' # String | 
share_document = OpenapiClient::ShareDocument.new # ShareDocument | 

begin
  #Share link withholding tax documents.
  result = api_instance.withholding_taxes_sharedocument_post(authorization, share_document)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling WithholdingTaxApi->withholding_taxes_sharedocument_post: #{e}"
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

