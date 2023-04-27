const MusicSection = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <section class="container ">
      <h2 class="text-center ">MUSIC</h2>

      <div className="container p-2 text-center row">
        {productsArr.map((product) => (
          <div className="text-center p-2 col-6 ">
            <h3> {product.title} </h3>
            <div>
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="m-2">
              <span>
                $<span> {product.price} </span>
              </span>
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
