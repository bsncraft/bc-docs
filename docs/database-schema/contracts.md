# Contract Management Tables

## Contract Header (CONHDR)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CO_CONTRACT` | D6 | 6 | Contract Number (Primary Key) |
| `CO_KEY` | A6 | 6 | Contract Key |
| `CO_DESCR` | A30 | 30 | Description |
| `CO_NAME` | A30 | 30 | Name |
| `CO_DATE` | D7 | 7 | Contract Date |
| `CO_CUSNUM` | A6 | 6 | Customer Code |
| `CO_ADDR1` | A30 | 30 | Address Line 1 |
| `CO_ADDR2` | A30 | 30 | Address Line 2 |
| `CO_ADDR` | A60 | 60 | Address |
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
| `CO_INV_VAR` | D11 | 11 | Invoice Raised On Variations To Contract |
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
| `CO_PARENTA` | A6 | 6 | Parent Contract Alpha |
| `CO_LISTPRCINCGST` | D11 | 11 | House List Price Inc GST |
| `CO_LISTPRCGST` | D11 | 11 | House List Price GST |
| `CO_LISTPRCGSTCD` | A1 | 1 | House List Price GST Code |
| `CO_CUST_SATISF` | A2 | 2 | Customer Satisfaction |
| `CO_PROMPT_IMPR` | A1 | 1 | Prompt Important Messages |
| `CO_EXT_DAYS` | D5 | 5 | Approved Extension Days Claimed |
| `CO_CROSS_REF` | D6 | 6 | Contract Cross Reference |
| `CO_LATITUDE` | D10 | 10 | Latitude |
| `CO_LONGITUDE` | D10 | 10 | Longitude |
| `CO_INV_JOBTRF` | A1 | 1 | Invoice Job Transfer Flag |
| `CO_ACTIVE` | A1 | 1 | Active |
| `CO_TENANTFLAG` | A1 | 1 | Tenant Flag |
| `CO_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CO_MOD_USER` | A12 | 12 | Modified Audit User |
| `CO_MOD_DATE` | D7 | 7 | Modified Audit Date |
| `CO_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `CO_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `CO_MOD_TIMED4` | D4 | 4 | Modified Audit Time D4 |
| `CO_CRE_USER` | A12 | 12 | Creation Audit User |
| `CO_CRE_DATE` | D7 | 7 | Creation Audit Date |
| `CO_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `CO_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |
| `CO_CRE_TIMED4` | D4 | 4 | Creation Audit Time D4 |
| `CO_EXT_REF_ID` | A36 | 36 | Extra Reference ID |
| `CO_HIA_TMPL_CODE` | A20 | 20 | HIA Template Code |
| `CO_SA_CONTACT` | A40 | 40 | Sales Agent Contact Name |
| `CO_SA_PHONE` | A12 | 12 | Sales Agent Contact Phone |
| `CO_SA_MOBILE` | A12 | 12 | Sales Agent Contact Mobile |
| `CO_SA_MODE` | A1 | 1 | Sales Agent Correspondence Mode |


