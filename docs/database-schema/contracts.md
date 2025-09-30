# Contract Management Tables

This section details the database tables related to Contract Management within BusinessCraft, essential for understanding contract data structures and relationships for BuiltGrid integration.

## Contract Header (CONHDRA)

The primary contract header table containing all contract information.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CO_CONTRACT` | D6 | 6 | Contract Number |
| `CO_KEY` | A6 | 6 | Contract Number |
| `CO_DESCR` | A30 | 30 | Description |
| `CO_NAME` | A30 | 30 | Contract Name |
| `CO_DATE` | D7 | 7 | Contract Date |
| `CO_CUSNUM` | A6 | 6 | Customer Code |
| `CO_ADDR1` | A30 | 30 | Address Line 1 |
| `CO_ADDR2` | A30 | 30 | Address Line 2 |
| `CO_ADDR` | A60 | 60 | Full Address |
| `CO_CITY` | A25 | 25 | City |
| `CO_STATE` | A15 | 15 | State |
| `CO_ZIP` | A8 | 8 | Postcode |
| `CO_CERTIFICATE` | A30 | 30 | Certificate of Title |
| `CO_SOURCE` | A8 | 8 | Contract Source |
| `CO_MAP_CODE` | A3 | 3 | Map Code |
| `CO_MAP_PAGE` | D3 | 3 | Map Page |
| `CO_MAP_X` | A3 | 3 | Map X Co-Ordinate |
| `CO_MAP_Y` | A3 | 3 | Map Y Co-Ordinate |
| `CO_MAP_REF` | A12 | 12 | Map Reference |
| `CO_PHONE` | A12 | 12 | Phone Number |
| `CO_FAX` | A12 | 12 | Fax Number |
| `CO_VALUE` | D11 | 11 | Contract Value (Ex GST) |
| `CO_RETENT` | D4 | 4 | Retention Percentage |
| `CO_RETREL` | D3 | 3 | Retention Release Period |
| `CO_TERMS` | A2 | 2 | Terms |
| `CO_COMPL` | D7 | 7 | Completion Date |
| `CO_COMM1` | A50 | 50 | Comment 1 |
| `CO_COMM2` | A50 | 50 | Comment 2 |
| `CO_COMM3` | A50 | 50 | Comment 3 |
| `CO_VARAMT` | D11 | 11 | Variation Amount |
| `CO_RETAMT` | D11 | 11 | Retention Amount |
| `CO_RETCEILING` | D11 | 11 | Retention Ceiling |
| `CO_INV_TOTAL` | D11 | 11 | Invoice Total Amount |
| `CO_RELEASED` | D11 | 11 | Amount Released To Factory |
| `CO_SALETYPE` | A3 | 3 | Sale Type |
| `CO_OPCENTRE` | A3 | 3 | Operating Centre |
| `CO_DISTRICT` | A3 | 3 | District |
| `CO_SALESCONS` | A3 | 3 | Sales Consultant |
| `CO_CSR` | A3 | 3 | Customer Service Officer |
| `CO_HOUSE` | A15 | 15 | House Code |
| `CO_SUBJSALE` | A1 | 1 | Subject Sale |
| `CO_SAVEPLAN` | A1 | 1 | Savings Plan |
| `CO_SALEPROM` | A6 | 6 | Sales Promotion |
| `CO_LANDID` | D6 | 6 | Land ID |
| `CO_COUNCIL` | A6 | 6 | Council |
| `CO_PSOLCODE` | A6 | 6 | Purchaser's Solicitor Code |
| `CO_PSOLNAME` | A30 | 30 | Purchaser's Solicitor Name |
| `CO_PSOLPHONE` | A12 | 12 | Purchaser's Solicitor Phone |
| `CO_LENDCODE` | A6 | 6 | Lending Authority Code |
| `CO_LENDBRANCH` | A30 | 30 | Lending Authority Branch |
| `CO_STATUS` | A3 | 3 | Status |
| `CO_BLDGSUPV` | A3 | 3 | Building Supervisor |
| `CO_SERVSUPV` | A3 | 3 | Service Supervisor |
| `CO_LOTNO` | A8 | 8 | Lot Number |
| `CO_CMPNYSOL` | A6 | 6 | Company Solicitor |
| `CO_CSOLNAME` | A30 | 30 | Company Solicitor Name |
| `CO_CSOLPHONE` | A12 | 12 | Company Solicitor Phone |
| `CO_EVENTREG` | D1 | 1 | Events Register |
| `CO_DTCANCEL` | D7 | 7 | Cancellation Date |
| `CO_REASON` | A2 | 2 | Cancellation Reason |
| `CO_CNCLCOMNT` | A30 | 30 | Cancellation Comment |
| `CO_DUEREFUND` | D11 | 11 | Cancellation Refund Due |
| `CO_CHQREFUND` | A6 | 6 | Cancellation Refund Cheque Number |
| `CO_AMTREFUND` | D11 | 11 | Cancellation Refund Amount |
| `CO_DATREFUND` | D7 | 7 | Cancellation Refund Date |
| `CO_INV_CON` | D11 | 11 | Invoice Raised On Original Contract |
| `CO_INV_VAR` | D11 | 11 | Invoice Raised On Variation To Contract |
| `CO_SALETERM` | A2 | 2 | Term of Sale |
| `CO_LISTPRC` | D11 | 11 | House List Price |
| `CO_DP` | A15 | 15 | Deposited Plan Number |
| `CO_VOLUME` | A15 | 15 | Volume Number |
| `CO_FOLIO` | A15 | 15 | Folio Number |
| `CO_PRGBILLCD` | A3 | 3 | Progress Billing Code |
| `CO_STREETNO` | A6 | 6 | Street Number |
| `CO_SALECENT` | A6 | 6 | Sale Centre |
| `CO_SUBPURFLAG` | A1 | 1 | Original Customer/Subsequent Purchase |
| `CO_SUBPURNAME` | A30 | 30 | Subsequent Purchase Name |
| `CO_LENDADDR` | A30 | 30 | Lending Authority Address |
| `CO_LENDCITY` | A25 | 25 | Lending Authority City |
| `CO_LENDSTATE` | A15 | 15 | Lending Authority State |
| `CO_LENDZIP` | A8 | 8 | Lending Authority Postcode |
| `CO_ELEVATION` | A15 | 15 | Elevation |
| `CO_SSSTREETNO` | A6 | 6 | Subject Sale Street Number |
| `CO_SSADDR1` | A30 | 30 | Subject Sale Address 1 |
| `CO_SSADDR2` | A30 | 30 | Subject Sale Address 2 |
| `CO_SSCITY` | A25 | 25 | Subject Sale City |
| `CO_SSSTATE` | A15 | 15 | Subject Sale State |
| `CO_SSPCODE` | A8 | 8 | Subject Sale Postcode |
| `CO_SSAMOUNT` | D11 | 11 | Subject Sale Amount |
| `CO_JOBNUM` | A8 | 8 | Job Number |
| `CO_SALEGROUP` | A3 | 3 | Sale Group |
| `CO_HOUSEDEP` | A2 | 2 | Forecast Dependency |
| `CO_NUM_UNITS` | D3 | 3 | Number of Dwelling Units |
| `CO_GST_CODE` | A1 | 1 | GST Code |
| `CO_GST_CO` | D11 | 11 | GST Excluding Variations |
| `CO_GST_VAR` | D11 | 11 | GST For Variations |
| `CO_INV_GST` | D11 | 11 | GST For Invoices |
| `CO_LENDCONTACT` | A20 | 20 | Lender Contact |
| `CO_LENDPHONE` | A12 | 12 | Lender Phone |
| `CO_LENDFAX` | A12 | 12 | Lender Fax |
| `CO_LENDREF` | A15 | 15 | Lender Reference |
| `CO_SPADMIN` | A3 | 3 | Savings Plan Administrator |
| `CO_MJOBNUM` | A8 | 8 | Maintenance Job Number |
| `CO_SALESAGENT` | A8 | 8 | Sales Agent |
| `CO_HIA_CONTRACT` | D9 | 9 | HIA Contract Number |
| `CO_CUSTPO` | A20 | 20 | Customer's Purchase Order |
| `CO_PRIMCONTACT` | D3 | 3 | Primary Contact Sequence |
| `CO_NOCHECKMEAS` | A1 | 1 | No Check Measure Required |
| `CO_PROJECT` | A6 | 6 | Project |
| `CO_STAGE` | A2 | 2 | Stage |
| `CO_SUBSTAGE` | A1 | 1 | Sub-Stage |
| `CO_UNIT` | A3 | 3 | Unit Number |
| `CO_ESTATE` | A6 | 6 | Estate |
| `CO_DEVELOPER` | A6 | 6 | Developer |
| `CO_DEVELCONTACT` | A20 | 20 | Developer Contact Name |
| `CO_DEVELPHONE` | A12 | 12 | Developer Contact Phone |
| `CO_ALT_COMP_CODE` | A9 | 9 | Alternate Sync Company Code |
| `CO_PRE_VARAMT` | D11 | 11 | Pre Contract Variation Amount ExGST |
| `CO_PRE_VARGST` | D11 | 11 | Pre Contract Variation GST |
| `CO_UNI_VARAMT` | D11 | 11 | Post Contract Unissued Variation Amount ExGST |
| `CO_UNI_VARGST` | D11 | 11 | Post Contract Unissued Variation GST |
| `CO_PARENT` | D6 | 6 | Parent Contract |
| `CO_PARENTA` | A6 | 6 | Parent Contract |
| `CO_LISTPRCINCGST` | D11 | 11 | House List Price Inc GST |
| `CO_LISTPRCGST` | D11 | 11 | House List Price GST |
| `CO_LISTPRCGSTCD` | A1 | 1 | House List Price GST Code |
| `CO_CUST_SATISF` | A2 | 2 | Customer Satisfaction |
| `CO_PROMPT_IMPR` | A1 | 1 | Prompt Important Messages |
| `CO_EXT_DAYS` | D5 | 5 | Approved Extension Days Claimed |
| `CO_CROSS_REF` | D6 | 6 | Contract Cross Reference |
| `CO_LATITUDE` | D10 | 10 | Latitude |
| `CO_LONGITUDE` | D10 | 10 | Longitude |
| `CO_INV_JOBTRF` | A1 | 1 | Flag to allow job transfer menu |
| `CO_ACTIVE` | A1 | 1 | Active |
| `CO_TENANTFLAG` | A1 | 1 | Flag to indicate contract has Tenants |
| `CO_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CO_MOD_USER` | A12 | 12 | Modified Audit User |
| `CO_MOD_DATE` | D7 | 7 | Modified Audit Date |
| `CO_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `CO_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CO_MOD_TIMED4` | D4 | 4 | Modified Audit Time |
| `CO_CRE_USER` | A12 | 12 | Creation Audit User |
| `CO_CRE_DATE` | D7 | 7 | Creation Audit Date |
| `CO_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `CO_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CO_CRE_TIMED4` | D4 | 4 | Creation Audit Time |
| `CO_EXT_REF_ID` | A36 | 36 | Extra Reference ID |
| `CO_HIA_TMPL_CODE` | A20 | 20 | HIA Template Code |
| `CO_SA_CONTACT` | A40 | 40 | Sales Agent Contact Name |
| `CO_SA_PHONE` | A12 | 12 | Sales Agent Contact Phone |
| `CO_SA_MOBILE` | A12 | 12 | Sales Agent Contact Mobile |
| `CO_SA_MODE` | A1 | 1 | Sales Agent Correspondence Mode |

## Contract Lines - Variations (CONLINV)

Contract variation lines for tracking changes to contracts.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLV_TYPE` | A1 | 1 | Record Type (V = Variation) |
| `CLV_CONTRACT` | D6 | 6 | Contract Number |
| `CLV_SEQNUM` | D3 | 3 | Sequence Number |
| `CLV_CONTRACTA` | A6 | 6 | Contract Number |
| `CLV_SEQA` | A3 | 3 | Sequence |
| `CLV_SCRKEY` | A9 | 9 | Contract No/Sequence No |
| `CLV_VARKEY` | A10 | 10 | Type/Contract/Sequence |
| `CLV_KEY` | A21 | 21 | Type/Contract/Sequence |
| `CLV_DATE` | D7 | 7 | Date |
| `CLV_DESCR` | A40 | 40 | Description |
| `CLV_AMOUNT` | D10 | 10 | Amount ExGST |
| `CLV_REF` | A6 | 6 | Reference Number |
| `CLV_INVOICED` | A1 | 1 | Invoiced |
| `CLV_VTYPE` | A1 | 1 | Type (B=Building, V=Post Contract, P=Pre Contract) |
| `CLV_COST` | D10 | 10 | Cost |
| `CLV_ISSUED` | D10 | 10 | Amount Issued |
| `CLV_ISSFLAG` | A1 | 1 | Issued Flag |
| `CLV_GST_AMT` | D11 | 11 | GST Amount |
| `CLV_GST_AMT9` | D9 | 9 | GST Amount |
| `CLV_GST_CDE` | A1 | 1 | GST Code |
| `CLV_PO_REF` | A20 | 20 | Customer PO Reference |
| `CLV_CHRG_TY` | A1 | 1 | Charge To Type |
| `CLV_CHRG_TO` | A15 | 15 | Charge To Responsibility |
| `CLV_VREASON` | A2 | 2 | Variation Reason |
| `CLV_PBSTAGE` | A3 | 3 | Progress Billing Stage |
| `CLV_JI_FLAG` | A1 | 1 | Created from Job Info Flag |
| `CLV_JI_REV` | D3 | 3 | Job Information Revision |
| `CLV_JI_DOCSEQ` | D3 | 3 | Job Information Doc Sequence |
| `CLV_SALEGROUP` | A3 | 3 | Sale Group |
| `CLV_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLV_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLV_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLV_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLV_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLV_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLV_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLV_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLV_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Lines - Events (CONLINE)

Contract event tracking for milestone management.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLE_TYPE` | A1 | 1 | Record Type (E = Event) |
| `CLE_CONTRACT` | D6 | 6 | Contract Number |
| `CLE_EVENT` | D5 | 5 | Event Code |
| `CLE_CONTRACTA` | A6 | 6 | Contract Number |
| `CLE_EVENTA` | A5 | 5 | Event Code |
| `CLE_SCRKEY` | A11 | 11 | Contract No/Event Code |
| `CLE_TKEY` | A12 | 12 | Type/Contract/Event |
| `CLE_SKEY` | A20 | 20 | Type/Contract/Event |
| `CLE_KEY` | A21 | 21 | Type/Contract/Event |
| `CLE_FOREDATE` | D7 | 7 | Forecast Date |
| `CLE_ACTDATE` | D7 | 7 | Actual Date |
| `CLE_REGDATE` | D7 | 7 | Register Date |
| `CLE_FOREFLAG` | A1 | 1 | Forecast Flag |
| `CLE_AMOUNT` | D10 | 10 | Amount ExGST |
| `CLE_DESC` | A30 | 30 | Description of Event |
| `CLE_CHNGEVNT` | D5 | 5 | Change Event |
| `CLE_EMPLOYEE` | A3 | 3 | Employee Actioning Event |
| `CLE_UNREG` | A1 | 1 | Unregistered Event Flag |
| `CLE_PCTCMPL` | D5 | 5 | Percentage Complete |
| `CLE_LEVEL` | A1 | 1 | Lower Levels |
| `CLE_AMOUNT2` | D10 | 10 | Amount2 (GST) |
| `CLE_DUEDATE` | D7 | 7 | Due Date |
| `CLE_DUEREFCAST` | D1 | 1 | Due Date Reforecast Required |
| `CLE_REF` | A30 | 30 | Reference |
| `CLE_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLE_REG_USER` | A12 | 12 | Registration Audit Initials |
| `CLE_REG_DATE` | D7 | 7 | Registration Audit Date |
| `CLE_REG_TIME` | D9 | 9 | Registration Audit Time |
| `CLE_REG_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLE_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLE_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLE_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLE_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLE_DATESTAMP` | A13 | 13 | Date Stamp/Time Stamp |
| `CLE_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLE_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLE_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLE_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Lines - Progress Billing (CONLINF)

Progress billing stages and completion tracking.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLF_TYPE` | A1 | 1 | Table Type (F = Progress Billing) |
| `CLF_CONTRACT` | D6 | 6 | Contract Number |
| `CLF_CODE` | A3 | 3 | Stage |
| `CLF_STAGE` | A3 | 3 | Stage Code |
| `CLF_CONST` | A6 | 6 | Contract No/Stage Code |
| `CLF_SCRKEY` | A9 | 9 | Contract No/Stage Code |
| `CLF_TKEY` | A10 | 10 | Type/Contract/Stage |
| `CLF_KEY` | A21 | 21 | Type/Contract/Stage |
| `CLF_DESC` | A30 | 30 | Description |
| `CLF_COMPLETE` | D5 | 5 | Percent Complete |
| `CLF_EVENT` | D5 | 5 | Stage Required Event Number |
| `CLF_BILLFLG` | A1 | 1 | Billing Completed for Event |
| `CLF_AMOUNT` | D11 | 11 | ExGST Amount Complete |
| `CLF_DEPOSIT` | A1 | 1 | Deposit Amount Flag |
| `CLF_COSTTAKUP` | D5 | 5 | Percent Cost Taken Up |
| `CLF_AMTINCGST` | D11 | 11 | Amount Including GST |
| `CLF_GSTAMT` | D9 | 9 | Amount of GST |
| `CLF_TMRCDE` | A2 | 2 | TMR Code |
| `CLF_INVD_EVENT` | D5 | 5 | Invoiced Register Event Number |
| `CLF_CSHD_EVENT` | D5 | 5 | Cash Received Register Event Number |
| `CLF_CALC_METH` | A1 | 1 | Calculation Method |
| `CLF_INVOICE` | D6 | 6 | Invoice Number |
| `CLF_INV_AMOUNT` | D11 | 11 | Amount Invoiced (Including GST) |
| `CLF_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLF_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLF_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLF_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLF_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLF_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLF_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLF_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLF_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Lines - Variation Events (CONLING)

Variation event tracking for contract changes.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLG_TYPE` | A1 | 1 | Record Type (G = Variation Events) |
| `CLG_CONTRACT` | D6 | 6 | Contract Number |
| `CLG_SEQNUM` | D3 | 3 | Sequence Number |
| `CLG_EVENT` | D5 | 5 | Event Code |
| `CLG_EVENTA` | A5 | 5 | Event Code |
| `CLG_CONST` | A9 | 9 | Contract No/Sequence No |
| `CLG_SCRKEY` | A14 | 14 | Contract/Sequence/Event |
| `CLG_VARKEY` | A15 | 15 | Type/Contract/Sequence/Event |
| `CLG_KEY` | A21 | 21 | Type/Contract/Sequence/Event |
| `CLG_ACTDATE` | D7 | 7 | Actual Date |
| `CLG_REGDATE` | D7 | 7 | Register Date |
| `CLG_REF` | A12 | 12 | General Reference Info |
| `CLG_DESC` | A30 | 30 | Description of Event |
| `CLG_EMPLOYEE` | A3 | 3 | Employee Actioning Event |
| `CLG_FOREDATE` | D7 | 7 | Forecast Date |
| `CLG_FOREFLAG` | A1 | 1 | Forecast Flag |
| `CLG_CHNGEVNT` | D5 | 5 | Forecast by Event Flag |
| `CLG_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLG_REG_USER` | A12 | 12 | Registered Audit Initials |
| `CLG_REG_DATE` | D7 | 7 | Registered Audit Date |
| `CLG_REG_TIME` | D9 | 9 | Registered Audit Time |
| `CLG_REG_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLG_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLG_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLG_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLG_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLG_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLG_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLG_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLG_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Lines - Variation Notes (CONLINH)

Notes and comments for contract variations.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLH_TYPE` | A1 | 1 | Record Type (H = Variation Notes) |
| `CLH_ID` | D6 | 6 | Contract ID |
| `CLH_VARSEQ` | D3 | 3 | Variation Line Sequence Number |
| `CLH_SEQ` | D3 | 3 | Variation Line Note Sequence Number |
| `CLH_ALPHA` | A6 | 6 | Contract ID |
| `CLH_CONST` | A9 | 9 | Contract ID/Var Line Sequence Number |
| `CLH_SCRKEY` | A12 | 12 | Contract/Var Line Seq/Note Seq |
| `CLH_KEY` | A21 | 21 | Type/Contract/LineSeq/Note Seq |
| `CLH_USER` | A12 | 12 | User ID Entering the Note |
| `CLH_DATE` | D7 | 7 | Date the Note was Entered |
| `CLH_TIME` | D6 | 6 | Time the Note was Entered |
| `CLH_NOTES` | A50 | 50 | Further Notes for the Var Line |
| `CLH_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLH_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLH_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLH_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLH_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLH_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLH_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLH_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLH_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Lines - Status History (CONLINQ)

Contract status change history tracking.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLQ_TYPE` | A1 | 1 | Record Type (Q = Contract Status History) |
| `CLQ_CONTRACT` | D6 | 6 | Contract Number |
| `CLQ_SEQ` | D6 | 6 | Status |
| `CLQ_SCRKEY` | A12 | 12 | Contract No/Seq |
| `CLQ_CONST` | A6 | 6 | Contract No |
| `CLQ_KEY` | A21 | 21 | Type/Contract/Seq |
| `CLQ_EVENT` | D5 | 5 | Event Code |
| `CLQ_SRC` | A1 | 1 | Source of Change |
| `CLQ_STATUS` | A3 | 3 | New Status |
| `CLQ_OLDSTS` | A3 | 3 | Status Prior to Change |
| `CLQ_SRCFLD` | A1 | 1 | Field to Keep History For |
| `CLQ_OLDVAL` | A10 | 10 | Old Value of Field |
| `CLQ_NEWVAL` | A10 | 10 | New Value of Field |
| `CLQ_RSNCDE` | A2 | 2 | Reason Code for Change |
| `CLQ_REASON` | A50 | 50 | Reason for Change |
| `CLQ_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLQ_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLQ_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLQ_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLQ_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLQ_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLQ_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLQ_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLQ_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLQ_CRE_TIMED4` | D4 | 4 | Creation Audit Time |

