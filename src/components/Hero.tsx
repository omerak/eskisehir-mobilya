import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6774471/pexels-photo-6774471.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Eskişehir'de Mobilya Montaj, Taşıma ve Tamirat{' '}
            <span className="text-orange-500">Tek Adreste</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            Profesyonel marangoz ekibiyle mobilya montajı, sökme–takma, taşıma ve tamirat hizmeti.
            WhatsApp'tan fotoğraf gönderin, hızlı fiyat alın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/905310342510"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp ile Hızlı Fiyat Al
            </a>

            <a
              href="tel:+905310342510"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
