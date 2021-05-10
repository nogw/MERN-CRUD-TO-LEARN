import { GetStaticPaths } from 'next';
import Post from '../../components/Post';
import api from '../../services/api';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
      paths: [],
      fallback: "blocking"
  }
}

export const getStaticProps = async (context: any) => {
  const response = await api.get(`/post/${context.params.slug}`)
  const postData = response.data.message

  if (!postData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      postData
    }
  }
}

function Slug({ postData }) {
  return (
    <Post data={postData}/>
  );
}

export default Slug;
