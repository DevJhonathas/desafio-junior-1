import AnimalCard from "@/app/components/cards/AnimalCard";
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col mt-[50px]">
      <SearchBar></SearchBar>
      <AnimalCard></AnimalCard>
    </main>
  );
}
