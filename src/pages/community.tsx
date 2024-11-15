import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './community.module.css';

export default function Community(): JSX.Element {
  return (
    <Layout title="Community" description="Places to ask questions">
      <header className="hero hero--primary">
        <div className="container text--center">
          <h1>Community</h1>
          <div className="hero--subtitle">
            Places where you can ask questions
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row margin-vert--lg">
          <div className="col text--center padding-vert--md">
              <div class="card">
                <div class="card__header">
                  <i className={clsx(styles.icon, styles.github)}></i>
                </div>
                <div class="card__body">
                  <p>Join the discussion on GitHub</p>
                </div>
                <div class="card__footer">
                  <Link to="https://github.com/twirphp/twirp/discussions" class="button button--outline button--primary button--block">Open</Link>
                </div>
              </div>
            </div>

            <div className="col text--center padding-vert--md">
              <div class="card">
                <div class="card__header">
                  <i className={clsx(styles.icon, styles.slack)}></i>
                </div>
                <div class="card__body">
                  <p>Join the &#35;twirp channel in the Gophers slack</p>
                </div>
                <div class="card__footer">
                  <Link to="https://invite.slack.golangbridge.org/" class="button button--outline button--success button--block">Get an invite</Link>
                </div>
                <div class="card__footer">
                  <Link to="https://gophers.slack.com/messages/C8T4Y2248" class="button button--outline button--primary button--block">Open</Link>
                </div>
              </div>
            </div>

            <div className="col text--center padding-vert--md">
              <div class="card">
                <div class="card__header">
                  <i className={clsx(styles.icon, styles.twitter)}></i>
                </div>
                <div class="card__body">
                  <p>Drop a line on Twitter</p>
                </div>
                <div class="card__footer">
                  <Link to="https://twitter.com/sagikazarmark" class="button button--outline button--primary button--block">Follow &#64;sagikazarmark</Link>
                </div>
              </div>
            </div>

            <div className="col text--center padding-vert--md">
              <div class="card">
                <div class="card__header">
                  <i className={clsx(styles.icon, styles.email)}></i>
                </div>
                <div class="card__body">
                  <p>Say hello via email</p>
                </div>
                <div class="card__footer">
                  <Link to="mailto:twirphp@sagikazarmark.dev" class="button button--outline button--primary button--block">twirphp&#64;sagikazarmark.dev</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
