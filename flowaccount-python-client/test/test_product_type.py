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
from openapi_client.models.product_type import ProductType  # noqa: E501
from openapi_client.rest import ApiException

class TestProductType(unittest.TestCase):
    """ProductType unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ProductType
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.product_type.ProductType()  # noqa: E501
        if include_optional :
            return ProductType(
                product_structure_type = '0', 
                type = 56, 
                code = 'P001', 
                name = 'Product', 
                sell_description = '0', 
                sell_price = 1.337, 
                sell_vat_type = 56, 
                unit_name = '0', 
                category_name = '0', 
                barcode = '0', 
                buy_description = '0', 
                buy_price = 1.337, 
                buy_vat_type = 56, 
                inventory_published_on = '2020-01-01', 
                inventory_quantity = 1.337, 
                inventory_price = 1.337
            )
        else :
            return ProductType(
                type = 56,
                name = 'Product',
                unit_name = '0',
                inventory_published_on = '2020-01-01',
                inventory_quantity = 1.337,
                inventory_price = 1.337,
        )

    def testProductType(self):
        """Test ProductType"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()