import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/counter';
import makeStore from "../store";

function Page({ number, increase, decrease, asyncIncrease, asyncDecrease }) {
  useEffect(() => {
    asyncIncrease && asyncIncrease();
  }, [asyncIncrease]);
  return (
    <div>
      <h1>{number}</h1>
      <p>
        <button onClick={asyncDecrease}>异步减</button>
        <button onClick={decrease}>减</button>
        <button onClick={increase}>加</button>
        <button onClick={asyncIncrease}>异步加</button>
      </p>
    </div>
  );
}

function mapState(state) {
  return {
    number: state.counter,
  };
}

function mapDispatch(dispatch) {
  return {
    increase() {
      dispatch(actions.increase());
    },
    decrease() {
      dispatch(actions.decrease());
    },
    asyncIncrease() {
      dispatch(actions.asyncIncrease());
    },
    asyncDecrease() {
      dispatch(actions.asyncDecrease());
    },
  };
}

// export default connect(mapState, mapDispatch)(Page);

const Wrapper = connect(mapState, mapDispatch)(Page);

export default Wrapper;

/**
 * getServerSideProps
 * 向仓库中添加一些数据
 * 服务端仓库使用流程：
 * 页面组件渲染前
 * 1. 新建一个无状态仓库
 * 2. 触发action改动仓库
 * 3. 返回一个特殊的属性，将该仓库的数据返回
 * 4. 服务器_app运行，使用默认值创建仓库
 */
export async function getServerSideProps() {
  const store = makeStore();
  await store.dispatch(actions.asyncIncrease());
  // 仓库有数据了
  return {
    props: {
      _initialState: store.getState(),
    },
  };
}
