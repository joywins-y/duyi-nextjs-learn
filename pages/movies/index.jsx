import Head from 'next/head';
import { getMovies } from '../../services/movieService';
import Pager from '../../components/Pager';
import { useRouter } from 'next/router';

export default ({ movies, page, total, limit }) => {
  const router = useRouter();

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
      <Pager
        page={page}
        total={total}
        limit={limit}
        onPageChange={(newPage) => {
          router.push('/movies', `/movies?page=${newPage}`, { shallow: true });
        }}
      />
    </div>
  );
};

/**
 * 该函数只可能在服务端运行
 * 该函数运行在组件渲染之前
 * 该函数只能在build期间运行
 * 返回的对象中的props属性，将被混合到整个组件属性
 */
// export async function getStaticProps() {
//   const resp = await getMovies(1, 20);
//   return {
//     props: {
//       movies: resp.data,
//     },
//   };
// }

/**
 * 每次请求到达后都会运行
 * 仅在服务器端运行
 * req, res, query
 */
export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const resp = await getMovies(query.page || 1, 10);
  return {
    props: {
      movies: resp.data,
      page,
      total: resp.count,
      limit: 10,
    },
  };
}
