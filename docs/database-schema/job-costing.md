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
| `JC_INSTR` | D1 | 1 | Order Print Generation Instructions |
| `JC_DELIV` | D1 | 1 | Order Print Delivery Instructions |
| `JC_SPEC` | D1 | 1 | Order Print Specifications |
| `JC_TOTPGE` | D3 | 3 | Total Number of Pages to Print |
| `JC_LEADTIME` | D3 | 3 | Max Lead Time for Order |
| `JC_GRSALE` | D9 | 9 | Gross Sale Amount |
| `JC_LOC` | A2 | 2 | Default Location on Inventory File |
| `JC_DESPFLG` | A1 | 1 | A Quantity Supplied Flag |
| `JC_QUOTEFLG` | A1 | 1 | Override Estimated Sale Price Flag |
| `JC_SPCAMT` | D9 | 9 | Total of All Specification Lines |
| `JC_COMCDE` | A2 | 2 | Commission Code |
| `JC_COMPCT` | D4 | 4 | Commission Rate |
| `JC_COMDUE` | D9 | 9 | Commission Due |
| `JC_QTYTOT` | A1 | 1 | Sub-Total Quantity |
| `JC_QTYUNT` | A1 | 1 | Sub-Total Unit Price |
| `JC_QTYEXT` | A1 | 1 | Sub-Total Extended Price |
| `JC_HDJUST` | A1 | 1 | Heading Justification |
| `JC_REPWID` | D3 | 3 | Report Width |
| `JC_PARTDLV` | A1 | 1 | Accept Partial Delivery of Back Order |
| `JC_PRTPUR` | A1 | 1 | Print Purchase Order Info on Job Card |
| `JC_IVTYPE` | A1 | 1 | Inventory Levels Check Flag |
| `JC_PHONE` | A12 | 12 | Site Phone Number |
| `JC_FAXNUM` | A12 | 12 | Site Fax Number |
| `JC_DBLSPC` | A1 | 1 | Double Space Specification Lines Flag |
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
| `JC_DEFLREF` | A3 | 3 | Default Lines Reference |
| `JC_ALT_RATES` | A1 | 1 | Use Rates off Job Flag |
| `JC_LV_RATE` | D4 | 4 | Low Value Allow Rate |
| `JC_WST_RATE` | D4 | 4 | Wastage Allow Rate |
| `JC_PLANT` | A1 | 1 | Plant Maintenance Job Flag |
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
| `JC_HIRE_BIL_DTE` | D7 | 7 | Hire Billed Up to Date |
| `JC_MOBILE` | A12 | 12 | Site Mobile Phone Number |
| `JC_HIRE_MPO_RQD` | A1 | 1 | Hire Monthly Purchase Order Required |
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
| `JS_JOBNUM` | A8 | 8 | Job Number |
| `JS_SECT` | A2 | 2 | Job Section |
| `JS_KEY` | A10 | 10 | Job Number/Section |
| `JS_DESC` | A30 | 30 | Section Description |
| `JS_SCHDTE` | D7 | 7 | Schedule Start Date |
| `JS_PRMDTE` | D7 | 7 | Promised Date |
| `JS_CMPDTE` | D7 | 7 | Actual Completion Date |
| `JS_PCTCMP` | D5 | 5 | Percentage Complete |
| `JS_ESTLAB` | D9 | 9 | Estimated Labour Cost |
| `JS_ESTMAT` | D9 | 9 | Estimated Material Cost |
| `JS_ESTOVR` | D9 | 9 | Estimated Overhead Cost |
| `JS_ESTTOT` | D9 | 9 | Estimated Total Cost |
| `JS_ACTLAB` | D9 | 9 | Actual Labour Cost |
| `JS_ACTMAT` | D9 | 9 | Actual Material Cost |
| `JS_ACTOVR` | D9 | 9 | Actual Overhead Cost |
| `JS_ACTTOT` | D9 | 9 | Actual Total Cost |

## Job Sales Estimate Headings (JCSPECA)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSEA_JOBNUM` | A8 | 8 | Job Number |
| `JSEA_SECT` | A2 | 2 | Job Section |
| `JSEA_HEADING` | A3 | 3 | Heading Number |
| `JSEA_DESC` | A30 | 30 | Heading Description |
| `JSEA_AMOUNT` | D9 | 9 | Heading Amount |
| `JSEA_PCT` | D5 | 5 | Percentage of Total |
| `JSEA_TYPE` | A1 | 1 | Heading Type |
| `JSEA_ORDER` | D3 | 3 | Display Order |

## Job Sales Estimate Paragraphs (JCSPECB)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSEB_JOBNUM` | A8 | 8 | Job Number |
| `JSEB_SECT` | A2 | 2 | Job Section |
| `JSEB_HEADING` | A3 | 3 | Heading Number |
| `JSEB_PARAGRAPH` | A3 | 3 | Paragraph Number |
| `JSEB_DESC` | A50 | 50 | Paragraph Description |
| `JSEB_AMOUNT` | D9 | 9 | Paragraph Amount |
| `JSEB_PCT` | D5 | 5 | Percentage of Heading |
| `JSEB_TYPE` | A1 | 1 | Paragraph Type |
| `JSEB_ORDER` | D3 | 3 | Display Order |

## Production Estimate Cost Centres (JCSPECH)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSH_JOBNUM` | A8 | 8 | Job Number |
| `JSH_SECT` | A2 | 2 | Job Section |
| `JSH_DEPT` | A3 | 3 | Department Code |
| `JSH_DESC` | A30 | 30 | Department Description |
| `JSH_ESTLAB` | D9 | 9 | Estimated Labour Cost |
| `JSH_ESTMAT` | D9 | 9 | Estimated Material Cost |
| `JSH_ESTOVR` | D9 | 9 | Estimated Overhead Cost |
| `JSH_ESTTOT` | D9 | 9 | Estimated Total Cost |
| `JSH_ACTLAB` | D9 | 9 | Actual Labour Cost |
| `JSH_ACTMAT` | D9 | 9 | Actual Material Cost |
| `JSH_ACTOVR` | D9 | 9 | Actual Overhead Cost |
| `JSH_ACTTOT` | D9 | 9 | Actual Total Cost |

## Production Estimate Details (JCSPECI)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `JSE_JOBNUM` | A8 | 8 | Job Number |
| `JSE_SECT` | A2 | 2 | Job Section |
| `JSE_DEPT` | A3 | 3 | Department Code |
| `JSE_ITMNUM` | A15 | 15 | Item Number |
| `JSE_DESC` | A30 | 30 | Item Description |
| `JSE_QTY` | D9 | 9 | Quantity |
| `JSE_UNIT` | A3 | 3 | Unit of Measure |
| `JSE_COST` | D9 | 9 | Unit Cost |
| `JSE_AMOUNT` | D9 | 9 | Line Amount |
| `JSE_TYPE` | A1 | 1 | Line Type |
| `JSE_ORDER` | D3 | 3 | Display Order |