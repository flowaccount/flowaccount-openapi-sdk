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
  class PaymentReceivingDocument
    # รับชำระเงิน ด้วยบัตรเครดิต
    attr_accessor :payment_structure_type

    # id เอกสาร
    attr_accessor :document_id

    # ประเภทการเก็บเงิน <br> 7 = บัตรเครดิต
    attr_accessor :payment_method

    # วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    attr_accessor :payment_date

    # จำนวนเงินยอดรับสุทธิ <br> <ex> Example : 100.00 </ex>
    attr_accessor :collected

    # ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br>
    attr_accessor :payment_deduction_type

    # จำนวนเงินยอดรายการปรับลด <br> <ex> Example : 100.00 </ex>
    attr_accessor :payment_deduction_amount

    # เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
    attr_accessor :withheld_percentage

    # จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
    attr_accessor :withheld_amount

    # ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    attr_accessor :transfer_bank_account_id

    # เลข id บัญชีธนาคารที่ใช้รับชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>
    attr_accessor :bank_account_id

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

    # ธนาคารที่รับชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    attr_accessor :credit_card_bank_account_id

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'payment_structure_type' => :'paymentStructureType',
        :'document_id' => :'documentId',
        :'payment_method' => :'paymentMethod',
        :'payment_date' => :'paymentDate',
        :'collected' => :'collected',
        :'payment_deduction_type' => :'paymentDeductionType',
        :'payment_deduction_amount' => :'paymentDeductionAmount',
        :'withheld_percentage' => :'withheldPercentage',
        :'withheld_amount' => :'withheldAmount',
        :'transfer_bank_account_id' => :'transferBankAccountId',
        :'bank_account_id' => :'bankAccountId',
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
        :'payment_structure_type' => :'String',
        :'document_id' => :'Integer',
        :'payment_method' => :'Integer',
        :'payment_date' => :'Date',
        :'collected' => :'Float',
        :'payment_deduction_type' => :'Integer',
        :'payment_deduction_amount' => :'Float',
        :'withheld_percentage' => :'Integer',
        :'withheld_amount' => :'Float',
        :'transfer_bank_account_id' => :'Integer',
        :'bank_account_id' => :'Integer',
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
        :'payment_structure_type',
      ])
    end

    # List of class defined in oneOf (OpenAPI v3)
    def self.openapi_one_of
      [
      :'PaymentReceivingCash',
      :'PaymentReceivingCheque',
      :'PaymentReceivingCreditCard',
      :'PaymentReceivingTransfer'
      ]
    end

    # discriminator's property name in OpenAPI v3
    def self.openapi_discriminator_name
      :'payment_structure_type'
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::PaymentReceivingDocument` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::PaymentReceivingDocument`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'payment_structure_type')
        self.payment_structure_type = attributes[:'payment_structure_type']
      end

      if attributes.key?(:'document_id')
        self.document_id = attributes[:'document_id']
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

      if attributes.key?(:'payment_deduction_type')
        self.payment_deduction_type = attributes[:'payment_deduction_type']
      else
        self.payment_deduction_type = 0
      end

      if attributes.key?(:'payment_deduction_amount')
        self.payment_deduction_amount = attributes[:'payment_deduction_amount']
      else
        self.payment_deduction_amount = 0
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
      if @document_id.nil?
        invalid_properties.push('invalid value for "document_id", document_id cannot be nil.')
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
      return false if @document_id.nil?
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
          payment_structure_type == o.payment_structure_type &&
          document_id == o.document_id &&
          payment_method == o.payment_method &&
          payment_date == o.payment_date &&
          collected == o.collected &&
          payment_deduction_type == o.payment_deduction_type &&
          payment_deduction_amount == o.payment_deduction_amount &&
          withheld_percentage == o.withheld_percentage &&
          withheld_amount == o.withheld_amount &&
          transfer_bank_account_id == o.transfer_bank_account_id &&
          bank_account_id == o.bank_account_id &&
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
      [payment_structure_type, document_id, payment_method, payment_date, collected, payment_deduction_type, payment_deduction_amount, withheld_percentage, withheld_amount, transfer_bank_account_id, bank_account_id, payment_remarks, remaining_collected_type, remaining_collected, cheque_date, cheque_number, cheque_bank_account_id, credit_card_bank_account_id].hash
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
