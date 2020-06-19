# WithholidingTaxDocumentResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecordId** | **string** | เลข Id เอกสารใบหัก ณ ที่จ่าย | [optional] 
**DocumentId** | **string** | เลข Id เอกสารใบหัก ณ ที่จ่าย | [optional] 
**DocumentSerial** | **string** | เลขที่เอกสารใบหัก ณ ที่จ่าย | [optional] 
**ContactCode** | **string** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**ContactName** | **string** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**ContactAddress** | **string** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**ContactTaxId** | **string** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**ContactBranch** | **string** | สำนักงาน/สาขา | [optional] 
**ContactPerson** | **string** | ชื่อผู้ติดต่อ | [optional] 
**ContactEmail** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**ContactNumber** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**ContactZipCode** | **string** | รหัสไปรษณีย์ติดต่อ | [optional] 
**ContactGroup** | **int32** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**PublishedOn** | **string** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**Entity** | **int32** | แบบฟอร์มเอกสารหัก ณ ที่จ่าย &lt;br&gt; ภงด 3 &#x3D; 1 &lt;br&gt; ภงด 53 &#x3D; 3 &lt;br&gt; ภงด 1ก &#x3D; 1 &lt;br&gt; ภงด 1ก (พิเศษ) &#x3D; 7 &lt;br&gt; ภงด 2 &#x3D; 9 &lt;br&gt; ภงด 2ก &#x3D; 11 &lt;br&gt; ภงด 3ก &#x3D; 13 | [optional] [default to 1]
**TextOther** | **string** | ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) Example: 2020 | [optional] 
**WithholdingTaxItems** | [**[]WithholidingTaxItem**](WithholidingTaxItem.md) | รายการหัก ของเอกสารหัก ณ ที่จ่าย | [optional] 
**Total** | **float32** | จำนวนเงิน (ไม่รวมภาษี) | [optional] 
**TotalTaxWithheld** | **float32** | ภาษีที่หัก | [optional] 
**TaxPayment** | **int32** | ผู้จ่ายเงิน &lt;br&gt; 1 &#x3D; ภาษีหัก ณ ที่จ่าย &lt;br&gt; 3 &#x3D; ออกภาษีให้ตลอดไป &lt;br&gt; 5 &#x3D; ออกภาษีให้ครั้งเดียว &lt;br&gt; 7 &#x3D; อื่น ๆ | [optional] [default to 1]
**TaxPaymentOthers** | **string** | ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ  | [optional] 
**ProvidentFundNumber** | **string** | ใบอนุญาตเลขที่ | [optional] 
**ProvidentFundAmount** | **string** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ | [optional] 
**SocialSecurityAmount** | **string** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม | [optional] 
**Remarks** | **string** | หมายเหตุเอกสาร | [optional] 
**InternalNotes** | **string** | โน๊ตภายในบริษัท | [optional] 
**ShowSignatureOrStamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**Company** | [**SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponse_allOf_data_company.md) |  | [optional] 
**Status** | **int32** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**StatusString** | **int32** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**DocumentType** | **int32** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**AllowDelete** | **bool** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


