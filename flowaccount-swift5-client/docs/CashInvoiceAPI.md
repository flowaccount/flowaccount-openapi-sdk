# CashInvoiceAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cashInvoicesEmailDocumentPost**](CashInvoiceAPI.md#cashinvoicesemaildocumentpost) | **POST** /cash-invoices/email-document | Send email cash invoices document.
[**cashInvoicesGet**](CashInvoiceAPI.md#cashinvoicesget) | **GET** /cash-invoices | Get list all cash invoices documents
[**cashInvoicesIdAttachmentPost**](CashInvoiceAPI.md#cashinvoicesidattachmentpost) | **POST** /cash-invoices/{id}/attachment | Add Attachment to cash invoices document.
[**cashInvoicesIdDelete**](CashInvoiceAPI.md#cashinvoicesiddelete) | **DELETE** /cash-invoices/{id} | Delete cash invoices document.
[**cashInvoicesIdGet**](CashInvoiceAPI.md#cashinvoicesidget) | **GET** /cash-invoices/{id} | Get cash invoices document.
[**cashInvoicesIdPaymentPost**](CashInvoiceAPI.md#cashinvoicesidpaymentpost) | **POST** /cash-invoices/{id}/payment | Change paid status of cash invoices document.
[**cashInvoicesIdPut**](CashInvoiceAPI.md#cashinvoicesidput) | **PUT** /cash-invoices/{id} | Edit cash invoices document.
[**cashInvoicesIdStatusStatusIdPost**](CashInvoiceAPI.md#cashinvoicesidstatusstatusidpost) | **POST** /cash-invoices/{id}/status/{statusId} | Change status of cash invoices document.
[**cashInvoicesInlinePost**](CashInvoiceAPI.md#cashinvoicesinlinepost) | **POST** /cash-invoices/inline | Create cash invoices document with discount and tax inline.
[**cashInvoicesInlineWithPaymentPost**](CashInvoiceAPI.md#cashinvoicesinlinewithpaymentpost) | **POST** /cash-invoices/inline/with-payment | Create cash invoices document with discount and tax inline with payment.
[**cashInvoicesPost**](CashInvoiceAPI.md#cashinvoicespost) | **POST** /cash-invoices | Create cash invoices document.
[**cashInvoicesSharedocumentPost**](CashInvoiceAPI.md#cashinvoicessharedocumentpost) | **POST** /cash-invoices/sharedocument | Share link cash invoices document.
[**cashInvoicesWithPaymentPost**](CashInvoiceAPI.md#cashinvoiceswithpaymentpost) | **POST** /cash-invoices/with-payment | Create cash invoices document with payment.


# **cashInvoicesEmailDocumentPost**
```swift
    open class func cashInvoicesEmailDocumentPost(authorization: String, sendEmailCoppies: SendEmailCoppies, completion: @escaping (_ data: SendEmailResponse?, _ error: Error?) -> Void)
```

Send email cash invoices document.

ส่งเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sendEmailCoppies = SendEmailCoppies(doCopy: false) // SendEmailCoppies | 

// Send email cash invoices document.
CashInvoiceAPI.cashInvoicesEmailDocumentPost(authorization: authorization, sendEmailCoppies: sendEmailCoppies) { (response, error) in
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

# **cashInvoicesGet**
```swift
    open class func cashInvoicesGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: AllDocumentResponse?, _ error: Error?) -> Void)
```

Get list all cash invoices documents

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ทั้งหมดในระบบ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page document cash invoices. <br>Example Pattern: <ex>/cash-invoices?currentPage=1 </ex><ex>/cash-invoices?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Query document cash invoices list amount per page. <br>Example Pattern: <ex> /cash-invoices?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/cash-invoices?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/cash-invoices?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String |  (optional)

// Get list all cash invoices documents
CashInvoiceAPI.cashInvoicesGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page document cash invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/cash-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/cash-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** |  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cashInvoicesIdAttachmentPost**
```swift
    open class func cashInvoicesIdAttachmentPost(authorization: String, id: String, file: URL? = nil, completion: @escaping (_ data: AttachmentResponse?, _ error: Error?) -> Void)
```

Add Attachment to cash invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let file = URL(string: "https://example.com")! // URL | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)

// Add Attachment to cash invoices document.
CashInvoiceAPI.cashInvoicesIdAttachmentPost(authorization: authorization, id: id, file: file) { (response, error) in
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

# **cashInvoicesIdDelete**
```swift
    open class func cashInvoicesIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete cash invoices document.

ลบ เอกสารใบกำกับ/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Delete cash invoices document.
CashInvoiceAPI.cashInvoicesIdDelete(authorization: authorization, id: id) { (response, error) in
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

# **cashInvoicesIdGet**
```swift
    open class func cashInvoicesIdGet(authorization: String, id: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Get cash invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | 

// Get cash invoices document.
CashInvoiceAPI.cashInvoicesIdGet(authorization: authorization, id: id) { (response, error) in
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
 **id** | **String** |  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cashInvoicesIdPaymentPost**
```swift
    open class func cashInvoicesIdPaymentPost(authorization: String, id: String, paymentReceivingDocument: PaymentReceivingDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Change paid status of cash invoices document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId หรือ documentId
let paymentReceivingDocument = PaymentReceivingDocument(paymentStructureType: "paymentStructureType_example", documentId: 123, paymentMethod: 123, paymentDate: Date(), collected: 123, paymentDeductionType: 123, paymentDeductionAmount: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // PaymentReceivingDocument | 

// Change paid status of cash invoices document.
CashInvoiceAPI.cashInvoicesIdPaymentPost(authorization: authorization, id: id, paymentReceivingDocument: paymentReceivingDocument) { (response, error) in
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

# **cashInvoicesIdPut**
```swift
    open class func cashInvoicesIdPut(authorization: String, id: String, updateInlineDocument: UpdateInlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Edit cash invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let updateInlineDocument = UpdateInlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // UpdateInlineDocument | 

// Edit cash invoices document.
CashInvoiceAPI.cashInvoicesIdPut(authorization: authorization, id: id, updateInlineDocument: updateInlineDocument) { (response, error) in
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

# **cashInvoicesIdStatusStatusIdPost**
```swift
    open class func cashInvoicesIdStatusStatusIdPost(authorization: String, id: String, statusId: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Change status of cash invoices document.

เปลี่ยนสถานะของเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let statusId = "statusId_example" // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> invoicedelivered = รอเก็บเงิน <br> void = ยกเลิก

// Change status of cash invoices document.
CashInvoiceAPI.cashInvoicesIdStatusStatusIdPost(authorization: authorization, id: id, statusId: statusId) { (response, error) in
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
 **statusId** | **String** | เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cashInvoicesInlinePost**
```swift
    open class func cashInvoicesInlinePost(authorization: String, inlineDocument: InlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create cash invoices document with discount and tax inline.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let inlineDocument = InlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // InlineDocument | 

// Create cash invoices document with discount and tax inline.
CashInvoiceAPI.cashInvoicesInlinePost(authorization: authorization, inlineDocument: inlineDocument) { (response, error) in
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

# **cashInvoicesInlineWithPaymentPost**
```swift
    open class func cashInvoicesInlineWithPaymentPost(authorization: String, inlineDocumentWithPaymentReceiving: InlineDocumentWithPaymentReceiving, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create cash invoices document with discount and tax inline with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let inlineDocumentWithPaymentReceiving = InlineDocumentWithPaymentReceiving(contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), creditType: 123, creditDays: 123, dueDate: Date(), salesName: "salesName_example", projectName: "projectName_example", reference: "reference_example", isVatInclusive: false, useReceiptDeduction: false, items: [SimpleProductItem()], subTotal: 123, discountPercentage: 123, discountAmount: 123, totalAfterDiscount: 123, isVat: false, vatAmount: 123, grandTotal: 123, discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, documentShowWithholdingTax: false, documentWithholdingTaxPercentage: 123, documentWithholdingTaxAmount: 123, documentDeductionType: 123, documentDeductionAmount: 123, remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false, documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)], documentPaymentStructureType: "documentPaymentStructureType_example", paymentMethod: 123, paymentDate: Date(), collected: 123, paymentDeductionType: 123, paymentDeductionAmount: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // InlineDocumentWithPaymentReceiving | 

// Create cash invoices document with discount and tax inline with payment.
CashInvoiceAPI.cashInvoicesInlineWithPaymentPost(authorization: authorization, inlineDocumentWithPaymentReceiving: inlineDocumentWithPaymentReceiving) { (response, error) in
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

# **cashInvoicesPost**
```swift
    open class func cashInvoicesPost(authorization: String, simpleDocument: SimpleDocument, completion: @escaping (_ data: SimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create cash invoices document.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let simpleDocument = SimpleDocument(items: [SimpleProductItem()], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // SimpleDocument | 

// Create cash invoices document.
CashInvoiceAPI.cashInvoicesPost(authorization: authorization, simpleDocument: simpleDocument) { (response, error) in
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

# **cashInvoicesSharedocumentPost**
```swift
    open class func cashInvoicesSharedocumentPost(authorization: String, shareDocument: ShareDocument, completion: @escaping (_ data: ShareDocumentResponse?, _ error: Error?) -> Void)
```

Share link cash invoices document.

แชร์ลิงค์ เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let shareDocument = ShareDocument(documentId: 123, culture: "culture_example") // ShareDocument | 

// Share link cash invoices document.
CashInvoiceAPI.cashInvoicesSharedocumentPost(authorization: authorization, shareDocument: shareDocument) { (response, error) in
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

# **cashInvoicesWithPaymentPost**
```swift
    open class func cashInvoicesWithPaymentPost(authorization: String, simpleDocumentWithPaymentReceiving: SimpleDocumentWithPaymentReceiving, completion: @escaping (_ data: SimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create cash invoices document with payment.

สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let simpleDocumentWithPaymentReceiving = SimpleDocumentWithPaymentReceiving(contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), creditType: 123, creditDays: 123, dueDate: Date(), salesName: "salesName_example", projectName: "projectName_example", reference: "reference_example", isVatInclusive: false, useReceiptDeduction: false, subTotal: 123, discountPercentage: 123, discountAmount: 123, totalAfterDiscount: 123, isVat: false, vatAmount: 123, grandTotal: 123, documentShowWithholdingTax: false, documentWithholdingTaxPercentage: 123, documentWithholdingTaxAmount: 123, documentDeductionType: 123, documentDeductionAmount: 123, remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false, items: [SimpleProductItem()], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)], documentPaymentStructureType: "documentPaymentStructureType_example", paymentMethod: 123, paymentDate: Date(), collected: 123, paymentDeductionType: 123, paymentDeductionAmount: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // SimpleDocumentWithPaymentReceiving | 

// Create cash invoices document with payment.
CashInvoiceAPI.cashInvoicesWithPaymentPost(authorization: authorization, simpleDocumentWithPaymentReceiving: simpleDocumentWithPaymentReceiving) { (response, error) in
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

