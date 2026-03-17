import React from "react";

type AppTextProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  weight?: 300 | 400 | 500 | 600 | 700;
  className?: string;
};

const highlightMommi = (text: string) => {

  const regex = /(mommi(?:s|Träff|Grupp|Sök)?)/gi;

  const parts = text.split(regex);

  return parts.map((part, index) => {

    const lower = part.toLowerCase();

    if (
      lower === "mommi" ||
      lower === "mommis" ||
      lower === "mommiträff" ||
      lower === "mommigrupp" ||
      lower === "mommisök"
    ) {
      return <strong key={index}>{part}</strong>;
    }

    return part;

  });

};

const AppText = ({
  children,
  as: Component = "p",
  weight = 400,
  className = "",
}: AppTextProps) => {

  const processChildren = (node: React.ReactNode): React.ReactNode => {

    if (typeof node === "string") {
      return highlightMommi(node);
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => (
        <React.Fragment key={i}>
          {processChildren(child)}
        </React.Fragment>
      ));
    }

    return node;
  };

  return (
    <Component
      className={className}
      style={{
        fontFamily: "Open Sans, sans-serif",
        fontWeight: weight,
      }}
    >
      {processChildren(children)}
    </Component>
  );
};

export default AppText;