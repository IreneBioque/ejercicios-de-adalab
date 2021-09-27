const Button = (props) => {
  const handleChangeButton = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <>
      <button className={props.ButtonClass} onClick={handleChangeButton}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
