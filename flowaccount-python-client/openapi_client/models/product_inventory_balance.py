# coding: utf-8

"""
    FlowAccount Open API

    # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64  # noqa: E501

    The version of the OpenAPI document: 2-oas3
    Contact: developer_support@flowaccount.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class ProductInventoryBalance(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'product_structure_type': 'str',
        'type': 'int',
        'code': 'str',
        'name': 'str',
        'sell_description': 'str',
        'sell_price': 'float',
        'sell_vat_type': 'int',
        'unit_name': 'str',
        'category_name': 'str',
        'barcode': 'str',
        'buy_description': 'str',
        'buy_price': 'float',
        'buy_vat_type': 'int',
        'inventory_published_on': 'str',
        'inventory_quantity': 'float',
        'inventory_price': 'float'
    }

    attribute_map = {
        'product_structure_type': 'productStructureType',
        'type': 'type',
        'code': 'code',
        'name': 'name',
        'sell_description': 'sellDescription',
        'sell_price': 'sellPrice',
        'sell_vat_type': 'sellVatType',
        'unit_name': 'unitName',
        'category_name': 'categoryName',
        'barcode': 'barcode',
        'buy_description': 'buyDescription',
        'buy_price': 'buyPrice',
        'buy_vat_type': 'buyVatType',
        'inventory_published_on': 'inventoryPublishedOn',
        'inventory_quantity': 'inventoryQuantity',
        'inventory_price': 'inventoryPrice'
    }

    discriminator_value_class_map = {
    }

    def __init__(self, product_structure_type=None, type=1, code=None, name=None, sell_description=None, sell_price=None, sell_vat_type=3, unit_name=None, category_name=None, barcode=None, buy_description=None, buy_price=None, buy_vat_type=3, inventory_published_on='2020-01-01', inventory_quantity=0, inventory_price=0, local_vars_configuration=None):  # noqa: E501
        """ProductInventoryBalance - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._product_structure_type = None
        self._type = None
        self._code = None
        self._name = None
        self._sell_description = None
        self._sell_price = None
        self._sell_vat_type = None
        self._unit_name = None
        self._category_name = None
        self._barcode = None
        self._buy_description = None
        self._buy_price = None
        self._buy_vat_type = None
        self._inventory_published_on = None
        self._inventory_quantity = None
        self._inventory_price = None
        self.discriminator = 'product_structure_type'

        self.product_structure_type = product_structure_type
        self.type = type
        if code is not None:
            self.code = code
        self.name = name
        if sell_description is not None:
            self.sell_description = sell_description
        if sell_price is not None:
            self.sell_price = sell_price
        if sell_vat_type is not None:
            self.sell_vat_type = sell_vat_type
        self.unit_name = unit_name
        if category_name is not None:
            self.category_name = category_name
        if barcode is not None:
            self.barcode = barcode
        if buy_description is not None:
            self.buy_description = buy_description
        if buy_price is not None:
            self.buy_price = buy_price
        if buy_vat_type is not None:
            self.buy_vat_type = buy_vat_type
        self.inventory_published_on = inventory_published_on
        self.inventory_quantity = inventory_quantity
        self.inventory_price = inventory_price

    @property
    def product_structure_type(self):
        """Gets the product_structure_type of this ProductInventoryBalance.  # noqa: E501

        สร้างสินค้าประเภท นับสต๊อก พร้อมตั้งค่ายอดเริ่มต้น  # noqa: E501

        :return: The product_structure_type of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._product_structure_type

    @product_structure_type.setter
    def product_structure_type(self, product_structure_type):
        """Sets the product_structure_type of this ProductInventoryBalance.

        สร้างสินค้าประเภท นับสต๊อก พร้อมตั้งค่ายอดเริ่มต้น  # noqa: E501

        :param product_structure_type: The product_structure_type of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """

        self._product_structure_type = product_structure_type

    @property
    def type(self):
        """Gets the type of this ProductInventoryBalance.  # noqa: E501

        ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก  # noqa: E501

        :return: The type of this ProductInventoryBalance.  # noqa: E501
        :rtype: int
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this ProductInventoryBalance.

        ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก  # noqa: E501

        :param type: The type of this ProductInventoryBalance.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and type is None:  # noqa: E501
            raise ValueError("Invalid value for `type`, must not be `None`")  # noqa: E501

        self._type = type

    @property
    def code(self):
        """Gets the code of this ProductInventoryBalance.  # noqa: E501

        รหัสสินค้า / SKU <br> <ex>Example: P001</ex>  # noqa: E501

        :return: The code of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this ProductInventoryBalance.

        รหัสสินค้า / SKU <br> <ex>Example: P001</ex>  # noqa: E501

        :param code: The code of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """

        self._code = code

    @property
    def name(self):
        """Gets the name of this ProductInventoryBalance.  # noqa: E501

        ชื่อสินค้า <br> <ex>Example: Product</ex>  # noqa: E501

        :return: The name of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ProductInventoryBalance.

        ชื่อสินค้า <br> <ex>Example: Product</ex>  # noqa: E501

        :param name: The name of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and name is None:  # noqa: E501
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def sell_description(self):
        """Gets the sell_description of this ProductInventoryBalance.  # noqa: E501

        รายละเอียดสินค้า ฝั่งขาย  # noqa: E501

        :return: The sell_description of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._sell_description

    @sell_description.setter
    def sell_description(self, sell_description):
        """Sets the sell_description of this ProductInventoryBalance.

        รายละเอียดสินค้า ฝั่งขาย  # noqa: E501

        :param sell_description: The sell_description of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """

        self._sell_description = sell_description

    @property
    def sell_price(self):
        """Gets the sell_price of this ProductInventoryBalance.  # noqa: E501

        ราคาขายสินค้า  # noqa: E501

        :return: The sell_price of this ProductInventoryBalance.  # noqa: E501
        :rtype: float
        """
        return self._sell_price

    @sell_price.setter
    def sell_price(self, sell_price):
        """Sets the sell_price of this ProductInventoryBalance.

        ราคาขายสินค้า  # noqa: E501

        :param sell_price: The sell_price of this ProductInventoryBalance.  # noqa: E501
        :type: float
        """

        self._sell_price = sell_price

    @property
    def sell_vat_type(self):
        """Gets the sell_vat_type of this ProductInventoryBalance.  # noqa: E501

        ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :return: The sell_vat_type of this ProductInventoryBalance.  # noqa: E501
        :rtype: int
        """
        return self._sell_vat_type

    @sell_vat_type.setter
    def sell_vat_type(self, sell_vat_type):
        """Sets the sell_vat_type of this ProductInventoryBalance.

        ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :param sell_vat_type: The sell_vat_type of this ProductInventoryBalance.  # noqa: E501
        :type: int
        """

        self._sell_vat_type = sell_vat_type

    @property
    def unit_name(self):
        """Gets the unit_name of this ProductInventoryBalance.  # noqa: E501

        หน่วยสินค้า  # noqa: E501

        :return: The unit_name of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._unit_name

    @unit_name.setter
    def unit_name(self, unit_name):
        """Sets the unit_name of this ProductInventoryBalance.

        หน่วยสินค้า  # noqa: E501

        :param unit_name: The unit_name of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and unit_name is None:  # noqa: E501
            raise ValueError("Invalid value for `unit_name`, must not be `None`")  # noqa: E501

        self._unit_name = unit_name

    @property
    def category_name(self):
        """Gets the category_name of this ProductInventoryBalance.  # noqa: E501

        หมวดสินค้า  # noqa: E501

        :return: The category_name of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._category_name

    @category_name.setter
    def category_name(self, category_name):
        """Sets the category_name of this ProductInventoryBalance.

        หมวดสินค้า  # noqa: E501

        :param category_name: The category_name of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """

        self._category_name = category_name

    @property
    def barcode(self):
        """Gets the barcode of this ProductInventoryBalance.  # noqa: E501

        บาร์โค้ด  # noqa: E501

        :return: The barcode of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._barcode

    @barcode.setter
    def barcode(self, barcode):
        """Sets the barcode of this ProductInventoryBalance.

        บาร์โค้ด  # noqa: E501

        :param barcode: The barcode of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """

        self._barcode = barcode

    @property
    def buy_description(self):
        """Gets the buy_description of this ProductInventoryBalance.  # noqa: E501

        รายละเอียดสินค้า ฝั่งซื้อ  # noqa: E501

        :return: The buy_description of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._buy_description

    @buy_description.setter
    def buy_description(self, buy_description):
        """Sets the buy_description of this ProductInventoryBalance.

        รายละเอียดสินค้า ฝั่งซื้อ  # noqa: E501

        :param buy_description: The buy_description of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """

        self._buy_description = buy_description

    @property
    def buy_price(self):
        """Gets the buy_price of this ProductInventoryBalance.  # noqa: E501

        ราคาซื้อสินค้า  # noqa: E501

        :return: The buy_price of this ProductInventoryBalance.  # noqa: E501
        :rtype: float
        """
        return self._buy_price

    @buy_price.setter
    def buy_price(self, buy_price):
        """Sets the buy_price of this ProductInventoryBalance.

        ราคาซื้อสินค้า  # noqa: E501

        :param buy_price: The buy_price of this ProductInventoryBalance.  # noqa: E501
        :type: float
        """

        self._buy_price = buy_price

    @property
    def buy_vat_type(self):
        """Gets the buy_vat_type of this ProductInventoryBalance.  # noqa: E501

        ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :return: The buy_vat_type of this ProductInventoryBalance.  # noqa: E501
        :rtype: int
        """
        return self._buy_vat_type

    @buy_vat_type.setter
    def buy_vat_type(self, buy_vat_type):
        """Sets the buy_vat_type of this ProductInventoryBalance.

        ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :param buy_vat_type: The buy_vat_type of this ProductInventoryBalance.  # noqa: E501
        :type: int
        """

        self._buy_vat_type = buy_vat_type

    @property
    def inventory_published_on(self):
        """Gets the inventory_published_on of this ProductInventoryBalance.  # noqa: E501

        วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :return: The inventory_published_on of this ProductInventoryBalance.  # noqa: E501
        :rtype: str
        """
        return self._inventory_published_on

    @inventory_published_on.setter
    def inventory_published_on(self, inventory_published_on):
        """Sets the inventory_published_on of this ProductInventoryBalance.

        วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :param inventory_published_on: The inventory_published_on of this ProductInventoryBalance.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and inventory_published_on is None:  # noqa: E501
            raise ValueError("Invalid value for `inventory_published_on`, must not be `None`")  # noqa: E501

        self._inventory_published_on = inventory_published_on

    @property
    def inventory_quantity(self):
        """Gets the inventory_quantity of this ProductInventoryBalance.  # noqa: E501

        จำนวนยอดตั้งต้นสินค้า  # noqa: E501

        :return: The inventory_quantity of this ProductInventoryBalance.  # noqa: E501
        :rtype: float
        """
        return self._inventory_quantity

    @inventory_quantity.setter
    def inventory_quantity(self, inventory_quantity):
        """Sets the inventory_quantity of this ProductInventoryBalance.

        จำนวนยอดตั้งต้นสินค้า  # noqa: E501

        :param inventory_quantity: The inventory_quantity of this ProductInventoryBalance.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and inventory_quantity is None:  # noqa: E501
            raise ValueError("Invalid value for `inventory_quantity`, must not be `None`")  # noqa: E501

        self._inventory_quantity = inventory_quantity

    @property
    def inventory_price(self):
        """Gets the inventory_price of this ProductInventoryBalance.  # noqa: E501

        ราคาซื้อสินค้า  # noqa: E501

        :return: The inventory_price of this ProductInventoryBalance.  # noqa: E501
        :rtype: float
        """
        return self._inventory_price

    @inventory_price.setter
    def inventory_price(self, inventory_price):
        """Sets the inventory_price of this ProductInventoryBalance.

        ราคาซื้อสินค้า  # noqa: E501

        :param inventory_price: The inventory_price of this ProductInventoryBalance.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and inventory_price is None:  # noqa: E501
            raise ValueError("Invalid value for `inventory_price`, must not be `None`")  # noqa: E501

        self._inventory_price = inventory_price

    def get_real_child_model(self, data):
        """Returns the real base class specified by the discriminator"""
        discriminator_key = self.attribute_map[self.discriminator]
        discriminator_value = data[discriminator_key]
        return self.discriminator_value_class_map.get(discriminator_value)

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ProductInventoryBalance):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ProductInventoryBalance):
            return True

        return self.to_dict() != other.to_dict()
