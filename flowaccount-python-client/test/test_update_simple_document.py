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
from openapi_client.models.update_simple_document import UpdateSimpleDocument  # noqa: E501
from openapi_client.rest import ApiException

class TestUpdateSimpleDocument(unittest.TestCase):
    """UpdateSimpleDocument unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test UpdateSimpleDocument
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.update_simple_document.UpdateSimpleDocument()  # noqa: E501
        if include_optional :
            return UpdateSimpleDocument(
                items = [
                    null
                    ], 
                document_reference = [
                    openapi_client.models.upgrade_document.UpgradeDocument(
                        record_id = 56, 
                        reference_document_serial = 'QT20200101', 
                        reference_document_type = 3, )
                    ]
            )
        else :
            return UpdateSimpleDocument(
        )

    def testUpdateSimpleDocument(self):
        """Test UpdateSimpleDocument"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
