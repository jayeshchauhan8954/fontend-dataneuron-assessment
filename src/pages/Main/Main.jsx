import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import LanguageCard from "../../components/Card/Card";
import QueryForm from "../../components/QueryForm/QueryForm";
import IndiaFAQ from "../../components/FAQ/FAQ";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 3px grey",
  background: "#f0f0f0",
  padding: '100px'
};
const style_3 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 3px grey",
  background: "#f0f0f0",
  padding: '100px',
  // marginLeft:'10rem'
  placeSelf: "center"
};

const Main = () => {
  const [minWidth, setMinWidth] = useState(0);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    const cardListElement = document.querySelector(".card-list");
    if (cardListElement) {
      const { width, height } = cardListElement.getBoundingClientRect();
      setMinWidth(width);
      setMinHeight(height);
    }
  }, []);

  return (
    <div className=" m-4 overflow-hidden p-2 flex flex-wrap  gap-4">
      <Resizable
        style={style}
        defaultSize={{
          width: 800,
          height: 500
        }}
        minWidth={minWidth}
        minHeight={minHeight}
      >
        {/* <CardList /> */}
        <QueryForm />
        {/* <ImageUpload/> */}
      </Resizable>
      <Resizable
        style={style}
        defaultSize={{
          width: 600,
          height: 500
        }}
      >
        <LanguageCard />

      </Resizable>
      <Resizable
        style={style_3}
        defaultSize={{
          width: 600,
          height: 600
        }}
      >
        {/* <ResizableComps/> */}
        <IndiaFAQ />
      </Resizable>
    </div>
  );
};

export default Main;
