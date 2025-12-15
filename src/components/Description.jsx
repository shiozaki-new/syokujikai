export default function Description() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-center text-gray-800 mb-8">
          企画概要
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">📅</div>
            <h4 className="font-heading font-semibold mb-2">当日案内</h4>
            <p className="font-body text-gray-700 leading-relaxed mb-4">地図、席案内</p>
            <a href="#guide1" className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-500 transition">
              当日案内を見る
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">🕒</div>
            <h4 className="font-heading font-semibold mb-2">タイムスケジュール</h4>
            <p className="font-body text-gray-700 leading-relaxed mb-4">プログラム</p>
            <a href="#guide2" className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-500 transition">
              スケジュールを見る
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">🎂</div>
            <h4 className="font-heading font-semibold mb-2">イベント</h4>
            <p className="font-body text-gray-700 leading-relaxed mb-4">誕生日会ect</p>
            <a href="#guide3" className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-500 transition">
              イベントを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
