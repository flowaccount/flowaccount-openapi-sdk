# SimpleDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecordId** | **int64** | id ของเอกสาร | [optional] [default to 0]
**ContactCode** | **string** | รหัส ลูกค้า/ผู้จำหน่าย | [optional] 
**ContactName** | **string** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**ContactAddress** | **string** | ที่อยู่ ลูกค้า/ผู้จำหน่าย | [optional] 
**ContactTaxId** | **string** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**ContactBranch** | **string** | สำนักงาน/สาขา | [optional] 
**ContactPerson** | **string** | ชื่อผู้ติดต่อ | [optional] 
**ContactEmail** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**ContactNumber** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**ContactZipCode** | **string** | รหัสไปรษณีย์ติดต่อ | [optional] 
**ContactGroup** | **int32** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**PublishedOn** | **string** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**CreditType** | **int32** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**CreditDays** | **int32** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**DueDate** | **string** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**SalesName** | **string** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to อีเมล หรือ ชื่อผู้สร้างเอกสาร]
**ProjectName** | **string** | ชื่อโปรเจค | [optional] 
**Reference** | **string** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**IsVatInclusive** | **bool** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**UseReceiptDeduction** | **bool** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) | [optional] [default to false]
**SubTotal** | **float32** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**DiscountPercentage** | **int32** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**DiscountAmount** | **float32** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**TotalAfterDiscount** | **float32** | มูลค่าหลังหักส่วนลด | 
**IsVat** | **bool** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**VatAmount** | **float32** | ภาษีมูลค่าเพิ่ม | [optional] 
**GrandTotal** | **float32** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**DocumentShowWithholdingTax** | **bool** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร | [optional] [default to false]
**DocumentWithholdingTaxPercentage** | **int32** | ภาษี ณ ที่จ่าย (%) | [optional] [default to 0]
**DocumentWithholdingTaxAmount** | **float32** | มูลค่าภาษีหัก ณ ที่จ่าย | [optional] [default to 0]
**DocumentDeductionType** | **int32** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**DocumentDeductionAmount** | **float32** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**Remarks** | **string** | หมายเหตุเอกสาร | [optional] 
**InternalNotes** | **string** | โน๊ตภายในบริษัท | [optional] 
**ShowSignatureOrStamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**DocumentStructureType** | Pointer to **string** |  | 
**Items** | [**[]SimpleProductItem**](SimpleProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple | [optional] 
**DocumentReference** | [**[]UpgradeDocument**](UpgradeDocument.md) | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


