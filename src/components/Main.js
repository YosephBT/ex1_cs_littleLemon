import headImage from "../assets/img/restaurant_food_B.jpg"
const Main = () => {
  return (
    <main>
      <section>
        <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        <a href="#" role="button" >Reserve a Table</a>
        </div>
        <div>
          <img src={headImage} alt="" />
        </div>
      </section>
      <section>
        <h2>Specials</h2>
      </section>
      <section>
        <h2>Testimonials</h2>
      </section>
      <section>
        <h2>About</h2>
      </section>
    </main>
  );
};

export default Main;
