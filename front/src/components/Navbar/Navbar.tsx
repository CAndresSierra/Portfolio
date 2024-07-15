const Navbar = () => {
  return (
    <div className="bg-transparent flex flex-row justify-around py-4 ">
      <h1 className="text-white text-[18px]">Camilo Sierra</h1>
      <div className="flex flex-row gap-5">
        <a href="#" className="text-white text-[18px]">
          Inicio
        </a>
        <a href="#" className="text-white text-[18px]">
          Sobre mi
        </a>
        <a href="#" className="text-white text-[18px]">
          Contacto
        </a>
      </div>
    </div>
  );
};

export default Navbar;
