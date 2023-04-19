import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors["white/gray900"]};
    text-transform: capitalize;
    margin: 2.5rem 0 1.75rem;
  }

  /* reset */
button,
h3 {
  all: unset;
}

.AccordionRoot {
  border-radius: 6px;
  width: 100%;
  /* background-color: red; */
  /* box-shadow: 0 2px 10px green; */
}

.AccordionItem {
  overflow: hidden;
  margin-top: 1px;
}

.AccordionItem:first-child {
  margin-top: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.AccordionItem:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.AccordionItem:focus-within {
  position: relative;
  z-index: 1;
  /* box-shadow: 0 0 0 2px yellow; */
}

.AccordionHeader {
  display: flex;
}

.AccordionTrigger {
  /* background-color: transparent; */
  padding: 0 20px;
  height: 60px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: ${({ theme }) => theme.colors["white/gray900"]};
  box-shadow: 0 1px 0 white;
  background-color: ${({ theme }) => theme.colors["gray700/white200"]};
}

.AccordionTrigger div {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
}

.AccordionTrigger:hover {
  background-color: ${({ theme }) => theme.colors.gray};
}

.AccordionContent {
  overflow: hidden;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors["gray700/white200"]};
}
.AccordionContent[data-state='open'] {
  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
}
.AccordionContent[data-state='closed'] {
  animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

.AccordionContentText {
  padding: 15px 20px;
}

.AccordionChevron {
  /* color: pink; */
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
}
.AccordionTrigger[data-state='open'] > .AccordionChevron {
  transform: rotate(180deg);
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
`;
