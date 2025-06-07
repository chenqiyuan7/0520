import { useState } from "react";
import { ChevronLeft, Clock, Star } from "lucide-react";
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

const InteractiveExhibition = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const exhibitions = [
    {
      id: 1,
      title: "奇幻海洋世界",
      description: "沉浸式海洋生物互动展览",
      location: "4楼 展厅A",
      time: "10:00-20:00",
      price: "88元/人",
      image: "展览1.jpg",
      waitTime: "15分钟",
      rating: 4.8,
      features: ["互动体验", "科普教育", "适合亲子"],
      packages: [
        "88元 <s>108元</s> 单人票",
        "158元 <s>198元</s> 亲子票"
      ]
    },
    {
      id: 2,
      title: "太空探险馆",
      description: "体验宇航员训练和太空科技",
      location: "5楼 展厅B",
      time: "09:30-19:30",
      price: "98元/人",
      image: "展览2.jpg",
      waitTime: "20分钟",
      rating: 4.9,
      features: ["VR体验", "科技互动", "科普教育"],
      packages: [
        "98元 <s>128元</s> 单人票",
        "178元 <s>228元</s> 亲子票"
      ]
    },
    {
      id: 3,
      title: "恐龙时代",
      description: "AR互动恐龙科普展",
      location: "3楼 展厅C",
      time: "10:00-19:00",
      price: "78元/人",
      image: "展览3.jpeg",
      waitTime: "10分钟",
      rating: 4.7,
      features: ["AR互动", "科普教育", "适合亲子"],
      packages: [
        "78元 <s>98元</s> 单人票",
        "138元 <s>178元</s> 亲子票"
      ]
    },
    {
      id: 4,
      title: "艺术光影馆",
      description: "沉浸式数字艺术光影体验",
      location: "2楼 展厅D",
      time: "10:30-20:30",
      price: "108元/人",
      image: "展览4.jpeg",
      waitTime: "25分钟",
      rating: 4.6,
      features: ["光影艺术", "沉浸体验", "适合拍照"],
      packages: [
        "108元 <s>138元</s> 单人票",
        "198元 <s>258元</s> 亲子票"
      ]
    },
    {
      id: 5,
      title: "科技未来馆",
      description: "前沿科技互动体验展",
      location: "6楼 展厅E",
      time: "09:00-18:00",
      price: "128元/人",
      image: "展览5.jpg",
      waitTime: "30分钟",
      rating: 4.9,
      features: ["科技互动", "未来体验", "适合亲子"],
      packages: [
        "128元 <s>158元</s> 单人票",
        "228元 <s>298元</s> 亲子票"
      ]
    }
  ];

  const filters = [
    { id: "all", name: "全部展览" },
    { id: "science", name: "科技互动" },
    { id: "art", name: "艺术展览" },
    { id: "nature", name: "自然探索" }
  ];

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
      {/* 顶部导航栏 - 固定在顶部 */}
      <div className="bg-white p-4 flex items-center shadow-sm fixed top-0 w-[375px] z-10">
        <Link to="/home">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">互动展览</h1>
      </div>
      
      {/* 为固定导航栏添加空白填充 */}
      <div className="h-[60px]"></div>

      {/* 筛选选项 */}
      <div className="py-3 px-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto no-scrollbar" style={noScrollbarStyle}>
          {filters.map((filter) => (
            <button 
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeFilter === filter.id ? 'bg-[#FFDD00] text-[#111111] font-bold' : 'bg-gray-100 text-[#555555]'}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* 展览列表 */}
      <div className="px-3 pt-0 pb-3">
        <div className="space-y-2">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex p-3">
              <div className="w-[88px]">
                <div className="h-[88px] w-[88px]">
                  <img 
                    src={getAssetPath(exhibition.image)} 
                    alt={exhibition.title} 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base text-left">{exhibition.title}</h3>
                  <div className="text-xs text-orange-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>等待{exhibition.waitTime}</span>
                  </div>
                </div>
                
                <div className="mt-1 flex items-center text-xs text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-0.5" fill={exhibition.rating >= 1 ? "#FF7700" : "none"} stroke={exhibition.rating >= 1 ? "#FF7700" : "#f5f5f5"} />
                    <Star className="h-3 w-3 mr-0.5" fill={exhibition.rating >= 2 ? "#FF7700" : "none"} stroke={exhibition.rating >= 2 ? "#FF7700" : "#f5f5f5"} />
                    <Star className="h-3 w-3 mr-0.5" fill={exhibition.rating >= 3 ? "#FF7700" : "none"} stroke={exhibition.rating >= 3 ? "#FF7700" : "#f5f5f5"} />
                    <Star className="h-3 w-3 mr-0.5" fill={exhibition.rating >= 4 ? "#FF7700" : "none"} stroke={exhibition.rating >= 4 ? "#FF7700" : "#f5f5f5"} />
                    <div className="relative h-3 w-3 mr-1">
                      <Star className="h-3 w-3 absolute top-0 left-0" fill="#f5f5f5" stroke="none" />
                      {exhibition.rating >= 5 && (
                        <Star className="h-3 w-3 absolute top-0 left-0" fill="#FF7700" stroke="none" />
                      )}
                      {exhibition.rating >= 4.5 && exhibition.rating < 5 && (
                        <div className="h-3 w-1.5 absolute top-0 left-0 overflow-hidden">
                          <Star className="h-3 w-3" fill="#FF7700" stroke="none" />
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-[#FF7700] font-bold mr-2">{exhibition.rating}</span>
                  </div>
                  <span>{exhibition.price}</span>
                </div>
                
                <div className="mt-1 flex items-center">
                  <span className="text-gray-500 text-xs text-left">地址:</span>
                  <span className="text-xs text-left ml-[6px]">{exhibition.location}</span>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-1">
                  {exhibition.features.map((feature, index) => (
                    <span key={index} className="bg-[#FFF8F0] text-[#FF7700] text-xs px-1.5 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-2">
                  <div className="border-t border-gray-100 pt-2">
                    <p className="text-xs flex items-center">
                      <img src="/优惠logo@2x.png" alt="优惠" className="w-4 h-4 mr-1" />
                      {exhibition.packages[0].split(' ').map((part, index) => {
                        if (index === 0) {
                          return <span key={index} className="text-[#FF2D19] font-bold">{part}</span>;
                        } else if (part.startsWith('<s>') && part.endsWith('</s>')) {
                          const price = part.replace('<s>', '').replace('</s>', '');
                          return <span key={index} className="text-[#999999] font-normal mx-1" style={{ textDecoration: 'line-through' }}>{price}</span>;
                        } else {
                          return <span key={index} className="text-[#111111] ml-1">{part}</span>;
                        }
                      })}
                    </p>
                    <p className="text-xs flex items-center mt-2">
                      <img src="/优惠logo@2x.png" alt="优惠" className="w-4 h-4 mr-1" />
                      {exhibition.packages[1].split(' ').map((part, index) => {
                        if (index === 0) {
                          return <span key={index} className="text-[#FF2D19] font-bold">{part}</span>;
                        } else if (part.startsWith('<s>') && part.endsWith('</s>')) {
                          const price = part.replace('<s>', '').replace('</s>', '');
                          return <span key={index} className="text-[#999999] font-normal mx-1" style={{ textDecoration: 'line-through' }}>{price}</span>;
                        } else {
                          return <span key={index} className="text-[#111111] ml-1">{part}</span>;
                        }
                      })}
                    </p>
                  </div>
                </div>
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

export default InteractiveExhibition;
