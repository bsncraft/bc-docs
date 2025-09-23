import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useEffect } from 'react';
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

  useEffect(() => {
    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

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
                      <strong>Core Tables:</strong> <a href="/database-schema/customers#cusmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CUSMASA</a><br/>
                      <strong>Lookup Tables:</strong> <a href="/database-schema/lookup-tables#customer-titles-cotablc" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLC</a><br/>
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
                      <strong>Core Tables:</strong> <a href="/database-schema/contracts#contract-header-conhdra" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONHDRA</a><br/>
                      <strong>Contract Lines:</strong> <a href="/database-schema/contracts#contract-lines---variations-conlinv" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINV</a>, <a href="/database-schema/contracts#contract-lines---events-conline" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINE</a>, <a href="/database-schema/contracts#contract-lines---progress-billing-conlinf" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINF</a>, <a href="/database-schema/contracts#contract-lines---variation-events-conling" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLING</a>, <a href="/database-schema/contracts#contract-lines---variation-notes-conlinh" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINH</a>, <a href="/database-schema/contracts#contract-lines---status-history-conlinq" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINQ</a>, <a href="/database-schema/contracts#contract-lines---document-register-conlinw" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINW</a>, <a href="/database-schema/contracts#contract-lines---document-notes-conlinx" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINX</a>, <a href="/database-schema/contracts#contract-lines---specificationscomments-conlinz" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINZ</a><br/>
                      <strong>Lookup Tables:</strong> <a href="/database-schema/lookup-tables#contract-status-cotabl_m" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABL_M</a>, <a href="/database-schema/lookup-tables#events-cotablw" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLW</a>, <a href="/database-schema/lookup-tables#operating-centres-cotably" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLY</a>, <a href="/database-schema/lookup-tables#districts-cotablz" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLZ</a><br/>
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
                      <strong>Core Tables:</strong> <a href="/database-schema/job-costing#job-costing-header-jcheada" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCHEADA</a>, <a href="/database-schema/job-costing#job-sections-jcsecta" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSECTA</a><br/>
                      <strong>Lookup Tables:</strong> <a href="/database-schema/lookup-tables#projects-cotablp" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLP</a>, <a href="/database-schema/lookup-tables#operating-centres-cotably" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLY</a><br/>
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
                      <strong>Core Tables:</strong> <a href="/database-schema/job-costing#job-sales-estimate-headings-jcspec_a" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPEC_A</a>, <a href="/database-schema/job-costing#job-sales-estimate-paragraphs-jcspec_b" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPEC_B</a>, <a href="/database-schema/job-costing#job-sales-estimate-details-jcspec_c" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPEC_C</a>, <a href="/database-schema/inventory#inventory-master-itmmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>ITMMASA</a><br/>
                      <strong>Lookup Tables:</strong> <a href="/database-schema/lookup-tables#sale-types-cotablu" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLU</a>, <a href="/database-schema/lookup-tables#sales-groups-cotablv" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>COTABLV</a><br/>
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
                      <strong>Core Tables:</strong> <a href="/database-schema/contracts#contract-lines---document-register-conlinw" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINW</a>, <a href="/database-schema/contracts#contract-lines---document-notes-conlinx" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CONLINX</a><br/>
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
                      <strong>Core Tables:</strong> <a href="/database-schema/job-costing#production-estimate-cost-centres-jcspech" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECH</a>, <a href="/database-schema/job-costing#production-estimate-details-jcspeci" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECI</a>, <a href="/database-schema/job-costing#production-estimate-detail-specs-jcspecj" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECJ</a>, <a href="/database-schema/job-costing#production-estimate-bill-of-materials-jcspeck" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECK</a>, <a href="/database-schema/job-costing#job-contract-information-jcspecm" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JCSPECM</a>, <a href="/database-schema/inventory#inventory-master-itmmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>ITMMASA</a><br/>
                      <strong>Lookup Tables:</strong> <a href="/database-schema/lookup-tables#cost-centre-table-jobtbla" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>JOBTBLA</a><br/>
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
                      <strong>Core Tables:</strong> <a href="/database-schema/purchase-orders#purchase-order-header-poheada" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>POHEADA</a>, <a href="/database-schema/purchase-orders#purchase-order-lines-polinea" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>POLINEA</a>, <a href="/database-schema/inventory#inventory-master-itmmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>ITMMASA</a><br/>
                      <strong>Vendor Tables:</strong> <a href="/database-schema/vendors#vendor-master-venmasa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>VENMASA</a>, <a href="/database-schema/vendors#vendor-notes-venlina" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>VENLINA</a><br/>
                      <strong>Contact Tables:</strong> <a href="/database-schema/vendors#contact-addresses-cntfilb" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CNTFILB</a>, <a href="/database-schema/vendors#contact-cross-reference-cntxrfa" style={{color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>CNTXRFA</a><br/>
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