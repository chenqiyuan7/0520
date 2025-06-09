import { useState, useEffect } from "react";
import { ChevronLeft, MessageSquare, User, X, ChevronDown, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ChatInput from "../components/ChatInput";
import SouthernCuisineDiscountsDrawer from "./SouthernCuisineDiscountsDrawer";
import SanqingtanRestaurantDrawer from "./SanqingtanRestaurant";

const Index = () => {
  const navigate = useNavigate();
  const [isOpenSouthernDiscountsDrawer, setIsOpenSouthernDiscountsDrawer] = useState(false);
  const [isOpenSanqingtanDrawer, setIsOpenSanqingtanDrawer] = useState(false);
  const [showHistoryBar, setShowHistoryBar] = useState(false);
  const [lastViewedTime, setLastViewedTime] = useState("刚刚");
  const [showSanqingtanHistoryBar, setShowSanqingtanHistoryBar] = useState(false);
  const [sanqingtanLastViewedTime, setSanqingtanLastViewedTime] = useState("刚刚");
  const [hasOpenedSouthernDrawer, setHasOpenedSouthernDrawer] = useState(false);
  const [hasOpenedSanqingtanDrawer, setHasOpenedSanqingtanDrawer] = useState(false);
  const [isSouthernClosing, setIsSouthernClosing] = useState(false);
  const [isSanqingtanClosing, setIsSanqingtanClosing] = useState(false);
  
  // 处理返回按钮点击事件
  const handleBackClick = () => {
    console.log("返回按钮被点击");
    navigate('/');
  };

  // 处理南方菜系优惠点击事件
  const handleSouthernCuisineClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpenSouthernDiscountsDrawer(true);
    setHasOpenedSouthernDrawer(true);
  };

  // 处理三清潭店铺点击事件
  const handleSanqingtanClick = () => {
    setIsOpenSanqingtanDrawer(true);
    setHasOpenedSanqingtanDrawer(true);
  };

  // 关闭三清潭店铺弹层
  const handleCloseSanqingtan = () => {
    setIsSanqingtanClosing(true);
    setTimeout(() => {
      setIsOpenSanqingtanDrawer(false);
      setIsSanqingtanClosing(false);
      if (hasOpenedSanqingtanDrawer) {
        setSanqingtanLastViewedTime("刚刚");
        setShowSanqingtanHistoryBar(true);
      }
    }, 300); // 等待动画完成
  };

  // 关闭南方菜系弹层
  const handleCloseSouthernCuisine = () => {
    setIsSouthernClosing(true);
    setTimeout(() => {
      setIsOpenSouthernDiscountsDrawer(false);
      setIsSouthernClosing(false);
      if (hasOpenedSouthernDrawer) {
        setLastViewedTime("刚刚");
        setShowHistoryBar(true);
      }
    }, 300); // 等待动画完成
  };

  // 当弹层打开时，临时隐藏历史记录栏，但不重置历史状态
  useEffect(() => {
    if (isOpenSouthernDiscountsDrawer || isOpenSanqingtanDrawer) {
      // 仅在弹层打开时暂时隐藏，但不重置showHistoryBar和showSanqingtanHistoryBar的值
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // 弹层关闭时，如果之前已经设置了hasOpened状态，则显示历史记录
      if (hasOpenedSouthernDrawer) {
        setShowHistoryBar(true);
      }
      if (hasOpenedSanqingtanDrawer) {
        setShowSanqingtanHistoryBar(true);
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenSouthernDiscountsDrawer, isOpenSanqingtanDrawer, hasOpenedSouthernDrawer, hasOpenedSanqingtanDrawer]);

  const popularQuestions = [
    {
      id: 1,
      question: "哪些儿童培训机构有羊毛可以薅？",
      count: "1890人问过",
      path: "/training-discounts"
    },
    {
      id: 2,
      question: "看看适合儿童的餐厅当前排队情况",
      count: "679人问过", 
      path: "/restaurant-queue"
    },
    {
      id: 3,
      question: "哪些南方菜店铺有优惠",
      count: "928人问过",
      path: "/southern-cuisine-discounts"
    }
  ];

  const hotTopics = [
    {
      id: 1,
      title: "互动展览",
      count: "243人问过",
      icon: "https://nocode.meituan.com/photo/search?keyword=interactive,exhibition&width=100&height=100",
      path: "/interactive-exhibition"
    },
    {
      id: 2,
      title: "亲子餐厅",
      count: "218人问过",
      icon: "https://nocode.meituan.com/photo/search?keyword=family,restaurant&width=100&height=100",
      path: "/family-restaurant"
    },
    {
      id: 3,
      title: "省心遛娃",
      count: "89人问过",
      icon: "https://nocode.meituan.com/photo/search?keyword=kids,play&width=100&height=100",
      path: "/kids-activities"
    }
  ];

  return (
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 固定宽度内容容器 */}
      <div className="w-[375px] h-[812px] relative bg-[#F5F5F5] overflow-y-auto overflow-x-hidden">
        {/* 背景图层 */}
        <div 
          className="absolute top-0 left-0 w-full h-[500px] bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(./bg@1x.png)'
          }}
        />
        
        {/* 内容层 - 确保在背景之上 */}
        <div className="relative z-1">
          {/* 顶部导航栏 */}
          <div className="flex justify-between items-center p-4">
            <div 
              className="w-8 h-8 flex items-center justify-center cursor-pointer z-2"
              onClick={handleBackClick}
            >
              <ChevronLeft className="h-6 w-6 text-black" />
            </div>
            <div className="relative">
              {/* 背景层 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[317px] h-[32px] rounded-[22px_0px_0px_22px] opacity-[0.548] border border-white"
                   style={{
                     background: 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6207) 100%)'
                   }}>
              </div>
              {/* 内容层 - 添加左边距 */}
              <div className="flex items-center relative z-2 pl-[4px]">
                <div className="flex -space-x-2 mr-2">
                  <div className="w-6 h-6 rounded-full border-0.5 border-white overflow-hidden">
                    <img src="./IndexAvatar1.png" alt="avatar1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-0.5 border-white overflow-hidden">
                    <img src="./IndexAvatar2.png" alt="avatar2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-0.5 border-white overflow-hidden">
                    <img src="./IndexAvatar3.png" alt="avatar3" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span 
                  style={{
                    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '11px',
                    fontWeight: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: '0px',
                    color: '#4C4C4C'
                  }}
                >
                  827,198人发起了提问
                </span>
              </div>
            </div>
          </div>

          {/* 智能助理及以下模块内容区域 - 上移60px */}
          <div className="mt-[-60px] pb-16">
            {/* 智能助理介绍区域 - 包含助理形象和介绍文字 */}
            <div className="flex items-center py-4 pl-0 pr-6 mb-[-30px] relative">
              {/* 助理形象容器 - 固定宽高比的图片容器 */}
              <div className="w-[107px] h-[149px] flex items-center justify-center">
                <img 
                  src="./艾小团x@2x.png" 
                  alt="艾小团" 
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="ml-[14px] relative top-[10px]">
                <h1 className="text-[20px] font-bold">我是你的智能助理</h1>
                <h2 className="text-[20px] font-bold">艾小团~</h2>
              </div>
            </div>

            {/* 问题和推荐列表区域 */}
            <div className="px-3 mt-0">
              {/* 大家都在问 */}
              <div className="bg-white rounded-[16px] pt-0 pl-0 pr-0 pb-3 mb-2">
                {/* 使用图片替代文字标题和胶囊背景 */}
                <div className="flex mb-1.5">
                  <img 
                    src="./大家都在问@2x.png" 
                    alt="大家都在问" 
                    className="h-[38px] object-contain"
                  />
                </div>
                
                {/* 热门问题列表容器 */}
                <div className="space-y-4 px-3">
                  {/* 遍历渲染每个热门问题项 */}
                  {popularQuestions.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      {/* 问题标题和提问数量 */}
                      <div>
                        <p className="text-[16px] font-medium">{item.question}</p>
                        <p style={{ color: '#858687', fontSize: '11px' }}>{item.count}</p>
                      </div>
                      {/* "问问"按钮,点击跳转到对应页面或打开底部弹层 */}
                      {item.id === 3 ? (
                        <div 
                          onClick={handleSouthernCuisineClick}
                          className="relative flex items-center justify-center px-4 rounded-full cursor-pointer"
                          style={{
                            backgroundImage: 'url(./butn.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#000000',
                            fontSize: '14px',
                            height: '28px',
                            fontWeight: '500'
                          }}
                        >
                          问问
                        </div>
                      ) : (
                        <Link 
                          to={item.path} 
                          className="relative flex items-center justify-center px-4 rounded-full"
                          style={{
                            backgroundImage: 'url(./butn.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#000000',
                            fontSize: '14px',
                            height: '28px',
                            fontWeight: '500'
                          }}
                        >
                          问问
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 热门问题 */}
              <div className="bg-white rounded-[16px] pt-0 pl-0 pr-0 pb-3 mb-2">
                {/* 使用图片替代文字标题和胶囊背景 */}
                <div className="flex mb-1.5">
                  <img 
                    src="./热门问题@2x.png" 
                    alt="热门问题" 
                    className="h-[38px] object-contain"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-1.5 px-3">
                  {hotTopics.map((topic, index) => (
                    <Link to={topic.path} key={topic.id} className="text-left">
                      <div className="bg-gray-50 p-2 rounded-lg h-[86px] flex flex-col relative overflow-visible">
                        <h3 className="font-medium text-left">{topic.title}</h3>
                        <p style={{ color: '#858687', fontSize: '11px' }} className="text-left mb-1">{topic.count}</p>
                        <div className="absolute top-0 right-0 h-full">
                          <img 
                            src={index === 0 ? "./互动展览ICON@2x.png" : 
                                 index === 1 ? "./亲子餐厅@2x.png" : 
                                              "./省心遛娃@2x.png"} 
                            alt={topic.title} 
                            className="h-[91px] w-auto object-contain"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 历史记录栏 - 南方菜系 */}
              {showHistoryBar && !isOpenSouthernDiscountsDrawer && !isOpenSanqingtanDrawer && (
                <div 
                  className="h-11 bg-white flex items-center justify-between px-4 rounded-[22px] cursor-pointer shadow-sm mb-2"
                  onClick={handleSouthernCuisineClick}
                >
                  <div>
                    <span className="text-sm font-medium">南方菜系优惠</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-400">{lastViewedTime}</span>
                  </div>
                </div>
              )}

              {/* 三清潭烧鹅历史记录栏 */}
              {showSanqingtanHistoryBar && !isOpenSouthernDiscountsDrawer && !isOpenSanqingtanDrawer && (
                <div 
                  className="h-11 bg-white flex items-center justify-between px-4 rounded-[22px] cursor-pointer shadow-sm mb-4"
                  onClick={handleSanqingtanClick}
                >
                  <div>
                    <span className="text-sm font-medium">三清潭烧鹅</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-400">{sanqingtanLastViewedTime}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 底部聊天输入框 */}
          <ChatInput hasDrawerOpen={isOpenSouthernDiscountsDrawer} hasSanqingtanDrawerOpen={isOpenSanqingtanDrawer} />
        </div>
      </div>

      {/* 自定义底部弹层 - 南方菜系优惠 */}
      {isOpenSouthernDiscountsDrawer && (
        <>
          {/* 遮罩层 */}
          <div 
            className="fixed inset-0 bg-black/70" 
            style={{ zIndex: 30 }}
            onClick={handleCloseSouthernCuisine}
          />
          
          {/* 弹层内容 */}
          <div 
            className="fixed inset-x-0 bottom-0 bg-black rounded-t-[20px] overflow-hidden max-h-[calc(100vh-60px)]" 
            style={{ 
              zIndex: 40,
              animation: isSouthernClosing 
                ? 'slideDown 0.3s ease-in forwards' 
                : 'slideUp 0.3s ease-out'
            }}
          >
            {/* 关闭按钮和标题 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <h1 className="text-lg font-bold text-white">南方菜系优惠</h1>
              <button 
                onClick={handleCloseSouthernCuisine}
                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-800"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            
            {/* 内容区域 - 添加负margin使网友推荐背景图向上40px，覆盖黑背景 */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
              <div className="mt-[-40px] pt-[40px]">
                <SouthernCuisineDiscountsDrawer 
                  onClose={handleCloseSouthernCuisine}
                  onOpenSanqingtan={() => {
                    setIsOpenSanqingtanDrawer(true);
                    setHasOpenedSanqingtanDrawer(true);
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* 三清潭烧鹅店铺弹层 */}
      {isOpenSanqingtanDrawer && (
        <>
          {/* 只有在南方菜系弹层未打开时才显示遮罩层 */}
          {!isOpenSouthernDiscountsDrawer && (
            <div 
              className="fixed inset-0 bg-black/70" 
              style={{ zIndex: 30 }}
              onClick={handleCloseSanqingtan}
            />
          )}
          
          {/* 弹层内容 */}
          <div 
            className="fixed inset-x-0 bottom-0 bg-black rounded-t-[20px] overflow-hidden max-h-[calc(100vh-60px)]" 
            style={{ 
              zIndex: 40,
              animation: isSanqingtanClosing 
                ? 'slideDown 0.3s ease-in forwards' 
                : 'slideUp 0.3s ease-out'
            }}
          >
            {/* 内容区域 */}
            <div className="overflow-y-auto relative" style={{ maxHeight: 'calc(100vh - 60px)' }}>
              {/* 关闭按钮 */}
              <button 
                onClick={handleCloseSanqingtan}
                className="absolute right-4 top-4 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              
              <SanqingtanRestaurantDrawer onClose={handleCloseSanqingtan} />
            </div>
          </div>
        </>
      )}

      {/* 添加动画关键帧 */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
