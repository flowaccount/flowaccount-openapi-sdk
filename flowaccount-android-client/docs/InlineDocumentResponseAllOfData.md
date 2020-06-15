

# InlineDocumentResponseAllOfData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordId** | **Long** | id ของเอกสาร |  [optional]
**documentId** | **Long** | id ของเอกสาร |  [optional]
**documentSerial** | **String** | เลขที่เอกสาร |  [optional]
**contactCode** | **String** | รหัส ลูกค้า/ผู้จำหน่าย |  [optional]
**contactName** | **String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; |  [optional]
**contactAddress** | **String** | ที่อยู่ ลูกค้า/ผู้จำหน่าย |  [optional]
**contactTaxId** | **String** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; |  [optional]
**contactBranch** | **String** | สำนักงาน/สาขา |  [optional]
**contactPerson** | **String** | ชื่อผู้ติดต่อ |  [optional]
**contactEmail** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; |  [optional]
**contactNumber** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**contactZipCode** | **String** | รหัสไปรษณีย์ติดต่อ |  [optional]
**contactGroup** | **Integer** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล |  [optional]
**publishedOn** | [**Date**](Date.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; |  [optional]
**creditType** | **Integer** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) |  [optional]
**creditDays** | **Integer** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; |  [optional]
**dueDate** | [**Date**](Date.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; |  [optional]
**salesName** | **String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; |  [optional]
**projectName** | **String** | ชื่อโปรเจค |  [optional]
**reference** | **String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; |  [optional]
**isVatInclusive** | **Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ |  [optional]
**discountType** | **Integer** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) |  [optional]
**useInlineDiscount** | **Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า |  [optional]
**useInlineVat** | **Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า |  [optional]
**useReceiptDeduction** | **Boolean** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) |  [optional]
**subTotal** | [**BigDecimal**](BigDecimal.md) | มูลค่ารวมเป็นเงิน |  [optional]
**discountPercentage** | **Integer** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ |  [optional]
**discountAmount** | [**BigDecimal**](BigDecimal.md) | มูลค่าส่วนลดเป็นจำนวน (บาท) |  [optional]
**totalAfterDiscount** | [**BigDecimal**](BigDecimal.md) | มูลค่าหลังหักส่วนลด |  [optional]
**totalWithoutVat** | [**BigDecimal**](BigDecimal.md) | มูลค่าไม่รวมภาษีมูลค่าเพิ่ม |  [optional]
**exemptAmount** | [**BigDecimal**](BigDecimal.md) | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม |  [optional]
**vatableAmount** | [**BigDecimal**](BigDecimal.md) | ยอดขายที่คิดภาษีมูลค่าเพิ่ม |  [optional]
**isVat** | **Boolean** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% |  [optional]
**vatAmount** | [**BigDecimal**](BigDecimal.md) | ภาษีมูลค่าเพิ่ม |  [optional]
**grandTotal** | [**BigDecimal**](BigDecimal.md) | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) |  [optional]
**documentShowWithholdingTax** | **Boolean** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร |  [optional]
**documentWithholdingTaxPercentage** | **Integer** | ภาษี ณ ที่จ่าย (%) |  [optional]
**documentDeductionType** | **Integer** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) |  [optional]
**documentDeductionAmount** | [**BigDecimal**](BigDecimal.md) | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) |  [optional]
**remarks** | **String** | หมายเหตุเอกสาร |  [optional]
**internalNotes** | **String** | โน๊ตภายในบริษัท |  [optional]
**showSignatureOrStamp** | **Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง |  [optional]
**items** | [**List&lt;InlineProductItem&gt;**](InlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline Document |  [optional]
**referencedToMe** | [**List&lt;ReferencedToMe&gt;**](ReferencedToMe.md) | ข้อมูลเอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้ |  [optional]
**referencedByMe** | [**List&lt;ReferencedByMe&gt;**](ReferencedByMe.md) | เอกสารต้นทางที่อ้างอิง ถึง เอกสารฉบับนี้ |  [optional]
**payments** | [**SimpleDocumentResponseAllOfDataPayments**](SimpleDocumentResponseAllOfDataPayments.md) |  |  [optional]
**company** | [**SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  |  [optional]
**status** | **Integer** | เลขสถานะเอกสารฉบับนี้ |  [optional]
**statusString** | **Integer** | ชื่อสถานะเอกสารฉบับนี้ |  [optional]
**documentType** | **Integer** | เลขประเภทเอกสารฉบับนี้ |  [optional]
**allowDelete** | **Boolean** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ |  [optional]




