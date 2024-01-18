import Data from "./Data";
import React, { useState } from "react";

const Accordian = () => {
  const [selected, setselected] = useState("");
  const [enablemulti, setenablemulti] = useState(false);
  const [multiselected, setmultiselected] = useState([]);

  const handleClick = (clickedItem) => {
    setselected(clickedItem === selected ? null : clickedItem);
  };

  const handlemulti = (clickedItem) => {
    const copyItem = [...multiselected];
    const currentIndexItem = copyItem.indexOf(clickedItem);

    currentIndexItem === -1
      ? copyItem.push(clickedItem)
      : copyItem.splice(currentIndexItem, 1);

    setmultiselected(copyItem);
  };
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <h2
        onClick={() => setenablemulti(!enablemulti)}
        style={{
          display: "inline",
          color: "white",
          marginLeft: "5px",
          cursor: "Pointer",
        }}
      >
        Enable Multiple Options :{" "}
        {enablemulti === true ? (
          <h3 style={{ display: "inline" }}>On</h3>
        ) : (
          <h3 style={{ display: "inline" }}>Off</h3>
        )}
      </h2>
      {Data.map((item) => {
        return (
          <>
            <div
              className="question"
              onClick={() =>
                enablemulti === true
                  ? handlemulti(item.id)
                  : handleClick(item.id)
              }
              key={item.id}
            >
              <h2>{item.question}</h2>
              <span>+</span>
            </div>

            <div className="answer">
              {enablemulti === true
                ? multiselected.indexOf(item.id) !== -1 && (
                    <h2>{item.answer}</h2>
                  )
                : selected === item.id && <h2>{item.answer}</h2>}
              {/* {selected === item.id || multiselected.indexOf(item.id) !== -1 ? (
                <h2>{item.answer}</h2>
              ) : null} */}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Accordian;
