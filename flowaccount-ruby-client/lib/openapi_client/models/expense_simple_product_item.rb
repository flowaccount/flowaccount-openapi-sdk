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
  class ExpenseSimpleProductItem
    # เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)
    attr_accessor :system_code

    # เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) <br> <ex>Example: 40238</ex>
    attr_accessor :category_id

    # รายละเอียดค่าใช้จ่าย
    attr_accessor :description

    # ชื่อหมวดหมู่ค่าใช้จ่าย <br> <ex>Example: การตลาดและโฆษณา</ex>
    attr_accessor :name_local

    # ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) <br> <ex>Example: Marketing & Advertising</ex>
    attr_accessor :name_foreign

    # เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย <br> <ex>Example: 2</ex>
    attr_accessor :credit_category

    # เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต <br> <ex>Example: 1081994</ex>
    attr_accessor :credit_id

    # เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399</ex>
    attr_accessor :credit_code

    # ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399 / เจ้าหนี้อื่นๆ</ex>
    attr_accessor :credit_name_local

    # ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) <br> <ex>Example: 21399 / Other Payables</ex>
    attr_accessor :credit_name_foreign

    # เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย
    attr_accessor :debit_category

    # เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 1082099</ex>
    attr_accessor :debit_id

    # เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029</ex>
    attr_accessor :debit_code

    # ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ</ex>
    attr_accessor :debit_name_local

    # ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) <br> <ex>Example: 53029 / Other advertising and marketing expenses</ex>
    attr_accessor :debit_name_foreign

    # จำนวนรายการค่าใช้จ่าย
    attr_accessor :quantity

    # หน่วยรายการค่าใช้จ่าย
    attr_accessor :unit_name

    # ราคาต่อหน่วยค่าใช้จ่าย
    attr_accessor :price_per_unit

    # ราคารวมค่าใช้จ่าย
    attr_accessor :total

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'system_code' => :'systemCode',
        :'category_id' => :'categoryId',
        :'description' => :'description',
        :'name_local' => :'nameLocal',
        :'name_foreign' => :'nameForeign',
        :'credit_category' => :'creditCategory',
        :'credit_id' => :'creditId',
        :'credit_code' => :'creditCode',
        :'credit_name_local' => :'creditNameLocal',
        :'credit_name_foreign' => :'creditNameForeign',
        :'debit_category' => :'debitCategory',
        :'debit_id' => :'debitId',
        :'debit_code' => :'debitCode',
        :'debit_name_local' => :'debitNameLocal',
        :'debit_name_foreign' => :'debitNameForeign',
        :'quantity' => :'quantity',
        :'unit_name' => :'unitName',
        :'price_per_unit' => :'pricePerUnit',
        :'total' => :'total'
      }
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'system_code' => :'Integer',
        :'category_id' => :'Integer',
        :'description' => :'String',
        :'name_local' => :'String',
        :'name_foreign' => :'String',
        :'credit_category' => :'Integer',
        :'credit_id' => :'Integer',
        :'credit_code' => :'String',
        :'credit_name_local' => :'String',
        :'credit_name_foreign' => :'String',
        :'debit_category' => :'Integer',
        :'debit_id' => :'Integer',
        :'debit_code' => :'String',
        :'debit_name_local' => :'String',
        :'debit_name_foreign' => :'String',
        :'quantity' => :'Float',
        :'unit_name' => :'String',
        :'price_per_unit' => :'Float',
        :'total' => :'Float'
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
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::ExpenseSimpleProductItem` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::ExpenseSimpleProductItem`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'system_code')
        self.system_code = attributes[:'system_code']
      end

      if attributes.key?(:'category_id')
        self.category_id = attributes[:'category_id']
      end

      if attributes.key?(:'description')
        self.description = attributes[:'description']
      end

      if attributes.key?(:'name_local')
        self.name_local = attributes[:'name_local']
      end

      if attributes.key?(:'name_foreign')
        self.name_foreign = attributes[:'name_foreign']
      end

      if attributes.key?(:'credit_category')
        self.credit_category = attributes[:'credit_category']
      end

      if attributes.key?(:'credit_id')
        self.credit_id = attributes[:'credit_id']
      end

      if attributes.key?(:'credit_code')
        self.credit_code = attributes[:'credit_code']
      end

      if attributes.key?(:'credit_name_local')
        self.credit_name_local = attributes[:'credit_name_local']
      end

      if attributes.key?(:'credit_name_foreign')
        self.credit_name_foreign = attributes[:'credit_name_foreign']
      end

      if attributes.key?(:'debit_category')
        self.debit_category = attributes[:'debit_category']
      end

      if attributes.key?(:'debit_id')
        self.debit_id = attributes[:'debit_id']
      end

      if attributes.key?(:'debit_code')
        self.debit_code = attributes[:'debit_code']
      end

      if attributes.key?(:'debit_name_local')
        self.debit_name_local = attributes[:'debit_name_local']
      end

      if attributes.key?(:'debit_name_foreign')
        self.debit_name_foreign = attributes[:'debit_name_foreign']
      end

      if attributes.key?(:'quantity')
        self.quantity = attributes[:'quantity']
      end

      if attributes.key?(:'unit_name')
        self.unit_name = attributes[:'unit_name']
      end

      if attributes.key?(:'price_per_unit')
        self.price_per_unit = attributes[:'price_per_unit']
      end

      if attributes.key?(:'total')
        self.total = attributes[:'total']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @system_code.nil?
        invalid_properties.push('invalid value for "system_code", system_code cannot be nil.')
      end

      if @category_id.nil?
        invalid_properties.push('invalid value for "category_id", category_id cannot be nil.')
      end

      if @description.nil?
        invalid_properties.push('invalid value for "description", description cannot be nil.')
      end

      if @name_local.nil?
        invalid_properties.push('invalid value for "name_local", name_local cannot be nil.')
      end

      if @name_foreign.nil?
        invalid_properties.push('invalid value for "name_foreign", name_foreign cannot be nil.')
      end

      if @credit_category.nil?
        invalid_properties.push('invalid value for "credit_category", credit_category cannot be nil.')
      end

      if @credit_id.nil?
        invalid_properties.push('invalid value for "credit_id", credit_id cannot be nil.')
      end

      if @credit_code.nil?
        invalid_properties.push('invalid value for "credit_code", credit_code cannot be nil.')
      end

      if @credit_name_local.nil?
        invalid_properties.push('invalid value for "credit_name_local", credit_name_local cannot be nil.')
      end

      if @credit_name_foreign.nil?
        invalid_properties.push('invalid value for "credit_name_foreign", credit_name_foreign cannot be nil.')
      end

      if @debit_category.nil?
        invalid_properties.push('invalid value for "debit_category", debit_category cannot be nil.')
      end

      if @debit_id.nil?
        invalid_properties.push('invalid value for "debit_id", debit_id cannot be nil.')
      end

      if @debit_code.nil?
        invalid_properties.push('invalid value for "debit_code", debit_code cannot be nil.')
      end

      if @debit_name_local.nil?
        invalid_properties.push('invalid value for "debit_name_local", debit_name_local cannot be nil.')
      end

      if @debit_name_foreign.nil?
        invalid_properties.push('invalid value for "debit_name_foreign", debit_name_foreign cannot be nil.')
      end

      if @quantity.nil?
        invalid_properties.push('invalid value for "quantity", quantity cannot be nil.')
      end

      if !@unit_name.nil? && @unit_name.to_s.length > 7
        invalid_properties.push('invalid value for "unit_name", the character length must be smaller than or equal to 7.')
      end

      if @price_per_unit.nil?
        invalid_properties.push('invalid value for "price_per_unit", price_per_unit cannot be nil.')
      end

      if @total.nil?
        invalid_properties.push('invalid value for "total", total cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @system_code.nil?
      return false if @category_id.nil?
      return false if @description.nil?
      return false if @name_local.nil?
      return false if @name_foreign.nil?
      return false if @credit_category.nil?
      return false if @credit_id.nil?
      return false if @credit_code.nil?
      return false if @credit_name_local.nil?
      return false if @credit_name_foreign.nil?
      return false if @debit_category.nil?
      return false if @debit_id.nil?
      return false if @debit_code.nil?
      return false if @debit_name_local.nil?
      return false if @debit_name_foreign.nil?
      return false if @quantity.nil?
      return false if !@unit_name.nil? && @unit_name.to_s.length > 7
      return false if @price_per_unit.nil?
      return false if @total.nil?
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] unit_name Value to be assigned
    def unit_name=(unit_name)
      if !unit_name.nil? && unit_name.to_s.length > 7
        fail ArgumentError, 'invalid value for "unit_name", the character length must be smaller than or equal to 7.'
      end

      @unit_name = unit_name
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          system_code == o.system_code &&
          category_id == o.category_id &&
          description == o.description &&
          name_local == o.name_local &&
          name_foreign == o.name_foreign &&
          credit_category == o.credit_category &&
          credit_id == o.credit_id &&
          credit_code == o.credit_code &&
          credit_name_local == o.credit_name_local &&
          credit_name_foreign == o.credit_name_foreign &&
          debit_category == o.debit_category &&
          debit_id == o.debit_id &&
          debit_code == o.debit_code &&
          debit_name_local == o.debit_name_local &&
          debit_name_foreign == o.debit_name_foreign &&
          quantity == o.quantity &&
          unit_name == o.unit_name &&
          price_per_unit == o.price_per_unit &&
          total == o.total
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [system_code, category_id, description, name_local, name_foreign, credit_category, credit_id, credit_code, credit_name_local, credit_name_foreign, debit_category, debit_id, debit_code, debit_name_local, debit_name_foreign, quantity, unit_name, price_per_unit, total].hash
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