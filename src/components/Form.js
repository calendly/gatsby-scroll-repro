import React from 'react';
import { useEffect, useState } from 'react';

const marketoId = '482-NMZ-854';

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
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !!formLoaded) return;

    window.MktoForms2.setOptions({
      formXDPath: `/rs/${marketoId}/images/marketo-xdframe-relative.html`,
    });
    window.MktoForms2.loadForm(
      '//pages.calendly.com',
      marketoId,
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
