# Purchase Order Tables

## Purchase Order Header (POHEAD)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `PO_PONUM` | A15 | 15 | Purchase Order Code |
| `PO_AREA` | A4 | 4 | Area for Non Job Purchase Order Calculation Supplier Rates |
| `PO_DATE` | D7 | 7 | Purchase Order Date |
| `PO_PRINTED` | A1 | 1 | All Purchase Order Lines Printed Flag |
| `PO_COMPLETE` | A1 | 1 | Purchase Order Closed Flag |
| `PO_VENNO` | A8 | 8 | Vendor Code |
| `PO_VENNAME` | A30 | 30 | Vendor Name |
| `PO_ADD1` | A25 | 25 | Address 1 |
| `PO_ADD2` | A25 | 25 | Address 2 |
| `PO_CITY` | A15 | 15 | City |
| `PO_STATE` | A3 | 3 | State |
| `PO_PCODE` | A4 | 4 | Post Code |
| `PO_SHIPTO` | A2 | 2 | Ship To Code |
| `PO_BUYER` | A3 | 3 | Buyer Initials |
| `PO_SHIPVIA` | A2 | 2 | Ship Via |
| `PO_CARRIER` | A2 | 2 | Carrier |
| `PO_TERMS` | A2 | 2 | Terms Code |
| `PO_MCODE` | A2 | 2 | Default Material Code |
| `PO_EXPENSE` | A15 | 15 | Default Expense Account |
| `PO_CLASS` | A2 | 2 | Classification |
| `PO_STATUS` | A2 | 2 | Status |
| `PO_DEFEXP` | D7 | 7 | Default Date for Lines |
| `PO_PPRICE` | A1 | 1 | Print Price Flag |
| `PO_NOTE1` | A2 | 2 | Purchase Order Note Code 1 |
| `PO_NOTE2` | A2 | 2 | Purchase Order Note Code 2 |
| `PO_NOTE3` | A2 | 2 | Purchase Order Note Code 3 |
| `PO_REM1` | A30 | 30 | Remark 1 |
| `PO_REM2` | A30 | 30 | Remark 2 |
| `PO_REM3` | A30 | 30 | Remark 3 |
| `PO_JOBNUM` | A8 | 8 | Default Job Number |
| `PO_CHANGED` | D1 | 1 | Changed Since Last Print Flag |
| `PO_NEVER_PRINTED` | D1 | 1 | Purchase Order Never Been Printed Flag |
| `PO_TOT_COST` | D10 | 10 | Total Cost of Line Entries |
| `PO_REQSNUM` | A15 | 15 | The Requisition Number |
| `PO_PDESC` | A1 | 1 | Print Description Flag |
| `PO_STAX` | A1 | 1 | Sales Tax Flag |
| `PO_RECEIVED` | D10 | 10 | Amount Received to Date |
| `PO_MATCHED` | D10 | 10 | Amount Matched to Date |
| `PO_ETS_CODE` | A2 | 2 | ETS Reason Code |
| `PO_ETS_ADDINFO` | A2 | 2 | ETS Additional Info |
| `PO_NO_BATCH_PRT` | A1 | 1 | Ignore in Batch Printing Flag |
| `PO_ORDER_ITEMS` | D3 | 3 | Order Item Count |
| `PO_CONFIRM` | A1 | 1 | Confirmation Clause Flag |
| `PO_SECTION` | A2 | 2 | Default Job Section |
| `PO_CSTCTR` | A3 | 3 | Default Job Cost Centre |
| `PO_DEPT` | A2 | 2 | Default Job Department |
| `PO_DESCPRT` | A1 | 1 | Print Description on Purchase Order Flag |
| `PO_QTYPRT` | A1 | 1 | Print Quantity on Purchase Order Flag |
| `PO_RATEPRT` | A1 | 1 | Print Rate on Purchase Order Flag |
| `PO_EXPRPRT` | A1 | 1 | Print Extended Price Flag |
| `PO_SUPPRESS_TTL` | A1 | 1 | Suppress the Order Total Flag |
| `PO_USER_ID` | A9 | 9 | Purchase Order User ID |
| `PO_ESTCODE` | A3 | 3 | Estimator Code for Job |
| `PO_SOURCE` | A1 | 1 | Source of Purchase Order |
| `PO_CANC_VAL` | D10 | 10 | Amount Cancelled |
| `PO_ISSU_VAL` | D10 | 10 | Amount Issued |
| `PO_ISS_PO` | A15 | 15 | Purchase Order Issued Against |
| `PO_KEEP_PO` | A1 | 1 | Keep These on Cancel All Purchase Orders in Contract Finalise |
| `PO_ISS_TYPE` | A1 | 1 | Type of Issue |
| `PO_OPCENTRE` | A3 | 3 | Operating Centre |
| `PO_DISTRICT` | A3 | 3 | District |
| `PO_CNCDATE` | D7 | 7 | Cancel Date Stamp |
| `PO_CNCTIME` | D6 | 6 | Cancel Time Stamp |
| `PO_CNCUSER` | A9 | 9 | Cancel User |
| `PO_WRITE_OFF` | D10 | 10 | Amount Written Off Purchase Order |
| `PO_EXPORTED` | A1 | 1 | Exported Flag |
| `PO_CURRENCY` | A6 | 6 | Currency Code |
| `PO_TOT_GST` | D11 | 11 | Total Amount of GST from Purchase Order Lines |
| `PO_TOT_GSTCST` | D11 | 11 | Total Expected Cost Excluding GST |
| `PO_FC_COST` | D11 | 11 | Foreign Currency Cost |
| `PO_MULTICURR` | D1 | 1 | Multi Currency Flag |
| `PO_DISC_AMT` | D9 | 9 | Amount of Discount at Purchase Order Generate |
| `PO_INV_CREATE` | A1 | 1 | Invoice Has Been Generated from This Purchase Order Flag |
| `PO_OEL_CMPL` | A1 | 1 | Purchase Order Generated from Completed Order Line Flag |
| `PO_ISSUED_AGNST` | A1 | 1 | Has This Purchase Order Been Issued Against Without Being Cancelled Flag |
| `PO_ADDRESS_SRC` | A1 | 1 | Address Source |
| `PO_ISS_AGNST_AMT` | D11 | 11 | Amount Issued Against Without Being Cancelled |
| `PO_ISSDATE` | D7 | 7 | Issue Date Stamp |
| `PO_ISSTIME` | D6 | 6 | Issue Time Stamp |
| `PO_ISSUSER` | A12 | 12 | Issue User |
| `PO_IMPDATE` | D7 | 7 | Import Date Stamp |
| `PO_IMPTIME` | D6 | 6 | Import Time Stamp |
| `PO_IMPUSER` | A12 | 12 | Import User |
| `PO_CONTACT_SEQ` | D5 | 5 | Vendor Contact Sequence Assigned to Purchase Order |
| `PO_REBGEN` | A1 | 1 | Rebate Has Been Generated for This Purchase Order Flag |
| `PO_CANC_REAS` | A2 | 2 | Cancellation Reason Code |
| `PO_CANC_DESC` | A30 | 30 | Cancellation Description |
| `PO_POSTMD` | A1 | 1 | Purchase Order Was Issued After Margin Declare Flag |
| `PO_PHONE` | A20 | 20 | Phone |
| `PO_FAX` | A20 | 20 | Fax |
| `PO_PHONE_AUTH` | A1 | 1 | Purchase Order Was Granted Phone Authorization to Issue Flag |
| `PO_PRELOAD_ETS` | A1 | 1 | Purchase Order Preload ETS Info on Issue from Fields on This Buffer Flag |
| `PO_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `PO_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `PO_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `PO_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `PO_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `PO_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `PO_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `PO_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `PO_ACCRUED` | A1 | 1 | Purchase Order Has Been Accrued by TMR Flag |
| `PO_ACCR_VALUE` | D11 | 11 | Accrued Value |
| `PO_CANC_BYCO` | A1 | 1 | Cancelled by Contract Office Flag |
| `PO_CALLUP_STATUS` | A1 | 1 | Callup Status |
| `PO_CALLUP_VENNO` | A8 | 8 | Callup Vendor Code |
| `PO_CALLUP_USR` | A3 | 3 | Callup User |
| `PO_CALLUP_REQDATE` | D7 | 7 | Callup Required By Date |
| `PO_CALLUP_AUD_USER` | A12 | 12 | Callup Audit Initials |
| `PO_CALLUP_AUD_DATE` | D7 | 7 | Callup Audit Date |
| `PO_CALLUP_AUD_TIME` | D9 | 9 | Callup Audit Time |
| `PO_CALLUP_AUD_STMP` | A28 | 28 | Callup Audit Stamp |
| `PO_SCHEDULE_CODE` | A2 | 2 | Schedule Code from the Cost Centre Subsection |
| `PO_CALLUP_DATE` | D7 | 7 | Callup Date |
| `PO_EDI_PARTNER` | A8 | 8 | EDI Trading Partner |
| `PO_EDI_STATUS` | A1 | 1 | EDI Status |
| `PO_EDI_SENT_AUD_USER` | A12 | 12 | EDI Sent Audit Stamp User |
| `PO_EDI_SENT_AUD_DATE` | D7 | 7 | EDI Sent Audit Stamp Date |
| `PO_EDI_SENT_AUD_TIME` | D9 | 9 | EDI Sent Audit Stamp Time |
| `PO_EDI_SENT_AUD_STMP` | A28 | 28 | EDI Sent Audit Stamp |
| `PO_EDI_ACKN_AUD_USER` | A12 | 12 | EDI Acknowledgment Audit Stamp User |
| `PO_EDI_ACKN_AUD_DATE` | D7 | 7 | EDI Acknowledgment Audit Stamp Date |
| `PO_EDI_ACKN_AUD_TIME` | D9 | 9 | EDI Acknowledgment Audit Stamp Time |
| `PO_EDI_ACKN_AUD_STMP` | A28 | 28 | EDI Acknowledgment Audit Stamp |
| `PO_EDI_LOCATION` | A3 | 3 | EDI Location |
| `PO_ETS_COMM1` | A30 | 30 | Saved for Purchase Order Comments from BCGO |
| `PO_ETS_COMM2` | A40 | 40 | Saved for Purchase Order Comments2 from BCGO |
| `PO_ETS_PERRESP` | A3 | 3 | Saved for Purchase Order Person Responsible from BCGO |
| `PO_REMOTE` | A1 | 1 | Purchase Order Was Created via a Remote Process Flag |

