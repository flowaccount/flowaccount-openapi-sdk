/**
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';

export class ExpenseSimpleDocumentAllOf {
    /**
    * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
    */
    'items'?: Array<ExpenseSimpleProductItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ExpenseSimpleProductItem>"
        }    ];

    static getAttributeTypeMap() {
        return ExpenseSimpleDocumentAllOf.attributeTypeMap;
    }
}

