# Customer Management Tables

This section details the database tables related to Customer Management within BusinessCraft, essential for understanding customer data and relationships.

## Customer Master (CUSMASA)

This table holds the primary customer information including contact details, financial data, and business relationships.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `CUSNO` | A6 | 6 | Customer Number |
| `CM_NAME` | A30 | 30 | Customer Name |
| `ADD1` | A30 | 30 | Address Line 1 |
| `ADD2` | A30 | 30 | Address Line 2 |
| `ADD3` | A30 | 30 | Address Line 3 |
| `ADD4` | A30 | 30 | Address Line 4 |
| `CITY` | A25 | 25 | City |
| `STATE` | A15 | 15 | State |
| `ZIP` | A8 | 8 | Post Code |
| `ZIP4` | A4 | 4 | Post Code Extension |
| `CUSDISC` | D3 | 3 | Customer Discount |
| `SLSMAN` | D2 | 2 | Salesman Number |
| `TERR` | A2 | 2 | Territory |
| `CUSLOC` | A2 | 2 | Inventory Location |
| `CUSCD` | A2 | 2 | Customer Type |
| `SLSCDE` | A2 | 2 | Default Sales Code |
| `FLGROYAL` | A1 | 1 | Royalty Invoice Created Flag |
| `PRCROYAL` | D4 | 4 | Royalty Percentage |
| `MINROYAL` | D8 | 8 | Royalty Minimum Amount |
| `TAXFLG` | D1 | 1 | Tax Flag (1=Taxable, 2=Non-taxable) |
| `CRDLMT` | D6 | 6 | Credit Limit |
| `TERMS` | A2 | 2 | Terms Code |
| `BALMTH` | A1 | 1 | Balance Method (O=Open Item, B=Balance Forward) |
| `STMFLG` | D1 | 1 | Statement Flag (1=Statement Required, 2=No Statement) |
| `EXTFLG` | A1 | 1 | External Flag (E=External, I=Internal) |
| `BILLTO` | A6 | 6 | Parent Company |
| `DELCOD` | A6 | 6 | Delivery Route |
| `CONTACT` | A15 | 15 | Customer Contact |
| `SUPFLG` | A1 | 1 | Credit Status (S=Supply Stopped) |
| `TAXNO` | A9 | 9 | Sales Tax Number |
| `MCONTACT` | A15 | 15 | Mailing Contact |
| `CAGE_CURR` | D10 | 10 | Current Aged Balance |
| `CAGE_30` | D10 | 10 | 30 Days Aged Balance |
| `CAGE_60` | D10 | 10 | 60 Days Aged Balance |
| `CAGE_90` | D10 | 10 | 90 Days Aged Balance |
| `CAGE_120` | D10 | 10 | 120 Days Aged Balance |
| `CAGE` | [4]D10 | 40 | Customer Aged Balances Array |
| `P1SALES` | D10 | 10 | Sales Value Period 1 |
| `P2SALES` | D10 | 10 | Sales Value Period 2 |
| `P3SALES` | D10 | 10 | Sales Value Period 3 |
| `P4SALES` | D10 | 10 | Sales Value Period 4 |
| `P5SALES` | D10 | 10 | Sales Value Period 5 |
| `P6SALES` | D10 | 10 | Sales Value Period 6 |
| `P7SALES` | D10 | 10 | Sales Value Period 7 |
| `P8SALES` | D10 | 10 | Sales Value Period 8 |
| `P9SALES` | D10 | 10 | Sales Value Period 9 |
| `P10SALES` | D10 | 10 | Sales Value Period 10 |
| `P11SALES` | D10 | 10 | Sales Value Period 11 |
| `P12SALES` | D10 | 10 | Sales Value Period 12 |
| `P13SALES` | D10 | 10 | Sales Value Period 13 |
| `PSALES` | [13]D10 | 130 | Sales Value Array |
| `MKT_CAT1` | A2 | 2 | Marketing Category 1 |
| `MKT_CAT2` | A2 | 2 | Marketing Category 2 |
| `MKT_CAT3` | A2 | 2 | Marketing Category 3 |
| `MKT_CAT4` | A2 | 2 | Marketing Category 4 |
| `MKT_CAT5` | A2 | 2 | Marketing Category 5 |
| `MKT_CAT6` | A2 | 2 | Marketing Category 6 |
| `MKT_CAT7` | A2 | 2 | Marketing Category 7 |
| `MKT_CAT8` | A2 | 2 | Marketing Category 8 |
| `MKT_CAT9` | A2 | 2 | Marketing Category 9 |
| `MKT_CAT10` | A2 | 2 | Marketing Category 10 |
| `MKT_CAT` | [10]A2 | 20 | Marketing Category Array |
| `SALMTD` | D10 | 10 | Sales Month-To-Date |
| `SALYTD` | D10 | 10 | Sales Year-To-Date |
| `COSMTD` | D10 | 10 | Cost Month-To-Date |
| `COSYTD` | D10 | 10 | Cost Year-To-Date |
| `OSTDCR` | D10 | 10 | Account Balance |
| `PCONTACT` | A15 | 15 | Personal Contact |
| `LAST_CSH_DTE` | D7 | 7 | Last Cash Receipt Date |
| `LAST_CSH_CHQ` | D6 | 6 | Last Cash Receipt Cheque No |
| `LAST_CSH_AMT` | D8 | 8 | Last Cash Receipt Amount |
| `LAST_INV_DTE` | D7 | 7 | Last Invoice Date |
| `LAST_INV_CHQ` | A6 | 6 | Last Invoice No |
| `LAST_INV_AMT` | D8 | 8 | Last Invoice Amount |
| `INV_ISS_CNT` | D5 | 5 | Total No Of Invoices Issued |
| `INV_CSH_CNT` | D5 | 5 | Total No Of Cash Receipts |
| `INV_AVG_AMT` | D8 | 8 | Average Invoice Amount |
| `INV_AVG_AGE` | D5 | 5 | Average Invoice Age |
| `TRDDTE` | D7 | 7 | Date Trading Started |
| `PARENT_BAL` | D10 | 10 | Parent Balance |
| `DELRUN` | D4 | 4 | Delivery Run Number |
| `CUSMSG` | A30 | 30 | Customer Warning Message |
| `INV_PARENT` | A1 | 1 | Invoice To Parent Company Flag |
| `CM_PRCCD` | A2 | 2 | Price List Code - O/E Default |
| `CM_DSCCAT` | A2 | 2 | Discount Cat For O/E Default |
| `CHARGEFLAG` | A1 | 1 | Def Admin Charge To Docket Flag |
| `SORTCODE` | A15 | 15 | Sort Code By C&L System |
| `FUTURE_BAL` | D10 | 10 | Future Transactions Total |
| `FUT_BAL` | D10 | 10 | Future Transactions 2 Dec |
| `CM_ABN` | D11 | 11 | Customer ABN |
| `CM_PAYMTH` | A2 | 2 | Default Payment Method |
| `CM_BANK` | A10 | 10 | Default Bank |
| `CM_BRANCH` | A20 | 20 | Default Branch |
| `CM_ACCOUNT` | A15 | 15 | Account Number |
| `CM_ISPARENT` | A1 | 1 | Parent Company Flag |
| `CM_DISPUTED_INV` | D11 | 11 | Value of Disputed Invoices |
| `CM_EOM_JNL` | D3 | 3 | Journal Number of Last EOM |
| `CM_OPCENTRE` | A3 | 3 | Default OpCentre for Jobs/Contracts |
| `CM_DISTRICT` | A3 | 3 | Default District for Jobs/Contracts |
| `CM_PRGBILLCD` | A3 | 3 | Default Progress Billings Code |
| `CM_SALECENT` | A6 | 6 | Default Sales Centre for Contracts |
| `CM_SALETYPE` | A3 | 3 | Default Sales Type for Contracts |
| `CM_SALEGROUP` | A3 | 3 | Default Sales Group for Contracts |
| `CM_SLSDSCCD` | A2 | 2 | Sales Discount Code |
| `CM_STAT_TMPL` | A1 | 1 | Statement Template Code |
| `CM_INVC_TMPL` | A1 | 1 | Invoice Template Code |
| `CM_GST_CODE` | A1 | 1 | Alternate GST Code for Invoicing |
| `CM_COUNTRY` | A2 | 2 | Country Code |
| `CM_ACTIVE` | A1 | 1 | Active Flag |
| `PHONE` | A20 | 20 | Phone Number |
| `FAXNUM` | A20 | 20 | Fax Number |
| `WKPHONE` | A20 | 20 | Work Phone Number |
| `MOBILE` | A20 | 20 | Mobile Number |
| `CM_SALEPROM` | A6 | 6 | Sales Promotion Code |
| `CM_CARCDE` | A2 | 2 | Default Carrier Code |
| `CM_VIP_FLAG` | A1 | 1 | Customer VIP Flag |
| `CM_SUP_AR_INC` | A1 | 1 | Exclude Customer from A/R Transactions Export |
| `CM_RATING` | A1 | 1 | Customer Rating |
| `CM_RCPT_TMPL` | A1 | 1 | Cash Receipt Batch Template Code |
| `CM_EINVOICING` | A1 | 1 | Send Invoices via eInvoicing |
| `CM_SYNCSTATUS` | A1 | 1 | Sync Status |
| `CM_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `CM_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `CM_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `CM_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `CM_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `CM_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `CM_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `CM_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |

