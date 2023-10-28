import Header from "@/app/components/Header";
import Pelajaran from "@/app/components/Pelajaran";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/materi`, {
    method: 'GET'
  });
  const materi = await response.json();
  console.log(materi)

  return (
    <div>
      <Header />
      <h1>HALO, USER</h1>
      <h2>Berikut materi yang bisa anda pelajari </h2>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 m-4">
      {materi.map((data) => {
        return (    
          <div key={data._id} className="shadow-xl">      
          <Pelajaran
            title={data.judul_materi}
            images={data.content_materi.gambar}
            id={data._id}
          />
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Home;
