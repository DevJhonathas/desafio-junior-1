export default function Home() {
  return (
    <div>
        <div className="w-screen h-screen inset-0 -z-10">
          <div className="absolute w-[280px] h-[280px] top-[-800px] left-[-100px] rounded-full 
          md:shadow-[inset_0_0_150px_200px_var(--bkg-primary-color-balls),_0_0_200px_120px_var(--bkg-secondery-color-balls)] 
          blur-[500px] scale-[2] shadow-[inset_0_0_75px_100px_var(--bkg-primary-color-balls),_0_0_70px_50px_var(--bkg-secondery-color-balls)] 
          blur-[500px] scale-[2]">
          </div>
          <div className="absolute md:w-[280px] w-[1000px] h-[280px] top-[200px] md:right-[50px] right-[-700px] rounded-full 
          md:shadow-[inset_0_0_10px_25px_var(--bkg-primary-color-balls),_0_0_200px_200px_var(--bkg-secondery-color-balls)] 
          blur-[500px] md:scale-[1.2] shadow-[inset_0_0_10px_25px_var(--bkg-primary-color-balls),_0_0_300px_300px_var(--bkg-secondery-color-balls)] 
          blur-[500px] md:scale-[1.2]">
          </div>
        </div>
    </div>
  );
}