## Purchase Order Lines (POLINE)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `POL_PONUM` | A15 | 15 | Purchase Order Code |
| `POL_LINE` | D3 | 3 | Purchase Order Line Number |
| `POL_LINEA` | A3 | 3 | Alpha Overlay |
| `POL_KEY` | A18 | 18 | Purchase Order Code/Line Number |
| `POL_PRDCAT` | A2 | 2 | Product Category |
| `POL_ITEMNO` | A15 | 15 | Item Number |
| `POL_LOC` | A2 | 2 | Inventory Location |
| `POL_COMPLETE` | A1 | 1 | Completely Received Flag |
| `POL_JOBNUM` | A8 | 8 | Job Number |
| `POL_PRINTED` | A1 | 1 | Printed Flag |
| `POL_CODE` | A2 | 2 | Material Code |
| `POL_DREQ` | D7 | 7 | Date Requested |
| `POL_DEXP` | D7 | 7 | Date Expected |
| `POL_MONTH_LEAD` | D3 | 3 | Lead Time Months |
| `POL_DAYS_LEAD` | D5 | 5 | Lead Time Days |
| `POL_EXPIDITE` | A1 | 1 | Expedite of Line Required Flag |
| `POL_CHANGE` | A1 | 1 | Change Made Since Printing Flag |
| `POL_EXPENSE` | A15 | 15 | General Ledger Expense Account |
| `POL_DESC1` | A30 | 30 | Item Description Line 1 |
| `POL_DESC2` | A30 | 30 | Item Description Line 2 |
| `POL_DESC3` | A30 | 30 | Item Description Line 3 |
| `POL_DESC4` | A30 | 30 | Item Description Line 4 |
| `POL_UOM` | A2 | 2 | Item Purchase Unit of Measure |
| `POL_ESTCOST` | D10 | 10 | Expected Cost Per Unit |
| `POL_ACTCOST` | D10 | 10 | Actual Total Cost Received |
| `POL_INVCOST` | D10 | 10 | Actual Total Cost Invoiced |
| `POL_QORD` | D9 | 9 | Quantity Ordered |
| `POL_QRECV` | D9 | 9 | Quantity Received |
| `POL_QINV` | D9 | 9 | Quantity Invoiced |
| `POL_DRECV` | D7 | 7 | Last Date Received |
| `POL_NOTIF` | A3 | 3 | Notify |
| `POL_MOVET` | A10 | 10 | Receive Into Bin Number |
| `POL_NOTE1` | A2 | 2 | Purchase Order Line Note Code 1 |
| `POL_NOTE2` | A2 | 2 | Purchase Order Line Note Code 2 |
| `POL_PSRAT` | D8 | 8 | Purchase to Sale Ratio |
| `POL_GLACCT` | A15 | 15 | General Ledger Account Number |
| `POL_DISC` | D4 | 4 | Discount |
| `POL_SLSTAX` | D8 | 8 | Sales Tax Amount |
| `POL_GR_UNIT` | D10 | 10 | Gross Unit Cost |
| `POL_SECTION` | A2 | 2 | Job Section |
| `POL_DEPT` | A2 | 2 | Job Department |
| `POL_CSTCTR` | A3 | 3 | Cost Centre |
| `POL_FIRM` | A1 | 1 | Firm Quoted Price Flag |
| `POL_IESTCOST` | D10 | 10 | Inventory Unit Cost |
| `POL_IUOM` | A2 | 2 | Inventory Unit of Measure |
| `POL_STAX_CODE` | A2 | 2 | Sales Tax Code to Apply to Item |
| `POL_TAXMETH` | A1 | 1 | Sales Tax Method |
| `POL_BOSEQ` | D3 | 3 | Sequence Number of Back Order |
| `POL_ABOSEQ` | A3 | 3 | Sequence Number of Back Order Alpha |
| `POL_STKGRP` | A6 | 6 | Item Stock Group |
| `POL_JCPRT` | A1 | 1 | Job Card Printed Flag |
| `POL_REQNUM` | A15 | 15 | Originating Requisition Number |
| `POL_REQSEQ` | D3 | 3 | Originating Requisition Sequence Number |
| `POL_REQKEY` | A18 | 18 | Original Requisition Number/Sequence Number |
| `POL_VENNO` | A8 | 8 | Vendor Number |
| `POL_CURRENCY` | A6 | 6 | Currency |
| `POL_FC_COST` | D10 | 10 | Foreign Currency Cost |
| `POL_FC_RATE` | D10 | 10 | Foreign Currency Rate |
| `POL_FC_RTYPE` | A1 | 1 | Foreign Currency Type |
| `POL_DELDOCK` | A20 | 20 | Delivery Docket |
| `POL_FC_ACTC` | D10 | 10 | Foreign Currency Actual Cost |
| `POL_FC_ACTUC` | D10 | 10 | Foreign Currency Actual Unit Cost |
| `POL_FL_PAK` | A1 | 1 | Purchase Order Line Back Order Sequence Packed Flag |
| `POL_CNTRLD` | A1 | 1 | Inventory Controlled Flag |
| `POL_REQUSER_ID` | A9 | 9 | Requisition User ID |
| `POL_KM_KEY` | A11 | 11 | Kitchen Purchase Line Key |
| `POL_SELLP_FL` | A1 | 1 | Sell Price Flag |
| `POL_SELLPRC` | D11 | 11 | Sell Price for Cost Explosion |
| `POL_OPCENTRE` | A3 | 3 | Operating Centre |
| `POL_SHIPTO` | A2 | 2 | Ship To Code |
| `POL_XREF_SRC` | A2 | 2 | Cross Reference Source |
| `POL_XREF_KEY` | A30 | 30 | Cross Reference Key Purchase Order |
| `POL_XREF_JOBNUM` | A8 | 8 | Cross Reference Job Number |
| `POL_XREF_SECT` | A2 | 2 | Cross Reference Section |
| `POL_XREF_HEAD` | A4 | 4 | Cross Reference Header |
| `POL_XREF_PARA` | A4 | 4 | Cross Reference Paragraph |
| `POL_XREF_DETSEQ` | A5 | 5 | Cross Reference Detail Sequence |
| `POL_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `POL_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `POL_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `POL_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `POL_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `POL_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `POL_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `POL_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |