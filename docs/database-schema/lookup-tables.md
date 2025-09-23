# Lookup Tables

## Customer Titles (COTABLC)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTC_TYPE` | A1 | 1 | Table Type |
| `COTC_CODE` | A6 | 6 | Title Code |
| `COTC_KEY` | A10 | 10 | Key |
| `COTC_DESC` | A30 | 30 | Title Long Form |
| `COTC_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTC_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTC_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTC_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTC_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTC_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTC_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTC_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTC_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

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

## Sale Types (COTABLU)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTU_TYPE` | A1 | 1 | Table Type |
| `COTU_CODE` | A3 | 3 | Sale Type Code |
| `COTU_KEY` | A10 | 10 | Key |
| `COTU_DESC` | A30 | 30 | Sale Type Description |
| `COTU_GROUP` | A3 | 3 | Sales Group |
| `COTU_HOUSE` | A1 | 1 | House Included |
| `COTU_LAND` | A1 | 1 | Land Include |
| `COTU_ONLYLAND` | A1 | 1 | Land Only Sale |
| `COTU_DEVELOP` | A1 | 1 | Land Development |
| `COTU_STOCK` | A1 | 1 | Stock House & Land Package |
| `COTU_OPOL` | A1 | 1 | Other Peoples Own Land |
| `COTU_DEPOSIT` | A1 | 1 | Deposit Required |
| `COTU_LNDSTYP` | A3 | 3 | Land Sale Type |
| `COTU_WIPCDE` | A2 | 2 | Default WIP Code |
| `COTU_FGCODE` | A2 | 2 | Default Finish Goods Code |
| `COTU_CLASS` | A2 | 2 | Default Classification |
| `COTU_SUBCLS` | A2 | 2 | Default Sub-Class |
| `COTU_SLSCDE` | A2 | 2 | Default Sales Code |
| `COTU_HSESTYP` | A3 | 3 | Contract House Build Sale Type |
| `COTU_PROGBILL` | A3 | 3 | Default Progress Billing |
| `COTU_MGNDECL` | A1 | 1 | Margin Declaration Required |
| `COTU_CANCMATL` | A2 | 2 | Cancelled Material Code |
| `COTU_SERVREQ` | A1 | 1 | Service Request Allowed |
| `COTU_TMR` | D5 | 5 | TMR Trigger Event |
| `COTU_JOBTYPE` | A2 | 2 | Default Job Type |
| `COTU_HOUSEDEP` | A2 | 2 | Default Sale Type |
| `COTU_CONTFVAR` | A1 | 1 | Forecasting Variables Flag |
| `COTU_CANSALE` | A2 | 2 | Cancelled Job Sales Code |
| `COTU_CANFG` | A2 | 2 | Cancel Job Finished Goods Code |
| `COTU_SAVE_PLAN` | A1 | 1 | Default Saving Plan - Contract |
| `COTU_SPSCOD` | A2 | 2 | Savings Plan Sale Code |
| `COTU_TMRPERC` | D5 | 5 | TMR Percentage |
| `COTU_CSTCTRLMTH` | A1 | 1 | Cost Control Method |
| `COTU_PREMGN_ETS` | A1 | 1 | Allow ETS on Pre Margin Declare |
| `COTU_VARGROUP` | A3 | 3 | Variation Sales Group |
| `COTU_MJOBTYPE` | A2 | 2 | Default Maint Job Type |
| `COTU_MAINTEVNT` | D5 | 5 | Maintenance Job Creation Trigger Event |
| `COTU_ACTIVE` | A1 | 1 | Active Flag |
| `COTU_RET_BCON` | A1 | 1 | Retain Build Contract on Job |
| `COTU_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTU_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTU_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTU_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTU_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTU_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTU_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTU_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTU_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Sales Groups (COTABLV)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTV_TYPE` | A1 | 1 | Table Type |
| `COTV_CODE` | A3 | 3 | Sales Group Code |
| `COTV_KEY` | A10 | 10 | Key |
| `COTV_DESC` | A30 | 30 | Sale Group Description |
| `COTV_ORDEVNT` | D5 | 5 | Event Code to Allow Ordering |
| `COTV_NORDEVT` | D5 | 5 | Event Code to Allow Ordering |
| `COTV_FINALMC` | A2 | 2 | Finalised Contract Mat Code |
| `COTV_ALLVAR` | A1 | 1 | Allow Variations |
| `COTV_TOTDURATION` | D5 | 5 | Total Duration |
| `COTV_NVAREVNT` | D5 | 5 | No More Variations Event |
| `COTV_TMRPERCOPT` | A1 | 1 | TMR Percentage Option |
| `COTV_TOTCOSTDUR` | D5 | 5 | Total Costs Duration |
| `COTV_LAND` | A1 | 1 | Land Sale Group |
| `COTV_ACTIVE` | A1 | 1 | Active Flag |
| `COTV_TMRMARGPERC` | D5 | 5 | TMR Alternate Margin % |
| `COTV_ORDTIME` | A1 | 1 | Allow Order Register Time |
| `COTV_ISMODULE` | A1 | 1 | Is Module Sale Group |
| `COTV_TMR_EXFIN` | A1 | 1 | Exclude Finalised Jobs from TMR |
| `COTV_STG_NONSEQ` | A1 | 1 | Allow Stages to be Complete Non Sequentially |
| `COTV_VARIATION_FL` | A1 | 1 | Sales Group for Variation Events |
| `COTV_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTV_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTV_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTV_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTV_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTV_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTV_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTV_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTV_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Events (COTABLW)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTW_TYPE` | A1 | 1 | Table Type |
| `COTW_CODE` | D5 | 5 | Event |
| `COTW_SCRKEY` | A5 | 5 | Event Code |
| `COTW_CODEA` | A5 | 5 | Event Code |
| `COTW_KEY` | A10 | 10 | Table Type/Event Code |
| `COTW_DESC` | A30 | 30 | Event Description |
| `COTW_LOCKACT` | A1 | 1 | Lock Actual Date |
| `COTW_UPDLAND` | A1 | 1 | Update Land Contract for Event |
| `COTW_UPDFCAST` | A1 | 1 | Update Forecast Dates on Land |
| `COTW_USERCAT` | A2 | 2 | Category of User for This Event |
| `COTW_HEADING` | A30 | 30 | Default Heading for Reports |
| `COTW_INITCOPY` | A1 | 1 | Copy Event Flag When Initial Deposit Registered |
| `COTW_CANCMATL` | A2 | 2 | Material Code for Cancel Contracts |
| `COTW_UPDCANCL` | A1 | 1 | Update Event After Cancel Flag Allowed |
| `COTW_REQEMPL` | A1 | 1 | Require Employee Entry |
| `COTW_REQAMOUNT` | A1 | 1 | Require Amount Entry |
| `COTW_REQREFER` | A1 | 1 | Require Reference Entry |
| `COTW_NOQUICKEV` | A1 | 1 | No Quick Event Entry |
| `COTW_REG_ASSOC` | A1 | 1 | Register Assoc Sale/Build Contract |
| `COTW_REC_PCTCMP` | A1 | 1 | Record % Complete for This Event |
| `COTW_CATG` | A2 | 2 | Event Category |
| `COTW_SEC_REGEVT` | A1 | 1 | Security Level, Register Event |
| `COTW_SEC_IREGEVT` | I1 | 1 | Security Level, Register Event |
| `COTW_SEC_SHWDET` | A1 | 1 | Security Level, Show Event Details |
| `COTW_SEC_ISHWDET` | I1 | 1 | Security Level, Show Event Details |
| `COTW_KEEP_HIST` | A1 | 1 | Keep History |
| `COTW_SEC_FOREVT` | A1 | 1 | Security Level, Register Event |
| `COTW_SEC_IFOREVT` | I1 | 1 | Security Level, Register Event |
| `COTW_STATUS` | A3 | 3 | New Status for Contract |
| `COTW_REF_PROMPT` | A20 | 20 | Reference Prompt |
| `COTW_SUBCATG` | A2 | 2 | Sub Category |
| `COTW_SEC_UNREGEVT` | A1 | 1 | Security Level, UnRegister Event |
| `COTW_SEC_IUNREGEVT` | I1 | 1 | Security Level, UnRegister Event |
| `COTW_KPI_EVTSUM` | A1 | 1 | Include in Event Summary |
| `COTW_KPI_SLCSUM` | A1 | 1 | Include in Sales Consultant Summary |
| `COTW_KPI_BLDSUM` | A1 | 1 | Include in Building Supervisor Summary |
| `COTW_KPI_SRVSUM` | A1 | 1 | Include in Service Supervisor Summary |
| `COTW_KPI_SCHSUM` | A1 | 1 | Include in Daily Schedule Summary |
| `COTW_UPDPROJ` | A1 | 1 | Update Same Event for All Project Contracts |
| `COTW_ARC_KEEP` | A1 | 1 | Do Not Delete Event When Archiving |
| `COTW_ACTIVE` | A1 | 1 | Active Flag |
| `COTW_JOBTYPE` | A2 | 2 | Default Job Type |
| `COTW_PARENT` | D5 | 5 | Parent Event |
| `COTW_COSTCTR` | A3 | 3 | Cost Centre for Associated POs |
| `COTW_PO_LEAD_TIME` | D3 | 3 | PO Call Up Lead Time (in days) |
| `COTW_SCHEDULE_CODE` | A2 | 2 | Cost Centre Schedule Code |
| `COTW_DEF_EMPL` | A1 | 1 | Default Current User into Employee |
| `COTW_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTW_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTW_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTW_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTW_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTW_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTW_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTW_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTW_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Operating Centres (COTABLY)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTY_TYPE` | A1 | 1 | Table Type |
| `COTY_CODE` | A3 | 3 | Operating Centre Code |
| `COTY_KEY` | A10 | 10 | Key |
| `COTY_DESC` | A30 | 30 | Description |
| `COTY_GLMASK` | A15 | 15 | G/Ledger Mask for OpCentre |
| `COTY_BASFRQ` | A1 | 1 | BAS Frequency |
| `COTY_LSTBAS` | D5 | 5 | Current Report Period |
| `COTY_LSTDTE` | D7 | 7 | Last Cutoff Date for BAS |
| `COTY_LOCATION` | A2 | 2 | Location |
| `COTY_DEPT` | A2 | 2 | Default Department |
| `COTY_ACTIVE` | A1 | 1 | Active |
| `COTY_COLOUR` | D10 | 10 | Colour Code |
| `COTY_PO_HOLDACC` | A15 | 15 | P/O Holding/Clearing Account |
| `COTY_NAME` | A50 | 50 | Name of Legal Entity |
| `COTY_ADDR1` | A50 | 50 | First Line of Address |
| `COTY_ADDR2` | A50 | 50 | Second Line of Address |
| `COTY_ADDR3` | A50 | 50 | Third Line of Address |
| `COTY_ACN` | A11 | 11 | Australian Company Numbers |
| `COTY_ABN` | D11 | 11 | Australian Business Number |
| `COTY_BRANCH` | D3 | 3 | Australian Business Branch Number |
| `COTY_LASTCO` | D6 | 6 | Last Contract Number |
| `COTY_AUTO_PRG_CLAIMS` | A1 | 1 | Auto Generate Progress Claims |
| `COTY_ENTITY_ID` | A3 | 3 | Entity Identify |
| `COTY_GL_BS_MASK` | A15 | 15 | Balance Sheet Overlay Mask |
| `COTY_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTY_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTY_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTY_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTY_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTY_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTY_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTY_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTY_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Districts (COTABLZ)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COTZ_TYPE` | A1 | 1 | Table Type |
| `COTZ_CODE` | A3 | 3 | District Code |
| `COTZ_KEY` | A10 | 10 | Key |
| `COTZ_DESC` | A30 | 30 | Contract District Description |
| `COTZ_PRCAREA` | A4 | 4 | Default Price Area |
| `COTZ_ACTIVE` | A1 | 1 | Active |
| `COTZ_CALNDR` | A6 | 6 | Calendar to Use for This District |
| `COTZ_ALT_STATE` | A1 | 1 | Alt State Code |
| `COTZ_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COTZ_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COTZ_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COTZ_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COTZ_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COTZ_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COTZ_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COTZ_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COTZ_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Councils (COTABL_C)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COT_C_TYPE` | A1 | 1 | Table Type |
| `COT_C_CODE` | A6 | 6 | Council Code |
| `COT_C_KEY` | A10 | 10 | Key |
| `COT_C_DESC` | A30 | 30 | Description |
| `COT_CACOL` | D3 | 3 | Column A for Duration |
| `COT_CBCOL` | D3 | 3 | Column B for Duration |
| `COT_CCCOL` | D3 | 3 | Column C for Duration |
| `COT_CDCOL` | D3 | 3 | Column D for Duration |
| `COT_CECOL` | D3 | 3 | Column E for Duration |
| `COT_C_POADD` | A30 | 30 | Postal Address |
| `COT_C_DXADD` | A30 | 30 | DX Address |
| `COT_C_PHONE` | A12 | 12 | Phone |
| `COT_C_FAX` | A12 | 12 | Fax |
| `COT_C_CONTACT` | A20 | 20 | Contact |
| `COT_C_STADD` | A30 | 30 | Street Address |
| `COT_C_STSUB` | A20 | 20 | Street Address Suburb of Town |
| `COT_C_STPCODE` | D4 | 4 | Street Address Post Code |
| `COT_C_POSUB` | A20 | 20 | Postal Address Suburb of Town |
| `COT_C_POPCODE` | D4 | 4 | Postal Address Post Code |
| `COT_C_ACTIVE` | A1 | 1 | Active Flag |
| `COT_C_STSTATE` | A3 | 3 | Street Address State |
| `COT_C_POSTATE` | A3 | 3 | Postal Address State |
| `COT_C_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COT_C_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COT_C_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COT_C_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COT_C_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COT_C_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COT_C_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COT_C_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COT_C_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Estates (COTABL_D)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COT_D_TYPE` | A1 | 1 | Table Type |
| `COT_D_CODE` | A6 | 6 | Estate Code |
| `COT_D_KEY` | A10 | 10 | Key |
| `COT_D_DESC` | A30 | 30 | Description |
| `COT_D_ACTIVE` | A1 | 1 | Active Flag |
| `COT_D_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COT_D_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COT_D_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COT_D_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COT_D_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COT_D_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COT_D_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COT_D_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COT_D_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Status (COTABL_M)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `COT_M_TYPE` | A1 | 1 | Table Type |
| `COT_M_CODE` | A3 | 3 | Code |
| `COT_M_KEY` | A10 | 10 | Key |
| `COT_M_DESC` | A30 | 30 | Description (Name) |
| `COT_M_LOCKED` | A1 | 1 | Status Locked on Contract Flag |
| `COT_M_REOPEN` | A1 | 1 | Allow Reopen After Locking |
| `COT_M_KPI_STSSUM` | A1 | 1 | Include in KPI Status Summary |
| `COT_M_KPI_EVTSUM` | A1 | 1 | Include in KPI Event Summary |
| `COT_M_ARC_STATUS` | A3 | 3 | Archive Status to Update on Contract |
| `COT_M_ARC_MONTHS` | D3 | 3 | No of Months from Trigger Event Before Archiving |
| `COT_M_ARC_TRGEVT` | D5 | 5 | Event to Trigger the Archiving |
| `COT_M_ARC_REGEVT` | D5 | 5 | Event to Register if Archiving Required |
| `COT_M_ARC_DOCS` | A1 | 1 | Archive Documents if Applicable |
| `COT_M_INC_PBF` | A1 | 1 | Include in Progress Billings Forecast Report |
| `COT_M_ACTIVE` | A1 | 1 | Active Flag |
| `COT_M_CONSTRUCT` | A1 | 1 | Include in Construction Flag |
| `COT_M_ARC_AUTOPURGE` | A1 | 1 | Contracts Not Set "Y" Will be Excluded by Contract Purge |
| `COT_M_INACTIVE` | A1 | 1 | Set Contract to Inactive When Change to This Status |
| `COT_M_FORE_COLOUR` | A20 | 20 | Foreground Colour for Display Label |
| `COT_M_BACK_COLOUR` | A20 | 20 | Background Colour for Display Label |
| `COT_M_SALES_LEAD` | A1 | 1 | Allow Contract to be Converted |
| `COT_M_SYNCSTATUS` | A1 | 1 | Sync Status |
| `COT_M_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `COT_M_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `COT_M_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `COT_M_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `COT_M_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `COT_M_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `COT_M_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `COT_M_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |