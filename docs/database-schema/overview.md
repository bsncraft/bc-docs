# Database Schema Overview

This section provides a comprehensive overview of all BusinessCraft database tables, their purposes, and key relationships.

## Table Categories

### Contract Management (10 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| CONHDRA | 222 | A | Contract Header | CO_CONTRACT, CO_JOBNUM, CO_CUSNUM |
| CONLINV | 223 | V | Contract Variations | CLV_CONTRACT, CLV_SEQNUM, CLV_AMOUNT |
| CONLINE | 223 | E | Contract Events | CLE_CONTRACT, CLE_EVENT, CLE_AMOUNT |
| CONLINP | 223 | F | Progress Billing | CLF_CONTRACT, CLF_CODE, CLF_AMOUNT |
| CONLING | 223 | G | Variation Events | CLG_CONTRACT, CLG_VARIATION |
| CONLINH | 223 | H | Variation Notes | CLH_CONTRACT, CLH_VARIATION |
| CONLINQ | 223 | Q | Status History | CLQ_CONTRACT, CLQ_STATUS |
| CONLINW | 223 | W | Document Register | CLW_CONTRACT, CLW_SEQNUM, CLW_DOCTYP |
| CONLINX | 223 | X | Document Notes | CLX_CONTRACT, CLX_DOCNUM, CLX_SEQNUM |
| CONLINZ | 223 | Z | Specifications/Comments | CLN_CONTRACT, CLN_SEQNUM, CLN_DESC |

### Job Costing (10 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| JCHEADA | 206 | A | Job Costing Header | JC_JOBNUM, JC_CUST, JC_CONTRACT |
| JCSECTA | 252 | A | Job Sections | JS_JOBNUM, JS_SECT, JS_DESC |
| JCSPEC_A | 241 | a | Sales Estimate Headings | JSEA_JOBNUM, JSEA_SECT, JSEA_HEADING |
| JCSPEC_B | 241 | b | Sales Estimate Paragraphs | JSEB_JOBNUM, JSEB_SECT, JSEB_HEADING |
| JCSPECH | 241 | H | Production Estimate Cost Centres | JSH_JOBNUM, JSH_SECT, JSH_DEPT |
| JCSPECI | 241 | I | Production Estimate Details | JSE_JOBNUM, JSE_SECT, JSE_ITMNUM |
| JCSPECJ | 241 | J | Production Estimate Detail Specs | JSJ_JOBNUM, JSJ_SECT, JSJ_SEQ |
| JCSPECK | 241 | K | Production Estimate Bill of Materials | JSK_JOBNUM, JSK_SECT, JSK_SEQ |
| JCSPEC0 | 241 | 0 | Sales Estimate Detail Specs | JS0_JOBNUM, JS0_SECT, JS0_HEADING |
| JCSPECM | 241 | M | Job Contract Information | JSM_JOBNUM |

### Inventory Management (3 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| ITMMASA | 041 | A | Inventory Master | ITEMNO, DESCR, VENDOR, LSTCST |
| ITMLINI | 240 | I | Inventory Instructions | ILI_ITEM, ILI_SEQ, ILI_INSTRUCT |
| ITMLINK | 240 | K | Alt State Codes | ILK_ITEM, ILK_CODE, ILK_DESC |

### Purchase Orders (2 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| POHEAD | 151 | A | Purchase Order Header | PO_PONUM, PO_VENNO, PO_DATE |
| POLINE | 152 | A | Purchase Order Lines | POL_PONUM, POL_LINE, POL_ITEMNO |

### Vendors (5 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| VENMAS | 011 | A | Vendor Master | VM_VENNO, VM_NAME, VM_CONTACT |
| VENLINA | 012 | A | Vendor Notes | VLA_VENNO, VLA_SEQ, VLA_COMMENT |
| VENLINB | 012 | B | Vendor Note Specs | VLB_VENNO, VLB_NOTESEQ, VLB_SPEC |
| VENLINC | 012 | C | Vendor Rebates | VLC_VENNO, VLC_SEQ, VLC_AMOUNT |
| VENLIND | 012 | D | Vendor Standard Items | VLD_VENNO, VLD_SEQ, VLD_ITEMNO |

