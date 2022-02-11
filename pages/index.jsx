import Head from 'next/head';
import { useEffect, useState } from 'react';

export default () => {
  console.log('index render');
  const [advs, setAdvs] = useState([]);
  useEffect(() => {
    console.log('加载广告数据');
    setAdvs([
      { link: 'https://www.baidu.com/', name: '百度' },
      { link: 'https://www.sina.com.cn/', name: '新浪' },
      { link: 'https://www.douyin.com/', name: '抖音' },
      { link: 'https://duyiedu.com/', name: '渡一' },
    ]);
  }, []);

  return (
    <div>
      <Head>
        <title>首页</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Index 首页 {Math.random()}</h1>
      <ul>
        {advs.map((adv, index) => {
          return (
            <li key={index}>
              <a href={adv.link} target="_blank">
                {adv.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
