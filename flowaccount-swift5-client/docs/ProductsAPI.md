# ProductsAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGet**](ProductsAPI.md#productsget) | **GET** /products | Get list all products.
[**productsIdDelete**](ProductsAPI.md#productsiddelete) | **DELETE** /products/{id} | Delete products.
[**productsIdGet**](ProductsAPI.md#productsidget) | **GET** /products/{id} | Get products.
[**productsIdPut**](ProductsAPI.md#productsidput) | **PUT** /products/{id} | Update products.
[**productsPost**](ProductsAPI.md#productspost) | **POST** /products | Create products.


# **productsGet**
```swift
    open class func productsGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: ProductResponse?, _ error: Error?) -> Void)
```

Get list all products.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page products item. <br>Example Pattern: <ex>/products?currentPage=1 </ex><ex>/products?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query products list amount per page. <br>Example Pattern: <ex> /products?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Product Sort By Example Pattern: <ex> /products?sortBy=[{'name':'productCode','sortOrder':'asc'}]</ex> (optional)
let filter = "filter_example" // String | Product Filter Example Pattern: <br> name = Product Name <br> productCode = Product Code / SKU <br> barcode = Product Barcode <br> categoryId = Product Category<br> <ex> /products?filter=[{'columnName':'categoryId','columnValue':'517727','columnPredicateOperator':'And'}]</ex> (optional)

// Get list all products.
ProductsAPI.productsGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Int** | Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** | Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsIdDelete**
```swift
    open class func productsIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete products.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | เลข Id Contact

// Delete products.
ProductsAPI.productsIdDelete(authorization: authorization, id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String** | เลข Id Contact | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsIdGet**
```swift
    open class func productsIdGet(authorization: String, id: String, completion: @escaping (_ data: ProductResponse?, _ error: Error?) -> Void)
```

Get products.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String | เลข Id Product (default to "Bearer accessToken")
let id = "id_example" // String | 

// Get products.
ProductsAPI.productsIdGet(authorization: authorization, id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String** | เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **String** |  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsIdPut**
```swift
    open class func productsIdPut(authorization: String, id: String, productType: ProductType, completion: @escaping (_ data: ProductResponse?, _ error: Error?) -> Void)
```

Update products.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String | เลข Id Product (default to "Bearer accessToken")
let id = "id_example" // String | 
let productType = ProductType(productStructureType: "productStructureType_example", type: 123, code: "code_example", name: "name_example", sellDescription: "sellDescription_example", sellPrice: 123, sellVatType: 123, unitName: "unitName_example", categoryName: "categoryName_example", barcode: "barcode_example", buyDescription: "buyDescription_example", buyPrice: 123, buyVatType: 123, inventoryPublishedOn: "inventoryPublishedOn_example", inventoryQuantity: 123, inventoryPrice: 123) // ProductType | 

// Update products.
ProductsAPI.productsIdPut(authorization: authorization, id: id, productType: productType) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String** | เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **String** |  | 
 **productType** | [**ProductType**](ProductType.md) |  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsPost**
```swift
    open class func productsPost(authorization: String, productType: ProductType, completion: @escaping (_ data: ProductResponse?, _ error: Error?) -> Void)
```

Create products.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let productType = ProductType(productStructureType: "productStructureType_example", type: 123, code: "code_example", name: "name_example", sellDescription: "sellDescription_example", sellPrice: 123, sellVatType: 123, unitName: "unitName_example", categoryName: "categoryName_example", barcode: "barcode_example", buyDescription: "buyDescription_example", buyPrice: 123, buyVatType: 123, inventoryPublishedOn: "inventoryPublishedOn_example", inventoryQuantity: 123, inventoryPrice: 123) // ProductType | 

// Create products.
ProductsAPI.productsPost(authorization: authorization, productType: productType) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **productType** | [**ProductType**](ProductType.md) |  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

