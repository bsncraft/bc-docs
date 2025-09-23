# Job Costing Tables

## Job Costing Header (JCHEADA)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JC_JOBNUM` | A8 | 8 | Job Number |
| `JC_CUST` | A6 | 6 | Customer Number |
| `JC_CUSTPO` | A20 | 20 | Customer's Purchase Order Number |
| `JC_PO` | A20 | 20 | Customer's Purchase Order Number |
| `JC_SERIAL` | A20 | 20 | Customer Reference Codes |
| `JC_ADDR1` | A30 | 30 | Job Address 1 |
| `JC_ADDR2` | A30 | 30 | Job Address 2 |
| `JC_ADDR3` | A30 | 30 | Job Address 3 |
| `JC_ADDR` | A90 | 90 | Job Address |
| `JC_DESC1` | A40 | 40 | Job Description |
| `JC_DESC2` | A40 | 40 | Further Job Description |
| `JC_STATUS` | A2 | 2 | Current Status of Job |
| `JC_CLASS` | A2 | 2 | Job Classification |
| `JC_WIPCDE` | A2 | 2 | WIP Code |
| `JC_FGCDE` | A2 | 2 | Finished Goods Code |
| `JC_RECDTE` | D6 | 6 | Date Job/Order Received |
| `JC_PRMDTE` | D7 | 7 | Estimated Completion Date |
| `JC_CMPDTE` | D7 | 7 | Actual Date Job was Completed |
| `JC_MATREC` | D3 | 3 | Overhead Recovery Rate Material |
| `JC_LABREC` | D3 | 3 | Overhead Recovery Rate Labour |
| `JC_ESTMAT` | D9 | 9 | Estimated Material Cost |
| `JC_ESTLAB` | D9 | 9 | Estimated Labour Cost |
| `JC_CUSDISC` | D3 | 3 | Customer Discount |
| `JC_QUOTEBY` | D2 | 2 | Sales Person Quoted By |
| `JC_NOPURG` | A1 | 1 | Job Not To Be Purged Flag |
| `JC_SCHDTE` | D7 | 7 | Date Job Scheduled to Start |
| `JC_FGFLAG` | D1 | 1 | Moved to Finished Goods Flag |
| `JC_SUBCLS` | A2 | 2 | Job Sub-Class for Analysis Reports |
| `JC_MARKET` | A2 | 2 | Job Market Code for Analysis Reports |
| `JC_LLINE` | A3 | 3 | Last Labour Line Number Created |
| `JC_PLINE` | A3 | 3 | Last Purchase Order Line Number Created |
| `JC_MLINE` | A3 | 3 | Last Material Line Number Created |
| `JC_OLINE` | A3 | 3 | Last Other Expense Line Number Created |
| `JC_OTHOV` | D3 | 3 | Last Other Expense Overflow Number |
| `JC_PUROV` | D3 | 3 | Last Purchase Order Expense Overflow Number |
| `JC_SUBOV` | D3 | 3 | Last Subcontractor Expense Overflow Number |
| `JC_EXPSTS` | D1 | 1 | Explosion Status |
| `JC_ESTLHR` | D8 | 8 | Estimated Labour Hours |
| `JC_ESTSLE` | D9 | 9 | Estimated Sale Value |
| `JC_SALE` | D9 | 9 | Estimated Sale Value |
| `JC_ULINE` | A3 | 3 | Last Subcontract Line Number Created |
| `JC_LABOV` | D3 | 3 | Last Labour Overflow Number |
| `JC_CUSNAM` | A30 | 30 | Customer Name |
| `JC_AADDR1` | A30 | 30 | Account Address 1 |
| `JC_AADDR2` | A30 | 30 | Account Address 2 |
| `JC_AADDR3` | A30 | 30 | Account Address 3 |
| `JC_AADDR` | A90 | 90 | Account Address |
| `JC_SHIPVIA` | A20 | 20 | Shipping Method |
| `JC_CARRIER` | A20 | 20 | Carrier |
| `JC_TERMS` | A20 | 20 | Description of Terms |
| `JC_STAX` | D9 | 9 | Total Sales Tax Amount |
| `JC_MISC` | D6 | 6 | Miscellaneous Charges |
| `JC_FRGHT` | D6 | 6 | Freight |
| `JC_DISC` | D9 | 9 | Invoice Discount Allowed |
| `JC_SLSMAN` | D2 | 2 | Salesman Number |
| `JC_SLSTXNO` | A9 | 9 | Sales Tax Exemption Number |
| `JC_SLSCDE` | A2 | 2 | Sales Code |
| `JC_TRMCDE` | A2 | 2 | Terms Code |
| `JC_CARCDE` | A2 | 2 | Code for Carrier |
| `JC_SHPCDE` | A2 | 2 | Code for Ship-Via |
| `JC_CONTACT` | A50 | 50 | Contact Name |
| `JC_PRCDE` | A2 | 2 | Price Code |
| `JC_APLYTO` | A6 | 6 | Apply To Number |
| `JC_DELNUM` | D4 | 4 | Delivery Number |
| `JC_DELRTE` | A6 | 6 | Delivery Route |
| `JC_DELPRI` | A1 | 1 | Priority Code |
| `JC_CUBCAP` | D6 | 6 | Cubic Capacity of Order |
| `JC_COST` | D9 | 9 | Cost |
| `JC_INSTR` | D1 | 1 | Order Print Gen Instructions |
| `JC_DELIV` | D1 | 1 | Order Print Del Instructions |
| `JC_SPEC` | D1 | 1 | Order Print Specifications |
| `JC_TOTPGE` | D3 | 3 | Total Number Of Pages To Print |
| `JC_LEADTIME` | D3 | 3 | Max Lead Time for Order |
| `JC_GRSALE` | D9 | 9 | Gross Sale Amount |
| `JC_LOC` | A2 | 2 | Default Location on Inventory File |
| `JC_DESPFLG` | A1 | 1 | A Quantity Supplied Flag |
| `JC_QUOTEFLG` | A1 | 1 | Override Est Sale Price Flag |
| `JC_SPCAMT` | D9 | 9 | Total of All of the Spec Lines |
| `JC_COMCDE` | A2 | 2 | Commission Code |
| `JC_COMPCT` | D4 | 4 | Commission Rate |
| `JC_COMDUE` | D9 | 9 | Commission Due |
| `JC_QTYTOT` | A1 | 1 | Sub-Total Quantity |
| `JC_QTYUNT` | A1 | 1 | Sub-Total Unit Price |
| `JC_QTYEXT` | A1 | 1 | Sub-Total Extended Price |
| `JC_HDJUST` | A1 | 1 | Heading Justification |
| `JC_REPWID` | D3 | 3 | Report Width |
| `JC_PARTDLV` | A1 | 1 | Accept Partial Del Of Back Ord |
| `JC_PRTPUR` | A1 | 1 | Print P/Order Info On Job Card |
| `JC_IVTYPE` | A1 | 1 | Inventory Levels Check Flag |
| `JC_PHONE` | A12 | 12 | Site Phone Number |
| `JC_FAXNUM` | A12 | 12 | Site Fax Number |
| `JC_DBLSPC` | A1 | 1 | Double Space Spec Lines Flag |
| `JC_CONTRACT` | D6 | 6 | Contract Number |
| `JC_COKEY` | A6 | 6 | Contract Number |
| `JC_OPCENTRE` | A3 | 3 | Operating Centre |
| `JC_DISTRICT` | A3 | 3 | District |
| `JC_FINDTE` | D7 | 7 | Finalisation Date |
| `JC_LABMRK` | D5 | 5 | Labour Markup |
| `JC_PURMRK` | D5 | 5 | Purchases Markup |
| `JC_MATMRK` | D5 | 5 | Materials Markup |
| `JC_OTHMRK` | D5 | 5 | Other Markup |
| `JC_SUBMRK` | D5 | 5 | Subcontractor Markup |
| `JC_GST_CODE` | A1 | 1 | Default GST Code |
| `JC_GST_MISC_AMT` | D11 | 11 | GST Amount for Freight/Misc |
| `JC_GST_WTD_AMT` | D11 | 11 | GST Amount for Tops/Windows/Doors |
| `JC_ZONE` | A9 | 9 | Job Zone |
| `JC_GST_AMT` | D9 | 9 | Tax Amount |
| `JC_GEN_TYPE` | A2 | 2 | Order Generation Type |
| `JC_VERSION` | D2 | 2 | Order Generation Version |
| `JC_DEFLREF` | A3 | 3 | Default Lines Ref |
| `JC_ALT_RATES` | A1 | 1 | If Y then use Rates off Job |
| `JC_LV_RATE` | D4 | 4 | Low Value Allow Rate |
| `JC_WST_RATE` | D4 | 4 | Wastage Allow Rate |
| `JC_PLANT` | A1 | 1 | Y = Plant Maintenance Job |
| `JC_JOBMGR` | A3 | 3 | Job Manager User Code |
| `JC_INV_METHOD` | A1 | 1 | Invoice Method |
| `JC_PINV_DEFLOAD` | A1 | 1 | Proforma Invoice Default Items Loaded |
| `JC_QA_USER` | A3 | 3 | QA User Initials |
| `JC_QA_ASS_DATE` | D7 | 7 | QA Assigned Date |
| `JC_QA_ASS_TIME` | D6 | 6 | QA Assigned Time |
| `JC_QA_CMP_DATE` | D7 | 7 | QA Completed Date |
| `JC_QA_CMP_TIME` | D6 | 6 | QA Completed Time |
| `JC_QA_INS_STS` | A1 | 1 | QA Inspection Status |
| `JC_PARENT` | A8 | 8 | Parent Job Number |
| `JC_ACTSLE` | D11 | 11 | Actual Sale Amount Billed |
| `JC_HIRE_TYPE` | A4 | 4 | Hire Asset Equipment Type |
| `JC_HIRE_RATE` | D8 | 8 | Hire Rate |
| `JC_HIRE_TERM` | A2 | 2 | Hire Terms Code |
| `JC_HIRE_DEL_FEE` | D8 | 8 | Hire Delivery Fee Amount |
| `JC_HIRE_DEL_INV` | A1 | 1 | Hire Delivery Fee Invoiced Flag |
| `JC_HIRE_DEL_LOC` | A6 | 6 | Hire Delivery Location |
| `JC_HIRE_COL_FEE` | D8 | 8 | Hire Collection Fee Amount |
| `JC_HIRE_COL_INV` | A1 | 1 | Hire Collection Fee Invoiced Flag |
| `JC_HIRE_COL_LOC` | A6 | 6 | Hire Collection Location |
| `JC_HIRE_INS_COD` | A4 | 4 | Hire Insurance Code |
| `JC_HIRE_EXC_COD` | A4 | 4 | Hire Excess Distance Code |
| `JC_HIRE_SBY_COD` | A4 | 4 | Hire Standby Charge Code |
| `JC_HIRE_BIL_DTE` | D7 | 7 | Hire Billed up to Date |
| `JC_MOBILE` | A12 | 12 | Site Mobile Phone Number |
| `JC_HIRE_MPO_RQD` | A1 | 1 | Hire Monthly PO Required |
| `JC_HIRE_OUT_DTE` | D7 | 7 | Hire Outgoing Date |
| `JC_BID_RATING_PCT` | D5 | 5 | Bid Priority Rating Percentage |
| `JC_JI_REV` | D3 | 3 | Job Information Revision Number |
| `JC_JOBNUM_OVERLAY` | A2 | 2 | Job Prefix |
| `JC_PROJECT` | A6 | 6 | Project |
| `JC_STAGE` | A2 | 2 | Stage |
| `JC_SUBSTAGE` | A1 | 1 | Sub-Stage |
| `JC_UNIT` | A3 | 3 | Unit Number |
| `JC_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JC_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JC_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JC_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JC_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JC_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JC_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JC_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Job Sections (JCSECTA)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JS_TYPE` | A1 | 1 | Record Type |
| `JS_JOBNUM` | A8 | 8 | Job Number |
| `JS_SECT` | A2 | 2 | Section Number |
| `JS_DESC` | A30 | 30 | Section Description |
| `JS_ORDER` | D3 | 3 | Display Order |
| `JS_ACTIVE` | A1 | 1 | Active Flag |
| `JS_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JS_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JS_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JS_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JS_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JS_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JS_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JS_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JS_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Job Sales Estimate Headings (JCSPEC_A)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSEA_TYPE` | A1 | 1 | Record Type |
| `JSEA_JOBNUM` | A8 | 8 | Job Number |
| `JSEA_SECT` | A2 | 2 | Section Number |
| `JSEA_HEADING` | A4 | 4 | Heading Code |
| `JSEA_TKEY` | A14 | 14 | Job No/Section No/Heading Code |
| `JSEA_SCRKEY` | A26 | 26 | Job No/Section No/Heading Code |
| `JSEA_CONST` | A10 | 10 | Job No/Section No |
| `JSEA_SPECCONST` | A23 | 23 | Job No/Section No/Heading Code |
| `JSEA_KEY` | A27 | 27 | Type/Job/Section/Heading Code |
| `JSEA_DESC` | A30 | 30 | Cost Centre Description |
| `JSEA_COST` | D9 | 9 | Total Cost |
| `JSEA_LCOST` | D9 | 9 | Labour Cost Amount |
| `JSEA_MCOST` | D9 | 9 | Material Cost Amount |
| `JSEA_OCOST` | D9 | 9 | Other Cost Amount |
| `JSEA_SCOST` | D9 | 9 | Subcontractor Cost Amount |
| `JSEA_PCOST` | D9 | 9 | Purchases Cost Amount |
| `JSEA_LEVEL` | A1 | 1 | Levels Below Flag |
| `JSEA_PROT` | A1 | 1 | Protect Cost Fields Flag |
| `JSEA_LSTSEQ` | D5 | 5 | Last Sequence Number |
| `JSEA_DFLVEN` | A8 | 8 | Default Vendor Code |
| `JSEA_ALTVEN` | A8 | 8 | Alternate Vendor Code |
| `JSEA_POALLOC` | D9 | 9 | Value Alloc to Nominated Suppliers |
| `JSEA_POBALANCE` | D9 | 9 | Value Alloc to Default Vendor |
| `JSEA_DISCTYPE` | A1 | 1 | Discount Type |
| `JSEA_DISCAMNT` | D6 | 6 | Discount Amount |
| `JSEA_PONET` | D9 | 9 | Net Amount |
| `JSEA_MISPRC` | A1 | 1 | Missing Prices Flag |
| `JSEA_NOMSUPP` | A1 | 1 | Nominated Supplier Present Flag |
| `JSEA_LOCKED` | A1 | 1 | Cost Centre Locked Flag |
| `JSEA_SALE` | D9 | 9 | Total Sale Amount |
| `JSEA_TEMPLATE` | A6 | 6 | Template |
| `JSEA_STATUS` | A1 | 1 | Status |
| `JSEA_SALEEST` | A3 | 3 | Sales Estimator Initials |
| `JSEA_MGNCDE` | A4 | 4 | Default Margin Code |
| `JSEA_MGNPCT` | D5 | 5 | Default Margin Percent |
| `JSEA_GST_CODE` | A1 | 1 | GST Tax Code |
| `JSEA_GST_AMOUNT` | D9 | 9 | GST Amount |
| `JSEA_ORIGHEAD` | A4 | 4 | Original Heading Used |
| `JSEA_GST_INC` | A1 | 1 | Sale Amount GST Inclusive |
| `JSEA_CATALOG` | A15 | 15 | Catalog Code |
| `JSEA_SEL` | A1 | 1 | Heading Selected |
| `JSEA_VAR_SEQ` | D3 | 3 | Variation No |
| `JSEA_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JSEA_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JSEA_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JSEA_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JSEA_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JSEA_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JSEA_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JSEA_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JSEA_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Job Sales Estimate Paragraphs (JCSPEC_B)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSEB_TYPE` | A1 | 1 | Record Type |
| `JSEB_JOBNUM` | A8 | 8 | Job Number |
| `JSEB_SECT` | A2 | 2 | Sequence Number |
| `JSEB_HEADING` | A4 | 4 | Heading Code |
| `JSEB_PARAGRAPH` | A4 | 4 | Paragraph Code |
| `JSEB_TKEY` | A18 | 18 | Job No/Seq No/Dept/Paragraph Code |
| `JSEB_SCRKEY` | A26 | 26 | Job/Seq/Heading/Paragraph Code |
| `JSEB_CONST` | A14 | 14 | Job No/Seq No/Heading Code |
| `JSEB_SPECCONST` | A23 | 23 | Job No/Section No/Heading Code |
| `JSEB_KEY` | A27 | 27 | Type/Job/Seq/Heading/Paragraph Code |
| `JSEB_DESC` | A30 | 30 | Cost Centre Description |
| `JSEB_COST` | D9 | 9 | Total Cost |
| `JSEB_LCOST` | D9 | 9 | Labour Cost Amount |
| `JSEB_MCOST` | D9 | 9 | Material Cost Amount |
| `JSEB_OCOST` | D9 | 9 | Other Cost Amount |
| `JSEB_SCOST` | D9 | 9 | Subcontractor Cost Amount |
| `JSEB_PCOST` | D9 | 9 | Purchases Cost Amount |
| `JSEB_LEVEL` | A1 | 1 | Levels Entered Below Flag |
| `JSEB_PROT` | A1 | 1 | Protect Cost Fields Flag |
| `JSEB_LSTSEQ` | D5 | 5 | Last Sequence Number |
| `JSEB_DFLVEN` | A8 | 8 | Default Vendor Code |
| `JSEB_ALTVEN` | A8 | 8 | Alternate Vendor Code |
| `JSEB_POALLOC` | D9 | 9 | Value Alloc to Nominated Suppliers |
| `JSEB_POBALANCE` | D9 | 9 | Value Alloc to Default Vendor |
| `JSEB_DISCTYPE` | A1 | 1 | Discount Type |
| `JSEB_DISCAMNT` | D6 | 6 | Discount Amount |
| `JSEB_PONET` | D9 | 9 | Net Amount |
| `JSEB_MISPRC` | A1 | 1 | Missing Prices in Items Flag |
| `JSEB_NOMSUPP` | A1 | 1 | Nominated Supplier Present Flag |
| `JSEB_LOCKED` | A1 | 1 | Cost Centre Locked Flag |
| `JSEB_SALE` | D9 | 9 | Total Selling Amount |
| `JSEB_TEMPLATE` | A6 | 6 | Template |
| `JSEB_SUBTOTAL` | A1 | 1 | Print Sub Totals |
| `JSEB_MGNCDE` | A4 | 4 | Default Margin Code |
| `JSEB_MGNPCT` | D5 | 5 | Default Margin Percent |
| `JSEB_GST_INC` | A1 | 1 | If Yes then Sale Includes GST |
| `JSEB_GST_AMOUNT` | D9 | 9 | GST Amount |
| `JSEB_FMTOPT` | A1 | 1 | Formatting Option |
| `JSEB_COLOUR` | A6 | 6 | Hex Colour for Sales Auto |
| `JSEB_SORTORDER` | D6 | 6 | Sort Order |
| `JSEB_XI_GROUP` | A6 | 6 | Extra Information Group |
| `JSEB_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JSEB_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JSEB_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JSEB_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JSEB_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JSEB_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JSEB_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JSEB_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JSEB_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Production Estimate Cost Centres (JCSPECH)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSH_TYPE` | A1 | 1 | Record Type |
| `JSH_JOBNUM` | A8 | 8 | Job Number |
| `JSH_SECT` | A2 | 2 | Sequence Number |
| `JSH_DEPT` | A2 | 2 | Department |
| `JSH_CSTCTR` | A3 | 3 | Cost Centre |
| `JSH_TKEY` | A15 | 15 | Job No/Seq No/Dept/Cost Centre |
| `JSH_SCRKEY` | A26 | 26 | Job No/Seq No/Dept/Cost Centre |
| `JSH_CONST` | A12 | 12 | Job No/Seq No/Dept |
| `JSH_KEY` | A27 | 27 | Type/Job/Seq No/Dept/Cost Ctr |
| `JSH_DESC` | A30 | 30 | Cost Centre Description |
| `JSH_COST` | D9 | 9 | Total Cost |
| `JSH_LCOST` | D9 | 9 | Labour Cost Amount |
| `JSH_MCOST` | D9 | 9 | Material Cost Amount |
| `JSH_OCOST` | D9 | 9 | Other Cost Amount |
| `JSH_SCOST` | D9 | 9 | Subcontractor Cost Amount |
| `JSH_PCOST` | D9 | 9 | Purchases Cost Amount |
| `JSH_LEVEL` | A1 | 1 | Additional Levels Entered Flag |
| `JSH_PROT` | A1 | 1 | Protect Cost Fields Flag |
| `JSH_LSTSEQ` | D5 | 5 | Last Seq No for Cost Centre |
| `JSH_DFLVEN` | A8 | 8 | Default Vendor Code |
| `JSH_ALTVEN` | A8 | 8 | Alternate Vendor Code |
| `JSH_POALLOC` | D9 | 9 | Value Alloc to Nominated Suppliers |
| `JSH_POBALANCE` | D9 | 9 | Value Alloc to Default Vendor |
| `JSH_DISCTYPE` | A1 | 1 | Discount Type |
| `JSH_DISCAMNT` | D6 | 6 | Discount Amount |
| `JSH_PONET` | D9 | 9 | Net Amount from Default Vendor |
| `JSH_MISPRC` | A1 | 1 | Missing Prices Flag |
| `JSH_NOMSUPP` | A1 | 1 | Nominated Supplier Present Flag |
| `JSH_LOCKED` | A1 | 1 | Cost Centre Locked Flag |
| `JSH_ESTSLE` | D9 | 9 | Estimated Sales Value |
| `JSH_STATUS_SET` | A1 | 1 | Cost Centre Contains Lines with Status Set |
| `JSH_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JSH_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JSH_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JSH_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JSH_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JSH_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JSH_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JSH_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JSH_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Production Estimate Details (JCSPECI)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSE_TYPE` | A1 | 1 | Record Type |
| `JSE_JOBNUM` | A8 | 8 | Job Number |
| `JSE_SECT` | A2 | 2 | Sequence Number |
| `JSE_DEPT` | A2 | 2 | Department |
| `JSE_CSTCTR` | A3 | 3 | Cost Centre |
| `JSE_SEQ` | D5 | 5 | Sequence Number |
| `JSE_SCRKEY` | A20 | 20 | Job/Sect/Dept/Cost Ctr/Seq No |
| `JSE_JOBSECT` | A10 | 10 | Job/Sect |
| `JSE_CONST` | A15 | 15 | Job No/Seq No/Dept/Cost Ctr |
| `JSE_KEY` | A27 | 27 | Type/Job/Seq/Dept/Cost Ctr/Seq |
| `JSE_ITMNUM` | A15 | 15 | Item Number |
| `JSE_ESTQTY` | D9 | 9 | Estimated Quantity |
| `JSE_DESC` | A30 | 30 | Cost Centre Description |
| `JSE_COST` | D9 | 9 | Total Cost |
| `JSE_LCOST` | D9 | 9 | Labour Cost Amount |
| `JSE_MCOST` | D9 | 9 | Material Cost Amount |
| `JSE_OCOST` | D9 | 9 | Other Cost Amount |
| `JSE_SCOST` | D9 | 9 | Subcontractor Cost Amount |
| `JSE_PCOST` | D9 | 9 | Purchases Cost Amount |
| `JSE_LEVEL` | A1 | 1 | Levels Entered Below Flag |
| `JSE_PROT` | A1 | 1 | Protect Cost Fields Flag |
| `JSE_SCHED` | A2 | 2 | Schedule Code |
| `JSE_BOQFLG` | A1 | 1 | Bill Of Quantities Flag |
| `JSE_SUPLCD` | A30 | 30 | Supplier's Code |
| `JSE_EDESC` | A30 | 30 | Extra Description |
| `JSE_UOM` | A4 | 4 | Unit of Measure |
| `JSE_VENDOR` | A8 | 8 | Nominated Vendor Code |
| `JSE_MISPRC` | A1 | 1 | Missing Price Flag |
| `JSE_POALLOC` | D9 | 9 | Total Value of Bill Lines |
| `JSE_NOMSUPP` | A1 | 1 | Nominated Suppliers Exist Flag |
| `JSE_LOCKED` | A1 | 1 | Section Locked Flag |
| `JSE_FC_UCOST` | D9 | 9 | Foreign Currency Amount |
| `JSE_FC_RTYPE` | A1 | 1 | Multi Currency Rate Type |
| `JSE_FC_RATE` | D10 | 10 | Multi Currency Rate |
| `JSE_CURRENCY` | A6 | 6 | Currency Code |
| `JSE_FC_DATE` | D7 | 7 | Date Rate was Taken |
| `JSE_UPRICE` | D9 | 9 | Sell Price (Plant System) |
| `JSE_INFL_COST` | D9 | 9 | Inflated Total Cost |
| `JSE_INFL_LCOST` | D9 | 9 | Inflated Labour Cost Amount |
| `JSE_INFL_MCOST` | D9 | 9 | Inflated Material Cost Amount |
| `JSE_INFL_OCOST` | D9 | 9 | Inflated Other Cost Amount |
| `JSE_INFL_SCOST` | D9 | 9 | Inflated Subcontractor Cost Amount |
| `JSE_INFL_PCOST` | D9 | 9 | Inflated Purchases Cost Amount |
| `JSE_USRDEF` | A2 | 2 | User Code |
| `JSE_TFR_TO_ORD` | A1 | 1 | Line Transferred to Order Line |
| `JSE_QTY_ISS` | D9 | 9 | Quantity Issued |
| `JSE_IS_VAR_COST` | A1 | 1 | Variable Cost Line |
| `JSE_NO_EQUIP_ITMS` | D3 | 3 | Number of Equipment Items |
| `JSE_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JSE_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JSE_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JSE_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JSE_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JSE_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JSE_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JSE_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JSE_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Production Estimate Detail Specs (JCSPECJ)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSJ_TYPE` | A1 | 1 | Record Type |
| `JSJ_JOBNUM` | A8 | 8 | Job Number |
| `JSJ_SECT` | A2 | 2 | Sequence Number |
| `JSJ_DEPT` | A2 | 2 | Department |
| `JSJ_CSTCTR` | A3 | 3 | Cost Centre |
| `JSJ_SEQ` | D5 | 5 | Detailed Item Sequence Number |
| `JSJ_IBMSEQ` | D3 | 3 | Item Bill of Materials Seq No |
| `JSJ_SPCSEQ` | D3 | 3 | Specification Sequence Number |
| `JSJ_SCRKEY` | A26 | 26 | Job/Seq/Dept/Cost Ctr/Item Seq/BOM seq/Spec Seq |
| `JSJ_CONST` | A23 | 23 | Job/Seq/Dept/Cost Ctr/Item Seq/BOM seq |
| `JSJ_ADOCSEQ` | A3 | 3 | Sequence Used by Doc Reg |
| `JSJ_KEY` | A27 | 27 | Type/Job/Seq/Dept/Cost Ctr/Item Seq/BOM seq/Spec Seq |
| `JSJ_DESC` | A50 | 50 | Specification Description |
| `JSJ_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JSJ_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JSJ_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JSJ_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JSJ_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JSJ_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JSJ_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JSJ_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JSJ_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Production Estimate Bill of Materials (JCSPECK)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSK_TYPE` | A1 | 1 | Record Type |
| `JSK_JOBNUM` | A8 | 8 | Job Number |
| `JSK_SECT` | A2 | 2 | Sequence Number |
| `JSK_DEPT` | A2 | 2 | Department |
| `JSK_CSTCTR` | A3 | 3 | Cost Centre |
| `JSK_SEQ` | D5 | 5 | Detailed Item Sequence No |
| `JSK_IBMSEQ` | D3 | 3 | Item Bill of Materials Seq No |
| `JSK_CONST_CC` | A15 | 15 | Job/Seq/Dept/Cost Ctr |
| `JSK_SCRKEY` | A23 | 23 | Job/Seq/Dept/Cost Ctr/Item Seq/BOM seq |
| `JSK_CONST` | A20 | 20 | Job/Seq/Dept/Cost Ctr/Item Seq |
| `JSK_TYPECONST` | A21 | 21 | Type/Job/Seq/Dept/Cost Ctr/Item Seq |
| `JSK_KEY` | A27 | 27 | Type/Job/Seq/Dept/Cost Ctr/Item Seq |
| `JSK_ITMNUM` | A15 | 15 | Item Number |
| `JSK_ESTQTY` | D9 | 9 | Estimated Quantity |
| `JSK_DESC` | A30 | 30 | Item Description |
| `JSK_COST` | D9 | 9 | Total Unit Cost |
| `JSK_LCOST` | D9 | 9 | Labour Unit Cost Amount |
| `JSK_MCOST` | D9 | 9 | Material Unit Cost Amount |
| `JSK_OCOST` | D9 | 9 | Other Unit Cost Amount |
| `JSK_SCOST` | D9 | 9 | Subcontractor Unit Cost Amount |
| `JSK_PCOST` | D9 | 9 | Purchases Unit Cost Amount |
| `JSK_LEVEL` | A1 | 1 | Levels Entered Below Flag |
| `JSK_PROT` | A1 | 1 | Protect Cost Fields Flag |
| `JSK_UOM` | A4 | 4 | Unit of Measure |
| `JSK_LEN` | D9 | 9 | Length |
| `JSK_SCHED` | A2 | 2 | Schedule Code |
| `JSK_SUPLCD` | A30 | 30 | Supplier's Code |
| `JSK_EDESC` | A30 | 30 | Extra Description |
| `JSK_EXT` | A10 | 10 | Extension Codes |
| `JSK_VENDOR` | A8 | 8 | Nominated Vendor Code |
| `JSK_MISPRC` | A1 | 1 | Missing Price Flag |
| `JSK_VENFLG` | A1 | 1 | Nominated Supplier Entered Flag |
| `JSK_INFL_COST` | D9 | 9 | Inflated Total Cost |
| `JSK_INFL_LCOST` | D9 | 9 | Inflated Labour Cost Amount |
| `JSK_INFL_MCOST` | D9 | 9 | Inflated Material Cost Amount |
| `JSK_INFL_OCOST` | D9 | 9 | Inflated Other Cost Amount |
| `JSK_INFL_SCOST` | D9 | 9 | Inflated Subcontractor Cost Amount |
| `JSK_INFL_PCOST` | D9 | 9 | Inflated Purchases Cost Amount |
| `JSK_UPRICE` | D9 | 9 | Unit Price (Plant System) |
| `JSK_USRDEF` | A2 | 2 | User Code |
| `JSK_SORTORDER` | D6 | 6 | Sort Order |
| `JSK_STATUS` | A3 | 3 | Line Status |
| `JSK_LOCKED` | A1 | 1 | Locked (PO Created) |
| `JSK_PONUM` | A15 | 15 | PO Number |
| `JSK_POLINE` | D3 | 3 | PO Line Number |
| `JSK_POLINEA` | A3 | 3 | PO Line Number |
| `JSK_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JSK_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JSK_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JSK_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JSK_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JSK_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JSK_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JSK_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JSK_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Sales Estimate Detail Specs (JCSPEC0)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JS0_TYPE` | A1 | 1 | Record Type |
| `JS0_JOBNUM` | A8 | 8 | Job Number |
| `JS0_SECT` | A2 | 2 | Sequence Number |
| `JS0_HEADING` | A4 | 4 | Heading Code |
| `JS0_PARAGRAPH` | A4 | 4 | Paragraph Code |
| `JS0_DETSEQ` | D5 | 5 | Sequence Code |
| `JS0_SPCSEQ` | D3 | 3 | Specification Sequence Number |
| `JS0_JTYP` | A1 | 1 | Job Type |
| `JS0_SCRKEY` | A26 | 26 | Job/Sect/Head/Para/Det Seq/Spec Seq |
| `JS0_CONST` | A23 | 23 | Job/Sect/Head/Para/Det Seq |
| `JS0_KEY` | A27 | 27 | Type/Job/Sect/Head/Para/Det Seq/Spec Seq |
| `JS0_DESC` | A50 | 50 | Specification Description |
| `JS0_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JS0_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JS0_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JS0_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JS0_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JS0_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JS0_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JS0_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JS0_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Job Contract Information (JCSPECM)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSM_TYPE` | A1 | 1 | Record Type |
| `JSM_JOBNUM` | A8 | 8 | Job Number |
| `JSM_SCRKEY` | A8 | 8 | Job No |
| `JSM_KEY` | A27 | 27 | Type/Job Number |
| `JSM_VARVALUE` | D9 | 9 | Value of Variations |
| `JSM_RETPCT` | D4 | 4 | Retention Percent |
| `JSM_CEILPCT` | D4 | 4 | Ceiling Retention Percent |
| `JSM_CEILAMT` | D9 | 9 | Ceiling Retention Amount |
| `JSM_RETREL` | D4 | 4 | Retention Release Days |
| `JSM_CONPERC` | D5 | 5 | % Contract Value Complete |
| `JSM_RETVAR` | A1 | 1 | Retention Ceiling Incl Var |
| `JSM_RETAINED` | D9 | 9 | Retentions Allow for to Date |
| `JSM_2RETREL` | D4 | 4 | Retention Release Days 2 |
| `JSM_2RETPC` | D4 | 4 | % of Retention Held |
| `JSM_RETBASE` | A1 | 1 | Retention Release Based On |
| `JSM_VARPERC` | D5 | 5 | % Variations Value Complete |
| `JSM_PREV_RET` | A1 | 1 | Show Value of Prev Retentions on Invoice |
| `JSM_CURR_RET` | A1 | 1 | Show Retention Allowed for |
| `JSM_PERC_SET` | D1 | 1 | % Complete Set from Sections |
| `JSM_CONCLAIM` | D9 | 9 | Contract Amount Claimable |
| `JSM_VARCLAIM` | D9 | 9 | Variations Amount Claimable |
| `JSM_ESTAMT` | D9 | 9 | Total Sell Price of Est Lines |
| `JSM_ESTCST` | D9 | 9 | Total Cost of Estimate Lines |
| `JSM_SPCCST` | D9 | 9 | Total Cost of Stock Spec Lines |
| `JSM_LEAD_DAYS` | D3 | 3 | Max No of Lead Days |
| `JSM_CSTCTR` | A3 | 3 | Max Lead Days Cost Centre |
| `JSM_UNITS` | D6 | 6 | No of Units for Job Scheduling |
| `JSM_JAN` | D8 | 8 | Projected Monthly Charges Jan |
| `JSM_FEB` | D8 | 8 | Projected Monthly Charges Feb |
| `JSM_MAR` | D8 | 8 | Projected Monthly Charges Mar |
| `JSM_APR` | D8 | 8 | Projected Monthly Charges Apr |
| `JSM_MAY` | D8 | 8 | Projected Monthly Charges May |
| `JSM_JUN` | D8 | 8 | Projected Monthly Charges Jun |
| `JSM_JUL` | D8 | 8 | Projected Monthly Charges Jul |
| `JSM_AUG` | D8 | 8 | Projected Monthly Charges Aug |
| `JSM_SEP` | D8 | 8 | Projected Monthly Charges Sep |
| `JSM_OCT` | D8 | 8 | Projected Monthly Charges Oct |
| `JSM_NOV` | D8 | 8 | Projected Monthly Charges Nov |
| `JSM_DEC` | D8 | 8 | Projected Monthly Charges Dec |
| `JSM_AREACODE` | A6 | 6 | Area Code |
| `JSM_MNTPERIOD` | A1 | 1 | Period Code |
| `JSM_D_ANS1` | A10 | 10 | Answer 1 |
| `JSM_D_ANS2` | A10 | 10 | Answer 2 |
| `JSM_D_ANS3` | A10 | 10 | Answer 3 |
| `JSM_D_PRCDE` | A2 | 2 | Price Code |
| `JSM_PLANT` | A15 | 15 | Default Plant Code |
| `JSM_QUOTEREF` | A8 | 8 | Quote Reference Number |
| `JSM_ANS1DSC` | A20 | 20 | Answer 1 Description |
| `JSM_ANS2DSC` | A20 | 20 | Answer 2 Description |
| `JSM_ANS3DSC` | A20 | 20 | Answer 3 Description |
| `JSM_DECLDATE` | D7 | 7 | Declare Margin Date |
| `JSM_ENT_USER` | A12 | 12 | Job Entered User Name |
| `JSM_ENT_DATE` | D7 | 7 | Job Entered Date |
| `JSM_ENT_TIME` | D6 | 6 | Job Entered Time |
| `JSM_PRODEST` | A3 | 3 | Prod Estimator Code |
| `JSM_AREA` | A4 | 4 | Price Area |
| `JSM_EFFECTIVE` | D7 | 7 | Job Effective Date |
| `JSM_ESTCODE` | A3 | 3 | Sales Estimator Code |
| `JSM_DAEST` | A3 | 3 | Design Assessor Estimator Code |
| `JSM_QUOTEEST` | A3 | 3 | Quote Estimator Code |
| `JSM_DECLCVAL` | D11 | 11 | Declare Margin Contract Value |
| `JSM_DECLCOST` | D11 | 11 | Declare Margin Costs |
| `JSM_SYNCSTATUS` | A1 | 1 | Sync Status |
| `JSM_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `JSM_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `JSM_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `JSM_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `JSM_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `JSM_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `JSM_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `JSM_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |
