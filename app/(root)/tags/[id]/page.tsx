type TagPageProps = {
  params: Promise<{ id: string }>;
};

const TagPage = async ({ params }: TagPageProps) => {
  const { id } = await params;

  return <h1 className="h1-bold text-dark100_light900">Tag: {id}</h1>;
};

export default TagPage;
