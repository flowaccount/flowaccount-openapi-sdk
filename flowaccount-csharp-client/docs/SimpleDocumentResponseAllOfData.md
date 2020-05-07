
# Flowaccount.OpenAPITools.Model.SimpleDocumentResponseAllOfData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecordId** | **long** | id ของเอกสาร | [optional] [default to 0]
**DocumentId** | **long** | id ของเอกสาร | [optional] [default to 0]
**DocumentSerial** | **string** | เลขที่เอกสาร | [optional] 
**ContactCode** | **string** | รหัส ลูกค้า/ผู้จำหน่าย | [optional] 
**ContactName** | **string** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | [optional] 
**ContactAddress** | **string** | ที่อยู่ ลูกค้า/ผู้จำหน่าย | [optional] 
**ContactTaxId** | **string** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**ContactBranch** | **string** | สำนักงาน/สาขา | [optional] 
**ContactPerson** | **string** | ชื่อผู้ติดต่อ | [optional] 
**ContactEmail** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**ContactNumber** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**ContactZipCode** | **string** | รหัสไปรษณีย์ติดต่อ | [optional] 
**ContactGroup** | **int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**PublishedOn** | **DateTime** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**CreditType** | **int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**CreditDays** | **int** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**DueDate** | **DateTime** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**SalesName** | **string** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to "อีเมล หรือ ชื่อผู้สร้างเอกสาร"]
**ProjectName** | **string** | ชื่อโปรเจค | [optional] 
**Reference** | **string** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**IsVatInclusive** | **bool** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**UseReceiptDeduction** | **bool** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) | [optional] [default to false]
**SubTotal** | **decimal** | มูลค่ารวมเป็นเงิน | [optional] [default to 0M]
**DiscountPercentage** | **int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**DiscountAmount** | **decimal** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0M]
**TotalAfterDiscount** | **decimal** | มูลค่าหลังหักส่วนลด | [optional] 
**TotalWithoutVat** | **decimal** | มูลค่าไม่รวมภาษีมูลค่าเพิ่ม | [optional] 
**IsVat** | **bool** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**VatAmount** | **decimal** | ภาษีมูลค่าเพิ่ม | [optional] 
**GrandTotal** | **decimal** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | [optional] 
**DocumentShowWithholdingTax** | **bool** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร | [optional] [default to false]
**DocumentWithholdingTaxPercentage** | **int** | ภาษี ณ ที่จ่าย (%) | [optional] [default to 0]
**DocumentDeductionType** | **int** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**DocumentDeductionAmount** | **decimal** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0M]
**Remarks** | **string** | หมายเหตุเอกสาร | [optional] 
**InternalNotes** | **string** | โน๊ตภายในบริษัท | [optional] 
**ShowSignatureOrStamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**Items** | [**List&lt;SimpleProductItem&gt;**](SimpleProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple Document | [optional] 
**ReferencedToMe** | [**List&lt;ReferencedToMe&gt;**](ReferencedToMe.md) | ข้อมูลเอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้ | [optional] 
**ReferencedByMe** | [**List&lt;ReferencedByMe&gt;**](ReferencedByMe.md) | เอกสารต้นทางที่อ้างอิง ถึง เอกสารฉบับนี้ | [optional] 
**Payments** | [**List&lt;PaymentDocumentResponse&gt;**](PaymentDocumentResponse.md) | ข้อมูลการเก็บเงินและจ่ายเงินของเอกสาร &lt;br&gt; ข้อมูลการเก็บเงิน: &lt;br&gt;1. ใบกำกับภาษี/ใบเสร็จรับเงิน (Tax Invoice) &lt;br&gt; 2. ใบเสร็จรับเงิน (Receipt) &lt;br&gt; 3. ใบกำกับภาษี/ใบเสร็จรับเงิน (Cash Invoice) &lt;br&gt; ข้อมูลการจ่ายเงิน: &lt;br&gt;1. เอกสารใบรับสินค้า (Receiving Inventory) | [optional] 
**Company** | **List&lt;Object&gt;** | ข้อมูลบริษัทของคุณในเอกสาร | [optional] 
**Status** | **int** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**StatusString** | **int** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**DocumentType** | **int** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**AllowDelete** | **bool** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

