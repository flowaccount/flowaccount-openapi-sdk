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


class UpdateWithholidingTaxDocument(object):
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
        'company_name': 'str',
        'company_name_en': 'str',
        'company_address': 'str',
        'company_address_en': 'str',
        'company_tax_id': 'str',
        'company_branch': 'str',
        'company_branch_en': 'str',
        'company_phone': 'str',
        'company_mobile': 'str',
        'company_fax': 'str',
        'company_website': 'str',
        'contact_code': 'str',
        'contact_name': 'str',
        'contact_address': 'str',
        'contact_tax_id': 'str',
        'contact_branch': 'str',
        'contact_person': 'str',
        'contact_email': 'str',
        'contact_number': 'str',
        'contact_zip_code': 'str',
        'contact_group': 'int',
        'published_on': 'date',
        'entity': 'int',
        'text_other': 'str',
        'withholding_tax_items': 'list[WithholidingTaxItem]',
        'total': 'float',
        'total_tax_withheld': 'float',
        'tax_payment': 'int',
        'tax_payment_others': 'str',
        'provident_fund_number': 'str',
        'provident_fund_amount': 'str',
        'social_security_amount': 'str',
        'remarks': 'str',
        'internal_notes': 'str',
        'show_signature_or_stamp': 'bool'
    }

    attribute_map = {
        'company_name': 'companyName',
        'company_name_en': 'companyNameEn',
        'company_address': 'companyAddress',
        'company_address_en': 'companyAddressEn',
        'company_tax_id': 'companyTaxId',
        'company_branch': 'companyBranch',
        'company_branch_en': 'companyBranchEn',
        'company_phone': 'companyPhone',
        'company_mobile': 'companyMobile',
        'company_fax': 'companyFax',
        'company_website': 'companyWebsite',
        'contact_code': 'contactCode',
        'contact_name': 'contactName',
        'contact_address': 'contactAddress',
        'contact_tax_id': 'contactTaxId',
        'contact_branch': 'contactBranch',
        'contact_person': 'contactPerson',
        'contact_email': 'contactEmail',
        'contact_number': 'contactNumber',
        'contact_zip_code': 'contactZipCode',
        'contact_group': 'contactGroup',
        'published_on': 'publishedOn',
        'entity': 'entity',
        'text_other': 'textOther',
        'withholding_tax_items': 'withholdingTaxItems',
        'total': 'total',
        'total_tax_withheld': 'totalTaxWithheld',
        'tax_payment': 'taxPayment',
        'tax_payment_others': 'taxPaymentOthers',
        'provident_fund_number': 'providentFundNumber',
        'provident_fund_amount': 'providentFundAmount',
        'social_security_amount': 'socialSecurityAmount',
        'remarks': 'remarks',
        'internal_notes': 'internalNotes',
        'show_signature_or_stamp': 'showSignatureOrStamp'
    }

    def __init__(self, company_name=None, company_name_en=None, company_address=None, company_address_en=None, company_tax_id=None, company_branch=None, company_branch_en=None, company_phone=None, company_mobile=None, company_fax=None, company_website=None, contact_code=None, contact_name=None, contact_address=None, contact_tax_id=None, contact_branch=None, contact_person=None, contact_email=None, contact_number=None, contact_zip_code=None, contact_group=1, published_on=None, entity=1, text_other=None, withholding_tax_items=None, total=None, total_tax_withheld=None, tax_payment=1, tax_payment_others=None, provident_fund_number=None, provident_fund_amount=None, social_security_amount=None, remarks=None, internal_notes=None, show_signature_or_stamp=True, local_vars_configuration=None):  # noqa: E501
        """UpdateWithholidingTaxDocument - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._company_name = None
        self._company_name_en = None
        self._company_address = None
        self._company_address_en = None
        self._company_tax_id = None
        self._company_branch = None
        self._company_branch_en = None
        self._company_phone = None
        self._company_mobile = None
        self._company_fax = None
        self._company_website = None
        self._contact_code = None
        self._contact_name = None
        self._contact_address = None
        self._contact_tax_id = None
        self._contact_branch = None
        self._contact_person = None
        self._contact_email = None
        self._contact_number = None
        self._contact_zip_code = None
        self._contact_group = None
        self._published_on = None
        self._entity = None
        self._text_other = None
        self._withholding_tax_items = None
        self._total = None
        self._total_tax_withheld = None
        self._tax_payment = None
        self._tax_payment_others = None
        self._provident_fund_number = None
        self._provident_fund_amount = None
        self._social_security_amount = None
        self._remarks = None
        self._internal_notes = None
        self._show_signature_or_stamp = None
        self.discriminator = None

        self.company_name = company_name
        if company_name_en is not None:
            self.company_name_en = company_name_en
        self.company_address = company_address
        if company_address_en is not None:
            self.company_address_en = company_address_en
        if company_tax_id is not None:
            self.company_tax_id = company_tax_id
        self.company_branch = company_branch
        if company_branch_en is not None:
            self.company_branch_en = company_branch_en
        if company_phone is not None:
            self.company_phone = company_phone
        if company_mobile is not None:
            self.company_mobile = company_mobile
        if company_fax is not None:
            self.company_fax = company_fax
        if company_website is not None:
            self.company_website = company_website
        if contact_code is not None:
            self.contact_code = contact_code
        self.contact_name = contact_name
        if contact_address is not None:
            self.contact_address = contact_address
        if contact_tax_id is not None:
            self.contact_tax_id = contact_tax_id
        if contact_branch is not None:
            self.contact_branch = contact_branch
        if contact_person is not None:
            self.contact_person = contact_person
        if contact_email is not None:
            self.contact_email = contact_email
        if contact_number is not None:
            self.contact_number = contact_number
        if contact_zip_code is not None:
            self.contact_zip_code = contact_zip_code
        if contact_group is not None:
            self.contact_group = contact_group
        self.published_on = published_on
        self.entity = entity
        if text_other is not None:
            self.text_other = text_other
        self.withholding_tax_items = withholding_tax_items
        self.total = total
        self.total_tax_withheld = total_tax_withheld
        if tax_payment is not None:
            self.tax_payment = tax_payment
        if tax_payment_others is not None:
            self.tax_payment_others = tax_payment_others
        if provident_fund_number is not None:
            self.provident_fund_number = provident_fund_number
        if provident_fund_amount is not None:
            self.provident_fund_amount = provident_fund_amount
        if social_security_amount is not None:
            self.social_security_amount = social_security_amount
        if remarks is not None:
            self.remarks = remarks
        if internal_notes is not None:
            self.internal_notes = internal_notes
        if show_signature_or_stamp is not None:
            self.show_signature_or_stamp = show_signature_or_stamp

    @property
    def company_name(self):
        """Gets the company_name of this UpdateWithholidingTaxDocument.  # noqa: E501

        ชื่อบริษัท  # noqa: E501

        :return: The company_name of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_name

    @company_name.setter
    def company_name(self, company_name):
        """Sets the company_name of this UpdateWithholidingTaxDocument.

        ชื่อบริษัท  # noqa: E501

        :param company_name: The company_name of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and company_name is None:  # noqa: E501
            raise ValueError("Invalid value for `company_name`, must not be `None`")  # noqa: E501

        self._company_name = company_name

    @property
    def company_name_en(self):
        """Gets the company_name_en of this UpdateWithholidingTaxDocument.  # noqa: E501

        ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)  # noqa: E501

        :return: The company_name_en of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_name_en

    @company_name_en.setter
    def company_name_en(self, company_name_en):
        """Sets the company_name_en of this UpdateWithholidingTaxDocument.

        ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)  # noqa: E501

        :param company_name_en: The company_name_en of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_name_en = company_name_en

    @property
    def company_address(self):
        """Gets the company_address of this UpdateWithholidingTaxDocument.  # noqa: E501

        ที่อยู่บริษัท  # noqa: E501

        :return: The company_address of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_address

    @company_address.setter
    def company_address(self, company_address):
        """Sets the company_address of this UpdateWithholidingTaxDocument.

        ที่อยู่บริษัท  # noqa: E501

        :param company_address: The company_address of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and company_address is None:  # noqa: E501
            raise ValueError("Invalid value for `company_address`, must not be `None`")  # noqa: E501

        self._company_address = company_address

    @property
    def company_address_en(self):
        """Gets the company_address_en of this UpdateWithholidingTaxDocument.  # noqa: E501

        ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)  # noqa: E501

        :return: The company_address_en of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_address_en

    @company_address_en.setter
    def company_address_en(self, company_address_en):
        """Sets the company_address_en of this UpdateWithholidingTaxDocument.

        ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)  # noqa: E501

        :param company_address_en: The company_address_en of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_address_en = company_address_en

    @property
    def company_tax_id(self):
        """Gets the company_tax_id of this UpdateWithholidingTaxDocument.  # noqa: E501

        เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>  # noqa: E501

        :return: The company_tax_id of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_tax_id

    @company_tax_id.setter
    def company_tax_id(self, company_tax_id):
        """Sets the company_tax_id of this UpdateWithholidingTaxDocument.

        เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>  # noqa: E501

        :param company_tax_id: The company_tax_id of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_tax_id = company_tax_id

    @property
    def company_branch(self):
        """Gets the company_branch of this UpdateWithholidingTaxDocument.  # noqa: E501

        ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>  # noqa: E501

        :return: The company_branch of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_branch

    @company_branch.setter
    def company_branch(self, company_branch):
        """Sets the company_branch of this UpdateWithholidingTaxDocument.

        ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>  # noqa: E501

        :param company_branch: The company_branch of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and company_branch is None:  # noqa: E501
            raise ValueError("Invalid value for `company_branch`, must not be `None`")  # noqa: E501

        self._company_branch = company_branch

    @property
    def company_branch_en(self):
        """Gets the company_branch_en of this UpdateWithholidingTaxDocument.  # noqa: E501

        ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>  # noqa: E501

        :return: The company_branch_en of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_branch_en

    @company_branch_en.setter
    def company_branch_en(self, company_branch_en):
        """Sets the company_branch_en of this UpdateWithholidingTaxDocument.

        ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>  # noqa: E501

        :param company_branch_en: The company_branch_en of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_branch_en = company_branch_en

    @property
    def company_phone(self):
        """Gets the company_phone of this UpdateWithholidingTaxDocument.  # noqa: E501

        เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>  # noqa: E501

        :return: The company_phone of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_phone

    @company_phone.setter
    def company_phone(self, company_phone):
        """Sets the company_phone of this UpdateWithholidingTaxDocument.

        เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>  # noqa: E501

        :param company_phone: The company_phone of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_phone = company_phone

    @property
    def company_mobile(self):
        """Gets the company_mobile of this UpdateWithholidingTaxDocument.  # noqa: E501

        เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>  # noqa: E501

        :return: The company_mobile of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_mobile

    @company_mobile.setter
    def company_mobile(self, company_mobile):
        """Sets the company_mobile of this UpdateWithholidingTaxDocument.

        เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>  # noqa: E501

        :param company_mobile: The company_mobile of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_mobile = company_mobile

    @property
    def company_fax(self):
        """Gets the company_fax of this UpdateWithholidingTaxDocument.  # noqa: E501

        เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>  # noqa: E501

        :return: The company_fax of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_fax

    @company_fax.setter
    def company_fax(self, company_fax):
        """Sets the company_fax of this UpdateWithholidingTaxDocument.

        เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>  # noqa: E501

        :param company_fax: The company_fax of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_fax = company_fax

    @property
    def company_website(self):
        """Gets the company_website of this UpdateWithholidingTaxDocument.  # noqa: E501

        เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>  # noqa: E501

        :return: The company_website of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._company_website

    @company_website.setter
    def company_website(self, company_website):
        """Sets the company_website of this UpdateWithholidingTaxDocument.

        เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>  # noqa: E501

        :param company_website: The company_website of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._company_website = company_website

    @property
    def contact_code(self):
        """Gets the contact_code of this UpdateWithholidingTaxDocument.  # noqa: E501

        รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :return: The contact_code of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_code

    @contact_code.setter
    def contact_code(self, contact_code):
        """Sets the contact_code of this UpdateWithholidingTaxDocument.

        รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :param contact_code: The contact_code of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_code = contact_code

    @property
    def contact_name(self):
        """Gets the contact_name of this UpdateWithholidingTaxDocument.  # noqa: E501

        ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :return: The contact_name of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_name

    @contact_name.setter
    def contact_name(self, contact_name):
        """Sets the contact_name of this UpdateWithholidingTaxDocument.

        ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :param contact_name: The contact_name of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and contact_name is None:  # noqa: E501
            raise ValueError("Invalid value for `contact_name`, must not be `None`")  # noqa: E501

        self._contact_name = contact_name

    @property
    def contact_address(self):
        """Gets the contact_address of this UpdateWithholidingTaxDocument.  # noqa: E501

        ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :return: The contact_address of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_address

    @contact_address.setter
    def contact_address(self, contact_address):
        """Sets the contact_address of this UpdateWithholidingTaxDocument.

        ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :param contact_address: The contact_address of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_address = contact_address

    @property
    def contact_tax_id(self):
        """Gets the contact_tax_id of this UpdateWithholidingTaxDocument.  # noqa: E501

        เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>  # noqa: E501

        :return: The contact_tax_id of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_tax_id

    @contact_tax_id.setter
    def contact_tax_id(self, contact_tax_id):
        """Sets the contact_tax_id of this UpdateWithholidingTaxDocument.

        เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>  # noqa: E501

        :param contact_tax_id: The contact_tax_id of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_tax_id = contact_tax_id

    @property
    def contact_branch(self):
        """Gets the contact_branch of this UpdateWithholidingTaxDocument.  # noqa: E501

        สำนักงาน/สาขา  # noqa: E501

        :return: The contact_branch of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_branch

    @contact_branch.setter
    def contact_branch(self, contact_branch):
        """Sets the contact_branch of this UpdateWithholidingTaxDocument.

        สำนักงาน/สาขา  # noqa: E501

        :param contact_branch: The contact_branch of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_branch = contact_branch

    @property
    def contact_person(self):
        """Gets the contact_person of this UpdateWithholidingTaxDocument.  # noqa: E501

        ชื่อผู้ติดต่อ  # noqa: E501

        :return: The contact_person of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_person

    @contact_person.setter
    def contact_person(self, contact_person):
        """Sets the contact_person of this UpdateWithholidingTaxDocument.

        ชื่อผู้ติดต่อ  # noqa: E501

        :param contact_person: The contact_person of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_person = contact_person

    @property
    def contact_email(self):
        """Gets the contact_email of this UpdateWithholidingTaxDocument.  # noqa: E501

        อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>  # noqa: E501

        :return: The contact_email of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_email

    @contact_email.setter
    def contact_email(self, contact_email):
        """Sets the contact_email of this UpdateWithholidingTaxDocument.

        อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>  # noqa: E501

        :param contact_email: The contact_email of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_email = contact_email

    @property
    def contact_number(self):
        """Gets the contact_number of this UpdateWithholidingTaxDocument.  # noqa: E501

        เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>  # noqa: E501

        :return: The contact_number of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_number

    @contact_number.setter
    def contact_number(self, contact_number):
        """Sets the contact_number of this UpdateWithholidingTaxDocument.

        เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>  # noqa: E501

        :param contact_number: The contact_number of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_number = contact_number

    @property
    def contact_zip_code(self):
        """Gets the contact_zip_code of this UpdateWithholidingTaxDocument.  # noqa: E501

        รหัสไปรษณีย์ติดต่อ  # noqa: E501

        :return: The contact_zip_code of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._contact_zip_code

    @contact_zip_code.setter
    def contact_zip_code(self, contact_zip_code):
        """Sets the contact_zip_code of this UpdateWithholidingTaxDocument.

        รหัสไปรษณีย์ติดต่อ  # noqa: E501

        :param contact_zip_code: The contact_zip_code of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._contact_zip_code = contact_zip_code

    @property
    def contact_group(self):
        """Gets the contact_group of this UpdateWithholidingTaxDocument.  # noqa: E501

        ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล  # noqa: E501

        :return: The contact_group of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: int
        """
        return self._contact_group

    @contact_group.setter
    def contact_group(self, contact_group):
        """Sets the contact_group of this UpdateWithholidingTaxDocument.

        ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล  # noqa: E501

        :param contact_group: The contact_group of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: int
        """

        self._contact_group = contact_group

    @property
    def published_on(self):
        """Gets the published_on of this UpdateWithholidingTaxDocument.  # noqa: E501

        วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :return: The published_on of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: date
        """
        return self._published_on

    @published_on.setter
    def published_on(self, published_on):
        """Sets the published_on of this UpdateWithholidingTaxDocument.

        วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :param published_on: The published_on of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: date
        """
        if self.local_vars_configuration.client_side_validation and published_on is None:  # noqa: E501
            raise ValueError("Invalid value for `published_on`, must not be `None`")  # noqa: E501

        self._published_on = published_on

    @property
    def entity(self):
        """Gets the entity of this UpdateWithholidingTaxDocument.  # noqa: E501

        แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13  # noqa: E501

        :return: The entity of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: int
        """
        return self._entity

    @entity.setter
    def entity(self, entity):
        """Sets the entity of this UpdateWithholidingTaxDocument.

        แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13  # noqa: E501

        :param entity: The entity of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and entity is None:  # noqa: E501
            raise ValueError("Invalid value for `entity`, must not be `None`")  # noqa: E501

        self._entity = entity

    @property
    def text_other(self):
        """Gets the text_other of this UpdateWithholidingTaxDocument.  # noqa: E501

        ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex>  # noqa: E501

        :return: The text_other of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._text_other

    @text_other.setter
    def text_other(self, text_other):
        """Sets the text_other of this UpdateWithholidingTaxDocument.

        ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex>  # noqa: E501

        :param text_other: The text_other of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._text_other = text_other

    @property
    def withholding_tax_items(self):
        """Gets the withholding_tax_items of this UpdateWithholidingTaxDocument.  # noqa: E501

        รายการหัก ของเอกสารหัก ณ ที่จ่าย  # noqa: E501

        :return: The withholding_tax_items of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: list[WithholidingTaxItem]
        """
        return self._withholding_tax_items

    @withholding_tax_items.setter
    def withholding_tax_items(self, withholding_tax_items):
        """Sets the withholding_tax_items of this UpdateWithholidingTaxDocument.

        รายการหัก ของเอกสารหัก ณ ที่จ่าย  # noqa: E501

        :param withholding_tax_items: The withholding_tax_items of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: list[WithholidingTaxItem]
        """
        if self.local_vars_configuration.client_side_validation and withholding_tax_items is None:  # noqa: E501
            raise ValueError("Invalid value for `withholding_tax_items`, must not be `None`")  # noqa: E501

        self._withholding_tax_items = withholding_tax_items

    @property
    def total(self):
        """Gets the total of this UpdateWithholidingTaxDocument.  # noqa: E501

        จำนวนเงิน (ไม่รวมภาษี)  # noqa: E501

        :return: The total of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: float
        """
        return self._total

    @total.setter
    def total(self, total):
        """Sets the total of this UpdateWithholidingTaxDocument.

        จำนวนเงิน (ไม่รวมภาษี)  # noqa: E501

        :param total: The total of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and total is None:  # noqa: E501
            raise ValueError("Invalid value for `total`, must not be `None`")  # noqa: E501

        self._total = total

    @property
    def total_tax_withheld(self):
        """Gets the total_tax_withheld of this UpdateWithholidingTaxDocument.  # noqa: E501

        ภาษีที่หัก  # noqa: E501

        :return: The total_tax_withheld of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: float
        """
        return self._total_tax_withheld

    @total_tax_withheld.setter
    def total_tax_withheld(self, total_tax_withheld):
        """Sets the total_tax_withheld of this UpdateWithholidingTaxDocument.

        ภาษีที่หัก  # noqa: E501

        :param total_tax_withheld: The total_tax_withheld of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and total_tax_withheld is None:  # noqa: E501
            raise ValueError("Invalid value for `total_tax_withheld`, must not be `None`")  # noqa: E501

        self._total_tax_withheld = total_tax_withheld

    @property
    def tax_payment(self):
        """Gets the tax_payment of this UpdateWithholidingTaxDocument.  # noqa: E501

        ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ  # noqa: E501

        :return: The tax_payment of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: int
        """
        return self._tax_payment

    @tax_payment.setter
    def tax_payment(self, tax_payment):
        """Sets the tax_payment of this UpdateWithholidingTaxDocument.

        ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ  # noqa: E501

        :param tax_payment: The tax_payment of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: int
        """

        self._tax_payment = tax_payment

    @property
    def tax_payment_others(self):
        """Gets the tax_payment_others of this UpdateWithholidingTaxDocument.  # noqa: E501

        ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ   # noqa: E501

        :return: The tax_payment_others of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._tax_payment_others

    @tax_payment_others.setter
    def tax_payment_others(self, tax_payment_others):
        """Sets the tax_payment_others of this UpdateWithholidingTaxDocument.

        ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ   # noqa: E501

        :param tax_payment_others: The tax_payment_others of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._tax_payment_others = tax_payment_others

    @property
    def provident_fund_number(self):
        """Gets the provident_fund_number of this UpdateWithholidingTaxDocument.  # noqa: E501

        ใบอนุญาตเลขที่  # noqa: E501

        :return: The provident_fund_number of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._provident_fund_number

    @provident_fund_number.setter
    def provident_fund_number(self, provident_fund_number):
        """Sets the provident_fund_number of this UpdateWithholidingTaxDocument.

        ใบอนุญาตเลขที่  # noqa: E501

        :param provident_fund_number: The provident_fund_number of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._provident_fund_number = provident_fund_number

    @property
    def provident_fund_amount(self):
        """Gets the provident_fund_amount of this UpdateWithholidingTaxDocument.  # noqa: E501

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ  # noqa: E501

        :return: The provident_fund_amount of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._provident_fund_amount

    @provident_fund_amount.setter
    def provident_fund_amount(self, provident_fund_amount):
        """Sets the provident_fund_amount of this UpdateWithholidingTaxDocument.

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ  # noqa: E501

        :param provident_fund_amount: The provident_fund_amount of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._provident_fund_amount = provident_fund_amount

    @property
    def social_security_amount(self):
        """Gets the social_security_amount of this UpdateWithholidingTaxDocument.  # noqa: E501

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม  # noqa: E501

        :return: The social_security_amount of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._social_security_amount

    @social_security_amount.setter
    def social_security_amount(self, social_security_amount):
        """Sets the social_security_amount of this UpdateWithholidingTaxDocument.

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม  # noqa: E501

        :param social_security_amount: The social_security_amount of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._social_security_amount = social_security_amount

    @property
    def remarks(self):
        """Gets the remarks of this UpdateWithholidingTaxDocument.  # noqa: E501

        หมายเหตุเอกสาร  # noqa: E501

        :return: The remarks of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._remarks

    @remarks.setter
    def remarks(self, remarks):
        """Sets the remarks of this UpdateWithholidingTaxDocument.

        หมายเหตุเอกสาร  # noqa: E501

        :param remarks: The remarks of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._remarks = remarks

    @property
    def internal_notes(self):
        """Gets the internal_notes of this UpdateWithholidingTaxDocument.  # noqa: E501

        โน๊ตภายในบริษัท  # noqa: E501

        :return: The internal_notes of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: str
        """
        return self._internal_notes

    @internal_notes.setter
    def internal_notes(self, internal_notes):
        """Sets the internal_notes of this UpdateWithholidingTaxDocument.

        โน๊ตภายในบริษัท  # noqa: E501

        :param internal_notes: The internal_notes of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: str
        """

        self._internal_notes = internal_notes

    @property
    def show_signature_or_stamp(self):
        """Gets the show_signature_or_stamp of this UpdateWithholidingTaxDocument.  # noqa: E501

        ลายเซ็นอิเล็กทรอนิกส์และตรายาง  # noqa: E501

        :return: The show_signature_or_stamp of this UpdateWithholidingTaxDocument.  # noqa: E501
        :rtype: bool
        """
        return self._show_signature_or_stamp

    @show_signature_or_stamp.setter
    def show_signature_or_stamp(self, show_signature_or_stamp):
        """Sets the show_signature_or_stamp of this UpdateWithholidingTaxDocument.

        ลายเซ็นอิเล็กทรอนิกส์และตรายาง  # noqa: E501

        :param show_signature_or_stamp: The show_signature_or_stamp of this UpdateWithholidingTaxDocument.  # noqa: E501
        :type: bool
        """

        self._show_signature_or_stamp = show_signature_or_stamp

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
        if not isinstance(other, UpdateWithholidingTaxDocument):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UpdateWithholidingTaxDocument):
            return True

        return self.to_dict() != other.to_dict()
