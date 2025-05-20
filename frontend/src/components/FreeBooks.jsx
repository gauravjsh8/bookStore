import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";

const FreeBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getFreeBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books");
        const data = response.data;

        const filterData = data.Books.filter(
          (data) => data.category === "free"
        );

        setBooks(filterData);
      } catch (error) {
        console.log(error);
      }
    };
    getFreeBooks();
  }, []);

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
          {books.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FreeBooks;
