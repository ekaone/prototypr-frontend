// import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import gumletLoader from "@/components/new-index/gumletLoader";
const defaultBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABLCAQAAAA1k5H2AAAAi0lEQVR42u3SMQEAAAgDoC251a3gL2SgmfBYBRAA`;
const ToolImageCard = ({
  posts,
  type,
  columns,
  tagNumber,
  navSponsor,
  sponsor,
}) => {
  return (
    <div
      className={`grid grid-cols-1 ${columns ? columns : "lg:grid-cols-3"} gap-4 w-full flex-wrap`}
    >
      {posts.map((post, i) => {
        let title, slug, coverImage, tags, logo;

        title = post?.attributes?.title;
        slug = post.attributes?.slug;
        if (tagNumber == 1) {
          tags = post?.attributes?.tags?.data.slice(0, 1);
        } else {
          tags = post?.attributes?.tags?.data.slice(0, 2);
        }
        // let tool = post.attributes

        // let coverImage =
        // tool.featuredImage?.data?.attributes?.url
        //   ? tool.featuredImage.data.attributes.url
        //   : tool.legacyFeaturedImage
        //   ? tool.legacyFeaturedImage
        //   : "https://s3-us-west-1.amazonaws.com/tinify-bucket/%2Fprototypr%2Ftemp%2F1595435549331-1595435549330.png";

        //   coverImage = (tool?.legacyMedia?.logoNew || coverImage?.logoNew || tool.legacyMedia?.mediaItemUrl)

        coverImage = post.attributes?.featuredImage?.data?.attributes?.url
          ? post.attributes.featuredImage.data.attributes.url
          : post.attributes?.legacyFeaturedImage?.mediaItemUrl
            ? post.attributes?.legacyFeaturedImage?.mediaItemUrl
            : "https://s3-us-west-1.amazonaws.com/tinify-bucket/%2Fprototypr%2Ftemp%2F1595435549331-1595435549330.png";

        logo =
          post?.attributes?.legacyFeaturedImage?.logoNew ||
          coverImage?.logoNew ||
          post.attributes?.legacyMedia?.mediaItemUrl ||
          post.attributes?.legacyFeaturedImage?.mediaItemUrl;

        return (
          <>
            <Link href={`/toolbox/${slug}`}>
              <div
                className={
                  "flex flex-col- pt-3 pb-1 grid grid-col-1 gap-4 flex-grow h-full rounded-t-2xl shadow-sm hover:shadow-xl border border-gray-300/60 transition transition-all duration-400 hover:scale-[1.02] group bg-white relative rounded-2xl fade-"
                }
              >
                <div className="rounded-xl px-3 block cursor-pointer">
                  <div
                    className="rounded-xl relative flex"
                    style={{
                      //   background: this.state.backgroundShimmer,
                      display: "flex",
                      height: "145px",
                    }}
                  >
                    <div className="absolute top-0 left-0 z-10 rounded-xl w-full h-full bg-gradient-to-b from-black/5 via-black/10 to-black/40 group-hover:scale-[1.03] transition transition-all duration-700"></div>
                    <Image
                      key={coverImage}
                      loader={gumletLoader}
                      priority={false < 2 ? `true` : `false`}
                      data-priority={false < 2 ? `true` : `false`}
                      fetchpriority={false < 2 ? "true" : "false"}
                      data-gmlazy={false < 2 ? `false` : `true`}
                      placeholder="blur"
                      blurDataURL={
                        post?.attributes?.base64
                          ? post?.attributes?.base64
                          : defaultBase64
                      }
                      alt="Brand logo for external website's link"
                      className="object-cover rounded-xl bg-white group-hover:shadow-sm group-hover:scale-[1.03] transition transition-all duration-700 "
                      src={coverImage}
                      fill
                    />
                  </div>
                  <div className="rounded-xl bg-white z-20 -mt-[6px] absolute ml-[12px]">
                    <Image
                      key={logo}
                      loader={gumletLoader}
                      width={48}
                      height={48}
                      placeholder="blur"
                      blurDataURL={
                        post?.attributes?.logoBase64
                          ? post?.attributes?.logoBase64
                          : defaultBase64
                      }
                      alt="Brand logo for external website's link"
                      className="object-cover flex-shrink-0 shine rounded-xl  w-[48px] h-[48px] border-2 border-white bg-white shadow -mt-[22px]"
                      src={logo}
                    />
                  </div>
                </div>
                <div className="px-[18px] mb-3 mt-3 flex">
                  {/* <div className="pl-3 overflow-hidden mt-1"> */}
                  <div className="pl-2 overflow-hidden my-auto">
                    <div className={"line-clamp-1 tracking-tight font-medium"}>
                      {" "}
                      {title}
                    </div>
                    {/* {this.props.prototool !== true && */}
                    {tags?.length ? (
                      <div className="text-xs text-gray-500 mt-0.5 capitalize">
                        {tags[0].attributes.name}
                      </div>
                    ) : null}

                    {/* <div className='w-1/4 relative'> {this._getTag()}</div> */}
                  </div>
                  {/* {this.props.voteButton} */}
                </div>

                {/* {this._getFooter()} */}
              </div>
            </Link>
            {i == 2 && navSponsor && (
              <Link target="_blank" href={navSponsor.link}>
                <div
                  className={
                    "flex flex-col- pt-3 pb-1 grid grid-col-1 gap-4 flex-grow h-full rounded-t-2xl shadow-sm hover:shadow-xl border border-gray-300/60 transition transition-all duration-400 hover:scale-[1.02] group bg-white relative rounded-2xl fade-"
                  }
                >
                  <div className="rounded-xl px-3 block cursor-pointer">
                    <div
                      className="rounded-xl relative flex"
                      style={{
                        //   background: this.state.backgroundShimmer,
                        display: "flex",
                        height: "145px",
                      }}
                    >
                      <div className="absolute top-0 left-0 z-10 rounded-xl w-full h-full bg-gradient-to-b from-black/5 via-black/10 to-black/40 group-hover:scale-[1.03] transition transition-all duration-700"></div>
                      <Image
                        key={navSponsor.cardImage}
                        loader={gumletLoader}
                        priority={false < 2 ? `true` : `false`}
                        data-priority={false < 2 ? `true` : `false`}
                        fetchpriority={false < 2 ? "true" : "false"}
                        data-gmlazy={false < 2 ? `false` : `true`}
                        // placeholder="blur"
                        // blurDataURL={
                        //   post?.attributes?.base64
                        //     ? post?.attributes?.base64
                        //     : defaultBase64
                        // }
                        alt={`${navSponsor.name} banner`}
                        className="object-cover rounded-xl bg-white group-hover:shadow-sm group-hover:scale-[1.03] transition transition-all duration-700 "
                        src={navSponsor.cardImage}
                        fill
                      />
                    </div>
                    <div className="rounded-xl bg-white z-20 -mt-[6px] absolute ml-[12px]">
                      <Image
                        key={navSponsor.featuredImage}
                        loader={gumletLoader}
                        width={48}
                        height={48}
                        // placeholder="blur"
                        // blurDataURL={
                        //   post?.attributes?.logoBase64
                        //     ? post?.attributes?.logoBase64
                        //     : defaultBase64
                        // }
                        alt={`${navSponsor.name} logo`}
                        className="object-cover flex-shrink-0 shine rounded-xl  w-[48px] h-[48px] border-2 border-white bg-white shadow -mt-[22px]"
                        src={navSponsor.featuredImage}
                      />
                    </div>
                  </div>
                  <div className="px-[18px] mb-3 mt-3 flex">
                    <div className="pl-2 overflow-hidden my-auto">
                      <div
                        className={"line-clamp-1 tracking-tight font-medium"}
                      >
                        {" "}
                        {navSponsor.title}
                      </div>
                      <div className="text-xs font-semibold text-gray-500 mt-0.5 capitalize">
                        Ad
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default ToolImageCard;
