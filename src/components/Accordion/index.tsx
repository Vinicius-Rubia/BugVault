import React from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { MdKeyboardArrowDown } from "react-icons/md";
import classNames from "classnames";
import * as C from "./styles";

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionChecklists: React.FC = () => {
  const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger className={classNames('AccordionTrigger',className)} {...props} ref={forwardedRef}>
        {children}
        <MdKeyboardArrowDown className="AccordionChevron" size={22} />
      </Accordion.Trigger>
    </Accordion.Header>
    ));

  const AccordionContent = React.forwardRef<HTMLDivElement, AccordionTriggerProps>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content className={classNames('AccordionContent', className)} {...props} ref={forwardedRef}>
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ));

  return (
    <C.Container>
      <h1>Checklists</h1>
      <Accordion.Root className="AccordionRoot" type="single" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger>
            <div>
              <p>Portal Webchat</p>
              <p>SKY</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </C.Container>
  );
};
