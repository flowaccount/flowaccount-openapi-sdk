
# Flowaccount.OpenAPITools.Model.ExpenseInlineDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocumentSerial** | **string** | เลขที่เอกสาร | [optional] 
**ContactCode** | **string** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**ContactName** | **string** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | 
**ContactAddress** | **string** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**ContactTaxId** | **string** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**ContactBranch** | **string** | สำนักงาน/สาขา | [optional] 
**ContactPerson** | **string** | ชื่อผู้ติดต่อ | [optional] 
**ContactEmail** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: email@email.com&lt;/ex&gt; | [optional] 
**ContactNumber** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**ContactZipCode** | **string** | รหัสไปรษณีย์ติดต่อ | [optional] 
**ContactGroup** | **int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**PublishedOn** | **DateTime** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**CreditType** | **int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**CreditDays** | **int** | จำนวนวันที่ให้เครดิต | [optional] [default to 0]
**DueDate** | **DateTime** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**SalesName** | **string** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to "อีเมล หรือ ชื่อผู้สร้างเอกสาร"]
**ProjectName** | **string** | ชื่อโปรเจค | [optional] 
**Reference** | **string** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง | [optional] 
**IsVatInclusive** | **bool** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**DiscountType** | **int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**UseInlineDiscount** | **bool** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**UseInlineVat** | **bool** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**Items** | [**List&lt;ExpenseInlineProductItem&gt;**](ExpenseInlineProductItem.md) |  | [optional] 
**SubTotal** | **decimal** | มูลค่ารวมเป็นเงิน | [default to 0M]
**DiscountAmount** | **decimal** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0M]
**TotalAfterDiscount** | **decimal** | มูลค่าหลังหักส่วนลด | 
**ExemptAmount** | **decimal?** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0M]
**VatableAmount** | **decimal?** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0M]
**IsVat** | **bool** | มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**VatAmount** | **decimal** | ภาษีมูลค่าเพิ่ม | [optional] 
**GrandTotal** | **decimal** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**Remarks** | **string** | หมายเหตุเอกสาร | [optional] 
**InternalNotes** | **string** | โน๊ตภายในบริษัท | [optional] 
**ShowSignatureOrStamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

