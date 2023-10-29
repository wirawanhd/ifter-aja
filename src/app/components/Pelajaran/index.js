import Image from "next/image";
import Link from "next/link"

const Pelajaran = ({api}) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-20">
      {api.map((mapel) => {
        return(
          <Link href={`/user/materi/${mapel._id}`} className="cursor-pointer">
            <Image
              src={mapel.content_materi.gambar}
              alt="..."
              width={350}
              height={350}
              className="max-w-75 max-h-82.5 object-cover"
              />
            <h3 className="font-bold md:text-md text-sm p-4">{mapel.judul_materi}</h3>
          </Link>
        )
      })}
    
        </div>
  );
};

export default Pelajaran;
