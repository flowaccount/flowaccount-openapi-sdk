# ContactsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsGet**](ContactsApi.md#contactsGet) | **GET** /contacts | Get list all contacts.
[**contactsIdDelete**](ContactsApi.md#contactsIdDelete) | **DELETE** /contacts/{id} | Delete contacts.
[**contactsIdGet**](ContactsApi.md#contactsIdGet) | **GET** /contacts/{id} | Get contacts.
[**contactsIdPut**](ContactsApi.md#contactsIdPut) | **PUT** /contacts/{id} | Update contacts.
[**contactsPost**](ContactsApi.md#contactsPost) | **POST** /contacts | Create contacts


<a name="contactsGet"></a>
# **contactsGet**
> ContactResponse contactsGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all contacts.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ContactsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ContactsApi apiInstance = new ContactsApi(defaultClient);
    Integer currentPage = 56; // Integer | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex>
    Integer pageSize = 56; // Integer | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex>
    String authorization = "\"Bearer accessToken\""; // String | 
    String sortBy = "sortBy_example"; // String | Query contacts list amount per page. <br>Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex>
    String filter = "filter_example"; // String | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex>
    try {
      ContactResponse result = apiInstance.contactsGet(currentPage, pageSize, authorization, sortBy, filter);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ContactsApi#contactsGet");
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
 **currentPage** | **Integer**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; |
 **pageSize** | **Integer**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; |
 **authorization** | **String**|  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String**| Query contacts list amount per page. &lt;br&gt;Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **String**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional]

### Return type

[**ContactResponse**](ContactResponse.md)

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

<a name="contactsIdDelete"></a>
# **contactsIdDelete**
> DeleteResponse contactsIdDelete(authorization, id)

Delete contacts.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ContactsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ContactsApi apiInstance = new ContactsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | เลข Id Contact
    try {
      DeleteResponse result = apiInstance.contactsIdDelete(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ContactsApi#contactsIdDelete");
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

<a name="contactsIdGet"></a>
# **contactsIdGet**
> ContactResponse contactsIdGet(authorization, id)

Get contacts.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ContactsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ContactsApi apiInstance = new ContactsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | เลข Id Contact
    try {
      ContactResponse result = apiInstance.contactsIdGet(authorization, id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ContactsApi#contactsIdGet");
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

[**ContactResponse**](ContactResponse.md)

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

<a name="contactsIdPut"></a>
# **contactsIdPut**
> ContactResponse contactsIdPut(authorization, id, contact)

Update contacts.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ContactsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ContactsApi apiInstance = new ContactsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    String id = "id_example"; // String | เลข Id Contact
    Contact contact = new Contact(); // Contact | 
    try {
      ContactResponse result = apiInstance.contactsIdPut(authorization, id, contact);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ContactsApi#contactsIdPut");
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
 **contact** | [**Contact**](Contact.md)|  |

### Return type

[**ContactResponse**](ContactResponse.md)

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

<a name="contactsPost"></a>
# **contactsPost**
> ContactResponse contactsPost(authorization, contact)

Create contacts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ContactsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://openapi.flowaccount.com/v1");

    ContactsApi apiInstance = new ContactsApi(defaultClient);
    String authorization = "\"Bearer accessToken\""; // String | 
    Contact contact = new Contact(); // Contact | 
    try {
      ContactResponse result = apiInstance.contactsPost(authorization, contact);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ContactsApi#contactsPost");
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
 **contact** | [**Contact**](Contact.md)|  |

### Return type

[**ContactResponse**](ContactResponse.md)

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