### Lookup Tables (12 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| COTABLC | 198 | C | Customer Titles | COTC_CODE, COTC_DESC |
| COTABLD | 198 | D | User Categories | COTD_CODE, COTD_TITLE |
| COTABLG | 198 | G | User Table | COTG_CODE, COTG_NAME, COTG_CATCODE |
| COTABLP | 198 | P | Projects | COTP_CODE, COTP_DESC, COTP_OPCENTRE |
| COTABLU | 198 | U | Sale Types | COTU_CODE, COTU_DESC, COTU_GROUP |
| COTABLV | 198 | V | Sales Groups | COTV_CODE, COTV_DESC |
| COTABLW | 198 | W | Events | COTW_CODE, COTW_DESC |
| COTABLY | 198 | Y | Operating Centres | COTY_CODE, COTY_DESC |
| COTABLZ | 198 | Z | Districts | COTZ_CODE, COTZ_DESC |
| COTABL_C | 198 | c | Councils | COT_C_CODE, COT_C_DESC |
| COTABL_D | 198 | d | Estates | COT_D_CODE, COT_D_DESC |
| COTABL_M | 198 | m | Contract Status | COT_M_CODE, COT_M_DESC |

### Communication (2 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| EMLADDA | 294 | A | Email Addresses | EMLA_REFCODE, EMLA_SEQ, EMLA_ADDRESS |
| CNTXRFA | 096 | A | Contact Cross Reference | CXRF_SRC_CODE, CXRF_SEQ, CXRF_CONTACT |

## Key Relationships

### Primary Relationships
- **CONHDR** → **JCHEADA**: `CO_JOBNUM` links to `JC_JOBNUM`
- **JCHEADA** → **JCSECTA**: `JC_JOBNUM` links to `JS_JOBNUM`
- **JCHEADA** → **POHEAD**: `JC_JOBNUM` links to `PO_JOBNUM`
- **POHEAD** → **POLINE**: `PO_PONUM` links to `POL_PONUM`
- **ITMMASA** → **POLINE**: `ITEMNO` links to `POL_ITEMNO`
- **VENMAS** → **POHEAD**: `VM_VENNO` links to `PO_VENNO`

### Foreign Key Patterns
- **Contract Tables**: `CO_CONTRACT` (D6) - Contract Number
- **Job Tables**: `JC_JOBNUM` (A8) - Job Number
- **Purchase Order Tables**: `PO_PONUM` (A15) - PO Number
- **Vendor Tables**: `VM_VENNO` (A8) - Vendor Number
- **Inventory Tables**: `ITEMNO` (A15) - Item Number

## Data Types

| Type | Description | Example |
|------|-------------|---------|
| **A** | Alpha (String) | `A15` = 15 character string |
| **D** | Decimal (Numeric) | `D9` = 9-digit decimal |
| **Size** | Field size in bytes | `A30` = 30 bytes |

## Field Attributes

### Common Field Patterns
- **Primary Keys**: Usually the first field in each table
- **Foreign Keys**: Reference other tables (e.g., `CO_JOBNUM` → `JC_JOBNUM`)
- **Date Fields**: Julian date format (D7)
- **Time Fields**: Time format (D9)
- **Status Fields**: Single character status codes
- **Amount Fields**: Decimal fields for monetary values

### Field Naming Conventions
- **Table Prefix**: Each field starts with table abbreviation (e.g., `CO_`, `JC_`, `VM_`)
- **Field Type**: Descriptive names (e.g., `CONTRACT`, `JOBNUM`, `CUSNUM`)
- **Status Fields**: Often end with `FLG` or `STATUS`
- **Date Fields**: Often end with `DATE` or `DTE`
- **Amount Fields**: Often end with `AMT` or `COST`

## Table Summary

