import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

// 添加资源路径处理函数
const getAssetPath = (path) => {
  // 检查路径是否已经是绝对路径
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // 获取vite.config.js中配置的base路径
  const basePath = import.meta.env.BASE_URL || '/';
  
  // 确保路径以/开头但不重复
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // 组合basePath和normalizedPath
  return `${basePath.endsWith('/') ? basePath.slice(0, -1) : basePath}${normalizedPath}`;
};

const TrainingDiscounts = () => {
  const discountPrograms = [
    {
      id: 1,
      name: "小小艺术家绘画班",
      discount: "首课免费 + 报名立减100元",
      location: "3楼 C区 306",
      image: "儿童培训1.jpg"
    },
    {
      id: 2,
      name: "乐高创意工作室",
      discount: "新会员8折优惠",
      location: "4楼 A区 412",
      image: "儿童培训2.jpg"
    },
    {
      id: 3,
      name: "小小钢琴家",
      discount: "试课立减50元 + 赠送乐理教材",
      location: "5楼 B区 503",
      image: "儿童培训3.jpg"
    },
    {
      id: 4,
      name: "趣味英语俱乐部",
      discount: "买10节课送2节 + 免费测评",
      location: "3楼 D区 315",
      image: "儿童培训4.jpeg"
    },
    {
      id: 5,
      name: "儿童舞蹈中心",
      discount: "新生报名享85折 + 免费舞蹈服",
      location: "4楼 C区 428",
      image: "儿童培训5.jpg"
    },
    {
      id: 6,
      name: "儿童编程启蒙班",
      discount: "新生立减200元 + 免费体验课",
      location: "5楼 A区 512",
      image: "儿童培训6.jpg"
    },
    {
      id: 7,
      name: "迷你篮球训练营",
      discount: "报名即送训练服 + 专业球鞋7折",
      location: "1楼 B区 108",
      image: "儿童培训1.jpg"
    },
    {
      id: 8,
      name: "幼儿音乐启蒙课",
      discount: "买8节课送1节 + 音乐玩具",
      location: "2楼 C区 215",
      image: "儿童培训2.jpg"
    },
    {
      id: 9,
      name: "青少年书法班",
      discount: "特惠套餐6折 + 赠送文房四宝",
      location: "4楼 D区 401",
      image: "儿童培训3.jpg"
    },
    {
      id: 10,
      name: "儿童心理辅导中心",
      discount: "首次咨询半价 + 免费亲子测评",
      location: "6楼 E区 603",
      image: "儿童培训4.jpeg"
    }
  ];

  const handleCardClick = (program) => {
    // 处理卡片点击，查看详情
    console.log("查看详情:", program);
  };

  const handleBooking = (e, program) => {
    e.stopPropagation(); // 阻止事件冒泡到卡片
    // 处理预约按钮点击
    console.log("立即预约:", program);
  };

  // 定义隐藏滚动条的样式
  const noScrollbarStyle = {
    scrollbarWidth: 'none',  /* Firefox */
    msOverflowStyle: 'none',  /* IE and Edge */
  };

  // 创建隐藏Webkit滚动条的CSS样式
  const hideScrollbarCSS = `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 添加隐藏滚动条的CSS */}
      <style>{hideScrollbarCSS}</style>
      
      {/* 固定宽度内容容器 */}
      <div 
        className="w-[375px] h-[812px] relative bg-[#F5F5F5] overflow-y-auto overflow-x-hidden no-scrollbar" 
        style={noScrollbarStyle}
      >
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm sticky top-0 z-10">
        <Link to="/home">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">儿童培训机构优惠</h1>
      </div>

      {/* 优惠列表 - 添加额外的底部内边距，为底部聊天输入框腾出空间 */}
      <div className="px-3 py-4 pb-20">
        <div className="grid grid-cols-2 gap-2">
          {discountPrograms.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer transform transition-transform hover:transform-none hover:scale-100"
              onClick={() => handleCardClick(program)}
            >
              <div className="aspect-square w-full">
                <img 
                  src={getAssetPath(program.image)} 
                  alt={program.name} 
                  className="mx-auto object-cover w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-[#111111] line-clamp-1">{program.name}</h3>
                <p className="text-[#FF2D19] text-[12px] mt-1.5 mb-1 line-clamp-2">{program.discount}</p>
                <p className="text-[#999999] text-[12px] mb-2">位置: {program.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部聊天输入框 */}
      <ChatInput />
      </div>
    </div>
  );
};

export default TrainingDiscounts;
