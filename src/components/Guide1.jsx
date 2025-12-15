const Guide1 = () => {
  return (
    <section id="guide1" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-gray-800 mb-4">
          当日案内
        </h3>
        <p className="font-body text-gray-700 leading-relaxed mb-6">
          会場までのアクセスと会場内の座席案内です。以下の地図をご確認ください。
        </p>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow bg-gray-100">
          <img
  src="/guide1-map.jpg"
  alt="会場地図"
  className="w-full h-full object-cover"
  loading="lazy"
/>

        </div>

        <div className="mt-4">
          <a
            href="https://maps.app.goo.gl/PsVDRp9fqNrKeKPA6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-700 hover:text-blue-600 underline"
          >
            Google マップで開く
          </a>
        </div>

        <div className="mt-8">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            ← トップへ戻る
          </a>
        </div>
      </div>
    </section>
  );
};

export default Guide1;
