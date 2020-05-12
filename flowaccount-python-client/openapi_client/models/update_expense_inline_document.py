# coding: utf-8

"""
    FlowAccount Open API

    FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test    **PostMan Collection**   site: https://www.getpostman.com/collections/01e7c68d7093e2092a64  # noqa: E501

    The version of the OpenAPI document: 2-oas3
    Contact: developer@flowaccount.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class UpdateExpenseInlineDocument(object):
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
        'items': 'list[ExpenseInlineProductItem]',
        'discount_type': 'int',
        'use_inline_discount': 'bool',
        'use_inline_vat': 'bool',
        'exempt_amount': 'float',
        'vatable_amount': 'float'
    }

    attribute_map = {
        'items': 'items',
        'discount_type': 'discountType',
        'use_inline_discount': 'useInlineDiscount',
        'use_inline_vat': 'useInlineVat',
        'exempt_amount': 'exemptAmount',
        'vatable_amount': 'vatableAmount'
    }

    def __init__(self, items=None, discount_type=1, use_inline_discount=True, use_inline_vat=None, exempt_amount=0, vatable_amount=0, local_vars_configuration=None):  # noqa: E501
        """UpdateExpenseInlineDocument - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._items = None
        self._discount_type = None
        self._use_inline_discount = None
        self._use_inline_vat = None
        self._exempt_amount = None
        self._vatable_amount = None
        self.discriminator = None

        if items is not None:
            self.items = items
        if discount_type is not None:
            self.discount_type = discount_type
        if use_inline_discount is not None:
            self.use_inline_discount = use_inline_discount
        if use_inline_vat is not None:
            self.use_inline_vat = use_inline_vat
        self.exempt_amount = exempt_amount
        self.vatable_amount = vatable_amount

    @property
    def items(self):
        """Gets the items of this UpdateExpenseInlineDocument.  # noqa: E501

        รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense  # noqa: E501

        :return: The items of this UpdateExpenseInlineDocument.  # noqa: E501
        :rtype: list[ExpenseInlineProductItem]
        """
        return self._items

    @items.setter
    def items(self, items):
        """Sets the items of this UpdateExpenseInlineDocument.

        รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense  # noqa: E501

        :param items: The items of this UpdateExpenseInlineDocument.  # noqa: E501
        :type: list[ExpenseInlineProductItem]
        """

        self._items = items

    @property
    def discount_type(self):
        """Gets the discount_type of this UpdateExpenseInlineDocument.  # noqa: E501

        รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)  # noqa: E501

        :return: The discount_type of this UpdateExpenseInlineDocument.  # noqa: E501
        :rtype: int
        """
        return self._discount_type

    @discount_type.setter
    def discount_type(self, discount_type):
        """Sets the discount_type of this UpdateExpenseInlineDocument.

        รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)  # noqa: E501

        :param discount_type: The discount_type of this UpdateExpenseInlineDocument.  # noqa: E501
        :type: int
        """

        self._discount_type = discount_type

    @property
    def use_inline_discount(self):
        """Gets the use_inline_discount of this UpdateExpenseInlineDocument.  # noqa: E501

        inline discount ใช้งานส่วนลด แยกตามรายการสินค้า  # noqa: E501

        :return: The use_inline_discount of this UpdateExpenseInlineDocument.  # noqa: E501
        :rtype: bool
        """
        return self._use_inline_discount

    @use_inline_discount.setter
    def use_inline_discount(self, use_inline_discount):
        """Sets the use_inline_discount of this UpdateExpenseInlineDocument.

        inline discount ใช้งานส่วนลด แยกตามรายการสินค้า  # noqa: E501

        :param use_inline_discount: The use_inline_discount of this UpdateExpenseInlineDocument.  # noqa: E501
        :type: bool
        """

        self._use_inline_discount = use_inline_discount

    @property
    def use_inline_vat(self):
        """Gets the use_inline_vat of this UpdateExpenseInlineDocument.  # noqa: E501

        inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า  # noqa: E501

        :return: The use_inline_vat of this UpdateExpenseInlineDocument.  # noqa: E501
        :rtype: bool
        """
        return self._use_inline_vat

    @use_inline_vat.setter
    def use_inline_vat(self, use_inline_vat):
        """Sets the use_inline_vat of this UpdateExpenseInlineDocument.

        inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า  # noqa: E501

        :param use_inline_vat: The use_inline_vat of this UpdateExpenseInlineDocument.  # noqa: E501
        :type: bool
        """

        self._use_inline_vat = use_inline_vat

    @property
    def exempt_amount(self):
        """Gets the exempt_amount of this UpdateExpenseInlineDocument.  # noqa: E501

        ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม  # noqa: E501

        :return: The exempt_amount of this UpdateExpenseInlineDocument.  # noqa: E501
        :rtype: float
        """
        return self._exempt_amount

    @exempt_amount.setter
    def exempt_amount(self, exempt_amount):
        """Sets the exempt_amount of this UpdateExpenseInlineDocument.

        ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม  # noqa: E501

        :param exempt_amount: The exempt_amount of this UpdateExpenseInlineDocument.  # noqa: E501
        :type: float
        """

        self._exempt_amount = exempt_amount

    @property
    def vatable_amount(self):
        """Gets the vatable_amount of this UpdateExpenseInlineDocument.  # noqa: E501

        ยอดขายที่คิดภาษีมูลค่าเพิ่ม  # noqa: E501

        :return: The vatable_amount of this UpdateExpenseInlineDocument.  # noqa: E501
        :rtype: float
        """
        return self._vatable_amount

    @vatable_amount.setter
    def vatable_amount(self, vatable_amount):
        """Sets the vatable_amount of this UpdateExpenseInlineDocument.

        ยอดขายที่คิดภาษีมูลค่าเพิ่ม  # noqa: E501

        :param vatable_amount: The vatable_amount of this UpdateExpenseInlineDocument.  # noqa: E501
        :type: float
        """

        self._vatable_amount = vatable_amount

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
        if not isinstance(other, UpdateExpenseInlineDocument):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UpdateExpenseInlineDocument):
            return True

        return self.to_dict() != other.to_dict()