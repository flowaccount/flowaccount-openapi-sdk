//
// CashInvoiceAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation



open class CashInvoiceAPI {
    /**
     Send email cash invoices document.
     
     - parameter authorization: (header)  
     - parameter sendEmailCoppies: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesEmailDocumentPost(authorization: String, sendEmailCoppies: SendEmailCoppies, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: SendEmailResponse?,_ error: Error?) -> Void)) {
        cashInvoicesEmailDocumentPostWithRequestBuilder(authorization: authorization, sendEmailCoppies: sendEmailCoppies).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Send email cash invoices document.
     - POST /cash-invoices/email-document
     - ส่งเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
     - parameter authorization: (header)  
     - parameter sendEmailCoppies: (body)  
     - returns: RequestBuilder<SendEmailResponse> 
     */
    open class func cashInvoicesEmailDocumentPostWithRequestBuilder(authorization: String, sendEmailCoppies: SendEmailCoppies) -> RequestBuilder<SendEmailResponse> {
        let path = "/cash-invoices/email-document"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: sendEmailCoppies)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<SendEmailResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Get all cash invoices documents
     
     - parameter currentPage: (query) Query current page document cash invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/cash-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/cash-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; 
     - parameter pageSize: (query) Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?pageSize&#x3D;20 &lt;/ex&gt; 
     - parameter authorization: (header)  
     - parameter sortBy: (query) Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     - parameter filter: (query) Query filter cash-invoices. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: AllDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesGetWithRequestBuilder(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get all cash invoices documents
     - GET /cash-invoices
     - เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ทั้งหมดในระบบ
     - parameter currentPage: (query) Query current page document cash invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/cash-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/cash-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; 
     - parameter pageSize: (query) Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?pageSize&#x3D;20 &lt;/ex&gt; 
     - parameter authorization: (header)  
     - parameter sortBy: (query) Query document cash invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/cash-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     - parameter filter: (query) Query filter cash-invoices. &lt;br&gt;Example Pattern: &lt;ex&gt; /cash-invoices?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; (optional)
     - returns: RequestBuilder<AllDocumentResponse> 
     */
    open class func cashInvoicesGetWithRequestBuilder(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil) -> RequestBuilder<AllDocumentResponse> {
        let path = "/cash-invoices"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
            "currentPage": currentPage.encodeToJSON(), 
            "pageSize": pageSize.encodeToJSON(), 
            "sortBy": sortBy?.encodeToJSON(), 
            "filter": filter?.encodeToJSON()
        ])
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<AllDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Attachment cash invoices document.
     
