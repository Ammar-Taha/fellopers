import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { QUESTIONS } from "@/constants/questions";
import {
  isHomePageFilter,
  type HomePageFilter,
} from "@/constants/filters";
import ROUTES from "@/constants/routes";

const Home = async ({ searchParams }: PageProps<"/">) => {
  const { query, filter } = await searchParams;
  const searchQuery = typeof query === "string" ? query : "";
  const rawFilter = typeof filter === "string" ? filter : "";
  const activeFilter: HomePageFilter | "" = isHomePageFilter(rawFilter)
    ? rawFilter
    : "";

  const questions = QUESTIONS.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (!matchesQuery) return false;

    if (activeFilter === "unanswered") {
      return question.answers === 0;
    }

    return true;
  }).sort((a, b) => {
    switch (activeFilter) {
      case "frequent":
        return b.views - a.views;
      case "recommended":
        return b.votes - a.votes;
      case "unanswered":
      case "newest":
      case "":
        return b.createdAt.getTime() - a.createdAt.getTime();
      default:
        activeFilter satisfies never;
        throw new Error(`Unhandled home filter: ${activeFilter}`);
    }
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href={ROUTES.ASK_QUESTION}
          className="min-h-10 w-full rounded-lg px-4 py-3 text-center paragraph-medium text-light-900 primary-gradient sm:w-fit"
        >
          Ask a Question
        </Link>
      </section>

      <section className="mt-11">
        <LocalSearch route={ROUTES.HOME} />
      </section>

      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <p className="text-center paragraph-regular text-dark400_light700">
            {searchQuery
              ? `No questions matching "${searchQuery}"`
              : "No questions found"}
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
