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

# Unit tests for OpenapiClient::ExpensesApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'ExpensesApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::ExpensesApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ExpensesApi' do
    it 'should create an instance of ExpensesApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::ExpensesApi)
    end
  end

  # unit tests for expenses_categories_accounting_get
  # Accounting categories expenses document.
  # เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)
  # @param authorization 
  # @param [Hash] opts the optional parameters
  # @return [BusinessCategory]
  describe 'expenses_categories_accounting_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_categories_business_get
  # Business categories expenses document.
  # เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)
  # @param authorization 
  # @param [Hash] opts the optional parameters
  # @return [BusinessCategory]
  describe 'expenses_categories_business_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_email_document_post
  # Send email expenses document.
  # ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param send_email_simple 
  # @param [Hash] opts the optional parameters
  # @return [SendEmailResponse]
  describe 'expenses_email_document_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_get
  # Get list all expenses documents.
  # เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ
  # @param current_page Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
  # @param page_size Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt;
  # @param authorization 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :sort_by Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;
  # @option opts [String] :filter Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt;
  # @return [AllExpenseDocumentResponse]
  describe 'expenses_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_id_attachment_post
  # Attachment to expenses document.
  # แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param id 
  # @param [Hash] opts the optional parameters
  # @option opts [File] :file 
  # @return [AttachmentResponse]
  describe 'expenses_id_attachment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_id_delete
  # Delete expenses document.
  # ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param [Hash] opts the optional parameters
  # @return [DeleteResponse]
  describe 'expenses_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_id_get
  # Get expenses document.
  # เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ
  # @param authorization 
  # @param id 
  # @param [Hash] opts the optional parameters
  # @return [AllExpenseDocumentResponse]
  describe 'expenses_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_id_payment_post
  # Change status is paid expenses document.
  # ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว
  # @param authorization 
  # @param id ID เอกสารใช้ recordId หรือ documentId
  # @param payment_paid_document 
  # @param [Hash] opts the optional parameters
  # @return [ExpenseSimpleDocumentResponse]
  describe 'expenses_id_payment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_id_put
  # Edit expenses document.
  # แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param update_expense_document 
  # @param [Hash] opts the optional parameters
  # @return [ExpenseInlineDocumentResponse]
  describe 'expenses_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_id_status_status_id_post
  # Change status expenses document.
  # เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)
  # @param authorization 
  # @param id ID เอกสารใช้ recordId
  # @param status_id เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก
  # @param [Hash] opts the optional parameters
  # @return [ExpenseInlineDocumentResponse]
  describe 'expenses_id_status_status_id_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_inline_post
  # Create expenses document inline discount or inline vat.
  # สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
  # @param authorization 
  # @param expense_inline_document 
  # @param [Hash] opts the optional parameters
  # @return [ExpenseInlineDocumentResponse]
  describe 'expenses_inline_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_inline_with_payment_post
  # Create expenses document inline discount or inline vat with payment.
  # สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)
  # @param authorization 
  # @param expense_inline_document_with_payment_paid 
  # @param [Hash] opts the optional parameters
  # @return [ExpenseInlineDocumentResponse]
  describe 'expenses_inline_with_payment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_post
  # Create expenses document.
  # สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
  # @param authorization 
  # @param expense_simple_document 
  # @param [Hash] opts the optional parameters
  # @return [ExpenseSimpleDocumentResponse]
  describe 'expenses_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_sharedocument_post
  # Share link expenses document.
  # แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
  # @param authorization 
  # @param share_document 
  # @param [Hash] opts the optional parameters
  # @return [ShareDocumentResponse]
  describe 'expenses_sharedocument_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for expenses_with_payment_post
  # Create expenses document with payment.
  # สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)
  # @param authorization 
  # @param expense_simple_document_with_payment_paid 
  # @param [Hash] opts the optional parameters
  # @return [ExpenseSimpleDocumentResponse]
  describe 'expenses_with_payment_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
