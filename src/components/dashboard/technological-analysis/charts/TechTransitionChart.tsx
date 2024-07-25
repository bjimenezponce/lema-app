"use client";
import React, { useEffect, createRef } from "react";
import * as d3 from "d3";
import { string } from "zod";

export default function TechTransitionChart({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  const ref = React.createRef<SVGSVGElement>();

  useEffect(() => {
    draw();
  }, []);

  const draw = () => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    svg
      .append("circle")
      .attr("r", 80)
      .attr("cx", 100)
      .attr("cy", 100)
      .attr("fill", "green");
  };
  return <svg width={width} height={height} ref={ref} />;
}
