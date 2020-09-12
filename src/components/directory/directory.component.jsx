import React, { useState } from "react";
import { sectionsData } from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
  const [sections, setSections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
