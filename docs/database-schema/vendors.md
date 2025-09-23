# Vendor Management Tables

## Vendor Master (VENMAS)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `VM_VENNO` | A8 | 8 | Vendor Number |
| `VM_NAME` | A35 | 35 | Vendor Name |
| `VM_ADD1` | A30 | 30 | Vendor Address Line 1 |
| `VM_ADD2` | A30 | 30 | Vendor Address Line 2 |
| `VM_CITY` | A25 | 25 | City |
| `VM_STATE` | A15 | 15 | State |
| `VM_ZIP` | A8 | 8 | ZIP Code |
| `VM_PHONE` | A20 | 20 | Telephone Number |
| `VM_FAXNO` | A20 | 20 | Fax Number |
| `VM_CONTACT` | A20 | 20 | Contact Name |
| `VM_CATG` | A2 | 2 | Vendor Category Code |
| `VM_VTYPE` | A1 | 1 | Vendor Type |
| `VM_SORTCODE` | A15 | 15 | Sort Code |
| `VM_PARENT` | A8 | 8 | Parent Vendor |
| `VM_AGEMETH` | A1 | 1 | Aging Method |
| `VM_CUTDAY` | D2 | 2 | Payment Cutoff Day |
| `VM_DUEDAY` | D3 | 3 | Number of Due Days |
| `VM_DISDAY` | D3 | 3 | Number of Discount Days |
| `VM_DISPCT` | D4 | 4 | Discount Percent |
| `VM_DISPUTE` | A1 | 1 | In Dispute Flag |
| `VM_EFT_IND` | A1 | 1 | Payment by EFT Flag |
| `VM_BANK` | A10 | 10 | Bank Name |
| `VM_BRANCH` | A10 | 10 | Bank Branch |
| `VM_BANKAC` | A10 | 10 | Bank Account |
| `VM_BSB_CODE` | D6 | 6 | Bank/State/Branch Code |
| `VM_ACNAME` | A32 | 32 | Bank Account Name for EFT |
| `VM_BNKFLG` | A1 | 1 | Flag Bank Account Details Altered |
| `VM_DEFEXPAC` | A15 | 15 | Default Expense Account |
| `VM_DEFMAT` | A2 | 2 | Default Material Code |
| `VM_DEFJOB` | A8 | 8 | Default Job Number |
| `VM_DEFCTYPE` | A1 | 1 | Default Cost Type |
| `VM_DEFNAR` | A30 | 30 | Default Narrative |
| `VM_FOB` | A2 | 2 | FOB Code |
| `VM_SHPVIA` | A2 | 2 | Ship-Via Code |
| `VM_TERMS` | A2 | 2 | Terms Code |
| `VM_USERCD` | A2 | 2 | User Code |
| `VM_PRTPRC` | A1 | 1 | Print Price Flag |
| `VM_ACKNWL` | A1 | 1 | Acknowledgment Code |
| `VM_CONFRM` | A1 | 1 | Confirmation Code |
| `VM_SUBCON` | A1 | 1 | Subcontractor Flag |
| `VM_PPDATE` | D7 | 7 | PPS Certificate Expiry Date |
| `VM_PPS` | D4 | 4 | PPS Percentage |
| `VM_PPSFRMHLD` | A1 | 1 | PPS Form Held on File Flag |
| `VM_CERTIF` | A13 | 13 | PPS Certificate Number |
| `VM_FILENUM` | A13 | 13 | PPS File Number |
| `VM_PUBL_EXP` | D7 | 7 | Public Liability Expiry Date |
| `VM_WRKC_EXP` | D7 | 7 | Workers Compensation Expiry Date |
| `VM_V1_USRDEF` | A15 | 15 | User Definable Field Value 1 |
| `VM_V2_USRDEF` | A15 | 15 | User Definable Field Value 2 |
| `VM_V3_USRDEF` | A15 | 15 | User Definable Field Value 3 |
| `VM_V4_USRDEF` | A15 | 15 | User Definable Field Value 4 |
| `VM_REBAVAIL` | A1 | 1 | Rebates Available Flag |
| `VM_BILMTD` | D11 | 11 | Total Dollars Billed Month to Date |
| `VM_BILYTD` | D11 | 11 | Total Dollars Billed Year to Date |
| `VM_PAYMTD` | D11 | 11 | Payments Made Month to Date |
| `VM_PAYYTD` | D11 | 11 | Payments Made Year to Date |
| `VM_NOVMTD` | D6 | 6 | Number of Vouchers Month to Date |
| `VM_NOVYTD` | D6 | 6 | Number of Vouchers Year to Date |
| `VM_POSYTD` | D6 | 6 | Total Number of Purchase Orders Year to Date |
| `VM_LNSYTD` | D6 | 6 | Total Number of Line Items Year to Date |
| `VM_LSLYTD` | D6 | 6 | Total Number of Lines Late Year to Date |
| `VM_AVCNTR` | D6 | 6 | Event Counter |
| `VM_AVPLAT` | D3 | 3 | Average Percent Lines Late Prior Year |
| `VM_AVPVAR` | D3 | 3 | Average Percent Cost Variance |
| `VM_AVPREJ` | D3 | 3 | Average Percent Items Rejected |
| `VM_AVLDTM` | D3 | 3 | Average Lead Time in Days |
| `VM_AVDSLA` | D3 | 3 | Average Number of Days Late |
| `VM_P1PURCH` | D11 | 11 | Purchases Value Period 1 |
| `VM_P2PURCH` | D11 | 11 | Purchases Value Period 2 |
| `VM_P3PURCH` | D11 | 11 | Purchases Value Period 3 |
| `VM_P4PURCH` | D11 | 11 | Purchases Value Period 4 |
| `VM_P5PURCH` | D11 | 11 | Purchases Value Period 5 |
| `VM_P6PURCH` | D11 | 11 | Purchases Value Period 6 |
| `VM_P7PURCH` | D11 | 11 | Purchases Value Period 7 |
| `VM_P8PURCH` | D11 | 11 | Purchases Value Period 8 |
| `VM_P9PURCH` | D11 | 11 | Purchases Value Period 9 |
| `VM_P10PURCH` | D11 | 11 | Purchases Value Period 10 |
| `VM_P11PURCH` | D11 | 11 | Purchases Value Period 11 |
| `VM_P12PURCH` | D11 | 11 | Purchases Value Period 12 |
| `VM_BAL_CUR` | D11 | 11 | Current Outstanding Balance |
| `VM_BAL_30` | D11 | 11 | 30 Days Outstanding Balance |
| `VM_BAL_60` | D11 | 11 | 60 Days Outstanding Balance |
| `VM_BAL_90` | D11 | 11 | 90 Days Outstanding Balance |
| `VM_BAL_120` | D11 | 11 | 120 Days Outstanding Balance |
| `VM_BAL_FUT` | D11 | 11 | Future Balance |
| `VM_BAL_UNTRX` | D11 | 11 | Unallocated Transactions |
| `VM_BAL_TOT` | D11 | 11 | Total Amount Outstanding |
| `VM_CURRENCY` | A6 | 6 | Currency |
| `VM_INV_LIMIT` | D11 | 11 | Maximum Invoice Amount Allowed |
| `VM_PAY_LIMIT` | D11 | 11 | Maximum Payment Amount Allowed |
| `VM_ENT_ADDR` | A1 | 1 | Payment Address Can Be Modified Flag |
| `VM_SEL_AMT` | D11 | 11 | Invoice Amount Selected for Payment |
| `VM_SEL_PPS` | D11 | 11 | PPS Amount Selected for Payment |
| `VM_SEL_DSC` | D11 | 11 | Discount Selected for Payment |
| `VM_CHQ_OPT` | A1 | 1 | Cheque Printing Options |
| `VM_ABN` | D11 | 11 | ABN Number for GST |
| `VM_GST_ADJ` | D11 | 11 | Payment Selection GST Adjustment |
| `VM_DEF_GSTCD` | A1 | 1 | Vendor Default GST Code |
| `VM_ONE_INV` | A1 | 1 | Flag Limit One Invoice per Order |
| `VM_SEL_GST` | D11 | 11 | GST Amount Selected for Payment |
| `VM_SEL_FCAMT` | D11 | 11 | Foreign Currency Amount to Pay |
| `VM_SEL_RATE` | D10 | 10 | Exchange Rate |
| `VM_SEL_RTYPE` | A1 | 1 | Exchange Type |
| `VM_SEL_CSHACC` | A15 | 15 | Selected Cash Account for Payment |
| `VM_SEL_CNVFEE` | D11 | 11 | Foreign Currency Conversion Fee AUD |
| `VM_CARRIER` | A2 | 2 | Default Carrier Code for Purchase Orders |
| `VM_CHQNAME` | A35 | 35 | Name to Print on Cheques |
| `VM_CHQADDR1` | A30 | 30 | Address to Print on Cheques |
| `VM_CHQADDR2` | A30 | 30 | Address to Print on Cheques |
| `VM_CHQADDR3` | A30 | 30 | Address to Print on Cheques |
| `VM_USE_EFTREF` | A1 | 1 | Vendor to Use EFT Reference at Invoice Time Flag |
| `VM_SIGN1` | A3 | 3 | Cheque Signatory 1 |
| `VM_SIGN2` | A3 | 3 | Cheque Signatory 2 |
| `VM_SIGN3` | A3 | 3 | Cheque Signatory 3 |
| `VM_SIGN4` | A3 | 3 | Cheque Signatory 4 |
| `VM_MOBILE` | A20 | 20 | Vendor Mobile Phone Number |
| `VM_CUSTREFNO` | A30 | 30 | Customer Reference Number |
| `VM_EFTREF` | A18 | 18 | EFT Reference |
| `VM_CREDLMT` | D9 | 9 | Vendor Credit Limit |
| `VM_SHOW_DIST` | A1 | 1 | Show Distributions on Remittance Report Flag |
| `VM_PO_TMPL` | A1 | 1 | Purchase Order Template Code |
| `VM_REM_TMPL` | A1 | 1 | Remittance Template Code |
| `VM_PUBL_POL` | A20 | 20 | Public Liability Policy Number |
| `VM_WRKC_POL` | A20 | 20 | Workers Compensation Policy Number |
| `VM_REB_CUST` | A6 | 6 | Rebate Claim Customer Code |
| `VM_NON_RCTI` | A1 | 1 | Do Not Create RCTI for This Vendor Flag |
| `VM_CRQ_TMPL` | A1 | 1 | Credit Request Template Code |
| `VM_SC_TYPE` | A2 | 2 | Sub Contractor Type |
| `VM_CLAUSE_CODE` | A3 | 3 | Clause Code to Be Displayed When Raising a Purchase Order |
| `VM_COUNTRY` | A2 | 2 | Country Code |
| `VM_EDI_PARTNER` | A8 | 8 | EDI Trading Partner |
| `VM_EDI_GLN` | A13 | 13 | EDI Global Location Number |
| `VM_SA_ID` | D6 | 6 | Supplier Application ID |
| `VM_INC_PTR` | A1 | 1 | Include in Payment Time Reporting Flag |
| `VM_AGENT_MODE` | A1 | 1 | Sales Agent Mode |
| `VM_INA_USER` | A12 | 12 | Inactive Audit Initials |
| `VM_INA_DATE` | D7 | 7 | Inactive Audit Date |
| `VM_INA_TIME` | D9 | 9 | Inactive Audit Time |
| `VM_INA_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `VM_SYNCSTATUS` | A1 | 1 | Sync Status |
| `VM_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `VM_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `VM_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `VM_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `VM_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `VM_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `VM_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `VM_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Vendor Notes (VENLINA)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `VLN_VENNO` | A8 | 8 | Vendor Number |
| `VLN_SEQ` | D3 | 3 | Sequence Number |
| `VLN_NOTE` | A50 | 50 | Note Text |
| `VLN_TYPE` | A1 | 1 | Note Type |
| `VLN_DATE` | D7 | 7 | Note Date |

## Vendor Notes Specs (VENLINB)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `VLN_VENNO` | A8 | 8 | Vendor Number |
| `VLN_SEQ` | D3 | 3 | Sequence Number |
| `VLN_SUB_SEQ` | D3 | 3 | Sub Sequence Number |
| `VLN_SPEC` | A50 | 50 | Specification Text |
| `VLN_TYPE` | A1 | 1 | Specification Type |
| `VLN_DATE` | D7 | 7 | Specification Date |

## Vendor Rebates (VENLINC)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `VLR_VENNO` | A8 | 8 | Vendor Number |
| `VLR_SEQ` | D3 | 3 | Sequence Number |
| `VLR_REBATE` | D9 | 9 | Rebate Amount |
| `VLR_TYPE` | A1 | 1 | Rebate Type |
| `VLR_DATE` | D7 | 7 | Rebate Date |
| `VLR_DESC` | A30 | 30 | Rebate Description |

## Vendor Standard Items (VENLIND)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `VLI_VENNO` | A8 | 8 | Vendor Number |
| `VLI_ITEMNO` | A15 | 15 | Item Number |
| `VLI_DESC` | A30 | 30 | Item Description |
| `VLI_COST` | D10 | 10 | Standard Cost |
| `VLI_UOM` | A2 | 2 | Unit of Measure |
| `VLI_ACTIVE` | A1 | 1 | Active Flag |