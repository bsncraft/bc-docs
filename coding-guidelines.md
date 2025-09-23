# Coding Guidelines

## Table Naming Conventions

This document outlines the conventions used in BusinessCraft for mapping DEF files to database tables and understanding the relationship between file numbers and table structures.

## BuiltGrid Integration Requirements

### DEF Files with BuiltGrid Tag

DEF files in the `dbl-common/Defines` folder that contain the `;#BuiltGrid` comment at the top of the file are required to be documented in this Docusaurus project. This tag indicates that the table is relevant for BuiltGrid integration and should be included in the database schema documentation.

### Identifying BuiltGrid Tables

Look for this comment at the top of DEF files:
```dbl
;#BuiltGrid
```

**Examples of BuiltGrid-tagged files:**
- `RD206A.DEF` - Job Costing Header (JCHEADA)
- `RD222A.DEF` - Contract Header (CONHDRA)
- `RD223*.DEF` - Contract Line tables (CONLIN*)
- `RD241*.DEF` - Job Costing Spec tables (JCSPEC*)
- `RD148*.DEF` - Invoice Table files (IVCTBL*)
- `RD247A.DEF` - Cost Centre Table (JOBTBLA)

### Documentation Maintenance Process

When new DEF files are added to the `dbl-common/Defines` folder:

1. **Check for BuiltGrid Tag**: Look for `;#BuiltGrid` comment at the top
2. **Apply Naming Rules**: Use the table naming conventions below
3. **Add to Documentation**: Include the table in appropriate schema pages
4. **Update Overview**: Add to the main overview table list
5. **Update Navigation**: Add to sidebar if needed

### Automated Discovery

To find all BuiltGrid-tagged files:
```bash
# Search for BuiltGrid tag in DEF files
grep -l ";#BuiltGrid" dbl-common/Defines/*.DEF
```

This will return a list of all DEF files that need to be documented.

### DEF File to Table Mapping Rules

#### Basic Naming Convention
DEF files follow the pattern: `RD{FileNumber}{TableTag}.DEF`

Where:
- `RD` = Record Definition prefix
- `FileNumber` = ISAM file number (3 digits)
- `TableTag` = Single character identifying the table type

#### Table Name Construction

**Standard Format (No Underscore):**
- DEF File: `RD223E.DEF`
- Table Name: `CONLINEE` (base name + table tag)
- Table Tag: `E` (uppercase)

**Underscore Format:**
- DEF File: `RD223_W.DEF`
- Table Name: `CONLIN_W` (contains underscore)
- Table Tag: `w` (lowercase)

**Important**: Table names should include the table tag from the DEF filename. For example:
- `RD151A.DEF` → Table name should be `POHEADA` (not just `POHEAD`)
- `RD152A.DEF` → Table name should be `POLINEA` (not just `POLINE`)
- `RD011A.DEF` → Table name should be `VENMASA` (not just `VENMAS`)

### Key Rules

1. **File Number Mapping**: The 3-digit file number corresponds to an ISAM file
2. **Table Tag Position**: The last character before `.DEF` is the table tag
3. **Underscore Rule**: If underscore exists in filename, table name contains underscore and tag is lowercase
4. **No Underscore Rule**: If no underscore, table name has no underscore and tag is uppercase

### Examples

| DEF File | File Number | Table Tag | Table Name | Notes |
|----------|-------------|-----------|------------|-------|
| `RD206A.DEF` | 206 | A | `JCHEADA` | Job Costing Header |
| `RD222A.DEF` | 222 | A | `CONHDRA` | Contract Header |
| `RD223A.DEF` | 223 | A | `CONLINVA` | Contract Line Variation |
| `RD223E.DEF` | 223 | E | `CONLINEE` | Contract Line Event |
| `RD223_W.DEF` | 223 | w | `CONLIN_W` | Contract Line WP Doc Register |
| `RD241_A.DEF` | 241 | a | `JCSPEC_A` | Job Costing Spec A |
| `RD241_B.DEF` | 241 | B | `JCSPECB` | Job Costing Spec B |
| `RD151A.DEF` | 151 | A | `POHEADA` | Purchase Order Header |
| `RD152A.DEF` | 152 | A | `POLINEA` | Purchase Order Lines |
| `RD011A.DEF` | 011 | A | `VENMASA` | Vendor Master |

### Determining Table Names from DEF Files

#### Method 1: Comments in DEF Files
Look for comments at the top of DEF files:
```dbl
;#DESC=Contract Line Event
;#TAG=E
;#MOD=CO
```

#### Method 2: Source Code References
Search source code for table references:
```dbl
; Table: CONLINE
; File: 223
; Tag: E
```

