import { useEffect } from 'react';

export default function Gallery() {
  useEffect(() => {
    const loadInstagramEmbed = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);

    script.onload = loadInstagramEmbed;

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const instagramPosts = [
    'https://www.instagram.com/p/CqL5x8xvRnU/',
    'https://www.instagram.com/p/CrJ9mKdPvR5/',
    'https://www.instagram.com/p/CsK4hLkPvR9/',
    'https://www.instagram.com/p/CtL5m9dPvQx/',
    'https://www.instagram.com/p/CuM6n0rPvPk/',
    'https://www.instagram.com/p/CvN7o1sPvOa/'
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Çalışmalarımızdan Örnekler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel ekibimizin gerçekleştirdiği montaj örnekleri
          </p>
          <a
            href="https://www.instagram.com/eskisehir_mobilyaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90 text-white font-semibold rounded-lg transition-opacity"
          >
            Instagram'da Tümünü Görün
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {instagramPosts.map((postUrl, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow instagram-container"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
              ></blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
