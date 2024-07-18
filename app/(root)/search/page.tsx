import UserCard from "@/components/cards/UserCard";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo.onboarded) redirect("/onboarding");

  // fetch all users
  const result = await fetchUsers({
    userId: user.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>

      {/* search bar */}

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length !== 0 ? (
          <>
            {result.users.map((preson) => (
              <UserCard
                key={preson.id}
                id={preson.id}
                name={preson.name}
                username={preson.username}
                imgUrl={preson.image}
                personType="User"
              />
            ))}
          </>
        ) : (
          <p className="no-result">No users</p>
        )}
      </div>
    </section>
  );
};

export default page;
