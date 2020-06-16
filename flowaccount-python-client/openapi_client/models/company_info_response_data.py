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


class CompanyInfoResponseData(object):
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
        'company_id': 'int',
        'company_type': 'str',
        'compnay_name': 'str',
        'company_name_en': 'str',
        'company_address': 'str',
        'company_address_en': 'str',
        'company_zip_code': 'str',
        'company_tax_id': 'str',
        'company_branch': 'str',
        'company_branch_en': 'str',
        'company_branch_code': 'str',
        'company_phone': 'str',
        'company_mobile': 'str',
        'company_fax': 'str',
        'company_website': 'str'
    }

    attribute_map = {
        'company_id': 'companyId',
        'company_type': 'companyType',
        'compnay_name': 'compnayName',
        'company_name_en': 'companyNameEn',
        'company_address': 'companyAddress',
        'company_address_en': 'companyAddressEn',
        'company_zip_code': 'companyZipCode',
        'company_tax_id': 'companyTaxId',
        'company_branch': 'companyBranch',
        'company_branch_en': 'companyBranchEn',
        'company_branch_code': 'companyBranchCode',
        'company_phone': 'companyPhone',
        'company_mobile': 'companyMobile',
        'company_fax': 'companyFax',
        'company_website': 'companyWebsite'
    }

    def __init__(self, company_id=0, company_type='10', compnay_name=None, company_name_en=None, company_address=None, company_address_en=None, company_zip_code=None, company_tax_id=None, company_branch='สำนักงานใหญ่', company_branch_en=None, company_branch_code=None, company_phone=None, company_mobile=None, company_fax=None, company_website=None, local_vars_configuration=None):  # noqa: E501
        """CompanyInfoResponseData - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._company_id = None
        self._company_type = None
        self._compnay_name = None
        self._company_name_en = None
        self._company_address = None
        self._company_address_en = None
        self._company_zip_code = None
        self._company_tax_id = None
        self._company_branch = None
        self._company_branch_en = None
        self._company_branch_code = None
        self._company_phone = None
        self._company_mobile = None
        self._company_fax = None
        self._company_website = None
        self.discriminator = None

        if company_id is not None:
            self.company_id = company_id
        if company_type is not None:
            self.company_type = company_type
        if compnay_name is not None:
            self.compnay_name = compnay_name
        if company_name_en is not None:
            self.company_name_en = company_name_en
        if company_address is not None:
            self.company_address = company_address
        if company_address_en is not None:
            self.company_address_en = company_address_en
        if company_zip_code is not None:
            self.company_zip_code = company_zip_code
        if company_tax_id is not None:
            self.company_tax_id = company_tax_id
        if company_branch is not None:
            self.company_branch = company_branch
        if company_branch_en is not None:
            self.company_branch_en = company_branch_en
        if company_branch_code is not None:
            self.company_branch_code = company_branch_code
        if company_phone is not None:
            self.company_phone = company_phone
        if company_mobile is not None:
            self.company_mobile = company_mobile
        if company_fax is not None:
            self.company_fax = company_fax
        if company_website is not None:
            self.company_website = company_website

    @property
    def company_id(self):
        """Gets the company_id of this CompanyInfoResponseData.  # noqa: E501

        รหัสบริษัท  # noqa: E501

        :return: The company_id of this CompanyInfoResponseData.  # noqa: E501
        :rtype: int
        """
        return self._company_id

    @company_id.setter
    def company_id(self, company_id):
        """Sets the company_id of this CompanyInfoResponseData.

        รหัสบริษัท  # noqa: E501

        :param company_id: The company_id of this CompanyInfoResponseData.  # noqa: E501
        :type: int
        """

        self._company_id = company_id

    @property
    def company_type(self):
        """Gets the company_type of this CompanyInfoResponseData.  # noqa: E501

        ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม  # noqa: E501

        :return: The company_type of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_type

    @company_type.setter
    def company_type(self, company_type):
        """Sets the company_type of this CompanyInfoResponseData.

        ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม  # noqa: E501

        :param company_type: The company_type of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_type = company_type

    @property
    def compnay_name(self):
        """Gets the compnay_name of this CompanyInfoResponseData.  # noqa: E501

        ชื่อบริษัท  # noqa: E501

        :return: The compnay_name of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._compnay_name

    @compnay_name.setter
    def compnay_name(self, compnay_name):
        """Sets the compnay_name of this CompanyInfoResponseData.

        ชื่อบริษัท  # noqa: E501

        :param compnay_name: The compnay_name of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._compnay_name = compnay_name

    @property
    def company_name_en(self):
        """Gets the company_name_en of this CompanyInfoResponseData.  # noqa: E501

        ชื่อบริษัท ภาษาอังกฤษ  # noqa: E501

        :return: The company_name_en of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_name_en

    @company_name_en.setter
    def company_name_en(self, company_name_en):
        """Sets the company_name_en of this CompanyInfoResponseData.

        ชื่อบริษัท ภาษาอังกฤษ  # noqa: E501

        :param company_name_en: The company_name_en of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_name_en = company_name_en

    @property
    def company_address(self):
        """Gets the company_address of this CompanyInfoResponseData.  # noqa: E501

        ที่อยู่บริษัท  # noqa: E501

        :return: The company_address of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_address

    @company_address.setter
    def company_address(self, company_address):
        """Sets the company_address of this CompanyInfoResponseData.

        ที่อยู่บริษัท  # noqa: E501

        :param company_address: The company_address of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_address = company_address

    @property
    def company_address_en(self):
        """Gets the company_address_en of this CompanyInfoResponseData.  # noqa: E501

        ที่อยู่บริษัท ภาษาอังกฤษ  # noqa: E501

        :return: The company_address_en of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_address_en

    @company_address_en.setter
    def company_address_en(self, company_address_en):
        """Sets the company_address_en of this CompanyInfoResponseData.

        ที่อยู่บริษัท ภาษาอังกฤษ  # noqa: E501

        :param company_address_en: The company_address_en of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_address_en = company_address_en

    @property
    def company_zip_code(self):
        """Gets the company_zip_code of this CompanyInfoResponseData.  # noqa: E501

        รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>  # noqa: E501

        :return: The company_zip_code of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_zip_code

    @company_zip_code.setter
    def company_zip_code(self, company_zip_code):
        """Sets the company_zip_code of this CompanyInfoResponseData.

        รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>  # noqa: E501

        :param company_zip_code: The company_zip_code of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_zip_code = company_zip_code

    @property
    def company_tax_id(self):
        """Gets the company_tax_id of this CompanyInfoResponseData.  # noqa: E501

        เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>  # noqa: E501

        :return: The company_tax_id of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_tax_id

    @company_tax_id.setter
    def company_tax_id(self, company_tax_id):
        """Sets the company_tax_id of this CompanyInfoResponseData.

        เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>  # noqa: E501

        :param company_tax_id: The company_tax_id of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_tax_id = company_tax_id

    @property
    def company_branch(self):
        """Gets the company_branch of this CompanyInfoResponseData.  # noqa: E501

        ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>  # noqa: E501

        :return: The company_branch of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_branch

    @company_branch.setter
    def company_branch(self, company_branch):
        """Sets the company_branch of this CompanyInfoResponseData.

        ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>  # noqa: E501

        :param company_branch: The company_branch of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_branch = company_branch

    @property
    def company_branch_en(self):
        """Gets the company_branch_en of this CompanyInfoResponseData.  # noqa: E501

        ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>  # noqa: E501

        :return: The company_branch_en of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_branch_en

    @company_branch_en.setter
    def company_branch_en(self, company_branch_en):
        """Sets the company_branch_en of this CompanyInfoResponseData.

        ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>  # noqa: E501

        :param company_branch_en: The company_branch_en of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_branch_en = company_branch_en

    @property
    def company_branch_code(self):
        """Gets the company_branch_code of this CompanyInfoResponseData.  # noqa: E501

        รหัสสาขา <br><ex>Example: 00000</ex>  # noqa: E501

        :return: The company_branch_code of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_branch_code

    @company_branch_code.setter
    def company_branch_code(self, company_branch_code):
        """Sets the company_branch_code of this CompanyInfoResponseData.

        รหัสสาขา <br><ex>Example: 00000</ex>  # noqa: E501

        :param company_branch_code: The company_branch_code of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_branch_code = company_branch_code

    @property
    def company_phone(self):
        """Gets the company_phone of this CompanyInfoResponseData.  # noqa: E501

        เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>  # noqa: E501

        :return: The company_phone of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_phone

    @company_phone.setter
    def company_phone(self, company_phone):
        """Sets the company_phone of this CompanyInfoResponseData.

        เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>  # noqa: E501

        :param company_phone: The company_phone of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_phone = company_phone

    @property
    def company_mobile(self):
        """Gets the company_mobile of this CompanyInfoResponseData.  # noqa: E501

        เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>  # noqa: E501

        :return: The company_mobile of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_mobile

    @company_mobile.setter
    def company_mobile(self, company_mobile):
        """Sets the company_mobile of this CompanyInfoResponseData.

        เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>  # noqa: E501

        :param company_mobile: The company_mobile of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_mobile = company_mobile

    @property
    def company_fax(self):
        """Gets the company_fax of this CompanyInfoResponseData.  # noqa: E501

        เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>  # noqa: E501

        :return: The company_fax of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_fax

    @company_fax.setter
    def company_fax(self, company_fax):
        """Sets the company_fax of this CompanyInfoResponseData.

        เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>  # noqa: E501

        :param company_fax: The company_fax of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_fax = company_fax

    @property
    def company_website(self):
        """Gets the company_website of this CompanyInfoResponseData.  # noqa: E501

        เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>  # noqa: E501

        :return: The company_website of this CompanyInfoResponseData.  # noqa: E501
        :rtype: str
        """
        return self._company_website

    @company_website.setter
    def company_website(self, company_website):
        """Sets the company_website of this CompanyInfoResponseData.

        เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>  # noqa: E501

        :param company_website: The company_website of this CompanyInfoResponseData.  # noqa: E501
        :type: str
        """

        self._company_website = company_website

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
        if not isinstance(other, CompanyInfoResponseData):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CompanyInfoResponseData):
            return True

        return self.to_dict() != other.to_dict()
