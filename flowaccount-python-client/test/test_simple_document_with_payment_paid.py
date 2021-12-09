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
from openapi_client.models.simple_document_with_payment_paid import SimpleDocumentWithPaymentPaid  # noqa: E501
from openapi_client.rest import ApiException

class TestSimpleDocumentWithPaymentPaid(unittest.TestCase):
    """SimpleDocumentWithPaymentPaid unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test SimpleDocumentWithPaymentPaid
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.simple_document_with_payment_paid.SimpleDocumentWithPaymentPaid()  # noqa: E501
        if include_optional :
            return SimpleDocumentWithPaymentPaid(
                contact_code = '0', 
                contact_name = 'บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ', 
                contact_address = '0', 
                contact_tax_id = '1234567890123', 
                contact_branch = '0', 
                contact_person = '0', 
                contact_email = 'contact@email.com', 
                contact_number = '099-999-9999', 
                contact_zip_code = '0', 
                contact_group = 56, 
                published_on = 'Wed Jan 01 07:00:00 ICT 2020', 
                credit_type = 56, 
                credit_days = 30, 
                due_date = 'Wed Jan 01 07:00:00 ICT 2020', 
                sales_name = 'อีเมล หรือ ชื่อผู้สร้างเอกสาร', 
                project_name = '0', 
                reference = 'INV2020010001', 
                is_vat_inclusive = True, 
                use_receipt_deduction = True, 
                sub_total = 1.337, 
                discount_percentage = 56, 
                discount_amount = 1.337, 
                total_after_discount = 1.337, 
                is_vat = True, 
                vat_amount = 1.337, 
                grand_total = 1.337, 
                document_show_withholding_tax = True, 
                document_withholding_tax_percentage = 56, 
                document_withholding_tax_amount = 1.337, 
                document_deduction_type = 56, 
                document_deduction_amount = 1.337, 
                remarks = '0', 
                internal_notes = '0', 
                show_signature_or_stamp = True, 
                items = [
                    null
                    ], 
                document_reference = [
                    openapi_client.models.upgrade_document.UpgradeDocument(
                        record_id = 56, 
                        reference_document_serial = 'QT20200101', 
                        reference_document_type = 3, )
                    ], 
                document_payment_structure_type = '0', 
                payment_method = 56, 
                payment_date = 'Wed Jan 01 07:00:00 ICT 2020', 
                collected = 1.337, 
                withheld_percentage = 56, 
                withheld_amount = 1.337, 
                transfer_bank_account_id = 56, 
                bank_account_id = 12345, 
                payment_charge = 1.337, 
                payment_remarks = '0', 
                remaining_collected_type = 56, 
                remaining_collected = 1.337, 
                cheque_date = 'Wed Jan 01 07:00:00 ICT 2020', 
                cheque_number = '122-122-122', 
                cheque_bank_account_id = 56, 
                credit_card_bank_account_id = 56
            )
        else :
            return SimpleDocumentWithPaymentPaid(
                contact_name = 'บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ',
                published_on = 'Wed Jan 01 07:00:00 ICT 2020',
                due_date = 'Wed Jan 01 07:00:00 ICT 2020',
                total_after_discount = 1.337,
                grand_total = 1.337,
                document_payment_structure_type = '0',
                payment_method = 56,
                payment_date = 'Wed Jan 01 07:00:00 ICT 2020',
                collected = 1.337,
        )

    def testSimpleDocumentWithPaymentPaid(self):
        """Test SimpleDocumentWithPaymentPaid"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()