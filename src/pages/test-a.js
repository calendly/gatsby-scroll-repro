import * as React from 'react';
import { Link } from 'gatsby';

const sections = Array(10).fill(null);

const TestA = () => {
  return (
    <main>
      {sections.map((_content, index) => (
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'aliceblue',
            height: 200,
            borderTop: 'solid 1px black',
          }}
        >
          section {index}
          <Link to="/">To Homepage</Link>
        </section>
      ))}
    </main>
  );
};

export default TestA;

export const Head = () => <title>Test A</title>;
