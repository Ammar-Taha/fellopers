import Link from "next/link";
import { Eye, MessageCircle, ThumbsUp } from "lucide-react";

import Metric from "@/components/Metric";
import TagCard from "@/components/cards/TagCard";
import type { Question } from "@/constants/questions";
import ROUTES from "@/constants/routes";
import { formatNumber, getTimeStamp } from "@/lib/format";

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <article className="rounded-[10px] card-wrapper p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="line-clamp-1 flex subtle-regular text-dark400_light700 sm:hidden">
            {getTimeStamp(question.createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(question._id)}>
            <h3 className="line-clamp-1 flex-1 base-semibold text-dark200_light900 sm:h3-semibold">
              {question.title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {question.tags.map((tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>

      <div className="mt-6 flex-between w-full flex-wrap gap-3">
        <Metric
          alt={question.author.name}
          imgUrl={question.author.image}
          value={question.author.name}
          label={`asked ${getTimeStamp(question.createdAt)}`}
          href={ROUTES.PROFILE(question.author._id)}
          isAuthor
          className="text-dark400_light700"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            icon={ThumbsUp}
            alt="Votes"
            value={formatNumber(question.votes)}
            label="Votes"
            className="text-dark400_light800"
          />
          <Metric
            icon={MessageCircle}
            alt="Answers"
            value={formatNumber(question.answers)}
            label="Answers"
            className="text-dark400_light800"
          />
          <Metric
            icon={Eye}
            alt="Views"
            value={formatNumber(question.views)}
            label="Views"
            className="text-dark400_light800"
          />
        </div>
      </div>
    </article>
  );
};

export default QuestionCard;
