import { Wrench, PackageOpen, Truck, Hammer, Paintbrush, Building2 } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Mobilya Montaj',
    description: 'Tüm mobilya markalarının profesyonel montajı ve kurulumu'
  },
  {
    icon: PackageOpen,
    title: 'Sökme – Takma',
    description: 'Taşınma için mobilya sökme ve yeni adrese tekrar montaj'
  },
  {
    icon: Truck,
    title: 'Mobilya Taşıma',
    description: 'Güvenli paketleme ve özenli mobilya taşıma hizmeti'
  },
  {
    icon: Hammer,
    title: 'Mobilya Tamiri',
    description: 'Kırık, çatlak ve hasarlı mobilya onarım hizmetleri'
  },
  {
    icon: Paintbrush,
    title: 'Boyama & Yenileme',
    description: 'Eski mobilyalara yeni görünüm kazandırma'
  },
  {
    icon: Building2,
    title: 'Ofis & Kurumsal Montaj',
    description: 'İşyerleri için profesyonel mobilya kurulum hizmeti'
  }
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mobilya ihtiyaçlarınız için kapsamlı çözümler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
