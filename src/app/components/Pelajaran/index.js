import Image from "next/image";
import Link from "next/link"

const Pelajaran = ({title, images, id}) => {
  return (
    <Link href={`/materi/${id}`} className="cursor-pointer">
      <Image
        src={images}
        alt="..."
        width={350}
        height={350}
      />
      <h3 className="font-bold md:text-md text-sm p-4">{title}</h3>
    </Link>
  );
};

export default Pelajaran;
