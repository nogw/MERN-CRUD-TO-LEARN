import Dashboard from "../components/Dashboard";
import api from "../services/api";

export async function getServerSideProps(context) {
  const response = await api.get("/post", {
    params: {
      option: "await"
    }
  })
  
  const listNotApprovedPosts = response.data.message 
  
  const numbers = await api.get("/admin/getNumbers")

  const listNumberPosts = numbers.data

  if (!response) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      listNotApprovedPosts,
      listNumberPosts
    }
  }
}  

function Admin({ listNotApprovedPosts, listNumberPosts }) {
  return (
    <Dashboard listNumberPosts={listNumberPosts} listNotApprovedPosts={listNotApprovedPosts}/>
  );
}

export default Admin;
