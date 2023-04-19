import React from 'react'

import { Cards } from '../../components/Cards';
import { useGetChecklistsByCompanyQuery } from '../../graphql/generated';
import { useParams } from 'react-router-dom';
import * as C from "./styles";

export const Checklists: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useGetChecklistsByCompanyQuery({
    variables: {
      company: `${slug}`,
    }
  });

  return (
    <C.Container>
      <h1>Checklists {slug}</h1>
      <Cards dataChecklists={slug ? data : slug} />
    </C.Container>
  )
}
