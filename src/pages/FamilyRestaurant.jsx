import { useState } from "react";
import { ChevronLeft, Star, MapPin, Clock, Users } from "lucide-react";
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

const FamilyRestaurant = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "全部" },
    { id: "chinese", name: "中餐" },
    { id: "western", name: "西餐" },
    { id: "japanese", name: "日料" },
    { id: "dessert", name: "甜品" }
  ];

  const restaurants = [
    {
      id: 1,
      name: "童趣主题餐厅",
      cuisine: "western",
      rating: 4.8,
      priceRange: "¥128/人",
      waitTime: "15分钟",
      features: ["儿童游乐区", "主题派对", "儿童餐具"],
      address: "4楼 B区 412",
      image: "餐厅1.jpg",
      packages: ["¥198 <s>¥238</s> 亲子双人套餐", "¥288 <s>¥328</s> 生日派对套餐"]
    },
    {
      id: 2,
      name: "海洋世界餐厅",
      cuisine: "japanese",
      rating: 4.6,
      priceRange: "¥168/人",
      waitTime: "30分钟",
      features: ["海洋主题", "互动体验", "寿司体验"],
      address: "3楼 A区 305",
      image: "餐厅2.jpg",
      packages: ["¥258 <s>¥298</s> 海鲜双人套餐", "¥88 <s>¥108</s> 儿童套餐"]
    },
    {
      id: 3,
      name: "小厨师成长馆",
      cuisine: "chinese",
      rating: 4.7,
      priceRange: "¥98/人",
      waitTime: "20分钟",
      features: ["DIY美食", "厨艺课堂", "亲子互动"],
      address: "5楼 C区 508",
      image: "餐厅3.jpeg",
      packages: ["¥168 <s>¥198</s> 小厨师体验套餐", "¥328 <s>¥398</s> 家庭聚餐套餐"]
    },
    {
      id: 4,
      name: "甜心糖果屋",
      cuisine: "dessert",
      rating: 4.9,
      priceRange: "¥68/人",
      waitTime: "10分钟",
      features: ["甜品DIY", "生日派对", "下午茶"],
      address: "2楼 D区 203",
      image: "餐厅5.jpeg",
      packages: ["¥138 <s>¥158</s> 下午茶套餐", "¥168 <s>¥188</s> 甜品DIY套餐"]
    },
    {
      id: 5,
      name: "农场体验餐厅",
      cuisine: "western",
      rating: 4.5,
      priceRange: "¥118/人",
      waitTime: "25分钟",
      features: ["农场体验", "有机食材", "亲子互动"],
      address: "1楼 G区 108",
      image: "餐厅4.jpeg",
      packages: ["¥198 <s>¥228</s> 田园亲子套餐", "¥238 <s>¥268</s> 农场采摘套餐"]
    },
    {
      id: 6,
      name: "恐龙世界餐厅",
      cuisine: "chinese",
      rating: 4.7,
      priceRange: "¥138/人",
      waitTime: "20分钟",
      features: ["恐龙主题", "科普教育", "儿童套餐"],
      address: "3楼 H区 325",
      image: "餐厅6.png",
      packages: ["¥188 <s>¥218</s> 探索者套餐", "¥268 <s>¥298</s> 恐龙主题套餐"]
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    return activeFilter === "all" || restaurant.cuisine === activeFilter;
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
    
    .discount-price {
      color: #999999;
      text-decoration: line-through;
      text-decoration-color: #999999;
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
          <h1 className="text-lg font-bold">亲子餐厅</h1>
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

        {/* 餐厅列表 */}
        <div className="px-3 pt-0 pb-3">
          <div className="space-y-2">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex p-3">
                <div className="w-[88px]">
                  <div className="h-[88px] w-[88px]">
                    <img 
                      src={getAssetPath(restaurant.image)} 
                      alt={restaurant.name} 
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base text-left">{restaurant.name}</h3>
                    <div className="text-xs text-orange-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>等待{restaurant.waitTime}</span>
                    </div>
                  </div>
                  
                  <div className="mt-1 flex items-center text-xs text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-0.5" fill={restaurant.rating >= 1 ? "#FF7700" : "none"} stroke={restaurant.rating >= 1 ? "#FF7700" : "#f5f5f5"} />
                      <Star className="h-3 w-3 mr-0.5" fill={restaurant.rating >= 2 ? "#FF7700" : "none"} stroke={restaurant.rating >= 2 ? "#FF7700" : "#f5f5f5"} />
                      <Star className="h-3 w-3 mr-0.5" fill={restaurant.rating >= 3 ? "#FF7700" : "none"} stroke={restaurant.rating >= 3 ? "#FF7700" : "#f5f5f5"} />
                      <Star className="h-3 w-3 mr-0.5" fill={restaurant.rating >= 4 ? "#FF7700" : "none"} stroke={restaurant.rating >= 4 ? "#FF7700" : "#f5f5f5"} />
                      <div className="relative h-3 w-3 mr-1">
                        {/* 基础灰色星星 */}
                        <Star className="h-3 w-3 absolute top-0 left-0" fill="#f5f5f5" stroke="none" />
                        
                        {/* 满星 */}
                        {restaurant.rating >= 5 && (
                          <Star className="h-3 w-3 absolute top-0 left-0" fill="#FF7700" stroke="none" />
                        )}
                        
                        {/* 半星 */}
                        {restaurant.rating >= 4.5 && restaurant.rating < 5 && (
                          <div className="h-3 w-1.5 absolute top-0 left-0 overflow-hidden">
                            <Star className="h-3 w-3" fill="#FF7700" stroke="none" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-[#FF7700] font-bold mr-2">{restaurant.rating}</span>
                    </div>
                    <span>{restaurant.priceRange}</span>
                  </div>
                  
                  <div className="mt-1 flex items-center">
                    <span className="text-gray-500 text-xs text-left">地址:</span>
                    <span className="text-xs text-left ml-[6px]">{restaurant.address}</span>
                  </div>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    {restaurant.features.map((feature, index) => (
                      <span key={index} className="bg-[#FFF8F0] text-[#FF7700] text-xs px-1.5 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-2">
                    <div className="border-t border-gray-100 pt-2">
                      <p className="text-xs flex items-center">
                        <img src="/优惠logo@2x.png" alt="优惠" className="w-4 h-4 mr-1" />
                        {restaurant.packages[0].split(' ').map((part, index) => {
                          if (index === 0) {
                            // 第一部分是价格
                            return <span key={index} className="text-[#FF2D19] font-bold">{part}</span>;
                          } else if (part.startsWith('<s>') && part.endsWith('</s>')) {
                            // 第二部分是划线价格
                            const price = part.replace('<s>', '').replace('</s>', '');
                            return <span key={index} className="text-[#999999] font-normal mx-1" style={{ textDecoration: 'line-through' }}>{price}</span>;
                          } else {
                            // 第三部分是套餐名称
                            return <span key={index} className="text-[#111111] ml-1">{part}</span>;
                          }
                        })}
                      </p>
                      <p className="text-xs flex items-center mt-2">
                        <img src="/优惠logo@2x.png" alt="优惠" className="w-4 h-4 mr-1" />
                        {restaurant.packages[1].split(' ').map((part, index) => {
                          if (index === 0) {
                            // 第一部分是价格
                            return <span key={index} className="text-[#FF2D19] font-bold">{part}</span>;
                          } else if (part.startsWith('<s>') && part.endsWith('</s>')) {
                            // 第二部分是划线价格
                            const price = part.replace('<s>', '').replace('</s>', '');
                            return <span key={index} className="text-[#999999] font-normal mx-1" style={{ textDecoration: 'line-through' }}>{price}</span>;
                          } else {
                            // 第三部分是套餐名称
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

export default FamilyRestaurant;
