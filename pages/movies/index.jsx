import Head from 'next/head';
import { getMovies } from '../../services/movieService';

export default ({ movies }) => {
  return (
    <div>
      <Head>
        <title>电影页</title>
      </Head>
      <h1>电影页</h1>
      <ul style={{ paddingLeft: 30 }}>
        <h3>电影列表</h3>
        {movies.map((movie) => {
          return (
            <li key={movie._id}>
              <a href={`/movies/${movie._id}`}>
                <span>{movie.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/**
 * 该函数只可能在服务端运行
 * 该函数运行在组件渲染之前
 * 该函数只能在build期间运行
 * 返回的对象中的props属性，将被混合到整个组件属性
 */
export async function getStaticProps() {
  console.log('getStaticProps');
  const resp = await getMovies();
  return {
    props: {
      movies: resp.data,
    },
  };
}
