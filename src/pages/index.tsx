import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">BusinessCraft Database Schema</h1>
        <p className="hero__subtitle">
          Database structure documentation for BuiltGrid integration project
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/database-schema/overview">
            View Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - BusinessCraft ERP Database Documentation`}
      description="Comprehensive database schema documentation for BusinessCraft ERP integration with BuiltGrid">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h2>Business Process Flow</h2>
              <p>This diagram shows the typical business process flow in BusinessCraft:</p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                backgroundColor: 'var(--ifm-background-color)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '8px',
                margin: '2rem 0'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '1000px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-color-emphasis-900)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    minWidth: '400px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>1. Customer Created</div>
                    <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                      <strong>Core Tables:</strong> <Link to="/database-schema/customers#customer-master-cusmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CUSMASA</Link><br/>
                      <strong>Lookup Tables:</strong> <Link to="/database-schema/lookup-tables#customer-titles-cotablc" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLC</Link><br/>
                      Customer master data and contact information
                    </div>
                  </div>
                  <div style={{fontSize: '2rem', color: 'var(--ifm-color-emphasis-700)'}}>→</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '1000px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-color-emphasis-900)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    minWidth: '400px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>2. Contract Created</div>
                    <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                      <strong>Core Tables:</strong> <Link to="/database-schema/contracts#contract-header-conhdra" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONHDRA</Link><br/>
                      <strong>Contract Lines:</strong> <Link to="/database-schema/contracts#contract-lines---variations-conlinv" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINV</Link>, <Link to="/database-schema/contracts#contract-lines---events-conline" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINE</Link>, <Link to="/database-schema/contracts#contract-lines---progress-billing-conlinf" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINF</Link>, <Link to="/database-schema/contracts#contract-lines---variation-events-conling" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLING</Link>, <Link to="/database-schema/contracts#contract-lines---variation-notes-conlinh" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINH</Link>, <Link to="/database-schema/contracts#contract-lines---status-history-conlinq" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINQ</Link>, <Link to="/database-schema/contracts#contract-lines---document-register-conlinw" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINW</Link>, <Link to="/database-schema/contracts#contract-lines---document-notes-conlinx" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINX</Link>, <Link to="/database-schema/contracts#contract-lines---specificationscomments-conlinz" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINZ</Link><br/>
                      <strong>Lookup Tables:</strong> <Link to="/database-schema/lookup-tables#contract-status-cotabl_m" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABL_M</Link>, <Link to="/database-schema/lookup-tables#events-cotablw" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLW</Link>, <Link to="/database-schema/lookup-tables#operating-centres-cotably" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLY</Link>, <Link to="/database-schema/lookup-tables#districts-cotablz" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLZ</Link><br/>
                      Contract header, variations, events, billing, notes and document management
                    </div>
                  </div>
                  <div style={{fontSize: '2rem', color: 'var(--ifm-color-emphasis-700)'}}>→</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '1000px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-color-emphasis-900)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    minWidth: '400px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>3. Job Auto Created</div>
                    <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                      <strong>Core Tables:</strong> <Link to="/database-schema/job-costing#job-costing-header-jcheada" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCHEADA</Link>, <Link to="/database-schema/job-costing#job-sections-jcsecta" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSECTA</Link><br/>
                      <strong>Lookup Tables:</strong> <Link to="/database-schema/lookup-tables#projects-cotablp" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLP</Link>, <Link to="/database-schema/lookup-tables#operating-centres-cotably" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLY</Link><br/>
                      Job costing header and project details
                    </div>
                  </div>
                  <div style={{fontSize: '2rem', color: 'var(--ifm-color-emphasis-700)'}}>→</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '1000px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-color-emphasis-900)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    minWidth: '400px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>4. Sales Estimates</div>
                    <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                      <strong>Core Tables:</strong> <Link to="/database-schema/job-costing#job-sales-estimate-headings-jcspec_a" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPEC_A</Link>, <Link to="/database-schema/job-costing#job-sales-estimate-paragraphs-jcspec_b" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPEC_B</Link>, <Link to="/database-schema/job-costing#job-sales-estimate-details-jcspec_c" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPEC_C</Link>, <Link to="/database-schema/inventory#inventory-master-itmmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>ITMMASA</Link><br/>
                      <strong>Lookup Tables:</strong> <Link to="/database-schema/lookup-tables#sale-types-cotablu" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLU</Link>, <Link to="/database-schema/lookup-tables#sales-groups-cotablv" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLV</Link><br/>
                      Sales estimate headings, paragraphs and details
                    </div>
                  </div>
                  <div style={{fontSize: '2rem', color: 'var(--ifm-color-emphasis-700)'}}>→</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '1000px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-color-emphasis-900)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    minWidth: '400px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>5. Quotes Sent to Customer</div>
                    <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                      <strong>Core Tables:</strong> <Link to="/database-schema/contracts#contract-lines---document-register-conlinw" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINW</Link>, <Link to="/database-schema/contracts#contract-lines---document-notes-conlinx" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINX</Link><br/>
                      Document register and quote specifications
                    </div>
                  </div>
                  <div style={{fontSize: '2rem', color: 'var(--ifm-color-emphasis-700)'}}>→</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '1000px',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-color-emphasis-900)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    minWidth: '400px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>6. Production Estimate</div>
                    <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                      <strong>Core Tables:</strong> <Link to="/database-schema/job-costing#production-estimate-cost-centres-jcspech" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECH</Link>, <Link to="/database-schema/job-costing#production-estimate-details-jcspeci" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECI</Link>, <Link to="/database-schema/job-costing#production-estimate-detail-specs-jcspecj" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECJ</Link>, <Link to="/database-schema/job-costing#production-estimate-bill-of-materials-jcspeck" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECK</Link>, <Link to="/database-schema/job-costing#job-contract-information-jcspecm" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECM</Link>, <Link to="/database-schema/inventory#inventory-master-itmmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>ITMMASA</Link><br/>
                      <strong>Lookup Tables:</strong> <Link to="/database-schema/lookup-tables#cost-centre-table-jobtbla" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JOBTBLA</Link><br/>
                      Production cost centres, details, specifications, bill of materials and job contract information
                    </div>
                  </div>
                  <div style={{fontSize: '2rem', color: 'var(--ifm-color-emphasis-700)'}}>→</div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '1000px'
                }}>
                  <div style={{
                    backgroundColor: 'var(--ifm-color-emphasis-100)',
                    color: 'var(--ifm-color-emphasis-900)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'left',
                    minWidth: '400px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--ifm-color-primary)'}}>7. Orders sent to Suppliers</div>
                    <div style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                      <strong>Core Tables:</strong> <Link to="/database-schema/purchase-orders#purchase-order-header-poheada" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>POHEADA</Link>, <Link to="/database-schema/purchase-orders#purchase-order-lines-polinea" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>POLINEA</Link>, <Link to="/database-schema/inventory#inventory-master-itmmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>ITMMASA</Link><br/>
                      <strong>Vendor Tables:</strong> <Link to="/database-schema/vendors#vendor-master-venmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>VENMASA</Link>, <Link to="/database-schema/vendors#vendor-notes-venlina" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>VENLINA</Link><br/>
                      <strong>Contact Tables:</strong> <Link to="/database-schema/vendors#contact-addresses-cntfilb" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CNTFILB</Link>, <Link to="/database-schema/vendors#contact-cross-reference-cntxrfa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CNTXRFA</Link><br/>
                      Purchase order headers, lines, vendor master and contact information
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}