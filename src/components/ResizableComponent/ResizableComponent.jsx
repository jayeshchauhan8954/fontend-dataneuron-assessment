import React, { useEffect, useRef } from "react";
import "./ResizableComponent.css";
import resizableReducer, { resizeWidth, resizeHeight } from "../../reducers/resizableReducers";

const Resizable = ({ component: Component, content }) => {
  const wrapperRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const [state, dispatch] = React.useReducer(resizableReducer, { width: 680, height: 200 });

  useEffect(() => {
    const mouseDownHandler = (event) => {
      let oldX = event.clientX;
      let oldY = event.clientY;
      const target = event.target;

      const mouseMoveHandler = (moveEvent) => {
        const newX = moveEvent.clientX;
        const newY = moveEvent.clientY;
        const domRect = wrapperRef.current.getBoundingClientRect();
        const axisFactor = { x: 0, y: 0 };

        if (target === topRef.current) axisFactor.y = -1;
        else if (target === bottomRef.current) axisFactor.y = 1;
        else if (target === leftRef.current) axisFactor.x = -1;
        else if (target === rightRef.current) axisFactor.x = 1;

        dispatch(resizeWidth(domRect.width + ((newX - oldX) * axisFactor.x)));
        dispatch(resizeHeight(domRect.height + ((newY - oldY) * axisFactor.y)));

        oldX = newX;
        oldY = newY;
      };

      const mouseUpHandler = () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
        window.removeEventListener("mouseup", mouseUpHandler);
      };

      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    };

    const top = topRef.current,
      bottom = bottomRef.current,
      left = leftRef.current,
      right = rightRef.current;

    top.addEventListener("mousedown", mouseDownHandler);
    bottom.addEventListener("mousedown", mouseDownHandler);
    left.addEventListener("mousedown", mouseDownHandler);
    right.addEventListener("mousedown", mouseDownHandler);

    return () => {
      top.removeEventListener("mousedown", mouseDownHandler);
      bottom.removeEventListener("mousedown", mouseDownHandler);
      left.removeEventListener("mousedown", mouseDownHandler);
      right.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  // Adjust height dynamically based on content
  useEffect(() => {
    const contentHeight = wrapperRef.current.scrollHeight;
    dispatch(resizeHeight(contentHeight));
  }, [content]);

  return (
    <div className='wrapper' ref={wrapperRef} style={{ width: state.width, height: state.height }}>
      <span className="top" ref={topRef}></span>
      <span className="left" ref={leftRef}></span>
      <Component className="resizable" >{content}</Component>
      <span className="right" ref={rightRef}></span>
      <span className="bottom" ref={bottomRef}></span>
    </div>
  );
};

export default Resizable;
