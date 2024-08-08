import {CommentIcon,LikeIcon,StatisticsIcon,UploadIcon,RepostIcon,DotsIcon} from "../assets/images/Icons"
function PostItem({item}) {
  return (
  <li className="flex relative gap-[15px] items-start pt-[10px] pb-[21px] border-b-[1px] border-[#D8D8D8] px-[25px]">
    <img src={item.logo} alt="img" width={60} height={60} />
    <div className="flex flex-col">
        <div className="flex gap-[5px]">
            <strong className="text-[20px] leading-[26px] font-bold">{item.username}</strong>
            <p className="text-[18px] leading-[23px] opacity-60">{item.email}</p>
        </div>
        <p className="ext-[18px] leading-[23px] mb-[22px]">{item.comment}</p>
        {item.postImg ? <img src={item.postImg} className="mb-[22px]" alt="Post Img" /> : ""}
        <div className="flex gap-[100px]">
            <div className="flex items-center gap-[10px]">
                <img src={CommentIcon} alt="icon" width={24} height={24}/>
                <span className="ext-[18px] leading-[23px] text-[#536471]">{item.commentCount}</span>
            </div>
            <div className="flex items-center gap-[10px]">
                <img src={RepostIcon} alt="icon" width={24} height={24}/>
                <span className="ext-[18px] leading-[23px] text-[#536471]">{item.repostCount}</span>
            </div>
            <div className="flex items-center gap-[10px]">
                <img src={LikeIcon} alt="icon" width={24} height={24}/>
                <span className="ext-[18px] leading-[23px] text-[#536471]">{item.likeCount}</span>
            </div>
            <img src={UploadIcon} alt="icon" width={24} height={24} />
            <img src={StatisticsIcon} alt="icon" width={24} height={24} />
        </div>
    </div>
    <button>
      <img src={DotsIcon} alt="dots" className="absolute top-[21px] right-[25px]" />
    </button>
  </li>
  )
}

export default PostItem
