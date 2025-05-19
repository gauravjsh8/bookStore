import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

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
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FreeBooks;
