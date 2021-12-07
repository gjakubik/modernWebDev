import React, { useEffect, useState } from "react";

import { getAbout } from "../../services/parseQueries.js";

const AboutList = () => {
  const [aboutContent, setContent] = useState([]);
  useEffect(() => {
    getAbout().then((aboutContent) => {
      setContent(aboutContent);
    });
  }, []);

  return (
    <div>
      <hr />
      {aboutContent.length > 0 && (
        <div>
          {aboutContent.map((content, index) => (
            <div key={index}>
            <h3 key={content.id}> {content.title} </h3>
            <p key={content.id}> {content.content} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutList;
