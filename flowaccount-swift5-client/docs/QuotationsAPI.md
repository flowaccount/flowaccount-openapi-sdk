# QuotationsAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotationsEmailDocumentPost**](QuotationsAPI.md#quotationsemaildocumentpost) | **POST** /quotations/email-document | Send email quotations document.
[**quotationsGet**](QuotationsAPI.md#quotationsget) | **GET** /quotations | Get all quotations documents.
[**quotationsIdAttachmentPost**](QuotationsAPI.md#quotationsidattachmentpost) | **POST** /quotations/{id}/attachment | Attachment quotations document.
[**quotationsIdDelete**](QuotationsAPI.md#quotationsiddelete) | **DELETE** /quotations/{id} | Delete quotations document.
[**quotationsIdGet**](QuotationsAPI.md#quotationsidget) | **GET** /quotations/{id} | Get quotations document.
[**quotationsIdPut**](QuotationsAPI.md#quotationsidput) | **PUT** /quotations/{id} | Edit quotations document.
[**quotationsIdStatusStatusIdPost**](QuotationsAPI.md#quotationsidstatusstatusidpost) | **POST** /quotations/{id}/status/{statusId} | Change status quotations document.
[**quotationsInlinePost**](QuotationsAPI.md#quotationsinlinepost) | **POST** /quotations/inline | Create quotations document inline discount or inline vat.
[**quotationsPost**](QuotationsAPI.md#quotationspost) | **POST** /quotations | Create quotations document.
[**quotationsSharedocumentPost**](QuotationsAPI.md#quotationssharedocumentpost) | **POST** /quotations/sharedocument | Share link quotations document.


# **quotationsEmailDocumentPost**
```swift
    open class func quotationsEmailDocumentPost(authorization: String, sendEmailSimple: SendEmailSimple, completion: @escaping (_ data: SendEmailResponse?, _ error: Error?) -> Void)
```

Send email quotations document.

ส่งเอกสารใบเสนอราคา ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sendEmailSimple = SendEmailSimple() // SendEmailSimple | 

// Send email quotations document.
QuotationsAPI.quotationsEmailDocumentPost(authorization: authorization, sendEmailSimple: sendEmailSimple) { (response, error) in
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
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md) |  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotationsGet**
```swift
    open class func quotationsGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: AllDocumentResponse?, _ error: Error?) -> Void)
```

Get all quotations documents.

เรียกดูข้อมูลเอกสารใบเสนอราคาทั้งหมดในระบบ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page document quotations. <br>Example Pattern: <ex>/quotations?currentPage=1 </ex><ex>/quotations?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Query document quotations list amount per page. <br>Example Pattern: <ex> /quotations?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/quotations?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/quotations?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String | Query filter quotations. <br>Example Pattern: <ex> /quotations?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex> (optional)

// Get all quotations documents.
QuotationsAPI.quotationsGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page document quotations. &lt;br&gt;Example Pattern: &lt;ex&gt;/quotations?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/quotations?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Query document quotations list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/quotations?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** | Query filter quotations. &lt;br&gt;Example Pattern: &lt;ex&gt; /quotations?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotationsIdAttachmentPost**
```swift
    open class func quotationsIdAttachmentPost(authorization: String, id: String, file: URL? = nil, completion: @escaping (_ data: AttachmentResponse?, _ error: Error?) -> Void)
```

Attachment quotations document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let file = URL(string: "https://example.com")! // URL | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)

// Attachment quotations document.
QuotationsAPI.quotationsIdAttachmentPost(authorization: authorization, id: id, file: file) { (response, error) in
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

# **quotationsIdDelete**
```swift
    open class func quotationsIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete quotations document.

ลบ เอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Delete quotations document.
QuotationsAPI.quotationsIdDelete(authorization: authorization, id: id) { (response, error) in
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

# **quotationsIdGet**
```swift
    open class func quotationsIdGet(authorization: String, id: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Get quotations document.

เรียกดูข้อมูลเอกสารใบเสนอราคาตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Get quotations document.
QuotationsAPI.quotationsIdGet(authorization: authorization, id: id) { (response, error) in
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

# **quotationsIdPut**
```swift
    open class func quotationsIdPut(authorization: String, id: String, updateInlineDocument: UpdateInlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Edit quotations document.

แก้ไขข้อมูลเอกสารใบเสนอราคา ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let updateInlineDocument = UpdateInlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // UpdateInlineDocument | 

// Edit quotations document.
QuotationsAPI.quotationsIdPut(authorization: authorization, id: id, updateInlineDocument: updateInlineDocument) { (response, error) in
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

# **quotationsIdStatusStatusIdPost**
```swift
    open class func quotationsIdStatusStatusIdPost(authorization: String, id: String, statusId: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Change status quotations document.

เปลี่ยนสถานะของเอกสารใบเสนอราคา สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let statusId = "statusId_example" // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> rejected = ยกเลิก

// Change status quotations document.
QuotationsAPI.quotationsIdStatusStatusIdPost(authorization: authorization, id: id, statusId: statusId) { (response, error) in
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
 **statusId** | **String** | เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; rejected &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotationsInlinePost**
```swift
    open class func quotationsInlinePost(authorization: String, inlineDocument: InlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create quotations document inline discount or inline vat.

สร้างเอกสารใบเสนอราคา แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let inlineDocument = InlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // InlineDocument | 

// Create quotations document inline discount or inline vat.
QuotationsAPI.quotationsInlinePost(authorization: authorization, inlineDocument: inlineDocument) { (response, error) in
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

# **quotationsPost**
```swift
    open class func quotationsPost(authorization: String, simpleDocument: SimpleDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create quotations document.

สร้างเอกสารใบเสนอราคา เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสนอราคา : https://flowaccount.com/blog/ใบเสนอราคา

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let simpleDocument = SimpleDocument(items: [SimpleProductItem()], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // SimpleDocument | 

// Create quotations document.
QuotationsAPI.quotationsPost(authorization: authorization, simpleDocument: simpleDocument) { (response, error) in
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

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quotationsSharedocumentPost**
```swift
    open class func quotationsSharedocumentPost(authorization: String, shareDocument: ShareDocument, completion: @escaping (_ data: ShareDocumentResponse?, _ error: Error?) -> Void)
```

Share link quotations document.

แชร์ลิงค์ เอกสารใบเสนอราคาที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let shareDocument = ShareDocument(documentId: 123, culture: "culture_example") // ShareDocument | 

// Share link quotations document.
QuotationsAPI.quotationsSharedocumentPost(authorization: authorization, shareDocument: shareDocument) { (response, error) in
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

