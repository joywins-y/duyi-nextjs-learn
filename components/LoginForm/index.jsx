import { useState } from 'react';
import { useRouter } from 'next/router';

export default ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    loginId: '',
    loginPwd: '',
  });
  const router = useRouter();
  return (
    <div>
      <h1>登录页面</h1>
      <p>
        <span>账号：</span>
        <input
          type="text"
          value={formData.loginId}
          onChange={(e) => {
            setFormData({
              ...formData,
              loginId: e.target.value,
            });
          }}
        />
      </p>
      <p>
        <span>密码：</span>
        <input
          type="password"
          value={formData.loginPwd}
          onChange={(e) => {
            setFormData({
              ...formData,
              loginPwd: e.target.value,
            });
          }}
        />
      </p>
      <p>
        <button
          onClick={async () => {
            if (onSubmit) {
              const result = await onSubmit(formData);
              if (result) {
                router.push('/');
              } else {
                alert('登录失败，请检查账号或密码');
              }
            }
          }}
        >
          登录
        </button>
      </p>
    </div>
  );
};
