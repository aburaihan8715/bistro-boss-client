const Button = (props) => {
  return (
    <button {...props} className={`border-0 border-b-2 btn btn-outline ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
