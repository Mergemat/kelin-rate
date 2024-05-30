"use client";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

export function Article({
  mdxSource,
}: {
  mdxSource: MDXRemoteSerializeResult;
}) {
  return (
    <article
      className="prose w-full dark:prose-invert
  lg:prose-xl prose-h1:text-xl
  prose-h1:font-bold prose-p:text-justify prose-a:text-blue-600
  prose-img:rounded-xl"
    >
      <MDXRemote {...mdxSource} />
    </article>
  );
}
