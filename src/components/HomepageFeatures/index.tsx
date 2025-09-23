import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Database Schema',
    Svg: () => <div style={{fontSize: '4rem'}}>📊</div>,
    description: (
      <>
        Complete documentation of BusinessCraft's ISAM database structure with
        32 tables, field definitions, and relationships.
      </>
    ),
  },
  {
    title: 'Table Definitions',
    Svg: () => <div style={{fontSize: '4rem'}}>🗂️</div>,
    description: (
      <>
        Detailed table specifications including contract management, job costing,
        inventory, purchase orders, and vendor tables.
      </>
    ),
  },
  {
    title: 'Field Specifications',
    Svg: () => <div style={{fontSize: '4rem'}}>📋</div>,
    description: (
      <>
        Comprehensive field definitions with data types, sizes, and descriptions
        for all BusinessCraft database tables.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}