## Contacts Multi Addresses (IVCTBLU)

This table stores multiple addresses for customer contacts, allowing customers to have different addresses for billing, shipping, and other purposes.

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `IVTU_TYPE` | A1 | 1 | Table Type |
| `IVTU_CUSTNO` | A6 | 6 | Customer Number |
| `IVTU_SEQNUM` | D3 | 3 | Sequence Number |
| `IVTU_KEY` | A10 | 10 | Primary Key |
| `IVTU_SURNAME` | A20 | 20 | Contact Surname |
| `IVTU_FIRSTNAME` | A15 | 15 | Contact First Name |
| `IVTU_TITLE` | A10 | 10 | Contact Title |
| `IVTU_COMPANY` | A30 | 30 | Company Name |
| `IVTU_ADD1` | A30 | 30 | Address Line 1 |
| `IVTU_ADD2` | A30 | 30 | Address Line 2 |
| `IVTU_ADD3` | A30 | 30 | Address Line 3 |
| `IVTU_CITY` | A25 | 25 | City |
| `IVTU_STATE` | A15 | 15 | State |
| `IVTU_ZIP` | A8 | 8 | Post Code |
| `IVTU_PHONE` | A20 | 20 | Phone Number |
| `IVTU_FAX` | A20 | 20 | Fax Number |
| `IVTU_MOBILE` | A20 | 20 | Mobile Number |
| `IVTU_EMAIL` | A50 | 50 | Email Address |
| `IVTU_ACTIVE` | A1 | 1 | Active Flag |
| `IVTU_MOD_USER` | A12 | 12 | Modified Audit User |
| `IVTU_MOD_DATE` | D7 | 7 | Modified Audit Date (Julian) |
| `IVTU_MOD_TIME` | D9 | 9 | Modified Audit Time |
| `IVTU_MOD_STAMP` | A28 | 28 | Modified Audit Stamp |
| `IVTU_CRE_USER` | A12 | 12 | Creation Audit User |
| `IVTU_CRE_DATE` | D7 | 7 | Creation Audit Date (Julian) |
| `IVTU_CRE_TIME` | D9 | 9 | Creation Audit Time |
| `IVTU_CRE_STAMP` | A28 | 28 | Creation Audit Stamp |

## Customer Titles (COTABLC)

This table defines customer titles for proper addressing and contact management.

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