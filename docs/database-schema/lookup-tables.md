# Lookup Tables

## User Category (COTABLD)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTD_TYPE` | A1 | 1 | Table Type |
| `COTD_CODE` | A2 | 2 | User Category Code |
| `COTD_KEY` | A10 | 10 | Key |
| `COTD_TITLE` | A30 | 30 | User Category Title |
| `COTD_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTD_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTD_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTD_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTD_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTD_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTD_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTD_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTD_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## User Table (COTABLG)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTG_TYPE` | A1 | 1 | Table Type |
| `COTG_CODE` | A3 | 3 | User Code |
| `COTG_KEY` | A10 | 10 | Primary Key |
| `COTG_TKEY` | A4 | 4 | Primary Key |
| `COTG_NAME` | A30 | 30 | User Name |
| `COTG_CATCODE` | A2 | 2 | User Category Code |
| `COTG_OFFCODE` | A6 | 6 | User Office Code |
| `COTG_PHONE` | A12 | 12 | User Phone Number |
| `COTG_FAX` | A12 | 12 | User Fax |
| `COTG_MOBILE` | A12 | 12 | User Mobile |
| `COTG_ACTIVE` | A1 | 1 | User is Active |
| `COTG_OPCENTRE` | A3 | 3 | User Default Op Centre |
| `COTG_DISTRICT` | A3 | 3 | User Default District |
| `COTG_EMAIL` | A80 | 80 | User Email Address |
| `COTG_MANAGER` | A3 | 3 | Users Manager |
| `COTG_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTG_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTG_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTG_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTG_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTG_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTG_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTG_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTG_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Projects (COTABLP)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTP_TYPE` | A1 | 1 | Table Type |
| `COTP_CODE` | A6 | 6 | Project Code |
| `COTP_KEY` | A10 | 10 | Key |
| `COTP_DESC` | A30 | 30 | Description |
| `COTP_OPCENTRE` | A3 | 3 | Operating Centre |
| `COTP_DISTRICT` | A3 | 3 | District |
| `COTP_CUSNUM` | A6 | 6 | Customer Code |
| `COTP_SUP_PATH` | A1 | 1 | Suppress Path Creation |
| `COTP_ACTIVE` | A1 | 1 | Active Flag |
| `COTP_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTP_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTP_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTP_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTP_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTP_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTP_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTP_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTP_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |



## Word Processing Document Types (IVCTBLP)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `IVWP_TYPE` | A1 | 1 | Table Type (P = Word Proc Document Types) |
| `IVWP_MODULE` | A2 | 2 | Module/Package that Document Belongs to |
| `IVWP_SUBAREA` | A2 | 2 | SubArea within Module |
| `IVWP_CODE` | A5 | 5 | Document Type Code |
| `IVWP_SCRKEY` | A9 | 9 | Primary Key (Type+Module+SubArea+Code) |
| `IVWP_MODSUB` | A6 | 6 | Module+SubArea |
| `IVWP_KEY` | A10 | 10 | Primary Key (Type+Module+SubArea+Code) |
| `IVWP_DESCR` | A30 | 30 | Description |
| `IVWP_PATH` | A30 | 30 | Directory Path to Store Docs |
| `IVWP_FILE` | A30 | 30 | File Name for Master/Template |
| `IVWP_EDTCMD` | A30 | 30 | Editing Command |
| `IVWP_EDTPAR` | A30 | 30 | Editing Parameters Passed to Edit Command |
| `IVWP_MERGEFMT` | A1 | 1 | Mail Merge Format |
| `IVWP_EXT` | A3 | 3 | Extension |
| `IVWP_NOCHNG` | A1 | 1 | No Changes Allowed After Initial Creation |
| `IVWP_MERGE_NOTES` | A1 | 1 | Y= Merge Document Register Notes |
| `IVWP_ACTIVE` | A1 | 1 | Y= Active |
| `IVWP_CATG` | A5 | 5 | Document Register Category |
| `IVWP_FILE2` | A30 | 30 | File Name for Master/Template Continued |
| `IVWP_OFFLINE` | A1 | 1 | Y= Available Offline |
| `IVWP_MSGREF` | A10 | 10 | Default Message REF |
| `IVWP_MSGTEMPLATE` | A6 | 6 | Default Message Template |
| `IVWP_DESC_OPT` | A1 | 1 | Description Load Option F=Filename |
| `IVWP_INC_SLSEST` | A1 | 1 | Output Sales Estimate |
| `IVWP_INC_JOBINFO` | A1 | 1 | Output Job Info Lines |
| `IVWP_ARC_DOCS` | A1 | 1 | Y = Allow Document Archive |
| `IVWP_ARC_PATH` | A30 | 30 | Custom Document Archive Path |
| `IVWP_LIB_DOCTYP` | A5 | 5 | Default Doc Type for Library |
| `IVWP_COMP_QUAL` | D3 | 3 | Compression Quality Between 0-100 |
| `IVWP_COMP_WDTH` | D4 | 4 | Compression Image Width |
| `IVWP_COMP_HGTH` | D4 | 4 | Compression Image Height |
| `IVWP_COMP_RSZE` | D1 | 1 | Compression Image Resize Mode |
| `IVWP_RATING` | A1 | 1 | Default Importance Rating |
| `IVWP_PRIVACY` | A2 | 2 | Default Privacy Flag |
| `IVWP_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `IVWP_MOD_DATE` | D7 | 7 | Transaction Audit Date (Julian) |
| `IVWP_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `IVWP_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `IVWP_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `IVWP_CRE_DATE` | D7 | 7 | Transaction Audit Date (Julian) |
| `IVWP_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `IVWP_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Cost Centre Table (JOBTBLA)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CC_TYPE` | A1 | 1 | Table Type (A = Cost Centre Description) |
| `CC_CODE` | A3 | 3 | Cost Centre Code |
| `CC_KEY` | A7 | 7 | Type/Cost Centre Code (Primary Key) |
| `CC_DESC` | A40 | 40 | Cost Centre Description |
| `CC_PR_HOUR_TYPE` | A2 | 2 | Default Hour Type for Pay |
| `CC_PO_INTCMP_TFR` | A1 | 1 | Transfer PO for InterCompany Transfer Flag |
| `CC_PO_LEAD_TIME` | D3 | 3 | PO Call Up Lead Time (in Days) |
| `CC_VEND` | A8 | 8 | Default Vendor Code |
| `CC_SORTCODE` | A4 | 4 | Sort Code for Printing |
| `CC_DESCPRT` | A1 | 1 | Print Description on PO Flag |
| `CC_QTYPRT` | A1 | 1 | Print Quantity on PO Flag |
| `CC_RATEPRT` | A1 | 1 | Print Rate on PO Flag |
| `CC_EXPRPRT` | A1 | 1 | Print Extended Price on PO Flag |
| `CC_STRTEVNT` | D5 | 5 | Starting Event for PO Generation |
| `CC_ENDEVNT` | D5 | 5 | Ending Event for PO Generation |
| `CC_BATCHPRT` | A1 | 1 | Print POs from this CC Flag on Batch Prints |
| `CC_POSUPPRS` | A1 | 1 | Suppress POs Flag When "Create PO from Est" |
| `CC_STRTMTCH` | D5 | 5 | Starting Event for Allowing PO Matching |
| `CC_ENDMTCH` | D5 | 5 | Ending Event for Allowing PO Matching |
| `CC_PRELIMORD` | A1 | 1 | POs are Preliminary Orders Flag |
| `CC_SUPPRESS` | A1 | 1 | Suppress Cost Centre Flag in ALL Explosions |
| `CC_FINISH_ACC` | A15 | 15 | Alt Finished Goods GL Account |
| `CC_FG_OPT` | A1 | 1 | Finished Goods Option (A=Actual, O=Outstanding P/O, B=Both) |
| `CC_PRCDE` | A2 | 2 | Price Code |
| `CC_SAVPLAN` | A1 | 1 | Savings Plan Cost Centre Flag |
| `CC_CHANGE_VEND` | A1 | 1 | Allow Vendor Change at Order Generation Flag |
| `CC_PRTPRICE` | A1 | 1 | Print Prices on PO Flag |
| `CC_ACTIVE` | A1 | 1 | Cost Centre is Active Flag |


