# Request for Quote Tables

The Request for Quote (RFQ) module manages the process of requesting quotes from suppliers for specific items or services. This module supports the complete RFQ lifecycle from creation through to quote comparison and selection.

## Request for Quote Header (RFQHDRA)

The main header table for Request for Quote records.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQ_ID` | A10 | 10 | RFQ ID Number (Primary Key) |
| `RFQ_EXT_REF_ID` | A36 | 36 | External Reference ID |
| `RFQ_JOBNUM` | A8 | 8 | Job Number |
| `RFQ_STATUS` | A3 | 3 | RFQ Status |
| `RFQ_RESP_DATE` | D7 | 7 | Response Date (Julian) |
| `RFQ_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQ_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQ_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQ_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQ_MOD_TIMED4` | D4 | 4 | Modified Audit Time (D4 format) |
| `RFQ_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQ_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQ_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQ_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |
| `RFQ_CRE_TIMED4` | D4 | 4 | Creation Audit Time (D4 format) |

## Request for Quote Notes (RFQLINA)

General notes and comments for RFQ records.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLA_TYPE` | A1 | 1 | Record Type (A = "Notes") |
| `RFQLA_ID` | A10 | 10 | RFQ Identifier |
| `RFQLA_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLA_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLA_SCRKEY` | A15 | 15 | Screen Key |
| `RFQLA_KEY` | A40 | 40 | Primary Key |
| `RFQLA_NOTES` | A1900 | 1900 | Notes |
| `RFQLA_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLA_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLA_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLA_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLA_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLA_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLA_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLA_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Lines (RFQLINB)

Line items for the RFQ request.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLB_TYPE` | A1 | 1 | Record Type (B = "RFQ Lines") |
| `RFQLB_ID` | A10 | 10 | RFQ Identifier |
| `RFQLB_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLB_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLB_SCRKEY` | A15 | 15 | Screen Key |
| `RFQLB_KEY` | A40 | 40 | Primary Key |
| `RFQLB_ITEM` | A15 | 15 | Item Number |
| `RFQLB_DESC` | A50 | 50 | Item Description |
| `RFQLB_UOM` | A4 | 4 | Unit of Measure |
| `RFQLB_GST_CODE` | A1 | 1 | GST Code |
| `RFQLB_QTY` | D11 | 11 | Quantity (Precision 3) |
| `RFQLB_AMOUNT` | D11 | 11 | Amount (Currency) |
| `RFQLB_GST_AMT` | D11 | 11 | GST Amount (Currency) |
| `RFQLB_GST_INCAMT` | D11 | 11 | Inc GST Amount (Currency) |
| `RFQLB_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLB_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLB_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLB_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLB_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLB_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLB_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLB_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Line Notes (RFQLINC)

Notes and comments for specific RFQ line items.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLC_TYPE` | A1 | 1 | Record Type (C = "Line Notes") |
| `RFQLC_ID` | A10 | 10 | RFQ Identifier |
| `RFQLC_LINE_SEQ` | D5 | 5 | Line Sequence Number |
| `RFQLC_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLC_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLC_CONST` | A15 | 15 | Constant |
| `RFQLC_SCRKEY` | A20 | 20 | Screen Key |
| `RFQLC_KEY` | A40 | 40 | Primary Key |
| `RFQLC_NOTES` | A1900 | 1900 | Notes |
| `RFQLC_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLC_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLC_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLC_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLC_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLC_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLC_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLC_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Documents (RFQLIND)

Document attachments for RFQ records.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLD_TYPE` | A1 | 1 | Record Type (D = "Documents") |
| `RFQLD_ID` | A10 | 10 | RFQ Identifier |
| `RFQLD_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLD_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLD_SCRKEY` | A15 | 15 | Screen Key |
| `RFQLD_KEY` | A40 | 40 | Primary Key |
| `RFQLD_DOCTYP` | A5 | 5 | Document Type |
| `RFQLD_DOCREF` | A8 | 8 | Document Reference |
| `RFQLD_DESC` | A40 | 40 | Document Description |
| `RFQLD_PATH` | A200 | 200 | Document Path |
| `RFQLD_STATUS` | A1 | 1 | Status |
| `RFQLD_ORIG_FILE` | A100 | 100 | Original Document Filename |
| `RFQLD_SOURCEKEY` | A30 | 30 | Link back to Default Document |
| `RFQLD_REVNUM` | D2 | 2 | Revision Number |
| `RFQLD_EXPIRY_DATE` | D7 | 7 | Expiry Date (Julian) |
| `RFQLD_REF` | A30 | 30 | Reference Value |
| `RFQLD_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLD_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLD_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLD_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLD_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLD_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLD_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLD_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Document Notes (RFQLINE)

