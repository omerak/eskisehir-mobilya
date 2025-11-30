import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hemen İletişime Geçin
          </h2>
          <p className="text-xl text-orange-100">
            Fotoğraf gönderin, hızlı fiyat paylaşalım.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <a
            href="tel:+905302318724"
            className="bg-white hover:bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all transform hover:scale-105 shadow-lg"
          >
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <Phone className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
            <p className="text-sm text-gray-600">+90 530 231 87 24</p>
          </a>

          <a
            href="https://wa.me/905302318724"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all transform hover:scale-105 shadow-lg"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <MessageCircle className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-600">+90 530 231 87 24</p>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <p className="text-white text-lg">
            <strong>Çalışma Saatleri:</strong> Haftanın Her Günü: 09:00 - 20:00
          </p>
        </div>
      </div>
    </section>
  );
}
