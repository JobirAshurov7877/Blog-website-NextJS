import Butter from 'buttercms'
import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import PostContainer from '@/components/PostContainer';

const butter = Butter(process.env.BUTTER_CMS_API_TOKEN);

export async function getStaticProps(){
  const  response = await butter.post.list({page:1, page_size:10});
  const posts = await response.data;
  console.log(posts)

  return {
    props: {
      posts
    }
  }
}

export default function Home({posts}) {
  return (
    <div className='home'>
        <Head>
          <title> NextJS Blog  with  ButterCMS</title>
        </Head>
        <h1 className={styles.title}> NextJS Blog  with  ButterCMS</h1>
        <div className={styles.cardsArea}>
        {posts.data.map(post =>(
          <PostContainer
             className={styles.container}
             key={post.slug}
             title={post.title}
             featured_image={post.featured_image}
             alt={post.featured_image_alt}
             slug={post.slug}
             summary={post.summary}
             author={post.author}
             published={post.published}
           />
           
        ))}
        </div>
    </div>
  )
}