| # | Table | File | Tag | Purpose | Key Fields |
|---|-------|------|-----|---------|------------|
| 1 | CONHDRA | 222 | A | Contract Header | CO_CONTRACT, CO_JOBNUM |
| 2 | CONLINV | 223 | V | Contract Variations | CLV_CONTRACT, CLV_SEQNUM |
| 3 | CONLINE | 223 | E | Contract Events | CLE_CONTRACT, CLE_EVENT |
| 4 | CONLINP | 223 | F | Progress Billing | CLF_CONTRACT, CLF_CODE |
| 5 | CONLING | 223 | G | Variation Events | CLG_CONTRACT, CLG_VARIATION |
| 6 | CONLINH | 223 | H | Variation Notes | CLH_CONTRACT, CLH_VARIATION |
| 7 | CONLINQ | 223 | Q | Status History | CLQ_CONTRACT, CLQ_STATUS |
| 8 | CONLINW | 223 | W | Document Register | CLW_CONTRACT, CLW_SEQNUM |
| 9 | CONLINX | 223 | X | Document Notes | CLX_CONTRACT, CLX_DOCNUM |
| 10 | CONLINZ | 223 | Z | Specifications/Comments | CLN_CONTRACT, CLN_SEQNUM |
| 11 | JCHEADA | 206 | A | Job Costing Header | JC_JOBNUM, JC_CUST |
| 12 | JCSECTA | 252 | A | Job Sections | JS_JOBNUM, JS_SECT |
| 13 | JCSPEC_A | 241 | a | Sales Estimate Headings | JSEA_JOBNUM, JSEA_SECT |
| 14 | JCSPEC_B | 241 | b | Sales Estimate Paragraphs | JSEB_JOBNUM, JSEB_SECT |
| 15 | JCSPECH | 241 | H | Production Estimate Cost Centres | JSH_JOBNUM, JSH_SECT |
| 16 | JCSPECI | 241 | I | Production Estimate Details | JSE_JOBNUM, JSE_SECT |
| 17 | JCSPECJ | 241 | J | Production Estimate Detail Specs | JSJ_JOBNUM, JSJ_SECT |
| 18 | JCSPECK | 241 | K | Production Estimate Bill of Materials | JSK_JOBNUM, JSK_SECT |
| 19 | JCSPEC0 | 241 | 0 | Sales Estimate Detail Specs | JS0_JOBNUM, JS0_SECT |
| 20 | JCSPECM | 241 | M | Job Contract Information | JSM_JOBNUM |
| 21 | ITMMASA | 041 | A | Inventory Master | ITEMNO, DESCR, VENDOR |
| 22 | ITMLINI | 240 | I | Inventory Instructions | ILI_ITEM, ILI_SEQ |
| 23 | ITMLINK | 240 | K | Alt State Codes | ILK_ITEM, ILK_CODE |
| 24 | POHEAD | 151 | A | Purchase Order Header | PO_PONUM, PO_VENNO |
| 25 | POLINE | 152 | A | Purchase Order Lines | POL_PONUM, POL_LINE |
| 26 | VENMAS | 011 | A | Vendor Master | VM_VENNO, VM_NAME |
| 27 | VENLINA | 012 | A | Vendor Notes | VLA_VENNO, VLA_SEQ |
| 28 | VENLINB | 012 | B | Vendor Note Specs | VLB_VENNO, VLB_NOTESEQ |
| 29 | VENLINC | 012 | C | Vendor Rebates | VLC_VENNO, VLC_SEQ |
| 30 | VENLIND | 012 | D | Vendor Standard Items | VLD_VENNO, VLD_SEQ |
| 31 | COTABLC | 198 | C | Customer Titles | COTC_CODE, COTC_DESC |
| 32 | COTABLD | 198 | D | User Categories | COTD_CODE, COTD_TITLE |
| 33 | COTABLG | 198 | G | User Table | COTG_CODE, COTG_NAME |
| 34 | COTABLP | 198 | P | Projects | COTP_CODE, COTP_DESC |
| 35 | COTABLU | 198 | U | Sale Types | COTU_CODE, COTU_DESC |
| 36 | COTABLV | 198 | V | Sales Groups | COTV_CODE, COTV_DESC |
| 37 | COTABLW | 198 | W | Events | COTW_CODE, COTW_DESC |
| 38 | COTABLY | 198 | Y | Operating Centres | COTY_CODE, COTY_DESC |
| 39 | COTABLZ | 198 | Z | Districts | COTZ_CODE, COTZ_DESC |
| 40 | COTABL_C | 198 | c | Councils | COT_C_CODE, COT_C_DESC |
| 41 | COTABL_D | 198 | d | Estates | COT_D_CODE, COT_D_DESC |
| 42 | COTABL_M | 198 | m | Contract Status | COT_M_CODE, COT_M_DESC |
| 43 | EMLADDA | 294 | A | Email Addresses | EMLA_REFCODE, EMLA_SEQ |
| 44 | CNTXRFA | 096 | A | Contact Cross Reference | CXRF_SRC_CODE, CXRF_SEQ |

## Next Steps

1. **[Contract Management](/database-schema/contracts)** - Contract tables and relationships
2. **[Job Costing](/database-schema/job-costing)** - Job and estimating tables
3. **[Inventory](/database-schema/inventory)** - Inventory management tables
4. **[Purchase Orders](/database-schema/purchase-orders)** - Procurement tables
5. **[Vendors](/database-schema/vendors)** - Vendor management tables
6. **[Lookup Tables](/database-schema/lookup-tables)** - Reference data tables