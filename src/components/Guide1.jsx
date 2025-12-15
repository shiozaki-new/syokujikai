const Guide1 = () => {
  return (
    <section id="guide1" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-gray-800 mb-4">
          当日案内
        </h3>
        <p className="font-body text-gray-700 leading-relaxed mb-6">
          会場までのアクセスです。以下の地図をご確認ください。
        </p>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow bg-gray-100">
          <img
            src="/guide1-map.jpg"
            alt="会場地図"
            className="w-full h-full object-cover"
            decoding="async"
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

        {/* 説明文：席案内 */}
        <h4 className="font-heading text-xl font-semibold text-gray-800 mt-8 mb-2">席案内</h4>
        {/* 座席レイアウト（長テーブル：向かい10席×2） */}
        <div className="mt-4 w-full overflow-x-auto">
          <div className="min-w-[760px] mx-auto py-4">

            {/* 上側 1〜10 */}
            <div className="flex justify-center gap-3 mb-3">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={`top-${i}`}
                  className="w-10 h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center text-sm"
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* テーブル */}
            <div className="mx-auto w-[720px] h-20 rounded-2xl border border-gray-500 bg-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-600">テーブル（向かい10席 × 2）</span>
            </div>

            {/* 下側 11〜20 */}
            <div className="flex justify-center gap-3 mt-3">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={`bottom-${i}`}
                  className="w-10 h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center text-sm"
                >
                  {i + 11}
                </div>
              ))}
            </div>

          </div>
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