Notes and comments for RFQ document attachments.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLE_TYPE` | A1 | 1 | Record Type (E = "Document Notes") |
| `RFQLE_ID` | A10 | 10 | RFQ Identifier |
| `RFQLE_DOC_SEQ` | D5 | 5 | Document Sequence Number |
| `RFQLE_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLE_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLE_CONST` | A15 | 15 | Constant |
| `RFQLE_SCRKEY` | A20 | 20 | Screen Key |
| `RFQLE_KEY` | A40 | 40 | Primary Key |
| `RFQLE_NOTES` | A1900 | 1900 | Notes |
| `RFQLE_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLE_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLE_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLE_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLE_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLE_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLE_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLE_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Suppliers (RFQLINF)

Suppliers associated with the RFQ request.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLF_TYPE` | A1 | 1 | Record Type (F = "RFQ Suppliers") |
| `RFQLF_ID` | A10 | 10 | RFQ Identifier |
| `RFQLF_VENDOR` | A8 | 8 | Vendor Code |
| `RFQLF_SCRKEY` | A18 | 18 | Screen Key |
| `RFQLF_KEY` | A40 | 40 | Primary Key |
| `RFQLF_NAME` | A40 | 40 | Supplier Name |
| `RFQLF_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLF_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLF_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLF_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLF_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLF_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLF_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLF_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Work Types (RFQLING)

Work types or categories associated with the RFQ.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLG_TYPE` | A1 | 1 | Record Type (G = "RFQ Work Types") |
| `RFQLG_ID` | A10 | 10 | RFQ Identifier |
| `RFQLG_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLG_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLG_SCRKEY` | A15 | 15 | Screen Key |
| `RFQLG_KEY` | A40 | 40 | Primary Key |
| `RFQLG_TYPE_ID` | A15 | 15 | Work Type ID |
| `RFQLG_DESC` | A100 | 100 | Description |
| `RFQLG_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLG_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLG_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLG_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLG_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLG_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLG_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLG_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Quote Header (RFQLINH)

Header information for quotes received in response to RFQ requests.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLH_TYPE` | A1 | 1 | Record Type (H = "RFQ Quote Header") |
| `RFQLH_ID` | A10 | 10 | RFQ Identifier |
| `RFQLH_QUOTE_ID` | A10 | 10 | Quote ID |
| `RFQLH_SCRKEY` | A20 | 20 | Screen Key |
| `RFQLH_KEY` | A40 | 40 | Primary Key |
| `RFQLH_EXT_REF_ID` | A36 | 36 | External Reference ID |
| `RFQLH_VENDOR` | A8 | 8 | Vendor |
| `RFQLH_DATE` | D7 | 7 | Quote Date (Julian) |
| `RFQLH_EXPIRY` | D7 | 7 | Expiry Date (Julian) |
| `RFQLH_QUOTE_REF` | A20 | 20 | Quote Reference |
| `RFQLH_TOTAL` | D11 | 11 | Quote Total (Currency) |
| `RFQLH_TOT_GST` | D11 | 11 | Total GST (Currency) |
| `RFQLH_INC_TOT` | D11 | 11 | Inc GST Total (Currency) |
| `RFQLH_TERMS` | A25 | 25 | Terms Description |
| `RFQLH_DELINC` | A1 | 1 | Delivery Included (Yes/No) |
| `RFQLH_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLH_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLH_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLH_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLH_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLH_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLH_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLH_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Quote Notes (RFQLINI)

Notes and comments for quotes received.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLI_TYPE` | A1 | 1 | Record Type (I = "RFQ Quote Notes") |
| `RFQLI_ID` | A10 | 10 | RFQ Identifier |
| `RFQLI_QUOTE_ID` | A10 | 10 | RFQ Quote Identifier |
| `RFQLI_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLI_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLI_CONST` | A20 | 20 | Constant |
| `RFQLI_SCRKEY` | A25 | 25 | Screen Key |
| `RFQLI_KEY` | A40 | 40 | Primary Key |
| `RFQLI_NOTES` | A1900 | 1900 | Notes |
| `RFQLI_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLI_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLI_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLI_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLI_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLI_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLI_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLI_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Quote Lines (RFQLINJ)

