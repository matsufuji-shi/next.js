// import { useRouter } from 'next/router';

// export default function Post(){
//   const router = useRouter();
//   const {id} = router.query;

//   return(
//     <h1>ポストID：{id}</h1>
//   )
// }

// 静的エクスポートに対応するため、getStaticPathsとgetStaticPropsを使用
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

const Post = ({ id }) => {
  return <div>ポストID: {id}</div>;
};

export default Post;