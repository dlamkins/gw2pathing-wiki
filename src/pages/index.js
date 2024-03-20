import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Head from '@docusaurus/Head';

const features = [
  {
    title: <>Interactive Markers and Trails</>,
    imageUrl: 'https://assets.gw2dat.com/1769866.png',
    description: (
      <>
        Like an in-game GPS, the Pathing module helps point you in the right direction for achievements, map completion, hero point trains, and so much more.
      </>
    ),
  },
  {
    title: <>Extensive Marker Pack Support</>,
    imageUrl: 'https://assets.gw2dat.com/1769855.png',
    description: (
      <>
        Blish HUD's Pathing module supports more marker pack features than any other overlay with over 20 exclusive attributes and Lua script support.
      </>
    ),
  },
  {
    title: <>Community Created Marker Packs</>,
    imageUrl: 'https://assets.gw2dat.com/156015.png',
    description: (
      <>
        Over 30 marker packs available with a single click.  Marker packs download in seconds and stay up to date automatically.
      </>
    ),
  }
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h2">
          Blish HUD's
        </Heading>
        <Heading as="h1" className="hero__title">
          Pathing Module
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
      {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}