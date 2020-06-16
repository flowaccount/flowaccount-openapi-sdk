# WithholidingTaxDocumentResponseData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **String** | เลข Id เอกสารใบหัก ณ ที่จ่าย | [optional] 
**documentSerial** | **String** | เลขที่เอกสารใบหัก ณ ที่จ่าย | [optional] 
**contactCode** | **String** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contactName** | **String** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contactAddress** | **String** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contactTaxId** | **String** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contactBranch** | **String** | สำนักงาน/สาขา | [optional] 
**contactPerson** | **String** | ชื่อผู้ติดต่อ | [optional] 
**contactEmail** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contactNumber** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contactZipCode** | **String** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contactGroup** | **Int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**publishedOn** | **Date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**entity** | **Int** | แบบฟอร์มเอกสารหัก ณ ที่จ่าย &lt;br&gt; ภงด 3 &#x3D; 1 &lt;br&gt; ภงด 53 &#x3D; 3 &lt;br&gt; ภงด 1ก &#x3D; 1 &lt;br&gt; ภงด 1ก (พิเศษ) &#x3D; 7 &lt;br&gt; ภงด 2 &#x3D; 9 &lt;br&gt; ภงด 2ก &#x3D; 11 &lt;br&gt; ภงด 3ก &#x3D; 13 | [optional] [default to 1]
**textOther** | **String** | ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) Example: 2020 | [optional] 
**withholdingTaxItems** | [WithholidingTaxItem] | รายการหัก ของเอกสารหัก ณ ที่จ่าย | [optional] 
**total** | **Double** | จำนวนเงิน (ไม่รวมภาษี) | [optional] 
**totalTaxWithheld** | **Double** | ภาษีที่หัก | [optional] 
**taxPayment** | **Int** | ผู้จ่ายเงิน &lt;br&gt; 1 &#x3D; ภาษีหัก ณ ที่จ่าย &lt;br&gt; 3 &#x3D; ออกภาษีให้ตลอดไป &lt;br&gt; 5 &#x3D; ออกภาษีให้ครั้งเดียว &lt;br&gt; 7 &#x3D; อื่น ๆ | [optional] [default to 1]
**taxPaymentOthers** | **String** | ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ  | [optional] 
**providentFundNumber** | **String** | ใบอนุญาตเลขที่ | [optional] 
**providentFundAmount** | **String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ | [optional] 
**socialSecurityAmount** | **String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม | [optional] 
**remarks** | **String** | หมายเหตุเอกสาร | [optional] 
**internalNotes** | **String** | โน๊ตภายในบริษัท | [optional] 
**showSignatureOrStamp** | **Bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**company** | [**SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  | [optional] 
**status** | **Int** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**statusString** | **Int** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**documentType** | **Int** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**allowDelete** | **Bool** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


