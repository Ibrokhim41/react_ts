import { ReactNode } from "react";

type SectionProps = {
    title: string,
    children: ReactNode
}

const Section = ({children, title = "Default title"}: SectionProps ) => {
  return <div>
    <h2>{title}</h2>
    <h2>{children}</h2>
  </div>;
};

export default Section;
