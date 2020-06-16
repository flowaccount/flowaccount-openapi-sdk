# OpenapiClient::PaymentPaidCash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_structure_type** | **String** | ชำระเงิน ด้วยเงินสด | 
**document_id** | **Integer** | id เอกสาร | 
**payment_method** | **Integer** | ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด | [default to 1]
**payment_date** | **Date** | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | **Float** | จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [default to 0]
**withheld_percentage** | **Integer** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; | [optional] [default to 0]
**withheld_amount** | **Float** | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]
**payment_remarks** | **String** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน | [optional] 
**remaining_collected_type** | **Integer** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  | [optional] [default to 0]
**remaining_collected** | **Float** | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::PaymentPaidCash.new(payment_structure_type: null,
                                 document_id: null,
                                 payment_method: null,
                                 payment_date: Wed Jan 01 07:00:00 ICT 2020,
                                 collected: null,
                                 withheld_percentage: null,
                                 withheld_amount: null,
                                 payment_remarks: null,
                                 remaining_collected_type: null,
                                 remaining_collected: null)
```


