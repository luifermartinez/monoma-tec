const Footer = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto font-mplus">
      <div className="flex flex-col items-center justify-center py-4">
        <span className="text-sm">Hecho con ❤️ por</span>
        <a
          href="https://www.linkedin.com/in/luifer132/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:text-gray-500"
        >
          Luis Martinez
        </a>
      </div>
    </footer>
  );
};

export default Footer;
