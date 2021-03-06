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


class Product(object):
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
        'id': 'str',
        'type': 'int',
        'code': 'str',
        'name': 'str',
        'sell_description': 'str',
        'sell_price': 'float',
        'sell_price_with_vat': 'float',
        'sell_vat_type': 'int',
        'unit_name': 'str',
        'category_id': 'int',
        'category_name': 'str',
        'barcode': 'str',
        'buy_description': 'str',
        'buy_price': 'float',
        'buy_vat_type': 'int',
        'buy_vat_type_with_vat': 'float',
        'inventory_published_on': 'date',
        'inventory_quantity': 'float',
        'inventory_price': 'float',
        'inventory_total': 'float',
        'average_buy_price': 'float',
        'average_sell_price': 'float',
        'remaining_stock': 'float',
        'total_value_in_hand': 'float'
    }

    attribute_map = {
        'id': 'id',
        'type': 'type',
        'code': 'code',
        'name': 'name',
        'sell_description': 'sellDescription',
        'sell_price': 'sellPrice',
        'sell_price_with_vat': 'sellPriceWithVat',
        'sell_vat_type': 'sellVatType',
        'unit_name': 'unitName',
        'category_id': 'categoryId',
        'category_name': 'categoryName',
        'barcode': 'barcode',
        'buy_description': 'buyDescription',
        'buy_price': 'buyPrice',
        'buy_vat_type': 'buyVatType',
        'buy_vat_type_with_vat': 'buyVatTypeWithVat',
        'inventory_published_on': 'inventoryPublishedOn',
        'inventory_quantity': 'inventoryQuantity',
        'inventory_price': 'inventoryPrice',
        'inventory_total': 'inventoryTotal',
        'average_buy_price': 'averageBuyPrice',
        'average_sell_price': 'averageSellPrice',
        'remaining_stock': 'remainingStock',
        'total_value_in_hand': 'totalValueInHand'
    }

    def __init__(self, id=None, type=1, code=None, name=None, sell_description=None, sell_price=None, sell_price_with_vat=None, sell_vat_type=3, unit_name=None, category_id=None, category_name=None, barcode=None, buy_description=None, buy_price=None, buy_vat_type=3, buy_vat_type_with_vat=None, inventory_published_on=None, inventory_quantity=None, inventory_price=0, inventory_total=0, average_buy_price=None, average_sell_price=None, remaining_stock=None, total_value_in_hand=None, local_vars_configuration=None):  # noqa: E501
        """Product - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._type = None
        self._code = None
        self._name = None
        self._sell_description = None
        self._sell_price = None
        self._sell_price_with_vat = None
        self._sell_vat_type = None
        self._unit_name = None
        self._category_id = None
        self._category_name = None
        self._barcode = None
        self._buy_description = None
        self._buy_price = None
        self._buy_vat_type = None
        self._buy_vat_type_with_vat = None
        self._inventory_published_on = None
        self._inventory_quantity = None
        self._inventory_price = None
        self._inventory_total = None
        self._average_buy_price = None
        self._average_sell_price = None
        self._remaining_stock = None
        self._total_value_in_hand = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if type is not None:
            self.type = type
        if code is not None:
            self.code = code
        if name is not None:
            self.name = name
        if sell_description is not None:
            self.sell_description = sell_description
        if sell_price is not None:
            self.sell_price = sell_price
        if sell_price_with_vat is not None:
            self.sell_price_with_vat = sell_price_with_vat
        if sell_vat_type is not None:
            self.sell_vat_type = sell_vat_type
        if unit_name is not None:
            self.unit_name = unit_name
        if category_id is not None:
            self.category_id = category_id
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
        if buy_vat_type_with_vat is not None:
            self.buy_vat_type_with_vat = buy_vat_type_with_vat
        if inventory_published_on is not None:
            self.inventory_published_on = inventory_published_on
        if inventory_quantity is not None:
            self.inventory_quantity = inventory_quantity
        if inventory_price is not None:
            self.inventory_price = inventory_price
        if inventory_total is not None:
            self.inventory_total = inventory_total
        if average_buy_price is not None:
            self.average_buy_price = average_buy_price
        if average_sell_price is not None:
            self.average_sell_price = average_sell_price
        if remaining_stock is not None:
            self.remaining_stock = remaining_stock
        if total_value_in_hand is not None:
            self.total_value_in_hand = total_value_in_hand

    @property
    def id(self):
        """Gets the id of this Product.  # noqa: E501

        เลข id Product  # noqa: E501

        :return: The id of this Product.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Product.

        เลข id Product  # noqa: E501

        :param id: The id of this Product.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def type(self):
        """Gets the type of this Product.  # noqa: E501

        ประเภทสินค้า: 1 = บริการ / 3 = ไม่นับสต๊อก / 5 = นับสต๊อก  # noqa: E501

        :return: The type of this Product.  # noqa: E501
        :rtype: int
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this Product.

        ประเภทสินค้า: 1 = บริการ / 3 = ไม่นับสต๊อก / 5 = นับสต๊อก  # noqa: E501

        :param type: The type of this Product.  # noqa: E501
        :type: int
        """

        self._type = type

    @property
    def code(self):
        """Gets the code of this Product.  # noqa: E501

        รหัสสินค้า <br> <ex>Example: P001</ex>  # noqa: E501

        :return: The code of this Product.  # noqa: E501
        :rtype: str
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this Product.

        รหัสสินค้า <br> <ex>Example: P001</ex>  # noqa: E501

        :param code: The code of this Product.  # noqa: E501
        :type: str
        """

        self._code = code

    @property
    def name(self):
        """Gets the name of this Product.  # noqa: E501

        ชื่อสินค้า <br> <ex>Example: Product</ex>  # noqa: E501

        :return: The name of this Product.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Product.

        ชื่อสินค้า <br> <ex>Example: Product</ex>  # noqa: E501

        :param name: The name of this Product.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def sell_description(self):
        """Gets the sell_description of this Product.  # noqa: E501

        รายละเอียดสินค้า ฝั่งขาย  # noqa: E501

        :return: The sell_description of this Product.  # noqa: E501
        :rtype: str
        """
        return self._sell_description

    @sell_description.setter
    def sell_description(self, sell_description):
        """Sets the sell_description of this Product.

        รายละเอียดสินค้า ฝั่งขาย  # noqa: E501

        :param sell_description: The sell_description of this Product.  # noqa: E501
        :type: str
        """

        self._sell_description = sell_description

    @property
    def sell_price(self):
        """Gets the sell_price of this Product.  # noqa: E501

        ราคาขายสินค้า  # noqa: E501

        :return: The sell_price of this Product.  # noqa: E501
        :rtype: float
        """
        return self._sell_price

    @sell_price.setter
    def sell_price(self, sell_price):
        """Sets the sell_price of this Product.

        ราคาขายสินค้า  # noqa: E501

        :param sell_price: The sell_price of this Product.  # noqa: E501
        :type: float
        """

        self._sell_price = sell_price

    @property
    def sell_price_with_vat(self):
        """Gets the sell_price_with_vat of this Product.  # noqa: E501

        ราคาขายสินค้า รวมภาษี  # noqa: E501

        :return: The sell_price_with_vat of this Product.  # noqa: E501
        :rtype: float
        """
        return self._sell_price_with_vat

    @sell_price_with_vat.setter
    def sell_price_with_vat(self, sell_price_with_vat):
        """Sets the sell_price_with_vat of this Product.

        ราคาขายสินค้า รวมภาษี  # noqa: E501

        :param sell_price_with_vat: The sell_price_with_vat of this Product.  # noqa: E501
        :type: float
        """

        self._sell_price_with_vat = sell_price_with_vat

    @property
    def sell_vat_type(self):
        """Gets the sell_vat_type of this Product.  # noqa: E501

        ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :return: The sell_vat_type of this Product.  # noqa: E501
        :rtype: int
        """
        return self._sell_vat_type

    @sell_vat_type.setter
    def sell_vat_type(self, sell_vat_type):
        """Sets the sell_vat_type of this Product.

        ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :param sell_vat_type: The sell_vat_type of this Product.  # noqa: E501
        :type: int
        """

        self._sell_vat_type = sell_vat_type

    @property
    def unit_name(self):
        """Gets the unit_name of this Product.  # noqa: E501

        หน่วยสินค้า  # noqa: E501

        :return: The unit_name of this Product.  # noqa: E501
        :rtype: str
        """
        return self._unit_name

    @unit_name.setter
    def unit_name(self, unit_name):
        """Sets the unit_name of this Product.

        หน่วยสินค้า  # noqa: E501

        :param unit_name: The unit_name of this Product.  # noqa: E501
        :type: str
        """

        self._unit_name = unit_name

    @property
    def category_id(self):
        """Gets the category_id of this Product.  # noqa: E501

        id หมวดสินค้า  # noqa: E501

        :return: The category_id of this Product.  # noqa: E501
        :rtype: int
        """
        return self._category_id

    @category_id.setter
    def category_id(self, category_id):
        """Sets the category_id of this Product.

        id หมวดสินค้า  # noqa: E501

        :param category_id: The category_id of this Product.  # noqa: E501
        :type: int
        """

        self._category_id = category_id

    @property
    def category_name(self):
        """Gets the category_name of this Product.  # noqa: E501

        หมวดสินค้า  # noqa: E501

        :return: The category_name of this Product.  # noqa: E501
        :rtype: str
        """
        return self._category_name

    @category_name.setter
    def category_name(self, category_name):
        """Sets the category_name of this Product.

        หมวดสินค้า  # noqa: E501

        :param category_name: The category_name of this Product.  # noqa: E501
        :type: str
        """

        self._category_name = category_name

    @property
    def barcode(self):
        """Gets the barcode of this Product.  # noqa: E501

        บาร์โค้ด  # noqa: E501

        :return: The barcode of this Product.  # noqa: E501
        :rtype: str
        """
        return self._barcode

    @barcode.setter
    def barcode(self, barcode):
        """Sets the barcode of this Product.

        บาร์โค้ด  # noqa: E501

        :param barcode: The barcode of this Product.  # noqa: E501
        :type: str
        """

        self._barcode = barcode

    @property
    def buy_description(self):
        """Gets the buy_description of this Product.  # noqa: E501

        รายละเอียดสินค้า ฝั่งซื้อ  # noqa: E501

        :return: The buy_description of this Product.  # noqa: E501
        :rtype: str
        """
        return self._buy_description

    @buy_description.setter
    def buy_description(self, buy_description):
        """Sets the buy_description of this Product.

        รายละเอียดสินค้า ฝั่งซื้อ  # noqa: E501

        :param buy_description: The buy_description of this Product.  # noqa: E501
        :type: str
        """

        self._buy_description = buy_description

    @property
    def buy_price(self):
        """Gets the buy_price of this Product.  # noqa: E501

        ราคาซื้อสินค้า  # noqa: E501

        :return: The buy_price of this Product.  # noqa: E501
        :rtype: float
        """
        return self._buy_price

    @buy_price.setter
    def buy_price(self, buy_price):
        """Sets the buy_price of this Product.

        ราคาซื้อสินค้า  # noqa: E501

        :param buy_price: The buy_price of this Product.  # noqa: E501
        :type: float
        """

        self._buy_price = buy_price

    @property
    def buy_vat_type(self):
        """Gets the buy_vat_type of this Product.  # noqa: E501

        ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :return: The buy_vat_type of this Product.  # noqa: E501
        :rtype: int
        """
        return self._buy_vat_type

    @buy_vat_type.setter
    def buy_vat_type(self, buy_vat_type):
        """Sets the buy_vat_type of this Product.

        ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี  # noqa: E501

        :param buy_vat_type: The buy_vat_type of this Product.  # noqa: E501
        :type: int
        """

        self._buy_vat_type = buy_vat_type

    @property
    def buy_vat_type_with_vat(self):
        """Gets the buy_vat_type_with_vat of this Product.  # noqa: E501

        ราคาซื้อสินค้า รวมภาษี  # noqa: E501

        :return: The buy_vat_type_with_vat of this Product.  # noqa: E501
        :rtype: float
        """
        return self._buy_vat_type_with_vat

    @buy_vat_type_with_vat.setter
    def buy_vat_type_with_vat(self, buy_vat_type_with_vat):
        """Sets the buy_vat_type_with_vat of this Product.

        ราคาซื้อสินค้า รวมภาษี  # noqa: E501

        :param buy_vat_type_with_vat: The buy_vat_type_with_vat of this Product.  # noqa: E501
        :type: float
        """

        self._buy_vat_type_with_vat = buy_vat_type_with_vat

    @property
    def inventory_published_on(self):
        """Gets the inventory_published_on of this Product.  # noqa: E501

        วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :return: The inventory_published_on of this Product.  # noqa: E501
        :rtype: date
        """
        return self._inventory_published_on

    @inventory_published_on.setter
    def inventory_published_on(self, inventory_published_on):
        """Sets the inventory_published_on of this Product.

        วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :param inventory_published_on: The inventory_published_on of this Product.  # noqa: E501
        :type: date
        """

        self._inventory_published_on = inventory_published_on

    @property
    def inventory_quantity(self):
        """Gets the inventory_quantity of this Product.  # noqa: E501

        จำนวนยอดตั้งต้นสินค้า  # noqa: E501

        :return: The inventory_quantity of this Product.  # noqa: E501
        :rtype: float
        """
        return self._inventory_quantity

    @inventory_quantity.setter
    def inventory_quantity(self, inventory_quantity):
        """Sets the inventory_quantity of this Product.

        จำนวนยอดตั้งต้นสินค้า  # noqa: E501

        :param inventory_quantity: The inventory_quantity of this Product.  # noqa: E501
        :type: float
        """

        self._inventory_quantity = inventory_quantity

    @property
    def inventory_price(self):
        """Gets the inventory_price of this Product.  # noqa: E501

        ต้นทุนสินค้าต่อหน่วย  # noqa: E501

        :return: The inventory_price of this Product.  # noqa: E501
        :rtype: float
        """
        return self._inventory_price

    @inventory_price.setter
    def inventory_price(self, inventory_price):
        """Sets the inventory_price of this Product.

        ต้นทุนสินค้าต่อหน่วย  # noqa: E501

        :param inventory_price: The inventory_price of this Product.  # noqa: E501
        :type: float
        """

        self._inventory_price = inventory_price

    @property
    def inventory_total(self):
        """Gets the inventory_total of this Product.  # noqa: E501

        มูลค่ารวมยอดตั้งต้นสินค้า  # noqa: E501

        :return: The inventory_total of this Product.  # noqa: E501
        :rtype: float
        """
        return self._inventory_total

    @inventory_total.setter
    def inventory_total(self, inventory_total):
        """Sets the inventory_total of this Product.

        มูลค่ารวมยอดตั้งต้นสินค้า  # noqa: E501

        :param inventory_total: The inventory_total of this Product.  # noqa: E501
        :type: float
        """

        self._inventory_total = inventory_total

    @property
    def average_buy_price(self):
        """Gets the average_buy_price of this Product.  # noqa: E501

        ราคาสินค้าซื้อเฉลี่ย  # noqa: E501

        :return: The average_buy_price of this Product.  # noqa: E501
        :rtype: float
        """
        return self._average_buy_price

    @average_buy_price.setter
    def average_buy_price(self, average_buy_price):
        """Sets the average_buy_price of this Product.

        ราคาสินค้าซื้อเฉลี่ย  # noqa: E501

        :param average_buy_price: The average_buy_price of this Product.  # noqa: E501
        :type: float
        """

        self._average_buy_price = average_buy_price

    @property
    def average_sell_price(self):
        """Gets the average_sell_price of this Product.  # noqa: E501

        ราคาขายสินค้าเฉลี่ย  # noqa: E501

        :return: The average_sell_price of this Product.  # noqa: E501
        :rtype: float
        """
        return self._average_sell_price

    @average_sell_price.setter
    def average_sell_price(self, average_sell_price):
        """Sets the average_sell_price of this Product.

        ราคาขายสินค้าเฉลี่ย  # noqa: E501

        :param average_sell_price: The average_sell_price of this Product.  # noqa: E501
        :type: float
        """

        self._average_sell_price = average_sell_price

    @property
    def remaining_stock(self):
        """Gets the remaining_stock of this Product.  # noqa: E501

        จำนวนสินค้าคงเหลือในสต๊อก  # noqa: E501

        :return: The remaining_stock of this Product.  # noqa: E501
        :rtype: float
        """
        return self._remaining_stock

    @remaining_stock.setter
    def remaining_stock(self, remaining_stock):
        """Sets the remaining_stock of this Product.

        จำนวนสินค้าคงเหลือในสต๊อก  # noqa: E501

        :param remaining_stock: The remaining_stock of this Product.  # noqa: E501
        :type: float
        """

        self._remaining_stock = remaining_stock

    @property
    def total_value_in_hand(self):
        """Gets the total_value_in_hand of this Product.  # noqa: E501

        มูลค่าสินค้าคงเหลือในสต๊อก  # noqa: E501

        :return: The total_value_in_hand of this Product.  # noqa: E501
        :rtype: float
        """
        return self._total_value_in_hand

    @total_value_in_hand.setter
    def total_value_in_hand(self, total_value_in_hand):
        """Sets the total_value_in_hand of this Product.

        มูลค่าสินค้าคงเหลือในสต๊อก  # noqa: E501

        :param total_value_in_hand: The total_value_in_hand of this Product.  # noqa: E501
        :type: float
        """

        self._total_value_in_hand = total_value_in_hand

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
        if not isinstance(other, Product):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Product):
            return True

        return self.to_dict() != other.to_dict()
