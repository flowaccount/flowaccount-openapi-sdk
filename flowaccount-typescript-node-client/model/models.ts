export * from './attachmentResponse';
export * from './attachmentResponseData';
export * from './authenResponse';
export * from './businessCategory';
export * from './contact';
export * from './contactResponse';
export * from './contactResponseAllOf';
export * from './deleteResponse';
export * from './deleteResponseData';
export * from './document';
export * from './documentResponse';
export * from './expenseDocument';
export * from './expenseDocumentResponse';
export * from './expenseInlineDocument';
export * from './expenseInlineDocumentResponse';
export * from './expenseInlineProductItem';
export * from './expenseSimpleProductItem';
export * from './inlineDocument';
export * from './inlineDocumentAllOf';
export * from './inlineDocumentResponse';
export * from './inlineDocumentResponseAllOf';
export * from './inlineDocumentResponseAllOfData';
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
export * from './paymentDocument';
export * from './paymentDocumentResponse';
export * from './product';
export * from './productItem';
export * from './productResponse';
export * from './productResponseData';
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
export * from './simpleProductItem';
export * from './statusDocument';
export * from './upgradeDocument';
export * from './withholidingTaxDocument';
export * from './withholidingTaxDocumentResponse';
export * from './withholidingTaxDocumentResponseData';
export * from './withholidingTaxItem';

import localVarRequest = require('request');

import { AttachmentResponse } from './attachmentResponse';
import { AttachmentResponseData } from './attachmentResponseData';
import { AuthenResponse } from './authenResponse';
import { BusinessCategory } from './businessCategory';
import { Contact } from './contact';
import { ContactResponse } from './contactResponse';
import { ContactResponseAllOf } from './contactResponseAllOf';
import { DeleteResponse } from './deleteResponse';
import { DeleteResponseData } from './deleteResponseData';
import { Document } from './document';
import { DocumentResponse } from './documentResponse';
import { ExpenseDocument } from './expenseDocument';
import { ExpenseDocumentResponse } from './expenseDocumentResponse';
import { ExpenseInlineDocument } from './expenseInlineDocument';
import { ExpenseInlineDocumentResponse } from './expenseInlineDocumentResponse';
import { ExpenseInlineProductItem } from './expenseInlineProductItem';
import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
import { InlineDocument } from './inlineDocument';
import { InlineDocumentAllOf } from './inlineDocumentAllOf';
import { InlineDocumentResponse } from './inlineDocumentResponse';
import { InlineDocumentResponseAllOf } from './inlineDocumentResponseAllOf';
import { InlineDocumentResponseAllOfData } from './inlineDocumentResponseAllOfData';
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
import { PaymentDocument } from './paymentDocument';
import { PaymentDocumentResponse } from './paymentDocumentResponse';
import { Product } from './product';
import { ProductItem } from './productItem';
import { ProductResponse } from './productResponse';
import { ProductResponseData } from './productResponseData';
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
import { SimpleProductItem } from './simpleProductItem';
import { StatusDocument } from './statusDocument';
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
    "AttachmentResponse": AttachmentResponse,
    "AttachmentResponseData": AttachmentResponseData,
    "AuthenResponse": AuthenResponse,
    "BusinessCategory": BusinessCategory,
    "Contact": Contact,
    "ContactResponse": ContactResponse,
    "ContactResponseAllOf": ContactResponseAllOf,
    "DeleteResponse": DeleteResponse,
    "DeleteResponseData": DeleteResponseData,
    "Document": Document,
    "DocumentResponse": DocumentResponse,
    "ExpenseDocument": ExpenseDocument,
    "ExpenseDocumentResponse": ExpenseDocumentResponse,
    "ExpenseInlineDocument": ExpenseInlineDocument,
    "ExpenseInlineDocumentResponse": ExpenseInlineDocumentResponse,
    "ExpenseInlineProductItem": ExpenseInlineProductItem,
    "ExpenseSimpleProductItem": ExpenseSimpleProductItem,
    "InlineDocument": InlineDocument,
    "InlineDocumentAllOf": InlineDocumentAllOf,
    "InlineDocumentResponse": InlineDocumentResponse,
    "InlineDocumentResponseAllOf": InlineDocumentResponseAllOf,
    "InlineDocumentResponseAllOfData": InlineDocumentResponseAllOfData,
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
    "PaymentDocument": PaymentDocument,
    "PaymentDocumentResponse": PaymentDocumentResponse,
    "Product": Product,
    "ProductItem": ProductItem,
    "ProductResponse": ProductResponse,
    "ProductResponseData": ProductResponseData,
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
    "SimpleProductItem": SimpleProductItem,
    "StatusDocument": StatusDocument,
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