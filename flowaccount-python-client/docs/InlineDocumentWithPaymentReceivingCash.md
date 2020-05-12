# InlineDocumentWithPaymentReceivingCash

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_code** | **str** | รหัส ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_name** | **str** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**contact_address** | **str** | ที่อยู่ ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_tax_id** | **str** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **str** | สำนักงาน/สาขา | [optional] 
**contact_person** | **str** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **str** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **str** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **str** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contact_group** | **int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | **date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**credit_type** | **int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**credit_days** | **int** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**due_date** | **date** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**sales_name** | **str** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to 'อีเมล หรือ ชื่อผู้สร้างเอกสาร']
**project_name** | **str** | ชื่อโปรเจค | [optional] 
**reference** | **str** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**is_vat_inclusive** | **bool** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to False]
**use_receipt_deduction** | **bool** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) | [optional] [default to False]
**items** | [**list[SimpleProductItem]**](SimpleProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple | [optional] 
**sub_total** | **float** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**discount_percentage** | **int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discount_amount** | **float** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**total_after_discount** | **float** | มูลค่าหลังหักส่วนลด | 
**is_vat** | **bool** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% | [optional] [default to False]
**vat_amount** | **float** | ภาษีมูลค่าเพิ่ม | [optional] 
**grand_total** | **float** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**discount_type** | **int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**use_inline_discount** | **bool** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to True]
**use_inline_vat** | **bool** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**exempt_amount** | **float** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**vatable_amount** | **float** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**document_show_withholding_tax** | **bool** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร | [optional] [default to False]
**document_withholding_tax_percentage** | **int** | ภาษี ณ ที่จ่าย (%) | [optional] [default to 0]
**document_withholding_tax_amount** | **float** | มูลค่าภาษีหัก ณ ที่จ่าย | [optional] [default to 0]
**document_deduction_type** | **int** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**document_deduction_amount** | **float** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**remarks** | **str** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **str** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to True]
**document_reference** | [**list[UpgradeDocument]**](UpgradeDocument.md) | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) | [optional] 
**document_payment_structure_type** | **str** | สร้างเอกสารแบบ Inline พร้อมรับชำระเงิน ด้วยเงินสด | 
**payment_method** | **int** | ประเภทการเก็บเงิน &lt;br&gt; 1 &#x3D; เงินสด | [default to 1]
**payment_date** | **date** | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | **float** | จำนวนเงินยอดรับสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [default to 0]
**payment_deduction_type** | **int** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; | [optional] [default to 0]
**payment_deduction_amount** | **float** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]
**withheld_percentage** | **int** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; | [optional] [default to 0]
**withheld_amount** | **float** | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]
**payment_remarks** | **str** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน | [optional] 
**remaining_collected_type** | **int** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  | [optional] [default to 0]
**remaining_collected** | **float** | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


