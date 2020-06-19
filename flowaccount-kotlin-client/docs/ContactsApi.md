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
> ContactResponse contactsGet(authorization, currentPage, pageSize, sortBy, filter)

Get list all contacts.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ContactsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val currentPage : kotlin.Int = 56 // kotlin.Int | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex>
val pageSize : kotlin.Int = 56 // kotlin.Int | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex>
val sortBy : kotlin.String = sortBy_example // kotlin.String | Contact Sort By Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex>
val filter : kotlin.String = filter_example // kotlin.String | Contact Filter Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex>
try {
    val result : ContactResponse = apiInstance.contactsGet(authorization, currentPage, pageSize, sortBy, filter)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ContactsApi#contactsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ContactsApi#contactsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **currentPage** | **kotlin.Int**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [optional]
 **pageSize** | **kotlin.Int**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | [optional]
 **sortBy** | **kotlin.String**| Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional]
 **filter** | **kotlin.String**| Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional]

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contactsIdDelete"></a>
# **contactsIdDelete**
> DeleteResponse contactsIdDelete(authorization, id)

Delete contacts.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ContactsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | เลข Id Contact
try {
    val result : DeleteResponse = apiInstance.contactsIdDelete(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ContactsApi#contactsIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ContactsApi#contactsIdDelete")
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

<a name="contactsIdGet"></a>
# **contactsIdGet**
> ContactResponse contactsIdGet(authorization, id)

Get contacts.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ContactsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | เลข Id Contact
try {
    val result : ContactResponse = apiInstance.contactsIdGet(authorization, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ContactsApi#contactsIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ContactsApi#contactsIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| เลข Id Contact |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contactsIdPut"></a>
# **contactsIdPut**
> ContactResponse contactsIdPut(authorization, id, contact)

Update contacts.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ContactsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val id : kotlin.String = id_example // kotlin.String | เลข Id Contact
val contact : Contact =  // Contact | 
try {
    val result : ContactResponse = apiInstance.contactsIdPut(authorization, id, contact)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ContactsApi#contactsIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ContactsApi#contactsIdPut")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **id** | **kotlin.String**| เลข Id Contact |
 **contact** | [**Contact**](Contact.md)|  |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsPost"></a>
# **contactsPost**
> ContactResponse contactsPost(authorization, contact)

Create contacts

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ContactsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val contact : Contact =  // Contact | 
try {
    val result : ContactResponse = apiInstance.contactsPost(authorization, contact)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ContactsApi#contactsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ContactsApi#contactsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **contact** | [**Contact**](Contact.md)|  |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

