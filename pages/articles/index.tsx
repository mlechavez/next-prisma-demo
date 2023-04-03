import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Post } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import ArticleGrid from "../../components/ArticleGrid";

const ArticlesPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <>{<ArticleGrid posts={posts} />}</>;
};

export default ArticlesPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany();
  console.log(posts);
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)) as Post[],
    },
  };
};
