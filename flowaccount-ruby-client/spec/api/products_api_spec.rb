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

# Unit tests for OpenapiClient::ProductsApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'ProductsApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::ProductsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ProductsApi' do
    it 'should create an instance of ProductsApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::ProductsApi)
    end
  end

  # unit tests for products_get
  # Get list all products.
  # @param current_page Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt;
  # @param page_size Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt;
  # @param authorization 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :sort_by Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;
  # @option opts [String] :filter Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt;
  # @return [ProductResponse]
  describe 'products_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for products_id_delete
  # Delete products.
  # @param authorization 
  # @param id เลข Id Contact
  # @param [Hash] opts the optional parameters
  # @return [DeleteResponse]
  describe 'products_id_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for products_id_get
  # Get products.
  # @param authorization เลข Id Product
  # @param id 
  # @param [Hash] opts the optional parameters
  # @return [ProductResponse]
  describe 'products_id_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for products_id_put
  # Update products.
  # @param authorization เลข Id Product
  # @param id 
  # @param product_type 
  # @param [Hash] opts the optional parameters
  # @return [ProductResponse]
  describe 'products_id_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for products_post
  # Create products.
  # @param authorization 
  # @param product_type 
  # @param [Hash] opts the optional parameters
  # @return [ProductResponse]
  describe 'products_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
