import { useParams } from "react-router-dom";

const productsArr = [
  {
    id: "m1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "m2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "m3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "m4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetail = () => {
  const params = useParams();

  function getProductById() {
    return productsArr.find((product) => product.id === params.Id);
  }

  const product = getProductById();

  const Title = product.title;
  const Price = product.price;
  const ImageLink = product.imageUrl;

  return (
    <div>
      <h1> {Title} </h1>
      <img src={ImageLink} alt={product.id} />
      <h2> {Price} </h2>
    </div>
  );
};

export default ProductDetail;
