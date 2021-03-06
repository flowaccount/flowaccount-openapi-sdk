//
// ExpensesAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation



open class ExpensesAPI {
    /**
     Accounting categories expenses document.
     
     - parameter authorization: (header)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesCategoriesAccountingGet(authorization: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: BusinessCategory?,_ error: Error?) -> Void)) {
        expensesCategoriesAccountingGetWithRequestBuilder(authorization: authorization).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Accounting categories expenses document.
     - GET /expenses/categories/accounting
     - เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)
     - parameter authorization: (header)  
     - returns: RequestBuilder<BusinessCategory> 
     */
    open class func expensesCategoriesAccountingGetWithRequestBuilder(authorization: String) -> RequestBuilder<BusinessCategory> {
        let path = "/expenses/categories/accounting"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<BusinessCategory>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Business categories expenses document.
     
     - parameter authorization: (header)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesCategoriesBusinessGet(authorization: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: BusinessCategory?,_ error: Error?) -> Void)) {
        expensesCategoriesBusinessGetWithRequestBuilder(authorization: authorization).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Business categories expenses document.
     - GET /expenses/categories/business
     - เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)
     - parameter authorization: (header)  
     - returns: RequestBuilder<BusinessCategory> 
     */
    open class func expensesCategoriesBusinessGetWithRequestBuilder(authorization: String) -> RequestBuilder<BusinessCategory> {
        let path = "/expenses/categories/business"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<BusinessCategory>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Send email expenses document.
     
     - parameter authorization: (header)  
     - parameter sendEmailSimple: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesEmailDocumentPost(authorization: String, sendEmailSimple: SendEmailSimple, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: SendEmailResponse?,_ error: Error?) -> Void)) {
        expensesEmailDocumentPostWithRequestBuilder(authorization: authorization, sendEmailSimple: sendEmailSimple).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Send email expenses document.
     - POST /expenses/email-document
     - ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
     - parameter authorization: (header)  
     - parameter sendEmailSimple: (body)  
     - returns: RequestBuilder<SendEmailResponse> 
     */
    open class func expensesEmailDocumentPostWithRequestBuilder(authorization: String, sendEmailSimple: SendEmailSimple) -> RequestBuilder<SendEmailResponse> {
        let path = "/expenses/email-document"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: sendEmailSimple)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<SendEmailResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Get list all expenses documents.
     
     - parameter currentPage: (query) Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; 
     - parameter pageSize: (query) Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; 
     - parameter authorization: (header)  
     - parameter sortBy: (query) Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     - parameter filter: (query) Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: AllExpenseDocumentResponse?,_ error: Error?) -> Void)) {
        expensesGetWithRequestBuilder(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get list all expenses documents.
     - GET /expenses
     - เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ
     - parameter currentPage: (query) Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; 
     - parameter pageSize: (query) Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; 
     - parameter authorization: (header)  
     - parameter sortBy: (query) Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     - parameter filter: (query) Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; (optional)
     - returns: RequestBuilder<AllExpenseDocumentResponse> 
     */
    open class func expensesGetWithRequestBuilder(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil) -> RequestBuilder<AllExpenseDocumentResponse> {
        let path = "/expenses"
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

        let requestBuilder: RequestBuilder<AllExpenseDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Attachment to expenses document.
     
     - parameter authorization: (header)  
     - parameter id: (path)  
     - parameter file: (form)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesIdAttachmentPost(authorization: String, id: String, file: URL? = nil, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: AttachmentResponse?,_ error: Error?) -> Void)) {
        expensesIdAttachmentPostWithRequestBuilder(authorization: authorization, id: id, file: file).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Attachment to expenses document.
     - POST /expenses/{id}/attachment
     - แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ
     - parameter authorization: (header)  
     - parameter id: (path)  
     - parameter file: (form)  (optional)
     - returns: RequestBuilder<AttachmentResponse> 
     */
    open class func expensesIdAttachmentPostWithRequestBuilder(authorization: String, id: String, file: URL? = nil) -> RequestBuilder<AttachmentResponse> {
        var path = "/expenses/{id}/attachment"
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
     Delete expenses document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesIdDelete(authorization: String, id: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: DeleteResponse?,_ error: Error?) -> Void)) {
        expensesIdDeleteWithRequestBuilder(authorization: authorization, id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete expenses document.
     - DELETE /expenses/{id}
     - ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - returns: RequestBuilder<DeleteResponse> 
     */
    open class func expensesIdDeleteWithRequestBuilder(authorization: String, id: String) -> RequestBuilder<DeleteResponse> {
        var path = "/expenses/{id}"
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
     Get expenses document.
     
     - parameter authorization: (header)  
     - parameter id: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesIdGet(authorization: String, id: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: AllExpenseDocumentResponse?,_ error: Error?) -> Void)) {
        expensesIdGetWithRequestBuilder(authorization: authorization, id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get expenses document.
     - GET /expenses/{id}
     - เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ
     - parameter authorization: (header)  
     - parameter id: (path)  
     - returns: RequestBuilder<AllExpenseDocumentResponse> 
     */
    open class func expensesIdGetWithRequestBuilder(authorization: String, id: String) -> RequestBuilder<AllExpenseDocumentResponse> {
        var path = "/expenses/{id}"
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

        let requestBuilder: RequestBuilder<AllExpenseDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Change status is paid expenses document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId หรือ documentId 
     - parameter paymentPaidDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesIdPaymentPost(authorization: String, id: String, paymentPaidDocument: PaymentPaidDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ExpenseSimpleDocumentResponse?,_ error: Error?) -> Void)) {
        expensesIdPaymentPostWithRequestBuilder(authorization: authorization, id: id, paymentPaidDocument: paymentPaidDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Change status is paid expenses document.
     - POST /expenses/{id}/payment
     - ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId หรือ documentId 
     - parameter paymentPaidDocument: (body)  
     - returns: RequestBuilder<ExpenseSimpleDocumentResponse> 
     */
    open class func expensesIdPaymentPostWithRequestBuilder(authorization: String, id: String, paymentPaidDocument: PaymentPaidDocument) -> RequestBuilder<ExpenseSimpleDocumentResponse> {
        var path = "/expenses/{id}/payment"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: paymentPaidDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ExpenseSimpleDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Edit expenses document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter updateExpenseDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesIdPut(authorization: String, id: String, updateExpenseDocument: UpdateExpenseDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ExpenseInlineDocumentResponse?,_ error: Error?) -> Void)) {
        expensesIdPutWithRequestBuilder(authorization: authorization, id: id, updateExpenseDocument: updateExpenseDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Edit expenses document.
     - PUT /expenses/{id}
     - แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter updateExpenseDocument: (body)  
     - returns: RequestBuilder<ExpenseInlineDocumentResponse> 
     */
    open class func expensesIdPutWithRequestBuilder(authorization: String, id: String, updateExpenseDocument: UpdateExpenseDocument) -> RequestBuilder<ExpenseInlineDocumentResponse> {
        var path = "/expenses/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: updateExpenseDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ExpenseInlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PUT", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Change status expenses document.
     
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter statusId: (path) เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesIdStatusStatusIdPost(authorization: String, id: String, statusId: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ExpenseInlineDocumentResponse?,_ error: Error?) -> Void)) {
        expensesIdStatusStatusIdPostWithRequestBuilder(authorization: authorization, id: id, statusId: statusId).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Change status expenses document.
     - POST /expenses/{id}/status/{statusId}
     - เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)
     - parameter authorization: (header)  
     - parameter id: (path) ID เอกสารใช้ recordId 
     - parameter statusId: (path) เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก 
     - returns: RequestBuilder<ExpenseInlineDocumentResponse> 
     */
    open class func expensesIdStatusStatusIdPostWithRequestBuilder(authorization: String, id: String, statusId: String) -> RequestBuilder<ExpenseInlineDocumentResponse> {
        var path = "/expenses/{id}/status/{statusId}"
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

        let requestBuilder: RequestBuilder<ExpenseInlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Create expenses document inline discount or inline vat.
     
     - parameter authorization: (header)  
     - parameter expenseInlineDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesInlinePost(authorization: String, expenseInlineDocument: ExpenseInlineDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ExpenseInlineDocumentResponse?,_ error: Error?) -> Void)) {
        expensesInlinePostWithRequestBuilder(authorization: authorization, expenseInlineDocument: expenseInlineDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create expenses document inline discount or inline vat.
     - POST /expenses/inline
     - สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
     - parameter authorization: (header)  
     - parameter expenseInlineDocument: (body)  
     - returns: RequestBuilder<ExpenseInlineDocumentResponse> 
     */
    open class func expensesInlinePostWithRequestBuilder(authorization: String, expenseInlineDocument: ExpenseInlineDocument) -> RequestBuilder<ExpenseInlineDocumentResponse> {
        let path = "/expenses/inline"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: expenseInlineDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ExpenseInlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Create expenses document inline discount or inline vat with payment.
     
     - parameter authorization: (header)  
     - parameter expenseInlineDocumentWithPaymentPaid: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesInlineWithPaymentPost(authorization: String, expenseInlineDocumentWithPaymentPaid: ExpenseInlineDocumentWithPaymentPaid, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ExpenseInlineDocumentResponse?,_ error: Error?) -> Void)) {
        expensesInlineWithPaymentPostWithRequestBuilder(authorization: authorization, expenseInlineDocumentWithPaymentPaid: expenseInlineDocumentWithPaymentPaid).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create expenses document inline discount or inline vat with payment.
     - POST /expenses/inline/with-payment
     - สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)
     - parameter authorization: (header)  
     - parameter expenseInlineDocumentWithPaymentPaid: (body)  
     - returns: RequestBuilder<ExpenseInlineDocumentResponse> 
     */
    open class func expensesInlineWithPaymentPostWithRequestBuilder(authorization: String, expenseInlineDocumentWithPaymentPaid: ExpenseInlineDocumentWithPaymentPaid) -> RequestBuilder<ExpenseInlineDocumentResponse> {
        let path = "/expenses/inline/with-payment"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: expenseInlineDocumentWithPaymentPaid)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ExpenseInlineDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Create expenses document.
     
     - parameter authorization: (header)  
     - parameter expenseSimpleDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesPost(authorization: String, expenseSimpleDocument: ExpenseSimpleDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ExpenseSimpleDocumentResponse?,_ error: Error?) -> Void)) {
        expensesPostWithRequestBuilder(authorization: authorization, expenseSimpleDocument: expenseSimpleDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create expenses document.
     - POST /expenses
     - สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
     - parameter authorization: (header)  
     - parameter expenseSimpleDocument: (body)  
     - returns: RequestBuilder<ExpenseSimpleDocumentResponse> 
     */
    open class func expensesPostWithRequestBuilder(authorization: String, expenseSimpleDocument: ExpenseSimpleDocument) -> RequestBuilder<ExpenseSimpleDocumentResponse> {
        let path = "/expenses"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: expenseSimpleDocument)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ExpenseSimpleDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Share link expenses document.
     
     - parameter authorization: (header)  
     - parameter shareDocument: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesSharedocumentPost(authorization: String, shareDocument: ShareDocument, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ShareDocumentResponse?,_ error: Error?) -> Void)) {
        expensesSharedocumentPostWithRequestBuilder(authorization: authorization, shareDocument: shareDocument).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Share link expenses document.
     - POST /expenses/sharedocument
     - แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
     - parameter authorization: (header)  
     - parameter shareDocument: (body)  
     - returns: RequestBuilder<ShareDocumentResponse> 
     */
    open class func expensesSharedocumentPostWithRequestBuilder(authorization: String, shareDocument: ShareDocument) -> RequestBuilder<ShareDocumentResponse> {
        let path = "/expenses/sharedocument"
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
     Create expenses document with payment.
     
     - parameter authorization: (header)  
     - parameter expenseSimpleDocumentWithPaymentPaid: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func expensesWithPaymentPost(authorization: String, expenseSimpleDocumentWithPaymentPaid: ExpenseSimpleDocumentWithPaymentPaid, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ExpenseSimpleDocumentResponse?,_ error: Error?) -> Void)) {
        expensesWithPaymentPostWithRequestBuilder(authorization: authorization, expenseSimpleDocumentWithPaymentPaid: expenseSimpleDocumentWithPaymentPaid).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create expenses document with payment.
     - POST /expenses/with-payment
     - สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)
     - parameter authorization: (header)  
     - parameter expenseSimpleDocumentWithPaymentPaid: (body)  
     - returns: RequestBuilder<ExpenseSimpleDocumentResponse> 
     */
    open class func expensesWithPaymentPostWithRequestBuilder(authorization: String, expenseSimpleDocumentWithPaymentPaid: ExpenseSimpleDocumentWithPaymentPaid) -> RequestBuilder<ExpenseSimpleDocumentResponse> {
        let path = "/expenses/with-payment"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: expenseSimpleDocumentWithPaymentPaid)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ExpenseSimpleDocumentResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

}
