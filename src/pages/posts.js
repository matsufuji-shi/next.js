export async function getStaticProps() {
  const res= await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return{
    props:{
      posts,
    },
  };
}

export default function Posts({posts}){
  return(
    <div>
      <h1>ブログポスト一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}