export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            EskişehirMobilya.com
          </h3>
          <p className="text-gray-400 mb-6">
            Eskişehir'de profesyonel mobilya montaj ve tamirat hizmetleri
          </p>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} EskişehirMobilya.com - Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
