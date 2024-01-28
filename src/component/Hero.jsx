const Hero = () => {
  return (
    <div
      className="hero min-h-96"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/JQ1Ynps/jean-beller-o1-CSRQae-G1-E-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <h1 className="mb-5 text-7xl text-white font-bold">
          NESCO Franchise League (NFL) 2024
        </h1>
      </div>
    </div>
  );
};

export default Hero;
