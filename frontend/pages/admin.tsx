import Dashboard from "../components/Dashboard";
import api from "../services/api";

export async function getServerSideProps(context) {
  const response = await api.get("/post")

  const listNotApprovedPosts = response.data.message 

  console.log(listNotApprovedPosts)

  if (!response) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      listNotApprovedPosts
    }
  }
}  

function Admin({ listNotApprovedPosts }) {
  return (
    <Dashboard listNotApprovedPosts={listNotApprovedPosts}/>
  );
}

export default Admin;
