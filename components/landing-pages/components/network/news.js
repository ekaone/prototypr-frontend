const BlogPostCard = ({img}) => {
  return (
    <div style={{backgroundImage:`url("${img}")`, backgroundPosition:'center', backgroundSize:'cover'}} className=" cursor-pointer transition ease-in-out w-full h-[240px] rounded-lg border border-black border-opacity-5"></div>
  );
};

const NewsContent = () => {
  return (
    <div className="bg-white">
      <div className="w-full bg-[#F8B700] p-10 rounded-b-[40px] -translate-y-1"></div>

      <div className="w-full px-0 md:px-5 bg-white py-10 ">
        <div className="p-5 bg-[#fff] ] max-w-7xl mx-auto">
          <h2 className="text-[24px] my-4 text-[#0F1F40] font-semibold font-inter max-w-md leading-[32px]">
            More about <br /> Open Design →
          </h2>
          <div className="flex flex-col lg:flex-nowrap lg:flex lg:flex-row md:flex md:flex-wrap md:flex-col gap-5 py-2 ">
            <BlogPostCard img={'/static/images/cursorlock.png'} />
            <BlogPostCard img={'/static/images/globepen.png'} />
            <BlogPostCard img={`https://prototyprio.gumlet.io/strapi/2272daa0caea148d74b94bc636722b51.png?format=webp&w=700&dpr=2.0`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
