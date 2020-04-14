# # ExpenseInlineDocumentAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**\OpenAPI\Client\Model\ExpenseInlineProductItem[]**](ExpenseInlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense | [optional] 
**discount_type** | **int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**use_inline_discount** | **bool** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**use_inline_vat** | **bool** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**exempt_amount** | **float** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**vatable_amount** | **float** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


