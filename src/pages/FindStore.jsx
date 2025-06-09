import { useState } from "react";
import { ChevronLeft, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
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

const FindStore = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "全部" },
    { id: "clothing", name: "童装" },
    { id: "toys", name: "玩具" },
    { id: "food", name: "美食" },
    { id: "education", name: "教育" },
    { id: "entertainment", name: "娱乐" }
  ];
  
  const stores = [
    {
      id: 1,
      name: "童趣乐园",
      category: "toys",
      description: "各类儿童玩具、益智游戏和户外玩具",
      location: "3楼 B区 306",
      phone: "400-123-4567",
      openHours: "10:00-22:00",
      image: "找店铺1.jpeg"
    },
    {
      id: 2,
      name: "小小衣橱",
      category: "clothing",
      description: "儿童时尚服装、鞋帽和配饰",
      location: "2楼 A区 215",
      phone: "400-123-4568",
      openHours: "10:00-22:00",
      image: "找店铺2.jpg"
    },
    {
      id: 3,
      name: "甜心糖果屋",
      category: "food",
      description: "各类儿童零食、糖果和健康小吃",
      location: "1楼 C区 112",
      phone: "400-123-4569",
      openHours: "09:00-21:00",
      image: "找店铺3.jpeg"
    },
    {
      id: 4,
      name: "智慧树教育",
      category: "education",
      description: "儿童早教、课外辅导和兴趣培养",
      location: "4楼 D区 405",
      phone: "400-123-4570",
      openHours: "09:00-20:00",
      image: "找店铺4.jpg"
    },
    {
      id: 5,
      name: "欢乐时光",
      category: "entertainment",
      description: "儿童游乐设施、互动游戏和亲子活动",
      location: "5楼 E区 512",
      phone: "400-123-4571",
      openHours: "10:00-22:00",
      image: "找店铺5.jpeg"
    },
    {
      id: 6,
      name: "童话书屋",
      category: "education",
      description: "儿童图书、绘本和教育读物",
      location: "3楼 C区 325",
      phone: "400-123-4572",
      openHours: "10:00-21:00",
      image: "找店铺6.jpeg"
    }
  ];

  const filteredStores = stores.filter(store => {
    return activeCategory === "all" || store.category === activeCategory;
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
        <h1 className="text-lg font-bold">找店铺</h1>
      </div>
      
      {/* 为固定导航栏添加空白填充 */}
      <div className="h-[60px]"></div>

      {/* 分类选项 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto no-scrollbar" style={noScrollbarStyle}>
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* 店铺列表 */}
      <div className="p-4">
        <div className="space-y-4">
          {filteredStores.map((store) => (
            <div key={store.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={getAssetPath(store.image)} 
                alt={store.name} 
                className="mx-auto object-cover w-full h-40"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{store.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {categories.find(c => c.id === store.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 mt-1">{store.description}</p>
                
                <div className="flex items-center mt-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">位置: {store.location}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Phone className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">电话: {store.phone}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">营业时间: {store.openHours}</span>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                    查看详情 <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                    导航前往
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredStores.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">没有找到匹配的店铺</p>
            </div>
          )}
        </div>
      </div>

      {/* 底部聊天输入框 */}
      <ChatInput />
      </div>
    </div>
  );
};

export default FindStore;
