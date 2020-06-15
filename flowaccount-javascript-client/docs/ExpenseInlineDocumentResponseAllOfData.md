# FlowAccountOpenApi.ExpenseInlineDocumentResponseAllOfData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordId** | **Number** | id ของเอกสาร | [optional] [default to 0]
**documentId** | **Number** | id ของเอกสาร | [optional] [default to 0]
**documentSerial** | **String** | เลขที่เอกสาร | [optional] 
**contactCode** | **String** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contactName** | **String** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contactAddress** | **String** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contactTaxId** | **String** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contactBranch** | **String** | สำนักงาน/สาขา | [optional] 
**contactPerson** | **String** | ชื่อผู้ติดต่อ | [optional] 
**contactEmail** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: supplier@email.com&lt;/ex&gt; | [optional] 
**contactNumber** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contactZipCode** | **String** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contactGroup** | **Number** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**publishedOn** | **Date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**creditType** | **Number** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**creditDays** | **Number** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**dueDate** | **Date** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**salesName** | **String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to &#39;อีเมล หรือ ชื่อผู้สร้างเอกสาร&#39;]
**projectName** | **String** | ชื่อโปรเจค | [optional] 
**reference** | **String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**isVatInclusive** | **Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**items** | [**[ExpenseInlineProductItem]**](ExpenseInlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense | [optional] 
**subTotal** | **Number** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**discountPercentage** | **Number** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discountAmount** | **Number** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**totalAfterDiscount** | **Number** | มูลค่าหลังหักส่วนลด | [optional] 
**isVat** | **Boolean** | มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**vatAmount** | **Number** | ภาษีมูลค่าเพิ่ม | [optional] 
**grandTotal** | **Number** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | [optional] 
**remarks** | **String** | หมายเหตุเอกสาร | [optional] 
**internalNotes** | **String** | โน๊ตภายในบริษัท | [optional] 
**showSignatureOrStamp** | **Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**discountType** | **Number** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**useInlineDiscount** | **Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**useInlineVat** | **Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**exemptAmount** | **Number** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**vatableAmount** | **Number** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**payments** | [**SimpleDocumentResponseAllOfDataPayments**](SimpleDocumentResponseAllOfDataPayments.md) |  | [optional] 
**company** | [**SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  | [optional] 
**status** | **Number** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**statusString** | **Number** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**documentType** | **Number** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**allowDelete** | **Boolean** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

