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


class WithholidingTaxDocumentResponseData(object):
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
        'document_id': 'str',
        'document_serial': 'str',
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
        'show_signature_or_stamp': 'bool',
        'company': 'SimpleDocumentResponseAllOfDataCompany',
        'status': 'int',
        'status_string': 'int',
        'document_type': 'int',
        'allow_delete': 'bool'
    }

    attribute_map = {
        'document_id': 'documentId',
        'document_serial': 'documentSerial',
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
        'show_signature_or_stamp': 'showSignatureOrStamp',
        'company': 'company',
        'status': 'status',
        'status_string': 'statusString',
        'document_type': 'documentType',
        'allow_delete': 'allowDelete'
    }

    def __init__(self, document_id=None, document_serial=None, contact_code=None, contact_name=None, contact_address=None, contact_tax_id=None, contact_branch=None, contact_person=None, contact_email=None, contact_number=None, contact_zip_code=None, contact_group=1, published_on=None, entity=1, text_other=None, withholding_tax_items=None, total=None, total_tax_withheld=None, tax_payment=1, tax_payment_others=None, provident_fund_number=None, provident_fund_amount=None, social_security_amount=None, remarks=None, internal_notes=None, show_signature_or_stamp=True, company=None, status=None, status_string=None, document_type=None, allow_delete=None, local_vars_configuration=None):  # noqa: E501
        """WithholidingTaxDocumentResponseData - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._document_id = None
        self._document_serial = None
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
        self._company = None
        self._status = None
        self._status_string = None
        self._document_type = None
        self._allow_delete = None
        self.discriminator = None

        if document_id is not None:
            self.document_id = document_id
        if document_serial is not None:
            self.document_serial = document_serial
        if contact_code is not None:
            self.contact_code = contact_code
        if contact_name is not None:
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
        if published_on is not None:
            self.published_on = published_on
        if entity is not None:
            self.entity = entity
        if text_other is not None:
            self.text_other = text_other
        if withholding_tax_items is not None:
            self.withholding_tax_items = withholding_tax_items
        if total is not None:
            self.total = total
        if total_tax_withheld is not None:
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
        if company is not None:
            self.company = company
        if status is not None:
            self.status = status
        if status_string is not None:
            self.status_string = status_string
        if document_type is not None:
            self.document_type = document_type
        if allow_delete is not None:
            self.allow_delete = allow_delete

    @property
    def document_id(self):
        """Gets the document_id of this WithholidingTaxDocumentResponseData.  # noqa: E501

        เลข Id เอกสารใบหัก ณ ที่จ่าย  # noqa: E501

        :return: The document_id of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._document_id

    @document_id.setter
    def document_id(self, document_id):
        """Sets the document_id of this WithholidingTaxDocumentResponseData.

        เลข Id เอกสารใบหัก ณ ที่จ่าย  # noqa: E501

        :param document_id: The document_id of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._document_id = document_id

    @property
    def document_serial(self):
        """Gets the document_serial of this WithholidingTaxDocumentResponseData.  # noqa: E501

        เลขที่เอกสารใบหัก ณ ที่จ่าย  # noqa: E501

        :return: The document_serial of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._document_serial

    @document_serial.setter
    def document_serial(self, document_serial):
        """Sets the document_serial of this WithholidingTaxDocumentResponseData.

        เลขที่เอกสารใบหัก ณ ที่จ่าย  # noqa: E501

        :param document_serial: The document_serial of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._document_serial = document_serial

    @property
    def contact_code(self):
        """Gets the contact_code of this WithholidingTaxDocumentResponseData.  # noqa: E501

        รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :return: The contact_code of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_code

    @contact_code.setter
    def contact_code(self, contact_code):
        """Sets the contact_code of this WithholidingTaxDocumentResponseData.

        รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :param contact_code: The contact_code of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_code = contact_code

    @property
    def contact_name(self):
        """Gets the contact_name of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :return: The contact_name of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_name

    @contact_name.setter
    def contact_name(self, contact_name):
        """Sets the contact_name of this WithholidingTaxDocumentResponseData.

        ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :param contact_name: The contact_name of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_name = contact_name

    @property
    def contact_address(self):
        """Gets the contact_address of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :return: The contact_address of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_address

    @contact_address.setter
    def contact_address(self, contact_address):
        """Sets the contact_address of this WithholidingTaxDocumentResponseData.

        ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า  # noqa: E501

        :param contact_address: The contact_address of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_address = contact_address

    @property
    def contact_tax_id(self):
        """Gets the contact_tax_id of this WithholidingTaxDocumentResponseData.  # noqa: E501

        เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>  # noqa: E501

        :return: The contact_tax_id of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_tax_id

    @contact_tax_id.setter
    def contact_tax_id(self, contact_tax_id):
        """Sets the contact_tax_id of this WithholidingTaxDocumentResponseData.

        เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>  # noqa: E501

        :param contact_tax_id: The contact_tax_id of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_tax_id = contact_tax_id

    @property
    def contact_branch(self):
        """Gets the contact_branch of this WithholidingTaxDocumentResponseData.  # noqa: E501

        สำนักงาน/สาขา  # noqa: E501

        :return: The contact_branch of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_branch

    @contact_branch.setter
    def contact_branch(self, contact_branch):
        """Sets the contact_branch of this WithholidingTaxDocumentResponseData.

        สำนักงาน/สาขา  # noqa: E501

        :param contact_branch: The contact_branch of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_branch = contact_branch

    @property
    def contact_person(self):
        """Gets the contact_person of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ชื่อผู้ติดต่อ  # noqa: E501

        :return: The contact_person of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_person

    @contact_person.setter
    def contact_person(self, contact_person):
        """Sets the contact_person of this WithholidingTaxDocumentResponseData.

        ชื่อผู้ติดต่อ  # noqa: E501

        :param contact_person: The contact_person of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_person = contact_person

    @property
    def contact_email(self):
        """Gets the contact_email of this WithholidingTaxDocumentResponseData.  # noqa: E501

        อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>  # noqa: E501

        :return: The contact_email of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_email

    @contact_email.setter
    def contact_email(self, contact_email):
        """Sets the contact_email of this WithholidingTaxDocumentResponseData.

        อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>  # noqa: E501

        :param contact_email: The contact_email of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_email = contact_email

    @property
    def contact_number(self):
        """Gets the contact_number of this WithholidingTaxDocumentResponseData.  # noqa: E501

        เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>  # noqa: E501

        :return: The contact_number of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_number

    @contact_number.setter
    def contact_number(self, contact_number):
        """Sets the contact_number of this WithholidingTaxDocumentResponseData.

        เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>  # noqa: E501

        :param contact_number: The contact_number of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_number = contact_number

    @property
    def contact_zip_code(self):
        """Gets the contact_zip_code of this WithholidingTaxDocumentResponseData.  # noqa: E501

        รหัสไปรษณีย์ติดต่อ  # noqa: E501

        :return: The contact_zip_code of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._contact_zip_code

    @contact_zip_code.setter
    def contact_zip_code(self, contact_zip_code):
        """Sets the contact_zip_code of this WithholidingTaxDocumentResponseData.

        รหัสไปรษณีย์ติดต่อ  # noqa: E501

        :param contact_zip_code: The contact_zip_code of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._contact_zip_code = contact_zip_code

    @property
    def contact_group(self):
        """Gets the contact_group of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล  # noqa: E501

        :return: The contact_group of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: int
        """
        return self._contact_group

    @contact_group.setter
    def contact_group(self, contact_group):
        """Sets the contact_group of this WithholidingTaxDocumentResponseData.

        ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล  # noqa: E501

        :param contact_group: The contact_group of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: int
        """

        self._contact_group = contact_group

    @property
    def published_on(self):
        """Gets the published_on of this WithholidingTaxDocumentResponseData.  # noqa: E501

        วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :return: The published_on of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: date
        """
        return self._published_on

    @published_on.setter
    def published_on(self, published_on):
        """Sets the published_on of this WithholidingTaxDocumentResponseData.

        วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :param published_on: The published_on of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: date
        """

        self._published_on = published_on

    @property
    def entity(self):
        """Gets the entity of this WithholidingTaxDocumentResponseData.  # noqa: E501

        แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13  # noqa: E501

        :return: The entity of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: int
        """
        return self._entity

    @entity.setter
    def entity(self, entity):
        """Sets the entity of this WithholidingTaxDocumentResponseData.

        แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13  # noqa: E501

        :param entity: The entity of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: int
        """

        self._entity = entity

    @property
    def text_other(self):
        """Gets the text_other of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) Example: 2020  # noqa: E501

        :return: The text_other of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._text_other

    @text_other.setter
    def text_other(self, text_other):
        """Sets the text_other of this WithholidingTaxDocumentResponseData.

        ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) Example: 2020  # noqa: E501

        :param text_other: The text_other of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._text_other = text_other

    @property
    def withholding_tax_items(self):
        """Gets the withholding_tax_items of this WithholidingTaxDocumentResponseData.  # noqa: E501

        รายการหัก ของเอกสารหัก ณ ที่จ่าย  # noqa: E501

        :return: The withholding_tax_items of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: list[WithholidingTaxItem]
        """
        return self._withholding_tax_items

    @withholding_tax_items.setter
    def withholding_tax_items(self, withholding_tax_items):
        """Sets the withholding_tax_items of this WithholidingTaxDocumentResponseData.

        รายการหัก ของเอกสารหัก ณ ที่จ่าย  # noqa: E501

        :param withholding_tax_items: The withholding_tax_items of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: list[WithholidingTaxItem]
        """

        self._withholding_tax_items = withholding_tax_items

    @property
    def total(self):
        """Gets the total of this WithholidingTaxDocumentResponseData.  # noqa: E501

        จำนวนเงิน (ไม่รวมภาษี)  # noqa: E501

        :return: The total of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: float
        """
        return self._total

    @total.setter
    def total(self, total):
        """Sets the total of this WithholidingTaxDocumentResponseData.

        จำนวนเงิน (ไม่รวมภาษี)  # noqa: E501

        :param total: The total of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: float
        """

        self._total = total

    @property
    def total_tax_withheld(self):
        """Gets the total_tax_withheld of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ภาษีที่หัก  # noqa: E501

        :return: The total_tax_withheld of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: float
        """
        return self._total_tax_withheld

    @total_tax_withheld.setter
    def total_tax_withheld(self, total_tax_withheld):
        """Sets the total_tax_withheld of this WithholidingTaxDocumentResponseData.

        ภาษีที่หัก  # noqa: E501

        :param total_tax_withheld: The total_tax_withheld of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: float
        """

        self._total_tax_withheld = total_tax_withheld

    @property
    def tax_payment(self):
        """Gets the tax_payment of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ  # noqa: E501

        :return: The tax_payment of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: int
        """
        return self._tax_payment

    @tax_payment.setter
    def tax_payment(self, tax_payment):
        """Sets the tax_payment of this WithholidingTaxDocumentResponseData.

        ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ  # noqa: E501

        :param tax_payment: The tax_payment of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: int
        """

        self._tax_payment = tax_payment

    @property
    def tax_payment_others(self):
        """Gets the tax_payment_others of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ   # noqa: E501

        :return: The tax_payment_others of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._tax_payment_others

    @tax_payment_others.setter
    def tax_payment_others(self, tax_payment_others):
        """Sets the tax_payment_others of this WithholidingTaxDocumentResponseData.

        ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ   # noqa: E501

        :param tax_payment_others: The tax_payment_others of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._tax_payment_others = tax_payment_others

    @property
    def provident_fund_number(self):
        """Gets the provident_fund_number of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ใบอนุญาตเลขที่  # noqa: E501

        :return: The provident_fund_number of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._provident_fund_number

    @provident_fund_number.setter
    def provident_fund_number(self, provident_fund_number):
        """Sets the provident_fund_number of this WithholidingTaxDocumentResponseData.

        ใบอนุญาตเลขที่  # noqa: E501

        :param provident_fund_number: The provident_fund_number of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._provident_fund_number = provident_fund_number

    @property
    def provident_fund_amount(self):
        """Gets the provident_fund_amount of this WithholidingTaxDocumentResponseData.  # noqa: E501

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ  # noqa: E501

        :return: The provident_fund_amount of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._provident_fund_amount

    @provident_fund_amount.setter
    def provident_fund_amount(self, provident_fund_amount):
        """Sets the provident_fund_amount of this WithholidingTaxDocumentResponseData.

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ  # noqa: E501

        :param provident_fund_amount: The provident_fund_amount of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._provident_fund_amount = provident_fund_amount

    @property
    def social_security_amount(self):
        """Gets the social_security_amount of this WithholidingTaxDocumentResponseData.  # noqa: E501

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม  # noqa: E501

        :return: The social_security_amount of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._social_security_amount

    @social_security_amount.setter
    def social_security_amount(self, social_security_amount):
        """Sets the social_security_amount of this WithholidingTaxDocumentResponseData.

        จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม  # noqa: E501

        :param social_security_amount: The social_security_amount of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._social_security_amount = social_security_amount

    @property
    def remarks(self):
        """Gets the remarks of this WithholidingTaxDocumentResponseData.  # noqa: E501

        หมายเหตุเอกสาร  # noqa: E501

        :return: The remarks of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._remarks

    @remarks.setter
    def remarks(self, remarks):
        """Sets the remarks of this WithholidingTaxDocumentResponseData.

        หมายเหตุเอกสาร  # noqa: E501

        :param remarks: The remarks of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._remarks = remarks

    @property
    def internal_notes(self):
        """Gets the internal_notes of this WithholidingTaxDocumentResponseData.  # noqa: E501

        โน๊ตภายในบริษัท  # noqa: E501

        :return: The internal_notes of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: str
        """
        return self._internal_notes

    @internal_notes.setter
    def internal_notes(self, internal_notes):
        """Sets the internal_notes of this WithholidingTaxDocumentResponseData.

        โน๊ตภายในบริษัท  # noqa: E501

        :param internal_notes: The internal_notes of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: str
        """

        self._internal_notes = internal_notes

    @property
    def show_signature_or_stamp(self):
        """Gets the show_signature_or_stamp of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ลายเซ็นอิเล็กทรอนิกส์และตรายาง  # noqa: E501

        :return: The show_signature_or_stamp of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: bool
        """
        return self._show_signature_or_stamp

    @show_signature_or_stamp.setter
    def show_signature_or_stamp(self, show_signature_or_stamp):
        """Sets the show_signature_or_stamp of this WithholidingTaxDocumentResponseData.

        ลายเซ็นอิเล็กทรอนิกส์และตรายาง  # noqa: E501

        :param show_signature_or_stamp: The show_signature_or_stamp of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: bool
        """

        self._show_signature_or_stamp = show_signature_or_stamp

    @property
    def company(self):
        """Gets the company of this WithholidingTaxDocumentResponseData.  # noqa: E501


        :return: The company of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: SimpleDocumentResponseAllOfDataCompany
        """
        return self._company

    @company.setter
    def company(self, company):
        """Sets the company of this WithholidingTaxDocumentResponseData.


        :param company: The company of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: SimpleDocumentResponseAllOfDataCompany
        """

        self._company = company

    @property
    def status(self):
        """Gets the status of this WithholidingTaxDocumentResponseData.  # noqa: E501

        เลขสถานะเอกสารฉบับนี้  # noqa: E501

        :return: The status of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: int
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this WithholidingTaxDocumentResponseData.

        เลขสถานะเอกสารฉบับนี้  # noqa: E501

        :param status: The status of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: int
        """

        self._status = status

    @property
    def status_string(self):
        """Gets the status_string of this WithholidingTaxDocumentResponseData.  # noqa: E501

        ชื่อสถานะเอกสารฉบับนี้  # noqa: E501

        :return: The status_string of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: int
        """
        return self._status_string

    @status_string.setter
    def status_string(self, status_string):
        """Sets the status_string of this WithholidingTaxDocumentResponseData.

        ชื่อสถานะเอกสารฉบับนี้  # noqa: E501

        :param status_string: The status_string of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: int
        """

        self._status_string = status_string

    @property
    def document_type(self):
        """Gets the document_type of this WithholidingTaxDocumentResponseData.  # noqa: E501

        เลขประเภทเอกสารฉบับนี้  # noqa: E501

        :return: The document_type of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: int
        """
        return self._document_type

    @document_type.setter
    def document_type(self, document_type):
        """Sets the document_type of this WithholidingTaxDocumentResponseData.

        เลขประเภทเอกสารฉบับนี้  # noqa: E501

        :param document_type: The document_type of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: int
        """

        self._document_type = document_type

    @property
    def allow_delete(self):
        """Gets the allow_delete of this WithholidingTaxDocumentResponseData.  # noqa: E501

        สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้  # noqa: E501

        :return: The allow_delete of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :rtype: bool
        """
        return self._allow_delete

    @allow_delete.setter
    def allow_delete(self, allow_delete):
        """Sets the allow_delete of this WithholidingTaxDocumentResponseData.

        สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้  # noqa: E501

        :param allow_delete: The allow_delete of this WithholidingTaxDocumentResponseData.  # noqa: E501
        :type: bool
        """

        self._allow_delete = allow_delete

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
        if not isinstance(other, WithholidingTaxDocumentResponseData):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, WithholidingTaxDocumentResponseData):
            return True

        return self.to_dict() != other.to_dict()
