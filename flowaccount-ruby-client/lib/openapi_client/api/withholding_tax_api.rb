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
  class WithholdingTaxApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Send email withholding tax.
    # ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param send_email_simple [SendEmailSimple] 
    # @param [Hash] opts the optional parameters
    # @return [SendEmailResponse]
    def withholding_taxes_email_document_post(authorization, send_email_simple, opts = {})
      data, _status_code, _headers = withholding_taxes_email_document_post_with_http_info(authorization, send_email_simple, opts)
      data
    end

    # Send email withholding tax.
    # ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param send_email_simple [SendEmailSimple] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(SendEmailResponse, Integer, Hash)>] SendEmailResponse data, response status code and response headers
    def withholding_taxes_email_document_post_with_http_info(authorization, send_email_simple, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_email_document_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_email_document_post"
      end
      # verify the required parameter 'send_email_simple' is set
      if @api_client.config.client_side_validation && send_email_simple.nil?
        fail ArgumentError, "Missing the required parameter 'send_email_simple' when calling WithholdingTaxApi.withholding_taxes_email_document_post"
      end
      # resource path
      local_var_path = '/withholding-taxes/email-document'

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
      post_body = opts[:body] || @api_client.object_to_http_body(send_email_simple) 

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_email_document_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get all withholding tax documents.
    # เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ
    # @param current_page [Integer] Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
    # @param page_size [Integer] Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt;
    # @param authorization [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :sort_by Query sort by withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;
    # @option opts [String] :filter Query filter withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt;
    # @return [AllWithholidingTaxDocumentResponse]
    def withholding_taxes_get(current_page, page_size, authorization, opts = {})
      data, _status_code, _headers = withholding_taxes_get_with_http_info(current_page, page_size, authorization, opts)
      data
    end

    # Get all withholding tax documents.
    # เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ
    # @param current_page [Integer] Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
    # @param page_size [Integer] Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt;
    # @param authorization [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :sort_by Query sort by withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;
    # @option opts [String] :filter Query filter withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt;
    # @return [Array<(AllWithholidingTaxDocumentResponse, Integer, Hash)>] AllWithholidingTaxDocumentResponse data, response status code and response headers
    def withholding_taxes_get_with_http_info(current_page, page_size, authorization, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_get ...'
      end
      # verify the required parameter 'current_page' is set
      if @api_client.config.client_side_validation && current_page.nil?
        fail ArgumentError, "Missing the required parameter 'current_page' when calling WithholdingTaxApi.withholding_taxes_get"
      end
      # verify the required parameter 'page_size' is set
      if @api_client.config.client_side_validation && page_size.nil?
        fail ArgumentError, "Missing the required parameter 'page_size' when calling WithholdingTaxApi.withholding_taxes_get"
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_get"
      end
      # resource path
      local_var_path = '/withholding-taxes'

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
      return_type = opts[:return_type] || 'AllWithholidingTaxDocumentResponse' 

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Attachment withholding tax.
    # แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [File] :file 
    # @return [AttachmentResponse]
    def withholding_taxes_id_attachment_post(authorization, id, opts = {})
      data, _status_code, _headers = withholding_taxes_id_attachment_post_with_http_info(authorization, id, opts)
      data
    end

    # Attachment withholding tax.
    # แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [File] :file 
    # @return [Array<(AttachmentResponse, Integer, Hash)>] AttachmentResponse data, response status code and response headers
    def withholding_taxes_id_attachment_post_with_http_info(authorization, id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_id_attachment_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_id_attachment_post"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling WithholdingTaxApi.withholding_taxes_id_attachment_post"
      end
      # resource path
      local_var_path = '/withholding-taxes/{id}/attachment'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_id_attachment_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Delete withholding tax document.
    # ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param [Hash] opts the optional parameters
    # @return [DeleteResponse]
    def withholding_taxes_id_delete(authorization, id, opts = {})
      data, _status_code, _headers = withholding_taxes_id_delete_with_http_info(authorization, id, opts)
      data
    end

    # Delete withholding tax document.
    # ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param [Hash] opts the optional parameters
    # @return [Array<(DeleteResponse, Integer, Hash)>] DeleteResponse data, response status code and response headers
    def withholding_taxes_id_delete_with_http_info(authorization, id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_id_delete ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_id_delete"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling WithholdingTaxApi.withholding_taxes_id_delete"
      end
      # resource path
      local_var_path = '/withholding-taxes/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_id_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get withholding tax document.
    # เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId หรือ documentId
    # @param [Hash] opts the optional parameters
    # @return [WithholidingTaxDocumentResponse]
    def withholding_taxes_id_get(authorization, id, opts = {})
      data, _status_code, _headers = withholding_taxes_id_get_with_http_info(authorization, id, opts)
      data
    end

    # Get withholding tax document.
    # เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId หรือ documentId
    # @param [Hash] opts the optional parameters
    # @return [Array<(WithholidingTaxDocumentResponse, Integer, Hash)>] WithholidingTaxDocumentResponse data, response status code and response headers
    def withholding_taxes_id_get_with_http_info(authorization, id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_id_get ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_id_get"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling WithholdingTaxApi.withholding_taxes_id_get"
      end
      # resource path
      local_var_path = '/withholding-taxes/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

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
      return_type = opts[:return_type] || 'WithholidingTaxDocumentResponse' 

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_id_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Edit withholding tax document.
    # แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param update_withholiding_tax_document [UpdateWithholidingTaxDocument] 
    # @param [Hash] opts the optional parameters
    # @return [WithholidingTaxDocumentResponse]
    def withholding_taxes_id_put(authorization, id, update_withholiding_tax_document, opts = {})
      data, _status_code, _headers = withholding_taxes_id_put_with_http_info(authorization, id, update_withholiding_tax_document, opts)
      data
    end

    # Edit withholding tax document.
    # แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param update_withholiding_tax_document [UpdateWithholidingTaxDocument] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(WithholidingTaxDocumentResponse, Integer, Hash)>] WithholidingTaxDocumentResponse data, response status code and response headers
    def withholding_taxes_id_put_with_http_info(authorization, id, update_withholiding_tax_document, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_id_put ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_id_put"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling WithholdingTaxApi.withholding_taxes_id_put"
      end
      # verify the required parameter 'update_withholiding_tax_document' is set
      if @api_client.config.client_side_validation && update_withholiding_tax_document.nil?
        fail ArgumentError, "Missing the required parameter 'update_withholiding_tax_document' when calling WithholdingTaxApi.withholding_taxes_id_put"
      end
      # resource path
      local_var_path = '/withholding-taxes/{id}'.sub('{' + 'id' + '}', CGI.escape(id.to_s))

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
      post_body = opts[:body] || @api_client.object_to_http_body(update_withholiding_tax_document) 

      # return_type
      return_type = opts[:return_type] || 'WithholidingTaxDocumentResponse' 

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_id_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Change status withholding tax document.
    # เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param status_id [String] เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก
    # @param [Hash] opts the optional parameters
    # @return [WithholidingTaxDocumentResponse]
    def withholding_taxes_id_status_status_id_post(authorization, id, status_id, opts = {})
      data, _status_code, _headers = withholding_taxes_id_status_status_id_post_with_http_info(authorization, id, status_id, opts)
      data
    end

    # Change status withholding tax document.
    # เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)
    # @param authorization [String] 
    # @param id [String] ID เอกสารใช้ recordId
    # @param status_id [String] เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก
    # @param [Hash] opts the optional parameters
    # @return [Array<(WithholidingTaxDocumentResponse, Integer, Hash)>] WithholidingTaxDocumentResponse data, response status code and response headers
    def withholding_taxes_id_status_status_id_post_with_http_info(authorization, id, status_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_id_status_status_id_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_id_status_status_id_post"
      end
      # verify the required parameter 'id' is set
      if @api_client.config.client_side_validation && id.nil?
        fail ArgumentError, "Missing the required parameter 'id' when calling WithholdingTaxApi.withholding_taxes_id_status_status_id_post"
      end
      # verify the required parameter 'status_id' is set
      if @api_client.config.client_side_validation && status_id.nil?
        fail ArgumentError, "Missing the required parameter 'status_id' when calling WithholdingTaxApi.withholding_taxes_id_status_status_id_post"
      end
      # resource path
      local_var_path = '/withholding-taxes/{id}/status/{statusId}'.sub('{' + 'id' + '}', CGI.escape(id.to_s)).sub('{' + 'statusId' + '}', CGI.escape(status_id.to_s))

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
      return_type = opts[:return_type] || 'WithholidingTaxDocumentResponse' 

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_id_status_status_id_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Create withholding tax document.
    # สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) <br> <br> ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า
    # @param authorization [String] 
    # @param withholiding_tax_document [WithholidingTaxDocument] 
    # @param [Hash] opts the optional parameters
    # @return [WithholidingTaxDocumentResponse]
    def withholding_taxes_post(authorization, withholiding_tax_document, opts = {})
      data, _status_code, _headers = withholding_taxes_post_with_http_info(authorization, withholiding_tax_document, opts)
      data
    end

    # Create withholding tax document.
    # สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า
    # @param authorization [String] 
    # @param withholiding_tax_document [WithholidingTaxDocument] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(WithholidingTaxDocumentResponse, Integer, Hash)>] WithholidingTaxDocumentResponse data, response status code and response headers
    def withholding_taxes_post_with_http_info(authorization, withholiding_tax_document, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_post"
      end
      # verify the required parameter 'withholiding_tax_document' is set
      if @api_client.config.client_side_validation && withholiding_tax_document.nil?
        fail ArgumentError, "Missing the required parameter 'withholiding_tax_document' when calling WithholdingTaxApi.withholding_taxes_post"
      end
      # resource path
      local_var_path = '/withholding-taxes'

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
      post_body = opts[:body] || @api_client.object_to_http_body(withholiding_tax_document) 

      # return_type
      return_type = opts[:return_type] || 'WithholidingTaxDocumentResponse' 

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Share link withholding tax.
    # แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
    # @param authorization [String] 
    # @param share_document [ShareDocument] 
    # @param [Hash] opts the optional parameters
    # @return [ShareDocumentResponse]
    def withholding_taxes_sharedocument_post(authorization, share_document, opts = {})
      data, _status_code, _headers = withholding_taxes_sharedocument_post_with_http_info(authorization, share_document, opts)
      data
    end

    # Share link withholding tax.
    # แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
    # @param authorization [String] 
    # @param share_document [ShareDocument] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ShareDocumentResponse, Integer, Hash)>] ShareDocumentResponse data, response status code and response headers
    def withholding_taxes_sharedocument_post_with_http_info(authorization, share_document, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: WithholdingTaxApi.withholding_taxes_sharedocument_post ...'
      end
      # verify the required parameter 'authorization' is set
      if @api_client.config.client_side_validation && authorization.nil?
        fail ArgumentError, "Missing the required parameter 'authorization' when calling WithholdingTaxApi.withholding_taxes_sharedocument_post"
      end
      # verify the required parameter 'share_document' is set
      if @api_client.config.client_side_validation && share_document.nil?
        fail ArgumentError, "Missing the required parameter 'share_document' when calling WithholdingTaxApi.withholding_taxes_sharedocument_post"
      end
      # resource path
      local_var_path = '/withholding-taxes/sharedocument'

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
        @api_client.config.logger.debug "API called: WithholdingTaxApi#withholding_taxes_sharedocument_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end