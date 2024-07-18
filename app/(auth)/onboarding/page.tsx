import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

async function Page() {
  const user = await currentUser();

  const userInfo = await fetchUser(user?.id);

  const userData = {
    id: user?.id,
    objectId: userInfo?._id || user?.username,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="flex max-w-3xl flex-col px-10 py-20 mx-auto">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete Your Profile Now To Use Threads.
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="continue" />
      </section>
    </main>
  );
}
export default Page;
