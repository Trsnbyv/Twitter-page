import { useState } from "react"
import {DarkModeIcon,ChooseImgICon,GifIcon,StatsIcon,ScheduleImg,SmileIcon,AvatarIcon,Designinsta,Cloutexhibition,CreativePhoto,KebabImg} from "../../assets/images/Icons"
import Button from "../../components/Button"
import PostItem from "../../components/PostItem"
function Home() {
   const [postList, setPostList]  = useState([
    {
        id:1,
        logo:Designinsta,
        username:'Designsta',
        email: '@inner · 25m',
        comment: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
        commentCount: "10",
        repostCount: "1",
        likeCount: "8",
        postImg:null
    },
    {
        id:2,
        logo:Cloutexhibition,
        username:'cloutexhibition',
        email: '@RajLahoti · 22m',
        comment: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
        commentCount: null,
        repostCount: "5",
        likeCount: "9",
        postImg:null
    },
    {
        id:3,
        logo:CreativePhoto,
        username:'CreativePhoto',
        email: '@cloutexhibition · 1h',
        comment: "Обетда..... Кечиринглар",
        commentCount: "10",
        repostCount: "1",
        likeCount: "8",
        postImg:KebabImg
    }
   ])
  return (
    <div className="w-[75%]">
      <div className="w-[70%] border-r-[1px] border-[#D8D8D8] overflow-y-auto h-[100vh]">
        <div className="p-[20px] flex items-center justify-between border-b-[1px] border-[#D8D8D8]">
          <h2 className="font-bold text-[24px] leading-[31px]">Home</h2>
          <button><img src={DarkModeIcon} alt="icon" width={24} height={24} /></button>
        </div>
        <div className="px-5 flex items-start gap-[15px] border-b-[1px] border-[#D8D8D8] mb-[20px] relative">
          <img src={AvatarIcon} width={60} height={60}  alt="avatar" />
          <div className="mt-[11px]  flex flex-col pb-[46px]">
            <input type="text" className="border-none outline-none text-[22px] mb-[51px] leading-[29px] text-[#828282] font-medium" placeholder="What’s happening" />
            <div className="flex gap-[20px]">
              <label>
                <img src={ChooseImgICon} alt="icon" />
                <input type="file" className="hidden" />
              </label>
              <label>
                <img src={GifIcon} alt="icon" />
                <input type="file" className="hidden" />
              </label>
              <label>
                <img src={StatsIcon} alt="icon" />
                <input type="file" className="hidden" />
              </label>
              <label>
                <img src={SmileIcon} alt="icon" />
                <input type="file" className="hidden" />
              </label>
              <label>
                <img src={ScheduleImg} alt="icon" />
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <Button title={'Tweet'} extraStyle={'absolute right-[18px] bottom-[5px] py-[16px] px-[30px] opacity-40'}/>
        </div>
        <ul>
          {postList.length > 0 && postList.map(item => <PostItem key={item.id} item={item}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Home
