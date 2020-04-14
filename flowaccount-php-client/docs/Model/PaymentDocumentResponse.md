# # PaymentDocumentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_date** | [**\DateTime**](\DateTime.md) | วันที่รับชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**collected** | **float** | จำนวนเงินยอดรับสุทธิ | [optional] [default to 0]
**payment_deduction_type** | **int** | ประเภทรายการปรับลด: &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**payment_deduction_amount** | **float** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**withheld_percentage** | **int** | เปอร์เซ็น หัก ณ ที่จ่าย | [optional] [default to 0]
**withheld_amount** | **float** | จำนวน ยอดหัก ณ ที่จ่าย | [optional] [default to 0]
**payment_charge** | **float** | ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค &lt;br&gt; (เฉพาะเอกสารค่าใช้จ่าย) | [optional] [default to 0]
**payment_method** | **int** | วิธีการชำระ: &lt;br&gt; 1 &#x3D; เงินสด &lt;br&gt; 3 &#x3D; เช็ค &lt;br&gt; 5 &#x3D; โอนเงิน &lt;br&gt; 7 &#x3D; เครดิต | [optional] [default to 0]
**payment_channel** | **string** | ช่องทางการชำระเงิน: &lt;br&gt; - เงินสด (Cash) &lt;br&gt; - โอนเงิน (Transfer) - ชื่อธนาคาร (Bank Name) &lt;br&gt; - เช็ค (Cheque) &lt;br&gt; - บัตรเครดิต (Credit card) | [optional] 
**bank_account_type** | **int** | ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; ออมทรัพย์ &lt;br&gt; 3 &#x3D; กระแสรายวัน &lt;br&gt; 7 &#x3D; ฝากประจำ | [optional] 
**bank_account_name** | **string** | ชื่อธนาคาร | [optional] 
**bank_account_number** | **string** | เลขที่ธนาคาร / บัตรเคดิต | [optional] 
**cheque_date** | [**\DateTime**](\DateTime.md) | วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**cheque_number** | **string** | เลขที่เช็คธนาคาร | [optional] 
**credit_card_bank_account_id** | **int** | ธนาคารที่ชำระด้วยบัตรเครดิต &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย | [optional] [default to 0]
**payment_remarks** | **string** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน | [optional] 
**remaining_collected_type** | **int** | สาเหตุเงินขาดเงินเกิน: &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร | [optional] [default to 0]
**remaining_collected** | **float** | จำนวน ยอดเงินขาด หรือ เงินเกิน | [optional] [default to 0]

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


