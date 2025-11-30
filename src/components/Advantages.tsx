import { MapPin, Users, MessageSquare, CheckCircle, Package, DollarSign } from 'lucide-react';

const advantages = [
  {
    icon: MapPin,
    text: 'Eskişehir merkez ve tüm ilçelere hızlı hizmet'
  },
  {
    icon: Users,
    text: 'Profesyonel marangoz ekibi'
  },
  {
    icon: MessageSquare,
    text: 'WhatsApp\'tan fotoğraf ile hızlı fiyat'
  },
  {
    icon: CheckCircle,
    text: 'Temiz işçilik ve güvenilir teslim'
  },
  {
    icon: Package,
    text: 'Tüm mobilya markalarıyla uyumlu'
  },
  {
    icon: DollarSign,
    text: 'Şeffaf fiyat, sürpriz maliyet yok'
  }
];

export default function Advantages() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Eskişehir'de güvenilir ve profesyonel mobilya hizmeti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {advantage.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
