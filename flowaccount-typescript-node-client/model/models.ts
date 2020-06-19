export * from './allBankAccountResponse';
export * from './allDocumentResponse';
export * from './allDocumentResponseData';
export * from './allExpenseDocumentResponse';
export * from './allExpenseDocumentResponseData';
export * from './allWithholidingTaxDocumentResponse';
export * from './allWithholidingTaxDocumentResponseData';
export * from './attachmentResponse';
export * from './attachmentResponseData';
export * from './authenResponse';
export * from './bankAccount';
export * from './bankAccountResponse';
export * from './bankAccountResponseData';
export * from './businessCategory';
export * from './businessCategoryData';
export * from './companyInfo';
export * from './companyInfoResponse';
export * from './companyInfoResponseData';
export * from './contact';
export * from './contactResponse';
export * from './contactResponseData';
export * from './deleteResponse';
export * from './deleteResponseData';
export * from './document';
export * from './documentResponse';
export * from './expenseDocument';
export * from './expenseInlineDocument';
export * from './expenseInlineDocumentAllOf';
export * from './expenseInlineDocumentResponse';
export * from './expenseInlineDocumentResponseAllOf';
export * from './expenseInlineDocumentResponseAllOfData';
export * from './expenseInlineDocumentWithPaymentPaid';
export * from './expenseInlineDocumentWithPaymentPaidCash';
export * from './expenseInlineDocumentWithPaymentPaidCheque';
export * from './expenseInlineDocumentWithPaymentPaidCreditCard';
export * from './expenseInlineDocumentWithPaymentPaidTransfer';
export * from './expenseInlineProductItem';
export * from './expenseResponse';
export * from './expenseSimpleDocument';
export * from './expenseSimpleDocumentAllOf';
export * from './expenseSimpleDocumentResponse';
export * from './expenseSimpleDocumentResponseAllOf';
export * from './expenseSimpleDocumentResponseAllOfData';
export * from './expenseSimpleDocumentWithPaymentPaid';
export * from './expenseSimpleDocumentWithPaymentPaidCash';
export * from './expenseSimpleDocumentWithPaymentPaidCheque';
export * from './expenseSimpleDocumentWithPaymentPaidCreditCard';
export * from './expenseSimpleDocumentWithPaymentPaidTransfer';
export * from './expenseSimpleProductItem';
export * from './inlineDocument';
export * from './inlineDocumentAllOf';
export * from './inlineDocumentResponse';
export * from './inlineDocumentResponseAllOf';
export * from './inlineDocumentResponseAllOfData';
export * from './inlineDocumentWithPaymentPaid';
export * from './inlineDocumentWithPaymentPaidCash';
export * from './inlineDocumentWithPaymentPaidCheque';
export * from './inlineDocumentWithPaymentPaidCreditCard';
export * from './inlineDocumentWithPaymentPaidTransfer';
export * from './inlineDocumentWithPaymentReceiving';
export * from './inlineDocumentWithPaymentReceivingCash';
export * from './inlineDocumentWithPaymentReceivingCheque';
export * from './inlineDocumentWithPaymentReceivingCreditCard';
export * from './inlineDocumentWithPaymentReceivingTransfer';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './inlineObject6';
export * from './inlineObject7';
export * from './inlineObject8';
export * from './inlineObject9';
export * from './inlineProductItem';
export * from './inlineProductItemAllOf';
export * from './paymentPaidCash';
export * from './paymentPaidCheque';
export * from './paymentPaidCreditCard';
export * from './paymentPaidDocument';
export * from './paymentPaidTransfer';
export * from './paymentReceivingCash';
export * from './paymentReceivingCheque';
export * from './paymentReceivingCreditCard';
export * from './paymentReceivingDocument';
export * from './paymentReceivingTransfer';
export * from './product';
export * from './productInventory';
export * from './productInventoryBalance';
export * from './productItem';
export * from './productNonInventory';
export * from './productResponse';
export * from './productResponseData';
export * from './productService';
export * from './productType';
export * from './referencedByMe';
export * from './referencedToMe';
export * from './sendEmail';
export * from './sendEmailCoppies';
export * from './sendEmailCoppiesAllOf';
export * from './sendEmailResponse';
export * from './sendEmailResponseData';
export * from './sendEmailSimple';
export * from './shareDocument';
export * from './shareDocumentResponse';
export * from './shareDocumentResponseData';
export * from './simpleDocument';
export * from './simpleDocumentAllOf';
export * from './simpleDocumentResponse';
export * from './simpleDocumentResponseAllOf';
export * from './simpleDocumentResponseAllOfData';
export * from './simpleDocumentResponseAllOfDataCompany';
export * from './simpleDocumentResponseAllOfDataPayments';
export * from './simpleDocumentWithPaymentPaid';
export * from './simpleDocumentWithPaymentPaidCash';
export * from './simpleDocumentWithPaymentPaidCheque';
export * from './simpleDocumentWithPaymentPaidCreditCard';
export * from './simpleDocumentWithPaymentPaidTransfer';
export * from './simpleDocumentWithPaymentReceiving';
export * from './simpleDocumentWithPaymentReceivingCash';
export * from './simpleDocumentWithPaymentReceivingCheque';
export * from './simpleDocumentWithPaymentReceivingCreditCard';
export * from './simpleDocumentWithPaymentReceivingTransfer';
export * from './simpleProductItem';
export * from './statusDocument';
export * from './updateDocument';
export * from './updateExpenseDocument';
export * from './updateExpenseInlineDocument';
export * from './updateExpenseSimpleDocument';
export * from './updateInlineDocument';
export * from './updateSimpleDocument';
export * from './updateWithholidingTaxDocument';
export * from './upgradeDocument';
export * from './withholidingTaxDocument';
export * from './withholidingTaxDocumentResponse';
export * from './withholidingTaxDocumentResponseData';
export * from './withholidingTaxItem';