Line items for quotes received in response to RFQ requests.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLJ_TYPE` | A1 | 1 | Record Type (J = "RFQ Quote Lines") |
| `RFQLJ_ID` | A10 | 10 | RFQ Identifier |
| `RFQLJ_QUOTE_ID` | A10 | 10 | RFQ Quote Identifier |
| `RFQLJ_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLJ_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLJ_SCRKEY` | A20 | 20 | Screen Key |
| `RFQLJ_KEY` | A40 | 40 | Primary Key |
| `RFQLJ_ITEM` | A15 | 15 | Item Number |
| `RFQLJ_DESC` | A50 | 50 | Item Description |
| `RFQLJ_UOM` | A4 | 4 | Unit of Measure |
| `RFQLJ_GST_CODE` | A1 | 1 | GST Code |
| `RFQLJ_QTY` | D11 | 11 | Quantity (Precision 3) |
| `RFQLJ_AMOUNT` | D11 | 11 | Amount (Currency) |
| `RFQLJ_GST_AMT` | D11 | 11 | GST Amount (Currency) |
| `RFQLJ_GST_INCAMT` | D11 | 11 | Inc GST Amount (Currency) |
| `RFQLJ_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLJ_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLJ_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLJ_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLJ_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLJ_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLJ_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLJ_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Quote Line Notes (RFQLINK)

Notes and comments for specific quote line items.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLK_TYPE` | A1 | 1 | Record Type (K = "RFQ Quote Line Notes") |
| `RFQLK_ID` | A10 | 10 | RFQ Identifier |
| `RFQLK_QUOTE_ID` | A10 | 10 | RFQ Quote Identifier |
| `RFQLK_LINE_SEQ` | D5 | 5 | RFQ Line Sequence |
| `RFQLK_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLK_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLK_CONST` | A25 | 25 | Constant |
| `RFQLK_SCRKEY` | A30 | 30 | Screen Key |
| `RFQLK_KEY` | A40 | 40 | Primary Key |
| `RFQLK_NOTES` | A1900 | 1900 | Notes |
| `RFQLK_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLK_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLK_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLK_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLK_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLK_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLK_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLK_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Quote Documents (RFQLINL)

Document attachments for quotes received.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLL_TYPE` | A1 | 1 | Record Type (L = "RFQ Quote Documents") |
| `RFQLL_ID` | A10 | 10 | RFQ Identifier |
| `RFQLL_QUOTE_ID` | A10 | 10 | RFQ Quote Identifier |
| `RFQLL_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLL_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLL_CONST` | A20 | 20 | Constant |
| `RFQLL_SCRKEY` | A25 | 25 | Screen Key |
| `RFQLL_KEY` | A40 | 40 | Primary Key |
| `RFQLL_DOCTYP` | A5 | 5 | Document Type |
| `RFQLL_DOCREF` | A8 | 8 | Document Reference |
| `RFQLL_DESC` | A40 | 40 | Document Description |
| `RFQLL_PATH` | A200 | 200 | Document Path |
| `RFQLL_STATUS` | A1 | 1 | Status |
| `RFQLL_ORIG_FILE` | A100 | 100 | Original Document Filename |
| `RFQLL_SOURCEKEY` | A30 | 30 | Link back to Default Document |
| `RFQLL_REVNUM` | D2 | 2 | Revision Number |
| `RFQLL_EXPIRY_DATE` | D7 | 7 | Expiry Date (Julian) |
| `RFQLL_REF_VALUE` | A30 | 30 | Reference Value |
| `RFQLL_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLL_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLL_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLL_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLL_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLL_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLL_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLL_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Request for Quote Quote Document Notes (RFQLINM)

Notes and comments for quote document attachments.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `RFQLM_TYPE` | A1 | 1 | Record Type (M = "RFQ Quote Document Notes") |
| `RFQLM_ID` | A10 | 10 | RFQ Identifier |
| `RFQLM_QUOTE_ID` | A10 | 10 | RFQ Quote Identifier |
| `RFQLM_DOC_SEQ` | D5 | 5 | Document Sequence Number |
| `RFQLM_SEQNUM` | D5 | 5 | Sequence Number |
| `RFQLM_SEQA` | A5 | 5 | Sequence Number (Alpha) |
| `RFQLM_CONST` | A25 | 25 | Constant |
| `RFQLM_SCRKEY` | A30 | 30 | Screen Key |
| `RFQLM_KEY` | A40 | 40 | Primary Key |
| `RFQLM_NOTES` | A1900 | 1900 | Notes |
| `RFQLM_MOD_USER` | A12 | 12 | Modified Audit User |
| `RFQLM_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `RFQLM_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `RFQLM_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `RFQLM_CRE_USER` | A12 | 12 | Creation Audit User |
| `RFQLM_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `RFQLM_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `RFQLM_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Key Relationships

