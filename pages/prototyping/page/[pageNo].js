import Layout from "@/components/new-index/layoutForIndex";

import {
  getAllPostsForToolsSubcategoryPage,
  getPostsByPageForToolsSubcategoryPage,
} from "@/lib/api";
import ToolboxIndexPage from "@/components/toolbox/ToolboxIndexPage";

import get_all_tags from "@/lib/menus/lib/getAllTagsFromMenu";
import ALL_SLUGS_CATEGORY from "@/lib/menus/prototyping";
import Footer from "@/components/footer";
import getSponsors from "@/lib/utils/getSponsors";
import { createB64WithFallback } from "@/lib/utils/blurHashToDataURL";

const PAGE_SIZE = 15;

const BREADCRUMBS = {
  pageTitle: "Prototyping",
  links: [
    {
      name: "Home",
      slug: "/",
      svg: (
        <svg
          className="w-4 h-4 inline -mt-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2-4h8v2H8v-2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    { name: "Toolbox", slug: "/toolbox" },
    // {name:'Prototyping', slug:'/prototyping/page/1'}
  ],
};

export default function ToolboxPage({ allPosts = [], preview, pagination, sponsors, navSponsor }) {
  return (
    <>
      <Layout
        sponsor={navSponsor}
        padding={false}
        seo={{
          title: "Prototypr Prototyping Toolbox.",
          description:
            "Find tools like Adobe XD, Sketch, Figma, Marvel, and InVision.",
          //   image: "",
          canonical: `https://prototypr.io/prototyping/page/${pagination?.page}`,
          url: `https://prototypr.io/prototyping/page/${pagination?.page}`,
        }}
        activeNav={"toolbox"}
        preview={preview}
      >
        <ToolboxIndexPage
         sponsors={sponsors}
         navSponsor={navSponsor}
          paginationRoot={`/prototyping`}
          filterCategories={ALL_SLUGS_CATEGORY}
          urlRoot={`/prototyping`}
          title="All Prototyping Tools"
          description="All the tools for prototyping apps and web products."
          pagination={pagination}
          pageSize={PAGE_SIZE}
          allPosts={allPosts}
          breadcrumbs={BREADCRUMBS}
        />
      </Layout>

      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = null, params }) {
  const pageSize = PAGE_SIZE;
  const page = params.pageNo;
  var all_tags = get_all_tags(ALL_SLUGS_CATEGORY);

  const allPosts =
    (await getPostsByPageForToolsSubcategoryPage(
      preview,
      pageSize,
      page,
      all_tags
    )) || [];
  allPosts.data?.map(post => {
    // add blurhash to allPosts images
    post.attributes.base64 = createB64WithFallback(
      post?.attributes?.featuredImage?.data?.attributes?.blurhash
    );
    post.attributes.logoBase64 = createB64WithFallback(
      post?.attributes?.logo?.data?.attributes?.blurhash
    );

    //this is the part that fails
    return `/toolbox/${post.attributes.slug}`;
  });

  const { navSponsor, sponsors } = await getSponsors();

  const pagination = allPosts.meta.pagination;
  return {
    props: {
      allPosts: allPosts.data,
      preview,
      pagination,
      navSponsor,
      sponsors,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  var all_tags = get_all_tags(ALL_SLUGS_CATEGORY);

  const allPosts =
    (await getAllPostsForToolsSubcategoryPage(null, PAGE_SIZE, 0, all_tags)) ||
    [];
  const pagination = allPosts.meta.pagination;
  const pageCount = pagination.pageCount;
  const pageCountArr = new Array(pageCount).fill(" ");

  return {
    paths:
      (pageCountArr &&
        pageCountArr.map((pageNo, index) => {
          return `/prototyping/page/${index}`;
        })) ||
      [],
    fallback: true,
  };
}
