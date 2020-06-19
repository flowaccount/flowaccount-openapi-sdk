
# UpdateWithholidingTaxDocument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **kotlin.String** | ชื่อบริษัท | 
**companyAddress** | **kotlin.String** | ที่อยู่บริษัท | 
**companyBranch** | **kotlin.String** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่ 00000&lt;/ex&gt; | 
**contactName** | **kotlin.String** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | 
**publishedOn** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**entity** | **kotlin.Int** | แบบฟอร์มเอกสารหัก ณ ที่จ่าย &lt;br&gt; ภงด 3 &#x3D; 1 &lt;br&gt; ภงด 53 &#x3D; 3 &lt;br&gt; ภงด 1ก &#x3D; 1 &lt;br&gt; ภงด 1ก (พิเศษ) &#x3D; 7 &lt;br&gt; ภงด 2 &#x3D; 9 &lt;br&gt; ภงด 2ก &#x3D; 11 &lt;br&gt; ภงด 3ก &#x3D; 13 | 
**withholdingTaxItems** | [**kotlin.Array&lt;WithholidingTaxItem&gt;**](WithholidingTaxItem.md) | รายการหัก ของเอกสารหัก ณ ที่จ่าย | 
**total** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงิน (ไม่รวมภาษี) | 
**totalTaxWithheld** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ภาษีที่หัก | 
**companyNameEn** | **kotlin.String** | ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) |  [optional]
**companyAddressEn** | **kotlin.String** | ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) |  [optional]
**companyTaxId** | **kotlin.String** | เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt; |  [optional]
**companyBranchEn** | **kotlin.String** | ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) &lt;br&gt;&lt;ex&gt;Example: Head Office 00000&lt;/ex&gt; |  [optional]
**companyPhone** | **kotlin.String** | เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; |  [optional]
**companyMobile** | **kotlin.String** | เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**companyFax** | **kotlin.String** | เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt; |  [optional]
**companyWebsite** | **kotlin.String** | เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt; |  [optional]
**contactCode** | **kotlin.String** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า |  [optional]
**contactAddress** | **kotlin.String** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า |  [optional]
**contactTaxId** | **kotlin.String** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; |  [optional]
**contactBranch** | **kotlin.String** | สำนักงาน/สาขา |  [optional]
**contactPerson** | **kotlin.String** | ชื่อผู้ติดต่อ |  [optional]
**contactEmail** | **kotlin.String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; |  [optional]
**contactNumber** | **kotlin.String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**contactZipCode** | **kotlin.String** | รหัสไปรษณีย์ติดต่อ |  [optional]
**contactGroup** | **kotlin.Int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล |  [optional]
**textOther** | **kotlin.String** | ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) &lt;br&gt;Example: 2020&lt;/ex&gt; |  [optional]
**taxPayment** | **kotlin.Int** | ผู้จ่ายเงิน &lt;br&gt; 1 &#x3D; ภาษีหัก ณ ที่จ่าย &lt;br&gt; 3 &#x3D; ออกภาษีให้ตลอดไป &lt;br&gt; 5 &#x3D; ออกภาษีให้ครั้งเดียว &lt;br&gt; 7 &#x3D; อื่น ๆ |  [optional]
**taxPaymentOthers** | **kotlin.String** | ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ  |  [optional]
**providentFundNumber** | **kotlin.String** | ใบอนุญาตเลขที่ |  [optional]
**providentFundAmount** | **kotlin.String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ |  [optional]
**socialSecurityAmount** | **kotlin.String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม |  [optional]
**remarks** | **kotlin.String** | หมายเหตุเอกสาร |  [optional]
**internalNotes** | **kotlin.String** | โน๊ตภายในบริษัท |  [optional]
**showSignatureOrStamp** | **kotlin.Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง |  [optional]