### Primary Relationships
- **RFQHDRA** → **RFQLIN***: `RFQ_ID` links to all line tables
- **RFQLINH** → **RFQLINJ**: `RFQLH_QUOTE_ID` links to `RFQLJ_QUOTE_ID`
- **RFQLINB** → **ITMMASA**: `RFQLB_ITEM` links to `ITEMNO` (Foreign Key)
- **RFQLINF** → **VENMASA**: `RFQLF_VENDOR` links to `VM_VENNO`
- **RFQHDRA** → **JCHEADA**: `RFQ_JOBNUM` links to `JC_JOBNUM`

### Foreign Key Patterns
- **RFQ Tables**: `RFQ_ID` (A10) - Request for Quote Number
- **Quote Tables**: `RFQLH_QUOTE_ID` (A10) - Quote Number
- **Line Tables**: `RFQL*_SEQNUM` (D5) - Line Sequence Number
- **Vendor Tables**: `RFQLF_VENDOR` (A8) - Vendor Number
- **Item Tables**: `RFQLB_ITEM` (A15) - Item Number

## Data Types

| Type | Description | Example |
|------|-------------|---------|
| **A** | Alpha (String) | `A10` = 10 character string |
| **D** | Decimal (Numeric) | `D11` = 11-digit decimal |
| **Size** | Field size in bytes | `A30` = 30 bytes |

## Field Attributes

### Common Field Patterns
- **Primary Keys**: Usually the first field in each table
- **Foreign Keys**: Reference other tables (e.g., `RFQ_ID` → `RFQL*_ID`)
- **Date Fields**: Julian date format (D7)
- **Time Fields**: Time format (D9)
- **Status Fields**: Single character status codes
- **Amount Fields**: Decimal fields for monetary values (D11 with Currency precision)

### Field Naming Conventions
- **Table Prefix**: Each field starts with table abbreviation (e.g., `RFQ_`, `RFQLA_`, `RFQLB_`)
- **Field Type**: Descriptive names (e.g., `ID`, `SEQNUM`, `AMOUNT`)
- **Status Fields**: Often end with `STATUS` or `FLG`
- **Date Fields**: Often end with `DATE` or `DTE`
- **Amount Fields**: Often end with `AMT` or `TOTAL`
- **Audit Fields**: Standard pattern with `MOD_` and `CRE_` prefixes

## Table Summary

| # | Table | File | Tag | Purpose | Key Fields |
|---|-------|------|-----|---------|------------|
| 1 | RFQHDRA | 209 | A | Request for Quote Header | RFQ_ID, RFQ_JOBNUM |
| 2 | RFQLINA | 210 | A | RFQ Notes | RFQLA_ID, RFQLA_SEQNUM |
| 3 | RFQLINB | 210 | B | RFQ Lines | RFQLB_ID, RFQLB_SEQNUM |
| 4 | RFQLINC | 210 | C | RFQ Line Notes | RFQLC_ID, RFQLC_LINE_SEQ |
| 5 | RFQLIND | 210 | D | RFQ Documents | RFQLD_ID, RFQLD_SEQNUM |
| 6 | RFQLINE | 210 | E | RFQ Document Notes | RFQLE_ID, RFQLE_DOC_SEQ |
| 7 | RFQLINF | 210 | F | RFQ Suppliers | RFQLF_ID, RFQLF_VENDOR |
| 8 | RFQLING | 210 | G | RFQ Work Types | RFQLG_ID, RFQLG_SEQNUM |
| 9 | RFQLINH | 210 | H | RFQ Quote Header | RFQLH_ID, RFQLH_QUOTE_ID |
| 10 | RFQLINI | 210 | I | RFQ Quote Notes | RFQLI_ID, RFQLI_QUOTE_ID |
| 11 | RFQLINJ | 210 | J | RFQ Quote Lines | RFQLJ_ID, RFQLJ_QUOTE_ID |
| 12 | RFQLINK | 210 | K | RFQ Quote Line Notes | RFQLK_ID, RFQLK_LINE_SEQ |
| 13 | RFQLINL | 210 | L | RFQ Quote Documents | RFQLL_ID, RFQLL_QUOTE_ID |
| 14 | RFQLINM | 210 | M | RFQ Quote Document Notes | RFQLM_ID, RFQLM_QUOTE_ID |

## Integration Notes

This Request for Quote module is designed for integration with BuiltGrid supply chain management. The module supports:

- **Multi-supplier RFQ processes** with comprehensive quote comparison
- **Document management** for RFQ specifications and quote attachments
- **Work type categorization** for specialized RFQ requirements
- **Audit trails** for complete transaction history
- **Flexible line item management** with detailed specifications
- **Quote evaluation and comparison** capabilities

The module integrates with existing BusinessCraft modules including Job Costing, Inventory Management, and Vendor Management systems.
