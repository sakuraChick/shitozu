import { Link } from "react-router-dom";
import momokaImage from '../../assets/images/kawaragi-momoka.jpeg';
import sakikoImage from "../../assets/images/togawa-sakiko-2.PNG";
import truckIcon from "../../assets/icons/truck-fast-solid-full.svg";
import planeIcon from "../../assets/icons/plane-solid-full.svg";
import shipIcon from "../../assets/icons/ship-solid-full.svg";
import Hero from "../modules/Hero.jsx";
import ShippingCard from "../modules/ShippingCard.jsx";

function HomePage() {
  return (
    <main>
      <Hero image={momokaImage} imageAlt="桃香味商品のイメージ" eyebrow="NEW RELEASE · DATE TO BE ANNOUNCED"
        title={<>最新型<br />百日漬、桃香味。</>} action="/stock" actionLabel="発売情報を見る">
        <>河原木桃香の靴下が、まもなく登場。<br />汗と絹が混ざり合う、ここだけの香り。</>
      </Hero>
      <section className="feature page-shell" aria-labelledby="feature-title">
        <div className="feature-copy">
          <p className="eyebrow">LIMITED COLLABORATION</p>
          <h2 id="feature-title">好きなものを、<br />好きなままに。</h2>
          <p>豊川祥子とアークナイツのコラボレーション。<br />アベムジカのメンバーもラインナップ。</p>
          <Link className="text-link" to="/stock">コレクションを見る<span aria-hidden="true">→</span></Link>
        </div>
        <img className="feature-image" src={sakikoImage} alt="豊川祥子とのコラボレーション" />
      </section>
      <section className="shipping page-shell" aria-labelledby="shipping-title">
        <div className="section-heading">
          <p className="eyebrow">DELIVERY, YOUR WAY</p>
          <h2 id="shipping-title">世界へ、何処までも。</h2>
        </div>
        <div className="shipping-grid">
          <ShippingCard icon={truckIcon} title="トラック配送">奇克蘭全国へ、最速当日到着。</ShippingCard>
          <ShippingCard icon={shipIcon} title="船便">世界へ届ける、お得な配送方法。</ShippingCard>
          <ShippingCard icon={planeIcon} title="航空便">世界の主要都市まで、最短三日。</ShippingCard>
        </div>
      </section>
    </main>
  )
}

export default HomePage
