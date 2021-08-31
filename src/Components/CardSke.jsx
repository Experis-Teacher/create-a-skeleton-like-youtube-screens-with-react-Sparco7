import React from "react";
import "./SkeletonCard.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardSke = () => {
  console.log("in cardSke");
  return (
    <div className="card">
      <SkeletonTheme color="grey" highlightColor="#444">
        <p>
          <Skeleton height={250} width={300} count={1} />
        </p>
      </SkeletonTheme>
    </div>
  );
};
export default CardSke;
