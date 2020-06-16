# OpenapiClient::ProductsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_get**](ProductsApi.md#products_get) | **GET** /products | Get list all products.
[**products_id_delete**](ProductsApi.md#products_id_delete) | **DELETE** /products/{id} | Delete products.
[**products_id_get**](ProductsApi.md#products_id_get) | **GET** /products/{id} | Get products.
[**products_id_put**](ProductsApi.md#products_id_put) | **PUT** /products/{id} | Update products.
[**products_post**](ProductsApi.md#products_post) | **POST** /products | Create products.



## products_get

> ProductResponse products_get(current_page, page_size, authorization, opts)

Get list all products.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ProductsApi.new
current_page = 56 # Integer | Query current page products item. <br>Example Pattern: <ex>/products?currentPage=1 </ex><ex>/products?currentPage=1&pageSize=20</ex>
page_size = 56 # Integer | Query products list amount per page. <br>Example Pattern: <ex> /products?pageSize=20 </ex>
authorization = 'Bearer accessToken' # String | 
opts = {
  sort_by: 'sort_by_example', # String | Query products list amount per page. <br>Example Pattern: <ex> /products?sortBy=[{'name':'productCode','sortOrder':'asc'}]</ex>
  filter: 'filter_example' # String | Query products list amount per page. <br>Example Pattern: <br> name = Product Name <br> productCode = Product Code / SKU <br> barcode = Product Barcode <br> categoryId = Product Category<br> <ex> /products?filter=[{'columnName':'categoryId','columnValue':'517727','columnPredicateOperator':'And'}]</ex>
}

begin
  #Get list all products.
  result = api_instance.products_get(current_page, page_size, authorization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->products_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **Integer**| Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **Integer**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **String**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## products_id_delete

> DeleteResponse products_id_delete(authorization, id)

Delete products.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ProductsApi.new
authorization = 'Bearer accessToken' # String | 
id = 'id_example' # String | เลข Id Contact

begin
  #Delete products.
  result = api_instance.products_id_delete(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->products_id_delete: #{e}"
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


## products_id_get

> ProductResponse products_id_get(authorization, id)

Get products.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ProductsApi.new
authorization = 'Bearer accessToken' # String | เลข Id Product
id = 'id_example' # String | 

begin
  #Get products.
  result = api_instance.products_id_get(authorization, id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->products_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| เลข Id Product | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## products_id_put

> ProductResponse products_id_put(authorization, id, product_type)

Update products.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ProductsApi.new
authorization = 'Bearer accessToken' # String | เลข Id Product
id = 'id_example' # String | 
product_type = OpenapiClient::ProductType.new # ProductType | 

begin
  #Update products.
  result = api_instance.products_id_put(authorization, id, product_type)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->products_id_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| เลข Id Product | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**|  | 
 **product_type** | [**ProductType**](ProductType.md)|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## products_post

> ProductResponse products_post(authorization, product_type)

Create products.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::ProductsApi.new
authorization = 'Bearer accessToken' # String | 
product_type = OpenapiClient::ProductType.new # ProductType | 

begin
  #Create products.
  result = api_instance.products_post(authorization, product_type)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling ProductsApi->products_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **product_type** | [**ProductType**](ProductType.md)|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

