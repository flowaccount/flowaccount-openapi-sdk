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


class BusinessCategory(object):
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
        'id': 'int',
        'system_code': 'int',
        'category_id': 'int',
        'category_name_local': 'str',
        'category_name_foreign': 'str',
        'debit_id': 'int',
        'debit_category': 'int',
        'debit_code': 'str',
        'debit_name_local': 'str',
        'debit_name_foreign': 'str',
        'credit_id': 'int',
        'credit_category': 'int',
        'credit_code': 'str',
        'credit_name_local': 'str',
        'credit_name_foreign': 'str',
        'keywords': 'str'
    }

    attribute_map = {
        'id': 'id',
        'system_code': 'systemCode',
        'category_id': 'categoryId',
        'category_name_local': 'categoryNameLocal',
        'category_name_foreign': 'categoryNameForeign',
        'debit_id': 'debitId',
        'debit_category': 'debitCategory',
        'debit_code': 'debitCode',
        'debit_name_local': 'debitNameLocal',
        'debit_name_foreign': 'debitNameForeign',
        'credit_id': 'creditId',
        'credit_category': 'creditCategory',
        'credit_code': 'creditCode',
        'credit_name_local': 'creditNameLocal',
        'credit_name_foreign': 'creditNameForeign',
        'keywords': 'keywords'
    }

    def __init__(self, id=None, system_code=None, category_id=None, category_name_local=None, category_name_foreign=None, debit_id=None, debit_category=None, debit_code=None, debit_name_local=None, debit_name_foreign=None, credit_id=None, credit_category=None, credit_code=None, credit_name_local=None, credit_name_foreign=None, keywords=None, local_vars_configuration=None):  # noqa: E501
        """BusinessCategory - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._system_code = None
        self._category_id = None
        self._category_name_local = None
        self._category_name_foreign = None
        self._debit_id = None
        self._debit_category = None
        self._debit_code = None
        self._debit_name_local = None
        self._debit_name_foreign = None
        self._credit_id = None
        self._credit_category = None
        self._credit_code = None
        self._credit_name_local = None
        self._credit_name_foreign = None
        self._keywords = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if system_code is not None:
            self.system_code = system_code
        if category_id is not None:
            self.category_id = category_id
        if category_name_local is not None:
            self.category_name_local = category_name_local
        if category_name_foreign is not None:
            self.category_name_foreign = category_name_foreign
        if debit_id is not None:
            self.debit_id = debit_id
        if debit_category is not None:
            self.debit_category = debit_category
        if debit_code is not None:
            self.debit_code = debit_code
        if debit_name_local is not None:
            self.debit_name_local = debit_name_local
        if debit_name_foreign is not None:
            self.debit_name_foreign = debit_name_foreign
        if credit_id is not None:
            self.credit_id = credit_id
        if credit_category is not None:
            self.credit_category = credit_category
        if credit_code is not None:
            self.credit_code = credit_code
        if credit_name_local is not None:
            self.credit_name_local = credit_name_local
        if credit_name_foreign is not None:
            self.credit_name_foreign = credit_name_foreign
        if keywords is not None:
            self.keywords = keywords

    @property
    def id(self):
        """Gets the id of this BusinessCategory.  # noqa: E501

        id ของหมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :return: The id of this BusinessCategory.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this BusinessCategory.

        id ของหมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :param id: The id of this BusinessCategory.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def system_code(self):
        """Gets the system_code of this BusinessCategory.  # noqa: E501

        เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)  # noqa: E501

        :return: The system_code of this BusinessCategory.  # noqa: E501
        :rtype: int
        """
        return self._system_code

    @system_code.setter
    def system_code(self, system_code):
        """Sets the system_code of this BusinessCategory.

        เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)  # noqa: E501

        :param system_code: The system_code of this BusinessCategory.  # noqa: E501
        :type: int
        """

        self._system_code = system_code

    @property
    def category_id(self):
        """Gets the category_id of this BusinessCategory.  # noqa: E501

        เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)  # noqa: E501

        :return: The category_id of this BusinessCategory.  # noqa: E501
        :rtype: int
        """
        return self._category_id

    @category_id.setter
    def category_id(self, category_id):
        """Sets the category_id of this BusinessCategory.

        เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)  # noqa: E501

        :param category_id: The category_id of this BusinessCategory.  # noqa: E501
        :type: int
        """

        self._category_id = category_id

    @property
    def category_name_local(self):
        """Gets the category_name_local of this BusinessCategory.  # noqa: E501

        ชื่อหมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :return: The category_name_local of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._category_name_local

    @category_name_local.setter
    def category_name_local(self, category_name_local):
        """Sets the category_name_local of this BusinessCategory.

        ชื่อหมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :param category_name_local: The category_name_local of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._category_name_local = category_name_local

    @property
    def category_name_foreign(self):
        """Gets the category_name_foreign of this BusinessCategory.  # noqa: E501

        ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ)  # noqa: E501

        :return: The category_name_foreign of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._category_name_foreign

    @category_name_foreign.setter
    def category_name_foreign(self, category_name_foreign):
        """Sets the category_name_foreign of this BusinessCategory.

        ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ)  # noqa: E501

        :param category_name_foreign: The category_name_foreign of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._category_name_foreign = category_name_foreign

    @property
    def debit_id(self):
        """Gets the debit_id of this BusinessCategory.  # noqa: E501

        เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต  # noqa: E501

        :return: The debit_id of this BusinessCategory.  # noqa: E501
        :rtype: int
        """
        return self._debit_id

    @debit_id.setter
    def debit_id(self, debit_id):
        """Sets the debit_id of this BusinessCategory.

        เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต  # noqa: E501

        :param debit_id: The debit_id of this BusinessCategory.  # noqa: E501
        :type: int
        """

        self._debit_id = debit_id

    @property
    def debit_category(self):
        """Gets the debit_category of this BusinessCategory.  # noqa: E501

        เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :return: The debit_category of this BusinessCategory.  # noqa: E501
        :rtype: int
        """
        return self._debit_category

    @debit_category.setter
    def debit_category(self, debit_category):
        """Sets the debit_category of this BusinessCategory.

        เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :param debit_category: The debit_category of this BusinessCategory.  # noqa: E501
        :type: int
        """

        self._debit_category = debit_category

    @property
    def debit_code(self):
        """Gets the debit_code of this BusinessCategory.  # noqa: E501

        เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต  # noqa: E501

        :return: The debit_code of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._debit_code

    @debit_code.setter
    def debit_code(self, debit_code):
        """Sets the debit_code of this BusinessCategory.

        เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต  # noqa: E501

        :param debit_code: The debit_code of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._debit_code = debit_code

    @property
    def debit_name_local(self):
        """Gets the debit_name_local of this BusinessCategory.  # noqa: E501

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต  # noqa: E501

        :return: The debit_name_local of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._debit_name_local

    @debit_name_local.setter
    def debit_name_local(self, debit_name_local):
        """Sets the debit_name_local of this BusinessCategory.

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต  # noqa: E501

        :param debit_name_local: The debit_name_local of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._debit_name_local = debit_name_local

    @property
    def debit_name_foreign(self):
        """Gets the debit_name_foreign of this BusinessCategory.  # noqa: E501

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ)  # noqa: E501

        :return: The debit_name_foreign of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._debit_name_foreign

    @debit_name_foreign.setter
    def debit_name_foreign(self, debit_name_foreign):
        """Sets the debit_name_foreign of this BusinessCategory.

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ)  # noqa: E501

        :param debit_name_foreign: The debit_name_foreign of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._debit_name_foreign = debit_name_foreign

    @property
    def credit_id(self):
        """Gets the credit_id of this BusinessCategory.  # noqa: E501

        เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต  # noqa: E501

        :return: The credit_id of this BusinessCategory.  # noqa: E501
        :rtype: int
        """
        return self._credit_id

    @credit_id.setter
    def credit_id(self, credit_id):
        """Sets the credit_id of this BusinessCategory.

        เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต  # noqa: E501

        :param credit_id: The credit_id of this BusinessCategory.  # noqa: E501
        :type: int
        """

        self._credit_id = credit_id

    @property
    def credit_category(self):
        """Gets the credit_category of this BusinessCategory.  # noqa: E501

        เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :return: The credit_category of this BusinessCategory.  # noqa: E501
        :rtype: int
        """
        return self._credit_category

    @credit_category.setter
    def credit_category(self, credit_category):
        """Sets the credit_category of this BusinessCategory.

        เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย  # noqa: E501

        :param credit_category: The credit_category of this BusinessCategory.  # noqa: E501
        :type: int
        """

        self._credit_category = credit_category

    @property
    def credit_code(self):
        """Gets the credit_code of this BusinessCategory.  # noqa: E501

        เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต  # noqa: E501

        :return: The credit_code of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._credit_code

    @credit_code.setter
    def credit_code(self, credit_code):
        """Sets the credit_code of this BusinessCategory.

        เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต  # noqa: E501

        :param credit_code: The credit_code of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._credit_code = credit_code

    @property
    def credit_name_local(self):
        """Gets the credit_name_local of this BusinessCategory.  # noqa: E501

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต   # noqa: E501

        :return: The credit_name_local of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._credit_name_local

    @credit_name_local.setter
    def credit_name_local(self, credit_name_local):
        """Sets the credit_name_local of this BusinessCategory.

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต   # noqa: E501

        :param credit_name_local: The credit_name_local of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._credit_name_local = credit_name_local

    @property
    def credit_name_foreign(self):
        """Gets the credit_name_foreign of this BusinessCategory.  # noqa: E501

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ)  # noqa: E501

        :return: The credit_name_foreign of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._credit_name_foreign

    @credit_name_foreign.setter
    def credit_name_foreign(self, credit_name_foreign):
        """Sets the credit_name_foreign of this BusinessCategory.

        ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ)  # noqa: E501

        :param credit_name_foreign: The credit_name_foreign of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._credit_name_foreign = credit_name_foreign

    @property
    def keywords(self):
        """Gets the keywords of this BusinessCategory.  # noqa: E501

        keyword  # noqa: E501

        :return: The keywords of this BusinessCategory.  # noqa: E501
        :rtype: str
        """
        return self._keywords

    @keywords.setter
    def keywords(self, keywords):
        """Sets the keywords of this BusinessCategory.

        keyword  # noqa: E501

        :param keywords: The keywords of this BusinessCategory.  # noqa: E501
        :type: str
        """

        self._keywords = keywords

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
        if not isinstance(other, BusinessCategory):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BusinessCategory):
            return True

        return self.to_dict() != other.to_dict()
