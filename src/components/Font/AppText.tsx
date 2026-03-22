import React from "react";

type AppTextProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  weight?: 300 | 400 | 500 | 600 | 700;
  size?: string;
  color?: string;
  className?: string;
};

const highlightMommi = (text: string) => {
  const regex = /\b(mommi[a-zA-ZåäöÅÄÖ]*)\b/gi;

  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (regex.test(part)) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
};

const AppText = ({
  children,
  as: Component = "p",
  weight = 400,
  size,
  color,
  className = "",
}: AppTextProps) => {

  const processChildren = (node: React.ReactNode): React.ReactNode => {

    if (typeof node === "string") {
      return highlightMommi(node);
    }

    return node;
  };

  return (
    <Component
      className={className}
      style={{
        fontFamily: "Open Sans, sans-serif",
        fontWeight: weight,
        fontSize: size,
        color: color,
      }}
    >
      {processChildren(children)}
    </Component>
  );
};

export default AppText;