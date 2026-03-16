import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const features = [
  {
    title: 'Getting Started',
    description: 'Set up your account, workspace, and first WhatsApp number quickly.',
    to: '/docs/getting-started/quickstart',
  },
  {
    title: 'Developer APIs',
    description: 'Use authenticated endpoints, webhooks, and SDKs to build integrations.',
    to: '/docs/developer/api-authentication',
  },
  {
    title: 'Automation',
    description: 'Build robust customer journeys with triggers, conditions, and actions.',
    to: '/docs/automation/automation-overview',
  },
  {
    title: 'Troubleshooting',
    description: 'Solve common platform and delivery issues with practical runbooks.',
    to: '/docs/faq/troubleshooting-faq',
  },
];

export default function Home() {
  return (
    <Layout title="SRLINES Docs" description="Documentation portal for SRLINES">
      <header className="hero hero--docs">
        <div className="container">
          <h1>SRLINES Documentation Portal</h1>
          <p>
            Find setup guides, API references, integration walkthroughs, and operational best practices.
          </p>
          <div>
            <Link className="button button--secondary button--lg" to="/docs/getting-started/quickstart">
              Start with Quickstart
            </Link>
          </div>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <h2>Popular sections</h2>
        <div className="home-grid">
          {features.map((feature) => (
            <article key={feature.title} className="home-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to={feature.to}>Open section →</Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}
