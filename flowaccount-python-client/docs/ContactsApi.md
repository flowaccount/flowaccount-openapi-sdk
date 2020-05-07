# openapi_client.ContactsApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contacts_get**](ContactsApi.md#contacts_get) | **GET** /contacts | Get list all contacts.
[**contacts_id_delete**](ContactsApi.md#contacts_id_delete) | **DELETE** /contacts/{id} | Delete contacts.
[**contacts_id_get**](ContactsApi.md#contacts_id_get) | **GET** /contacts/{id} | Get contacts.
[**contacts_id_put**](ContactsApi.md#contacts_id_put) | **PUT** /contacts/{id} | Update contacts.
[**contacts_post**](ContactsApi.md#contacts_post) | **POST** /contacts | Create contacts


# **contacts_get**
> ContactResponse contacts_get(current_page, page_size, authorization, sort_by=sort_by, filter=filter)

Get list all contacts.

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.ContactsApi()
current_page = 56 # int | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex>
page_size = 56 # int | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex>
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
sort_by = 'sort_by_example' # str | Query contacts list amount per page. <br>Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex> (optional)
filter = 'filter_example' # str | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex> (optional)

try:
    # Get list all contacts.
    api_response = api_instance.contacts_get(current_page, page_size, authorization, sort_by=sort_by, filter=filter)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContactsApi->contacts_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **int**| Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **int**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **str**| Query contacts list amount per page. &lt;br&gt;Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **str**| Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_id_delete**
> DeleteResponse contacts_id_delete(authorization, id)

Delete contacts.

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.ContactsApi()
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | เลข Id Contact

try:
    # Delete contacts.
    api_response = api_instance.contacts_id_delete(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContactsApi->contacts_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| เลข Id Contact | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_id_get**
> ContactResponse contacts_id_get(authorization, id)

Get contacts.

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.ContactsApi()
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | เลข Id Contact

try:
    # Get contacts.
    api_response = api_instance.contacts_id_get(authorization, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContactsApi->contacts_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| เลข Id Contact | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_id_put**
> ContactResponse contacts_id_put(authorization, id, contact)

Update contacts.

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.ContactsApi()
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | เลข Id Contact
contact = openapi_client.Contact() # Contact | 

try:
    # Update contacts.
    api_response = api_instance.contacts_id_put(authorization, id, contact)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContactsApi->contacts_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| เลข Id Contact | 
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_post**
> ContactResponse contacts_post(authorization, contact)

Create contacts

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Create an instance of the API class
api_instance = openapi_client.ContactsApi()
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
contact = openapi_client.Contact() # Contact | 

try:
    # Create contacts
    api_response = api_instance.contacts_post(authorization, contact)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContactsApi->contacts_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

