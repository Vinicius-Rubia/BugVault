import React from "react";

import { Overview } from "../../components/Overview";
import { RecentTests } from "../../components/RecentTests";
import { useParams } from "react-router-dom";
import { Checklists } from "../Checklists";
import * as C from "./styles";

export const Home: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <C.Container>
      {slug ? (
        <Checklists/>
      ) : (
        <>
          <Overview />
          <RecentTests />
        </>
      )}
    </C.Container>
  );
};
