import Link from 'next/link'
import type { InferGetStaticPropsType, NextPage } from 'next'
import type { Blog } from '../types/blog'
import { client } from '../libs/client'

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs" });
  const tag = await client.get({ endpoint: "categories" });

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};


type Props = {
  blogs: Blog[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.title}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
