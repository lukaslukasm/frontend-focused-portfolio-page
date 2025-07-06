import DisplayMsg from './DisplayMsg';

function AboutMe() {
  return (
    <section className="h-auto min-h-screen">
      <DisplayMsg category="About me" categoryClassName="text-green-500">
        Mindset
      </DisplayMsg>
      <div className="grid w-full flex-grow grid-cols-12 gap-4">
        <div className="about-me--card order-1 row-span-5 row-start-1"></div>
        <div className="about-me--card order-2 col-span-2 row-span-3"></div>
        <div className="about-me--card order-3 col-span-2 row-span-5"></div>
        <div className="about-me--card order-3 col-span-2 row-span-4"></div>
        <div className="about-me--card order-3 col-span-6 row-span-2"></div>
        <div className="col-span-4 col-start-5 row-span-10 grid grid-cols-subgrid grid-rows-subgrid">
          <div className="about-me--card order-2 row-span-2"></div>
          <div className="about-me--card order-7 row-span-8"></div>
        </div>
        <div className="col-span-4 row-span-12 grid grid-cols-subgrid grid-rows-subgrid">
          <div className="about-me--card col-span-2 row-span-3"></div>
          <div className="about-me--card col-span-2 row-span-3"></div>
          <div className="about-me--card row-span-4"></div>
          <div className="about-me--card row-span-5"></div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
