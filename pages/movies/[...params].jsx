export default ({ router }) => {
  console.log(router);
  return (
    <div>
      <h2>多段动态路由 router: {(router.query.params || []).join('/')}</h2>
    </div>
  );
};
