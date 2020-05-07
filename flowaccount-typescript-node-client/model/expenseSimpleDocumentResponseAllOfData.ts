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

import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
import { PaymentDocumentResponse } from './paymentDocumentResponse';

export class ExpenseSimpleDocumentResponseAllOfData {
    /**
    * id ของเอกสาร
    */
    'recordId'?: number;
    /**
    * id ของเอกสาร
    */
    'documentId'?: number;
    /**
    * เลขที่เอกสาร
    */
    'documentSerial'?: string;
    /**
    * รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    */
    'contactCode'?: string;
    /**
    * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    */
    'contactName'?: string;
    /**
    * ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
    */
    'contactAddress'?: string;
    /**
    * เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
    */
    'contactTaxId'?: string;
    /**
    * สำนักงาน/สาขา
    */
    'contactBranch'?: string;
    /**
    * ชื่อผู้ติดต่อ
    */
    'contactPerson'?: string;
    /**
    * อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>
    */
    'contactEmail'?: string;
    /**
    * เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
    */
    'contactNumber'?: string;
    /**
    * รหัสไปรษณีย์ติดต่อ
    */
    'contactZipCode'?: string;
    /**
    * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
    */
    'contactGroup'?: number;
    /**
    * วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'publishedOn'?: string;
    /**
    * รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
    */
    'creditType'?: number;
    /**
    * จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
    */
    'creditDays'?: number;
    /**
    * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'dueDate'?: string;
    /**
    * ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
    */
    'salesName'?: string;
    /**
    * ชื่อโปรเจค
    */
    'projectName'?: string;
    /**
    * เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
    */
    'reference'?: string;
    /**
    * มูลค่าเอกสารรวมภาษีแล้วหรือไม่
    */
    'isVatInclusive'?: boolean;
    /**
    * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
    */
    'items'?: Array<ExpenseSimpleProductItem>;
    /**
    * มูลค่ารวมเป็นเงิน
    */
    'subTotal'?: number;
    /**
    * มูลค่าส่วนลดเป็นเปอร์เซ็นต์
    */
    'discountPercentage'?: number;
    /**
    * มูลค่าส่วนลดเป็นจำนวน (บาท)
    */
    'discountAmount'?: number;
    /**
    * มูลค่าหลังหักส่วนลด
    */
    'totalAfterDiscount'?: number;
    /**
    * มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%
    */
    'isVat'?: boolean;
    /**
    * ภาษีมูลค่าเพิ่ม
    */
    'vatAmount'?: number;
    /**
    * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
    */
    'grandTotal'?: number;
    /**
    * หมายเหตุเอกสาร
    */
    'remarks'?: string;
    /**
    * โน๊ตภายในบริษัท
    */
    'internalNotes'?: string;
    /**
    * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
    */
    'showSignatureOrStamp'?: boolean;
    /**
    * ข้อมูลการจ่ายเงินของเอกสารค่าใช้จ่าย
    */
    'payments'?: Array<PaymentDocumentResponse>;
    /**
    * ข้อมูลบริษัทของคุณในเอกสาร
    */
    'company'?: Array<object>;
    /**
    * เลขสถานะเอกสารฉบับนี้
    */
    'status'?: number;
    /**
    * ชื่อสถานะเอกสารฉบับนี้
    */
    'statusString'?: number;
    /**
    * เลขประเภทเอกสารฉบับนี้
    */
    'documentType'?: number;
    /**
    * สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้
    */
    'allowDelete'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recordId",
            "baseName": "recordId",
            "type": "number"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "number"
        },
        {
            "name": "documentSerial",
            "baseName": "documentSerial",
            "type": "string"
        },
        {
            "name": "contactCode",
            "baseName": "contactCode",
            "type": "string"
        },
        {
            "name": "contactName",
            "baseName": "contactName",
            "type": "string"
        },
        {
            "name": "contactAddress",
            "baseName": "contactAddress",
            "type": "string"
        },
        {
            "name": "contactTaxId",
            "baseName": "contactTaxId",
            "type": "string"
        },
        {
            "name": "contactBranch",
            "baseName": "contactBranch",
            "type": "string"
        },
        {
            "name": "contactPerson",
            "baseName": "contactPerson",
            "type": "string"
        },
        {
            "name": "contactEmail",
            "baseName": "contactEmail",
            "type": "string"
        },
        {
            "name": "contactNumber",
            "baseName": "contactNumber",
            "type": "string"
        },
        {
            "name": "contactZipCode",
            "baseName": "contactZipCode",
            "type": "string"
        },
        {
            "name": "contactGroup",
            "baseName": "contactGroup",
            "type": "number"
        },
        {
            "name": "publishedOn",
            "baseName": "publishedOn",
            "type": "string"
        },
        {
            "name": "creditType",
            "baseName": "creditType",
            "type": "number"
        },
        {
            "name": "creditDays",
            "baseName": "creditDays",
            "type": "number"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "string"
        },
        {
            "name": "salesName",
            "baseName": "salesName",
            "type": "string"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "isVatInclusive",
            "baseName": "isVatInclusive",
            "type": "boolean"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ExpenseSimpleProductItem>"
        },
        {
            "name": "subTotal",
            "baseName": "subTotal",
            "type": "number"
        },
        {
            "name": "discountPercentage",
            "baseName": "discountPercentage",
            "type": "number"
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "totalAfterDiscount",
            "baseName": "totalAfterDiscount",
            "type": "number"
        },
        {
            "name": "isVat",
            "baseName": "isVat",
            "type": "boolean"
        },
        {
            "name": "vatAmount",
            "baseName": "vatAmount",
            "type": "number"
        },
        {
            "name": "grandTotal",
            "baseName": "grandTotal",
            "type": "number"
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string"
        },
        {
            "name": "internalNotes",
            "baseName": "internalNotes",
            "type": "string"
        },
        {
            "name": "showSignatureOrStamp",
            "baseName": "showSignatureOrStamp",
            "type": "boolean"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<PaymentDocumentResponse>"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "Array<object>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "statusString",
            "baseName": "statusString",
            "type": "number"
        },
        {
            "name": "documentType",
            "baseName": "documentType",
            "type": "number"
        },
        {
            "name": "allowDelete",
            "baseName": "allowDelete",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ExpenseSimpleDocumentResponseAllOfData.attributeTypeMap;
    }
}

