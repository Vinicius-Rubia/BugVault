import React from "react";
import Maps from "../../assets/images/map.png";
import NegocieQA from "../../assets/images/Negocie_QA.png";

import * as C from "./styles";

export const Suport: React.FC = () => {
  return (
    <C.Container>
      <C.Content>
        <h2>Sua opinião é importante para nós!</h2>
        <p>
          Queremos saber o que você tem a dizer! Tem alguma sugestão, dúvida ou
          precisa de ajuda referente aos testes? O sucesso do cliente é nossa
          prioridade e estamos aqui para ajudá-lo a ter a melhor experiência
          possível.
        </p>

        <C.Form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea rows={5} placeholder="Digite sua mensagem..."></textarea>
          <button type="submit">Enviar</button>
        </C.Form>

        <C.Footer>
          <img src={NegocieQA} alt="Negocie Online | QA" />
        </C.Footer>
      </C.Content>

      <img src={Maps} alt="Maps" />
    </C.Container>
  );
};
