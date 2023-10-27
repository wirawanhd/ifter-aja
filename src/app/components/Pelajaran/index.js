import Image from "next/image";
import Link from "next/link"

const Pelajaran = ({title, images, id}) => {
  return (
    <Link href={`/materi/${id}`} className="cursor-pointer">
      <Image
        src={images}
        alt="..."
        width={600}
        height={400}
      />
      <h3>{title}</h3>
    </Link>
  );
};

export default Pelajaran;
