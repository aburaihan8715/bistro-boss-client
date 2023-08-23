const Button = (props) => {
  return (
    <button {...props} className={`border-0 border-b-2 btn btn-outline  ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;

// note: link button can not be reuseable because it carries data
// only simple button can be reusable. it also carries data but state manage tough
