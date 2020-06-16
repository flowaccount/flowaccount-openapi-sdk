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


class PaymentReceivingCreditCard(object):
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
        'payment_structure_type': 'str',
        'document_id': 'int',
        'payment_method': 'int',
        'payment_date': 'date',
        'collected': 'float',
        'payment_deduction_type': 'int',
        'payment_deduction_amount': 'float',
        'withheld_percentage': 'int',
        'withheld_amount': 'float',
        'credit_card_bank_account_id': 'int',
        'payment_remarks': 'str',
        'remaining_collected_type': 'int',
        'remaining_collected': 'float'
    }

    attribute_map = {
        'payment_structure_type': 'paymentStructureType',
        'document_id': 'documentId',
        'payment_method': 'paymentMethod',
        'payment_date': 'paymentDate',
        'collected': 'collected',
        'payment_deduction_type': 'paymentDeductionType',
        'payment_deduction_amount': 'paymentDeductionAmount',
        'withheld_percentage': 'withheldPercentage',
        'withheld_amount': 'withheldAmount',
        'credit_card_bank_account_id': 'creditCardBankAccountId',
        'payment_remarks': 'paymentRemarks',
        'remaining_collected_type': 'remainingCollectedType',
        'remaining_collected': 'remainingCollected'
    }

    discriminator_value_class_map = {
    }

    def __init__(self, payment_structure_type=None, document_id=None, payment_method=1, payment_date=None, collected=0, payment_deduction_type=0, payment_deduction_amount=0, withheld_percentage=0, withheld_amount=0, credit_card_bank_account_id=0, payment_remarks=None, remaining_collected_type=0, remaining_collected=0, local_vars_configuration=None):  # noqa: E501
        """PaymentReceivingCreditCard - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._payment_structure_type = None
        self._document_id = None
        self._payment_method = None
        self._payment_date = None
        self._collected = None
        self._payment_deduction_type = None
        self._payment_deduction_amount = None
        self._withheld_percentage = None
        self._withheld_amount = None
        self._credit_card_bank_account_id = None
        self._payment_remarks = None
        self._remaining_collected_type = None
        self._remaining_collected = None
        self.discriminator = 'payment_structure_type'

        self.payment_structure_type = payment_structure_type
        self.document_id = document_id
        self.payment_method = payment_method
        self.payment_date = payment_date
        self.collected = collected
        if payment_deduction_type is not None:
            self.payment_deduction_type = payment_deduction_type
        if payment_deduction_amount is not None:
            self.payment_deduction_amount = payment_deduction_amount
        if withheld_percentage is not None:
            self.withheld_percentage = withheld_percentage
        if withheld_amount is not None:
            self.withheld_amount = withheld_amount
        if credit_card_bank_account_id is not None:
            self.credit_card_bank_account_id = credit_card_bank_account_id
        if payment_remarks is not None:
            self.payment_remarks = payment_remarks
        if remaining_collected_type is not None:
            self.remaining_collected_type = remaining_collected_type
        if remaining_collected is not None:
            self.remaining_collected = remaining_collected

    @property
    def payment_structure_type(self):
        """Gets the payment_structure_type of this PaymentReceivingCreditCard.  # noqa: E501

        รับชำระเงิน ด้วยบัตรเครดิต  # noqa: E501

        :return: The payment_structure_type of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: str
        """
        return self._payment_structure_type

    @payment_structure_type.setter
    def payment_structure_type(self, payment_structure_type):
        """Sets the payment_structure_type of this PaymentReceivingCreditCard.

        รับชำระเงิน ด้วยบัตรเครดิต  # noqa: E501

        :param payment_structure_type: The payment_structure_type of this PaymentReceivingCreditCard.  # noqa: E501
        :type: str
        """

        self._payment_structure_type = payment_structure_type

    @property
    def document_id(self):
        """Gets the document_id of this PaymentReceivingCreditCard.  # noqa: E501

        id เอกสาร  # noqa: E501

        :return: The document_id of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: int
        """
        return self._document_id

    @document_id.setter
    def document_id(self, document_id):
        """Sets the document_id of this PaymentReceivingCreditCard.

        id เอกสาร  # noqa: E501

        :param document_id: The document_id of this PaymentReceivingCreditCard.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and document_id is None:  # noqa: E501
            raise ValueError("Invalid value for `document_id`, must not be `None`")  # noqa: E501

        self._document_id = document_id

    @property
    def payment_method(self):
        """Gets the payment_method of this PaymentReceivingCreditCard.  # noqa: E501

        ประเภทการเก็บเงิน <br> 7 = บัตรเครดิต  # noqa: E501

        :return: The payment_method of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: int
        """
        return self._payment_method

    @payment_method.setter
    def payment_method(self, payment_method):
        """Sets the payment_method of this PaymentReceivingCreditCard.

        ประเภทการเก็บเงิน <br> 7 = บัตรเครดิต  # noqa: E501

        :param payment_method: The payment_method of this PaymentReceivingCreditCard.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and payment_method is None:  # noqa: E501
            raise ValueError("Invalid value for `payment_method`, must not be `None`")  # noqa: E501

        self._payment_method = payment_method

    @property
    def payment_date(self):
        """Gets the payment_date of this PaymentReceivingCreditCard.  # noqa: E501

        วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :return: The payment_date of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: date
        """
        return self._payment_date

    @payment_date.setter
    def payment_date(self, payment_date):
        """Sets the payment_date of this PaymentReceivingCreditCard.

        วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :param payment_date: The payment_date of this PaymentReceivingCreditCard.  # noqa: E501
        :type: date
        """
        if self.local_vars_configuration.client_side_validation and payment_date is None:  # noqa: E501
            raise ValueError("Invalid value for `payment_date`, must not be `None`")  # noqa: E501

        self._payment_date = payment_date

    @property
    def collected(self):
        """Gets the collected of this PaymentReceivingCreditCard.  # noqa: E501

        จำนวนเงินยอดรับสุทธิ <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :return: The collected of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: float
        """
        return self._collected

    @collected.setter
    def collected(self, collected):
        """Sets the collected of this PaymentReceivingCreditCard.

        จำนวนเงินยอดรับสุทธิ <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :param collected: The collected of this PaymentReceivingCreditCard.  # noqa: E501
        :type: float
        """
        if self.local_vars_configuration.client_side_validation and collected is None:  # noqa: E501
            raise ValueError("Invalid value for `collected`, must not be `None`")  # noqa: E501

        self._collected = collected

    @property
    def payment_deduction_type(self):
        """Gets the payment_deduction_type of this PaymentReceivingCreditCard.  # noqa: E501

        ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br>  # noqa: E501

        :return: The payment_deduction_type of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: int
        """
        return self._payment_deduction_type

    @payment_deduction_type.setter
    def payment_deduction_type(self, payment_deduction_type):
        """Sets the payment_deduction_type of this PaymentReceivingCreditCard.

        ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br>  # noqa: E501

        :param payment_deduction_type: The payment_deduction_type of this PaymentReceivingCreditCard.  # noqa: E501
        :type: int
        """

        self._payment_deduction_type = payment_deduction_type

    @property
    def payment_deduction_amount(self):
        """Gets the payment_deduction_amount of this PaymentReceivingCreditCard.  # noqa: E501

        จำนวนเงินยอดรายการปรับลด <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :return: The payment_deduction_amount of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: float
        """
        return self._payment_deduction_amount

    @payment_deduction_amount.setter
    def payment_deduction_amount(self, payment_deduction_amount):
        """Sets the payment_deduction_amount of this PaymentReceivingCreditCard.

        จำนวนเงินยอดรายการปรับลด <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :param payment_deduction_amount: The payment_deduction_amount of this PaymentReceivingCreditCard.  # noqa: E501
        :type: float
        """

        self._payment_deduction_amount = payment_deduction_amount

    @property
    def withheld_percentage(self):
        """Gets the withheld_percentage of this PaymentReceivingCreditCard.  # noqa: E501

        เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>  # noqa: E501

        :return: The withheld_percentage of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: int
        """
        return self._withheld_percentage

    @withheld_percentage.setter
    def withheld_percentage(self, withheld_percentage):
        """Sets the withheld_percentage of this PaymentReceivingCreditCard.

        เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>  # noqa: E501

        :param withheld_percentage: The withheld_percentage of this PaymentReceivingCreditCard.  # noqa: E501
        :type: int
        """

        self._withheld_percentage = withheld_percentage

    @property
    def withheld_amount(self):
        """Gets the withheld_amount of this PaymentReceivingCreditCard.  # noqa: E501

        จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :return: The withheld_amount of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: float
        """
        return self._withheld_amount

    @withheld_amount.setter
    def withheld_amount(self, withheld_amount):
        """Sets the withheld_amount of this PaymentReceivingCreditCard.

        จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :param withheld_amount: The withheld_amount of this PaymentReceivingCreditCard.  # noqa: E501
        :type: float
        """

        self._withheld_amount = withheld_amount

    @property
    def credit_card_bank_account_id(self):
        """Gets the credit_card_bank_account_id of this PaymentReceivingCreditCard.  # noqa: E501

        ธนาคารที่รับชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย   # noqa: E501

        :return: The credit_card_bank_account_id of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: int
        """
        return self._credit_card_bank_account_id

    @credit_card_bank_account_id.setter
    def credit_card_bank_account_id(self, credit_card_bank_account_id):
        """Sets the credit_card_bank_account_id of this PaymentReceivingCreditCard.

        ธนาคารที่รับชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย   # noqa: E501

        :param credit_card_bank_account_id: The credit_card_bank_account_id of this PaymentReceivingCreditCard.  # noqa: E501
        :type: int
        """

        self._credit_card_bank_account_id = credit_card_bank_account_id

    @property
    def payment_remarks(self):
        """Gets the payment_remarks of this PaymentReceivingCreditCard.  # noqa: E501

        หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน  # noqa: E501

        :return: The payment_remarks of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: str
        """
        return self._payment_remarks

    @payment_remarks.setter
    def payment_remarks(self, payment_remarks):
        """Sets the payment_remarks of this PaymentReceivingCreditCard.

        หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน  # noqa: E501

        :param payment_remarks: The payment_remarks of this PaymentReceivingCreditCard.  # noqa: E501
        :type: str
        """

        self._payment_remarks = payment_remarks

    @property
    def remaining_collected_type(self):
        """Gets the remaining_collected_type of this PaymentReceivingCreditCard.  # noqa: E501

        สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร   # noqa: E501

        :return: The remaining_collected_type of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: int
        """
        return self._remaining_collected_type

    @remaining_collected_type.setter
    def remaining_collected_type(self, remaining_collected_type):
        """Sets the remaining_collected_type of this PaymentReceivingCreditCard.

        สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร   # noqa: E501

        :param remaining_collected_type: The remaining_collected_type of this PaymentReceivingCreditCard.  # noqa: E501
        :type: int
        """

        self._remaining_collected_type = remaining_collected_type

    @property
    def remaining_collected(self):
        """Gets the remaining_collected of this PaymentReceivingCreditCard.  # noqa: E501

        จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :return: The remaining_collected of this PaymentReceivingCreditCard.  # noqa: E501
        :rtype: float
        """
        return self._remaining_collected

    @remaining_collected.setter
    def remaining_collected(self, remaining_collected):
        """Sets the remaining_collected of this PaymentReceivingCreditCard.

        จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>  # noqa: E501

        :param remaining_collected: The remaining_collected of this PaymentReceivingCreditCard.  # noqa: E501
        :type: float
        """

        self._remaining_collected = remaining_collected

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
        if not isinstance(other, PaymentReceivingCreditCard):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PaymentReceivingCreditCard):
            return True

        return self.to_dict() != other.to_dict()
