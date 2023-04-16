import React from 'react'

import * as C from "./styles";
import { Overview } from '../../components/Overview';
import { RecentTests } from '../../components/RecentTests';

export const Home: React.FC = () => {
  return (
    <C.Container>
      <Overview />
      <RecentTests />
    </C.Container>
  )
}
