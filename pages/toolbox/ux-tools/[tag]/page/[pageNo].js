import Layout from "@/components/new-index/layoutForIndex";

import {
  getAllPostsForToolsSubcategoryPage,
  getPostsByPageForToolsSubcategoryPage,
} from "@/lib/api";
import ToolboxIndexPage from "@/components/toolbox/ToolboxIndexPage";

import ALL_SLUGS_GROUPS from "@/lib/menus/uxTools";
import {
  find_page_slug_from_menu,
  get_slugs_from_menu,
} from "@/lib/menus/lib/getAllTagsFromMenu";
import Footer from "@/components/footer";
import getSponsors from "@/lib/utils/getSponsors";
import { createB64WithFallback } from "@/lib/utils/blurHashToDataURL";

const PAGE_SIZE = 15;

const BREADCRUMBS = {
  pageTitle: "UX Tools",
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
    { name: "UX Tools", slug: "/toolbox/ux-tools/page/1" },
  ],
};

export default function ToolboxPage({
  allPosts = [],
  title,
  preview,
  pagination,
  tag,
  sponsors,
  navSponsor,
}) {
  return (
    <>
      <Layout
        padding={false}
        sponsor={navSponsor}
        maxWidth={"search-wide max-w-[1320px]"}
        seo={{
          title: `${tag} - UX Tools | Page: ${pagination?.page}`,
          description:
            "The best User Experience tools: Research, Heatmaps, Analytics, Collaboration and more.",
          //   image: "",
          canonical: `https://prototypr.io/toolbox/ux-tools/${tag}/page/${pagination?.page}`,
          url: `https://prototypr.io/toolbox/ux-tools/page/${tag}/${pagination?.page}`,
        }}
        activeNav={"toolbox"}
        preview={preview}
      >
        <ToolboxIndexPage
         sponsors={sponsors}
         navSponsor={navSponsor}
          paginationRoot={`/toolbox/ux-tools/${tag}`}
          filterCategories={ALL_SLUGS_GROUPS}
          urlRoot={`/toolbox/ux-tools`}
          title={title}
          currentSlug={tag}
          description="The best User Experience tools: Research, Heatmaps, Analytics, Collaboration and more."
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
  const { pageNo, tag } = params;
  // const foundSlug = ALL_SLUGS.find((SLUG, index) => {
  //     return slug === SLUG.key
  // })
  const foundSlug = find_page_slug_from_menu(ALL_SLUGS_GROUPS, tag);
  let allPosts =
    (await getPostsByPageForToolsSubcategoryPage(
      preview,
      pageSize,
      pageNo,
      foundSlug.tags
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
  const pagination = allPosts.meta.pagination;
  const { navSponsor, sponsors } = await getSponsors();

  return {
    props: {
      allPosts: allPosts.data,
      preview,
      pagination,
      tag,
      sponsors: sponsors?.length ? sponsors : [],
      navSponsor,
      title: foundSlug?.title ? foundSlug.title : "Design Tools",
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  let pageCountRes = 0;
  let pageCountArr = [];

  //create the ALL_SLUGS from ALL_SLUGS_GROUPS
  const all_slugs = get_slugs_from_menu(ALL_SLUGS_GROUPS);
  //now just same as the .map
  for (var z = 0; z < all_slugs.length; z++) {
    var itemTags = all_slugs[z].tags;
    const allPosts =
      (await getAllPostsForToolsSubcategoryPage(
        null,
        PAGE_SIZE,
        0,
        itemTags
      )) || [];
    const pagination = allPosts.meta.pagination;
    const pageCount = pagination.pageCount;
    let arr = new Array(pageCount).fill("");
    let newArr = arr.map((i, index) => {
      return `/toolbox/ux-tools/${all_slugs[z].key}/page/${index + 1}`;
    });
    pageCountArr = pageCountArr.concat(newArr);
  }

  return {
    paths: pageCountArr || [],
    fallback: true,
  };
}
