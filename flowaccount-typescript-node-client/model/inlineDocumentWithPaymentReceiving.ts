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
import { InlineDocumentWithPaymentReceivingCash } from './inlineDocumentWithPaymentReceivingCash';
import { InlineDocumentWithPaymentReceivingCheque } from './inlineDocumentWithPaymentReceivingCheque';
import { InlineDocumentWithPaymentReceivingCreditCard } from './inlineDocumentWithPaymentReceivingCreditCard';
import { InlineDocumentWithPaymentReceivingTransfer } from './inlineDocumentWithPaymentReceivingTransfer';
import { SimpleProductItem } from './simpleProductItem';
import { UpgradeDocument } from './upgradeDocument';

export class InlineDocumentWithPaymentReceiving {
    /**
    * รหัส ลูกค้า/ผู้จำหน่าย
    */
    'contactCode'?: string;
    /**
    * ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
    */
    'contactName': string;
    /**
    * ที่อยู่ ลูกค้า/ผู้จำหน่าย
    */
    'contactAddress'?: string;
    /**
    * เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
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
    * อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
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
    'publishedOn': string;
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
    'dueDate': string;
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
    * เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน)
    */
    'useReceiptDeduction'?: boolean;
    /**
    * รายการสินค้าใช้งานสำหรับเอกสาร Simple
    */
    'items'?: Array<SimpleProductItem>;
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
    'totalAfterDiscount': number;
    /**
    * มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
    */
    'isVat'?: boolean;
    /**
    * ภาษีมูลค่าเพิ่ม
    */
    'vatAmount'?: number;
    /**
    * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
    */
    'grandTotal': number;
    /**
    * รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
    */
    'discountType'?: number;
    /**
    * inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
    */
    'useInlineDiscount'?: boolean;
    /**
    * inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
    */
    'useInlineVat'?: boolean;
    /**
    * ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
    */
    'exemptAmount'?: number | null;
    /**
    * ยอดขายที่คิดภาษีมูลค่าเพิ่ม
    */
    'vatableAmount'?: number | null;
    /**
    * แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร
    */
    'documentShowWithholdingTax'?: boolean;
    /**
    * ภาษี ณ ที่จ่าย (%)
    */
    'documentWithholdingTaxPercentage'?: number;
    /**
    * มูลค่าภาษีหัก ณ ที่จ่าย
    */
    'documentWithholdingTaxAmount'?: number;
    /**
    * ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
    */
    'documentDeductionType'?: number;
    /**
    * จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
    */
    'documentDeductionAmount'?: number;
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
    * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
    */
    'documentReference'?: Array<UpgradeDocument>;
    /**
    * สร้างเอกสารแบบ Inline พร้อมรับชำระเงิน ด้วยบัตรเครดิต
    */
    'documentPaymentStructureType': string | null;
    /**
    * ประเภทการเก็บเงิน <br> 7 = บัตรเครดิต
    */
    'paymentMethod': number;
    /**
    * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'paymentDate': string;
    /**
    * จำนวนเงินยอดรับสุทธิ <br> <ex> Example : 100.00 </ex>
    */
    'collected': number;
    /**
    * ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br>
    */
    'paymentDeductionType'?: number;
    /**
    * จำนวนเงินยอดรายการปรับลด <br> <ex> Example : 100.00 </ex>
    */
    'paymentDeductionAmount'?: number;
    /**
    * เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
    */
    'withheldPercentage'?: number;
    /**
    * จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
    */
    'withheldAmount'?: number;
    /**
    * ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    */
    'transferBankAccountId'?: number;
    /**
    * เลข id บัญชีธนาคารที่ใช้รับชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>
    */
    'bankAccountId'?: number;
    /**
    * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
    */
    'paymentRemarks'?: string;
    /**
    * สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
    */
    'remainingCollectedType'?: number;
    /**
    * จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
    */
    'remainingCollected'?: number;
    /**
    * วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
    */
    'chequeDate'?: string;
    /**
    * เลขที่เช็คธนาคาร <br> <ex>Example: 122-122-122</ex>
    */
    'chequeNumber'?: string;
    /**
    * ธนาคารที่ระบุหน้าเช็ค <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    */
    'chequeBankAccountId'?: number;
    /**
    * ธนาคารที่รับชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    */
    'creditCardBankAccountId'?: number;

    static discriminator: string | undefined = "documentPaymentStructureType";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "useReceiptDeduction",
            "baseName": "useReceiptDeduction",
            "type": "boolean"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SimpleProductItem>"
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
            "name": "discountType",
            "baseName": "discountType",
            "type": "number"
        },
        {
            "name": "useInlineDiscount",
            "baseName": "useInlineDiscount",
            "type": "boolean"
        },
        {
            "name": "useInlineVat",
            "baseName": "useInlineVat",
            "type": "boolean"
        },
        {
            "name": "exemptAmount",
            "baseName": "exemptAmount",
            "type": "number"
        },
        {
            "name": "vatableAmount",
            "baseName": "vatableAmount",
            "type": "number"
        },
        {
            "name": "documentShowWithholdingTax",
            "baseName": "documentShowWithholdingTax",
            "type": "boolean"
        },
        {
            "name": "documentWithholdingTaxPercentage",
            "baseName": "documentWithholdingTaxPercentage",
            "type": "number"
        },
        {
            "name": "documentWithholdingTaxAmount",
            "baseName": "documentWithholdingTaxAmount",
            "type": "number"
        },
        {
            "name": "documentDeductionType",
            "baseName": "documentDeductionType",
            "type": "number"
        },
        {
            "name": "documentDeductionAmount",
            "baseName": "documentDeductionAmount",
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
            "name": "documentReference",
            "baseName": "documentReference",
            "type": "Array<UpgradeDocument>"
        },
        {
            "name": "documentPaymentStructureType",
            "baseName": "documentPaymentStructureType",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "number"
        },
        {
            "name": "paymentDate",
            "baseName": "paymentDate",
            "type": "string"
        },
        {
            "name": "collected",
            "baseName": "collected",
            "type": "number"
        },
        {
            "name": "paymentDeductionType",
            "baseName": "paymentDeductionType",
            "type": "number"
        },
        {
            "name": "paymentDeductionAmount",
            "baseName": "paymentDeductionAmount",
            "type": "number"
        },
        {
            "name": "withheldPercentage",
            "baseName": "withheldPercentage",
            "type": "number"
        },
        {
            "name": "withheldAmount",
            "baseName": "withheldAmount",
            "type": "number"
        },
        {
            "name": "transferBankAccountId",
            "baseName": "transferBankAccountId",
            "type": "number"
        },
        {
            "name": "bankAccountId",
            "baseName": "bankAccountId",
            "type": "number"
        },
        {
            "name": "paymentRemarks",
            "baseName": "paymentRemarks",
            "type": "string"
        },
        {
            "name": "remainingCollectedType",
            "baseName": "remainingCollectedType",
            "type": "number"
        },
        {
            "name": "remainingCollected",
            "baseName": "remainingCollected",
            "type": "number"
        },
        {
            "name": "chequeDate",
            "baseName": "chequeDate",
            "type": "string"
        },
        {
            "name": "chequeNumber",
            "baseName": "chequeNumber",
            "type": "string"
        },
        {
            "name": "chequeBankAccountId",
            "baseName": "chequeBankAccountId",
            "type": "number"
        },
        {
            "name": "creditCardBankAccountId",
            "baseName": "creditCardBankAccountId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InlineDocumentWithPaymentReceiving.attributeTypeMap;
    }
}

