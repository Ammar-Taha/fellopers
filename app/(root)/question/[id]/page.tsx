type QuestionPageProps = {
  params: Promise<{ id: string }>;
};

const QuestionPage = async ({ params }: QuestionPageProps) => {
  const { id } = await params;

  return <h1 className="h1-bold text-dark100_light900">Question {id}</h1>;
};

export default QuestionPage;
