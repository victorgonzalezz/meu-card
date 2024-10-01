import "../src/App.css";
function App() {
  return (
    <div className="container">
      <div className="card">
        <a href="#" className="link"></a>
        <div className="card__item">
          <img
            src="https://images.unsplash.com/photo-1652169890471-17c3e68bf920"
            alt=""
            className="img"
          />
        </div>
        <div className="info">
          <h2 className="title">Lorem Ipsum is simply dummy text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="detail">
            <a href="#" className="btn-more">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
