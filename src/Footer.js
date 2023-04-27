const Footer = () => {
  return (
    <nav className="bg-info">
      <div className="container row">
        <div className="h1 fw-bold text-light text-center col-6">
          The Generics
        </div>
        <div className="container p-2 m-3 text-end col">
          <a href="https://www.youtube.com">
            <img
              className="p-2 m-1"
              src="https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png"
              alt=""
            />
          </a>
          <a href="https://spotify.com">
            <img
              className="p-2 m-1"
              src="https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png"
              alt=""
            />
          </a>
          <a href="https://facebook.com">
            <img
              className="p-2 m-1"
              src="https://prasadyash2411.github.io/ecom-website/img/Facebook Logo.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