## Contract Variations (CONLINV)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLV_TYPE` | A1 | 1 | Record Type |
| `CLV_CONTRACT` | D6 | 6 | Contract Number |
| `CLV_SEQNUM` | D3 | 3 | Sequence Number |
| `CLV_CONTRACTA` | A6 | 6 | Contract Number Alpha |
| `CLV_SEQA` | A3 | 3 | Sequence Alpha |
| `CLV_SCRKEY` | A9 | 9 | Screen Key |
| `CLV_VARKEY` | A10 | 10 | Variation Key |
| `CLV_KEY` | A21 | 21 | Primary Key |
| `CLV_DATE` | D7 | 7 | Date |
| `CLV_DESCR` | A40 | 40 | Description |
| `CLV_AMOUNT` | D10 | 10 | Amount ExGST |
| `CLV_REF` | A6 | 6 | Reference Number |
| `CLV_INVOICED` | A1 | 1 | Invoiced Flag |
| `CLV_VTYPE` | A1 | 1 | Variation Type |
| `CLV_COST` | D10 | 10 | Cost |
| `CLV_ISSUED` | D10 | 10 | Amount Issued |
| `CLV_ISSFLAG` | A1 | 1 | Issued Flag |
| `CLV_GST_AMT` | D11 | 11 | GST Amount |
| `CLV_GST_AMT9` | D9 | 9 | GST Amount 9 |
| `CLV_GST_CDE` | A1 | 1 | GST Code |
| `CLV_PO_REF` | A20 | 20 | Customer PO Reference |
| `CLV_CHRG_TY` | A1 | 1 | Charge To Type |
| `CLV_CHRG_TO` | A15 | 15 | Charge To Responsibility |
| `CLV_VREASON` | A2 | 2 | Variation Reason |
| `CLV_PBSTAGE` | A3 | 3 | Progress Billing Stage |
| `CLV_JI_FLAG` | A1 | 1 | Job Info Flag |
| `CLV_JI_REV` | D3 | 3 | Job Info Revision |
| `CLV_JI_DOCSEQ` | D3 | 3 | Job Info Doc Sequence |
| `CLV_SALEGROUP` | A3 | 3 | Sale Group |
| `CLV_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLV_MOD_USER` | A12 | 12 | Modified Audit User |
| `CLV_MOD_DATE` | D7 | 7 | Modified Audit Date |
| `CLV_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `CLV_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `CLV_CRE_USER` | A12 | 12 | Creation Audit User |
| `CLV_CRE_DATE` | D7 | 7 | Creation Audit Date |
| `CLV_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `CLV_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Contract Events (CONLINE)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLE_TYPE` | A1 | 1 | Record Type |
| `CLE_CONTRACT` | D6 | 6 | Contract Number |
| `CLE_EVENT` | D5 | 5 | Event Code |
| `CLE_CONTRACTA` | A6 | 6 | Contract Number Alpha |
| `CLE_EVENTA` | A5 | 5 | Event Code Alpha |
| `CLE_SCRKEY` | A11 | 11 | Screen Key |
| `CLE_TKEY` | A12 | 12 | Type Key |
| `CLE_SKEY` | A20 | 20 | Secondary Key |
| `CLE_KEY` | A21 | 21 | Primary Key |
| `CLE_FOREDATE` | D7 | 7 | Forecast Date |
| `CLE_ACTDATE` | D7 | 7 | Actual Date |
| `CLE_REGDATE` | D7 | 7 | Register Date |
| `CLE_FOREFLAG` | A1 | 1 | Forecast Flag |
| `CLE_AMOUNT` | D10 | 10 | Amount ExGST |
| `CLE_DESC` | A30 | 30 | Description |
| `CLE_CHNGEVNT` | D5 | 5 | Change Event |
| `CLE_EMPLOYEE` | A3 | 3 | Employee Code |
| `CLE_UNREG` | A1 | 1 | Unregistered Flag |
| `CLE_PCTCMPL` | D5 | 5 | Percentage Complete |
| `CLE_LEVEL` | A1 | 1 | Lower Levels Flag |
| `CLE_AMOUNT2` | D10 | 10 | Amount2 (GST) |
| `CLE_DUEDATE` | D7 | 7 | Due Date |
| `CLE_DUEREFCAST` | D1 | 1 | Due Date Reforecast |
| `CLE_REF` | A30 | 30 | Reference |
| `CLE_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CLE_REG_USER` | A12 | 12 | Registration Audit User |
| `CLE_REG_DATE` | D7 | 7 | Registration Audit Date |
| `CLE_REG_TIME` | D9 | 9 | Registration Audit Time |
| `CLE_REG_STAMP` | A28 | 28 | Registration Audit Stamp |
| `CLE_MOD_USER` | A12 | 12 | Modified Audit User |
| `CLE_MOD_DATE` | D7 | 7 | Modified Audit Date |
| `CLE_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `CLE_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `CLE_DATESTAMP` | A13 | 13 | Date Stamp |
| `CLE_CRE_USER` | A12 | 12 | Creation Audit User |
| `CLE_CRE_DATE` | D7 | 7 | Creation Audit Date |
| `CLE_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `CLE_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Progress Billing (CONLINF)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLF_TYPE` | A1 | 1 | Record Type |
| `CLF_CONTRACT` | D6 | 6 | Contract Number |
| `CLF_CODE` | A3 | 3 | Stage Code |
| `CLF_DESC` | A30 | 30 | Description |
| `CLF_COMPLETE` | D5 | 5 | Percent Complete |
| `CLF_EVENT` | D5 | 5 | Stage Required Event |
| `CLF_AMOUNT` | D11 | 11 | Progress Amount |
| `CLF_BILLFLG` | A1 | 1 | Billing Flag |

## Contract Variation Events (CONLING)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLG_TYPE` | A1 | 1 | Record Type |
| `CLG_CONTRACT` | D6 | 6 | Contract Number |
| `CLG_VARIATION` | D3 | 3 | Variation Number |
| `CLG_EVENT` | D5 | 5 | Event Code |
| `CLG_DATE` | D7 | 7 | Event Date |
| `CLG_DESC` | A30 | 30 | Description |

## Contract Variation Notes (CONLINH)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLH_TYPE` | A1 | 1 | Record Type |
| `CLH_CONTRACT` | D6 | 6 | Contract Number |
| `CLH_VARIATION` | D3 | 3 | Variation Number |
| `CLH_SEQ` | D3 | 3 | Sequence Number |
| `CLH_NOTE` | A50 | 50 | Note Text |
| `CLH_DATE` | D7 | 7 | Note Date |

## Contract Released Jobs (CONLIND)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLD_TYPE` | A1 | 1 | Record Type |
| `CLD_CONTRACT` | D6 | 6 | Contract Number |
| `CLD_JOBNUM` | A8 | 8 | Job Number |
| `CLD_DATE` | D7 | 7 | Release Date |
| `CLD_DESC` | A30 | 30 | Description |

## Contract Status History (CONLINQ)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CLQ_TYPE` | A1 | 1 | Record Type |
| `CLQ_CONTRACT` | D6 | 6 | Contract Number |
| `CLQ_STATUS` | A3 | 3 | Status |
| `CLQ_DATE` | D7 | 7 | Status Date |
| `CLQ_TIME` | D9 | 9 | Status Time |
| `CLQ_USER` | A12 | 12 | User |
| `CLQ_DESC` | A30 | 30 | Description |
