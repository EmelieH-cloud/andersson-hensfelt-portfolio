import React from "react";

type AppTextProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  weight?: 300 | 400 | 500 | 600 | 700;
  className?: string;
};

const highlightMommi = (text: string) => {

  // 🔥 FIX: inkluderar å ä ö
  const regex = /(mommi[a-zA-ZåäöÅÄÖ]*)/gi;

  const parts = text.split(regex);

  return parts.map((part, index) => {

    if (part.toLowerCase().startsWith("mommi")) {
      return (
        <strong key={index} style={{ fontWeight: 700 }}>
          {part}
        </strong>
      );
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