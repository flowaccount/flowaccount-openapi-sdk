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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer currentPage = 56; // Integer | Query current page products item. <br>Example Pattern: <ex>/products?currentPage=1 </ex><ex>/products?currentPage=1&pageSize=20</ex>
    Integer pageSize = 56; // Integer | Query products list amount per page. <br>Example Pattern: <ex> /products?pageSize=20 </ex>
    String authorization = "\"Bearer accessToken\""; // String | 
    String sortBy = "sortBy_example"; // String | Query products list amount per page. <br>Example Pattern: <ex> /products?sortBy=[{'name':'productCode','sortOrder':'asc'}]</ex>
    String filter = "filter_example"; // String | Query products list amount per page. <br>Example Pattern: <br> name = Product Name <br> productCode = Product Code / SKU <br> barcode = Product Barcode <br> categoryId = Product Category<br> <ex> /products?filter=[{'columnName':'categoryId','columnValue':'517727','columnPredicateOperator':'And'}]</ex>
    try {
      ProductResponse result = apiInstance.productsGet(currentPage, pageSize, authorization, sortBy, filter);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#productsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **Integer**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **String**| Query products list amount per page. &lt;br&gt;Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional]

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
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="productsIdDelete"></a>
# **productsIdDelete**
> DeleteResponse productsIdDelete(authorization, id)

Delete products.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | เลข Id Contact
    try {
      DeleteResponse result = apiInstance.productsIdDelete(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#productsIdDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**| เลข Id Contact |

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
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="productsIdGet"></a>
# **productsIdGet**
> ProductResponse productsIdGet(authorization, id)

Get products.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | เลข Id Product
    String id = "id_example"; // String | 
    try {
      ProductResponse result = apiInstance.productsIdGet(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#productsIdGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**|  |

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
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="productsIdPut"></a>
# **productsIdPut**
> ProductResponse productsIdPut(authorization, id, productType)

Update products.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | เลข Id Product
    String id = "id_example"; // String | 
    ProductType productType = new ProductType(); // ProductType | 
    try {
      ProductResponse result = apiInstance.productsIdPut(authorization, id, productType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#productsIdPut");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| เลข Id Product | [default to &quot;Bearer accessToken&quot;]
 **id** | **String**|  |
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
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

<a name="productsPost"></a>
# **productsPost**
> ProductResponse productsPost(authorization, productType)

Create products.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    ProductType productType = new ProductType(); // ProductType | 
    try {
      ProductResponse result = apiInstance.productsPost(authorization, productType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#productsPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
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
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

