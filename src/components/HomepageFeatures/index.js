import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Mathematik',
        Svg: require('@site/static/img/math-logo.svg').default,
        description: (
            <>
                <p>Mathematik ist eine Wissenschaft, die selbstgeschaffene abstrakte Strukturen auf ihre Eigenschaften
                    und Muster untersucht.</p>
                <p>Sie ist mehr als dir die Schule zeigt und wesentlich cooler als du glaubst!<br/>
                    Gib ihr eine Chance!</p>
            </>
        ),
    },
    {
        title: 'Informatik',
        Svg: require('@site/static/img/informatics-logo.svg').default,
        description: (
            <>
                <p>Informatik ist eine Strukturwissenschaft, die sich mit der Information und deren automatischer
                    Verarbeitung befasst.</p>
                <p>
                    <q><cite>In der Informatik geht es genau so wenig um Computer, wie in der Astronomie um
                        Teleskope.</cite></q><br />
                    - Edsger Wybe Dijkstra
                </p>
            </>
        ),
    },
    {
        title: 'Programmierung',
        Svg: require('@site/static/img/coding-logo.svg').default,
        description: (
            <>
                <p>Programmierung ist das Erstellen von Programmen mit einer Programmiersprache.</p>
                <p>
                    <pre style={{textAlign: 'left'}}>
                        <code>
                            int main(void)<br/>
                            &#123;<br/>
                            &nbsp;   printf("Programmierst du auch?");<br/>
                            &nbsp;   return 0;<br/>
                            &#125;
                        </code>
                    </pre>
                </p>
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
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
