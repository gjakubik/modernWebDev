import React, { useEffect, useState } from "react";

import { getEvents } from "../../services/parse/eventQueries.js";

const EventList = () => {
  const events = getEvents();

  //Basic display of schools and their names
  return (
    <div>
      <hr />
      The current schools are as follows:
      {events.length > 0 && (
        <ul>
          {events.map((school) => (
            <li key={events.objectId}>
              {events.schoolName}, located in {events.schoolLocation}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;