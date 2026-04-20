import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-green-500 selection:text-white">
      {/* Top Banner / Announcement (Optional) */}
      <div className="bg-[#222] text-xs py-1 px-4 flex justify-between items-center text-gray-400">
         <span>SUPER PLUS</span>
         <div className="flex gap-2">
            <span className="cursor-pointer hover:text-white">TH</span>
            <span className="cursor-pointer hover:text-white">EN</span>
         </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#333] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
               <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/logo.png" alt="Super Plus Logo" className="h-10 md:h-14" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-300">
               <a href="#" className="flex items-center gap-1 hover:text-[#00ff00] text-[#00ff00] transition-colors">
                  <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/home.png" alt="Home" className="w-5 h-5"/>
                  หน้าหลัก
               </a>
               <a href="#" className="flex items-center gap-1 hover:text-[#00ff00] transition-colors">
                  <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/download-1.png" alt="Promotions" className="w-5 h-5"/>
                  โปรโมชั่น
               </a>
               <a href="#" className="flex items-center gap-1 hover:text-[#00ff00] transition-colors">
                   <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/menu-hot-ic.png" alt="Articles" className="w-5 h-5"/>
                  บทความ
               </a>
               <a href="#" className="flex items-center gap-1 hover:text-[#00ff00] transition-colors">
                   <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/06/calender02.png" alt="Events" className="w-5 h-5"/>
                  กิจกรรม
               </a>
               <a href="#" className="flex items-center gap-1 hover:text-[#00ff00] transition-colors">
                   <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2021/07/line.png" alt="Line" className="w-5 h-5"/>
                  Line
               </a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
                <button className="hidden md:block px-4 py-2 bg-gradient-to-b from-[#444] to-[#222] border border-[#555] rounded font-bold text-sm hover:from-[#555] hover:to-[#333] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                   เข้าสู่ระบบ
                </button>
                <button className="px-4 py-2 bg-gradient-to-b from-[#00ff00] to-[#00aa00] text-black rounded font-bold text-sm hover:from-[#33ff33] hover:to-[#00cc00] transition-all shadow-[0_0_10px_rgba(0,255,0,0.5)] animate-pulse">
                   สมัครสมาชิก
                </button>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/90 pt-20 px-4">
              <nav className="flex flex-col gap-4 text-lg font-bold">
                 <a href="#" className="flex items-center gap-3 text-[#00ff00] p-2 border-b border-[#333]">
                    <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/home.png" alt="Home" className="w-6 h-6"/> หน้าหลัก
                 </a>
                 <a href="#" className="flex items-center gap-3 text-white hover:text-[#00ff00] p-2 border-b border-[#333]">
                    <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/download-1.png" alt="Promotions" className="w-6 h-6"/> โปรโมชั่น
                 </a>
                 <a href="#" className="flex items-center gap-3 text-white hover:text-[#00ff00] p-2 border-b border-[#333]">
                    <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/menu-hot-ic.png" alt="Articles" className="w-6 h-6"/> บทความ
                 </a>
                 <a href="#" className="flex items-center gap-3 text-white hover:text-[#00ff00] p-2 border-b border-[#333]">
                    <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/06/calender02.png" alt="Events" className="w-6 h-6"/> กิจกรรม
                 </a>
                 <button className="mt-4 w-full py-3 bg-gradient-to-b from-[#444] to-[#222] border border-[#555] rounded font-bold">
                   เข้าสู่ระบบ
                </button>
              </nav>
          </div>
      )}

      <main className="pb-20">
        {/* Main Banner Slider Area */}
        <section className="w-full bg-[#0a0a0a]">
           <div className="max-w-7xl mx-auto">
              <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/%E0%B8%84%E0%B8%B7%E0%B8%99%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%99-5-superplus-1280x462_0.jpg" alt="Promotion Banner" className="w-full object-cover" />
           </div>
        </section>

        {/* Marquee / News Ticker */}
        <div className="bg-[#1a1a1a] border-y border-[#333] py-2 px-4 flex items-center overflow-hidden">
            <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/lightning001.png" alt="Flash" className="h-5 w-5 mr-2 z-10" />
            <div className="whitespace-nowrap animate-[marquee_15s_linear_infinite] inline-block text-[#00ff00] text-sm font-semibold">
                ยินดีต้อนรับสู่ SUPER PLUS คาสิโนออนไลน์ สล็อตออนไลน์ ที่ให้คุณสนุกได้ทุกรูปแบบ ฝาก-ถอน ออโต้ 24 ชม.
            </div>
        </div>

        {/* Action Bar (Mobile Bottom / Desktop Below Banner) */}
        <div className="bg-[#111] p-4 max-w-7xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4 border-b border-[#333]">
             <a href="#" className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-3 bg-gradient-to-b from-[#333] to-[#1a1a1a] border border-[#444] rounded-lg hover:border-[#00ff00] transition-colors group">
                 <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/ic-menu-login-animate-1.png" alt="Login" className="h-8 mb-1 group-hover:scale-110 transition-transform" />
                 <span className="text-xs font-bold">เข้าสู่ระบบ</span>
             </a>
             <a href="#" className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-3 bg-gradient-to-b from-[#333] to-[#1a1a1a] border border-[#444] rounded-lg hover:border-[#00ff00] transition-colors group">
                 <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/ic-menu-register.png" alt="Register" className="h-8 mb-1 group-hover:scale-110 transition-transform" />
                 <span className="text-xs font-bold text-[#00ff00]">สมัคร</span>
             </a>
             <a href="#" className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-3 bg-gradient-to-b from-[#333] to-[#1a1a1a] border border-[#444] rounded-lg hover:border-[#00ff00] transition-colors group">
                 <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/menu2.png" alt="Hot" className="h-8 mb-1 group-hover:scale-110 transition-transform" />
                 <span className="text-xs font-bold">ยอดนิยม</span>
             </a>
             <a href="#" className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-3 bg-gradient-to-b from-[#333] to-[#1a1a1a] border border-[#444] rounded-lg hover:border-[#00ff00] transition-colors group">
                 <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/tab_promotion-1.png" alt="Promotion" className="h-8 mb-1 group-hover:scale-110 transition-transform" />
                 <span className="text-xs font-bold">โปรโมชั่น</span>
             </a>
             <a href="#" className="flex-1 min-w-[100px] flex flex-col items-center justify-center p-3 bg-gradient-to-b from-[#333] to-[#1a1a1a] border border-[#444] rounded-lg hover:border-[#00ff00] transition-colors group">
                 <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/support.png" alt="Support" className="h-8 mb-1 group-hover:scale-110 transition-transform" />
                 <span className="text-xs font-bold">ติดต่อเรา</span>
             </a>
        </div>

        {/* Game Categories */}
        <section className="max-w-7xl mx-auto p-4 mt-4">
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                 <div className="cursor-pointer group relative overflow-hidden rounded-xl border-2 border-[#00ff00] bg-[#1a1a1a]">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                     <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/ic-nav-menu-hot-game.png" alt="Hot Games" className="w-full h-32 object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute bottom-2 left-0 right-0 text-center z-20 font-bold text-white text-lg drop-shadow-md">ยอดนิยม</div>
                 </div>
                 <div className="cursor-pointer group relative overflow-hidden rounded-xl border border-[#333] hover:border-[#00ff00] bg-[#1a1a1a] transition-colors">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                     <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/EZ-Casino-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C-%E0%B8%9D%E0%B8%B2%E0%B8%81-100-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95%E0%B8%9F%E0%B8%A3%E0%B8%B5-100.png" alt="Slots" className="w-full h-32 object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute bottom-2 left-0 right-0 text-center z-20 font-bold text-gray-300 group-hover:text-[#00ff00] text-lg drop-shadow-md">สล็อตเกม</div>
                 </div>
                 <div className="cursor-pointer group relative overflow-hidden rounded-xl border border-[#333] hover:border-[#00ff00] bg-[#1a1a1a] transition-colors">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                     <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/EZ-Casino-%E0%B8%84%E0%B8%B2%E0%B8%AA%E0%B8%B4%E0%B9%8C%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C-%E0%B8%9A%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%94-%E0%B8%A3%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%95-%E0%B8%8B%E0%B8%B4%E0%B8%84%E0%B9%82%E0%B8%9A-%E0%B9%84%E0%B8%AE%E0%B9%82%E0%B8%A5-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD-%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A3.png" alt="Live Casino" className="w-full h-32 object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute bottom-2 left-0 right-0 text-center z-20 font-bold text-gray-300 group-hover:text-[#00ff00] text-lg drop-shadow-md">คาสิโนสด</div>
                 </div>
                 <div className="cursor-pointer group relative overflow-hidden rounded-xl border border-[#333] hover:border-[#00ff00] bg-[#1a1a1a] transition-colors">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                     <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/EZ-Casino-%E0%B9%81%E0%B8%97%E0%B8%87%E0%B8%9F%E0%B8%B8%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C-%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-E-Sport.png" alt="Sports" className="w-full h-32 object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute bottom-2 left-0 right-0 text-center z-20 font-bold text-gray-300 group-hover:text-[#00ff00] text-lg drop-shadow-md">กีฬา</div>
                 </div>
                 <div className="cursor-pointer group relative overflow-hidden rounded-xl border border-[#333] hover:border-[#00ff00] bg-[#1a1a1a] transition-colors">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                     <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/04-1-1.png" alt="Lottery" className="w-full h-32 object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
                     <div className="absolute bottom-2 left-0 right-0 text-center z-20 font-bold text-gray-300 group-hover:text-[#00ff00] text-lg drop-shadow-md">หวย</div>
                 </div>
             </div>
        </section>

        {/* Section Heading */}
        <div className="max-w-7xl mx-auto px-4 mt-8 mb-4 flex items-center gap-2">
            <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2022/03/ic-nav-menu-popular-casino-1.png" alt="Icon" className="w-8 h-8" />
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">คาสิโนออนไลน์ ยอดนิยม</h2>
        </div>

        {/* Game Providers Grid */}
        <section className="max-w-7xl mx-auto px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                 {/* Provider Card 1 */}
                 <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden group hover:border-[#00ff00] transition-colors cursor-pointer">
                    <div className="aspect-[4/3] bg-black p-2 flex items-center justify-center">
                        <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/ezc-wt-sa-gaming-animation.gif" alt="SA Gaming" className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-2 text-center bg-[#222] group-hover:bg-[#333] transition-colors">
                        <span className="text-sm font-bold text-gray-300 group-hover:text-white">SA GAMING</span>
                    </div>
                 </div>

                 {/* Provider Card 2 */}
                 <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden group hover:border-[#00ff00] transition-colors cursor-pointer">
                    <div className="aspect-[4/3] bg-black p-2 flex items-center justify-center">
                        <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/ezc-wt-pretty-gaming-animation.gif" alt="Pretty Gaming" className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-2 text-center bg-[#222] group-hover:bg-[#333] transition-colors">
                        <span className="text-sm font-bold text-gray-300 group-hover:text-white">PRETTY</span>
                    </div>
                 </div>

                 {/* Provider Card 3 */}
                 <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden group hover:border-[#00ff00] transition-colors cursor-pointer">
                    <div className="aspect-[4/3] bg-black p-2 flex items-center justify-center">
                        <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/ezc-wt-wm-animation.gif" alt="WM Casino" className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-2 text-center bg-[#222] group-hover:bg-[#333] transition-colors">
                        <span className="text-sm font-bold text-gray-300 group-hover:text-white">WM CASINO</span>
                    </div>
                 </div>

                 {/* Provider Card 4 */}
                 <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden group hover:border-[#00ff00] transition-colors cursor-pointer">
                    <div className="aspect-[4/3] bg-black p-2 flex items-center justify-center">
                        <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/ezc-wt-allbet-full-animation.gif" alt="Allbet" className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-2 text-center bg-[#222] group-hover:bg-[#333] transition-colors">
                        <span className="text-sm font-bold text-gray-300 group-hover:text-white">ALLBET</span>
                    </div>
                 </div>

                 {/* Provider Card 5 */}
                 <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden group hover:border-[#00ff00] transition-colors cursor-pointer">
                    <div className="aspect-[4/3] bg-black p-2 flex items-center justify-center">
                        <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/download02.jpg" alt="AE Sexy" className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-2 text-center bg-[#222] group-hover:bg-[#333] transition-colors">
                        <span className="text-sm font-bold text-gray-300 group-hover:text-white">AE SEXY</span>
                    </div>
                 </div>
             </div>
        </section>

        {/* Content Block */}
        <section className="max-w-7xl mx-auto px-4 mt-12 mb-8">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00ff00]">SUPER PLUS เว็บคาสิโนสด ยอดนิยมแห่งปี</h1>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        SUPER PLUS ผู้ให้บริการคาสิโนออนไลน์มีการพัฒนาและแก้ไขระบบอย่างดีที่สุดด้วยทีมงานผู้เชี่ยวชาญ ที่คอยช่วยเหลือนักพนันตลอดการเดิมพันเมื่อท่านเกิดปัญหาใดๆ อีกทั้งเราคือผู้ให้บริการพนันออนไลน์ ที่มีรูปแบบของเกมให้ท่านได้เลือกรับความบันเทิงอย่างหลากหลาย และนอกจากนี้ท่านก็จะได้พบกับโปรโมชั่นสุดคุ้มแบบจัดเต็ม มอบค่าตอบแทนจากการลงทุน ในแบบที่ท่านไม่เคยได้จากที่ไหนมาก่อน
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-b from-[#00ff00] to-[#00aa00] text-black rounded-full font-bold text-lg hover:from-[#33ff33] hover:to-[#00cc00] transition-all shadow-[0_0_15px_rgba(0,255,0,0.4)] inline-block">
                        เล่นเลยตอนนี้
                    </button>
                </div>
                <div className="flex-1">
                     <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/banner_hot_game_content_1.png" alt="Promo Content" className="w-full max-w-md mx-auto animate-pulse" style={{ animationDuration: '3s' }} />
                </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#333] py-10 mt-10">
         <div className="max-w-7xl mx-auto px-4 text-center">
             <img src="https://idea-bet.live/theme/superplus/wp-content/uploads/2023/11/logo.png" alt="Logo Footer" className="h-16 mx-auto mb-6 opacity-50 grayscale" />
             <p className="text-gray-500 text-sm mb-4">
                SUPER PLUS เว็บคาสิโนออนไลน์ ครองอันดับในใจคนไทย 10 ปีซ้อน<br />
                SUPER PLUS บาคาร่า คาสิโนออนไลน์ ที่ดีที่สุด เพื่อประสบการณ์ที่ดีของผู้เล่นอย่างแท้จริง แบบ SUPER PLUS
             </p>
             <div className="flex justify-center gap-4 mb-6">
                 <a href="#" className="text-gray-600 hover:text-[#00ff00]">Terms and Conditions</a>
                 <span className="text-gray-700">|</span>
                 <a href="#" className="text-gray-600 hover:text-[#00ff00]">Privacy Policy</a>
             </div>
             <p className="text-gray-600 text-xs">
                Copyright © 2024 SUPER PLUS All Rights Reserved.
             </p>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </div>
  );
}
