import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorMap = colors.map(colorItem => <li key={colorItem} style={{color: colorItem}}>{colorItem}</li>);

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorMap}
      </ol>
    </div>
  );
}

export default ColorList;
