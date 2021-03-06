# ExpenseSimpleDocumentResponseAllOfData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordId** | **Int64** | id ของเอกสาร | [optional] [default to 0]
**documentId** | **Int64** | id ของเอกสาร | [optional] [default to 0]
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
**contactGroup** | **Int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**publishedOn** | **Date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**creditType** | **Int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**creditDays** | **Int** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**dueDate** | **Date** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**salesName** | **String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to "อีเมล หรือ ชื่อผู้สร้างเอกสาร"]
**projectName** | **String** | ชื่อโปรเจค | [optional] 
**reference** | **String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**isVatInclusive** | **Bool** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**items** | [ExpenseSimpleProductItem] | รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense | [optional] 
**subTotal** | **Double** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**discountPercentage** | **Int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discountAmount** | **Double** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**totalAfterDiscount** | **Double** | มูลค่าหลังหักส่วนลด | [optional] 
**isVat** | **Bool** | มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**vatAmount** | **Double** | ภาษีมูลค่าเพิ่ม | [optional] 
**grandTotal** | **Double** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | [optional] 
**remarks** | **String** | หมายเหตุเอกสาร | [optional] 
**internalNotes** | **String** | โน๊ตภายในบริษัท | [optional] 
**showSignatureOrStamp** | **Bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**payments** | [**SimpleDocumentResponseAllOfDataPayments**](SimpleDocumentResponseAllOfDataPayments.md) |  | [optional] 
**company** | [**SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  | [optional] 
**status** | **Int** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**statusString** | **Int** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**documentType** | **Int** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**allowDelete** | **Bool** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


