const DashboardBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <span className="text-2xl font-bold text-white">Lista</span>
      <img
        src="/img/pokemon-logo.png"
        alt="pokemon-logo"
        className="h-24 mx-auto"
      />
    </div>
  );
};

export default DashboardBanner;