## Contract Lines - Document Register (CONLINW)

Document management and tracking for contracts.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLW_TYPE` | A1 | 1 | Record Type (W = WP Document Register Lines) |
| `CLW_CONTRACT` | A6 | 6 | Contract Number |
| `CLW_SEQNUM` | D3 | 3 | Sequence Number |
| `CLW_CONTRACTD` | D6 | 6 | Decimal Contract Number |
| `CLW_SCRKEY` | A9 | 9 | Contract No/Sequence No |
| `CLW_TKEY` | A10 | 10 | Type/Contract/Sequence |
| `CLW_SKEY` | A20 | 20 | Contract No/Sequence No |
| `CLW_KEY` | A21 | 21 | Type/Contract/Sequence |
| `CLW_TYPCONST` | A7 | 7 | Type/Contract |
| `CLW_SEQA` | A3 | 3 | Sequence |
| `CLW_DOCTYP` | A5 | 5 | Document Type |
| `CLW_DOCREF` | A8 | 8 | Document Reference |
| `CLW_DESCR` | A50 | 50 | Document Description |
| `CLW_PRIVACY` | A2 | 2 | Privacy Code |
| `CLW_CREFOR` | A3 | 3 | Document Created For |
| `CLW_REV` | A2 | 2 | Document Revision Number |
| `CLW_REVDTE` | D7 | 7 | Document Revision Date |
| `CLW_REVBY` | A3 | 3 | Document Revised By |
| `CLW_LVLS` | A1 | 1 | Document Contains Levels |
| `CLW_ALT_DOCS` | A80 | 80 | Alt Path for Location of Doc |
| `CLW_ALT_DOC2` | A40 | 40 | 2nd Part of Alt Path |
| `CLW_RATING` | A1 | 1 | Importance Rating |
| `CLW_EVENT` | D5 | 5 | Event Which Created Document |
| `CLW_EVENTA` | A5 | 5 | Event Code |
| `CLW_VARIATION` | D3 | 3 | Linked Variation Sequence Number |
| `CLW_XREF_SRC` | A1 | 1 | Cross Reference Source |
| `CLW_XREF_KEY` | A35 | 35 | Cross Reference Key |
| `CLW_PBSTAGE` | A3 | 3 | Progress Billing Stage Code |
| `CLW_SUBMIT` | A1 | 1 | Submitted Flag |
| `CLW_SECT` | A2 | 2 | Sales Est Section |
| `CLW_HEADING` | A4 | 4 | Sales Est Heading |
| `CLW_STATUS` | A1 | 1 | Document Status |
| `CLW_SE_SUP_BLANK` | A1 | 1 | Suppress Blank Paragraphs |
| `CLW_SE_SUP_OPT` | A1 | 1 | Suppress Optional Sales Estimates |
| `CLW_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLW_ARC_USER` | A12 | 12 | Archive Audit Initials |
| `CLW_ARC_DATE` | D7 | 7 | Archive Audit Date |
| `CLW_ARC_TIME` | D9 | 9 | Archive Audit Time |
| `CLW_ARC_STAMP` | A28 | 28 | Archive Initials/Date/Time |
| `CLW_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLW_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLW_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLW_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLW_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLW_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLW_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLW_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Lines - Document Notes (CONLINX)

