# Inventory Management Tables

## Inventory Master (ITMMASA)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `ITEMNO` | A15 | 15 | Item Number |
| `PRDCAT` | A2 | 2 | Product Category |
| `PRCODE` | A8 | 8 | Print Code/Sort Code |
| `SUPLCD` | A30 | 30 | Supplier's Code |
| `DESCR` | A30 | 30 | Description |
| `USRDEF` | A2 | 2 | User-Defined Field |
| `LSTCST` | D10 | 10 | Last Cost |
| `AVGCST` | D10 | 10 | Average Cost |
| `PRICCD1` | A2 | 2 | Price Code 1 |
| `PRICCD2` | A2 | 2 | Price Code 2 |
| `PRICCD3` | A2 | 2 | Price Code 3 |
| `PRICCD4` | A2 | 2 | Price Code 4 |
| `PRICCD5` | A2 | 2 | Price Code 5 |
| `PRICCD6` | A2 | 2 | Price Code 6 |
| `PRICCD7` | A2 | 2 | Price Code 7 |
| `PRICCD8` | A2 | 2 | Price Code 8 |
| `QTYBRK1` | D4 | 4 | Quantity Break Point 1 |
| `QTYBRK2` | D4 | 4 | Quantity Break Point 2 |
| `QTYBRK3` | D4 | 4 | Quantity Break Point 3 |
| `PRICE11` | D8 | 8 | Price 1 of Price Code 1 |
| `PRICE21` | D8 | 8 | Price 2 of Price Code 1 |
| `PRICE31` | D8 | 8 | Price 3 of Price Code 1 |
| `PRICE12` | D8 | 8 | Price 1 of Price Code 2 |
| `PRICE22` | D8 | 8 | Price 2 of Price Code 2 |
| `PRICE32` | D8 | 8 | Price 3 of Price Code 2 |
| `PRICE13` | D8 | 8 | Price 1 of Price Code 3 |
| `PRICE23` | D8 | 8 | Price 2 of Price Code 3 |
| `PRICE33` | D8 | 8 | Price 3 of Price Code 3 |
| `PRICE14` | D8 | 8 | Price 1 of Price Code 4 |
| `PRICE24` | D8 | 8 | Price 2 of Price Code 4 |
| `PRICE34` | D8 | 8 | Price 3 of Price Code 4 |
| `PRICE15` | D8 | 8 | Price 1 of Price Code 5 |
| `PRICE25` | D8 | 8 | Price 2 of Price Code 5 |
| `PRICE35` | D8 | 8 | Price 3 of Price Code 5 |
| `PRICE16` | D8 | 8 | Price 1 of Price Code 6 |
| `PRICE26` | D8 | 8 | Price 2 of Price Code 6 |
| `PRICE36` | D8 | 8 | Price 3 of Price Code 6 |
| `PRICE17` | D8 | 8 | Price 1 of Price Code 7 |
| `PRICE27` | D8 | 8 | Price 2 of Price Code 7 |
| `PRICE37` | D8 | 8 | Price 3 of Price Code 7 |
| `PRICE18` | D8 | 8 | Price 1 of Price Code 8 |
| `PRICE28` | D8 | 8 | Price 2 of Price Code 8 |
| `PRICE38` | D8 | 8 | Price 3 of Price Code 8 |
| `LOC_1` | A2 | 2 | Location 1 |
| `LOC_2` | A2 | 2 | Location 2 |
| `LOC_3` | A2 | 2 | Location 3 |
| `LOC_4` | A2 | 2 | Location 4 |
| `QTYONH_1` | D9 | 9 | Quantity On Hand 1 |
| `QTYONH_2` | D9 | 9 | Quantity On Hand 2 |
| `QTYONH_3` | D9 | 9 | Quantity On Hand 3 |
| `QTYONH_4` | D9 | 9 | Quantity On Hand 4 |
| `QTYCOM_1` | D9 | 9 | Quantity Committed 1 |
| `QTYCOM_2` | D9 | 9 | Quantity Committed 2 |
| `QTYCOM_3` | D9 | 9 | Quantity Committed 3 |
| `QTYCOM_4` | D9 | 9 | Quantity Committed 4 |
| `QTYONO_1` | D9 | 9 | Quantity On Order 1 |
| `QTYONO_2` | D9 | 9 | Quantity On Order 2 |
| `QTYONO_3` | D9 | 9 | Quantity On Order 3 |
| `QTYONO_4` | D9 | 9 | Quantity On Order 4 |
| `REOLVL_1` | D5 | 5 | Reorder Level 1 |
| `REOLVL_2` | D5 | 5 | Reorder Level 2 |
| `REOLVL_3` | D5 | 5 | Reorder Level 3 |
| `REOLVL_4` | D5 | 5 | Reorder Level 4 |
| `ORDUPT_1` | D6 | 6 | Order Up-To Quantity 1 |
| `ORDUPT_2` | D6 | 6 | Order Up-To Quantity 2 |
| `ORDUPT_3` | D6 | 6 | Order Up-To Quantity 3 |
| `ORDUPT_4` | D6 | 6 | Order Up-To Quantity 4 |
| `PIKSEQ_1` | A10 | 10 | Bin Location 1 |
| `PIKSEQ_2` | A10 | 10 | Bin Location 2 |
| `PIKSEQ_3` | A10 | 10 | Bin Location 3 |
| `PIKSEQ_4` | A10 | 10 | Bin Location 4 |
| `RECMIN` | D5 | 5 | Recommended Minimum Order Quantity |
| `EOQ` | D6 | 6 | Economic Order Quantity |
| `AVGUSE` | D6 | 6 | Average Usage |
| `USEWGT` | D2 | 2 | Usage Weighting Factor |
| `SAFSTK` | D5 | 5 | Safety Stock Amount |
| `SAFFCT` | D2 | 2 | Safety Factor |
| `AVGERR` | D5 | 5 | Average Forecast Error |
| `SUMERR` | D5 | 5 | Sum Of Forecast Errors |
| `USEFLT` | D2 | 2 | Usage Filter |
| `LEADTM` | D3 | 3 | Vendor Lead Time In Months |
| `WEIGHT` | D6 | 6 | Item Weight |
| `SUOFM` | A2 | 2 | Selling Unit Of Measure |
| `PUOFM` | A2 | 2 | Purchase Unit Of Measure |
| `PSRAT` | D8 | 8 | Purchase-To-Selling UOM Ratio |
| `USEMTD` | D9 | 9 | Usage Month-To-Date |
| `USEYTD` | D9 | 9 | Usage Year-To-Date |
| `RECMTD` | D9 | 9 | Quantity Received Month-To-Date |
| `RECYTD` | D9 | 9 | Quantity Received Year-To-Date |
| `QTYMTD` | D9 | 9 | Quantity Sold Month-To-Date |
| `QTYYTD` | D9 | 9 | Quantity Sold Year-To-Date |
| `SLSMTD` | D8 | 8 | Sales Month-To-Date |
| `SLSYTD` | D9 | 9 | Sales Year-To-Date |
| `CSTMTD` | D8 | 8 | Cost Month-To-Date |
| `CSTYTD` | D9 | 9 | Cost Year-To-Date |
| `BOCODE` | D1 | 1 | Back Order Code |
| `TAXCD` | A1 | 1 | Tax Code |
| `SSFLAG` | D1 | 1 | Stock Status Flag |
| `EXFLAG` | A1 | 1 | Changed Record Flag |
| `COSTCT` | A3 | 3 | Default Cost Centre |
| `USRNUM` | A1 | 1 | Number Of User Defined Fields For Item |
| `ISRAT` | D8 | 8 | Inventory-To-Selling UOM Ratio |
| `MINORD` | D5 | 5 | Minimum Order Quantity From Vendor |
| `EDGCDE` | A4 | 4 | Edging Code |
| `ONHSEQ` | D6 | 6 | On Hand History Sequence Number |
| `ALTDESC` | A1 | 1 | Alternate State Description Exists |
| `EDESC` | A30 | 30 | Extra Description |
| `DEDISC` | D4 | 4 | Dealer Discount |
| `TXCSEL` | A1 | 1 | Tax on Cost or Sell Price |
| `USRTBL` | A1 | 1 | User Table Not Displayed During Order Entry |
| `ORDMLT` | D3 | 3 | Order Multiple |
| `OBSFLG` | A1 | 1 | Obsolete Flag |
| `STOKED` | A1 | 1 | Stocked Flag |
| `CNTRLD` | A1 | 1 | Controlled Flag |
| `PRCHCD` | A1 | 1 | Purchased/Manufactured Flag |
| `INVCLS` | A1 | 1 | Inventory Class |
| `CYCTCD` | D1 | 1 | Cycle Count Code |
| `LSTCNT` | D6 | 6 | Date Of Last Stocktake |
| `COMCOD` | A4 | 4 | Commodity Code |
| `LLCODE` | D2 | 2 | Lower Level Code |
| `BUYER` | A2 | 2 | Buyer ID |
| `DRWNUM` | A8 | 8 | Drawing Number |
| `DRWREV` | A2 | 2 | Drawing Revision |
| `RTEREL` | A4 | 4 | Routing Release Number |
| `RTEREV` | A2 | 2 | Routing Revision Number |
| `RTENUM` | A5 | 5 | Routing Number |
| `MFGLOC` | A2 | 2 | Manufacturing Location |
| `ORDPOL` | A1 | 1 | Order Policy Code |
| `TGTMGN` | D3 | 3 | Target Margin |
| `PRCMTH` | A1 | 1 | Pricing Method |
| `PLNLT` | D3 | 3 | Planning Lead Time In Days |
| `PLNMLT` | D4 | 4 | Planning Order Multiplier |
| `DIMLEN` | D7 | 7 | Length Dimension |
| `DIMWID` | D7 | 7 | Width Dimension |
| `DIMTHK` | D7 | 7 | Thickness Dimension |
| `PRDDPT` | A2 | 2 | Product Department Code |
| `VENDOR` | A8 | 8 | Vendor Code |
| `GLACCT` | A15 | 15 | G/L Account Number For Item |
| `IM_BINCTYPE` | A1 | 1 | Bin Control Type |
| `IM_PRDISOPT` | A2 | 2 | Price Display Option |
| `IM_LC_CURNCY` | A6 | 6 | Last Cost Currency Code |
| `IM_CURRENCY` | A6 | 6 | Buy Price Currency Code |
| `IM_EOMAVG` | D10 | 10 | Average Cost At Last EOM |
| `IM_EOMQTY` | D9 | 9 | Quantity On Hand At EOM |
| `IM_EXT` | A10 | 10 | Default Extension Code |
| `IM_BUYPRC` | D10 | 10 | Buy Price For Purchasing |
| `IM_RRP` | D10 | 10 | Recommended Retail Price |
| `IM_SELL_CURR` | A6 | 6 | Selling Price Currency |
| `IM_IMP_USERID` | A12 | 12 | Import User ID |
| `IM_IMP_ETSDATE` | D7 | 7 | Import Datestamp |
| `IM_IMP_ETSTIME` | D6 | 6 | Import Timestamp |
| `IM_MODIFY_DATE` | D7 | 7 | Last Date Modified |
| `IM_DRWNUM` | A20 | 20 | Drawing Number |
| `IM_PIECES_PER_UNIT` | D9 | 9 | Pieces For Each Unit |
| `IM_UNITS_PER_BOX` | D9 | 9 | Units Per Box |
| `IM_WARPERM` | D3 | 3 | Warranty Period In Months |
| `IM_UPDPRC` | A1 | 1 | Auto Update Sell Price |
| `IM_PRIM_LOC` | A2 | 2 | Primary Location Used By Requisitions |
| `IM_CRITICAL_ITEM` | A1 | 1 | Critical Item Flag |
| `IM_SYNCSTATUS` | A1 | 1 | Sync Status |
| `IM_MOD_USER` | A12 | 12 | Transaction Audit Initials |
| `IM_MOD_DATE` | D7 | 7 | Transaction Audit Date |
| `IM_MOD_TIME` | D9 | 9 | Transaction Audit Time |
| `IM_MOD_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `IM_CRE_USER` | A12 | 12 | Transaction Audit Initials |
| `IM_CRE_DATE` | D7 | 7 | Transaction Audit Date |
| `IM_CRE_TIME` | D9 | 9 | Transaction Audit Time |
| `IM_CRE_STAMP` | A28 | 28 | Audit Initials/Date/Time |
| `IM_SAFETY_STOCK` | D5 | 5 | Safety Stock Percentage |
| `IM_ORDER_FACTOR` | D4 | 4 | Order Up To Factor |
| `IM_EXT_ID` | A10 | 10 | ID From External System |
| `IM_OVR_PRCMTH` | A1 | 1 | Override Pricing Method |

## Inventory Instructions (ITMLINI)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `ITI_ITEMNO` | A15 | 15 | Item Number |
| `ITI_SEQ` | D3 | 3 | Sequence Number |
| `ITI_INSTR` | A50 | 50 | Instruction Text |
| `ITI_TYPE` | A1 | 1 | Instruction Type |
| `ITI_ORDER` | D3 | 3 | Display Order |

## Inventory Alt State Codes (ITMLINK)

| Field | Type | Size | Description |
|-------|------|------|-------------|
| `ITK_ITEMNO` | A15 | 15 | Item Number |
| `ITK_STATE` | A2 | 2 | State Code |
| `ITK_DESC` | A30 | 30 | State Description |
| `ITK_ACTIVE` | A1 | 1 | Active Flag |