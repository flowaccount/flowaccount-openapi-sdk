
# Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactName** | **kotlin.String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**publishedOn** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**dueDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**totalAfterDiscount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าหลังหักส่วนลด | 
**grandTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**documentStructureType** | **kotlin.String** |  | 
**recordId** | **kotlin.Long** | id ของเอกสาร |  [optional]
**contactCode** | **kotlin.String** | รหัส ลูกค้า/ผู้จำหน่าย |  [optional]
**contactAddress** | **kotlin.String** | ที่อยู่ ลูกค้า/ผู้จำหน่าย |  [optional]
**contactTaxId** | **kotlin.String** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; |  [optional]
**contactBranch** | **kotlin.String** | สำนักงาน/สาขา |  [optional]
**contactPerson** | **kotlin.String** | ชื่อผู้ติดต่อ |  [optional]
**contactEmail** | **kotlin.String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; |  [optional]
**contactNumber** | **kotlin.String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**contactZipCode** | **kotlin.String** | รหัสไปรษณีย์ติดต่อ |  [optional]
**contactGroup** | **kotlin.Int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล |  [optional]
**creditType** | **kotlin.Int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) |  [optional]
**creditDays** | **kotlin.Int** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; |  [optional]
**salesName** | **kotlin.String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; |  [optional]
**projectName** | **kotlin.String** | ชื่อโปรเจค |  [optional]
**reference** | **kotlin.String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; |  [optional]
**isVatInclusive** | **kotlin.Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ |  [optional]
**useReceiptDeduction** | **kotlin.Boolean** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) |  [optional]
**subTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่ารวมเป็นเงิน |  [optional]
**discountPercentage** | **kotlin.Int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ |  [optional]
**discountAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าส่วนลดเป็นจำนวน (บาท) |  [optional]
**isVat** | **kotlin.Boolean** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% |  [optional]
**vatAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ภาษีมูลค่าเพิ่ม |  [optional]
**documentShowWithholdingTax** | **kotlin.Boolean** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร |  [optional]
**documentWithholdingTaxPercentage** | **kotlin.Int** | ภาษี ณ ที่จ่าย (%) |  [optional]
**documentWithholdingTaxAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าภาษีหัก ณ ที่จ่าย |  [optional]
**documentDeductionType** | **kotlin.Int** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) |  [optional]
**documentDeductionAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) |  [optional]
**remarks** | **kotlin.String** | หมายเหตุเอกสาร |  [optional]
**internalNotes** | **kotlin.String** | โน๊ตภายในบริษัท |  [optional]
**showSignatureOrStamp** | **kotlin.Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง |  [optional]