Document notes and comments for contract documents.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLX_TYPE` | A1 | 1 | Record Type (X = Document Notes) |
| `CLX_CONTRACT` | A6 | 6 | Contract Number |
| `CLX_DOCNUM` | D3 | 3 | Doc Sequence Number |
| `CLX_SEQNUM` | D3 | 3 | Sequence Number |
| `CLX_SCRKEY` | A20 | 20 | Contract No/Doc Seq/Seq |
| `CLX_CONST` | A9 | 9 | Contract No/Doc Seq No |
| `CLX_KEY` | A21 | 21 | Type/Contract/Doc Seq/Seq |
| `CLX_DESC` | A50 | 50 | Description - Line Entry |
| `CLX_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLX_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLX_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLX_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLX_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLX_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLX_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLX_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLX_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contract Lines - Specifications/Comments (CONLINZ)

Contract specifications and general comments.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLN_TYPE` | A1 | 1 | Record Type (Z = Specification/Comments) |
| `CLN_CONTRACT` | A6 | 6 | Contract Number |
| `CLN_SEQNUM` | D3 | 3 | Sequence Number |
| `CLN_CONST` | A6 | 6 | Contract No/Sequence No |
| `CLN_SCRKEY` | A9 | 9 | Contract No/Sequence No |
| `CLN_KEY` | A21 | 21 | Type/Contract/Sequence |
| `CLN_DESC` | A50 | 50 | Description |
| `CLN_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLN_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CLN_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CLN_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CLN_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CLN_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CLN_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CLN_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CLN_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Sale Types (COTABLU)

