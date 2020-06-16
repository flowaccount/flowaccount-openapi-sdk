# OpenapiClient::ContactsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contacts_get**](ContactsApi.md#contacts_get) | **GET** /contacts | Get list all contacts.
[**contacts_id_delete**](ContactsApi.md#contacts_id_delete) | **DELETE** /contacts/{id} | Delete contacts.
[**contacts_id_get**](ContactsApi.md#contacts_id_get) | **GET** /contacts/{id} | Get contacts.
[**contacts_id_put**](ContactsApi.md#contacts_id_put) | **PUT** /contacts/{id} | Update contacts.
[**contacts_post**](ContactsApi.md#contacts_post) | **POST** /contacts | Create contacts



## contacts_get

> ContactResponse contacts_get(current_page, page_size, authorization, opts)

Get list all contacts.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ContactsApi.new
current_page = 56 # Integer | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query contacts list amount per page. <br>Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex>
  filter: 'filter_example' # String | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex>
}

begin
  #Get list all contacts.
  result = api_instance.contacts_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContactsApi->contacts_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query contacts list amount per page. &lt;br&gt;Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contacts_id_delete

> DeleteResponse contacts_id_delete(authorization, id)

Delete contacts.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ContactsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | เลข Id Contact

begin
  #Delete contacts.
  result = api_instance.contacts_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContactsApi->contacts_id_delete: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| เลข Id Contact | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contacts_id_get

> ContactResponse contacts_id_get(authorization, id)

Get contacts.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ContactsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | เลข Id Contact

begin
  #Get contacts.
  result = api_instance.contacts_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContactsApi->contacts_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| เลข Id Contact | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contacts_id_put

> ContactResponse contacts_id_put(authorization, id, contact)

Update contacts.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ContactsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | เลข Id Contact
contact = OpenapiClient::Contact.new # Contact | 

begin
  #Update contacts.
  result = api_instance.contacts_id_put(authorization, id, contact)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContactsApi->contacts_id_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**| เลข Id Contact | 
 **contact** | [**Contact**](Contact.md)|  | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contacts_post

> ContactResponse contacts_post(authorization, contact)

Create contacts

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ContactsApi.new
authorization = 'Bearer accessToken' # String | 
contact = OpenapiClient::Contact.new # Contact | 

begin
  #Create contacts
  result = api_instance.contacts_post(authorization, contact)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ContactsApi->contacts_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **contact** | [**Contact**](Contact.md)|  | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

