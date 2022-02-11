import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/login';

const Comp = ({ whoAmI }) => {
  useEffect(() => {
    whoAmI && whoAmI();
  }, []);
  return <div></div>;
};

function mapDispatch(dispatch) {
  return {
    whoAmI() {
      dispatch(actions.whoAmI());
    },
  };
}

export default connect(null, mapDispatch)(Comp);
