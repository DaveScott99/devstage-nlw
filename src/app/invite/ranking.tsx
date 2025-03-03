import gold from "../../assets/medal_gold.svg";
import silver from "../../assets/medal_silver.svg";
import cooper from "../../assets/medal_cooper.svg";
import Image from "next/image";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-2">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Davi Santos
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1046
          </span>

          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-2">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Melissa Loures
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            928
          </span>

          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-2">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Rodrigo Gonçalves
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            874
          </span>

          <Image src={cooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  );
}
