# Flowaccount.OpenAPITools.Api.ProductsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ProductsGet**](ProductsApi.md#productsget) | **GET** /products | Get list all products.
[**ProductsIdDelete**](ProductsApi.md#productsiddelete) | **DELETE** /products/{id} | Delete products.
[**ProductsIdGet**](ProductsApi.md#productsidget) | **GET** /products/{id} | Get products.
[**ProductsIdPut**](ProductsApi.md#productsidput) | **PUT** /products/{id} | Update products.
[**ProductsPost**](ProductsApi.md#productspost) | **POST** /products | Create products.



## ProductsGet

> ProductResponse ProductsGet (int currentPage, int pageSize, string authorization, string sortBy = null, string filter = null)

Get list all products.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ProductsGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ProductsApi(Configuration.Default);
            var currentPage = 56;  // int | Query current page products item. <br>Example Pattern: <ex>/products?currentPage=1 </ex><ex>/products?currentPage=1&pageSize=20</ex>
            var pageSize = 56;  // int | Query products list amount per page. <br>Example Pattern: <ex> /products?pageSize=20 </ex>
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var sortBy = sortBy_example;  // string | Product Sort By Example Pattern: <ex> /products?sortBy=[{'name':'productCode','sortOrder':'asc'}]</ex> (optional) 
            var filter = filter_example;  // string | Product Filter Example Pattern: <br> name = Product Name <br> productCode = Product Code / SKU <br> barcode = Product Barcode <br> categoryId = Product Category<br> <ex> /products?filter=[{'columnName':'categoryId','columnValue':'517727','columnPredicateOperator':'And'}]</ex> (optional) 

            try
            {
                // Get list all products.
                ProductResponse result = apiInstance.ProductsGet(currentPage, pageSize, authorization, sortBy, filter);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ProductsApi.ProductsGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **int**| Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **int**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **string**| Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **string**| Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductsIdDelete

> DeleteResponse ProductsIdDelete (string authorization, string id)

Delete products.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ProductsIdDeleteExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ProductsApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var id = id_example;  // string | เลข Id Contact

            try
            {
                // Delete products.
                DeleteResponse result = apiInstance.ProductsIdDelete(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ProductsApi.ProductsIdDelete: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**| เลข Id Contact | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductsIdGet

> ProductResponse ProductsIdGet (string authorization, string id)

Get products.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ProductsIdGetExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ProductsApi(Configuration.Default);
            var authorization = authorization_example;  // string | เลข Id Product (default to "Bearer accessToken")
            var id = id_example;  // string | 

            try
            {
                // Get products.
                ProductResponse result = apiInstance.ProductsIdGet(authorization, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ProductsApi.ProductsIdGet: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**| เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductsIdPut

> ProductResponse ProductsIdPut (string authorization, string id, ProductType productType)

Update products.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ProductsIdPutExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ProductsApi(Configuration.Default);
            var authorization = authorization_example;  // string | เลข Id Product (default to "Bearer accessToken")
            var id = id_example;  // string | 
            var productType = new ProductType(); // ProductType | 

            try
            {
                // Update products.
                ProductResponse result = apiInstance.ProductsIdPut(authorization, id, productType);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ProductsApi.ProductsIdPut: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**| เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **string**|  | 
 **productType** | [**ProductType**](ProductType.md)|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProductsPost

> ProductResponse ProductsPost (string authorization, ProductType productType)

Create products.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Example
{
    public class ProductsPostExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://openapi.flowaccount.com/v1";
            var apiInstance = new ProductsApi(Configuration.Default);
            var authorization = authorization_example;  // string |  (default to "Bearer accessToken")
            var productType = new ProductType(); // ProductType | 

            try
            {
                // Create products.
                ProductResponse result = apiInstance.ProductsPost(authorization, productType);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ProductsApi.ProductsPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string**|  | [default to &quot;Bearer accessToken&quot;]
 **productType** | [**ProductType**](ProductType.md)|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **401** | 401 response |  -  |
| **500** | 500 response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

