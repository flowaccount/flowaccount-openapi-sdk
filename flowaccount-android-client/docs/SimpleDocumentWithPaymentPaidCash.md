

# SimpleDocumentWithPaymentPaidCash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactCode** | **String** | รหัส ลูกค้า/ผู้จำหน่าย |  [optional]
**contactName** | **String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**contactAddress** | **String** | ที่อยู่ ลูกค้า/ผู้จำหน่าย |  [optional]
**contactTaxId** | **String** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; |  [optional]
**contactBranch** | **String** | สำนักงาน/สาขา |  [optional]
**contactPerson** | **String** | ชื่อผู้ติดต่อ |  [optional]
**contactEmail** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; |  [optional]
**contactNumber** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**contactZipCode** | **String** | รหัสไปรษณีย์ติดต่อ |  [optional]
**contactGroup** | **Integer** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล |  [optional]
**publishedOn** | [**Date**](Date.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**creditType** | **Integer** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) |  [optional]
**creditDays** | **Integer** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; |  [optional]
**dueDate** | [**Date**](Date.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**salesName** | **String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; |  [optional]
**projectName** | **String** | ชื่อโปรเจค |  [optional]
**reference** | **String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; |  [optional]
**isVatInclusive** | **Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ |  [optional]
**useReceiptDeduction** | **Boolean** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) |  [optional]
**subTotal** | [**BigDecimal**](BigDecimal.md) | มูลค่ารวมเป็นเงิน |  [optional]
**discountPercentage** | **Integer** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ |  [optional]
**discountAmount** | [**BigDecimal**](BigDecimal.md) | มูลค่าส่วนลดเป็นจำนวน (บาท) |  [optional]
**totalAfterDiscount** | [**BigDecimal**](BigDecimal.md) | มูลค่าหลังหักส่วนลด | 
**isVat** | **Boolean** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% |  [optional]
**vatAmount** | [**BigDecimal**](BigDecimal.md) | ภาษีมูลค่าเพิ่ม |  [optional]
**grandTotal** | [**BigDecimal**](BigDecimal.md) | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**documentShowWithholdingTax** | **Boolean** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร |  [optional]
**documentWithholdingTaxPercentage** | **Integer** | ภาษี ณ ที่จ่าย (%) |  [optional]
**documentWithholdingTaxAmount** | [**BigDecimal**](BigDecimal.md) | มูลค่าภาษีหัก ณ ที่จ่าย |  [optional]
**documentDeductionType** | **Integer** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) |  [optional]
**documentDeductionAmount** | [**BigDecimal**](BigDecimal.md) | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) |  [optional]
**remarks** | **String** | หมายเหตุเอกสาร |  [optional]
**internalNotes** | **String** | โน๊ตภายในบริษัท |  [optional]
**showSignatureOrStamp** | **Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง |  [optional]
**items** | [**List&lt;SimpleProductItem&gt;**](SimpleProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple |  [optional]
**documentReference** | [**List&lt;UpgradeDocument&gt;**](UpgradeDocument.md) | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) |  [optional]
**documentPaymentStructureType** | **String** | สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเงินสด | 
**paymentMethod** | **Long** | ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด | 
**paymentDate** | [**Date**](Date.md) | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | [**BigDecimal**](BigDecimal.md) | จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | 
**withheldPercentage** | **Long** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; |  [optional]
**withheldAmount** | [**BigDecimal**](BigDecimal.md) | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]
**paymentRemarks** | **String** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน |  [optional]
**remainingCollectedType** | **Long** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  |  [optional]
**remainingCollected** | [**BigDecimal**](BigDecimal.md) | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]




