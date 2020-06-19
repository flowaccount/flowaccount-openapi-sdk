# ReceiptAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiptsEmailDocumentPost**](ReceiptAPI.md#receiptsemaildocumentpost) | **POST** /receipts/email-document | Send email receipt document.
[**receiptsGet**](ReceiptAPI.md#receiptsget) | **GET** /receipts | Get all receipt documents
[**receiptsIdAttachmentPost**](ReceiptAPI.md#receiptsidattachmentpost) | **POST** /receipts/{id}/attachment | Attachment receipt document.
[**receiptsIdDelete**](ReceiptAPI.md#receiptsiddelete) | **DELETE** /receipts/{id} | Delete receipt document.
[**receiptsIdGet**](ReceiptAPI.md#receiptsidget) | **GET** /receipts/{id} | Get receipt document.
[**receiptsIdPaymentPost**](ReceiptAPI.md#receiptsidpaymentpost) | **POST** /receipts/{id}/payment | Change status is paid receipt document.
[**receiptsIdPut**](ReceiptAPI.md#receiptsidput) | **PUT** /receipts/{id} | Edit receipt document.
[**receiptsIdStatusStatusIdPost**](ReceiptAPI.md#receiptsidstatusstatusidpost) | **POST** /receipts/{id}/status/{statusId} | Change status receipt document.
[**receiptsInlinePost**](ReceiptAPI.md#receiptsinlinepost) | **POST** /receipts/inline | Create receipt document inline discount or inline vat.
[**receiptsInlineWithPaymentPost**](ReceiptAPI.md#receiptsinlinewithpaymentpost) | **POST** /receipts/inline/with-payment | Create receipt document inline discount or inline vat with payment.
[**receiptsPost**](ReceiptAPI.md#receiptspost) | **POST** /receipts | Create receipt document.
[**receiptsSharedocumentPost**](ReceiptAPI.md#receiptssharedocumentpost) | **POST** /receipts/sharedocument | Share link receipt document.
[**receiptsWithPaymentPost**](ReceiptAPI.md#receiptswithpaymentpost) | **POST** /receipts/with-payment | Create receipt document with payment.


# **receiptsEmailDocumentPost**
```swift
    open class func receiptsEmailDocumentPost(authorization: String, sendEmailCoppies: SendEmailCoppies, completion: @escaping (_ data: SendEmailResponse?, _ error: Error?) -> Void)
```

Send email receipt document.

ส่งเอกสารใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sendEmailCoppies = SendEmailCoppies(doCopy: false) // SendEmailCoppies | 

// Send email receipt document.
ReceiptAPI.receiptsEmailDocumentPost(authorization: authorization, sendEmailCoppies: sendEmailCoppies) { (response, error) in
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

# **receiptsGet**
```swift
    open class func receiptsGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: AllDocumentResponse?, _ error: Error?) -> Void)
```

Get all receipt documents

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page document receipts. <br>Example Pattern: <ex>/receipts?currentPage=1 </ex><ex>/receipts?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/receipts?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String | Query filter receipts. <br>Example Pattern: <ex> /receipts?filter=[{'columnName':'Contact.NameLocal','columnValue':'Contact Name','columnPredicateOperator':'And'}] </ex> (optional)

// Get all receipt documents
ReceiptAPI.receiptsGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page document receipts. &lt;br&gt;Example Pattern: &lt;ex&gt;/receipts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/receipts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** | Query filter receipts. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiptsIdAttachmentPost**
```swift
    open class func receiptsIdAttachmentPost(authorization: String, id: String, file: URL? = nil, completion: @escaping (_ data: AttachmentResponse?, _ error: Error?) -> Void)
```

Attachment receipt document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let file = URL(string: "https://example.com")! // URL | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)

// Attachment receipt document.
ReceiptAPI.receiptsIdAttachmentPost(authorization: authorization, id: id, file: file) { (response, error) in
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

# **receiptsIdDelete**
```swift
    open class func receiptsIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete receipt document.

ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Delete receipt document.
ReceiptAPI.receiptsIdDelete(authorization: authorization, id: id) { (response, error) in
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

# **receiptsIdGet**
```swift
    open class func receiptsIdGet(authorization: String, id: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Get receipt document.

เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Get receipt document.
ReceiptAPI.receiptsIdGet(authorization: authorization, id: id) { (response, error) in
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

# **receiptsIdPaymentPost**
```swift
    open class func receiptsIdPaymentPost(authorization: String, id: String, paymentReceivingDocument: PaymentReceivingDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Change status is paid receipt document.

เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId หรือ documentId
let paymentReceivingDocument = PaymentReceivingDocument(paymentStructureType: "paymentStructureType_example", documentId: 123, paymentMethod: 123, paymentDate: Date(), collected: 123, paymentDeductionType: 123, paymentDeductionAmount: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // PaymentReceivingDocument | 

// Change status is paid receipt document.
ReceiptAPI.receiptsIdPaymentPost(authorization: authorization, id: id, paymentReceivingDocument: paymentReceivingDocument) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId หรือ documentId | 
 **paymentReceivingDocument** | [**PaymentReceivingDocument**](PaymentReceivingDocument.md) |  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiptsIdPut**
```swift
    open class func receiptsIdPut(authorization: String, id: String, updateInlineDocument: UpdateInlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Edit receipt document.

แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let updateInlineDocument = UpdateInlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // UpdateInlineDocument | 

// Edit receipt document.
ReceiptAPI.receiptsIdPut(authorization: authorization, id: id, updateInlineDocument: updateInlineDocument) { (response, error) in
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

# **receiptsIdStatusStatusIdPost**
```swift
    open class func receiptsIdStatusStatusIdPost(authorization: String, id: String, statusId: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Change status receipt document.

เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let statusId = "statusId_example" // String | เปลี่ยนสถานะเอกสารได้ 1 สถานะ <br> void = ยกเลิก

// Change status receipt document.
ReceiptAPI.receiptsIdStatusStatusIdPost(authorization: authorization, id: id, statusId: statusId) { (response, error) in
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
 **statusId** | **String** | เปลี่ยนสถานะเอกสารได้ 1 สถานะ &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiptsInlinePost**
```swift
    open class func receiptsInlinePost(authorization: String, inlineDocument: InlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create receipt document inline discount or inline vat.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let inlineDocument = InlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // InlineDocument | 

// Create receipt document inline discount or inline vat.
ReceiptAPI.receiptsInlinePost(authorization: authorization, inlineDocument: inlineDocument) { (response, error) in
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

# **receiptsInlineWithPaymentPost**
```swift
    open class func receiptsInlineWithPaymentPost(authorization: String, inlineDocumentWithPaymentReceiving: InlineDocumentWithPaymentReceiving, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create receipt document inline discount or inline vat with payment.

สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let inlineDocumentWithPaymentReceiving = InlineDocumentWithPaymentReceiving(contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), creditType: 123, creditDays: 123, dueDate: Date(), salesName: "salesName_example", projectName: "projectName_example", reference: "reference_example", isVatInclusive: false, useReceiptDeduction: false, items: [SimpleProductItem()], subTotal: 123, discountPercentage: 123, discountAmount: 123, totalAfterDiscount: 123, isVat: false, vatAmount: 123, grandTotal: 123, discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, documentShowWithholdingTax: false, documentWithholdingTaxPercentage: 123, documentWithholdingTaxAmount: 123, documentDeductionType: 123, documentDeductionAmount: 123, remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false, documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)], documentPaymentStructureType: "documentPaymentStructureType_example", paymentMethod: 123, paymentDate: Date(), collected: 123, paymentDeductionType: 123, paymentDeductionAmount: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // InlineDocumentWithPaymentReceiving | 

// Create receipt document inline discount or inline vat with payment.
ReceiptAPI.receiptsInlineWithPaymentPost(authorization: authorization, inlineDocumentWithPaymentReceiving: inlineDocumentWithPaymentReceiving) { (response, error) in
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
 **inlineDocumentWithPaymentReceiving** | [**InlineDocumentWithPaymentReceiving**](InlineDocumentWithPaymentReceiving.md) |  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiptsPost**
```swift
    open class func receiptsPost(authorization: String, simpleDocument: SimpleDocument, completion: @escaping (_ data: SimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create receipt document.

สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let simpleDocument = SimpleDocument(items: [SimpleProductItem()], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // SimpleDocument | 

// Create receipt document.
ReceiptAPI.receiptsPost(authorization: authorization, simpleDocument: simpleDocument) { (response, error) in
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

# **receiptsSharedocumentPost**
```swift
    open class func receiptsSharedocumentPost(authorization: String, shareDocument: ShareDocument, completion: @escaping (_ data: ShareDocumentResponse?, _ error: Error?) -> Void)
```

Share link receipt document.

แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let shareDocument = ShareDocument(documentId: 123, culture: "culture_example") // ShareDocument | 

// Share link receipt document.
ReceiptAPI.receiptsSharedocumentPost(authorization: authorization, shareDocument: shareDocument) { (response, error) in
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

# **receiptsWithPaymentPost**
```swift
    open class func receiptsWithPaymentPost(authorization: String, simpleDocumentWithPaymentReceiving: SimpleDocumentWithPaymentReceiving, completion: @escaping (_ data: SimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create receipt document with payment.

สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let simpleDocumentWithPaymentReceiving = SimpleDocumentWithPaymentReceiving(contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), creditType: 123, creditDays: 123, dueDate: Date(), salesName: "salesName_example", projectName: "projectName_example", reference: "reference_example", isVatInclusive: false, useReceiptDeduction: false, subTotal: 123, discountPercentage: 123, discountAmount: 123, totalAfterDiscount: 123, isVat: false, vatAmount: 123, grandTotal: 123, documentShowWithholdingTax: false, documentWithholdingTaxPercentage: 123, documentWithholdingTaxAmount: 123, documentDeductionType: 123, documentDeductionAmount: 123, remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false, items: [SimpleProductItem()], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)], documentPaymentStructureType: "documentPaymentStructureType_example", paymentMethod: 123, paymentDate: Date(), collected: 123, paymentDeductionType: 123, paymentDeductionAmount: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // SimpleDocumentWithPaymentReceiving | 

// Create receipt document with payment.
ReceiptAPI.receiptsWithPaymentPost(authorization: authorization, simpleDocumentWithPaymentReceiving: simpleDocumentWithPaymentReceiving) { (response, error) in
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
 **simpleDocumentWithPaymentReceiving** | [**SimpleDocumentWithPaymentReceiving**](SimpleDocumentWithPaymentReceiving.md) |  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

