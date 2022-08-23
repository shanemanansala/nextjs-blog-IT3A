import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        I am Carl Shane Manansala. My hobbies are watching series, cooking, and sometimes reading some books. 
        My favorite food is the yummiest “ulam” in the whole world which is Kare-kare. 
        One of the things about myself is that I really love travelling. 
        I love when I see the beautiful sceneries that our world has. 
        </p>

        <p>
        To be honest, my first program choice was nursing but actually ended up taking this program instead. 
        I took up IT because they said that this career is in demand when it comes to working in different areas of our world. 
        In short, I chose the most practical option or decision of me. 
        </p>
        <p>
        I see myself as someone who’s already the happiest because I already achieved the goal that I wanted. 
        I expect to know more about designing and building some applications that people can use and interact with. 
        I am also expecting that we will know the different methods, approaches, benefits and purpose of this course.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}