This table defines sale types for contract classification and processing rules.

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

This table defines sales groups for contract organization and processing rules.

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

This table defines contract events for lifecycle tracking and milestone management.

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

This table defines operating centres for contract organization and management.

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

This table defines districts for contract organization and geographic management.

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

This table defines councils for contract compliance and regulatory management.

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

This table defines estates for contract location and development management.

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

This table defines contract statuses for lifecycle management and workflow control.

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

## Key Relationships

- **CONHDRA** is the main contract header table
- **CONLINV** (Variations) links to CONHDRA via `CLV_CONTRACT`
- **CONLINE** (Events) links to CONHDRA via `CLE_CONTRACT`
- **CONLINP** (Progress Billing) links to CONHDRA via `CLF_CONTRACT`
- **CONLING** (Variation Events) links to CONHDRA via `CLG_CONTRACT`
- **CONLINH** (Variation Notes) links to CONHDRA via `CLH_ID`
- **CONLINQ** (Status History) links to CONHDRA via `CLQ_CONTRACT`
- **CONLINW** (Document Register) links to CONHDRA via `CLW_CONTRACT`
- **CONLINX** (Document Notes) links to CONHDRA via `CLX_CONTRACT`
- **CONLINZ** (Specifications) links to CONHDRA via `CLN_CONTRACT`

All contract line tables include comprehensive audit fields for tracking creation and modification history.