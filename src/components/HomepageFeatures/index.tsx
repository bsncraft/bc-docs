import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Your industry - our passion',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Working within the construction and manufacturing sectors to
        drive innovation through our integrated solutions and deep
        industry expertise. Unite your people and processes on a single
        platform. Boost efficiency, enhance communication, and accelerate
        building—all from one integrated solution. Discover how our
        leading end to end solutions can help you achieve more.
      </>
    ),
  },
  {
    title: 'Software is the new toolbelt',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        BusinessCraft's Construction Management solution keeps projects on track
        from planning, handover and maintenance. With tools for scheduling,
        extra orders, billing, checklists, photos and accessing documents,
        it connects teams at every stage. Real-time updates and visibility,
        helping you deliver successful projects on time.
      </>
    ),
  },
  {
    title: 'About BusinessCraft',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Local and proud - we are leading the way in business systems.
        With over 30 years of experience, we are committed to being the
        go-to choice for businesses across residential construction and
        diverse industries. Our innovative, integrated solutions and deep
        industry expertise drive better outcomes for your business.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={styles.about__card}>
      <div className={styles.about__section}>
        <div className={styles.about__icon}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <Heading as="h3" className={styles.about__header}>{title}</Heading>
        <p className={styles.about__description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}>
        <Heading as="h2" className="features__header">Your craft, your people, your business</Heading>
        <div className={styles.about__cards}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
