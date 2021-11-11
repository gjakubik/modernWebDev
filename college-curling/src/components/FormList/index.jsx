import React, { useEffect, useState } from "react";

import { getForm } from "../../services/parseQueries.js";

const FormList = () => {
  const [formContent, setContent] = useState([]);
  useEffect(() => {
    getForm().then((formContent) => {
      setContent(formContent);
    });
  }, []);

  return (
    <div>
      <hr />
      {formContent.length > 0 && (
        <div>
          {formContent.map((content, index) => (
            <div key={index}>
            <p key={content.id}> {content.description}: <a href={content.link}> {content.link} </a></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormList;
