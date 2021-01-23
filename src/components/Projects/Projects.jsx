// import React from "react";
// import "./Projects.scss";

// function Projects() {
//   return (
//     <div className="body">
//       {/* <h1>Project World</h1> */}
//       <input type="radio" checked id="radio-front" name="select-face" />
//       <input type="radio" id="radio-left" name="select-face" />
//       <input type="radio" id="radio-right" name="select-face" />
//       <input type="radio" id="radio-top" name="select-face" />
//       <input type="radio" id="radio-bottom" name="select-face" />
//       <input type="radio" id="radio-back" name="select-face" />

//       <div class="separator"></div>

//       <div class="space3d">
//         <div className="_3dbox">
//           <div className="_3dface _3dface--front"></div>
//           <div className="_3dface _3dface--top"></div>
//           <div className="_3dface _3dface--bottom"></div>
//           <div className="_3dface _3dface--left"></div>
//           <div className="_3dface _3dface--right"></div>
//           <div className="_3dface _3dface--back"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;

import { render } from "react-dom";
import React, { useState, useEffect, useMemo } from "react";
import { useTransition, a } from "react-spring";
import shuffle from "lodash/shuffle";
import useMeasure from "./useMeasure";
import useMedia from "./useMedia";
import data from "./data";
import "./Projects.scss";

function Projects() {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    ["(min-width: 1000px)", "(min-width: 800px)", "(min-width: 400px)"],
    [5, 4, 3],
    2
  );
  // Hook2: Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hook3: Hold items
  const [items, set] = useState(data);
  // Hook4: shuffle data every 2 seconds
  useEffect(() => void setInterval(() => set(shuffle), 2000), []);
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [
        (width / columns) * column,
        (heights[column] += child.height / 2) - child.height / 2,
      ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, items, width]);
  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  // Render the grid
  return (
    <>
      <h1>HELLLLLLLLO</h1>
      <div className="test">
        <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
          {transitions.map(({ item, props: { xy, ...rest }, key }) => (
            <a.div
              key={key}
              style={{
                transform: xy.interpolate(
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
                ...rest,
              }}
            >
              <div
                className="something"
                style={{ backgroundImage: item.css, border: 0 }}
                alt=""
              />
            </a.div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Projects;
