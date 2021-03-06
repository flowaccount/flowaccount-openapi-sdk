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
import datetime

import openapi_client
from openapi_client.models.payment_receiving_document import PaymentReceivingDocument  # noqa: E501
from openapi_client.rest import ApiException

class TestPaymentReceivingDocument(unittest.TestCase):
    """PaymentReceivingDocument unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test PaymentReceivingDocument
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.payment_receiving_document.PaymentReceivingDocument()  # noqa: E501
        if include_optional :
            return PaymentReceivingDocument(
                payment_structure_type = '0', 
                document_id = 56, 
                payment_method = 56, 
                payment_date = 'Wed Jan 01 07:00:00 ICT 2020', 
                collected = 1.337, 
                payment_deduction_type = 56, 
                payment_deduction_amount = 1.337, 
                withheld_percentage = 56, 
                withheld_amount = 1.337, 
                transfer_bank_account_id = 56, 
                bank_account_id = 12345, 
                payment_remarks = '0', 
                remaining_collected_type = 56, 
                remaining_collected = 1.337, 
                cheque_date = 'Wed Jan 01 07:00:00 ICT 2020', 
                cheque_number = '122-122-122', 
                cheque_bank_account_id = 56, 
                credit_card_bank_account_id = 56
            )
        else :
            return PaymentReceivingDocument(
                payment_structure_type = '0',
                document_id = 56,
                payment_method = 56,
                payment_date = 'Wed Jan 01 07:00:00 ICT 2020',
                collected = 1.337,
        )

    def testPaymentReceivingDocument(self):
        """Test PaymentReceivingDocument"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
