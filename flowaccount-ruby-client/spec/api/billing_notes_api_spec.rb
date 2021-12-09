=begin
#FlowAccount Open API

## Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64

The version of the OpenAPI document: 2-oas3
Contact: developer_support@flowaccount.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::BillingNotesApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'BillingNotesApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::BillingNotesApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of BillingNotesApi' do
    it 'should create an instance of BillingNotesApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::BillingNotesApi)
    end
  end

  # unit tests for billing_notes_email_document_post
  # Send email billing notes document.
  # ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param send_email_coppies 
  # @param [Hash] opts the optional parameters
  # @return [SendEmailResponse]
  describe 'billing_notes_email_document_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_get
  # Get all billing notes documents.
  # เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ
  # @param current_page Query current page document billing notes. &lt;br&gt;Example Pattern: &lt;ex&gt;/billing-notes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/billing-notes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
  # @param page_size Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?pageSize&#x3D;20 &lt;/ex&gt;
  # @param authorization 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :sort_by Query document billing notes list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/billing-notes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;
  # @option opts [String] :filter Query filter billing-notes. &lt;br&gt;Example Pattern: &lt;ex&gt; /billing-notes?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt;
  # @return [AllDocumentResponse]
  describe 'billing_notes_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_id_attachment_post
  # Attachment billing notes document.
  # แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param id documentId หรือ recordId ของเอกสารที่ต้องการแนบ
  # @param [Hash] opts the optional parameters
  # @option opts [File] :file รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
  # @return [AttachmentResponse]
  describe 'billing_notes_id_attachment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_id_delete
  # Delete billing notes document.
  # ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param [Hash] opts the optional parameters
  # @return [DeleteResponse]
  describe 'billing_notes_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_id_get
  # Get billing notes document.
  # เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'billing_notes_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_id_put
  # Edit billing notes document.
  # แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param update_inline_document 
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'billing_notes_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_id_status_status_id_post
  # Change status billing notes document.
  # เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param status_id เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รอวางบิล &lt;br&gt; approved &#x3D; วางบิลแล้ว &lt;br&gt; approvedandprocessed &#x3D; เปิดบิลแล้ว &lt;br&gt; void &#x3D; ยกเลิก
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'billing_notes_id_status_status_id_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_inline_post
  # Create billing notes document inline discount or inline vat.
  # สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้
  # @param authorization 
  # @param inline_document 
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'billing_notes_inline_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_post
  # Create billing notes document.
  # สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้
  # @param authorization 
  # @param simple_document 
  # @param [Hash] opts the optional parameters
  # @return [SimpleDocumentResponse]
  describe 'billing_notes_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for billing_notes_sharedocument_post
  # Share link billing notes document.
  # แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
  # @param authorization 
  # @param share_document 
  # @param [Hash] opts the optional parameters
  # @return [ShareDocumentResponse]
  describe 'billing_notes_sharedocument_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end