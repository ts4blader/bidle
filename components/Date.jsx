import React from "react";
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <div className="date">
      <time datestring={dateString}>{format(date, "LLL d, yyyy")}</time>
    </div>
  );
}
