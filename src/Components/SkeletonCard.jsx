import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import CardSke from "./CardSke";

const SkeletonCard = (props) => {
  return (
    <div>
      {props.videos.map((video) => {
        return (
          <div>
            <CardSke key={video} />
          </div>
        );
      })}

      {/* <SkeletonTheme color="grey" highlightColor="#444">
        <p>
          <Skeleton height={250} width={300} count={1} />
        </p>
      </SkeletonTheme> */}
    </div>
  );
};

export default SkeletonCard;