import localVarRequest = require('request');

import { AllBankAccountResponse } from './allBankAccountResponse';
import { AllDocumentResponse } from './allDocumentResponse';
import { AllDocumentResponseData } from './allDocumentResponseData';
import { AllExpenseDocumentResponse } from './allExpenseDocumentResponse';
import { AllExpenseDocumentResponseData } from './allExpenseDocumentResponseData';
import { AllWithholidingTaxDocumentResponse } from './allWithholidingTaxDocumentResponse';
import { AllWithholidingTaxDocumentResponseData } from './allWithholidingTaxDocumentResponseData';
import { AttachmentResponse } from './attachmentResponse';
import { AttachmentResponseData } from './attachmentResponseData';
import { AuthenResponse } from './authenResponse';
import { BankAccount } from './bankAccount';
import { BankAccountResponse } from './bankAccountResponse';
import { BankAccountResponseData } from './bankAccountResponseData';
import { BusinessCategory } from './businessCategory';
import { BusinessCategoryData } from './businessCategoryData';
import { CompanyInfo } from './companyInfo';
import { CompanyInfoResponse } from './companyInfoResponse';
import { CompanyInfoResponseData } from './companyInfoResponseData';
import { Contact } from './contact';
import { ContactResponse } from './contactResponse';
import { ContactResponseData } from './contactResponseData';
import { DeleteResponse } from './deleteResponse';
import { DeleteResponseData } from './deleteResponseData';
import { Document } from './document';
import { DocumentResponse } from './documentResponse';
import { ExpenseDocument } from './expenseDocument';
import { ExpenseInlineDocument } from './expenseInlineDocument';
import { ExpenseInlineDocumentAllOf } from './expenseInlineDocumentAllOf';
import { ExpenseInlineDocumentResponse } from './expenseInlineDocumentResponse';
import { ExpenseInlineDocumentResponseAllOf } from './expenseInlineDocumentResponseAllOf';
import { ExpenseInlineDocumentResponseAllOfData } from './expenseInlineDocumentResponseAllOfData';
import { ExpenseInlineDocumentWithPaymentPaid } from './expenseInlineDocumentWithPaymentPaid';
import { ExpenseInlineDocumentWithPaymentPaidCash } from './expenseInlineDocumentWithPaymentPaidCash';
import { ExpenseInlineDocumentWithPaymentPaidCheque } from './expenseInlineDocumentWithPaymentPaidCheque';
import { ExpenseInlineDocumentWithPaymentPaidCreditCard } from './expenseInlineDocumentWithPaymentPaidCreditCard';
import { ExpenseInlineDocumentWithPaymentPaidTransfer } from './expenseInlineDocumentWithPaymentPaidTransfer';
import { ExpenseInlineProductItem } from './expenseInlineProductItem';
import { ExpenseResponse } from './expenseResponse';
import { ExpenseSimpleDocument } from './expenseSimpleDocument';
import { ExpenseSimpleDocumentAllOf } from './expenseSimpleDocumentAllOf';
import { ExpenseSimpleDocumentResponse } from './expenseSimpleDocumentResponse';
import { ExpenseSimpleDocumentResponseAllOf } from './expenseSimpleDocumentResponseAllOf';
import { ExpenseSimpleDocumentResponseAllOfData } from './expenseSimpleDocumentResponseAllOfData';
import { ExpenseSimpleDocumentWithPaymentPaid } from './expenseSimpleDocumentWithPaymentPaid';
import { ExpenseSimpleDocumentWithPaymentPaidCash } from './expenseSimpleDocumentWithPaymentPaidCash';
import { ExpenseSimpleDocumentWithPaymentPaidCheque } from './expenseSimpleDocumentWithPaymentPaidCheque';
import { ExpenseSimpleDocumentWithPaymentPaidCreditCard } from './expenseSimpleDocumentWithPaymentPaidCreditCard';
import { ExpenseSimpleDocumentWithPaymentPaidTransfer } from './expenseSimpleDocumentWithPaymentPaidTransfer';
import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
import { InlineDocument } from './inlineDocument';
import { InlineDocumentAllOf } from './inlineDocumentAllOf';
import { InlineDocumentResponse } from './inlineDocumentResponse';
import { InlineDocumentResponseAllOf } from './inlineDocumentResponseAllOf';
import { InlineDocumentResponseAllOfData } from './inlineDocumentResponseAllOfData';
import { InlineDocumentWithPaymentPaid } from './inlineDocumentWithPaymentPaid';
import { InlineDocumentWithPaymentPaidCash } from './inlineDocumentWithPaymentPaidCash';
import { InlineDocumentWithPaymentPaidCheque } from './inlineDocumentWithPaymentPaidCheque';
import { InlineDocumentWithPaymentPaidCreditCard } from './inlineDocumentWithPaymentPaidCreditCard';
import { InlineDocumentWithPaymentPaidTransfer } from './inlineDocumentWithPaymentPaidTransfer';
import { InlineDocumentWithPaymentReceiving } from './inlineDocumentWithPaymentReceiving';
import { InlineDocumentWithPaymentReceivingCash } from './inlineDocumentWithPaymentReceivingCash';
import { InlineDocumentWithPaymentReceivingCheque } from './inlineDocumentWithPaymentReceivingCheque';
import { InlineDocumentWithPaymentReceivingCreditCard } from './inlineDocumentWithPaymentReceivingCreditCard';
import { InlineDocumentWithPaymentReceivingTransfer } from './inlineDocumentWithPaymentReceivingTransfer';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { InlineObject6 } from './inlineObject6';
import { InlineObject7 } from './inlineObject7';
import { InlineObject8 } from './inlineObject8';
import { InlineObject9 } from './inlineObject9';
import { InlineProductItem } from './inlineProductItem';
import { InlineProductItemAllOf } from './inlineProductItemAllOf';
import { PaymentPaidCash } from './paymentPaidCash';
import { PaymentPaidCheque } from './paymentPaidCheque';
import { PaymentPaidCreditCard } from './paymentPaidCreditCard';
import { PaymentPaidDocument } from './paymentPaidDocument';
import { PaymentPaidTransfer } from './paymentPaidTransfer';
import { PaymentReceivingCash } from './paymentReceivingCash';
import { PaymentReceivingCheque } from './paymentReceivingCheque';
import { PaymentReceivingCreditCard } from './paymentReceivingCreditCard';
import { PaymentReceivingDocument } from './paymentReceivingDocument';
import { PaymentReceivingTransfer } from './paymentReceivingTransfer';
import { Product } from './product';
import { ProductInventory } from './productInventory';
import { ProductInventoryBalance } from './productInventoryBalance';
import { ProductItem } from './productItem';
import { ProductNonInventory } from './productNonInventory';
import { ProductResponse } from './productResponse';
import { ProductResponseData } from './productResponseData';
import { ProductService } from './productService';
import { ProductType } from './productType';
import { ReferencedByMe } from './referencedByMe';
import { ReferencedToMe } from './referencedToMe';
import { SendEmail } from './sendEmail';
import { SendEmailCoppies } from './sendEmailCoppies';
import { SendEmailCoppiesAllOf } from './sendEmailCoppiesAllOf';
import { SendEmailResponse } from './sendEmailResponse';
import { SendEmailResponseData } from './sendEmailResponseData';
import { SendEmailSimple } from './sendEmailSimple';
import { ShareDocument } from './shareDocument';
import { ShareDocumentResponse } from './shareDocumentResponse';
import { ShareDocumentResponseData } from './shareDocumentResponseData';
import { SimpleDocument } from './simpleDocument';
import { SimpleDocumentAllOf } from './simpleDocumentAllOf';
import { SimpleDocumentResponse } from './simpleDocumentResponse';
import { SimpleDocumentResponseAllOf } from './simpleDocumentResponseAllOf';
import { SimpleDocumentResponseAllOfData } from './simpleDocumentResponseAllOfData';
import { SimpleDocumentResponseAllOfDataCompany } from './simpleDocumentResponseAllOfDataCompany';
import { SimpleDocumentResponseAllOfDataPayments } from './simpleDocumentResponseAllOfDataPayments';
import { SimpleDocumentWithPaymentPaid } from './simpleDocumentWithPaymentPaid';
import { SimpleDocumentWithPaymentPaidCash } from './simpleDocumentWithPaymentPaidCash';
import { SimpleDocumentWithPaymentPaidCheque } from './simpleDocumentWithPaymentPaidCheque';
import { SimpleDocumentWithPaymentPaidCreditCard } from './simpleDocumentWithPaymentPaidCreditCard';
import { SimpleDocumentWithPaymentPaidTransfer } from './simpleDocumentWithPaymentPaidTransfer';
import { SimpleDocumentWithPaymentReceiving } from './simpleDocumentWithPaymentReceiving';
import { SimpleDocumentWithPaymentReceivingCash } from './simpleDocumentWithPaymentReceivingCash';
import { SimpleDocumentWithPaymentReceivingCheque } from './simpleDocumentWithPaymentReceivingCheque';
import { SimpleDocumentWithPaymentReceivingCreditCard } from './simpleDocumentWithPaymentReceivingCreditCard';
import { SimpleDocumentWithPaymentReceivingTransfer } from './simpleDocumentWithPaymentReceivingTransfer';
import { SimpleProductItem } from './simpleProductItem';
import { StatusDocument } from './statusDocument';
import { UpdateDocument } from './updateDocument';
import { UpdateExpenseDocument } from './updateExpenseDocument';
import { UpdateExpenseInlineDocument } from './updateExpenseInlineDocument';
import { UpdateExpenseSimpleDocument } from './updateExpenseSimpleDocument';
import { UpdateInlineDocument } from './updateInlineDocument';
import { UpdateSimpleDocument } from './updateSimpleDocument';
import { UpdateWithholidingTaxDocument } from './updateWithholidingTaxDocument';
import { UpgradeDocument } from './upgradeDocument';
import { WithholidingTaxDocument } from './withholidingTaxDocument';
import { WithholidingTaxDocumentResponse } from './withholidingTaxDocumentResponse';
import { WithholidingTaxDocumentResponseData } from './withholidingTaxDocumentResponseData';
import { WithholidingTaxItem } from './withholidingTaxItem';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "AllBankAccountResponse": AllBankAccountResponse,
    "AllDocumentResponse": AllDocumentResponse,
    "AllDocumentResponseData": AllDocumentResponseData,
    "AllExpenseDocumentResponse": AllExpenseDocumentResponse,
    "AllExpenseDocumentResponseData": AllExpenseDocumentResponseData,
    "AllWithholidingTaxDocumentResponse": AllWithholidingTaxDocumentResponse,
    "AllWithholidingTaxDocumentResponseData": AllWithholidingTaxDocumentResponseData,
    "AttachmentResponse": AttachmentResponse,
    "AttachmentResponseData": AttachmentResponseData,
    "AuthenResponse": AuthenResponse,
    "BankAccount": BankAccount,
    "BankAccountResponse": BankAccountResponse,
    "BankAccountResponseData": BankAccountResponseData,
    "BusinessCategory": BusinessCategory,
    "BusinessCategoryData": BusinessCategoryData,
    "CompanyInfo": CompanyInfo,
    "CompanyInfoResponse": CompanyInfoResponse,
    "CompanyInfoResponseData": CompanyInfoResponseData,
    "Contact": Contact,
    "ContactResponse": ContactResponse,
    "ContactResponseData": ContactResponseData,
    "DeleteResponse": DeleteResponse,
    "DeleteResponseData": DeleteResponseData,
    "Document": Document,
    "DocumentResponse": DocumentResponse,
    "ExpenseDocument": ExpenseDocument,
    "ExpenseInlineDocument": ExpenseInlineDocument,
    "ExpenseInlineDocumentAllOf": ExpenseInlineDocumentAllOf,
    "ExpenseInlineDocumentResponse": ExpenseInlineDocumentResponse,
    "ExpenseInlineDocumentResponseAllOf": ExpenseInlineDocumentResponseAllOf,
    "ExpenseInlineDocumentResponseAllOfData": ExpenseInlineDocumentResponseAllOfData,
    "ExpenseInlineDocumentWithPaymentPaid": ExpenseInlineDocumentWithPaymentPaid,
    "ExpenseInlineDocumentWithPaymentPaidCash": ExpenseInlineDocumentWithPaymentPaidCash,
    "ExpenseInlineDocumentWithPaymentPaidCheque": ExpenseInlineDocumentWithPaymentPaidCheque,
    "ExpenseInlineDocumentWithPaymentPaidCreditCard": ExpenseInlineDocumentWithPaymentPaidCreditCard,
    "ExpenseInlineDocumentWithPaymentPaidTransfer": ExpenseInlineDocumentWithPaymentPaidTransfer,
    "ExpenseInlineProductItem": ExpenseInlineProductItem,
    "ExpenseResponse": ExpenseResponse,
    "ExpenseSimpleDocument": ExpenseSimpleDocument,
    "ExpenseSimpleDocumentAllOf": ExpenseSimpleDocumentAllOf,
    "ExpenseSimpleDocumentResponse": ExpenseSimpleDocumentResponse,
    "ExpenseSimpleDocumentResponseAllOf": ExpenseSimpleDocumentResponseAllOf,
    "ExpenseSimpleDocumentResponseAllOfData": ExpenseSimpleDocumentResponseAllOfData,
    "ExpenseSimpleDocumentWithPaymentPaid": ExpenseSimpleDocumentWithPaymentPaid,
    "ExpenseSimpleDocumentWithPaymentPaidCash": ExpenseSimpleDocumentWithPaymentPaidCash,
    "ExpenseSimpleDocumentWithPaymentPaidCheque": ExpenseSimpleDocumentWithPaymentPaidCheque,
    "ExpenseSimpleDocumentWithPaymentPaidCreditCard": ExpenseSimpleDocumentWithPaymentPaidCreditCard,
    "ExpenseSimpleDocumentWithPaymentPaidTransfer": ExpenseSimpleDocumentWithPaymentPaidTransfer,
    "ExpenseSimpleProductItem": ExpenseSimpleProductItem,
    "InlineDocument": InlineDocument,
    "InlineDocumentAllOf": InlineDocumentAllOf,
    "InlineDocumentResponse": InlineDocumentResponse,
    "InlineDocumentResponseAllOf": InlineDocumentResponseAllOf,
    "InlineDocumentResponseAllOfData": InlineDocumentResponseAllOfData,
    "InlineDocumentWithPaymentPaid": InlineDocumentWithPaymentPaid,
    "InlineDocumentWithPaymentPaidCash": InlineDocumentWithPaymentPaidCash,
    "InlineDocumentWithPaymentPaidCheque": InlineDocumentWithPaymentPaidCheque,
    "InlineDocumentWithPaymentPaidCreditCard": InlineDocumentWithPaymentPaidCreditCard,
    "InlineDocumentWithPaymentPaidTransfer": InlineDocumentWithPaymentPaidTransfer,
    "InlineDocumentWithPaymentReceiving": InlineDocumentWithPaymentReceiving,
    "InlineDocumentWithPaymentReceivingCash": InlineDocumentWithPaymentReceivingCash,
    "InlineDocumentWithPaymentReceivingCheque": InlineDocumentWithPaymentReceivingCheque,
    "InlineDocumentWithPaymentReceivingCreditCard": InlineDocumentWithPaymentReceivingCreditCard,
    "InlineDocumentWithPaymentReceivingTransfer": InlineDocumentWithPaymentReceivingTransfer,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineObject6": InlineObject6,
    "InlineObject7": InlineObject7,
    "InlineObject8": InlineObject8,
    "InlineObject9": InlineObject9,
    "InlineProductItem": InlineProductItem,
    "InlineProductItemAllOf": InlineProductItemAllOf,
    "PaymentPaidCash": PaymentPaidCash,
    "PaymentPaidCheque": PaymentPaidCheque,
    "PaymentPaidCreditCard": PaymentPaidCreditCard,
    "PaymentPaidDocument": PaymentPaidDocument,
    "PaymentPaidTransfer": PaymentPaidTransfer,
    "PaymentReceivingCash": PaymentReceivingCash,
    "PaymentReceivingCheque": PaymentReceivingCheque,
    "PaymentReceivingCreditCard": PaymentReceivingCreditCard,
    "PaymentReceivingDocument": PaymentReceivingDocument,
    "PaymentReceivingTransfer": PaymentReceivingTransfer,
    "Product": Product,
    "ProductInventory": ProductInventory,
    "ProductInventoryBalance": ProductInventoryBalance,
    "ProductItem": ProductItem,
    "ProductNonInventory": ProductNonInventory,
    "ProductResponse": ProductResponse,
    "ProductResponseData": ProductResponseData,
    "ProductService": ProductService,
    "ProductType": ProductType,
    "ReferencedByMe": ReferencedByMe,
    "ReferencedToMe": ReferencedToMe,
    "SendEmail": SendEmail,
    "SendEmailCoppies": SendEmailCoppies,
    "SendEmailCoppiesAllOf": SendEmailCoppiesAllOf,
    "SendEmailResponse": SendEmailResponse,
    "SendEmailResponseData": SendEmailResponseData,
    "SendEmailSimple": SendEmailSimple,
    "ShareDocument": ShareDocument,
    "ShareDocumentResponse": ShareDocumentResponse,
    "ShareDocumentResponseData": ShareDocumentResponseData,
    "SimpleDocument": SimpleDocument,
    "SimpleDocumentAllOf": SimpleDocumentAllOf,
    "SimpleDocumentResponse": SimpleDocumentResponse,
    "SimpleDocumentResponseAllOf": SimpleDocumentResponseAllOf,
    "SimpleDocumentResponseAllOfData": SimpleDocumentResponseAllOfData,
    "SimpleDocumentResponseAllOfDataCompany": SimpleDocumentResponseAllOfDataCompany,
    "SimpleDocumentResponseAllOfDataPayments": SimpleDocumentResponseAllOfDataPayments,
    "SimpleDocumentWithPaymentPaid": SimpleDocumentWithPaymentPaid,
    "SimpleDocumentWithPaymentPaidCash": SimpleDocumentWithPaymentPaidCash,
    "SimpleDocumentWithPaymentPaidCheque": SimpleDocumentWithPaymentPaidCheque,
    "SimpleDocumentWithPaymentPaidCreditCard": SimpleDocumentWithPaymentPaidCreditCard,
    "SimpleDocumentWithPaymentPaidTransfer": SimpleDocumentWithPaymentPaidTransfer,
    "SimpleDocumentWithPaymentReceiving": SimpleDocumentWithPaymentReceiving,
    "SimpleDocumentWithPaymentReceivingCash": SimpleDocumentWithPaymentReceivingCash,
    "SimpleDocumentWithPaymentReceivingCheque": SimpleDocumentWithPaymentReceivingCheque,
    "SimpleDocumentWithPaymentReceivingCreditCard": SimpleDocumentWithPaymentReceivingCreditCard,
    "SimpleDocumentWithPaymentReceivingTransfer": SimpleDocumentWithPaymentReceivingTransfer,
    "SimpleProductItem": SimpleProductItem,
    "StatusDocument": StatusDocument,
    "UpdateDocument": UpdateDocument,
    "UpdateExpenseDocument": UpdateExpenseDocument,
    "UpdateExpenseInlineDocument": UpdateExpenseInlineDocument,
    "UpdateExpenseSimpleDocument": UpdateExpenseSimpleDocument,
    "UpdateInlineDocument": UpdateInlineDocument,
    "UpdateSimpleDocument": UpdateSimpleDocument,
    "UpdateWithholidingTaxDocument": UpdateWithholidingTaxDocument,
    "UpgradeDocument": UpgradeDocument,
    "WithholidingTaxDocument": WithholidingTaxDocument,
    "WithholidingTaxDocumentResponse": WithholidingTaxDocumentResponse,
    "WithholidingTaxDocumentResponseData": WithholidingTaxDocumentResponseData,
    "WithholidingTaxItem": WithholidingTaxItem,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
