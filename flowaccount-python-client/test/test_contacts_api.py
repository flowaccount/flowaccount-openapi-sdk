# coding: utf-8

"""
    FlowAccount Open API

    # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64  # noqa: E501

    The version of the OpenAPI document: 2-oas3
    Contact: developer_support@flowaccount.com
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.contacts_api import ContactsApi  # noqa: E501
from openapi_client.rest import ApiException


class TestContactsApi(unittest.TestCase):
    """ContactsApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.contacts_api.ContactsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_contacts_get(self):
        """Test case for contacts_get

        Get list all contacts.  # noqa: E501
        """
        pass

    def test_contacts_id_delete(self):
        """Test case for contacts_id_delete

        Delete contacts.  # noqa: E501
        """
        pass

    def test_contacts_id_get(self):
        """Test case for contacts_id_get

        Get contacts.  # noqa: E501
        """
        pass

    def test_contacts_id_put(self):
        """Test case for contacts_id_put

        Update contacts.  # noqa: E501
        """
        pass

    def test_contacts_post(self):
        """Test case for contacts_post

        Create contacts  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
