import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, QrCode, Sparkles, MapPin, Upload, Image as ImageIcon, Copy, Check, MessageSquare, AlertCircle, ZoomIn } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';
import { BlurImage } from './BlurImage';
import officialLogoImg from '../assets/images/mh_sweets_logo_official_1785069046531.jpg';
import qrCodeImg from '../../photos/qr_code.jpeg';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount?: number;
  giftNote: string;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount = 0,
  giftNote,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Gujarat',
    pincode: '',
    paymentMethod: 'upi', // 'upi' or 'cod'
    pickupShop: 'shop-1', // 'shop-1' or 'shop-2'
  });

  const [paymentScreenshotFile, setPaymentScreenshotFile] = useState<File | null>(null);
  const [paymentScreenshotPreview, setPaymentScreenshotPreview] = useState<string | null>(null);
  const [showScreenshotError, setShowScreenshotError] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [showQrZoom, setShowQrZoom] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [whatsappLink, setWhatsappLink] = useState('');

  const finalTotal = Math.max(0, subtotal - discount);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'paymentMethod' && e.target.value === 'cod') {
      setShowScreenshotError(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentScreenshotFile(file);
      setShowScreenshotError(false);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentScreenshotPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyUpi = () => {
    const upiId = formData.pickupShop === 'shop-2' ? '9979916060@paytm' : '9925134060@paytm';
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const constructWhatsAppMessage = (generatedId: string) => {
    const isUPI = formData.paymentMethod === 'upi';
    const isShop2 = formData.pickupShop === 'shop-2';
    const selectedShopText = isShop2 
      ? 'Shop 2: Nilkanth Plaza, Shop No. 8, Nakhtrana-Lakhpat Highway, Nakhtrana (Ph: +91 99799 16060)'
      : 'Shop 1: Opp. Jain Derasar, Main Bazar, Nakhtrana (Ph: +91 99251 34060)';
    
    let message = `👑 *NEW ORDER - M H SWEET*\n`;
    message += `----------------------------------\n`;
    message += `*Order Reference:* ${generatedId}\n\n`;
    message += `🏪 *SELECTED SHOP OUTLET:*\n`;
    message += `• *${selectedShopText}*\n\n`;
    message += `👤 *CUSTOMER DETAILS:*\n`;
    message += `• *Name:* ${formData.fullName}\n`;
    message += `• *Phone:* ${formData.phone}\n`;
    message += `• *Delivery Address:* ${formData.address}, ${formData.city} - ${formData.pincode} (${formData.state})\n\n`;
    
    message += `💳 *PAYMENT METHOD:*\n`;
    if (isUPI) {
      message += `✅ Instant UPI / QR (Payment Screenshot Attached)\n\n`;
    } else {
      message += `💵 Cash on Delivery (COD)\n\n`;
    }

    message += `📦 *ORDER ITEMS (${items.length}):*\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (${item.selectedWeight}) x ${item.quantity} = ₹${item.unitPrice * item.quantity}\n`;
      if (item.product.ingredients && item.product.ingredients.length > 0) {
        message += `   ↳ *Box Contents:* ${item.product.ingredients.join(', ')}\n`;
      }
    });

    message += `\n----------------------------------\n`;
    message += `💰 *TOTAL AMOUNT:* ₹${finalTotal}\n`;

    if (giftNote.trim()) {
      message += `\n💌 *Greeting Card Message:* "${giftNote}"\n`;
    }

    message += `----------------------------------\n`;
    if (isUPI) {
      message += `📸 *Payment Status:* Payment completed via UPI. (Screenshot attached in chat)\n`;
    } else {
      message += `🚚 *Payment Status:* Cash on Delivery. Please collect ₹${finalTotal} upon delivery.\n`;
    }

    return message;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Check screenshot validation for UPI
    if (formData.paymentMethod === 'upi' && !paymentScreenshotPreview) {
      setShowScreenshotError(true);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      const generatedId = 'MH-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);

      // Build WhatsApp message & URL based on selected shop outlet
      const waMsg = constructWhatsAppMessage(generatedId);
      const targetPhone = formData.pickupShop === 'shop-2' ? '919979916060' : '919925134060'; // Shop 2 or Shop 1 WhatsApp
      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waMsg)}`;
      setWhatsappLink(waUrl);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#7A1F2B', '#2F6F4F', '#FFF0AA']
        });
      } catch (err) {
        console.log('Confetti triggered', err);
      }

      // Automatically open WhatsApp in a new window/tab
      try {
        window.open(waUrl, '_blank');
      } catch (err) {
        console.log('Window open prevented', err);
      }

      onOrderSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#7A1F2B] text-[#FFF0AA] border-b border-[#D4AF37]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={officialLogoImg}
              alt="MH Sweets Logo"
              className="w-10 h-10 rounded-full border-2 border-[#D4AF37] object-cover shrink-0 shadow-md"
            />
            <div>
              <h2 className="font-serif font-bold text-xl text-white">Royal Express Checkout</h2>
              <p className="text-[11px] text-[#FFF0AA]/80">Freshness-locked express dispatch from Nakhatrana, Kachchh</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderComplete ? (
          /* Success Screen with WhatsApp Integration */
          <div className="p-8 text-center space-y-6 my-auto overflow-y-auto">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#2F6F4F]/10 text-[#2F6F4F] flex items-center justify-center border-2 border-[#2F6F4F]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="bg-[#D4AF37]/20 text-[#7A1F2B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#D4AF37]/30">
                Order Sent via WhatsApp
              </span>
              <h3 className="font-serif font-bold text-3xl text-[#332219] pt-1">
                Thank You, {formData.fullName || 'Valued Guest'}!
              </h3>
              <p className="text-xs text-[#7A1F2B] font-semibold">
                Order Reference: <span className="font-mono text-sm underline">{orderId}</span>
              </p>
              <p className="text-xs text-[#332219]/70 max-w-md mx-auto leading-relaxed">
                Your order details have been compiled for MHSWEETS. Click below to continue on WhatsApp if the window didn't automatically open.
              </p>
            </div>

            {/* Payment Proof Badge & Explanation */}
            {formData.paymentMethod === 'upi' && paymentScreenshotPreview && (
              <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-[#2F6F4F]/10 border border-[#2F6F4F]/30 flex items-center gap-3 text-left">
                <img src={paymentScreenshotPreview} alt="Payment Proof" className="w-14 h-14 object-cover rounded-xl border border-[#2F6F4F]/40 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-[#2F6F4F] flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>UPI Payment Screenshot Verified</span>
                  </p>
                  <p className="text-[11px] text-[#332219]/80 mt-0.5">
                    <strong>Note:</strong> Browsers do not allow web pages to attach images directly into WhatsApp. Your order text is pre-filled — please send your payment screenshot photo in the chat when WhatsApp opens!
                  </p>
                </div>
              </div>
            )}

            {/* Direct WhatsApp Action Button */}
            <div className="max-w-md mx-auto space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2.5 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Open / Send Order on WhatsApp</span>
              </a>

              <div className="p-4 rounded-2xl bg-[#F5EBDD] border border-[#D4AF37]/30 text-xs text-left space-y-2">
                <div className="flex justify-between font-bold text-[#7A1F2B]">
                  <span>Order Outlet:</span>
                  <span className="font-semibold text-[#2F6F4F]">
                    {formData.pickupShop === 'shop-2' ? 'Shop 2 (Highway Branch)' : 'Shop 1 (Main Bazar)'}
                  </span>
                </div>
                <p className="text-[#7A1F2B] font-bold">
                  📍 {formData.pickupShop === 'shop-2' ? 'Shop 2: Nilkanth Plaza, Shop No. 8, Nakhtrana-Lakhpat Highway, Nakhtrana' : 'Shop 1: Opp. Jain Derasar, Main Bazar, Nakhtrana'}
                </p>
                <p className="text-[#332219]"><strong>Deliver To:</strong> {formData.address}, {formData.city} - {formData.pincode}</p>
                <p className="text-[#332219]/70">Phone: {formData.phone}</p>
                <p className="text-[#7A1F2B] font-semibold pt-1 border-t border-[#D4AF37]/20">
                  Payment Method: {formData.paymentMethod === 'upi' ? 'Instant UPI / QR (Paid)' : 'Cash on Delivery (Collect ₹' + finalTotal + ')'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-2xl bg-[#7A1F2B] text-[#FFF0AA] font-bold text-sm shadow-md hover:bg-[#58131C] transition-colors"
            >
              Done & Return to Store
            </button>
          </div>
        ) : (
          /* Checkout Form Screen */
          <form onSubmit={handleSubmitOrder} className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Order Items Summary */}
            <div className="p-4 rounded-2xl bg-[#FAF3EA] border border-[#D4AF37]/35 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-[#7A1F2B]">
                <span>Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'}):</span>
                <span className="text-sm font-serif font-bold">Grand Total: ₹{finalTotal}</span>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-white border border-[#D4AF37]/25 shadow-xs text-xs space-y-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#F7F4EE] border border-[#D4AF37]/20 shrink-0">
                          <BlurImage src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[#332219] truncate">{item.product.name}</p>
                          <p className="text-[11px] text-[#7A1F2B] font-semibold">{item.selectedWeight} × {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-serif font-bold text-xs text-[#7A1F2B] shrink-0">
                        ₹{item.unitPrice * item.quantity}
                      </span>
                    </div>

                    {/* Show Selected Box Contents for Custom Hampers */}
                    {item.product.ingredients && item.product.ingredients.length > 0 && (
                      <div className="p-2 rounded-lg bg-[#FAF3EA] border border-[#D4AF37]/30 text-[11px] text-[#332219]">
                        <strong className="text-[#7A1F2B] block font-bold text-[10px] uppercase tracking-wider mb-0.5">
                          Selected Box Contents ({item.product.ingredients.length} items):
                        </strong>
                        <p className="leading-snug text-[#332219]/90 font-medium">
                          {item.product.ingredients.join(' • ')}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Details */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#7A1F2B] flex items-center gap-2 border-b border-[#D4AF37]/20 pb-2">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span>1. Shipping & Recipient Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-[#332219] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Vikramaditya Singhania"
                    className="w-full p-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:outline-none focus:border-[#7A1F2B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#332219] mb-1">Mobile Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99251 34060"
                    className="w-full p-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:outline-none focus:border-[#7A1F2B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#332219] mb-1">Street Address / House / Flat No. *</label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. Villa 42, Royal Palms, Civil Lines"
                    className="w-full p-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:outline-none focus:border-[#7A1F2B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#332219] mb-1">City / Town *</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Jaipur / New Delhi"
                    className="w-full p-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:outline-none focus:border-[#7A1F2B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#332219] mb-1">Pincode *</label>
                  <input
                    type="text"
                    required
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 302001"
                    className="w-full p-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:outline-none focus:border-[#7A1F2B]"
                  />
                </div>
              </div>
            </div>

            {/* Shop Outlet Selection (Shop 1 vs Shop 2) */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#7A1F2B] flex items-center gap-2 border-b border-[#D4AF37]/20 pb-2">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span>2. Select Preferred Shop Outlet</span>
              </h3>

              <p className="text-xs text-[#332219]/70">
                Choose which MH Sweets shop outlet you would like to take/dispatch your order from:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Option 1: Shop 1 */}
                <label className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${formData.pickupShop === 'shop-1' ? 'border-[#7A1F2B] bg-[#7A1F2B]/5 shadow-sm font-bold' : 'border-[#D4AF37]/30 bg-white'}`}>
                  <input
                    type="radio"
                    name="pickupShop"
                    value="shop-1"
                    checked={formData.pickupShop === 'shop-1'}
                    onChange={handleChange}
                    className="mt-0.5 text-[#7A1F2B] accent-[#7A1F2B]"
                  />
                  <div>
                    <span className="block font-bold text-[#7A1F2B] text-sm mb-1">
                      Shop 1: Main Bazar Branch
                    </span>
                    <span className="text-[11px] text-[#332219]/80 block font-normal leading-relaxed">
                      <strong>Address:</strong> Opp. Jain Derasar, Main Bazar, Nakhtrana<br />
                      <strong className="text-[#7A1F2B]">WhatsApp / Phone:</strong> +91 99251 34060 / +91 94296 73999
                    </span>
                  </div>
                </label>

                {/* Option 2: Shop 2 */}
                <label className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${formData.pickupShop === 'shop-2' ? 'border-[#7A1F2B] bg-[#7A1F2B]/5 shadow-sm font-bold' : 'border-[#D4AF37]/30 bg-white'}`}>
                  <input
                    type="radio"
                    name="pickupShop"
                    value="shop-2"
                    checked={formData.pickupShop === 'shop-2'}
                    onChange={handleChange}
                    className="mt-0.5 text-[#7A1F2B] accent-[#7A1F2B]"
                  />
                  <div>
                    <span className="block font-bold text-[#7A1F2B] text-sm mb-1">
                      Shop 2: Highway Branch
                    </span>
                    <span className="text-[11px] text-[#332219]/80 block font-normal leading-relaxed">
                      <strong>Address:</strong> Nilkanth Plaza, Shop No. 8, Nakhtrana-Lakhpat Highway<br />
                      <strong className="text-[#7A1F2B]">WhatsApp / Phone:</strong> +91 99799 16060
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#7A1F2B] flex items-center gap-2 border-b border-[#D4AF37]/20 pb-2">
                <QrCode className="w-5 h-5 text-[#D4AF37]" />
                <span>3. Payment Option</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Instant UPI Option */}
                <label className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${formData.paymentMethod === 'upi' ? 'border-[#7A1F2B] bg-[#7A1F2B]/5 shadow-sm font-bold' : 'border-[#D4AF37]/30 bg-white'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="text-[#7A1F2B] accent-[#7A1F2B]"
                  />
                  <div>
                    <span className="block font-bold text-[#7A1F2B] text-sm">Instant UPI / QR Code</span>
                    <span className="text-[11px] text-[#332219]/70">GPay, PhonePe, Paytm, BHIM</span>
                  </div>
                </label>

                {/* Cash on Delivery Option */}
                <label className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-[#7A1F2B] bg-[#7A1F2B]/5 shadow-sm font-bold' : 'border-[#D4AF37]/30 bg-white'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="text-[#7A1F2B] accent-[#7A1F2B]"
                  />
                  <div>
                    <span className="block font-bold text-[#7A1F2B] text-sm">Cash on Delivery (COD)</span>
                    <span className="text-[11px] text-[#332219]/70">Pay when delivered to doorstep</span>
                  </div>
                </label>
              </div>

              {/* UPI Payment Box & Screenshot Upload Prompt */}
              {formData.paymentMethod === 'upi' && (
                <div className="mt-4 p-5 rounded-2xl bg-[#FAF3EA] border-2 border-[#D4AF37]/40 space-y-4 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row items-center gap-5 bg-white p-5 rounded-2xl border border-[#D4AF37]/30 shadow-xs">
                    {/* Official PhonePe / UPI QR Code Image */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div 
                        onClick={() => setShowQrZoom(true)}
                        className="relative group cursor-pointer w-44 sm:w-48 bg-white border-2 border-[#7A1F2B]/40 rounded-2xl p-2.5 shadow-md hover:shadow-xl hover:border-[#7A1F2B] transition-all overflow-hidden"
                      >
                        <img 
                          src={qrCodeImg} 
                          alt="M H Sweets Official PhonePe UPI QR Code" 
                          className="w-full h-auto rounded-xl object-contain bg-white" 
                        />
                        <div className="absolute inset-0 bg-[#7A1F2B]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                          <span className="bg-[#7A1F2B] text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                            <ZoomIn className="w-3.5 h-3.5" /> Tap to Enlarge
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowQrZoom(true)}
                        className="text-[11px] font-bold text-[#7A1F2B] hover:underline flex items-center gap-1"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-[#D4AF37]" /> Click to Enlarge QR Code
                      </button>
                    </div>

                    <div className="space-y-3 text-center sm:text-left flex-1 min-w-0">
                      <div>
                        <span className="inline-block bg-[#7A1F2B]/10 text-[#7A1F2B] text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1">
                          Official PhonePe Store QR
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#332219]">
                          Scan & Pay <span className="text-[#7A1F2B]">₹{finalTotal}</span>
                        </h4>
                        <p className="text-xs text-[#332219]/70 mt-0.5">
                          Scan with GPay, PhonePe, Paytm, BHIM or any UPI app
                        </p>
                      </div>

                      {/* Copyable UPI ID Box */}
                      <div className="p-3 rounded-xl bg-[#FAF3EA] border border-[#D4AF37]/40 space-y-1.5">
                        <p className="text-[11px] font-bold text-[#7A1F2B]">Or Pay via UPI ID / Phone Number:</p>
                        <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-lg border border-[#D4AF37]/30 shadow-xs">
                          <span className="font-mono font-bold text-sm text-[#332219]">
                            {formData.pickupShop === 'shop-2' ? '9979916060@paytm' : '9925134060@paytm'}
                          </span>
                          <button
                            type="button"
                            onClick={handleCopyUpi}
                            className="px-2.5 py-1 rounded-md bg-[#7A1F2B] text-[#FFF0AA] text-xs font-bold hover:bg-[#58131C] transition-colors flex items-center gap-1 shrink-0"
                            title="Copy UPI ID"
                          >
                            {copiedUpi ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-[10px] text-[#332219]/70 font-medium">
                          Outlet: <strong>{formData.pickupShop === 'shop-2' ? 'MH Sweets (Highway Branch)' : 'MH Sweets (Main Bazar Branch)'}</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot Upload Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-[#7A1F2B] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Upload className="w-4 h-4 text-[#D4AF37]" />
                        <span>Upload Payment Screenshot *</span>
                      </span>
                      <span className="text-[10px] text-red-700 font-medium">* Required for UPI Order</span>
                    </label>

                    {paymentScreenshotPreview ? (
                      <div className="p-3 bg-white rounded-xl border-2 border-emerald-500/50 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={paymentScreenshotPreview}
                            alt="Payment Screenshot"
                            className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                          />
                          <div>
                            <p className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Screenshot Attached!</span>
                            </p>
                            <p className="text-[10px] text-gray-500 truncate max-w-[180px]">
                              {paymentScreenshotFile?.name || 'payment_receipt.jpg'}
                            </p>
                          </div>
                        </div>

                        <label
                          htmlFor="upi-screenshot-input"
                          className="px-3 py-1.5 rounded-lg bg-[#7A1F2B] text-[#FFF0AA] text-xs font-bold cursor-pointer hover:bg-[#58131C]"
                        >
                          Change
                        </label>
                      </div>
                    ) : (
                      <label
                        htmlFor="upi-screenshot-input"
                        className={`w-full p-4 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
                          showScreenshotError
                            ? 'border-red-500 bg-red-50/50 text-red-700'
                            : 'border-[#D4AF37]/60 bg-white hover:border-[#7A1F2B] text-[#332219]'
                        }`}
                      >
                        <ImageIcon className="w-8 h-8 text-[#7A1F2B]/60" />
                        <div className="text-center">
                          <p className="text-xs font-bold text-[#7A1F2B]">Click to Select or Drag Screenshot Image</p>
                          <p className="text-[10px] text-[#332219]/60">Supports JPG, PNG, WEBP (Max 10MB)</p>
                        </div>
                      </label>
                    )}

                    <input
                      id="upi-screenshot-input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />

                    {showScreenshotError && (
                      <p className="text-xs font-bold text-red-700 flex items-center gap-1 pt-1 animate-bounce">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Please upload your UPI payment screenshot to proceed!</span>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-[#D4AF37]/30">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7A1F2B] to-[#58131C] text-[#FFF0AA] font-bold text-sm shadow-xl border border-[#D4AF37]/40 hover:opacity-95 transition-all flex items-center justify-center gap-2.5"
              >
                {isSubmitting ? (
                  <span>Securing Order & Opening WhatsApp...</span>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                    <span>Place Order & Send via WhatsApp (₹{finalTotal})</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* QR Code Zoom Modal */}
      {showQrZoom && (
        <div 
          className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowQrZoom(false)}
        >
          <div 
            className="relative max-w-sm w-full bg-white p-6 rounded-3xl border-2 border-[#D4AF37] shadow-2xl flex flex-col items-center gap-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrZoom(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg text-[#7A1F2B]">M H SWEETS PhonePe QR Code</h3>
              <p className="text-xs text-[#332219]/70">Scan using any UPI app to pay ₹{finalTotal}</p>
            </div>

            <div className="p-3 bg-white border-2 border-[#7A1F2B]/30 rounded-2xl shadow-inner max-w-[280px]">
              <img 
                src={qrCodeImg} 
                alt="M H Sweets PhonePe QR Code Enlarge" 
                className="w-full h-auto rounded-xl object-contain" 
              />
            </div>

            <div className="space-y-2 w-full">
              <div className="p-2.5 rounded-xl bg-[#FAF3EA] border border-[#D4AF37]/40 text-xs font-mono font-bold text-[#7A1F2B]">
                UPI ID: {formData.pickupShop === 'shop-2' ? '9979916060@paytm' : '9925134060@paytm'}
              </div>
              <button
                onClick={() => setShowQrZoom(false)}
                className="w-full py-2.5 rounded-xl bg-[#7A1F2B] text-[#FFF0AA] font-bold text-xs hover:bg-[#58131C] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
