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


export class Contact {
    /**
    * ประเภทผู้ติดต่อ: 1 = บุคคลธรรมดา / 3 = นิติบุคคล
    */
    'contactGroup': number;
    /**
    * ประเภท: 3 = ลูกค้า / 5 = ผู้จำหน่าย / 7 = ผู้จำหน่ายและลูกค้า
    */
    'contactType': number;
    /**
    * ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย
    */
    'contactName': string;
    /**
    * ที่อยู่ผู้ติดต่อ
    */
    'contactAddress'?: string;
    /**
    * รหัสไปรษณีย์ติดต่อ <ex>Example: 10140 </ex>
    */
    'contactZipCode'?: string;
    /**
    * เลขประจำตัวผู้เสียภาษี 13 หลัก ​<br><ex>Example: 1234567890123</ex>
    */
    'contactTaxId'?: number;
    /**
    * รหัสสาขา
    */
    'contactBranchCode'?: string;
    /**
    * ชื่อสาขา
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
    'contactMobile'?: string;
    /**
    * รหัสธนาคาร <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
    */
    'contactBankId'?: number;
    /**
    * เลขที่บัญชีธนาคาร <br> <ex>Example: 1111111111</ex>
    */
    'contactBankAccountNumber'?: number;
    /**
    * สาขาธนาคาร <br> <ex>Example: บางรัก</ex>
    */
    'contactBankBranch'?: string;
    /**
    * ประเภทบัญชีธนาคาร: <br> 1 = บัญชีออมทรัพย์ <br> 3 = บัญชีกระแสรายวัน
    */
    'contactBankAccountType'?: number;
    /**
    * เครดิต (วัน) <br> <ex>Example: 30</ex>
    */
    'contactCreditDays'?: number;
    /**
    * เบอร์โทรศัพท์สำนักงาน <br> <ex>Example: 02-999-9999</ex>
    */
    'contactOffice'?: string;
    /**
    * เบอร์โทรสาร <br> <ex>Example: 02-888-8888</ex>
    */
    'contactFax'?: string;
    /**
    * เว็บไซต์ ผู้ติดต่อ <br> <ex>Eample: www.flowaccount.com</ex>
    */
    'contactWebsite'?: string;
    /**
    * ที่อยู่สำหรับจัดส่ง
    */
    'conatactShippingAddress'?: string;
    /**
    * โน๊ต
    */
    'contactNote'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactGroup",
            "baseName": "contactGroup",
            "type": "number"
        },
        {
            "name": "contactType",
            "baseName": "contactType",
            "type": "number"
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
            "name": "contactZipCode",
            "baseName": "contactZipCode",
            "type": "string"
        },
        {
            "name": "contactTaxId",
            "baseName": "contactTaxId",
            "type": "number"
        },
        {
            "name": "contactBranchCode",
            "baseName": "contactBranchCode",
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
            "name": "contactMobile",
            "baseName": "contactMobile",
            "type": "string"
        },
        {
            "name": "contactBankId",
            "baseName": "contactBankId",
            "type": "number"
        },
        {
            "name": "contactBankAccountNumber",
            "baseName": "contactBankAccountNumber",
            "type": "number"
        },
        {
            "name": "contactBankBranch",
            "baseName": "contactBankBranch",
            "type": "string"
        },
        {
            "name": "contactBankAccountType",
            "baseName": "contactBankAccountType",
            "type": "number"
        },
        {
            "name": "contactCreditDays",
            "baseName": "contactCreditDays",
            "type": "number"
        },
        {
            "name": "contactOffice",
            "baseName": "contactOffice",
            "type": "string"
        },
        {
            "name": "contactFax",
            "baseName": "contactFax",
            "type": "string"
        },
        {
            "name": "contactWebsite",
            "baseName": "contactWebsite",
            "type": "string"
        },
        {
            "name": "conatactShippingAddress",
            "baseName": "conatactShippingAddress",
            "type": "string"
        },
        {
            "name": "contactNote",
            "baseName": "contactNote",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }
}

