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


class StatusDocument(object):
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
        'status': 'int',
        'status_string': 'int',
        'document_type': 'int',
        'allow_delete': 'bool'
    }

    attribute_map = {
        'status': 'status',
        'status_string': 'statusString',
        'document_type': 'documentType',
        'allow_delete': 'allowDelete'
    }

    def __init__(self, status=None, status_string=None, document_type=None, allow_delete=None, local_vars_configuration=None):  # noqa: E501
        """StatusDocument - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._status = None
        self._status_string = None
        self._document_type = None
        self._allow_delete = None
        self.discriminator = None

        if status is not None:
            self.status = status
        if status_string is not None:
            self.status_string = status_string
        if document_type is not None:
            self.document_type = document_type
        if allow_delete is not None:
            self.allow_delete = allow_delete

    @property
    def status(self):
        """Gets the status of this StatusDocument.  # noqa: E501

        เลขสถานะเอกสารฉบับนี้  # noqa: E501

        :return: The status of this StatusDocument.  # noqa: E501
        :rtype: int
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this StatusDocument.

        เลขสถานะเอกสารฉบับนี้  # noqa: E501

        :param status: The status of this StatusDocument.  # noqa: E501
        :type: int
        """

        self._status = status

    @property
    def status_string(self):
        """Gets the status_string of this StatusDocument.  # noqa: E501

        ชื่อสถานะเอกสารฉบับนี้  # noqa: E501

        :return: The status_string of this StatusDocument.  # noqa: E501
        :rtype: int
        """
        return self._status_string

    @status_string.setter
    def status_string(self, status_string):
        """Sets the status_string of this StatusDocument.

        ชื่อสถานะเอกสารฉบับนี้  # noqa: E501

        :param status_string: The status_string of this StatusDocument.  # noqa: E501
        :type: int
        """

        self._status_string = status_string

    @property
    def document_type(self):
        """Gets the document_type of this StatusDocument.  # noqa: E501

        เลขประเภทเอกสารฉบับนี้  # noqa: E501

        :return: The document_type of this StatusDocument.  # noqa: E501
        :rtype: int
        """
        return self._document_type

    @document_type.setter
    def document_type(self, document_type):
        """Sets the document_type of this StatusDocument.

        เลขประเภทเอกสารฉบับนี้  # noqa: E501

        :param document_type: The document_type of this StatusDocument.  # noqa: E501
        :type: int
        """

        self._document_type = document_type

    @property
    def allow_delete(self):
        """Gets the allow_delete of this StatusDocument.  # noqa: E501

        สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้  # noqa: E501

        :return: The allow_delete of this StatusDocument.  # noqa: E501
        :rtype: bool
        """
        return self._allow_delete

    @allow_delete.setter
    def allow_delete(self, allow_delete):
        """Sets the allow_delete of this StatusDocument.

        สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้  # noqa: E501

        :param allow_delete: The allow_delete of this StatusDocument.  # noqa: E501
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
        if not isinstance(other, StatusDocument):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, StatusDocument):
            return True

        return self.to_dict() != other.to_dict()
