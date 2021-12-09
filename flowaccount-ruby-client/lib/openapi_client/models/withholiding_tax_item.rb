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
  class WithholidingTaxItem
    # ประเภทเงินได้ที่จ่าย <br> 1 = 1. เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40 (1) <br> 3 = 2. ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40 (2) <br> 5 = 3. ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3) <br> 7 = 4. (ก) ค่าดอกเบี้ย ฯลฯ ตามมาตรา 40(4) (ก) <br> 11 = 4. (ข)(1.1) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 25 ของกำไรสุทธิ <br> 13 = 4. (ข)(1.2) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 20 ของกำไรสุทธิ <br> 15 = 4. (ข)(1.3) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราอื่น ของกำไรสุทธิ (กรุณาระบุ) <br> 17 = 4. (ข)(2.1) กำไรสุทธิของกิจการที่ได้รับยกเว้นเงินได้นิติบุคคล <br> 19 = 4. (ข)(2.2) เงินปันผลหรือเงินส่วนแบ่งของกำไรที่ได้รับยกเว้น... <br> 21 = 4. (ข)(2.3) กำไรสุทธิส่วนที่ได้หักผลขาดทุนสิทธิยกมาไม่เกิน 5 ปี... <br> 23 = 4. (ข)(2.4) กำไรที่รับรู้ทางบัญชีโดยวิธีส่วนได้เสีย (equity method) <br> 25 = 4. (ข)(2.5) อื่นๆ (กรุณาระบุ) <br> 27 = 5. การจ่ายเงินได้ที่ต้องหักภาษี ณ ที่จ่ายตามคำสั่งกรมสรรพากร.... <br> 29 = 6. อื่นๆ (กรุณาระบุ)
    attr_accessor :income_type

    # รายละเอียดหัก ณ ที่จ่าย <br> สำหรับประเภทเงินได้ที่จ่าย ข้อ 4.(ข)(2.5) อื่นๆ และ ข้อ 6. อื่นๆ
    attr_accessor :description

    # อัตราภาษี หัก ณ ที่จ่าย <br> 3 = อัตราภาษี 3% <br> 5 = อัตราภาษี 5% <br> 0.5 = อัตราภาษี 0.5% <br> 0.75 = อัตราภาษี 0.75% <br> 1 = อัตราภาษี 1% <br> 2 = อัตราภาษี 2% <br> 10 = อัตราภาษี 10% <br> 15 = อัตราภาษี 15% <br> -1 = อัตราภาษีเป็นแบบจำนวนเงิน
    attr_accessor :tax_rate

    # จำนวนเงินที่นำมาหักภาษี
    attr_accessor :tax_amount

    # จำนวนเงินไม่รวมภาษีมูลค่าเพิ่ม
    attr_accessor :tax_amount_no_vat

    # จำนวนเงินภาษีหัก ณ ที่จ่าย
    attr_accessor :withheld

    # จำนวนเงินหลังหักภาษี ณ ที่จ่าย (taxAmount - withheld = total)
    attr_accessor :total

    # ภาษีมูลค่าเพิ่ม <br> 1 = รวมภาษีมูลค่าเพิ่ม <br> 3 = ไม่รวมภาษีมูลค่าเพิ่ม <br>7 = ไม่มี/ยกเว้นภาษีมูลค่าเพิ่ม
    attr_accessor :vat_type

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'income_type' => :'incomeType',
        :'description' => :'description',
        :'tax_rate' => :'taxRate',
        :'tax_amount' => :'taxAmount',
        :'tax_amount_no_vat' => :'taxAmountNoVat',
        :'withheld' => :'withheld',
        :'total' => :'total',
        :'vat_type' => :'vatType'
      }
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'income_type' => :'Integer',
        :'description' => :'String',
        :'tax_rate' => :'Float',
        :'tax_amount' => :'Float',
        :'tax_amount_no_vat' => :'Float',
        :'withheld' => :'Float',
        :'total' => :'Float',
        :'vat_type' => :'Integer'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::WithholidingTaxItem` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::WithholidingTaxItem`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'income_type')
        self.income_type = attributes[:'income_type']
      else
        self.income_type = 1
      end

      if attributes.key?(:'description')
        self.description = attributes[:'description']
      end

      if attributes.key?(:'tax_rate')
        self.tax_rate = attributes[:'tax_rate']
      end

      if attributes.key?(:'tax_amount')
        self.tax_amount = attributes[:'tax_amount']
      end

      if attributes.key?(:'tax_amount_no_vat')
        self.tax_amount_no_vat = attributes[:'tax_amount_no_vat']
      end

      if attributes.key?(:'withheld')
        self.withheld = attributes[:'withheld']
      end

      if attributes.key?(:'total')
        self.total = attributes[:'total']
      end

      if attributes.key?(:'vat_type')
        self.vat_type = attributes[:'vat_type']
      else
        self.vat_type = 1
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @income_type.nil?
        invalid_properties.push('invalid value for "income_type", income_type cannot be nil.')
      end

      if @tax_rate.nil?
        invalid_properties.push('invalid value for "tax_rate", tax_rate cannot be nil.')
      end

      if @tax_amount.nil?
        invalid_properties.push('invalid value for "tax_amount", tax_amount cannot be nil.')
      end

      if @tax_amount_no_vat.nil?
        invalid_properties.push('invalid value for "tax_amount_no_vat", tax_amount_no_vat cannot be nil.')
      end

      if @withheld.nil?
        invalid_properties.push('invalid value for "withheld", withheld cannot be nil.')
      end

      if @vat_type.nil?
        invalid_properties.push('invalid value for "vat_type", vat_type cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @income_type.nil?
      return false if @tax_rate.nil?
      return false if @tax_amount.nil?
      return false if @tax_amount_no_vat.nil?
      return false if @withheld.nil?
      return false if @vat_type.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          income_type == o.income_type &&
          description == o.description &&
          tax_rate == o.tax_rate &&
          tax_amount == o.tax_amount &&
          tax_amount_no_vat == o.tax_amount_no_vat &&
          withheld == o.withheld &&
          total == o.total &&
          vat_type == o.vat_type
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [income_type, description, tax_rate, tax_amount, tax_amount_no_vat, withheld, total, vat_type].hash
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