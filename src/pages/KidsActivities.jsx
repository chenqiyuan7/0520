import React from "react";
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

const KidsActivities = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "全部活动" },
    { id: "indoor", name: "室内活动" },
    { id: "outdoor", name: "户外活动" },
    { id: "education", name: "教育活动" },
    { id: "art", name: "艺术活动" }
  ];

  const activities = [
    {
      id: 1,
      name: "趣味科学实验室",
      type: "indoor",
      description: "让孩子在实验中探索科学奥秘",
      time: "每天 10:00-18:00",
      location: "4楼 科教中心",
      ageRange: "6-12岁",
      price: "98元/人",
      image: "展览4.jpeg",
      waitTime: "5分钟",
      rating: 4.8,
      features: ["科学实验", "互动教学", "适合亲子"],
      packages: [
        "98元 <s>128元</s> 单人票",
        "178元 <s>228元</s> 亲子票"
      ]
    },
    {
      id: 2,
      name: "户外探险乐园",
      type: "outdoor",
      description: "安全有趣的户外探险活动",
      time: "每天 09:00-17:00",
      location: "6楼 空中花园",
      ageRange: "4-12岁",
      price: "68元/人",
      image: "展览1.jpg",
      waitTime: "10分钟",
      rating: 4.7,
      features: ["户外活动", "探险体验", "适合亲子"],
      packages: [
        "68元 <s>88元</s> 单人票",
        "128元 <s>168元</s> 亲子票"
      ]
    },
    {
      id: 3,
      name: "创意美术工作室",
      type: "art",
      description: "激发孩子的艺术创造力",
      time: "每天 10:00-19:00",
      location: "3楼 艺术中心",
      ageRange: "3-15岁",
      price: "128元/课时",
      image: "展览5.jpg",
      waitTime: "15分钟",
      rating: 4.9,
      features: ["艺术创作", "创意体验", "适合亲子"],
      packages: [
        "128元 <s>158元</s> 单人票",
        "228元 <s>298元</s> 亲子票"
      ]
    },
    {
      id: 4,
      name: "趣味编程课堂",
      type: "education",
      description: "寓教于乐的编程启蒙课程",
      time: "周末 10:00-16:00",
      location: "5楼 教育中心",
      ageRange: "7-14岁",
      price: "158元/课时",
      image: "展览3.jpeg",
      waitTime: "20分钟",
      rating: 4.8,
      features: ["编程教育", "互动教学", "适合亲子"],
      packages: [
        "158元 <s>198元</s> 单人票",
        "288元 <s>368元</s> 亲子票"
      ]
    },
    {
      id: 5,
      name: "亲子运动馆",
      type: "indoor",
      description: "促进亲子关系的互动体育活动",
      time: "每天 09:30-20:30",
      location: "2楼 运动中心",
      ageRange: "3-10岁",
      price: "88元/人",
      image: "展览2.jpg",
      waitTime: "8分钟",
      rating: 4.7,
      features: ["运动健身", "亲子互动", "适合亲子"],
      packages: [
        "88元 <s>108元</s> 单人票",
        "158元 <s>198元</s> 亲子票"
      ]
    }
  ];

  const filteredActivities = activities.filter(activity => {
    return activeFilter === "all" || activity.type === activeFilter;
  });

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
        <h1 className="text-lg font-bold">省心遛娃</h1>
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

      {/* 活动列表 */}
      <div className="px-3 pt-0 pb-3">
        <div className="space-y-2">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex p-3">
              <div className="w-[88px]">
                <div className="h-[88px] w-[88px]">
                  <img 
                    src={getAssetPath(activity.image)} 
                    alt={activity.name} 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base text-left">{activity.name}</h3>
                  <div className="text-xs text-orange-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>等待{activity.waitTime}</span>
                  </div>
                </div>
                
                <div className="mt-1 flex items-center text-xs text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-0.5" fill={activity.rating >= 1 ? "#FF7700" : "none"} stroke={activity.rating >= 1 ? "#FF7700" : "#f5f5f5"} />
                    <Star className="h-3 w-3 mr-0.5" fill={activity.rating >= 2 ? "#FF7700" : "none"} stroke={activity.rating >= 2 ? "#FF7700" : "#f5f5f5"} />
                    <Star className="h-3 w-3 mr-0.5" fill={activity.rating >= 3 ? "#FF7700" : "none"} stroke={activity.rating >= 3 ? "#FF7700" : "#f5f5f5"} />
                    <Star className="h-3 w-3 mr-0.5" fill={activity.rating >= 4 ? "#FF7700" : "none"} stroke={activity.rating >= 4 ? "#FF7700" : "#f5f5f5"} />
                    <div className="relative h-3 w-3 mr-1">
                      <Star className="h-3 w-3 absolute top-0 left-0" fill="#f5f5f5" stroke="none" />
                      {activity.rating >= 5 && (
                        <Star className="h-3 w-3 absolute top-0 left-0" fill="#FF7700" stroke="none" />
                      )}
                      {activity.rating >= 4.5 && activity.rating < 5 && (
                        <div className="h-3 w-1.5 absolute top-0 left-0 overflow-hidden">
                          <Star className="h-3 w-3" fill="#FF7700" stroke="none" />
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-[#FF7700] font-bold mr-2">{activity.rating}</span>
                  </div>
                  <span>{activity.price}</span>
                </div>
                
                <div className="mt-1 flex items-center">
                  <span className="text-gray-500 text-xs text-left">地址:</span>
                  <span className="text-xs text-left ml-[6px]">{activity.location}</span>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-1">
                  {activity.features.map((feature, index) => (
                    <span key={index} className="bg-[#FFF8F0] text-[#FF7700] text-xs px-1.5 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-2">
                  <div className="border-t border-gray-100 pt-2">
                    <p className="text-xs flex items-center">
                      <img src="/优惠logo@2x.png" alt="优惠" className="w-4 h-4 mr-1" />
                      {activity.packages[0].split(' ').map((part, index) => {
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
                      {activity.packages[1].split(' ').map((part, index) => {
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

export default KidsActivities;
