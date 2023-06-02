import React from 'react';
import { useEffect, useState } from 'react';

const Form = ({ formId = 1020 }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    if (window.MktoForms2) return setScriptLoaded(true);
    const script = document.createElement('script');
    script.src = 'https://pages.calendly.com/js/forms2/js/forms2.min.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
    // const params = new URLSearchParams(window.location.search);
    // params.forEach((key, value) => {
    //   if (urlFieldParams.includes(value)) {
    //     localStorage.setItem(value, key);
    //   }
    // });
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !!formLoaded) return;

    window.MktoForms2.setOptions({
      formXDPath: `/rs/${process.env.GATSBY_MARKETO_ID}/images/marketo-xdframe-relative.html`,
    });
    window.MktoForms2.loadForm(
      '//pages.calendly.com',
      process.env.GATSBY_MARKETO_ID,
      formId,
      (form) => {
        setFormLoaded(true);
      }
    );
  }, [scriptLoaded]);

  return (
    <div>
      <form id={`mktoForm_${formId.toString()}`} />
    </div>
  );
};

export default Form;
