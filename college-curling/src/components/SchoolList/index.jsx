/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from "react";

import { getSchools } from "../../services/schools.js";
import { SCHOOLS } from "../../constants.js"

const SchoolList = () => {
  const schools = getSchools();

  //Basic display of schools and their names
  return (
    <div>
      <hr />
      The current schools are as follows:
      {schools.length > 0 && (
        <ul>
          {schools.map((school) => (
            <li key={school.objectId}>
              {school.schoolName}, located in {school.schoolLocation}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SchoolList;
