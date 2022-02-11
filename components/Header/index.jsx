import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import { connect } from 'react-redux';
import { loginOut } from '../../store/actions/login';

const Header = ({ loginUser, loginOut }) => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="windy logo" />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>首页</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/page1">
            <a>Page1</a>
          </Link>
        </li> */}
        <li>
          <Link href="/movies">
            <a>电影</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/movies/[id]" as="/movies/3">
            <a>电影详情页</a>
          </Link>
        </li> */}
        <li>
          <Link href="/redux">
            <a>redux测试</a>
          </Link>
        </li>
        <li>
          <Link href="/private">
            <a>私有页面</a>
          </Link>
        </li>
        {loginUser ? (
          <li>
            <span>{loginUser.name}</span>
            <button
              onClick={() => {
                loginOut && loginOut();
                alert('注销成功');
                router.push('/login');
              }}
            >
              注销
            </button>
          </li>
        ) : (
          <li>
            <Link href="/login">
              <a>登录</a>
            </Link>
          </li>
        )}
        <li>
          <button
            onClick={() => {
              router.push('/movies/[...params]', '/movies/a/b/c');
            }}
          >
            跳转到[...params].jsx
          </button>
        </li>
      </ul>
    </div>
  );
};

function mapState(state) {
  return {
    loginUser: state.loginUser,
  };
}

function mapDispatch(dispatch) {
  return {
    loginOut() {
      dispatch(loginOut());
    },
  };
}

export default connect(mapState, mapDispatch)(Header);
