import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { login } from '../store/actions/login';

function mapDispatch(dispatch) {
  return {
    async onSubmit(data) {
      return await dispatch(login(data.loginId, data.loginPwd));
    },
  };
}
export default connect(null, mapDispatch)(LoginForm);
