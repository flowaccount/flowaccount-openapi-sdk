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


class PaymentDocumentResponse(object):
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
        'payment_date': 'date',
        'collected': 'float',
        'payment_deduction_type': 'int',
        'payment_deduction_amount': 'float',
        'withheld_percentage': 'int',
        'withheld_amount': 'float',
        'payment_charge': 'float',
        'payment_method': 'int',
        'payment_channel': 'str',
        'bank_account_type': 'int',
        'bank_account_name': 'str',
        'bank_account_number': 'str',
        'cheque_date': 'date',
        'cheque_number': 'str',
        'credit_card_bank_account_id': 'int',
        'payment_remarks': 'str',
        'remaining_collected_type': 'int',
        'remaining_collected': 'float'
    }

    attribute_map = {
        'payment_date': 'paymentDate',
        'collected': 'collected',
        'payment_deduction_type': 'paymentDeductionType',
        'payment_deduction_amount': 'paymentDeductionAmount',
        'withheld_percentage': 'withheldPercentage',
        'withheld_amount': 'withheldAmount',
        'payment_charge': 'paymentCharge',
        'payment_method': 'paymentMethod',
        'payment_channel': 'paymentChannel',
        'bank_account_type': 'bankAccountType',
        'bank_account_name': 'bankAccountName',
        'bank_account_number': 'bankAccountNumber',
        'cheque_date': 'chequeDate',
        'cheque_number': 'chequeNumber',
        'credit_card_bank_account_id': 'creditCardBankAccountId',
        'payment_remarks': 'paymentRemarks',
        'remaining_collected_type': 'remainingCollectedType',
        'remaining_collected': 'remainingCollected'
    }

    def __init__(self, payment_date=None, collected=0, payment_deduction_type=0, payment_deduction_amount=0, withheld_percentage=0, withheld_amount=0, payment_charge=0, payment_method=0, payment_channel=None, bank_account_type=None, bank_account_name=None, bank_account_number=None, cheque_date=None, cheque_number=None, credit_card_bank_account_id=0, payment_remarks=None, remaining_collected_type=0, remaining_collected=0, local_vars_configuration=None):  # noqa: E501
        """PaymentDocumentResponse - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._payment_date = None
        self._collected = None
        self._payment_deduction_type = None
        self._payment_deduction_amount = None
        self._withheld_percentage = None
        self._withheld_amount = None
        self._payment_charge = None
        self._payment_method = None
        self._payment_channel = None
        self._bank_account_type = None
        self._bank_account_name = None
        self._bank_account_number = None
        self._cheque_date = None
        self._cheque_number = None
        self._credit_card_bank_account_id = None
        self._payment_remarks = None
        self._remaining_collected_type = None
        self._remaining_collected = None
        self.discriminator = None

        if payment_date is not None:
            self.payment_date = payment_date
        if collected is not None:
            self.collected = collected
        if payment_deduction_type is not None:
            self.payment_deduction_type = payment_deduction_type
        if payment_deduction_amount is not None:
            self.payment_deduction_amount = payment_deduction_amount
        if withheld_percentage is not None:
            self.withheld_percentage = withheld_percentage
        if withheld_amount is not None:
            self.withheld_amount = withheld_amount
        if payment_charge is not None:
            self.payment_charge = payment_charge
        if payment_method is not None:
            self.payment_method = payment_method
        if payment_channel is not None:
            self.payment_channel = payment_channel
        if bank_account_type is not None:
            self.bank_account_type = bank_account_type
        if bank_account_name is not None:
            self.bank_account_name = bank_account_name
        if bank_account_number is not None:
            self.bank_account_number = bank_account_number
        if cheque_date is not None:
            self.cheque_date = cheque_date
        if cheque_number is not None:
            self.cheque_number = cheque_number
        if credit_card_bank_account_id is not None:
            self.credit_card_bank_account_id = credit_card_bank_account_id
        if payment_remarks is not None:
            self.payment_remarks = payment_remarks
        if remaining_collected_type is not None:
            self.remaining_collected_type = remaining_collected_type
        if remaining_collected is not None:
            self.remaining_collected = remaining_collected

    @property
    def payment_date(self):
        """Gets the payment_date of this PaymentDocumentResponse.  # noqa: E501

        วันที่รับชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :return: The payment_date of this PaymentDocumentResponse.  # noqa: E501
        :rtype: date
        """
        return self._payment_date

    @payment_date.setter
    def payment_date(self, payment_date):
        """Sets the payment_date of this PaymentDocumentResponse.

        วันที่รับชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :param payment_date: The payment_date of this PaymentDocumentResponse.  # noqa: E501
        :type: date
        """

        self._payment_date = payment_date

    @property
    def collected(self):
        """Gets the collected of this PaymentDocumentResponse.  # noqa: E501

        จำนวนเงินยอดรับสุทธิ  # noqa: E501

        :return: The collected of this PaymentDocumentResponse.  # noqa: E501
        :rtype: float
        """
        return self._collected

    @collected.setter
    def collected(self, collected):
        """Sets the collected of this PaymentDocumentResponse.

        จำนวนเงินยอดรับสุทธิ  # noqa: E501

        :param collected: The collected of this PaymentDocumentResponse.  # noqa: E501
        :type: float
        """

        self._collected = collected

    @property
    def payment_deduction_type(self):
        """Gets the payment_deduction_type of this PaymentDocumentResponse.  # noqa: E501

        ประเภทรายการปรับลด: <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)  # noqa: E501

        :return: The payment_deduction_type of this PaymentDocumentResponse.  # noqa: E501
        :rtype: int
        """
        return self._payment_deduction_type

    @payment_deduction_type.setter
    def payment_deduction_type(self, payment_deduction_type):
        """Sets the payment_deduction_type of this PaymentDocumentResponse.

        ประเภทรายการปรับลด: <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)  # noqa: E501

        :param payment_deduction_type: The payment_deduction_type of this PaymentDocumentResponse.  # noqa: E501
        :type: int
        """

        self._payment_deduction_type = payment_deduction_type

    @property
    def payment_deduction_amount(self):
        """Gets the payment_deduction_amount of this PaymentDocumentResponse.  # noqa: E501

        จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)  # noqa: E501

        :return: The payment_deduction_amount of this PaymentDocumentResponse.  # noqa: E501
        :rtype: float
        """
        return self._payment_deduction_amount

    @payment_deduction_amount.setter
    def payment_deduction_amount(self, payment_deduction_amount):
        """Sets the payment_deduction_amount of this PaymentDocumentResponse.

        จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)  # noqa: E501

        :param payment_deduction_amount: The payment_deduction_amount of this PaymentDocumentResponse.  # noqa: E501
        :type: float
        """

        self._payment_deduction_amount = payment_deduction_amount

    @property
    def withheld_percentage(self):
        """Gets the withheld_percentage of this PaymentDocumentResponse.  # noqa: E501

        เปอร์เซ็น หัก ณ ที่จ่าย  # noqa: E501

        :return: The withheld_percentage of this PaymentDocumentResponse.  # noqa: E501
        :rtype: int
        """
        return self._withheld_percentage

    @withheld_percentage.setter
    def withheld_percentage(self, withheld_percentage):
        """Sets the withheld_percentage of this PaymentDocumentResponse.

        เปอร์เซ็น หัก ณ ที่จ่าย  # noqa: E501

        :param withheld_percentage: The withheld_percentage of this PaymentDocumentResponse.  # noqa: E501
        :type: int
        """

        self._withheld_percentage = withheld_percentage

    @property
    def withheld_amount(self):
        """Gets the withheld_amount of this PaymentDocumentResponse.  # noqa: E501

        จำนวน ยอดหัก ณ ที่จ่าย  # noqa: E501

        :return: The withheld_amount of this PaymentDocumentResponse.  # noqa: E501
        :rtype: float
        """
        return self._withheld_amount

    @withheld_amount.setter
    def withheld_amount(self, withheld_amount):
        """Sets the withheld_amount of this PaymentDocumentResponse.

        จำนวน ยอดหัก ณ ที่จ่าย  # noqa: E501

        :param withheld_amount: The withheld_amount of this PaymentDocumentResponse.  # noqa: E501
        :type: float
        """

        self._withheld_amount = withheld_amount

    @property
    def payment_charge(self):
        """Gets the payment_charge of this PaymentDocumentResponse.  # noqa: E501

        ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค <br> (เฉพาะเอกสารค่าใช้จ่าย)  # noqa: E501

        :return: The payment_charge of this PaymentDocumentResponse.  # noqa: E501
        :rtype: float
        """
        return self._payment_charge

    @payment_charge.setter
    def payment_charge(self, payment_charge):
        """Sets the payment_charge of this PaymentDocumentResponse.

        ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค <br> (เฉพาะเอกสารค่าใช้จ่าย)  # noqa: E501

        :param payment_charge: The payment_charge of this PaymentDocumentResponse.  # noqa: E501
        :type: float
        """

        self._payment_charge = payment_charge

    @property
    def payment_method(self):
        """Gets the payment_method of this PaymentDocumentResponse.  # noqa: E501

        วิธีการชำระ: <br> 1 = เงินสด <br> 3 = เช็ค <br> 5 = โอนเงิน <br> 7 = เครดิต  # noqa: E501

        :return: The payment_method of this PaymentDocumentResponse.  # noqa: E501
        :rtype: int
        """
        return self._payment_method

    @payment_method.setter
    def payment_method(self, payment_method):
        """Sets the payment_method of this PaymentDocumentResponse.

        วิธีการชำระ: <br> 1 = เงินสด <br> 3 = เช็ค <br> 5 = โอนเงิน <br> 7 = เครดิต  # noqa: E501

        :param payment_method: The payment_method of this PaymentDocumentResponse.  # noqa: E501
        :type: int
        """

        self._payment_method = payment_method

    @property
    def payment_channel(self):
        """Gets the payment_channel of this PaymentDocumentResponse.  # noqa: E501

        ช่องทางการชำระเงิน: <br> - เงินสด (Cash) <br> - โอนเงิน (Transfer) - ชื่อธนาคาร (Bank Name) <br> - เช็ค (Cheque) <br> - บัตรเครดิต (Credit card)  # noqa: E501

        :return: The payment_channel of this PaymentDocumentResponse.  # noqa: E501
        :rtype: str
        """
        return self._payment_channel

    @payment_channel.setter
    def payment_channel(self, payment_channel):
        """Sets the payment_channel of this PaymentDocumentResponse.

        ช่องทางการชำระเงิน: <br> - เงินสด (Cash) <br> - โอนเงิน (Transfer) - ชื่อธนาคาร (Bank Name) <br> - เช็ค (Cheque) <br> - บัตรเครดิต (Credit card)  # noqa: E501

        :param payment_channel: The payment_channel of this PaymentDocumentResponse.  # noqa: E501
        :type: str
        """

        self._payment_channel = payment_channel

    @property
    def bank_account_type(self):
        """Gets the bank_account_type of this PaymentDocumentResponse.  # noqa: E501

        ประเภทบัญชีธนาคาร: <br> 1 = ออมทรัพย์ <br> 3 = กระแสรายวัน <br> 7 = ฝากประจำ  # noqa: E501

        :return: The bank_account_type of this PaymentDocumentResponse.  # noqa: E501
        :rtype: int
        """
        return self._bank_account_type

    @bank_account_type.setter
    def bank_account_type(self, bank_account_type):
        """Sets the bank_account_type of this PaymentDocumentResponse.

        ประเภทบัญชีธนาคาร: <br> 1 = ออมทรัพย์ <br> 3 = กระแสรายวัน <br> 7 = ฝากประจำ  # noqa: E501

        :param bank_account_type: The bank_account_type of this PaymentDocumentResponse.  # noqa: E501
        :type: int
        """

        self._bank_account_type = bank_account_type

    @property
    def bank_account_name(self):
        """Gets the bank_account_name of this PaymentDocumentResponse.  # noqa: E501

        ชื่อธนาคาร  # noqa: E501

        :return: The bank_account_name of this PaymentDocumentResponse.  # noqa: E501
        :rtype: str
        """
        return self._bank_account_name

    @bank_account_name.setter
    def bank_account_name(self, bank_account_name):
        """Sets the bank_account_name of this PaymentDocumentResponse.

        ชื่อธนาคาร  # noqa: E501

        :param bank_account_name: The bank_account_name of this PaymentDocumentResponse.  # noqa: E501
        :type: str
        """

        self._bank_account_name = bank_account_name

    @property
    def bank_account_number(self):
        """Gets the bank_account_number of this PaymentDocumentResponse.  # noqa: E501

        เลขที่ธนาคาร / บัตรเคดิต  # noqa: E501

        :return: The bank_account_number of this PaymentDocumentResponse.  # noqa: E501
        :rtype: str
        """
        return self._bank_account_number

    @bank_account_number.setter
    def bank_account_number(self, bank_account_number):
        """Sets the bank_account_number of this PaymentDocumentResponse.

        เลขที่ธนาคาร / บัตรเคดิต  # noqa: E501

        :param bank_account_number: The bank_account_number of this PaymentDocumentResponse.  # noqa: E501
        :type: str
        """

        self._bank_account_number = bank_account_number

    @property
    def cheque_date(self):
        """Gets the cheque_date of this PaymentDocumentResponse.  # noqa: E501

        วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :return: The cheque_date of this PaymentDocumentResponse.  # noqa: E501
        :rtype: date
        """
        return self._cheque_date

    @cheque_date.setter
    def cheque_date(self, cheque_date):
        """Sets the cheque_date of this PaymentDocumentResponse.

        วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>  # noqa: E501

        :param cheque_date: The cheque_date of this PaymentDocumentResponse.  # noqa: E501
        :type: date
        """

        self._cheque_date = cheque_date

    @property
    def cheque_number(self):
        """Gets the cheque_number of this PaymentDocumentResponse.  # noqa: E501

        เลขที่เช็คธนาคาร  # noqa: E501

        :return: The cheque_number of this PaymentDocumentResponse.  # noqa: E501
        :rtype: str
        """
        return self._cheque_number

    @cheque_number.setter
    def cheque_number(self, cheque_number):
        """Sets the cheque_number of this PaymentDocumentResponse.

        เลขที่เช็คธนาคาร  # noqa: E501

        :param cheque_number: The cheque_number of this PaymentDocumentResponse.  # noqa: E501
        :type: str
        """

        self._cheque_number = cheque_number

    @property
    def credit_card_bank_account_id(self):
        """Gets the credit_card_bank_account_id of this PaymentDocumentResponse.  # noqa: E501

        ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย   # noqa: E501

        :return: The credit_card_bank_account_id of this PaymentDocumentResponse.  # noqa: E501
        :rtype: int
        """
        return self._credit_card_bank_account_id

    @credit_card_bank_account_id.setter
    def credit_card_bank_account_id(self, credit_card_bank_account_id):
        """Sets the credit_card_bank_account_id of this PaymentDocumentResponse.

        ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย   # noqa: E501

        :param credit_card_bank_account_id: The credit_card_bank_account_id of this PaymentDocumentResponse.  # noqa: E501
        :type: int
        """

        self._credit_card_bank_account_id = credit_card_bank_account_id

    @property
    def payment_remarks(self):
        """Gets the payment_remarks of this PaymentDocumentResponse.  # noqa: E501

        หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน  # noqa: E501

        :return: The payment_remarks of this PaymentDocumentResponse.  # noqa: E501
        :rtype: str
        """
        return self._payment_remarks

    @payment_remarks.setter
    def payment_remarks(self, payment_remarks):
        """Sets the payment_remarks of this PaymentDocumentResponse.

        หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน  # noqa: E501

        :param payment_remarks: The payment_remarks of this PaymentDocumentResponse.  # noqa: E501
        :type: str
        """

        self._payment_remarks = payment_remarks

    @property
    def remaining_collected_type(self):
        """Gets the remaining_collected_type of this PaymentDocumentResponse.  # noqa: E501

        สาเหตุเงินขาดเงินเกิน: <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร   # noqa: E501

        :return: The remaining_collected_type of this PaymentDocumentResponse.  # noqa: E501
        :rtype: int
        """
        return self._remaining_collected_type

    @remaining_collected_type.setter
    def remaining_collected_type(self, remaining_collected_type):
        """Sets the remaining_collected_type of this PaymentDocumentResponse.

        สาเหตุเงินขาดเงินเกิน: <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร   # noqa: E501

        :param remaining_collected_type: The remaining_collected_type of this PaymentDocumentResponse.  # noqa: E501
        :type: int
        """

        self._remaining_collected_type = remaining_collected_type

    @property
    def remaining_collected(self):
        """Gets the remaining_collected of this PaymentDocumentResponse.  # noqa: E501

        จำนวน ยอดเงินขาด หรือ เงินเกิน  # noqa: E501

        :return: The remaining_collected of this PaymentDocumentResponse.  # noqa: E501
        :rtype: float
        """
        return self._remaining_collected

    @remaining_collected.setter
    def remaining_collected(self, remaining_collected):
        """Sets the remaining_collected of this PaymentDocumentResponse.

        จำนวน ยอดเงินขาด หรือ เงินเกิน  # noqa: E501

        :param remaining_collected: The remaining_collected of this PaymentDocumentResponse.  # noqa: E501
        :type: float
        """

        self._remaining_collected = remaining_collected

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
        if not isinstance(other, PaymentDocumentResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PaymentDocumentResponse):
            return True

        return self.to_dict() != other.to_dict()
