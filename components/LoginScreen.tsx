import React, { useState, useEffect } from 'react';

// 🔴 URL ของ Google Apps Script (แก้ไขให้ถูกต้องแล้ว)
const GOOGLE_SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbzOmJervp-QmMQJEsT4mxDz9WYd_uWauw_6GUdpv0XzyWI0cBiGtmtRN4oc9Fazxcw/exec";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    username: '',
    lineId: ''
  });

  const PRODUCTS = [
    { 
        id: 1, 
        name: "LUCKYFUN789", 
        img: "https://i.ibb.co/Xx2tyfwL/ICON-APP-LK.png",
        color: "from-purple-600 to-blue-600",
    },
    { 
        id: 2, 
        name: "GOLDEN678", 
        img: "https://i.ibb.co/60RFK4wk/ICON-APP-GD.png",
        color: "from-yellow-600 to-orange-600",
    },
    { 
        id: 3, 
        name: "GOLDENKING168", 
        img: "https://i.ibb.co/C3W09jtf/ICON-APP-GK.png",
        color: "from-red-600 to-pink-600",
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProductIndex === null || !formData.username || !formData.lineId) return;

    setIsLoading(true);

    const selectedProduct = PRODUCTS[selectedProductIndex];
    
    const payload = {
        product: selectedProduct.name,
        username: formData.username,
        lineId: formData.lineId,
        timestamp: new Date().toISOString()
    };

    try {
        // Send data to Google Sheet via Google Apps Script
        // Check if URL is valid (not the placeholder)
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Important: Google Apps Script only works with no-cors from client side
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            console.log("Data sent to sheet successfully");
        } else {
            console.log("Mock Submission (Script URL not set):", payload);
            // Simulate delay only if no URL
            await new Promise(resolve => setTimeout(resolve, 1500));
        }

        // Proceed to App after success (or attempted success)
        onLogin();

    } catch (error) {
        console.error("Submission Error:", error);
        // Even if sheet fails (network error), allow user to enter
        onLogin(); 
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
             <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
             <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="z-10 w-full max-w-sm relative">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  BONUSTIME AI
                </h1>
                <p className="text-slate-400 text-xs">
                  กรุณาเลือกเว็บและยืนยันตัวตนเพื่อใช้งานสูตร
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Product Selection */}
                <div className="space-y-3">
                    <label className="text-white text-sm font-bold ml-1 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-[10px] flex items-center justify-center">1</span>
                        เลือกเว็บที่คุณเล่น
                    </label>
                    <div className="grid gap-3">
                        {PRODUCTS.map((product, index) => (
                            <div
                                key={product.id}
                                onClick={() => setSelectedProductIndex(index)}
                                className={`cursor-pointer p-3 pr-4 rounded-2xl border flex items-center justify-between transition-all duration-300 transform active:scale-95 relative overflow-hidden
                                    ${selectedProductIndex === index 
                                        ? 'bg-blue-600/20 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] scale-[1.02]' 
                                        : 'bg-[#1a1f35] border-white/10 hover:border-white/30 hover:bg-[#1f2540]'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-4 pl-2">
                                    <div className={`w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-white/10 shrink-0 bg-black ${selectedProductIndex === index ? 'ring-2 ring-blue-400' : ''}`}>
                                        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <div className={`font-bold text-sm tracking-wide ${selectedProductIndex === index ? 'text-blue-400' : 'text-white'}`}>
                                            {product.name}
                                        </div>
                                    </div>
                                </div>

                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                                    ${selectedProductIndex === index 
                                        ? 'bg-blue-500 border-blue-500' 
                                        : 'border-slate-600'
                                    }
                                `}>
                                    {selectedProductIndex === index && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Form Inputs */}
                <div className={`space-y-4 transition-all duration-500 ${selectedProductIndex !== null ? 'opacity-100 translate-y-0' : 'opacity-50 blur-[2px] pointer-events-none'}`}>
                     <label className="text-white text-sm font-bold ml-1 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-[10px] flex items-center justify-center">2</span>
                        กรอกข้อมูลเพื่อยืนยัน
                    </label>
                    
                    <div className="space-y-3">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username (ยูสเซอร์)"
                                value={formData.username}
                                onChange={handleInputChange}
                                autoComplete="off"
                                className="w-full bg-[#0f1325] text-white border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="lineId"
                                placeholder="LINE ID"
                                value={formData.lineId}
                                onChange={handleInputChange}
                                autoComplete="off"
                                className="w-full bg-[#0f1325] text-white border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#06C755] focus:ring-1 focus:ring-[#06C755] transition-all placeholder-slate-600"
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading || selectedProductIndex === null || !formData.username || !formData.lineId}
                    className={`w-full font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl relative overflow-hidden mt-6
                        ${(selectedProductIndex !== null && formData.username && formData.lineId)
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-blue-900/50' 
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }
                    `}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>กำลังตรวจสอบข้อมูล...</span>
                        </div>
                    ) : (
                        <>
                            <span className="text-lg tracking-wide uppercase font-bold">
                                ยืนยัน / เข้าใช้งาน
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </>
                    )}
                </button>
            </form>
        </div>
    </div>
  );
}

export default LoginScreen;