
# SimpleDocumentWithPaymentReceivingCheque

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactName** | **kotlin.String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**publishedOn** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**dueDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**totalAfterDiscount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | มูลค่าหลังหักส่วนลด | 
**grandTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**documentPaymentStructureType** | **kotlin.String** | สร้างเอกสารแบบ Simple พร้อมรับชำระเงิน ด้วยเช็ค | 
**paymentMethod** | **kotlin.Long** | ประเภทการเก็บเงิน &lt;br&gt; 3 &#x3D; เช็ค | 
**paymentDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินยอดรับสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | 
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
**items** | [**kotlin.Array&lt;SimpleProductItem&gt;**](SimpleProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple |  [optional]
**documentReference** | [**kotlin.Array&lt;UpgradeDocument&gt;**](UpgradeDocument.md) | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) |  [optional]
**paymentDeductionType** | **kotlin.Long** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt;  |  [optional]
**paymentDeductionAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินยอดรายการปรับลด &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]
**withheldPercentage** | **kotlin.Long** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; |  [optional]
**withheldAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]
**chequeDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; |  [optional]
**chequeNumber** | **kotlin.String** | เลขที่เช็คธนาคาร &lt;br&gt; &lt;ex&gt;Example: 122-122-122&lt;/ex&gt; |  [optional]
**chequeBankAccountId** | **kotlin.Long** | ธนาคารที่ระบุหน้าเช็ค &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย  |  [optional]
**paymentRemarks** | **kotlin.String** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน |  [optional]
**remainingCollectedType** | **kotlin.Long** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  |  [optional]
**remainingCollected** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]



