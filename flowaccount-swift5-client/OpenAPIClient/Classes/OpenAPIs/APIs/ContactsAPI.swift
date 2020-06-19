//
// ContactsAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation



open class ContactsAPI {
    /**
     Get list all contacts.
     
     - parameter authorization: (header)  
     - parameter currentPage: (query) Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (optional)
     - parameter pageSize: (query) Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; (optional)
     - parameter sortBy: (query) Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     - parameter filter: (query) Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func contactsGet(authorization: String, currentPage: Int? = nil, pageSize: Int? = nil, sortBy: String? = nil, filter: String? = nil, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ContactResponse?,_ error: Error?) -> Void)) {
        contactsGetWithRequestBuilder(authorization: authorization, currentPage: currentPage, pageSize: pageSize, sortBy: sortBy, filter: filter).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get list all contacts.
     - GET /contacts
     - parameter authorization: (header)  
     - parameter currentPage: (query) Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (optional)
     - parameter pageSize: (query) Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; (optional)
     - parameter sortBy: (query) Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     - parameter filter: (query) Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     - returns: RequestBuilder<ContactResponse> 
     */
    open class func contactsGetWithRequestBuilder(authorization: String, currentPage: Int? = nil, pageSize: Int? = nil, sortBy: String? = nil, filter: String? = nil) -> RequestBuilder<ContactResponse> {
        let path = "/contacts"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
            "currentPage": currentPage?.encodeToJSON(), 
            "pageSize": pageSize?.encodeToJSON(), 
            "sortBy": sortBy?.encodeToJSON(), 
            "filter": filter?.encodeToJSON()
        ])
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ContactResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Delete contacts.
     
     - parameter authorization: (header)  
     - parameter id: (path) เลข Id Contact 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func contactsIdDelete(authorization: String, id: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: DeleteResponse?,_ error: Error?) -> Void)) {
        contactsIdDeleteWithRequestBuilder(authorization: authorization, id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete contacts.
     - DELETE /contacts/{id}
     - parameter authorization: (header)  
     - parameter id: (path) เลข Id Contact 
     - returns: RequestBuilder<DeleteResponse> 
     */
    open class func contactsIdDeleteWithRequestBuilder(authorization: String, id: String) -> RequestBuilder<DeleteResponse> {
        var path = "/contacts/{id}"
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
     Get contacts.
     
     - parameter authorization: (header)  
     - parameter id: (path) เลข Id Contact 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func contactsIdGet(authorization: String, id: String, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ContactResponse?,_ error: Error?) -> Void)) {
        contactsIdGetWithRequestBuilder(authorization: authorization, id: id).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get contacts.
     - GET /contacts/{id}
     - parameter authorization: (header)  
     - parameter id: (path) เลข Id Contact 
     - returns: RequestBuilder<ContactResponse> 
     */
    open class func contactsIdGetWithRequestBuilder(authorization: String, id: String) -> RequestBuilder<ContactResponse> {
        var path = "/contacts/{id}"
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

        let requestBuilder: RequestBuilder<ContactResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false, headers: headerParameters)
    }

    /**
     Update contacts.
     
     - parameter authorization: (header)  
     - parameter id: (path) เลข Id Contact 
     - parameter contact: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func contactsIdPut(authorization: String, id: String, contact: Contact, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ContactResponse?,_ error: Error?) -> Void)) {
        contactsIdPutWithRequestBuilder(authorization: authorization, id: id, contact: contact).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Update contacts.
     - PUT /contacts/{id}
     - parameter authorization: (header)  
     - parameter id: (path) เลข Id Contact 
     - parameter contact: (body)  
     - returns: RequestBuilder<ContactResponse> 
     */
    open class func contactsIdPutWithRequestBuilder(authorization: String, id: String, contact: Contact) -> RequestBuilder<ContactResponse> {
        var path = "/contacts/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: contact)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ContactResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PUT", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

    /**
     Create contacts
     
     - parameter authorization: (header)  
     - parameter contact: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func contactsPost(authorization: String, contact: Contact, apiResponseQueue: DispatchQueue = OpenAPIClientAPI.apiResponseQueue, completion: @escaping ((_ data: ContactResponse?,_ error: Error?) -> Void)) {
        contactsPostWithRequestBuilder(authorization: authorization, contact: contact).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create contacts
     - POST /contacts
     - parameter authorization: (header)  
     - parameter contact: (body)  
     - returns: RequestBuilder<ContactResponse> 
     */
    open class func contactsPostWithRequestBuilder(authorization: String, contact: Contact) -> RequestBuilder<ContactResponse> {
        let path = "/contacts"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: contact)

        let url = URLComponents(string: URLString)
        let nillableHeaders: [String: Any?] = [
            "Authorization": authorization.encodeToJSON()
        ]
        let headerParameters = APIHelper.rejectNilHeaders(nillableHeaders)

        let requestBuilder: RequestBuilder<ContactResponse>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true, headers: headerParameters)
    }

}
