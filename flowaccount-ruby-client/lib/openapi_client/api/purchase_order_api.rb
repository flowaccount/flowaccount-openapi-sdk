=begin
#FlowAccount Open API

## Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64

The version of the OpenAPI document: 2-oas3
Contact: developer_support@flowaccount.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1

=end

require 'cgi'

module OpenapiClient
  class PurchaseOrderApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Send email purchase order document.
    # ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param send_email_coppies [SendEmailCoppies] 
    # @param [Hash] opts the optional parameters
    # @return [SendEmailResponse]
    def purchases_orders_email_document_post(authorization, send_email_coppies, opts = {})
      data, _status_code, _headers = purchases_orders_email_document_post_with_http_info(authorization, send_email_coppies, opts)
      data
    end

    # Send email purchase order document.
    # ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param send_email_coppies [SendEmailCoppies] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(SendEmailResponse, Integer, Hash)>] SendEmailResponse data, response status code and response headers
    def purchases_orders_email_document_post_with_http_info(authorization, send_email_coppies, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_email_document_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_email_document_post"
      end
      # verify the required parameter 'send_email_coppies' is set
      if @api_client.config.client_side_validation && send_email_coppies.nil?
        fail ArgumentError, "Missing the required parameter 'send_email_coppies' when calling PurchaseOrderApi.purchases_orders_email_document_post"
      end
      # resource path
      local_var_path = '/purchases-orders/email-document'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] || @api_client.object_to_http_body(send_email_coppies) 

      # return_type
      return_type = opts[:return_type] || 'SendEmailResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_email_document_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get list all purchase order documents.
    # เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ
    # @param current_page [Integer] Query current page document purchase orders. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases-orders?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases-orders?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
    # @param page_size [Integer] Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?pageSize&#x3D;20 &lt;/ex&gt;
    # @param authorization [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :sort_by Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;
    # @option opts [String] :filter 
    # @return [AllDocumentResponse]
    def purchases_orders_get(current_page, page_size, authorization, opts = {})
      data, _status_code, _headers = purchases_orders_get_with_http_info(current_page, page_size, authorization, opts)
      data
    end

    # Get list all purchase order documents.
    # เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ
    # @param current_page [Integer] Query current page document purchase orders. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases-orders?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases-orders?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
    # @param page_size [Integer] Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?pageSize&#x3D;20 &lt;/ex&gt;
    # @param authorization [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :sort_by Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;
    # @option opts [String] :filter 
    # @return [Array<(AllDocumentResponse, Integer, Hash)>] AllDocumentResponse data, response status code and response headers
    def purchases_orders_get_with_http_info(current_page, page_size, authorization, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_get ...'
      end
      # verify the required parameter 'current_page' is set
      if @api_client.config.client_side_validation && current_page.nil?
        fail ArgumentError, "Missing the required parameter 'current_page' when calling PurchaseOrderApi.purchases_orders_get"
      end
      # verify the required parameter 'page_size' is set
      if @api_client.config.client_side_validation && page_size.nil?
        fail ArgumentError, "Missing the required parameter 'page_size' when calling PurchaseOrderApi.purchases_orders_get"
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_get"
      end
      # resource path
      local_var_path = '/purchases-orders'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'currentPage'] = current_page
      query_params[:'pageSize'] = page_size
      query_params[:'sortBy'] = opts[:'sort_by'] if !opts[:'sort_by'].nil?
      query_params[:'filter'] = opts[:'filter'] if !opts[:'filter'].nil?

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] 

      # return_type
      return_type = opts[:return_type] || 'AllDocumentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Add Attachment to purchase order document.
    # แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] documentId หรือ recordId ของเอกสารที่ต้องการแนบ
    # @param [Hash] opts the optional parameters
    # @option opts [File] :file รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
    # @return [AttachmentResponse]
    def purchases_orders_id_attachment_post(authorization, id, opts = {})
      data, _status_code, _headers = purchases_orders_id_attachment_post_with_http_info(authorization, id, opts)
      data
    end

    # Add Attachment to purchase order document.
    # แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] documentId หรือ recordId ของเอกสารที่ต้องการแนบ
    # @param [Hash] opts the optional parameters
    # @option opts [File] :file รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
    # @return [Array<(AttachmentResponse, Integer, Hash)>] AttachmentResponse data, response status code and response headers
    def purchases_orders_id_attachment_post_with_http_info(authorization, id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_id_attachment_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_id_attachment_post"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PurchaseOrderApi.purchases_orders_id_attachment_post"
      end
      # resource path
      local_var_path = '/purchases-orders/{id}/attachment'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['multipart/form-data'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}
      form_params['file'] = opts[:'file'] if !opts[:'file'].nil?

      # http body (model)
      post_body = opts[:body] 

      # return_type
      return_type = opts[:return_type] || 'AttachmentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_id_attachment_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Delete purchase order document.
    # ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param [Hash] opts the optional parameters
    # @return [DeleteResponse]
    def purchases_orders_id_delete(authorization, id, opts = {})
      data, _status_code, _headers = purchases_orders_id_delete_with_http_info(authorization, id, opts)
      data
    end

    # Delete purchase order document.
    # ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param [Hash] opts the optional parameters
    # @return [Array<(DeleteResponse, Integer, Hash)>] DeleteResponse data, response status code and response headers
    def purchases_orders_id_delete_with_http_info(authorization, id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_id_delete ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_id_delete"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PurchaseOrderApi.purchases_orders_id_delete"
      end
      # resource path
      local_var_path = '/purchases-orders/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] 

      # return_type
      return_type = opts[:return_type] || 'DeleteResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_id_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get purchase order document.
    # เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param [Hash] opts the optional parameters
    # @return [InlineDocumentResponse]
    def purchases_orders_id_get(authorization, id, opts = {})
      data, _status_code, _headers = purchases_orders_id_get_with_http_info(authorization, id, opts)
      data
    end

    # Get purchase order document.
    # เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param [Hash] opts the optional parameters
    # @return [Array<(InlineDocumentResponse, Integer, Hash)>] InlineDocumentResponse data, response status code and response headers
    def purchases_orders_id_get_with_http_info(authorization, id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_id_get ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_id_get"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PurchaseOrderApi.purchases_orders_id_get"
      end
      # resource path
      local_var_path = '/purchases-orders/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] 

      # return_type
      return_type = opts[:return_type] || 'InlineDocumentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Edit purchase order document.
    # แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param update_inline_document [UpdateInlineDocument] 
    # @param [Hash] opts the optional parameters
    # @return [InlineDocumentResponse]
    def purchases_orders_id_put(authorization, id, update_inline_document, opts = {})
      data, _status_code, _headers = purchases_orders_id_put_with_http_info(authorization, id, update_inline_document, opts)
      data
    end

    # Edit purchase order document.
    # แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param update_inline_document [UpdateInlineDocument] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(InlineDocumentResponse, Integer, Hash)>] InlineDocumentResponse data, response status code and response headers
    def purchases_orders_id_put_with_http_info(authorization, id, update_inline_document, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_id_put ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_id_put"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PurchaseOrderApi.purchases_orders_id_put"
      end
      # verify the required parameter 'update_inline_document' is set
      if @api_client.config.client_side_validation && update_inline_document.nil?
        fail ArgumentError, "Missing the required parameter 'update_inline_document' when calling PurchaseOrderApi.purchases_orders_id_put"
      end
      # resource path
      local_var_path = '/purchases-orders/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] || @api_client.object_to_http_body(update_inline_document) 

      # return_type
      return_type = opts[:return_type] || 'InlineDocumentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:PUT, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_id_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Change status of purchase order document.
    # เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param status_id [String] เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก
    # @param [Hash] opts the optional parameters
    # @return [InlineDocumentResponse]
    def purchases_orders_id_status_status_id_post(authorization, id, status_id, opts = {})
      data, _status_code, _headers = purchases_orders_id_status_status_id_post_with_http_info(authorization, id, status_id, opts)
      data
    end

    # Change status of purchase order document.
    # เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param status_id [String] เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก
    # @param [Hash] opts the optional parameters
    # @return [Array<(InlineDocumentResponse, Integer, Hash)>] InlineDocumentResponse data, response status code and response headers
    def purchases_orders_id_status_status_id_post_with_http_info(authorization, id, status_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_id_status_status_id_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_id_status_status_id_post"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling PurchaseOrderApi.purchases_orders_id_status_status_id_post"
      end
      # verify the required parameter 'status_id' is set
      if @api_client.config.client_side_validation && status_id.nil?
        fail ArgumentError, "Missing the required parameter 'status_id' when calling PurchaseOrderApi.purchases_orders_id_status_status_id_post"
      end
      # resource path
      local_var_path = '/purchases-orders/{id}/status/{statusId}'.sub('{' + 'id' + '}', CGI.escape(id.to_s)).sub('{' + 'statusId' + '}', CGI.escape(status_id.to_s))

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] 

      # return_type
      return_type = opts[:return_type] || 'InlineDocumentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_id_status_status_id_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Create purchase order document with discount and tax inline.
    # สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>
    # @param authorization [String] 
    # @param inline_document [InlineDocument] 
    # @param [Hash] opts the optional parameters
    # @return [InlineDocumentResponse]
    def purchases_orders_inline_post(authorization, inline_document, opts = {})
      data, _status_code, _headers = purchases_orders_inline_post_with_http_info(authorization, inline_document, opts)
      data
    end

    # Create purchase order document with discount and tax inline.
    # สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;
    # @param authorization [String] 
    # @param inline_document [InlineDocument] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(InlineDocumentResponse, Integer, Hash)>] InlineDocumentResponse data, response status code and response headers
    def purchases_orders_inline_post_with_http_info(authorization, inline_document, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_inline_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_inline_post"
      end
      # verify the required parameter 'inline_document' is set
      if @api_client.config.client_side_validation && inline_document.nil?
        fail ArgumentError, "Missing the required parameter 'inline_document' when calling PurchaseOrderApi.purchases_orders_inline_post"
      end
      # resource path
      local_var_path = '/purchases-orders/inline'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] || @api_client.object_to_http_body(inline_document) 

      # return_type
      return_type = opts[:return_type] || 'InlineDocumentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_inline_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Create purchase order document.
    # สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>
    # @param authorization [String] 
    # @param simple_document [SimpleDocument] 
    # @param [Hash] opts the optional parameters
    # @return [SimpleDocumentResponse]
    def purchases_orders_post(authorization, simple_document, opts = {})
      data, _status_code, _headers = purchases_orders_post_with_http_info(authorization, simple_document, opts)
      data
    end

    # Create purchase order document.
    # สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) &lt;br&gt;
    # @param authorization [String] 
    # @param simple_document [SimpleDocument] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(SimpleDocumentResponse, Integer, Hash)>] SimpleDocumentResponse data, response status code and response headers
    def purchases_orders_post_with_http_info(authorization, simple_document, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_post"
      end
      # verify the required parameter 'simple_document' is set
      if @api_client.config.client_side_validation && simple_document.nil?
        fail ArgumentError, "Missing the required parameter 'simple_document' when calling PurchaseOrderApi.purchases_orders_post"
      end
      # resource path
      local_var_path = '/purchases-orders'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] || @api_client.object_to_http_body(simple_document) 

      # return_type
      return_type = opts[:return_type] || 'SimpleDocumentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Share link purchase order document.
    # แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
    # @param authorization [String] 
    # @param share_document [ShareDocument] 
    # @param [Hash] opts the optional parameters
    # @return [ShareDocumentResponse]
    def purchases_orders_sharedocument_post(authorization, share_document, opts = {})
      data, _status_code, _headers = purchases_orders_sharedocument_post_with_http_info(authorization, share_document, opts)
      data
    end

    # Share link purchase order document.
    # แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
    # @param authorization [String] 
    # @param share_document [ShareDocument] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ShareDocumentResponse, Integer, Hash)>] ShareDocumentResponse data, response status code and response headers
    def purchases_orders_sharedocument_post_with_http_info(authorization, share_document, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: PurchaseOrderApi.purchases_orders_sharedocument_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling PurchaseOrderApi.purchases_orders_sharedocument_post"
      end
      # verify the required parameter 'share_document' is set
      if @api_client.config.client_side_validation && share_document.nil?
        fail ArgumentError, "Missing the required parameter 'share_document' when calling PurchaseOrderApi.purchases_orders_sharedocument_post"
      end
      # resource path
      local_var_path = '/purchases-orders/sharedocument'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])
      header_params[:'Authorization'] = authorization

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:body] || @api_client.object_to_http_body(share_document) 

      # return_type
      return_type = opts[:return_type] || 'ShareDocumentResponse' 

      # auth_names
      auth_names = opts[:auth_names] || []

      new_options = opts.merge(
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: PurchaseOrderApi#purchases_orders_sharedocument_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
