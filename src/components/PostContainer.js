import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const PostContainer = ({ title, slug, featured_image, alt, published, summary, author }) => {

     const publishedDate = new Date(published)
     return (
          <div className={styles.card}>
               <img className={styles.image} src={featured_image} alt={alt} /> <br />
               <div  className={styles.detailHead}>
                    <Link legacyBehavior href={`/posts/${slug}`}>
                         <a className={styles.theme}>{title}</a>
                    </Link>
                    <p className={styles.desc}>{summary}</p>
               </div>
               <div className={styles.detailBody}>
                <span>✍️ {author.first_name} {author.last_name}</span>
                <span className={styles.published}>{publishedDate.toDateString()}</span>
            </div>
          </div>
     )
}

export default PostContainer
