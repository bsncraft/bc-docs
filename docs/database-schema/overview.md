# Database Schema Overview

This section provides a comprehensive overview of all BusinessCraft database tables, their purposes, and key relationships.

## Table Categories

### Contract Management (8 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| CONHDR | 222 | A | Contract Header | CO_CONTRACT, CO_JOBNUM, CO_CUSNUM |
| CONLINV | 223 | V | Contract Variations | CLV_CONTRACT, CLV_SEQNUM, CLV_AMOUNT |
| CONLINE | 223 | E | Contract Events | CLE_CONTRACT, CLE_EVENT, CLE_AMOUNT |
| CONLINF | 223 | F | Progress Billing | CLF_CONTRACT, CLF_CODE, CLF_AMOUNT |
| CONLING | 223 | G | Variation Events | CLG_CONTRACT, CLG_VARIATION |
| CONLINH | 223 | H | Variation Notes | CLH_CONTRACT, CLH_VARIATION |
| CONLIND | 223 | D | Released Jobs | CLD_CONTRACT, CLD_JOBNUM |
| CONLINQ | 223 | Q | Status History | CLQ_CONTRACT, CLQ_STATUS |

### Job Costing (6 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| JCHEADA | 206 | A | Job Costing Header | JC_JOBNUM, JC_CUST, JC_CONTRACT |
| JCSECTA | 252 | A | Job Sections | JS_JOBNUM, JS_SECT, JS_DESC |
| JCSPECA | 241 | A | Sales Estimate Headings | JSEA_JOBNUM, JSEA_SECT, JSEA_HEADING |
| JCSPECB | 241 | B | Sales Estimate Paragraphs | JSEB_JOBNUM, JSEB_SECT, JSEB_HEADING |
| JCSPECH | 241 | H | Production Estimate Cost Centres | JSH_JOBNUM, JSH_SECT, JSH_DEPT |
| JCSPECI | 241 | I | Production Estimate Details | JSE_JOBNUM, JSE_SECT, JSE_ITMNUM |

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

### Lookup Tables (4 tables)
| Table | File | Tag | Purpose | Key Fields |
|-------|------|-----|---------|------------|
| COTABC | 198 | C | Customer Titles | COTC_CODE, COTC_DESC |
| COTABD | 198 | D | User Categories | COTD_CODE, COTD_TITLE |
| COTABG | 198 | G | User Table | COTG_CODE, COTG_NAME, COTG_CATCODE |
| COTABP | 198 | P | Projects | COTP_CODE, COTP_DESC, COTP_OPCENTRE |

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
| 1 | CONHDR | 222 | A | Contract Header | CO_CONTRACT, CO_JOBNUM |
| 2 | CONLINV | 223 | V | Contract Variations | CLV_CONTRACT, CLV_SEQNUM |
| 3 | CONLINE | 223 | E | Contract Events | CLE_CONTRACT, CLE_EVENT |
| 4 | CONLINF | 223 | F | Progress Billing | CLF_CONTRACT, CLF_CODE |
| 5 | CONLING | 223 | G | Variation Events | CLG_CONTRACT, CLG_VARIATION |
| 6 | CONLINH | 223 | H | Variation Notes | CLH_CONTRACT, CLH_VARIATION |
| 7 | CONLIND | 223 | D | Released Jobs | CLD_CONTRACT, CLD_JOBNUM |
| 8 | CONLINQ | 223 | Q | Status History | CLQ_CONTRACT, CLQ_STATUS |
| 9 | JCHEADA | 206 | A | Job Costing Header | JC_JOBNUM, JC_CUST |
| 10 | JCSECTA | 252 | A | Job Sections | JS_JOBNUM, JS_SECT |
| 11 | JCSPECA | 241 | A | Sales Estimate Headings | JSEA_JOBNUM, JSEA_SECT |
| 12 | JCSPECB | 241 | B | Sales Estimate Paragraphs | JSEB_JOBNUM, JSEB_SECT |
| 13 | JCSPECH | 241 | H | Production Estimate Cost Centres | JSH_JOBNUM, JSH_SECT |
| 14 | JCSPECI | 241 | I | Production Estimate Details | JSE_JOBNUM, JSE_SECT |
| 15 | ITMMASA | 041 | A | Inventory Master | ITEMNO, DESCR, VENDOR |
| 16 | ITMLINI | 240 | I | Inventory Instructions | ILI_ITEM, ILI_SEQ |
| 17 | ITMLINK | 240 | K | Alt State Codes | ILK_ITEM, ILK_CODE |
| 18 | POHEAD | 151 | A | Purchase Order Header | PO_PONUM, PO_VENNO |
| 19 | POLINE | 152 | A | Purchase Order Lines | POL_PONUM, POL_LINE |
| 20 | VENMAS | 011 | A | Vendor Master | VM_VENNO, VM_NAME |
| 21 | VENLINA | 012 | A | Vendor Notes | VLA_VENNO, VLA_SEQ |
| 22 | VENLINB | 012 | B | Vendor Note Specs | VLB_VENNO, VLB_NOTESEQ |
| 23 | VENLINC | 012 | C | Vendor Rebates | VLC_VENNO, VLC_SEQ |
| 24 | VENLIND | 012 | D | Vendor Standard Items | VLD_VENNO, VLD_SEQ |
| 25 | COTABC | 198 | C | Customer Titles | COTC_CODE, COTC_DESC |
| 26 | COTABD | 198 | D | User Categories | COTD_CODE, COTD_TITLE |
| 27 | COTABG | 198 | G | User Table | COTG_CODE, COTG_NAME |
| 28 | COTABP | 198 | P | Projects | COTP_CODE, COTP_DESC |
| 29 | EMLADDA | 294 | A | Email Addresses | EMLA_REFCODE, EMLA_SEQ |
| 30 | CNTXRFA | 096 | A | Contact Cross Reference | CXRF_SRC_CODE, CXRF_SEQ |

## Next Steps

1. **[Contract Management](/database-schema/contracts)** - Contract tables and relationships
2. **[Job Costing](/database-schema/job-costing)** - Job and estimating tables
3. **[Inventory](/database-schema/inventory)** - Inventory management tables
4. **[Purchase Orders](/database-schema/purchase-orders)** - Procurement tables
5. **[Vendors](/database-schema/vendors)** - Vendor management tables
6. **[Lookup Tables](/database-schema/lookup-tables)** - Reference data tables