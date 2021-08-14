import "./TodoTemplate.scss";

const TodoTemplate = (obj) => {
  console.log(obj);
  return (
    <>
      <div className="TodoTemplate">
        <div className="app-title">일정 관리</div>
        <div className="content">{obj.children}</div>
      </div>
    </>
  );
};

export default TodoTemplate;
