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
from openapi_client.api.expenses_api import ExpensesApi  # noqa: E501
from openapi_client.rest import ApiException


class TestExpensesApi(unittest.TestCase):
    """ExpensesApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.expenses_api.ExpensesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_expenses_categories_accounting_get(self):
        """Test case for expenses_categories_accounting_get

        Accounting categories expenses document.  # noqa: E501
        """
        pass

    def test_expenses_categories_business_get(self):
        """Test case for expenses_categories_business_get

        Business categories expenses document.  # noqa: E501
        """
        pass

    def test_expenses_email_document_post(self):
        """Test case for expenses_email_document_post

        Send email expenses document.  # noqa: E501
        """
        pass

    def test_expenses_get(self):
        """Test case for expenses_get

        Get list all expenses documents.  # noqa: E501
        """
        pass

    def test_expenses_id_attachment_post(self):
        """Test case for expenses_id_attachment_post

        Attachment to expenses document.  # noqa: E501
        """
        pass

    def test_expenses_id_delete(self):
        """Test case for expenses_id_delete

        Delete expenses document.  # noqa: E501
        """
        pass

    def test_expenses_id_get(self):
        """Test case for expenses_id_get

        Get expenses document.  # noqa: E501
        """
        pass

    def test_expenses_id_payment_post(self):
        """Test case for expenses_id_payment_post

        Change status is paid expenses document.  # noqa: E501
        """
        pass

    def test_expenses_id_put(self):
        """Test case for expenses_id_put

        Edit expenses document.  # noqa: E501
        """
        pass

    def test_expenses_id_status_status_id_post(self):
        """Test case for expenses_id_status_status_id_post

        Change status expenses document.  # noqa: E501
        """
        pass

    def test_expenses_inline_post(self):
        """Test case for expenses_inline_post

        Create expenses document inline discount or inline vat.  # noqa: E501
        """
        pass

    def test_expenses_inline_with_payment_post(self):
        """Test case for expenses_inline_with_payment_post

        Create expenses document inline discount or inline vat with payment.  # noqa: E501
        """
        pass

    def test_expenses_post(self):
        """Test case for expenses_post

        Create expenses document.  # noqa: E501
        """
        pass

    def test_expenses_sharedocument_post(self):
        """Test case for expenses_sharedocument_post

        Share link expenses document.  # noqa: E501
        """
        pass

    def test_expenses_with_payment_post(self):
        """Test case for expenses_with_payment_post

        Create expenses document with payment.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
