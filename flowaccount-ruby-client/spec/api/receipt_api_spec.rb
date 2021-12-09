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

# Unit tests for OpenapiClient::ReceiptApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'ReceiptApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::ReceiptApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ReceiptApi' do
    it 'should create an instance of ReceiptApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::ReceiptApi)
    end
  end

  # unit tests for receipts_email_document_post
  # Send email receipt document.
  # ส่งเอกสารใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param send_email_coppies 
  # @param [Hash] opts the optional parameters
  # @return [SendEmailResponse]
  describe 'receipts_email_document_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_get
  # Get all receipt documents
  # เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ
  # @param current_page Query current page document receipts. &lt;br&gt;Example Pattern: &lt;ex&gt;/receipts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/receipts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
  # @param page_size Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?pageSize&#x3D;20 &lt;/ex&gt;
  # @param authorization 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :sort_by Query document receipts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/receipts?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;
  # @option opts [String] :filter Query filter receipts. &lt;br&gt;Example Pattern: &lt;ex&gt; /receipts?filter&#x3D;[{&#39;columnName&#39;:&#39;Contact.NameLocal&#39;,&#39;columnValue&#39;:&#39;Contact Name&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt;
  # @return [AllDocumentResponse]
  describe 'receipts_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_id_attachment_post
  # Attachment receipt document.
  # แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param id documentId หรือ recordId ของเอกสารที่ต้องการแนบ
  # @param [Hash] opts the optional parameters
  # @option opts [File] :file รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
  # @return [AttachmentResponse]
  describe 'receipts_id_attachment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_id_delete
  # Delete receipt document.
  # ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param [Hash] opts the optional parameters
  # @return [DeleteResponse]
  describe 'receipts_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_id_get
  # Get receipt document.
  # เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'receipts_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_id_payment_post
  # Change status is paid receipt document.
  # เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว
  # @param authorization 
  # @param id ID เอกสารใช้ recordId หรือ documentId
  # @param payment_receiving_document 
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'receipts_id_payment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_id_put
  # Edit receipt document.
  # แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param update_inline_document 
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'receipts_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_id_status_status_id_post
  # Change status receipt document.
  # เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param status_id เปลี่ยนสถานะเอกสารได้ 1 สถานะ &lt;br&gt; void &#x3D; ยกเลิก
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'receipts_id_status_status_id_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_inline_post
  # Create receipt document inline discount or inline vat.
  # สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน
  # @param authorization 
  # @param inline_document 
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'receipts_inline_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_inline_with_payment_post
  # Create receipt document inline discount or inline vat with payment.
  # สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน &lt;br&gt;เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)
  # @param authorization 
  # @param inline_document_with_payment_receiving 
  # @param [Hash] opts the optional parameters
  # @return [InlineDocumentResponse]
  describe 'receipts_inline_with_payment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_post
  # Create receipt document.
  # สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน
  # @param authorization 
  # @param simple_document 
  # @param [Hash] opts the optional parameters
  # @return [SimpleDocumentResponse]
  describe 'receipts_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_sharedocument_post
  # Share link receipt document.
  # แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
  # @param authorization 
  # @param share_document 
  # @param [Hash] opts the optional parameters
  # @return [ShareDocumentResponse]
  describe 'receipts_sharedocument_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for receipts_with_payment_post
  # Create receipt document with payment.
  # สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)
  # @param authorization 
  # @param simple_document_with_payment_receiving 
  # @param [Hash] opts the optional parameters
  # @return [SimpleDocumentResponse]
  describe 'receipts_with_payment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end