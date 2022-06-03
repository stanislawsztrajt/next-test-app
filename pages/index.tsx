import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { ApolloQueryResult } from "@apollo/client";

import client from "@api/apollo-client";
import { IpostsResponse, Ipost } from "types/interfaces";
import { GET_POSTS } from "@api/queries/posts";
import Post from "components/Post";

export const getStaticProps: GetStaticProps = async () => {
  const data: ApolloQueryResult<IpostsResponse> = await client.query({
    query: GET_POSTS,
    variables: {
      options: {
        paginate: {
          limit: 20,
        },
      },
    },
  });

  return {
    props: {
      posts: data.data.posts.data,
    },
  };
};

type Props = {
  posts: Ipost[];
};
/* 
  todo:
    -pojedyncze posty(routing na nie)
    -naprawienie  bledu z wczytywaniem
    -clean code
    -testy
*/

const Home: NextPage<Props> = ({ posts }: Props) => {
  const postsMap = posts.map((post: Ipost) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl flex flex-col items-center w-3/4">
        <div className="w-2/3 mb-4 uppercase">Posts</div>
      </h1>
      {postsMap}
    </div>
  );
};

export default Home;
