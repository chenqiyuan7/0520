import { useState } from "react";
import { ChevronLeft, Tag, Calendar, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const EntertainmentPackages = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", name: "全部套票" },
    { id: "family", name: "家庭套票" },
    { id: "food", name: "美食套票" },
    { id: "movie", name: "电影套票" },
    { id: "play", name: "游玩套票" }
  ];
  
  const packages = [
    {
      id: 1,
      name: "欢乐家庭日",
      type: "family",
      description: "一日游套票，包含4个游乐项目、2份儿童餐和1次亲子活动",
      originalPrice: 398,
      discountPrice: 298,
      validPeriod: "购买后30天内有效",
      peopleCount: "2大1小",
      image: "/游乐园.jpg"
    },
    {
      id: 2,
      name: "亲子美食之旅",
      type: "food",
      description: "3家知名亲子餐厅套餐，含主食、饮品和甜点",
      originalPrice: 268,
      discountPrice: 198,
      validPeriod: "购买后60天内有效",
      peopleCount: "2大1小",
      image: "https://nocode.meituan.com/photo/search?keyword=family,dining&width=300&height=200"
    },
    {
      id: 3,
      name: "电影欢乐套",
      type: "movie",
      description: "2张成人电影票、1张儿童票，含爆米花和饮料",
      originalPrice: 168,
      discountPrice: 128,
      validPeriod: "购买后90天内有效",
      peopleCount: "2大1小",
      image: "https://nocode.meituan.com/photo/search?keyword=movie,family&width=300&height=200"
    },
    {
      id: 4,
      name: "水上乐园套票",
      type: "play",
      description: "室内水上乐园全天票，含午餐和纪念品",
      originalPrice: 328,
      discountPrice: 258,
      validPeriod: "购买后45天内有效",
      peopleCount: "2大1小",
      image: "https://nocode.meituan.com/photo/search?keyword=water,park,family&width=300&height=200"
    },
    {
      id: 5,
      name: "科学探索套票",
      type: "play",
      description: "科学馆门票+2次互动实验体验+科普礼品",
      originalPrice: 248,
      discountPrice: 188,
      validPeriod: "购买后60天内有效",
      peopleCount: "2大1小",
      image: "https://nocode.meituan.com/photo/search?keyword=science,museum,kids&width=300&height=200"
    },
    {
      id: 6,
      name: "全家欢乐周末",
      type: "family",
      description: "周末两日游套票，包含多个游乐项目和餐饮",
      originalPrice: 598,
      discountPrice: 458,
      validPeriod: "仅限周末使用，购买后60天内有效",
      peopleCount: "2大2小",
      image: "https://nocode.meituan.com/photo/search?keyword=weekend,family,fun&width=300&height=200"
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    return activeFilter === "all" || pkg.type === activeFilter;
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
        <h1 className="text-lg font-bold">吃喝玩乐套票</h1>
      </div>
      
      {/* 为固定导航栏添加空白填充 */}
      <div className="h-[60px]"></div>

      {/* 筛选选项 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto no-scrollbar" style={noScrollbarStyle}>
          {filters.map((filter) => (
            <button 
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeFilter === filter.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* 套票列表 */}
      <div className="p-4">
        <div className="space-y-4">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="mx-auto object-cover w-full h-48"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg">
                  {Math.round((1 - pkg.discountPrice / pkg.originalPrice) * 100)}% OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{pkg.name}</h3>
                <p className="text-gray-600 mt-1">{pkg.description}</p>
                
                <div className="mt-3 flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <div className="flex items-center">
                    <span className="text-gray-500 line-through mr-2">¥{pkg.originalPrice}</span>
                    <span className="text-red-500 font-bold text-lg">¥{pkg.discountPrice}</span>
                  </div>
                </div>
                
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">有效期: {pkg.validPeriod}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">适用人数: {pkg.peopleCount}</span>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    查看详情
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
                    立即购买
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredPackages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">没有找到匹配的套票</p>
            </div>
          )}
        </div>
      </div>

      {/* 底部提示 */}
        <div className="fixed bottom-16 left-0 right-0 mx-auto max-w-[375px] bg-white p-4 shadow-lg text-center">
        <p className="text-sm text-gray-600">套票详情请以购买页面为准，部分套票需提前预约</p>
      </div>

      {/* 底部聊天输入框 */}
      <ChatInput />
      </div>
    </div>
  );
};

export default EntertainmentPackages;
