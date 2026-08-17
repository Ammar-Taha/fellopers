type ProfilePageProps = {
  params: Promise<{ id: string }>;
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = await params;

  return <h1 className="h1-bold text-dark100_light900">Profile {id}</h1>;
};

export default ProfilePage;
