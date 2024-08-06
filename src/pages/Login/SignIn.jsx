import { useContext } from "react";
import TwitterLogo from "../../assets/images/twitter-logo.svg";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function SignIn() {
  const { setToken } = useContext(Context);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };
    if (data.login == "saidkomil" && data.password == "123") {
      setToken(data);
      e.target.reset();
    } else {
      <Toaster />;
      toast.error("Incorrect username or password");
    }
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmitLogin} className="w-[450px] flex flex-col ">
        <a href="/" className="block mb-[36px]">
          <img src={TwitterLogo} width={50} height={41} alt="logo" />
        </a>
        <h2 className="font-black text-[42px] leading-[49px] mb-[36px]">
          Log in to Twitter
        </h2>
        <input
          required
          type="text"
          autoComplete="off"
          name="login"
          placeholder="Phone number, email address"
          className="placeholder:text-[18px] leading-[23px] placeholder:text-[#00000099] py-[23px] w-[450px] pl-[20px] mb-[25px] border-[1px] border-[#00000033] rounded-[6px] outline-none text-[18px] focus:border-[#1DA1F2] duration-300"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          className="placeholder:text-[18px] leading-[23px] placeholder:text-[#00000099] py-[23px] w-[450px] pl-[20px] mb-[25px] border-[1px] border-[#00000033] rounded-[6px] outline-none text-[18px] focus:border-[#1DA1F2] duration-300"
        />
        <button className="w-[100%] bg-[#1DA1F2] border-[3px] hover:text-[#1DA1F2] hover:bg-white border-[#1DA1F2] duration-300 border-transparent rounded-[76px] py-[16px] text-center text-[18px] font-bold leading-[23px] text-white mb-[40px]">
          Log In
        </button>
        <div className="flex justify-between">
          <Link
            to={"/sign-up"}
            className="text-[18px] leading-[23px] text-[#1DA1F2]"
          >
            Forgot password?
          </Link>
          <Link
            to={"/sign-up"}
            className="text-[18px] leading-[23px] text-[#1DA1F2]"
          >
            Sign up to Twitter
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
