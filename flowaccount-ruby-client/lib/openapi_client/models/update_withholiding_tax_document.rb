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
  class UpdateWithholidingTaxDocument
    # ชื่อบริษัท
    attr_accessor :company_name

    # ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
    attr_accessor :company_name_en

    # ที่อยู่บริษัท
    attr_accessor :company_address

    # ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
    attr_accessor :company_address_en

    # เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
    attr_accessor :company_tax_id

    # ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
    attr_accessor :company_branch

    # ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
    attr_accessor :company_branch_en

    # เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
    attr_accessor :company_phone

    # เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
    attr_accessor :company_mobile

    # เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
    attr_accessor :company_fax

    # เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
    attr_accessor :company_website

    # รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    attr_accessor :contact_code

    # ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    attr_accessor :contact_name

    # ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    attr_accessor :contact_address

    # เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
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

    # แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13
    attr_accessor :entity

    # ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex>
    attr_accessor :text_other

    # รายการหัก ของเอกสารหัก ณ ที่จ่าย
    attr_accessor :withholding_tax_items

    # จำนวนเงิน (ไม่รวมภาษี)
    attr_accessor :total

    # ภาษีที่หัก
    attr_accessor :total_tax_withheld

    # ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ
    attr_accessor :tax_payment

    # ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ 
    attr_accessor :tax_payment_others

    # ใบอนุญาตเลขที่
    attr_accessor :provident_fund_number

    # จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ
    attr_accessor :provident_fund_amount

    # จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม
    attr_accessor :social_security_amount

    # หมายเหตุเอกสาร
    attr_accessor :remarks

    # โน๊ตภายในบริษัท
    attr_accessor :internal_notes

    # ลายเซ็นอิเล็กทรอนิกส์และตรายาง
    attr_accessor :show_signature_or_stamp

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'company_name' => :'companyName',
        :'company_name_en' => :'companyNameEn',
        :'company_address' => :'companyAddress',
        :'company_address_en' => :'companyAddressEn',
        :'company_tax_id' => :'companyTaxId',
        :'company_branch' => :'companyBranch',
        :'company_branch_en' => :'companyBranchEn',
        :'company_phone' => :'companyPhone',
        :'company_mobile' => :'companyMobile',
        :'company_fax' => :'companyFax',
        :'company_website' => :'companyWebsite',
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
        :'entity' => :'entity',
        :'text_other' => :'textOther',
        :'withholding_tax_items' => :'withholdingTaxItems',
        :'total' => :'total',
        :'total_tax_withheld' => :'totalTaxWithheld',
        :'tax_payment' => :'taxPayment',
        :'tax_payment_others' => :'taxPaymentOthers',
        :'provident_fund_number' => :'providentFundNumber',
        :'provident_fund_amount' => :'providentFundAmount',
        :'social_security_amount' => :'socialSecurityAmount',
        :'remarks' => :'remarks',
        :'internal_notes' => :'internalNotes',
        :'show_signature_or_stamp' => :'showSignatureOrStamp'
      }
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'company_name' => :'String',
        :'company_name_en' => :'String',
        :'company_address' => :'String',
        :'company_address_en' => :'String',
        :'company_tax_id' => :'String',
        :'company_branch' => :'String',
        :'company_branch_en' => :'String',
        :'company_phone' => :'String',
        :'company_mobile' => :'String',
        :'company_fax' => :'String',
        :'company_website' => :'String',
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
        :'entity' => :'Integer',
        :'text_other' => :'String',
        :'withholding_tax_items' => :'Array<WithholidingTaxItem>',
        :'total' => :'Float',
        :'total_tax_withheld' => :'Float',
        :'tax_payment' => :'Integer',
        :'tax_payment_others' => :'String',
        :'provident_fund_number' => :'String',
        :'provident_fund_amount' => :'String',
        :'social_security_amount' => :'String',
        :'remarks' => :'String',
        :'internal_notes' => :'String',
        :'show_signature_or_stamp' => :'Boolean'
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
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::UpdateWithholidingTaxDocument` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::UpdateWithholidingTaxDocument`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'company_name')
        self.company_name = attributes[:'company_name']
      end

      if attributes.key?(:'company_name_en')
        self.company_name_en = attributes[:'company_name_en']
      end

      if attributes.key?(:'company_address')
        self.company_address = attributes[:'company_address']
      end

      if attributes.key?(:'company_address_en')
        self.company_address_en = attributes[:'company_address_en']
      end

      if attributes.key?(:'company_tax_id')
        self.company_tax_id = attributes[:'company_tax_id']
      end

      if attributes.key?(:'company_branch')
        self.company_branch = attributes[:'company_branch']
      end

      if attributes.key?(:'company_branch_en')
        self.company_branch_en = attributes[:'company_branch_en']
      end

      if attributes.key?(:'company_phone')
        self.company_phone = attributes[:'company_phone']
      end

      if attributes.key?(:'company_mobile')
        self.company_mobile = attributes[:'company_mobile']
      end

      if attributes.key?(:'company_fax')
        self.company_fax = attributes[:'company_fax']
      end

      if attributes.key?(:'company_website')
        self.company_website = attributes[:'company_website']
      end

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

      if attributes.key?(:'entity')
        self.entity = attributes[:'entity']
      else
        self.entity = 1
      end

      if attributes.key?(:'text_other')
        self.text_other = attributes[:'text_other']
      end

      if attributes.key?(:'withholding_tax_items')
        if (value = attributes[:'withholding_tax_items']).is_a?(Array)
          self.withholding_tax_items = value
        end
      end

      if attributes.key?(:'total')
        self.total = attributes[:'total']
      end

      if attributes.key?(:'total_tax_withheld')
        self.total_tax_withheld = attributes[:'total_tax_withheld']
      end

      if attributes.key?(:'tax_payment')
        self.tax_payment = attributes[:'tax_payment']
      else
        self.tax_payment = 1
      end

      if attributes.key?(:'tax_payment_others')
        self.tax_payment_others = attributes[:'tax_payment_others']
      end

      if attributes.key?(:'provident_fund_number')
        self.provident_fund_number = attributes[:'provident_fund_number']
      end

      if attributes.key?(:'provident_fund_amount')
        self.provident_fund_amount = attributes[:'provident_fund_amount']
      end

      if attributes.key?(:'social_security_amount')
        self.social_security_amount = attributes[:'social_security_amount']
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
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @company_name.nil?
        invalid_properties.push('invalid value for "company_name", company_name cannot be nil.')
      end

      if @company_address.nil?
        invalid_properties.push('invalid value for "company_address", company_address cannot be nil.')
      end

      if @company_branch.nil?
        invalid_properties.push('invalid value for "company_branch", company_branch cannot be nil.')
      end

      if @contact_name.nil?
        invalid_properties.push('invalid value for "contact_name", contact_name cannot be nil.')
      end

      if @published_on.nil?
        invalid_properties.push('invalid value for "published_on", published_on cannot be nil.')
      end

      if @entity.nil?
        invalid_properties.push('invalid value for "entity", entity cannot be nil.')
      end

      if @withholding_tax_items.nil?
        invalid_properties.push('invalid value for "withholding_tax_items", withholding_tax_items cannot be nil.')
      end

      if @total.nil?
        invalid_properties.push('invalid value for "total", total cannot be nil.')
      end

      if @total_tax_withheld.nil?
        invalid_properties.push('invalid value for "total_tax_withheld", total_tax_withheld cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @company_name.nil?
      return false if @company_address.nil?
      return false if @company_branch.nil?
      return false if @contact_name.nil?
      return false if @published_on.nil?
      return false if @entity.nil?
      return false if @withholding_tax_items.nil?
      return false if @total.nil?
      return false if @total_tax_withheld.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          company_name == o.company_name &&
          company_name_en == o.company_name_en &&
          company_address == o.company_address &&
          company_address_en == o.company_address_en &&
          company_tax_id == o.company_tax_id &&
          company_branch == o.company_branch &&
          company_branch_en == o.company_branch_en &&
          company_phone == o.company_phone &&
          company_mobile == o.company_mobile &&
          company_fax == o.company_fax &&
          company_website == o.company_website &&
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
          entity == o.entity &&
          text_other == o.text_other &&
          withholding_tax_items == o.withholding_tax_items &&
          total == o.total &&
          total_tax_withheld == o.total_tax_withheld &&
          tax_payment == o.tax_payment &&
          tax_payment_others == o.tax_payment_others &&
          provident_fund_number == o.provident_fund_number &&
          provident_fund_amount == o.provident_fund_amount &&
          social_security_amount == o.social_security_amount &&
          remarks == o.remarks &&
          internal_notes == o.internal_notes &&
          show_signature_or_stamp == o.show_signature_or_stamp
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [company_name, company_name_en, company_address, company_address_en, company_tax_id, company_branch, company_branch_en, company_phone, company_mobile, company_fax, company_website, contact_code, contact_name, contact_address, contact_tax_id, contact_branch, contact_person, contact_email, contact_number, contact_zip_code, contact_group, published_on, entity, text_other, withholding_tax_items, total, total_tax_withheld, tax_payment, tax_payment_others, provident_fund_number, provident_fund_amount, social_security_amount, remarks, internal_notes, show_signature_or_stamp].hash
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
