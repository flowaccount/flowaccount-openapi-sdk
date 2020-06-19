
# WithholidingTaxDocumentResponseData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordId** | **kotlin.String** | เลข Id เอกสารใบหัก ณ ที่จ่าย |  [optional]
**documentId** | **kotlin.String** | เลข Id เอกสารใบหัก ณ ที่จ่าย |  [optional]
**documentSerial** | **kotlin.String** | เลขที่เอกสารใบหัก ณ ที่จ่าย |  [optional]
**contactCode** | **kotlin.String** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า |  [optional]
**contactName** | **kotlin.String** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า |  [optional]
**contactAddress** | **kotlin.String** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า |  [optional]
**contactTaxId** | **kotlin.String** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; |  [optional]
**contactBranch** | **kotlin.String** | สำนักงาน/สาขา |  [optional]
**contactPerson** | **kotlin.String** | ชื่อผู้ติดต่อ |  [optional]
**contactEmail** | **kotlin.String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; |  [optional]
**contactNumber** | **kotlin.String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**contactZipCode** | **kotlin.String** | รหัสไปรษณีย์ติดต่อ |  [optional]
**contactGroup** | **kotlin.Int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล |  [optional]
**publishedOn** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; |  [optional]
**entity** | **kotlin.Int** | แบบฟอร์มเอกสารหัก ณ ที่จ่าย &lt;br&gt; ภงด 3 &#x3D; 1 &lt;br&gt; ภงด 53 &#x3D; 3 &lt;br&gt; ภงด 1ก &#x3D; 1 &lt;br&gt; ภงด 1ก (พิเศษ) &#x3D; 7 &lt;br&gt; ภงด 2 &#x3D; 9 &lt;br&gt; ภงด 2ก &#x3D; 11 &lt;br&gt; ภงด 3ก &#x3D; 13 |  [optional]
**textOther** | **kotlin.String** | ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) Example: 2020 |  [optional]
**withholdingTaxItems** | [**kotlin.Array&lt;WithholidingTaxItem&gt;**](WithholidingTaxItem.md) | รายการหัก ของเอกสารหัก ณ ที่จ่าย |  [optional]
**total** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงิน (ไม่รวมภาษี) |  [optional]
**totalTaxWithheld** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ภาษีที่หัก |  [optional]
**taxPayment** | **kotlin.Int** | ผู้จ่ายเงิน &lt;br&gt; 1 &#x3D; ภาษีหัก ณ ที่จ่าย &lt;br&gt; 3 &#x3D; ออกภาษีให้ตลอดไป &lt;br&gt; 5 &#x3D; ออกภาษีให้ครั้งเดียว &lt;br&gt; 7 &#x3D; อื่น ๆ |  [optional]
**taxPaymentOthers** | **kotlin.String** | ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ  |  [optional]
**providentFundNumber** | **kotlin.String** | ใบอนุญาตเลขที่ |  [optional]
**providentFundAmount** | **kotlin.String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ |  [optional]
**socialSecurityAmount** | **kotlin.String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม |  [optional]
**remarks** | **kotlin.String** | หมายเหตุเอกสาร |  [optional]
**internalNotes** | **kotlin.String** | โน๊ตภายในบริษัท |  [optional]
**showSignatureOrStamp** | **kotlin.Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง |  [optional]
**company** | [**SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  |  [optional]
**status** | **kotlin.Int** | เลขสถานะเอกสารฉบับนี้ |  [optional]
**statusString** | **kotlin.Int** | ชื่อสถานะเอกสารฉบับนี้ |  [optional]
**documentType** | **kotlin.Int** | เลขประเภทเอกสารฉบับนี้ |  [optional]
**allowDelete** | **kotlin.Boolean** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ |  [optional]



