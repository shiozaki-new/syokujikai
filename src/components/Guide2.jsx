export default function Guide2() {
  return (
    <section id="guide2" className="py-16 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-gray-800 mb-6">
          タイムスケジュール
        </h3>

        <ul>
          {/* 10:45 会社出発 */}
          <li className="flex items-start py-6 border-b border-gray-200">
            <time className="w-24 text-xl font-semibold text-gray-900 flex-shrink-0">10:45</time>
            <div className="pl-6">
              <p className="text-lg text-gray-900">会社出発</p>
            </div>
          </li>

          {/* 11:00 二木屋 食事開始（ハイライト） */}
          <li className="flex items-start py-6 my-4 px-4 bg-gray-50 rounded-xl border border-gray-200">
            <time className="w-24 text-xl font-semibold text-gray-900 flex-shrink-0">11:00</time>
            <div className="pl-6">
              <p className="text-lg text-gray-900">
                二木屋 食事開始
                <span className="block mt-1 text-sm text-gray-600">御陵（ごりょう）和食コース料理</span>
              </p>
            </div>
          </li>

          {/* 13:00 終了 */}
          <li className="flex items-start py-6 border-b border-gray-200">
            <time className="w-24 text-xl font-semibold text-gray-900 flex-shrink-0">13:00</time>
            <div className="pl-6">
              <p className="text-lg text-gray-900">終了</p>
            </div>
          </li>

          {/* 13:15 会社到着 */}
          <li className="flex items-start py-6">
            <time className="w-24 text-xl font-semibold text-gray-900 flex-shrink-0">13:15</time>
            <div className="pl-6">
              <p className="text-lg text-gray-900">会社到着</p>
            </div>
          </li>
        </ul>
        <div className="mt-8">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            ← トップへ戻る
          </a>
        </div>
      </div>
    </section>
  );
}
