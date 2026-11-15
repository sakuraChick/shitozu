import AboutCard from "../modules/AboutCard.jsx";

function AboutPage() {
  return (
    <main>
      <section className="about-intro page-shell">
        <p className="eyebrow">OUR STORY</p>
        <h1 className="page-title">私たちは、誰？</h1>
        <p className="page-intro">雲和3年に創立された奇克蘭の靴下専門店。<br />お気に入りの一足との出会いを、世界中へ届けます。</p>
      </section>
      <div className="about-grid page-shell">
        <AboutCard number="01" category="WORLDWIDE" title="国際化">海外配送にも対応し、世界へ店舗を広げています。淡海、近海、浅春、桑港、羅府など、主要都市へお届けします。</AboutCard>
        <AboutCard number="02" category="PARTNERS" title="パートナーシップ">豊川グループ、桃仁靴下株式会社、ANON TOKYOをはじめ、世界中のブランドと一緒に新しい商品をつくっています。</AboutCard>
        <AboutCard number="03" category="SOURCING" title="直接の供給源" link={{ href: "/stock", label: "コレクションを見る" }}>豊川祥子、千早愛音、若葉睦、安和昴、井芹仁菜、河原木桃香、喜多郁代など、個性豊かな提供者とつながっています。</AboutCard>
      </div>
    </main>
  )
}

export default AboutPage