     - parameter authorization: (header)  
     - parameter id: (path) documentId หรือ recordId ของเอกสารที่ต้องการแนบ 
     - parameter file: (form) รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesIdAttachmentPost(authorization: String, id: String, file: URL? = nil, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: AttachmentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesIdAttachmentPostWithRequestBuilder(authorization: authorization, id: id, file: file).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Attachment cash invoices document.
     - POST /cash-invoices/{id}/attachment
     - แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) ตามเลขที่เอกสารที่ต้องการ
     - parameter authorization: (header)  
     - parameter id: (path) documentId หรือ recordId ของเอกสารที่ต้องการแนบ 
     - parameter file: (form) รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)
     - returns: RequestBuilder<AttachmentResponse> 
     */
    open class func cashInvoicesIdAttachmentPostWithRequestBuilder(authorization: String, id: String, file: URL? = nil) -> RequestBuilder<AttachmentResponse> {
        var path = "/cash-invoices/{id}/attachment"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let formParams: [String:Any?] = [
            "file": file?.encodeToJSON()
        ]

        let nonNullParameters = APIHelper.rejectNil(formParams)
        let parameters = APIHelper.convertBoolToString(nonNullParameters)
        
        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<AttachmentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Delete cash invoices document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesIdDelete(authorization: String, id: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: DeleteResponse?,_ error: Error?) -> Void)) {
        cashInvoicesIdDeleteWithRequestBuilder(authorization: authorization, id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete cash invoices document.
     - DELETE /cash-invoices/{id}
     - ลบ เอกสารใบกำกับ/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - returns: RequestBuilder<DeleteResponse> 
     */
    open class func cashInvoicesIdDeleteWithRequestBuilder(authorization: String, id: String) -> RequestBuilder<DeleteResponse> {
        var path = "/cash-invoices/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<DeleteResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "DELETE", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Get cash invoices document.
     
     - parameter authorization: (header)  
     - parameter id: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesIdGet(authorization: String, id: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: InlineDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesIdGetWithRequestBuilder(authorization: authorization, id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get cash invoices document.
     - GET /cash-invoices/{id}
     - เรียกดูข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) ตามเลขที่เอกสารที่ต้องการ
     - parameter authorization: (header)  
     - parameter id: (path)  
     - returns: RequestBuilder<InlineDocumentResponse> 
     */
    open class func cashInvoicesIdGetWithRequestBuilder(authorization: String, id: String) -> RequestBuilder<InlineDocumentResponse> {
        var path = "/cash-invoices/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<InlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Change status is paid cash invoices document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId หรือ documentId 
     - parameter paymentReceivingDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesIdPaymentPost(authorization: String, id: String, paymentReceivingDocument: PaymentReceivingDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: InlineDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesIdPaymentPostWithRequestBuilder(authorization: authorization, id: id, paymentReceivingDocument: paymentReceivingDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Change status is paid cash invoices document.
     - POST /cash-invoices/{id}/payment
     - เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId หรือ documentId 
     - parameter paymentReceivingDocument: (body)  
     - returns: RequestBuilder<InlineDocumentResponse> 
     */
    open class func cashInvoicesIdPaymentPostWithRequestBuilder(authorization: String, id: String, paymentReceivingDocument: PaymentReceivingDocument) -> RequestBuilder<InlineDocumentResponse> {
        var path = "/cash-invoices/{id}/payment"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: paymentReceivingDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<InlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Edit cash invoices document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter updateInlineDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesIdPut(authorization: String, id: String, updateInlineDocument: UpdateInlineDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: InlineDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesIdPutWithRequestBuilder(authorization: authorization, id: id, updateInlineDocument: updateInlineDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Edit cash invoices document.
     - PUT /cash-invoices/{id}
     - แก้ไขข้อมูลเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter updateInlineDocument: (body)  
     - returns: RequestBuilder<InlineDocumentResponse> 
     */
    open class func cashInvoicesIdPutWithRequestBuilder(authorization: String, id: String, updateInlineDocument: UpdateInlineDocument) -> RequestBuilder<InlineDocumentResponse> {
        var path = "/cash-invoices/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: updateInlineDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<InlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PUT", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Change status cash invoices document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter statusId: (path) เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesIdStatusStatusIdPost(authorization: String, id: String, statusId: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: InlineDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesIdStatusStatusIdPostWithRequestBuilder(authorization: authorization, id: id, statusId: statusId).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Change status cash invoices document.
     - POST /cash-invoices/{id}/status/{statusId}
     - เปลี่ยนสถานะของเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter statusId: (path) เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก 
     - returns: RequestBuilder<InlineDocumentResponse> 
     */
    open class func cashInvoicesIdStatusStatusIdPostWithRequestBuilder(authorization: String, id: String, statusId: String) -> RequestBuilder<InlineDocumentResponse> {
        var path = "/cash-invoices/{id}/status/{statusId}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let statusIdPreEscape = "\(APIHelper.mapValueToPathItem(statusId))"
        let statusIdPostEscape = statusIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{statusId}", with: statusIdPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<InlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Create cash invoices document inline discount or inline vat.
     
     - parameter authorization: (header)  
     - parameter inlineDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesInlinePost(authorization: String, inlineDocument: InlineDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: InlineDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesInlinePostWithRequestBuilder(authorization: authorization, inlineDocument: inlineDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create cash invoices document inline discount or inline vat.
     - POST /cash-invoices/inline
     - สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
     - parameter authorization: (header)  
     - parameter inlineDocument: (body)  
     - returns: RequestBuilder<InlineDocumentResponse> 
     */
    open class func cashInvoicesInlinePostWithRequestBuilder(authorization: String, inlineDocument: InlineDocument) -> RequestBuilder<InlineDocumentResponse> {
        let path = "/cash-invoices/inline"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: inlineDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<InlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Create cash invoices document inline discount or inline vat with payment.
     
     - parameter authorization: (header)  
     - parameter inlineDocumentWithPaymentReceiving: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesInlineWithPaymentPost(authorization: String, inlineDocumentWithPaymentReceiving: InlineDocumentWithPaymentReceiving, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: InlineDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesInlineWithPaymentPostWithRequestBuilder(authorization: authorization, inlineDocumentWithPaymentReceiving: inlineDocumentWithPaymentReceiving).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create cash invoices document inline discount or inline vat with payment.
     - POST /cash-invoices/inline/with-payment
     - สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (เงินสด) แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)
     - parameter authorization: (header)  
     - parameter inlineDocumentWithPaymentReceiving: (body)  
     - returns: RequestBuilder<InlineDocumentResponse> 
     */
    open class func cashInvoicesInlineWithPaymentPostWithRequestBuilder(authorization: String, inlineDocumentWithPaymentReceiving: InlineDocumentWithPaymentReceiving) -> RequestBuilder<InlineDocumentResponse> {
        let path = "/cash-invoices/inline/with-payment"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: inlineDocumentWithPaymentReceiving)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<InlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Create cash invoices document.
     
     - parameter authorization: (header)  
     - parameter simpleDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesPost(authorization: String, simpleDocument: SimpleDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: SimpleDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesPostWithRequestBuilder(authorization: authorization, simpleDocument: simpleDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create cash invoices document.
     - POST /cash-invoices
     - สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
     - parameter authorization: (header)  
     - parameter simpleDocument: (body)  
     - returns: RequestBuilder<SimpleDocumentResponse> 
     */
    open class func cashInvoicesPostWithRequestBuilder(authorization: String, simpleDocument: SimpleDocument) -> RequestBuilder<SimpleDocumentResponse> {
        let path = "/cash-invoices"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: simpleDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<SimpleDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Share link cash invoices document.
     
     - parameter authorization: (header)  
     - parameter shareDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesSharedocumentPost(authorization: String, shareDocument: ShareDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ShareDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesSharedocumentPostWithRequestBuilder(authorization: authorization, shareDocument: shareDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Share link cash invoices document.
     - POST /cash-invoices/sharedocument
     - แชร์ลิงค์ เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน(เงินสด) ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
     - parameter authorization: (header)  
     - parameter shareDocument: (body)  
     - returns: RequestBuilder<ShareDocumentResponse> 
     */
    open class func cashInvoicesSharedocumentPostWithRequestBuilder(authorization: String, shareDocument: ShareDocument) -> RequestBuilder<ShareDocumentResponse> {
        let path = "/cash-invoices/sharedocument"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: shareDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ShareDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Create cash invoices document with payment.
     
     - parameter authorization: (header)  
     - parameter simpleDocumentWithPaymentReceiving: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func cashInvoicesWithPaymentPost(authorization: String, simpleDocumentWithPaymentReceiving: SimpleDocumentWithPaymentReceiving, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: SimpleDocumentResponse?,_ error: Error?) -> Void)) {
        cashInvoicesWithPaymentPostWithRequestBuilder(authorization: authorization, simpleDocumentWithPaymentReceiving: simpleDocumentWithPaymentReceiving).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create cash invoices document with payment.
     - POST /cash-invoices/with-payment
     - สร้างเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน (ขายสด) พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)
     - parameter authorization: (header)  
     - parameter simpleDocumentWithPaymentReceiving: (body)  
     - returns: RequestBuilder<SimpleDocumentResponse> 
     */
    open class func cashInvoicesWithPaymentPostWithRequestBuilder(authorization: String, simpleDocumentWithPaymentReceiving: SimpleDocumentWithPaymentReceiving) -> RequestBuilder<SimpleDocumentResponse> {
        let path = "/cash-invoices/with-payment"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: simpleDocumentWithPaymentReceiving)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<SimpleDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

}