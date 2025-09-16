import AnimalCreateModal from "@/app/components/modals/AnimalCreateModal";
import SearchBar from "@/app/components/Searchbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>testenado</h1>
      <SearchBar></SearchBar>
      <AnimalCreateModal></AnimalCreateModal>
    </main>
  );
}
