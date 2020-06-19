
# ExpenseInlineDocumentWithPaymentPaidCash

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactName** | **kotlin.String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**publishedOn** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**dueDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**totalAfterDiscount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าหลังหักส่วนลด | 
**grandTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**expensePaymentStructureType** | **kotlin.String** | สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเงินสด | 
**paymentMethod** | **kotlin.Long** | ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด | 
**paymentDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | 
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
**items** | [**kotlin.Array&lt;ExpenseInlineProductItem&gt;**](ExpenseInlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense |  [optional]
**subTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่ารวมเป็นเงิน |  [optional]
**discountPercentage** | **kotlin.Int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ |  [optional]
**discountAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าส่วนลดเป็นจำนวน (บาท) |  [optional]
**isVat** | **kotlin.Boolean** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% |  [optional]
**vatAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ภาษีมูลค่าเพิ่ม |  [optional]
**discountType** | **kotlin.Int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) |  [optional]
**useInlineDiscount** | **kotlin.Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า |  [optional]
**useInlineVat** | **kotlin.Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า |  [optional]
**exemptAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม |  [optional]
**remarks** | **kotlin.String** | หมายเหตุเอกสาร |  [optional]
**internalNotes** | **kotlin.String** | โน๊ตภายในบริษัท |  [optional]
**showSignatureOrStamp** | **kotlin.Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง |  [optional]
**withheldPercentage** | **kotlin.Long** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; |  [optional]
**withheldAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]
**paymentRemarks** | **kotlin.String** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน |  [optional]
**remainingCollectedType** | **kotlin.Long** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  |  [optional]
**remainingCollected** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]



