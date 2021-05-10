import Timeline from "../components/Timeline";
import api from "../services/api";

export async function getServerSideProps(context) {
  const response = await api.get("/post", {
    params: {
      option: true
    }
  })

  const listPostsApproved = response.data.message
  
  return {
    props: {
      listPostsApproved
    }
  }
}

function Posts({ listPostsApproved }) {
  return (
    <Timeline posts={listPostsApproved}/>
  );
}

export default Posts;
