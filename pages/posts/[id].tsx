import React, { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import client from "@api/apollo-client";
import { ApolloQueryResult } from "@apollo/client";
import { IpostsResponse, Ipost } from "types/interfaces";
import { GET_POST, GET_POSTS } from "@api/queries/posts";

type Props = {
  post: Ipost
}

const Navigation: FC<Props> = ({ post }: Props) => {
  return (
    <section className="h-screen w-full -mt-20">
      <div className=" h-5/6 flex justify-center items-center">
        <div className=" p-4 text-center w-1/2">
          <h1 className="text-3xl font-bold">
            { post.title }
            <div className="text-base font-thin">
              { post.user.name }
              <span className="ml-6"></span>
              { post.user.email }
            </div>
          </h1>
          <div className="text-xl mt-8">
            Body of the post: &nbsp;&nbsp;
            { post.body }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: ApolloQueryResult<IpostsResponse> = await client.query({
    query: GET_POSTS,
    variables: {
      options: {
        paginate: {
          limit: 20,
        },
      },
    },
  });

  const paths = data.posts.data.map(post =>{
    return {
      params: { id: post.id }
    }
  })

  return {
    paths,
    fallback: false
  };
};
type Params = {
  id: string
}
interface IpostResponse {
  post: Ipost
}
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) =>{
  const { data }: ApolloQueryResult<IpostResponse> = await client.query({
    query: GET_POST,
    variables: {
      id: params?.id
    },
  });

  return {
    props: {
      post: data.post
    },
  };
}
