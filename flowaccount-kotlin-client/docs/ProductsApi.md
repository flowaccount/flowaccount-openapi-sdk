# ProductsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGet**](ProductsApi.md#productsGet) | **GET** /products | Get list all products.
[**productsIdDelete**](ProductsApi.md#productsIdDelete) | **DELETE** /products/{id} | Delete products.
[**productsIdGet**](ProductsApi.md#productsIdGet) | **GET** /products/{id} | Get products.
[**productsIdPut**](ProductsApi.md#productsIdPut) | **PUT** /products/{id} | Update products.
[**productsPost**](ProductsApi.md#productsPost) | **POST** /products | Create products.


<a name="productsGet"></a>
# **productsGet**
> ProductResponse productsGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all products.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ProductsApi()
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page products item. <br>Example Pattern: <ex>/products?currentPage=1 </ex><ex>/products?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query products list amount per page. <br>Example Pattern: <ex> /products?pageSize=20 </ex>
val authorization : kotlin.String = authorization_example // kotlin.String | 
val sortBy : kotlin.String = sortBy_example // kotlin.String | Product Sort By Example Pattern: <ex> /products?sortBy=[{'name':'productCode','sortOrder':'asc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Product Filter Example Pattern: <br> name = Product Name <br> productCode = Product Code / SKU <br> barcode = Product Barcode <br> categoryId = Product Category<br> <ex> /products?filter=[{'columnName':'categoryId','columnValue':'517727','columnPredicateOperator':'And'}]</ex>
try {
    val result : ProductResponse = apiInstance.productsGet(currentPage, pageSize, authorization, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ProductsApi#productsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ProductsApi#productsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **kotlin.Int**| Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **kotlin.Int**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **kotlin.String**| Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional]

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productsIdDelete"></a>
# **productsIdDelete**
> DeleteResponse productsIdDelete(authorization, id)

Delete products.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ProductsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | เลข Id Contact
try {
    val result : DeleteResponse = apiInstance.productsIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ProductsApi#productsIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ProductsApi#productsIdDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| เลข Id Contact |

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productsIdGet"></a>
# **productsIdGet**
> ProductResponse productsIdGet(authorization, id)

Get products.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ProductsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | เลข Id Product
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : ProductResponse = apiInstance.productsIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ProductsApi#productsIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ProductsApi#productsIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**| เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**|  |

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productsIdPut"></a>
# **productsIdPut**
> ProductResponse productsIdPut(authorization, id, productType)

Update products.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ProductsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | เลข Id Product
val id : kotlin.String = id_example // kotlin.String | 
val productType : ProductType =  // ProductType | 
try {
    val result : ProductResponse = apiInstance.productsIdPut(authorization, id, productType)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ProductsApi#productsIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ProductsApi#productsIdPut")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**| เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**|  |
 **productType** | [**ProductType**](ProductType.md)|  |

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productsPost"></a>
# **productsPost**
> ProductResponse productsPost(authorization, productType)

Create products.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ProductsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val productType : ProductType =  // ProductType | 
try {
    val result : ProductResponse = apiInstance.productsPost(authorization, productType)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ProductsApi#productsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ProductsApi#productsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **productType** | [**ProductType**](ProductType.md)|  |

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

