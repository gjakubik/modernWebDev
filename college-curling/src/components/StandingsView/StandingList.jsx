/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from "react";

import { getStandings } from "../../services/standings";

const StandingsList = () => {
  const [standings, setUsers] = useState([]);

  useEffect(() => {
    getStandings().then((standings) => {
      setUsers(standings);
    });
  }, []);

  return (
    <div>
      <hr />
      The current standings are as follows:
      {standings.length > 0 && (
        <ul>
          {standings.map((standing) => (
            <li key={standing.id}>
              {standing.last_name}, {standing.first_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StandingsList;
