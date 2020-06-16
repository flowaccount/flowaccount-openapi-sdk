# FlowAccountOpenApi.ProductsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGet**](ProductsApi.md#productsGet) | **GET** /products | Get list all products.
[**productsIdDelete**](ProductsApi.md#productsIdDelete) | **DELETE** /products/{id} | Delete products.
[**productsIdGet**](ProductsApi.md#productsIdGet) | **GET** /products/{id} | Get products.
[**productsIdPut**](ProductsApi.md#productsIdPut) | **PUT** /products/{id} | Update products.
[**productsPost**](ProductsApi.md#productsPost) | **POST** /products | Create products.



## productsGet

> ProductResponse productsGet(currentPage, pageSize, authorization, opts)

Get list all products.

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ProductsApi();
let currentPage = 56; // Number | Query current page products item. <br>Example Pattern: <ex>/products?currentPage=1 </ex><ex>/products?currentPage=1&pageSize=20</ex>
let pageSize = 56; // Number | Query products list amount per page. <br>Example Pattern: <ex> /products?pageSize=20 </ex>
let authorization = "'Bearer accessToken'"; // String | 
let opts = {
  'sortBy': "sortBy_example", // String | Query products list amount per page. <br>Example Pattern: <ex> /products?sortBy=[{'name':'productCode','sortOrder':'asc'}]</ex>
  'filter': "filter_example" // String | Query products list amount per page. <br>Example Pattern: <br> name = Product Name <br> productCode = Product Code / SKU <br> barcode = Product Barcode <br> categoryId = Product Category<br> <ex> /products?filter=[{'columnName':'categoryId','columnValue':'517727','columnPredicateOperator':'And'}]</ex>
};
apiInstance.productsGet(currentPage, pageSize, authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Number**| Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Number**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **sortBy** | **String**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productsIdDelete

> DeleteResponse productsIdDelete(authorization, id)

Delete products.

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ProductsApi();
let authorization = "'Bearer accessToken'"; // String | 
let id = "id_example"; // String | เลข Id Contact
apiInstance.productsIdDelete(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## productsIdGet

> ProductResponse productsIdGet(authorization, id)

Get products.

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ProductsApi();
let authorization = "'Bearer accessToken'"; // String | เลข Id Product
let id = "id_example"; // String | 
apiInstance.productsIdGet(authorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## productsIdPut

> ProductResponse productsIdPut(authorization, id, productType)

Update products.

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ProductsApi();
let authorization = "'Bearer accessToken'"; // String | เลข Id Product
let id = "id_example"; // String | 
let productType = new FlowAccountOpenApi.ProductType(); // ProductType | 
apiInstance.productsIdPut(authorization, id, productType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| เลข Id Product | [default to &#39;Bearer accessToken&#39;]
 **id** | **String**|  | 
 **productType** | [**ProductType**](ProductType.md)|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productsPost

> ProductResponse productsPost(authorization, productType)

Create products.

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.ProductsApi();
let authorization = "'Bearer accessToken'"; // String | 
let productType = new FlowAccountOpenApi.ProductType(); // ProductType | 
apiInstance.productsPost(authorization, productType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **productType** | [**ProductType**](ProductType.md)|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

