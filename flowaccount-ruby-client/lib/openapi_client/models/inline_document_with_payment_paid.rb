=begin
#FlowAccount Open API

## Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64

The version of the OpenAPI document: 2-oas3
Contact: developer_support@flowaccount.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1

=end

require 'date'

module OpenapiClient
  class InlineDocumentWithPaymentPaid
    # รหัส ลูกค้า/ผู้จำหน่าย
    attr_accessor :contact_code

    # ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
    attr_accessor :contact_name

    # ที่อยู่ ลูกค้า/ผู้จำหน่าย
    attr_accessor :contact_address

    # เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
    attr_accessor :contact_tax_id

    # สำนักงาน/สาขา
    attr_accessor :contact_branch

    # ชื่อผู้ติดต่อ
    attr_accessor :contact_person

    # อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
    attr_accessor :contact_email

    # เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
    attr_accessor :contact_number

    # รหัสไปรษณีย์ติดต่อ
    attr_accessor :contact_zip_code

    # ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
    attr_accessor :contact_group

    # วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    attr_accessor :published_on

    # รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
    attr_accessor :credit_type

    # จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
    attr_accessor :credit_days

    # วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    attr_accessor :due_date

    # ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
    attr_accessor :sales_name

    # ชื่อโปรเจค
    attr_accessor :project_name

    # เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
    attr_accessor :reference

    # มูลค่าเอกสารรวมภาษีแล้วหรือไม่
    attr_accessor :is_vat_inclusive

    # เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน)
    attr_accessor :use_receipt_deduction

    # รายการสินค้าใช้งานสำหรับเอกสาร Simple
    attr_accessor :items

    # มูลค่ารวมเป็นเงิน
    attr_accessor :sub_total

    # มูลค่าส่วนลดเป็นเปอร์เซ็นต์
    attr_accessor :discount_percentage

    # มูลค่าส่วนลดเป็นจำนวน (บาท)
    attr_accessor :discount_amount

    # มูลค่าหลังหักส่วนลด
    attr_accessor :total_after_discount

    # มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
    attr_accessor :is_vat

    # ภาษีมูลค่าเพิ่ม
    attr_accessor :vat_amount

    # จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
    attr_accessor :grand_total

    # รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
    attr_accessor :discount_type

    # inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
    attr_accessor :use_inline_discount

    # inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
    attr_accessor :use_inline_vat

    # ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
    attr_accessor :exempt_amount

    # ยอดขายที่คิดภาษีมูลค่าเพิ่ม
    attr_accessor :vatable_amount

    # แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร
    attr_accessor :document_show_withholding_tax

    # ภาษี ณ ที่จ่าย (%)
    attr_accessor :document_withholding_tax_percentage

    # มูลค่าภาษีหัก ณ ที่จ่าย
    attr_accessor :document_withholding_tax_amount

    # ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
    attr_accessor :document_deduction_type

    # จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
    attr_accessor :document_deduction_amount

    # หมายเหตุเอกสาร
    attr_accessor :remarks

    # โน๊ตภายในบริษัท
    attr_accessor :internal_notes

    # ลายเซ็นอิเล็กทรอนิกส์และตรายาง
    attr_accessor :show_signature_or_stamp

    # สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
    attr_accessor :document_reference

    # สร้างเอกสารแบบ Inline พร้อมชำระเงิน ด้วยบัตรเครดิต
    attr_accessor :document_payment_structure_type

    # ประเภทการชำระเงิน <br> 7 = บัตรเครดิต
    attr_accessor :payment_method

    # วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    attr_accessor :payment_date

    # จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
    attr_accessor :collected

    # เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
    attr_accessor :withheld_percentage

    # จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
    attr_accessor :withheld_amount

    # ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    attr_accessor :transfer_bank_account_id

    # เลข id บัญชีธนาคารที่ใช้ชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>
    attr_accessor :bank_account_id

    # ค่าธรรมเนียม ที่ชำระโดยเช็ค <br> <ex> Example : 100.00 </ex>
    attr_accessor :payment_charge

    # หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
    attr_accessor :payment_remarks

    # สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
    attr_accessor :remaining_collected_type

    # จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
    attr_accessor :remaining_collected

    # วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    attr_accessor :cheque_date

    # เลขที่เช็คธนาคาร <br> <ex>Example: 122-122-122</ex>
    attr_accessor :cheque_number

    # ธนาคารที่ระบุหน้าเช็ค <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    attr_accessor :cheque_bank_account_id

    # ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    attr_accessor :credit_card_bank_account_id

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'contact_code' => :'contactCode',
        :'contact_name' => :'contactName',
        :'contact_address' => :'contactAddress',
        :'contact_tax_id' => :'contactTaxId',
        :'contact_branch' => :'contactBranch',
        :'contact_person' => :'contactPerson',
        :'contact_email' => :'contactEmail',
        :'contact_number' => :'contactNumber',
        :'contact_zip_code' => :'contactZipCode',
        :'contact_group' => :'contactGroup',
        :'published_on' => :'publishedOn',
        :'credit_type' => :'creditType',
        :'credit_days' => :'creditDays',
        :'due_date' => :'dueDate',
        :'sales_name' => :'salesName',
        :'project_name' => :'projectName',
        :'reference' => :'reference',
        :'is_vat_inclusive' => :'isVatInclusive',
        :'use_receipt_deduction' => :'useReceiptDeduction',
        :'items' => :'items',
        :'sub_total' => :'subTotal',
        :'discount_percentage' => :'discountPercentage',
        :'discount_amount' => :'discountAmount',
        :'total_after_discount' => :'totalAfterDiscount',
        :'is_vat' => :'isVat',
        :'vat_amount' => :'vatAmount',
        :'grand_total' => :'grandTotal',
        :'discount_type' => :'discountType',
        :'use_inline_discount' => :'useInlineDiscount',
        :'use_inline_vat' => :'useInlineVat',
        :'exempt_amount' => :'exemptAmount',
        :'vatable_amount' => :'vatableAmount',
        :'document_show_withholding_tax' => :'documentShowWithholdingTax',
        :'document_withholding_tax_percentage' => :'documentWithholdingTaxPercentage',
        :'document_withholding_tax_amount' => :'documentWithholdingTaxAmount',
        :'document_deduction_type' => :'documentDeductionType',
        :'document_deduction_amount' => :'documentDeductionAmount',
        :'remarks' => :'remarks',
        :'internal_notes' => :'internalNotes',
        :'show_signature_or_stamp' => :'showSignatureOrStamp',
        :'document_reference' => :'documentReference',
        :'document_payment_structure_type' => :'documentPaymentStructureType',
        :'payment_method' => :'paymentMethod',
        :'payment_date' => :'paymentDate',
        :'collected' => :'collected',
        :'withheld_percentage' => :'withheldPercentage',
        :'withheld_amount' => :'withheldAmount',
        :'transfer_bank_account_id' => :'transferBankAccountId',
        :'bank_account_id' => :'bankAccountId',
        :'payment_charge' => :'paymentCharge',
        :'payment_remarks' => :'paymentRemarks',
        :'remaining_collected_type' => :'remainingCollectedType',
        :'remaining_collected' => :'remainingCollected',
        :'cheque_date' => :'chequeDate',
        :'cheque_number' => :'chequeNumber',
        :'cheque_bank_account_id' => :'chequeBankAccountId',
        :'credit_card_bank_account_id' => :'creditCardBankAccountId'
      }
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'contact_code' => :'String',
        :'contact_name' => :'String',
        :'contact_address' => :'String',
        :'contact_tax_id' => :'String',
        :'contact_branch' => :'String',
        :'contact_person' => :'String',
        :'contact_email' => :'String',
        :'contact_number' => :'String',
        :'contact_zip_code' => :'String',
        :'contact_group' => :'Integer',
        :'published_on' => :'Date',
        :'credit_type' => :'Integer',
        :'credit_days' => :'Integer',
        :'due_date' => :'Date',
        :'sales_name' => :'String',
        :'project_name' => :'String',
        :'reference' => :'String',
        :'is_vat_inclusive' => :'Boolean',
        :'use_receipt_deduction' => :'Boolean',
        :'items' => :'Array<SimpleProductItem>',
        :'sub_total' => :'Float',
        :'discount_percentage' => :'Integer',
        :'discount_amount' => :'Float',
        :'total_after_discount' => :'Float',
        :'is_vat' => :'Boolean',
        :'vat_amount' => :'Float',
        :'grand_total' => :'Float',
        :'discount_type' => :'Integer',
        :'use_inline_discount' => :'Boolean',
        :'use_inline_vat' => :'Boolean',
        :'exempt_amount' => :'Float',
        :'vatable_amount' => :'Float',
        :'document_show_withholding_tax' => :'Boolean',
        :'document_withholding_tax_percentage' => :'Integer',
        :'document_withholding_tax_amount' => :'Float',
        :'document_deduction_type' => :'Integer',
        :'document_deduction_amount' => :'Float',
        :'remarks' => :'String',
        :'internal_notes' => :'String',
        :'show_signature_or_stamp' => :'Boolean',
        :'document_reference' => :'Array<UpgradeDocument>',
        :'document_payment_structure_type' => :'String',
        :'payment_method' => :'Integer',
        :'payment_date' => :'Date',
        :'collected' => :'Float',
        :'withheld_percentage' => :'Integer',
        :'withheld_amount' => :'Float',
        :'transfer_bank_account_id' => :'Integer',
        :'bank_account_id' => :'Integer',
        :'payment_charge' => :'Float',
        :'payment_remarks' => :'String',
        :'remaining_collected_type' => :'Integer',
        :'remaining_collected' => :'Float',
        :'cheque_date' => :'Date',
        :'cheque_number' => :'String',
        :'cheque_bank_account_id' => :'Integer',
        :'credit_card_bank_account_id' => :'Integer'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
        :'exempt_amount',
        :'vatable_amount',
        :'document_payment_structure_type',
      ])
    end

    # List of class defined in oneOf (OpenAPI v3)
    def self.openapi_one_of
      [
      :'InlineDocumentWithPaymentPaidCash',
      :'InlineDocumentWithPaymentPaidCheque',
      :'InlineDocumentWithPaymentPaidCreditCard',
      :'InlineDocumentWithPaymentPaidTransfer'
      ]
    end

    # discriminator's property name in OpenAPI v3
    def self.openapi_discriminator_name
      :'document_payment_structure_type'
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::InlineDocumentWithPaymentPaid` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::InlineDocumentWithPaymentPaid`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'contact_code')
        self.contact_code = attributes[:'contact_code']
      end

      if attributes.key?(:'contact_name')
        self.contact_name = attributes[:'contact_name']
      end

      if attributes.key?(:'contact_address')
        self.contact_address = attributes[:'contact_address']
      end

      if attributes.key?(:'contact_tax_id')
        self.contact_tax_id = attributes[:'contact_tax_id']
      end

      if attributes.key?(:'contact_branch')
        self.contact_branch = attributes[:'contact_branch']
      end

      if attributes.key?(:'contact_person')
        self.contact_person = attributes[:'contact_person']
      end

      if attributes.key?(:'contact_email')
        self.contact_email = attributes[:'contact_email']
      end

      if attributes.key?(:'contact_number')
        self.contact_number = attributes[:'contact_number']
      end

      if attributes.key?(:'contact_zip_code')
        self.contact_zip_code = attributes[:'contact_zip_code']
      end

      if attributes.key?(:'contact_group')
        self.contact_group = attributes[:'contact_group']
      else
        self.contact_group = 1
      end

      if attributes.key?(:'published_on')
        self.published_on = attributes[:'published_on']
      end

      if attributes.key?(:'credit_type')
        self.credit_type = attributes[:'credit_type']
      else
        self.credit_type = 1
      end

      if attributes.key?(:'credit_days')
        self.credit_days = attributes[:'credit_days']
      else
        self.credit_days = 0
      end

      if attributes.key?(:'due_date')
        self.due_date = attributes[:'due_date']
      end

      if attributes.key?(:'sales_name')
        self.sales_name = attributes[:'sales_name']
      else
        self.sales_name = 'อีเมล หรือ ชื่อผู้สร้างเอกสาร'
      end

      if attributes.key?(:'project_name')
        self.project_name = attributes[:'project_name']
      end

      if attributes.key?(:'reference')
        self.reference = attributes[:'reference']
      end

      if attributes.key?(:'is_vat_inclusive')
        self.is_vat_inclusive = attributes[:'is_vat_inclusive']
      else
        self.is_vat_inclusive = false
      end

      if attributes.key?(:'use_receipt_deduction')
        self.use_receipt_deduction = attributes[:'use_receipt_deduction']
      else
        self.use_receipt_deduction = false
      end

      if attributes.key?(:'items')
        if (value = attributes[:'items']).is_a?(Array)
          self.items = value
        end
      end

      if attributes.key?(:'sub_total')
        self.sub_total = attributes[:'sub_total']
      else
        self.sub_total = 0
      end

      if attributes.key?(:'discount_percentage')
        self.discount_percentage = attributes[:'discount_percentage']
      else
        self.discount_percentage = 0
      end

      if attributes.key?(:'discount_amount')
        self.discount_amount = attributes[:'discount_amount']
      else
        self.discount_amount = 0
      end

      if attributes.key?(:'total_after_discount')
        self.total_after_discount = attributes[:'total_after_discount']
      end

      if attributes.key?(:'is_vat')
        self.is_vat = attributes[:'is_vat']
      else
        self.is_vat = false
      end

      if attributes.key?(:'vat_amount')
        self.vat_amount = attributes[:'vat_amount']
      end

      if attributes.key?(:'grand_total')
        self.grand_total = attributes[:'grand_total']
      end

      if attributes.key?(:'discount_type')
        self.discount_type = attributes[:'discount_type']
      else
        self.discount_type = 1
      end

      if attributes.key?(:'use_inline_discount')
        self.use_inline_discount = attributes[:'use_inline_discount']
      else
        self.use_inline_discount = true
      end

      if attributes.key?(:'use_inline_vat')
        self.use_inline_vat = attributes[:'use_inline_vat']
      end

      if attributes.key?(:'exempt_amount')
        self.exempt_amount = attributes[:'exempt_amount']
      else
        self.exempt_amount = 0
      end

      if attributes.key?(:'vatable_amount')
        self.vatable_amount = attributes[:'vatable_amount']
      else
        self.vatable_amount = 0
      end

      if attributes.key?(:'document_show_withholding_tax')
        self.document_show_withholding_tax = attributes[:'document_show_withholding_tax']
      else
        self.document_show_withholding_tax = false
      end

      if attributes.key?(:'document_withholding_tax_percentage')
        self.document_withholding_tax_percentage = attributes[:'document_withholding_tax_percentage']
      else
        self.document_withholding_tax_percentage = 0
      end

      if attributes.key?(:'document_withholding_tax_amount')
        self.document_withholding_tax_amount = attributes[:'document_withholding_tax_amount']
      else
        self.document_withholding_tax_amount = 0
      end

      if attributes.key?(:'document_deduction_type')
        self.document_deduction_type = attributes[:'document_deduction_type']
      else
        self.document_deduction_type = 0
      end

      if attributes.key?(:'document_deduction_amount')
        self.document_deduction_amount = attributes[:'document_deduction_amount']
      else
        self.document_deduction_amount = 0
      end

      if attributes.key?(:'remarks')
        self.remarks = attributes[:'remarks']
      end

      if attributes.key?(:'internal_notes')
        self.internal_notes = attributes[:'internal_notes']
      end

      if attributes.key?(:'show_signature_or_stamp')
        self.show_signature_or_stamp = attributes[:'show_signature_or_stamp']
      else
        self.show_signature_or_stamp = true
      end

      if attributes.key?(:'document_reference')
        if (value = attributes[:'document_reference']).is_a?(Array)
          self.document_reference = value
        end
      end

      if attributes.key?(:'document_payment_structure_type')
        self.document_payment_structure_type = attributes[:'document_payment_structure_type']
      end

      if attributes.key?(:'payment_method')
        self.payment_method = attributes[:'payment_method']
      else
        self.payment_method = 1
      end

      if attributes.key?(:'payment_date')
        self.payment_date = attributes[:'payment_date']
      end

      if attributes.key?(:'collected')
        self.collected = attributes[:'collected']
      else
        self.collected = 0
      end

      if attributes.key?(:'withheld_percentage')
        self.withheld_percentage = attributes[:'withheld_percentage']
      else
        self.withheld_percentage = 0
      end

      if attributes.key?(:'withheld_amount')
        self.withheld_amount = attributes[:'withheld_amount']
      else
        self.withheld_amount = 0
      end

      if attributes.key?(:'transfer_bank_account_id')
        self.transfer_bank_account_id = attributes[:'transfer_bank_account_id']
      else
        self.transfer_bank_account_id = 0
      end

      if attributes.key?(:'bank_account_id')
        self.bank_account_id = attributes[:'bank_account_id']
      else
        self.bank_account_id = 0
      end

      if attributes.key?(:'payment_charge')
        self.payment_charge = attributes[:'payment_charge']
      else
        self.payment_charge = 0
      end

      if attributes.key?(:'payment_remarks')
        self.payment_remarks = attributes[:'payment_remarks']
      end

      if attributes.key?(:'remaining_collected_type')
        self.remaining_collected_type = attributes[:'remaining_collected_type']
      else
        self.remaining_collected_type = 0
      end

      if attributes.key?(:'remaining_collected')
        self.remaining_collected = attributes[:'remaining_collected']
      else
        self.remaining_collected = 0
      end

      if attributes.key?(:'cheque_date')
        self.cheque_date = attributes[:'cheque_date']
      end

      if attributes.key?(:'cheque_number')
        self.cheque_number = attributes[:'cheque_number']
      end

      if attributes.key?(:'cheque_bank_account_id')
        self.cheque_bank_account_id = attributes[:'cheque_bank_account_id']
      else
        self.cheque_bank_account_id = 0
      end

      if attributes.key?(:'credit_card_bank_account_id')
        self.credit_card_bank_account_id = attributes[:'credit_card_bank_account_id']
      else
        self.credit_card_bank_account_id = 0
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @contact_name.nil?
        invalid_properties.push('invalid value for "contact_name", contact_name cannot be nil.')
      end

      if @published_on.nil?
        invalid_properties.push('invalid value for "published_on", published_on cannot be nil.')
      end

      if @due_date.nil?
        invalid_properties.push('invalid value for "due_date", due_date cannot be nil.')
      end

      if @total_after_discount.nil?
        invalid_properties.push('invalid value for "total_after_discount", total_after_discount cannot be nil.')
      end

      if @grand_total.nil?
        invalid_properties.push('invalid value for "grand_total", grand_total cannot be nil.')
      end

      if @payment_method.nil?
        invalid_properties.push('invalid value for "payment_method", payment_method cannot be nil.')
      end

      if @payment_date.nil?
        invalid_properties.push('invalid value for "payment_date", payment_date cannot be nil.')
      end

      if @collected.nil?
        invalid_properties.push('invalid value for "collected", collected cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @contact_name.nil?
      return false if @published_on.nil?
      return false if @due_date.nil?
      return false if @total_after_discount.nil?
      return false if @grand_total.nil?
      return false if @payment_method.nil?
      return false if @payment_date.nil?
      return false if @collected.nil?
      _one_of_found = false
      self.class.openapi_one_of.each do |_class|
        _one_of = OpenapiClient.const_get(_class).build_from_hash(self.to_hash)
        if _one_of.valid?
          if _one_of_found
            return false
          else
            _one_of_found = true
          end
        end
      end

      if !_one_of_found
        return false
      end

      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          contact_code == o.contact_code &&
          contact_name == o.contact_name &&
          contact_address == o.contact_address &&
          contact_tax_id == o.contact_tax_id &&
          contact_branch == o.contact_branch &&
          contact_person == o.contact_person &&
          contact_email == o.contact_email &&
          contact_number == o.contact_number &&
          contact_zip_code == o.contact_zip_code &&
          contact_group == o.contact_group &&
          published_on == o.published_on &&
          credit_type == o.credit_type &&
          credit_days == o.credit_days &&
          due_date == o.due_date &&
          sales_name == o.sales_name &&
          project_name == o.project_name &&
          reference == o.reference &&
          is_vat_inclusive == o.is_vat_inclusive &&
          use_receipt_deduction == o.use_receipt_deduction &&
          items == o.items &&
          sub_total == o.sub_total &&
          discount_percentage == o.discount_percentage &&
          discount_amount == o.discount_amount &&
          total_after_discount == o.total_after_discount &&
          is_vat == o.is_vat &&
          vat_amount == o.vat_amount &&
          grand_total == o.grand_total &&
          discount_type == o.discount_type &&
          use_inline_discount == o.use_inline_discount &&
          use_inline_vat == o.use_inline_vat &&
          exempt_amount == o.exempt_amount &&
          vatable_amount == o.vatable_amount &&
          document_show_withholding_tax == o.document_show_withholding_tax &&
          document_withholding_tax_percentage == o.document_withholding_tax_percentage &&
          document_withholding_tax_amount == o.document_withholding_tax_amount &&
          document_deduction_type == o.document_deduction_type &&
          document_deduction_amount == o.document_deduction_amount &&
          remarks == o.remarks &&
          internal_notes == o.internal_notes &&
          show_signature_or_stamp == o.show_signature_or_stamp &&
          document_reference == o.document_reference &&
          document_payment_structure_type == o.document_payment_structure_type &&
          payment_method == o.payment_method &&
          payment_date == o.payment_date &&
          collected == o.collected &&
          withheld_percentage == o.withheld_percentage &&
          withheld_amount == o.withheld_amount &&
          transfer_bank_account_id == o.transfer_bank_account_id &&
          bank_account_id == o.bank_account_id &&
          payment_charge == o.payment_charge &&
          payment_remarks == o.payment_remarks &&
          remaining_collected_type == o.remaining_collected_type &&
          remaining_collected == o.remaining_collected &&
          cheque_date == o.cheque_date &&
          cheque_number == o.cheque_number &&
          cheque_bank_account_id == o.cheque_bank_account_id &&
          credit_card_bank_account_id == o.credit_card_bank_account_id
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [contact_code, contact_name, contact_address, contact_tax_id, contact_branch, contact_person, contact_email, contact_number, contact_zip_code, contact_group, published_on, credit_type, credit_days, due_date, sales_name, project_name, reference, is_vat_inclusive, use_receipt_deduction, items, sub_total, discount_percentage, discount_amount, total_after_discount, is_vat, vat_amount, grand_total, discount_type, use_inline_discount, use_inline_vat, exempt_amount, vatable_amount, document_show_withholding_tax, document_withholding_tax_percentage, document_withholding_tax_amount, document_deduction_type, document_deduction_amount, remarks, internal_notes, show_signature_or_stamp, document_reference, document_payment_structure_type, payment_method, payment_date, collected, withheld_percentage, withheld_amount, transfer_bank_account_id, bank_account_id, payment_charge, payment_remarks, remaining_collected_type, remaining_collected, cheque_date, cheque_number, cheque_bank_account_id, credit_card_bank_account_id].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.openapi_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        DateTime.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        OpenapiClient.const_get(type).build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          is_nullable = self.class.openapi_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end
        
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end
  end
end
