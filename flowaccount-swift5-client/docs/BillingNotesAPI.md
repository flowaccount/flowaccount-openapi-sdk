# BillingNotesAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billingNotesEmailDocumentPost**](BillingNotesAPI.md#billingnotesemaildocumentpost) | **POST** /billing-notes/email-document | Send email billing notes document.
[**billingNotesGet**](BillingNotesAPI.md#billingnotesget) | **GET** /billing-notes | Get all billing notes documents.
[**billingNotesIdAttachmentPost**](BillingNotesAPI.md#billingnotesidattachmentpost) | **POST** /billing-notes/{id}/attachment | Attachment billing notes document.
[**billingNotesIdDelete**](BillingNotesAPI.md#billingnotesiddelete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
[**billingNotesIdGet**](BillingNotesAPI.md#billingnotesidget) | **GET** /billing-notes/{id} | Get billing notes document.
[**billingNotesIdPut**](BillingNotesAPI.md#billingnotesidput) | **PUT** /billing-notes/{id} | Edit billing notes document.
[**billingNotesIdStatusStatusIdPost**](BillingNotesAPI.md#billingnotesidstatusstatusidpost) | **POST** /billing-notes/{id}/status/{statusId} | Change status billing notes document.
[**billingNotesInlinePost**](BillingNotesAPI.md#billingnotesinlinepost) | **POST** /billing-notes/inline | Create billing notes document inline discount or inline vat.
[**billingNotesPost**](BillingNotesAPI.md#billingnotespost) | **POST** /billing-notes | Create billing notes document.
[**billingNotesSharedocumentPost**](BillingNotesAPI.md#billingnotessharedocumentpost) | **POST** /billing-notes/sharedocument | Share link billing notes document.


# **billingNotesEmailDocumentPost**
```swift
    open class func billingNotesEmailDocumentPost(authorization: String, sendEmailCoppies: SendEmailCoppies, completion: @escaping (_ data: SendEmailResponse?, _ error: Error?) -> Void)
```

Send email billing notes document.

ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sendEmailCoppies = SendEmailCoppies(doCopy: false) // SendEmailCoppies | 

// Send email billing notes document.
BillingNotesAPI.billingNotesEmailDocumentPost(authorization: authorization, sendEmailCoppies: sendEmailCoppies) { (response, error) in
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
 **sendEmailCoppies** | [**SendEmailCoppies**](SendEmailCoppies.md) |  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesGet**
```swift
    open class func billingNotesGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: AllDocumentResponse?, _ error: Error?) -> Void)
```

Get all billing notes documents.

เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page document billing notes. <br>Example Pattern: <ex>/billing-notes?currentPage=1 </ex><ex>/billing-notes?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/billing-notes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String | Query filter billing-notes. <br>Example Pattern: <ex> /billing-notes?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex> (optional)

// Get all billing notes documents.
BillingNotesAPI.billingNotesGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page document billing notes. &lt;br&gt;Example Pattern: &lt;ex&gt;/billing-notes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/billing-notes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** | Query filter billing-notes. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesIdAttachmentPost**
```swift
    open class func billingNotesIdAttachmentPost(authorization: String, id: String, file: URL? = nil, completion: @escaping (_ data: AttachmentResponse?, _ error: Error?) -> Void)
```

Attachment billing notes document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let file = URL(string: "https://example.com")! // URL | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)

// Attachment billing notes document.
BillingNotesAPI.billingNotesIdAttachmentPost(authorization: authorization, id: id, file: file) { (response, error) in
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
 **id** | **String** | documentId หรือ recordId ของเอกสารที่ต้องการแนบ | 
 **file** | **URL** | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesIdDelete**
```swift
    open class func billingNotesIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete billing notes document.

ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Delete billing notes document.
BillingNotesAPI.billingNotesIdDelete(authorization: authorization, id: id) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesIdGet**
```swift
    open class func billingNotesIdGet(authorization: String, id: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Get billing notes document.

เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Get billing notes document.
BillingNotesAPI.billingNotesIdGet(authorization: authorization, id: id) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesIdPut**
```swift
    open class func billingNotesIdPut(authorization: String, id: String, updateInlineDocument: UpdateInlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Edit billing notes document.

แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let updateInlineDocument = UpdateInlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // UpdateInlineDocument | 

// Edit billing notes document.
BillingNotesAPI.billingNotesIdPut(authorization: authorization, id: id, updateInlineDocument: updateInlineDocument) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId | 
 **updateInlineDocument** | [**UpdateInlineDocument**](UpdateInlineDocument.md) |  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesIdStatusStatusIdPost**
```swift
    open class func billingNotesIdStatusStatusIdPost(authorization: String, id: String, statusId: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Change status billing notes document.

เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let statusId = "statusId_example" // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รอวางบิล <br> approved = วางบิลแล้ว <br> approvedandprocessed = เปิดบิลแล้ว <br> void = ยกเลิก

// Change status billing notes document.
BillingNotesAPI.billingNotesIdStatusStatusIdPost(authorization: authorization, id: id, statusId: statusId) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId | 
 **statusId** | **String** | เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รอวางบิล &lt;br&gt; approved &#x3D; วางบิลแล้ว &lt;br&gt; approvedandprocessed &#x3D; เปิดบิลแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesInlinePost**
```swift
    open class func billingNotesInlinePost(authorization: String, inlineDocument: InlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create billing notes document inline discount or inline vat.

สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let inlineDocument = InlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // InlineDocument | 

// Create billing notes document inline discount or inline vat.
BillingNotesAPI.billingNotesInlinePost(authorization: authorization, inlineDocument: inlineDocument) { (response, error) in
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
 **inlineDocument** | [**InlineDocument**](InlineDocument.md) |  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesPost**
```swift
    open class func billingNotesPost(authorization: String, simpleDocument: SimpleDocument, completion: @escaping (_ data: SimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create billing notes document.

สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let simpleDocument = SimpleDocument(items: [SimpleProductItem()], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // SimpleDocument | 

// Create billing notes document.
BillingNotesAPI.billingNotesPost(authorization: authorization, simpleDocument: simpleDocument) { (response, error) in
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
 **simpleDocument** | [**SimpleDocument**](SimpleDocument.md) |  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billingNotesSharedocumentPost**
```swift
    open class func billingNotesSharedocumentPost(authorization: String, shareDocument: ShareDocument, completion: @escaping (_ data: ShareDocumentResponse?, _ error: Error?) -> Void)
```

Share link billing notes document.

แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let shareDocument = ShareDocument(documentId: 123, culture: "culture_example") // ShareDocument | 

// Share link billing notes document.
BillingNotesAPI.billingNotesSharedocumentPost(authorization: authorization, shareDocument: shareDocument) { (response, error) in
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
 **shareDocument** | [**ShareDocument**](ShareDocument.md) |  | 

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

