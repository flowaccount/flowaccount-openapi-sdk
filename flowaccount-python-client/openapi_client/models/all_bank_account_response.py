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


class AllBankAccountResponse(object):
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
        'status': 'bool',
        'message': 'str',
        'code': 'int',
        'data': 'list[BankAccountResponseData]'
    }

    attribute_map = {
        'status': 'status',
        'message': 'message',
        'code': 'code',
        'data': 'data'
    }

    def __init__(self, status=None, message=None, code=None, data=None, local_vars_configuration=None):  # noqa: E501
        """AllBankAccountResponse - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._status = None
        self._message = None
        self._code = None
        self._data = None
        self.discriminator = None

        if status is not None:
            self.status = status
        if message is not None:
            self.message = message
        if code is not None:
            self.code = code
        if data is not None:
            self.data = data

    @property
    def status(self):
        """Gets the status of this AllBankAccountResponse.  # noqa: E501

        action success  # noqa: E501

        :return: The status of this AllBankAccountResponse.  # noqa: E501
        :rtype: bool
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this AllBankAccountResponse.

        action success  # noqa: E501

        :param status: The status of this AllBankAccountResponse.  # noqa: E501
        :type: bool
        """

        self._status = status

    @property
    def message(self):
        """Gets the message of this AllBankAccountResponse.  # noqa: E501

        error message  # noqa: E501

        :return: The message of this AllBankAccountResponse.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this AllBankAccountResponse.

        error message  # noqa: E501

        :param message: The message of this AllBankAccountResponse.  # noqa: E501
        :type: str
        """

        self._message = message

    @property
    def code(self):
        """Gets the code of this AllBankAccountResponse.  # noqa: E501

        error code  # noqa: E501

        :return: The code of this AllBankAccountResponse.  # noqa: E501
        :rtype: int
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this AllBankAccountResponse.

        error code  # noqa: E501

        :param code: The code of this AllBankAccountResponse.  # noqa: E501
        :type: int
        """

        self._code = code

    @property
    def data(self):
        """Gets the data of this AllBankAccountResponse.  # noqa: E501

        บัญชีธนาคารบริษัทเราทั้งหมด  # noqa: E501

        :return: The data of this AllBankAccountResponse.  # noqa: E501
        :rtype: list[BankAccountResponseData]
        """
        return self._data

    @data.setter
    def data(self, data):
        """Sets the data of this AllBankAccountResponse.

        บัญชีธนาคารบริษัทเราทั้งหมด  # noqa: E501

        :param data: The data of this AllBankAccountResponse.  # noqa: E501
        :type: list[BankAccountResponseData]
        """

        self._data = data

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
        if not isinstance(other, AllBankAccountResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AllBankAccountResponse):
            return True

        return self.to_dict() != other.to_dict()
