import Header from "@/app/components/Header";
import Pelajaran from "@/app/components/Pelajaran";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/materi?limit=8`);
  const mapel = await response.json();

  return (
    <div>
      <Header />
      <div className="p-4">
      <h1 className="text-xl font-bold">Daftar Materi</h1>
      </div>
      <Pelajaran api={mapel}/>
    </div>
  );
};

export default Home;
