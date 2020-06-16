# # ExpenseInlineDocumentResponseAllOfData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_id** | **int** | id ของเอกสาร | [optional] [default to 0]
**document_id** | **int** | id ของเอกสาร | [optional] [default to 0]
**document_serial** | **string** | เลขที่เอกสาร | [optional] 
**contact_code** | **string** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_name** | **string** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_address** | **string** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_tax_id** | **string** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **string** | สำนักงาน/สาขา | [optional] 
**contact_person** | **string** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: supplier@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **string** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contact_group** | **int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | [**\DateTime**](\DateTime.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**credit_type** | **int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**credit_days** | **int** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**due_date** | [**\DateTime**](\DateTime.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**sales_name** | **string** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to 'อีเมล หรือ ชื่อผู้สร้างเอกสาร']
**project_name** | **string** | ชื่อโปรเจค | [optional] 
**reference** | **string** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**is_vat_inclusive** | **bool** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**items** | [**\OpenAPI\Client\Model\ExpenseInlineProductItem[]**](ExpenseInlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense | [optional] 
**sub_total** | **float** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**discount_percentage** | **int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discount_amount** | **float** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**total_after_discount** | **float** | มูลค่าหลังหักส่วนลด | [optional] 
**is_vat** | **bool** | มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**vat_amount** | **float** | ภาษีมูลค่าเพิ่ม | [optional] 
**grand_total** | **float** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | [optional] 
**remarks** | **string** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **string** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**discount_type** | **int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**use_inline_discount** | **bool** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**use_inline_vat** | **bool** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**exempt_amount** | **float** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**vatable_amount** | **float** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**payments** | [**\OpenAPI\Client\Model\SimpleDocumentResponseAllOfDataPayments**](SimpleDocumentResponseAllOfDataPayments.md) |  | [optional] 
**company** | [**\OpenAPI\Client\Model\SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  | [optional] 
**status** | **int** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**status_string** | **int** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**document_type** | **int** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**allow_delete** | **bool** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


