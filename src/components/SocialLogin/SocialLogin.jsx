const SocialLogin = () => {
  return (
    <>
      <div className="flex gap-6 justify-center">
        <button className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/Y7nTmxp/facebook.png" />
          </div>
        </button>
        <button className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/72bXZqD/google.png" />
          </div>
        </button>

        <button className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/JHJ7PMt/github.png" />
          </div>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
