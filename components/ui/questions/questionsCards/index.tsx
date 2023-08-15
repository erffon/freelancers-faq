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
    <Link href={link} target={target} className="flex items-start gap-8">
      <div className="bg-white rounded-2xl flex p-3 justify-center items-center w-fit hover:shadow-md transition-all duration-300 ease-out">
        <Icon className="text-black/60 w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-textcolor-heading">
          {title}
        </h3>
        <p className="font-light text-textcolor-paragraph leading-[130%]">
          {summary}
        </p>
      </div>
    </Link>
  );
};

export default QuestionCards;
