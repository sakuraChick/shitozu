import sakiko from "../../assets/images/togawa-sakiko.PNG";
import mutsumi from "../../assets/images/wakaba-mutsumi.JPG";
import subaru from "../../assets/images/awa-subaru.JPG";
import nina from "../../assets/images/iseri-nina.JPG";
import momoka from "../../assets/images/kawaragi-momoka.jpeg";
import ikuyo from "../../assets/images/kita-ikuyo.PNG";
import StockCard from "../modules/StockCard.jsx";


function StockPage() {
  const items = [
    [sakiko, "豊川祥子", "AVAILABLE SOON"], [mutsumi, "若葉睦", "COLLECTION"],
    [subaru, "安和昴", "COLLECTION"], [nina, "井芹仁菜", "COLLECTION"],
    [momoka, "河原木桃香", "COMING SOON", "発売情報"], [ikuyo, "喜多郁代", "COLLECTION"],
  ]
  return (
    <main className="page-shell stock-page">
      <header className="stock-heading">
        <p className="eyebrow">THE COLLECTION</p>
        <h1 className="page-title">在庫情報</h1>
        <p className="page-intro">現在のコレクションをご覧ください。販売状況は随時更新します。</p>
      </header>
      <div className="stock-grid">
        {items.map(([image, name, status, label]) => <StockCard key={name} image={image} name={name} status={status} linkLabel={label} />)}
      </div>
    </main>
  )
}

export default StockPage