#### Method 3: Field Prefixes
Table names often match field prefixes:
- Fields starting with `CON_` → Table `CONHDRA`
- Fields starting with `CONL_` → Table `CONLINE`
- Fields starting with `JC_` → Table `JCHEADA`

### File Number to Module Mapping

Common file number patterns:
- **200-299**: Job Costing (JC)
- **220-229**: Contracts (CO)
- **240-249**: Inventory (IM)
- **140-149**: Invoicing (IV)
- **100-199**: General Business

### Best Practices

1. **Always Check Comments**: DEF files contain `;#DESC=` and `;#TAG=` comments
2. **Verify with Source**: Cross-reference with actual table usage in source code
3. **Follow Naming Rules**: Apply underscore and case rules consistently
4. **Document Relationships**: Note file numbers and their corresponding modules
5. **Validate Mappings**: Ensure table names match actual database structure

### Common Patterns

#### Contract Management (CO Module)
- File 222: Contract Headers (`CONHDRA`)
- File 223: Contract Lines (`CONLIN*` with various tags)
- File 198: Contract Lookup Tables (`COTABL*`)

#### Job Costing (JC Module)
- File 206: Job Headers (`JCHEADA`)
- File 241: Job Specifications (`JCSPEC*` with various tags)
- File 247: Job Tables (`JOBTBL*`)

#### Inventory (IM Module)
- File 240: Inventory Items (`ITMMAS*`)
- File 241: Item Specifications (`ITMSPEC*`)

### Documentation Workflow for New Tables

When a new DEF file with `;#BuiltGrid` tag is added:

1. **Identify the Table**:
   - [ ] Check DEF file for `;#BuiltGrid` comment
   - [ ] Extract table name using naming conventions
   - [ ] Determine appropriate documentation section

2. **Document the Table**:
   - [ ] Add complete field definitions to appropriate schema page
   - [ ] Include all fields with types, sizes, and descriptions
   - [ ] Add business logic notes if relevant

3. **Update Navigation**:
   - [ ] Add to overview page table list
   - [ ] Update table count in overview
   - [ ] Add to sidebar if new section needed

4. **Verify Integration**:
   - [ ] Test Docusaurus build
   - [ ] Check all links work correctly
   - [ ] Validate table relationships

### Validation Checklist

When mapping DEF files to tables:

- [ ] Check DEF file comments for table description
- [ ] Verify table tag matches last character of filename
- [ ] Apply underscore rule if underscore present in filename
- [ ] Confirm table name with source code references
- [ ] Validate file number corresponds to correct module
- [ ] Cross-reference with existing table documentation
- [ ] **NEW**: Verify `;#BuiltGrid` tag is present
- [ ] **NEW**: Add to appropriate documentation section
- [ ] **NEW**: Update overview and navigation

### Troubleshooting

**Issue**: Table name doesn't match expected pattern
**Solution**: Check for special cases or legacy naming conventions

**Issue**: Multiple tables with same file number
**Solution**: Use table tag to distinguish between different table types

**Issue**: Underscore rule confusion
**Solution**: Remember - underscore in filename = underscore in table name + lowercase tag

This naming convention ensures consistent mapping between DEF files and their corresponding database tables, making it easier to understand the BusinessCraft database structure for BuiltGrid integration.

## Maintaining Documentation

### Regular Updates Required

As new DEF files are added to the `dbl-common/Defines` folder, the documentation must be updated to maintain accuracy and completeness.

### Update Frequency

- **Immediate**: When new DEF files with `;#BuiltGrid` tag are added
- **Regular**: Monthly review of all DEF files for new BuiltGrid tags
- **Before Releases**: Comprehensive review before major updates

### Monitoring for Changes

Use these commands to monitor for new BuiltGrid-tagged files:

```bash
# Find all current BuiltGrid files
find dbl-common/Defines -name "*.DEF" -exec grep -l ";#BuiltGrid" {} \;

# Check for new files since last update
find dbl-common/Defines -name "*.DEF" -newer last_update.txt -exec grep -l ";#BuiltGrid" {} \;
```

### Documentation Standards

All BuiltGrid-tagged tables must include:
- Complete field definitions with types and sizes
- Business logic descriptions
- Relationship information
- Integration notes for BuiltGrid

### Quality Assurance

Before publishing updates:
- [ ] All new tables documented
- [ ] Field definitions complete and accurate
- [ ] Navigation updated
- [ ] Docusaurus build successful
- [ ] All links functional
- [ ] Table relationships validated

This ensures the documentation remains current and useful for BuiltGrid integration development.
