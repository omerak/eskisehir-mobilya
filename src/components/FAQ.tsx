import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Fiyatlar nasıl belirleniyor?',
    answer: 'Fiyatlarımız mobilyanın türüne, büyüklüğüne ve işlem süresine göre belirlenir. WhatsApp üzerinden fotoğraf göndererek ücretsiz ön fiyat alabilirsiniz. Randevu öncesi net fiyat bilgisi verilir.'
  },
  {
    question: 'Aynı gün hizmet mümkün mü?',
    answer: 'Evet, müsaitlik durumuna göre aynı gün hizmet verebiliyoruz. Acil işleriniz için WhatsApp veya telefon ile iletişime geçin, en kısa sürede usta yönlendirelim.'
  },
  {
    question: 'Tamirat yapıyor musunuz?',
    answer: 'Elbette! Kırık, çatlak, kapak ayarı, menteşe değişimi, çekmecelerin onarımı gibi tüm mobilya tamirat işlemlerini profesyonelce yapıyoruz.'
  },
  {
    question: 'İlçe hizmetiniz var mı?',
    answer: 'Eskişehir merkez ve tüm ilçelerine (Odunpazarı, Tepebaşı, Sivrihisar, Mihalgazi, Alpu vb.) hizmet veriyoruz. Uzak bölgeler için ek gidiş ücreti talep edebiliriz.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-gray-600">
            Merak ettiklerinizi burada bulabilirsiniz
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
