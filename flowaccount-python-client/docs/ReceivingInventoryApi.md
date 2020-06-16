# openapi_client.ReceivingInventoryApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchases_email_document_post**](ReceivingInventoryApi.md#purchases_email_document_post) | **POST** /purchases/email-document | Send email receiving inventory document.
[**purchases_get**](ReceivingInventoryApi.md#purchases_get) | **GET** /purchases | Get list all receiving inventory documents.
[**purchases_id_attachment_post**](ReceivingInventoryApi.md#purchases_id_attachment_post) | **POST** /purchases/{id}/attachment | Add Attachment to receiving inventory document.
[**purchases_id_delete**](ReceivingInventoryApi.md#purchases_id_delete) | **DELETE** /purchases/{id} | Delete receiving inventory document.
[**purchases_id_get**](ReceivingInventoryApi.md#purchases_id_get) | **GET** /purchases/{id} | Get receiving inventory document.
[**purchases_id_payment_post**](ReceivingInventoryApi.md#purchases_id_payment_post) | **POST** /purchases/{id}/payment | Change paid status of receiving inventory document.
[**purchases_id_put**](ReceivingInventoryApi.md#purchases_id_put) | **PUT** /purchases/{id} | Edit receiving inventory document.
[**purchases_id_status_status_id_post**](ReceivingInventoryApi.md#purchases_id_status_status_id_post) | **POST** /purchases/{id}/status/{statusId} | Change status of receiving inventory document.
[**purchases_inline_post**](ReceivingInventoryApi.md#purchases_inline_post) | **POST** /purchases/inline | Create receiving inventory document with discount and tax inline.
[**purchases_inline_with_payment_post**](ReceivingInventoryApi.md#purchases_inline_with_payment_post) | **POST** /purchases/inline/with-payment | Create receiving inventory document with discount and tax inline with payment.
[**purchases_post**](ReceivingInventoryApi.md#purchases_post) | **POST** /purchases | Create receiving inventory document.
[**purchases_sharedocument_post**](ReceivingInventoryApi.md#purchases_sharedocument_post) | **POST** /purchases/sharedocument | Share link receiving inventory document.
[**purchases_with_payment_post**](ReceivingInventoryApi.md#purchases_with_payment_post) | **POST** /purchases/with-payment | Create receiving inventory document with payment.


# **purchases_email_document_post**
> SendEmailResponse purchases_email_document_post(authorization, send_email_coppies)

Send email receiving inventory document.

ส่งเอกสารใบรับสินค้า ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
send_email_coppies = openapi_client.SendEmailCoppies() # SendEmailCoppies | 

    try:
        # Send email receiving inventory document.
        api_response = api_instance.purchases_email_document_post(authorization, send_email_coppies)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_email_document_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **send_email_coppies** | [**SendEmailCoppies**](SendEmailCoppies.md)|  | 

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

# **purchases_get**
> AllDocumentResponse purchases_get(current_page, page_size, authorization, sort_by=sort_by, filter=filter)

Get list all receiving inventory documents.

เรียกดูข้อมูลเอกสารใบรับสินค้าทั้งหมดในระบบ

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    current_page = 56 # int | Query current page document purchases. <br>Example Pattern: <ex>/purchases?currentPage=1 </ex><ex>/purchases?currentPage=1&pageSize=20</ex>
page_size = 56 # int | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?pageSize=20 </ex>
authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
sort_by = 'sort_by_example' # str | Query document purchases list amount per page. <br>Example Pattern: <ex> /purchases?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
filter = 'filter_example' # str |  (optional)

    try:
        # Get list all receiving inventory documents.
        api_response = api_instance.purchases_get(current_page, page_size, authorization, sort_by=sort_by, filter=filter)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_page** | **int**| Query current page document purchases. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **page_size** | **int**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **sort_by** | **str**| Query document purchases list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **str**|  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

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

# **purchases_id_attachment_post**
> AttachmentResponse purchases_id_attachment_post(authorization, id, file=file)

Add Attachment to receiving inventory document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
file = '/path/to/file' # file | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)

    try:
        # Add Attachment to receiving inventory document.
        api_response = api_instance.purchases_id_attachment_post(authorization, id, file=file)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_id_attachment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ | 
 **file** | **file**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional] 

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

# **purchases_id_delete**
> DeleteResponse purchases_id_delete(authorization, id)

Delete receiving inventory document.

ลบ เอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId

    try:
        # Delete receiving inventory document.
        api_response = api_instance.purchases_id_delete(authorization, id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_id_delete: %s\n" % e)
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

# **purchases_id_get**
> InlineDocumentResponse purchases_id_get(authorization, id)

Get receiving inventory document.

เรียกดูข้อมูลเอกสารใบรับสินค้าตามเลขที่เอกสารที่ต้องการ

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId

    try:
        # Get receiving inventory document.
        api_response = api_instance.purchases_id_get(authorization, id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

# **purchases_id_payment_post**
> InlineDocumentResponse purchases_id_payment_post(authorization, id, payment_paid_document)

Change paid status of receiving inventory document.

ขำระเงิน เอกสารใบรับสินค้าเปลี่ยนสถานะเป็น ชำระเงินแล้ว

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId หรือ documentId
payment_paid_document = openapi_client.PaymentPaidDocument() # PaymentPaidDocument | 

    try:
        # Change paid status of receiving inventory document.
        api_response = api_instance.purchases_id_payment_post(authorization, id, payment_paid_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_id_payment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId หรือ documentId | 
 **payment_paid_document** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

# **purchases_id_put**
> InlineDocumentResponse purchases_id_put(authorization, id, update_inline_document)

Edit receiving inventory document.

แก้ไขข้อมูลเอกสารใบรับสินค้า ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId
update_inline_document = openapi_client.UpdateInlineDocument() # UpdateInlineDocument | 

    try:
        # Edit receiving inventory document.
        api_response = api_instance.purchases_id_put(authorization, id, update_inline_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId | 
 **update_inline_document** | [**UpdateInlineDocument**](UpdateInlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

# **purchases_id_status_status_id_post**
> InlineDocumentResponse purchases_id_status_status_id_post(authorization, id, status_id)

Change status of receiving inventory document.

เปลี่ยนสถานะของเอกสารใบรับสินค้า สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
id = 'id_example' # str | ID เอกสารใช้ recordId
status_id = 'status_id_example' # str | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> void = ยกเลิก

    try:
        # Change status of receiving inventory document.
        api_response = api_instance.purchases_id_status_status_id_post(authorization, id, status_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_id_status_status_id_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **id** | **str**| ID เอกสารใช้ recordId | 
 **status_id** | **str**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

# **purchases_inline_post**
> InlineDocumentResponse purchases_inline_post(authorization, inline_document)

Create receiving inventory document with discount and tax inline.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting)

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
inline_document = openapi_client.InlineDocument() # InlineDocument | 

    try:
        # Create receiving inventory document with discount and tax inline.
        api_response = api_instance.purchases_inline_post(authorization, inline_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_inline_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **inline_document** | [**InlineDocument**](InlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

# **purchases_inline_with_payment_post**
> InlineDocumentResponse purchases_inline_with_payment_post(authorization, inline_document_with_payment_paid)

Create receiving inventory document with discount and tax inline with payment.

สร้างเอกสารใบรับสินค้า แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
inline_document_with_payment_paid = openapi_client.InlineDocumentWithPaymentPaid() # InlineDocumentWithPaymentPaid | 

    try:
        # Create receiving inventory document with discount and tax inline with payment.
        api_response = api_instance.purchases_inline_with_payment_post(authorization, inline_document_with_payment_paid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_inline_with_payment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **inline_document_with_payment_paid** | [**InlineDocumentWithPaymentPaid**](InlineDocumentWithPaymentPaid.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

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

# **purchases_post**
> SimpleDocumentResponse purchases_post(authorization, simple_document)

Create receiving inventory document.

สร้างเอกสารใบรับสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
simple_document = openapi_client.SimpleDocument() # SimpleDocument | 

    try:
        # Create receiving inventory document.
        api_response = api_instance.purchases_post(authorization, simple_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document** | [**SimpleDocument**](SimpleDocument.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

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

# **purchases_sharedocument_post**
> ShareDocumentResponse purchases_sharedocument_post(authorization, share_document)

Share link receiving inventory document.

แชร์ลิงค์ เอกสารใบรับสินค้าที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
share_document = openapi_client.ShareDocument() # ShareDocument | 

    try:
        # Share link receiving inventory document.
        api_response = api_instance.purchases_sharedocument_post(authorization, share_document)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_sharedocument_post: %s\n" % e)
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

# **purchases_with_payment_post**
> SimpleDocumentResponse purchases_with_payment_post(authorization, simple_document_with_payment_paid)

Create receiving inventory document with payment.

สร้างเอกสารใบรับสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

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
    api_instance = openapi_client.ReceivingInventoryApi(api_client)
    authorization = 'Bearer accessToken' # str |  (default to 'Bearer accessToken')
simple_document_with_payment_paid = openapi_client.SimpleDocumentWithPaymentPaid() # SimpleDocumentWithPaymentPaid | 

    try:
        # Create receiving inventory document with payment.
        api_response = api_instance.purchases_with_payment_post(authorization, simple_document_with_payment_paid)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ReceivingInventoryApi->purchases_with_payment_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [default to &#39;Bearer accessToken&#39;]
 **simple_document_with_payment_paid** | [**SimpleDocumentWithPaymentPaid**](SimpleDocumentWithPaymentPaid.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

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

