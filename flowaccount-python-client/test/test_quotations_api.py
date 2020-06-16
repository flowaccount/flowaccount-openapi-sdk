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
from openapi_client.api.quotations_api import QuotationsApi  # noqa: E501
from openapi_client.rest import ApiException


class TestQuotationsApi(unittest.TestCase):
    """QuotationsApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.quotations_api.QuotationsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_quotations_email_document_post(self):
        """Test case for quotations_email_document_post

        Send email quotations document.  # noqa: E501
        """
        pass

    def test_quotations_get(self):
        """Test case for quotations_get

        Get list all quotations documents.  # noqa: E501
        """
        pass

    def test_quotations_id_attachment_post(self):
        """Test case for quotations_id_attachment_post

        Add Attachment to quotations document.  # noqa: E501
        """
        pass

    def test_quotations_id_delete(self):
        """Test case for quotations_id_delete

        Delete quotations document.  # noqa: E501
        """
        pass

    def test_quotations_id_get(self):
        """Test case for quotations_id_get

        Get quotations document.  # noqa: E501
        """
        pass

    def test_quotations_id_put(self):
        """Test case for quotations_id_put

        Edit quotations document.  # noqa: E501
        """
        pass

    def test_quotations_id_status_status_id_post(self):
        """Test case for quotations_id_status_status_id_post

        Change status of quotations document.  # noqa: E501
        """
        pass

    def test_quotations_inline_post(self):
        """Test case for quotations_inline_post

        Create quotations document with discount and tax inline.  # noqa: E501
        """
        pass

    def test_quotations_post(self):
        """Test case for quotations_post

        Create quotations document.  # noqa: E501
        """
        pass

    def test_quotations_sharedocument_post(self):
        """Test case for quotations_sharedocument_post

        Share link quotations document.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
