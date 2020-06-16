# openapi_client.ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expenses_categories_accounting_get**](ExpensesApi.md#expenses_categories_accounting_get) | **GET** /expenses/categories/accounting | Accounting categorys expenses document.
[**expenses_categories_business_get**](ExpensesApi.md#expenses_categories_business_get) | **GET** /expenses/categories/business | Business categorys expenses document.
[**expenses_email_document_post**](ExpensesApi.md#expenses_email_document_post) | **POST** /expenses/email-document | Send email expenses document.
[**expenses_get**](ExpensesApi.md#expenses_get) | **GET** /expenses | Get list all expenses documents.
[**expenses_id_attachment_post**](ExpensesApi.md#expenses_id_attachment_post) | **POST** /expenses/{id}/attachment | Add Attachment to expenses.
[**expenses_id_delete**](ExpensesApi.md#expenses_id_delete) | **DELETE** /expenses/{id} | Delete expenses document.
[**expenses_id_get**](ExpensesApi.md#expenses_id_get) | **GET** /expenses/{id} | Get expenses document.
[**expenses_id_payment_post**](ExpensesApi.md#expenses_id_payment_post) | **POST** /expenses/{id}/payment | Change paid status of expenses document.
[**expenses_id_put**](ExpensesApi.md#expenses_id_put) | **PUT** /expenses/{id} | Edit expenses document.
[**expenses_id_status_status_id_post**](ExpensesApi.md#expenses_id_status_status_id_post) | **POST** /expenses/{id}/status/{statusId} | Change status of expenses document.
[**expenses_inline_post**](ExpensesApi.md#expenses_inline_post) | **POST** /expenses/inline | Create expenses document with discount and tax inline.
[**expenses_inline_with_payment_post**](ExpensesApi.md#expenses_inline_with_payment_post) | **POST** /expenses/inline/with-payment | Create expenses document with discount and tax inline with payment.
[**expenses_post**](ExpensesApi.md#expenses_post) | **POST** /expenses | Create expenses document.
[**expenses_sharedocument_post**](ExpensesApi.md#expenses_sharedocument_post) | **POST** /expenses/sharedocument | Share link expenses documents.
[**expenses_with_payment_post**](ExpensesApi.md#expenses_with_payment_post) | **POST** /expenses/with-payment | Create expenses document with-payment.


# **expenses_categories_accounting_get**
> BusinessCategory expenses_categories_accounting_get(authorization)

Accounting categorys expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')

    try:
        # Accounting categorys expenses document.
        api_response = api_instance.expenses_categories_accounting_get(authorization)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_categories_accounting_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

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

# **expenses_categories_business_get**
> BusinessCategory expenses_categories_business_get(authorization)

Business categorys expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')

    try:
        # Business categorys expenses document.
        api_response = api_instance.expenses_categories_business_get(authorization)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_categories_business_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**BusinessCategory**](BusinessCategory.md)

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

# **expenses_email_document_post**
> SendEmailResponse expenses_email_document_post(authorization, send_email_simple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
send_email_simple = openapi_client.SendEmailSimple() # SendEmailSimple | 

    try:
        # Send email expenses document.
        api_response = api_instance.expenses_email_document_post(authorization, send_email_simple)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_email_document_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **send_email_simple** | [**SendEmailSimple**](SendEmailSimple.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

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

# **expenses_get**
> AllExpenseDocumentResponse expenses_get(current_page, page_size, authorization, sort_by=sort_by, filter=filter)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    current_page = 56 # int | Query current page document expenses. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
page_size = 56 # int | Query document expenses list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
sort_by = 'sort_by_example' # str | Query document expenses list amount per page. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
filter = 'filter_example' # str |  (optional)

    try:
        # Get list all expenses documents.
        api_response = api_instance.expenses_get(current_page, page_size, authorization, sort_by=sort_by, filter=filter)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **int**| Query current page document expenses. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **int**| Query document expenses list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **str**| Query document expenses list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **str**|  | [optional] 

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

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

# **expenses_id_attachment_post**
> AttachmentResponse expenses_id_attachment_post(authorization, id, file=file)

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | 
file = '/path/to/file' # file |  (optional)

    try:
        # Add Attachment to expenses.
        api_response = api_instance.expenses_id_attachment_post(authorization, id, file=file)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_id_attachment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**|  | 
 **file** | **file**|  | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**401** | 401 response |  -  |
**500** | 500 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expenses_id_delete**
> DeleteResponse expenses_id_delete(authorization, id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId

    try:
        # Delete expenses document.
        api_response = api_instance.expenses_id_delete(authorization, id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId | 

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

# **expenses_id_get**
> ExpenseInlineDocumentResponse expenses_id_get(authorization, id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | 

    try:
        # Get expenses document.
        api_response = api_instance.expenses_id_get(authorization, id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

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

# **expenses_id_payment_post**
> ExpenseSimpleDocumentResponse expenses_id_payment_post(authorization, id, payment_paid_document)

Change paid status of expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId หรือ documentId
payment_paid_document = openapi_client.PaymentPaidDocument() # PaymentPaidDocument | 

    try:
        # Change paid status of expenses document.
        api_response = api_instance.expenses_id_payment_post(authorization, id, payment_paid_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_id_payment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId หรือ documentId | 
 **payment_paid_document** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

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

# **expenses_id_put**
> ExpenseInlineDocumentResponse expenses_id_put(authorization, id, update_expense_document)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId
update_expense_document = openapi_client.UpdateExpenseDocument() # UpdateExpenseDocument | 

    try:
        # Edit expenses document.
        api_response = api_instance.expenses_id_put(authorization, id, update_expense_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId | 
 **update_expense_document** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

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

# **expenses_id_status_status_id_post**
> ExpenseInlineDocumentResponse expenses_id_status_status_id_post(authorization, id, status_id)

Change status of expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId
status_id = 'status_id_example' # str | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก

    try:
        # Change status of expenses document.
        api_response = api_instance.expenses_id_status_status_id_post(authorization, id, status_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_id_status_status_id_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId | 
 **status_id** | **str**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

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

# **expenses_inline_post**
> ExpenseInlineDocumentResponse expenses_inline_post(authorization, expense_inline_document)

Create expenses document with discount and tax inline.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
expense_inline_document = openapi_client.ExpenseInlineDocument() # ExpenseInlineDocument | 

    try:
        # Create expenses document with discount and tax inline.
        api_response = api_instance.expenses_inline_post(authorization, expense_inline_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_inline_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_inline_document** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

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

# **expenses_inline_with_payment_post**
> ExpenseInlineDocumentResponse expenses_inline_with_payment_post(authorization, expense_inline_document_with_payment_paid)

Create expenses document with discount and tax inline with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
expense_inline_document_with_payment_paid = openapi_client.ExpenseInlineDocumentWithPaymentPaid() # ExpenseInlineDocumentWithPaymentPaid | 

    try:
        # Create expenses document with discount and tax inline with payment.
        api_response = api_instance.expenses_inline_with_payment_post(authorization, expense_inline_document_with_payment_paid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_inline_with_payment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_inline_document_with_payment_paid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

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

# **expenses_post**
> ExpenseSimpleDocumentResponse expenses_post(authorization, expense_simple_document)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
expense_simple_document = openapi_client.ExpenseSimpleDocument() # ExpenseSimpleDocument | 

    try:
        # Create expenses document.
        api_response = api_instance.expenses_post(authorization, expense_simple_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_simple_document** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

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

# **expenses_sharedocument_post**
> ShareDocumentResponse expenses_sharedocument_post(authorization, share_document)

Share link expenses documents.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
share_document = openapi_client.ShareDocument() # ShareDocument | 

    try:
        # Share link expenses documents.
        api_response = api_instance.expenses_sharedocument_post(authorization, share_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_sharedocument_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **share_document** | [**ShareDocument**](ShareDocument.md)|  | 

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

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

# **expenses_with_payment_post**
> ExpenseSimpleDocumentResponse expenses_with_payment_post(authorization, expense_simple_document_with_payment_paid)

Create expenses document with-payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://openapi.flowaccount.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.flowaccount.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExpensesApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
expense_simple_document_with_payment_paid = openapi_client.ExpenseSimpleDocumentWithPaymentPaid() # ExpenseSimpleDocumentWithPaymentPaid | 

    try:
        # Create expenses document with-payment.
        api_response = api_instance.expenses_with_payment_post(authorization, expense_simple_document_with_payment_paid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ExpensesApi->expenses_with_payment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **expense_simple_document_with_payment_paid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

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

