import React, { VFC } from "react";
import Link from "next/link";
import { Ipost } from "types/interfaces";

type Props = {
  post: Ipost;
};

const Post: VFC<Props> = ({ post }: Props) => {
  return (
    <div className="text-font-primary flex flex-col items-center w-3/4 mb-10">
      <div className="w-1/2">
        <div className="text-sm font-extralight text-font-secondary">
          2019- 0{Math.floor(Math.random() * 10) + 1}- 0{Math.floor(Math.random() * 10) + 1}
        </div>
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p className="text-lg font-normal text-font-primary">{post.body.slice(0, 100)}...</p>
        <Link href={`/posts/${post.id}`}>
          <button className="h-10 px-5 mt-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
