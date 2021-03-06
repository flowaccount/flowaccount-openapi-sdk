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


class UpgradeDocument(object):
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
        'record_id': 'int',
        'reference_document_serial': 'str',
        'reference_document_type': 'int'
    }

    attribute_map = {
        'record_id': 'recordId',
        'reference_document_serial': 'referenceDocumentSerial',
        'reference_document_type': 'referenceDocumentType'
    }

    def __init__(self, record_id=None, reference_document_serial=None, reference_document_type=None, local_vars_configuration=None):  # noqa: E501
        """UpgradeDocument - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._record_id = None
        self._reference_document_serial = None
        self._reference_document_type = None
        self.discriminator = None

        self.record_id = record_id
        self.reference_document_serial = reference_document_serial
        self.reference_document_type = reference_document_type

    @property
    def record_id(self):
        """Gets the record_id of this UpgradeDocument.  # noqa: E501

        id ของเอกสารต้นทาง  # noqa: E501

        :return: The record_id of this UpgradeDocument.  # noqa: E501
        :rtype: int
        """
        return self._record_id

    @record_id.setter
    def record_id(self, record_id):
        """Sets the record_id of this UpgradeDocument.

        id ของเอกสารต้นทาง  # noqa: E501

        :param record_id: The record_id of this UpgradeDocument.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and record_id is None:  # noqa: E501
            raise ValueError("Invalid value for `record_id`, must not be `None`")  # noqa: E501

        self._record_id = record_id

    @property
    def reference_document_serial(self):
        """Gets the reference_document_serial of this UpgradeDocument.  # noqa: E501

        เลขที่เอกสารต้นทาง <br> <ex>Example: QT20200101</ex>  # noqa: E501

        :return: The reference_document_serial of this UpgradeDocument.  # noqa: E501
        :rtype: str
        """
        return self._reference_document_serial

    @reference_document_serial.setter
    def reference_document_serial(self, reference_document_serial):
        """Sets the reference_document_serial of this UpgradeDocument.

        เลขที่เอกสารต้นทาง <br> <ex>Example: QT20200101</ex>  # noqa: E501

        :param reference_document_serial: The reference_document_serial of this UpgradeDocument.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and reference_document_serial is None:  # noqa: E501
            raise ValueError("Invalid value for `reference_document_serial`, must not be `None`")  # noqa: E501

        self._reference_document_serial = reference_document_serial

    @property
    def reference_document_type(self):
        """Gets the reference_document_type of this UpgradeDocument.  # noqa: E501

        เลขประเภทของเอกสารต้นทาง <br> Quotaions = 3 <br> Billing Notes = 5 <br> Tax Invoices = 7 <br> <ex>Example: 3</ex>  # noqa: E501

        :return: The reference_document_type of this UpgradeDocument.  # noqa: E501
        :rtype: int
        """
        return self._reference_document_type

    @reference_document_type.setter
    def reference_document_type(self, reference_document_type):
        """Sets the reference_document_type of this UpgradeDocument.

        เลขประเภทของเอกสารต้นทาง <br> Quotaions = 3 <br> Billing Notes = 5 <br> Tax Invoices = 7 <br> <ex>Example: 3</ex>  # noqa: E501

        :param reference_document_type: The reference_document_type of this UpgradeDocument.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and reference_document_type is None:  # noqa: E501
            raise ValueError("Invalid value for `reference_document_type`, must not be `None`")  # noqa: E501

        self._reference_document_type = reference_document_type

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
        if not isinstance(other, UpgradeDocument):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UpgradeDocument):
            return True

        return self.to_dict() != other.to_dict()
