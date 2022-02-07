import { getMovieInfo, getMovies } from '../../services/movieService';
import { useRouter } from 'next/router';

export default ({ movie }) => {
  console.log(movie);
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>电影名称：{movie.name}</h1>
      <p>英文名：{movie.ename}</p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const resp = await getMovieInfo(params.id);
  return {
    props: {
      movie: resp.data,
    },
  };
}

/**
 * 该函数用于得到哪些可能出现的id
 */
export async function getStaticPaths() {
  const resp = await getMovies();
  const paths = resp.data.map((item) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
