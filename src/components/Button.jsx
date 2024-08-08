function Button({title, extraStyle}) {
  return (
    <button className={`bg-[#1DA1F2] border-[3px] hover:text-[#1DA1F2] hover:bg-white hover:border-[#1DA1F2] duration-300 border-transparent rounded-[76px] py-[16px] text-center text-[18px] font-bold leading-[23px] text-white ${extraStyle}`}>
      {title}
    </button>
  );
}

export default Button;
