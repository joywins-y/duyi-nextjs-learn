export default (props) => {
  console.log(props);
  return (
    <div>
      <h2>电影详情页 id: {props.router.query.id}</h2>
    </div>
  );
};
