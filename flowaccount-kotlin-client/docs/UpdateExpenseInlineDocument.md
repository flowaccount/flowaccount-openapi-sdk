
# UpdateExpenseInlineDocument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**kotlin.Array&lt;ExpenseInlineProductItem&gt;**](ExpenseInlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense |  [optional]
**discountType** | **kotlin.Int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) |  [optional]
**useInlineDiscount** | **kotlin.Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า |  [optional]
**useInlineVat** | **kotlin.Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า |  [optional]
**exemptAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม |  [optional]
**vatableAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ยอดขายที่คิดภาษีมูลค่าเพิ่ม |  [optional]



