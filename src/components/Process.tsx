import { Camera, Calendar, UserCheck, Hammer, CheckCircle2, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'WhatsApp\'tan fotoğraf gönderin',
    description: 'Mobilyanızın fotoğrafını çekin ve bize gönderin'
  },
  {
    icon: Calendar,
    title: 'Ön fiyat + randevu verelim',
    description: 'Size uygun tarih ve saatte randevu oluşturalım'
  },
  {
    icon: UserCheck,
    title: 'Usta adrese gelir',
    description: 'Profesyonel ekibimiz belirlenen saatte adresinizde'
  },
  {
    icon: Hammer,
    title: 'Montaj / tamir / sökme yapılır',
    description: 'İşiniz özenle ve profesyonelce tamamlanır'
  },
  {
    icon: CheckCircle2,
    title: 'Kontrol ve temiz teslim',
    description: 'Son kontroller yapılır, ortam temizlenir'
  }
];

export default function Process() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            5 adımda hızlı ve güvenilir hizmet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 min-h-[48px] flex items-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/905310342510"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            1 Dakikada Fiyat Al
          </a>
        </div>
      </div>
    </section>
  );
}
