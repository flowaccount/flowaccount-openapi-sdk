# ContactsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsGet**](ContactsApi.md#contactsGet) | **GET** /contacts | Get list all contacts.
[**contactsIdDelete**](ContactsApi.md#contactsIdDelete) | **DELETE** /contacts/{id} | Delete contacts.
[**contactsIdGet**](ContactsApi.md#contactsIdGet) | **GET** /contacts/{id} | Get contacts.
[**contactsIdPut**](ContactsApi.md#contactsIdPut) | **PUT** /contacts/{id} | Update contacts.
[**contactsPost**](ContactsApi.md#contactsPost) | **POST** /contacts | Create contacts



## contactsGet

> ContactResponse contactsGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all contacts.

### Example

```java
// Import classes:
//import org.openapitools.client.api.ContactsApi;

ContactsApi apiInstance = new ContactsApi();
Integer currentPage = null; // Integer | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query contacts list amount per page. <br>Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex>
String filter = null; // String | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex>
try {
    ContactResponse result = apiInstance.contactsGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ContactsApi#contactsGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query contacts list amount per page. &lt;br&gt;Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] [default to null]

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsIdDelete

> DeleteResponse contactsIdDelete(authorization, id)

Delete contacts.

### Example

```java
// Import classes:
//import org.openapitools.client.api.ContactsApi;

ContactsApi apiInstance = new ContactsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | เลข Id Contact
try {
    DeleteResponse result = apiInstance.contactsIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ContactsApi#contactsIdDelete");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| เลข Id Contact | [default to null]

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsIdGet

> ContactResponse contactsIdGet(authorization, id)

Get contacts.

### Example

```java
// Import classes:
//import org.openapitools.client.api.ContactsApi;

ContactsApi apiInstance = new ContactsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | เลข Id Contact
try {
    ContactResponse result = apiInstance.contactsIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ContactsApi#contactsIdGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| เลข Id Contact | [default to null]

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsIdPut

> ContactResponse contactsIdPut(authorization, id, contact)

Update contacts.

### Example

```java
// Import classes:
//import org.openapitools.client.api.ContactsApi;

ContactsApi apiInstance = new ContactsApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | เลข Id Contact
Contact contact = new Contact(); // Contact | 
try {
    ContactResponse result = apiInstance.contactsIdPut(authorization, id, contact);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ContactsApi#contactsIdPut");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| เลข Id Contact | [default to null]
 **contact** | [**Contact**](Contact.md)|  |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contactsPost

> ContactResponse contactsPost(authorization, contact)

Create contacts

### Example

```java
// Import classes:
//import org.openapitools.client.api.ContactsApi;

ContactsApi apiInstance = new ContactsApi();
String authorization = Bearer accessToken; // String | 
Contact contact = new Contact(); // Contact | 
try {
    ContactResponse result = apiInstance.contactsPost(authorization, contact);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ContactsApi#contactsPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **contact** | [**Contact**](Contact.md)|  |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

