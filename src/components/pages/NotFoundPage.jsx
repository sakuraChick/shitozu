import errorImage from "../../assets/images/waiting-for-your-back.jpg"

function NotFoundPage() {
  return (
    <div className="page-shell">
      <h1 className="page-title">此の頁存すること無し</h1>
      <img src={errorImage} alt="Waiting for your back"/>
      <p>君之帰りを待ちつつ</p>
    </div>)
}

export default NotFoundPage