import * as React from 'react';
import { Link } from 'gatsby';
import Form from '../components/Form';

const sections = Array(30).fill(null);

const TestA = () => {
  return (
    <main>
      <Form id={1020} />
      {sections.map((_content, index) => (
        <section
          key={index}
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
