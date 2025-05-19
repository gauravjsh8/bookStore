import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FreeBooks = () => {
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="container mt-5">
        <div>
          {" "}
          <h3>
            Free offered {""}
            <span className="text-danger">courses</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            minus? Quo, quod laboriosam commodi odio at doloremque officia
            delectus obcaecati mollitia recusandae. Tenetur, praesentium? Amet
            harum inventore et laborum accusantium! Perferendis, veniam. Maxime,
            earum quia praesentium voluptatem iusto, illo pariatur qui vero est
            recusandae, eius dolorum neque necessitatibus ad vel dolor sequi.
            Dolore porro, deserunt commodi vitae fuga reprehenderit nam.
          </p>
        </div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default FreeBooks;
