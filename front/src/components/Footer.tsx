import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container flex flex-col h-full mt-20 items-center justify-center bottom-0">
      <div className="flex flex-col gap-10 items-center py-10 border-b-[1px] dark:border-accent border-cyan-400">
        <h1 className="text-2xl dark:text-white text-primary">
          Contactame
          <span className="text-xl text-cyan-400 dark:text-accent">:</span>
        </h1>
        <div className="flex gap-20">
          <div className="flex gap-3 justify-center items-center">
            <IoMdMail className="text-cyan-400 dark:text-accent text-xl" />
            <div className="flex flex-col ">
              <h1 className="text-cyan-400 dark:text-accent text-xl">
                Correo Electrónico
              </h1>
              <p className="dark:text-white text-primary">
                camilofullstack@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <BsFillTelephoneFill className="text-cyan-400 dark:text-accent text-xl" />
            <div className="flex flex-col text-xl">
              <h1 className="text-cyan-400 dark:text-accent text-xl">
                Teléfono
              </h1>
              <p className="dark:text-white text-primary">(+57) 304-331-5068</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <p className="dark:text-white text-primary font-semibold dark:font-normal">
          Camilo Sierra | 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
