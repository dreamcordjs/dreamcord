import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "⌨️ Easy to use",
    description: <>Make your own Discord bot in just a few lines of code!</>,
  },
  {
    title: "🔧 Simple to migrate",
    description: (
      <>
        Coming from <a href="https://discord.js.org">discord.js</a> or a similar
        package? No problem!{" "}
        <Link to="/docs/migrating">Migrating is super simple</Link>.
      </>
    ),
  },
  {
    title: "🔬 Type-safe",
    description: (
      <>
        With the power of{" "}
        <a href="https://www.typescriptlang.org/">TypeScript</a>, we provide a
        strict, type-safe, and ergonomic API for a better developer experience.
      </>
    ),
  },
  {
    title: "❌ No insane amount of breaking changes",
    description: (
      <>
        Now you don't need to worry about having to rewrite your code every few
        months!
      </>
    ),
  },
  {
    title: "🔥 Feature rich",
    description: (
      <>We support tons of Discord features to make your life easier!</>
    ),
  },
  {
    title: "🔀 Async-first",
    description: (
      <>
        We've engineered all APIs and abstractions to be async-first for maximum
        performance, efficiency, and portability.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div
      className={clsx("col col--4")}
      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
    >
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
