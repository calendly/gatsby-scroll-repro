import * as React from 'react';
import { Link } from 'gatsby';

const sections = Array(30).fill(null);

const IndexPage = () => {
  return (
    <main>
      {sections.map((_content, index) => (
        <section
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 200,
            borderTop: 'solid 1px black',
          }}
        >
          section {index}
          <Link to="/test-a">To Test A</Link>
        </section>
      ))}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Test A</title>;
