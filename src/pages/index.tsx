import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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
      </main>
    </Layout>
  );
}