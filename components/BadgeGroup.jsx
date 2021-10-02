import React, { useMemo, useState } from "react";

const Badge = ({ active = false, text }) => {
  return (
    <div className="badge" data-active={active}>
      {text}
    </div>
  );
};

export default function BadgeGroup({ initial = 0, items }) {
  const [current, setCurrent] = useState(initial);

  const ITEMS = useMemo(() => {
    const temp = items.map((item) => item.name);
    return ["all", ...temp];
  }, [items]);

  return (
    <ul className="badge-grp">
      {ITEMS.map((item, index) => (
        <li key={index} onClick={() => setCurrent(index)}>
          <Badge text={item} active={index === current} />
        </li>
      ))}
    </ul>
  );
}
