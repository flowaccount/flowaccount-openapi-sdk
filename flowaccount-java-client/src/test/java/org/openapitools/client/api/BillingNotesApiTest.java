/*
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.AllDocumentResponse;
import org.openapitools.client.model.AttachmentResponse;
import org.openapitools.client.model.DeleteResponse;
import java.io.File;
import org.openapitools.client.model.InlineDocument;
import org.openapitools.client.model.InlineDocumentResponse;
import org.openapitools.client.model.SendEmailCoppies;
import org.openapitools.client.model.SendEmailResponse;
import org.openapitools.client.model.ShareDocument;
import org.openapitools.client.model.ShareDocumentResponse;
import org.openapitools.client.model.SimpleDocument;
import org.openapitools.client.model.SimpleDocumentResponse;
import org.openapitools.client.model.UpdateInlineDocument;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for BillingNotesApi
 */
@Ignore
public class BillingNotesApiTest {

    private final BillingNotesApi api = new BillingNotesApi();

    
    /**
     * Send email billing notes document.
     *
     * ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesEmailDocumentPostTest() throws ApiException {
        String authorization = null;
        SendEmailCoppies sendEmailCoppies = null;
        SendEmailResponse response = api.billingNotesEmailDocumentPost(authorization, sendEmailCoppies);

        // TODO: test validations
    }
    
    /**
     * Get all billing notes documents.
     *
     * เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesGetTest() throws ApiException {
        Integer currentPage = null;
        Integer pageSize = null;
        String authorization = null;
        String sortBy = null;
        String filter = null;
        AllDocumentResponse response = api.billingNotesGet(currentPage, pageSize, authorization, sortBy, filter);

        // TODO: test validations
    }
    
    /**
     * Attachment billing notes document.
     *
     * แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesIdAttachmentPostTest() throws ApiException {
        String authorization = null;
        String id = null;
        File file = null;
        AttachmentResponse response = api.billingNotesIdAttachmentPost(authorization, id, file);

        // TODO: test validations
    }
    
    /**
     * Delete billing notes document.
     *
     * ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesIdDeleteTest() throws ApiException {
        String authorization = null;
        String id = null;
        DeleteResponse response = api.billingNotesIdDelete(authorization, id);

        // TODO: test validations
    }
    
    /**
     * Get billing notes document.
     *
     * เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesIdGetTest() throws ApiException {
        String authorization = null;
        String id = null;
        InlineDocumentResponse response = api.billingNotesIdGet(authorization, id);

        // TODO: test validations
    }
    
    /**
     * Edit billing notes document.
     *
     * แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesIdPutTest() throws ApiException {
        String authorization = null;
        String id = null;
        UpdateInlineDocument updateInlineDocument = null;
        InlineDocumentResponse response = api.billingNotesIdPut(authorization, id, updateInlineDocument);

        // TODO: test validations
    }
    
    /**
     * Change status billing notes document.
     *
     * เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesIdStatusStatusIdPostTest() throws ApiException {
        String authorization = null;
        String id = null;
        String statusId = null;
        InlineDocumentResponse response = api.billingNotesIdStatusStatusIdPost(authorization, id, statusId);

        // TODO: test validations
    }
    
    /**
     * Create billing notes document inline discount or inline vat.
     *
     * สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesInlinePostTest() throws ApiException {
        String authorization = null;
        InlineDocument inlineDocument = null;
        InlineDocumentResponse response = api.billingNotesInlinePost(authorization, inlineDocument);

        // TODO: test validations
    }
    
    /**
     * Create billing notes document.
     *
     * สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesPostTest() throws ApiException {
        String authorization = null;
        SimpleDocument simpleDocument = null;
        SimpleDocumentResponse response = api.billingNotesPost(authorization, simpleDocument);

        // TODO: test validations
    }
    
    /**
     * Share link billing notes document.
     *
     * แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void billingNotesSharedocumentPostTest() throws ApiException {
        String authorization = null;
        ShareDocument shareDocument = null;
        ShareDocumentResponse response = api.billingNotesSharedocumentPost(authorization, shareDocument);

        // TODO: test validations
    }
    
}