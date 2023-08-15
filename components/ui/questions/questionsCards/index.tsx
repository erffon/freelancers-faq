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
      <div className="bg-white rounded-2xl flex p-4 justify-center items-center w-fit">
        <Icon className="text-black/70 w-5 h-5" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default QuestionCards;
