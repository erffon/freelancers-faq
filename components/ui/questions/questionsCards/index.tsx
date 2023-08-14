import Link from "next/link";
import { ComponentType, FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { IconType } from "react-icons";

interface IQuestionCards {
  Icon: IconType;
  title: string;
  summary: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
}

const QuestionCards: FC<IQuestionCards> = ({
  Icon,
  link,
  summary,
  title,
  target = "_self",
}) => {
  return (
    <Link href={link} target={target}>
      <div>
        <Icon className="text-red-500" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default QuestionCards;
