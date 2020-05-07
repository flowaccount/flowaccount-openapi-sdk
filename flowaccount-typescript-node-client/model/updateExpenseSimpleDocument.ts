/**
 * FlowAccount Open API
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test    **PostMan Collection**   site: https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ExpenseSimpleDocumentAllOf } from './expenseSimpleDocumentAllOf';
import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
import { UpdateExpenseDocument } from './updateExpenseDocument';

export class UpdateExpenseSimpleDocument extends UpdateExpenseDocument {
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
        return super.getAttributeTypeMap().concat(UpdateExpenseSimpleDocument.attributeTypeMap);
    }
}

