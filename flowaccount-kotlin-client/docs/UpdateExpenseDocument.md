
# UpdateExpenseDocument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **kotlin.String** | ชื่อบริษัท | 
**companyAddress** | **kotlin.String** | ที่อยู่บริษัท | 
**companyBranch** | **kotlin.String** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่ 00000&lt;/ex&gt; | 
**contactName** | **kotlin.String** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | 
**publishedOn** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**subTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่ารวมเป็นเงิน | 
**totalAfterDiscount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าหลังหักส่วนลด | 
**grandTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
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
**contactEmail** | **kotlin.String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: supplier@email.com&lt;/ex&gt; |  [optional]
**contactNumber** | **kotlin.String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**contactZipCode** | **kotlin.String** | รหัสไปรษณีย์ติดต่อ |  [optional]
**contactGroup** | **kotlin.Int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล |  [optional]
**creditType** | **kotlin.Int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) |  [optional]
**creditDays** | **kotlin.Int** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; |  [optional]
**dueDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; |  [optional]
**salesName** | **kotlin.String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; |  [optional]
**projectName** | **kotlin.String** | ชื่อโปรเจค |  [optional]
**reference** | **kotlin.String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; |  [optional]
**isVatInclusive** | **kotlin.Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ |  [optional]
**discountPercentage** | **kotlin.Int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ |  [optional]
**discountAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าส่วนลดเป็นจำนวน (บาท) |  [optional]
**isVat** | **kotlin.Boolean** | มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% |  [optional]
**vatAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ภาษีมูลค่าเพิ่ม |  [optional]
**remarks** | **kotlin.String** | หมายเหตุเอกสาร |  [optional]
**internalNotes** | **kotlin.String** | โน๊ตภายในบริษัท |  [optional]
**showSignatureOrStamp** | **kotlin.Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง |  [optional]
**expenseStructureType** | **kotlin.String** |  |  [optional]



