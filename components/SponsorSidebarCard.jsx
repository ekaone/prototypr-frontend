import Link from "next/link";

const { default: Image } = require("next/image");
const { default: gumletLoader } = require("./new-index/gumletLoader");

const SponsorSidebarCard = ({ 
    sponsorLogo="/static/images/placeholder/letter-logo.png", 
    sponsorLink="https://letter.so", 
    title="Build newsletters faster with Letter", 
    sponsorName="Letter" }) => {
  return (
    <div className="flex mt-6 flex-col grid gap-4">
      <>
        <Link href={`${sponsorLink}`}>
          <div className="w-full h-auto bg-[#f8f8ff] border-gray-200 border rounded-xl cursor-pointer flex flex-col">
            <div className="flex flex-row p-4 rounded-xl">
              <div
                style={{ flex: "0 0 3em" }}
                className="w-12 h-12 mr-2 relative border border-opacity-10 border-black rounded-xl overflow-hidden"
              >
                {sponsorLogo ? (
                  <Image
                    tabIndex={0}
                    loader={gumletLoader}
                    layout="fill"
                    objectFit="cover"
                    src={sponsorLogo}
                    className="object-cover"
                    alt="Author profile picture"
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col grid gap-1 justify-center">
                <p className=" h-[18px] overflow-hidden line-clamp-1 inline font-inter text-sm">
                  {title}
                </p>
                <div className="flex flex-row gap-1 text-sm text-gray-500">
                  {/* <p className=" h-[18px] max-w-[100px] overflow-hidden line-clamp-1 inline font-inter">
                    {sponsorName}
                  </p> */}
                  <span className="text-xs mt-1 capitalize bg-gray-100 font-inter px-3.5 py-0.5 border border-black border-opacity-5 text-black rounded-full">Sponsored</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    </div>
  );
};

export default SponsorSidebarCard