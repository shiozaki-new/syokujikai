export default function Guide4() {
  // 画像は src/assets/images に配置済み（004.jpg から 20枚）
  // Vite の import.meta.glob でビルド時に取り込み、URL を得る
  const modules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  });

  const firstSix = ['004','005','006','007','008','009'].map((n) => `${n}.jpg`);
  const nextFourteen = Array.from({ length: 14 }, (_, i) => String(10 + i).padStart(4, '0') + '.jpg'); // 0010.jpg〜0023.jpg
  const order = [...firstSix, ...nextFourteen];

  const images = order
    .map((name) => {
      const key = `../assets/images/${name}`;
      const url = modules[key];
      if (!url) return null;
      return { src: url, alt: `会場写真 ${name.replace(/\D/g, '')}` };
    })
    .filter(Boolean);

  return (
    <section id="guide4" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-gray-800 mb-6">
          写真ギャラリー
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.src} className="group relative overflow-hidden rounded-lg shadow bg-gray-100">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 md:h-48 lg:h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            ← トップへ戻る
          </a>
        </div>
      </div>
    </section>
  );
}
