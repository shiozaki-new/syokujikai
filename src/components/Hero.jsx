import heroImage from '../assets/images/hero-bg.jpg';

export default function Hero() {
  return (
    <section 
      className="relative text-white py-32 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* 背景を暗くするフィルター */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 文字などのコンテンツ */}
      <div className="relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-semibold md:font-bold tracking-wide mb-4">
          豪華食事会
        </h2>
        <p className="font-body text-lg md:text-xl leading-relaxed md:leading-8 text-white/90 mb-2">
          徒歩10分の旅行を味わう
        </p>
      </div>
    </section>
  );
}