## BuiltGrid Integration Notes

The lookup tables provide essential reference data for BuiltGrid integration across multiple business processes:

- **Customer Management**: Titles and user categories for contact management
- **Project Management**: Projects, operating centres, and districts for job organization
- **Sales Management**: Sale types and sales groups for contract classification
- **Event Management**: Event definitions for contract lifecycle tracking
- **Document Management**: Word processing document types for contract documentation
- **Cost Management**: Cost centres for job costing and procurement

These tables support the complete business workflow from customer creation through to project completion and are essential for accurate data classification, reporting, and process automation in the BuiltGrid integration.
| `PC_GROUP` | A2 | 2 | Product Group |
| `PC_CATEGORY2` | A2 | 2 | Category Reference for Key 2 |
| `PC_DESC` | A30 | 30 | Product Category Description |
| `PC_GLACCT` | A15 | 15 | General Ledger Expense Account |
| `PC_MARGIN` | D5 | 5 | Default Margin (Precision 2) |
| `PC_SERIAL` | A1 | 1 | Serial Numbers Tracked Flag |
| `PC_STKGRP` | A1 | 1 | Stock Groups Created Flag |
| `PC_DISCOUNT` | A1 | 1 | Discount Calculated Flag |
| `PC_BINCTYPE` | A1 | 1 | Bin Control Type |
| `PC_BTRACK` | A1 | 1 | Batch Tracing Enabled Flag |
| `PC_SLSCBPP` | D4 | 4 | Sales Commission Base Price Percentage (Precision 2) |
| `PC_DEF_CNTRLD` | A1 | 1 | Default Controlled for New Inventory Items |
| `PC_EST_MARKUP` | D5 | 5 | Detailed Estimate Markup |
| `PC_SELL_ON_PURCH` | A1 | 1 | Default Sell Price on Purchases Flag |
| `PC_UPDPRC` | A1 | 1 | Auto Update Sell Price Flag |
| `PC_ACTIVE` | A1 | 1 | Active Flag |
| `PC_SAFETY_STOCK` | D5 | 5 | Safety Stock Percentage (Precision 2) |
| `PC_ORDER_FACTOR` | D4 | 4 | Order Up To Factor (Precision 2) |
| `PC_MOD_USER` | A12 | 12 | Modified Audit User |
| `PC_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `PC_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `PC_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `PC_CRE_USER` | A12 | 12 | Creation Audit User |
| `PC_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `PC_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `PC_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Unit of Measure (INVTBLG)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `UM_TYPE` | A1 | 1 | Table Type |
| `UM_CODE` | A2 | 2 | Unit of Measure Code |
| `UM_KEY` | A7 | 7 | Primary Key (Type/UOM Code) |
| `UM_SCRKEY` | A2 | 2 | UOM Code (Screen Key) |
| `UM_DESC` | A30 | 30 | Unit of Measure Description |
| `UM_ROUND` | A1 | 1 | Rounding Flag |
| `UM_PRICE` | A1 | 1 | Price Entry Allowed Flag |
| `UM_LENGTH` | A1 | 1 | Length Entry Allowed Flag |
| `UM_QTY` | A1 | 1 | Quantity Entry Allowed Flag |
| `UM_MULT` | D4 | 4 | Multiplier |
| `UM_DEC_PLC` | D1 | 1 | Decimal Places to Round To |
| `UM_CONSOL` | A1 | 1 | Consolidate Flag (Y/N/I=Infinite Length) |
| `UM_SDESC` | A10 | 10 | Short Description |
| `UM_PRCOPT` | A1 | 1 | Price Calculation Option |
| `UM_CHKMIS` | A1 | 1 | Check for Missing Prices Flag |
| `UM_REPALW` | A1 | 1 | Allow Repricing of Item Flag |
| `UM_DSCINP` | A1 | 1 | Description Entry Allowed Flag |
| `UM_EXPZRO` | A1 | 1 | Price Set to Zero on Explode Flag |
| `UM_SUPQTY` | A1 | 1 | Quantity Suppressed if One Flag |
| `UM_INCACCUM` | A1 | 1 | Quantity of One Included in Accumulation Flag |
| `UM_REF_CODE` | A8 | 8 | UOM Reference Code |
| `UM_LBL_OPT` | A1 | 1 | UOM Label Print Option (I=Individual, C=Container) |
| `UM_EXTRA_OPT` | A1 | 1 | Extra Charge Option (O=Once Only, D=Daily, W=Weekly) |
| `UM_MOD_USER` | A12 | 12 | Modified Audit User |
| `UM_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `UM_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `UM_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `UM_CRE_USER` | A12 | 12 | Creation Audit User |
| `UM_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `UM_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `UM_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Rate Area Codes (INVTBLI)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RAC_TYPE` | A1 | 1 | Table Type |
| `RAC_CODE` | A4 | 4 | Rate Area Table Code |
| `RAC_KEY` | A7 | 7 | Primary Key (Type/Rate Area Table Code) |
| `RAC_DESC` | A30 | 30 | Rate Area Name |
| `RAC_CON_CAT` | A3 | 3 | Rate Contact Category |
| `RAC_REG_AREA` | A4 | 4 | Regional Area |
| `RAC_ACTIVE` | A1 | 1 | Area is Active Flag |
| `RAC_MOD_USER` | A12 | 12 | Modified Audit User |
| `RAC_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RAC_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RAC_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RAC_CRE_USER` | A12 | 12 | Creation Audit User |
| `RAC_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RAC_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RAC_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## BuiltGrid Integration Notes

The Inventory Management lookup tables (INVTBL*) are critical for BuiltGrid integration as they provide:

- **Product Classification**: Groups and categories for organizing inventory items
- **Unit of Measure**: Comprehensive UOM definitions with calculation rules
- **Rate Areas**: Geographic rate areas for supplier pricing variations

These tables support the complete inventory lifecycle from procurement through to delivery and are essential for accurate cost calculations, pricing, and supplier management in the BuiltGrid integration.