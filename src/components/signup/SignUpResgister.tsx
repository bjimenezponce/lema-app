import Image from "next/image";
import PatternPng from "../../../public/img/pattern.png";

const SignUpRegister: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={PatternPng}
        alt="Pattern Background"
        width={200}
        height={100}
        className="mb-0" // Margen inferior para espaciar la imagen del input
      />

      <h5 className=" mb-2 font-sans font-semibold text-sm">Regristrate</h5>

      <input
        className="w-36 text-center border border-gray-300 rounded-md mb-4 shadow-md shadow-indigo-500/50"
        type="text"
        name="FirstName"
        id="FirstName"
        placeholder="Nombre"
      />
      <input
        className="w-36 text-center border border-gray-300 rounded-md shadow-md 
        shadow-indigo-500/50 mb-4"
        type="text"
        name="LastName"
        id="LastName"
        placeholder="Apellido"
      />
    </div>
  );
};

export default SignUpRegister;
