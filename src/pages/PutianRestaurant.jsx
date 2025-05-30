import { useState } from "react";
import { ChevronLeft, MapPin, Clock, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const PutianRestaurant = () => {
  const navigate = useNavigate();
  
  const store = {
    name: "莆田餐厅PUTIEN(颐提港店)",
    openHours: "11:00-22:00",
    address: "朝阳区酒仙桥路颐提港三层L3-36",
    tags: ["儿童餐具", "宝宝椅", "有露天位"],
    image: "https://nocode.meituan.com/photo/search?keyword=putien,restaurant&width=400&height=300"
  };

  const packages = [
    {
      id: 1,
      name: "莆田经典双人餐",
      price: 196,
      originalPrice: 288,
      image: "https://nocode.meituan.com/photo/search?keyword=putien,food,set&width=200&height=200"
    },
    {
      id: 2,
      name: "海鲜四人家庭餐",
      price: 398,
      originalPrice: 528,
      image: "https://nocode.meituan.com/photo/search?keyword=seafood,chinese&width=200&height=200"
    }
  ];

  const vouchers = [
    {
      id: 1,
      price: 97,
      value: 100,
      description: "周一至周日全天可用"
    },
    {
      id: 2,
      price: 194,
      value: 200,
      description: "周一至周日全天可用"
    }
  ];

  const recommendedDishes = [
    {
      id: 1,
      name: "TOP1",
      image: "https://nocode.meituan.com/photo/search?keyword=putien,dish,1&width=200&height=200"
    },
    {
      id: 2,
      name: "TOP2",
      image: "https://nocode.meituan.com/photo/search?keyword=putien,dish,2&width=200&height=200"
    },
    {
      id: 3,
      name: "TOP3",
      image: "https://nocode.meituan.com/photo/search?keyword=putien,dish,3&width=200&height=200"
    }
  ];

  const handleBack = () => {
    navigate('/southern-cuisine-discounts');
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
        {/* 顶部导航栏 - 固定在顶部 */}
        <div className="bg-white p-4 flex items-center fixed top-0 w-[375px] z-10 shadow-sm">
          <button onClick={handleBack}>
            <ChevronLeft className="h-6 w-6 mr-2" />
          </button>
          <h1 className="text-lg">AI帮你找</h1>
        </div>
        
        {/* 为固定导航栏添加空白填充 */}
        <div className="h-[60px]"></div>

        {/* 店铺信息 */}
        <div className="relative">
          <img 
            src={store.image}
            alt={store.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-bold">{store.name}</h2>
            <div className="mt-2 flex items-center text-green-500">
              <span>营业中</span>
              <span className="ml-2">{store.openHours}</span>
            </div>
            <p className="mt-1 text-gray-600">{store.address}</p>
            <div className="mt-2 flex gap-2">
              {store.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 功能按钮 */}
        <div className="grid grid-cols-4 bg-white mt-2 p-4">
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-1">
              <img src="https://nocode.meituan.com/photo/search?keyword=booking,icon&width=40&height=40" alt="预定" className="w-6 h-6" />
            </div>
            <span className="text-sm">预定</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-1">
              <img src="https://nocode.meituan.com/photo/search?keyword=queue,icon&width=40&height=40" alt="排队" className="w-6 h-6" />
            </div>
            <span className="text-sm">排队</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-1">
              <img src="https://nocode.meituan.com/photo/search?keyword=delivery,icon&width=40&height=40" alt="外卖" className="w-6 h-6" />
            </div>
            <span className="text-sm">外卖</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-1">
              <img src="https://nocode.meituan.com/photo/search?keyword=phone,icon&width=40&height=40" alt="电话" className="w-6 h-6" />
            </div>
            <span className="text-sm">电话</span>
          </button>
        </div>

        {/* 导航区域 */}
        <div className="bg-white mt-2 p-4">
          <div className="flex items-center justify-between bg-cyan-50 p-4 rounded-lg">
            <div>
              <h3 className="font-medium">找店路线规划</h3>
              <p className="text-sm text-gray-500 mt-1">为你提供AR路线导航</p>
            </div>
            <div className="flex-1 ml-4">
              <img 
                src="https://nocode.meituan.com/photo/search?keyword=map,route&width=200&height=100" 
                alt="路线图"
                className="w-full h-12 object-cover rounded"
              />
            </div>
            <span className="text-cyan-500 ml-2">导航&gt;</span>
          </div>
        </div>

        {/* 套餐和代金券 */}
        <div className="bg-white mt-2 p-4">
          <div className="grid grid-cols-2 gap-4">
            {/* 到店套餐 */}
            <div className="bg-cyan-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">到店套餐</h3>
                <span className="text-sm text-gray-500">共6款&gt;</span>
              </div>
              <div className="space-y-3">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="flex items-center bg-white p-2 rounded">
                    <img 
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-16 h-16 object-cover rounded mr-2"
                    />
                    <div>
                      <div className="text-sm">{pkg.name}</div>
                      <div className="flex items-center mt-1">
                        <span className="text-red-500 font-medium">¥{pkg.price}</span>
                        <span className="text-gray-400 text-xs line-through ml-2">¥{pkg.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 超值代金券 */}
            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">超值代金券</h3>
                <span className="text-sm text-gray-500">共4款&gt;</span>
              </div>
              <div className="space-y-3">
                {vouchers.map((voucher) => (
                  <div key={voucher.id} className="bg-white p-2 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-baseline">
                          <span className="text-red-500 text-lg">¥{voucher.price}</span>
                          <span className="text-gray-500 text-xs ml-1">代{voucher.value}</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">{voucher.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 网友推荐菜 */}
        <div className="bg-white mt-2 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">网友推荐菜</h3>
            <span className="text-sm text-gray-500">查看全部&gt;</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {recommendedDishes.map((dish) => (
              <div key={dish.id} className="relative">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-24 rounded object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {dish.name}
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

export default PutianRestaurant;
