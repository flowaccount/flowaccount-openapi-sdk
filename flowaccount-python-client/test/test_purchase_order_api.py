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
from openapi_client.api.purchase_order_api import PurchaseOrderApi  # noqa: E501
from openapi_client.rest import ApiException


class TestPurchaseOrderApi(unittest.TestCase):
    """PurchaseOrderApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.purchase_order_api.PurchaseOrderApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_purchases_orders_email_document_post(self):
        """Test case for purchases_orders_email_document_post

        Send email purchase order document.  # noqa: E501
        """
        pass

    def test_purchases_orders_get(self):
        """Test case for purchases_orders_get

        Get list all purchase order documents.  # noqa: E501
        """
        pass

    def test_purchases_orders_id_attachment_post(self):
        """Test case for purchases_orders_id_attachment_post

        Add Attachment to purchase order document.  # noqa: E501
        """
        pass

    def test_purchases_orders_id_delete(self):
        """Test case for purchases_orders_id_delete

        Delete purchase order document.  # noqa: E501
        """
        pass

    def test_purchases_orders_id_get(self):
        """Test case for purchases_orders_id_get

        Get purchase order document.  # noqa: E501
        """
        pass

    def test_purchases_orders_id_put(self):
        """Test case for purchases_orders_id_put

        Edit purchase order document.  # noqa: E501
        """
        pass

    def test_purchases_orders_id_status_status_id_post(self):
        """Test case for purchases_orders_id_status_status_id_post

        Change status of purchase order document.  # noqa: E501
        """
        pass

    def test_purchases_orders_inline_post(self):
        """Test case for purchases_orders_inline_post

        Create purchase order document with discount and tax inline.  # noqa: E501
        """
        pass

    def test_purchases_orders_post(self):
        """Test case for purchases_orders_post

        Create purchase order document.  # noqa: E501
        """
        pass

    def test_purchases_orders_sharedocument_post(self):
        """Test case for purchases_orders_sharedocument_post

        Share link purchase order document.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
