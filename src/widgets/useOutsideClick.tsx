"use client";
import React, { Ref, useEffect, useRef, useState } from "react";

const useOutsideClick = (callback: any) => {
  const ref: any = React.useRef();

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
