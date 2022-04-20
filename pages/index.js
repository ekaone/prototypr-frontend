import dynamic from "next/dynamic";

import Container from "@/components/container";
import Layout from "@/components/new-index/layoutForIndex";
import Footer from "@/components/footer";
/**new index components */
import Intro from "@/components/new-index/Intro";
const EditorPick2 = dynamic(() => import("@/components/new-index/EditorPick2"));
const ProductList = dynamic(() => import("@/components/new-index/ProductList"));
const DesignTool = dynamic(() => import("@/components/new-index/DesignTool"));
const SourcePanel = dynamic(() => import("@/components/new-index/SourcePanel"));
const TopicSpolights = dynamic(() => import("@/components/new-index/TopicSpolights"));
const Aspiring = dynamic(() => import("@/components/new-index/Aspiring"));
const Feeds = dynamic(() => import("@/components/new-index/Feeds"));
import {
  getCombinedPostsForHome,
  getAllToolsForHome,
  getCommonQuery,
} from "@/lib/api";
import Head from "next/head";
import { useIntl } from 'react-intl';
const TAB_ITEMS = [
  {
    slug: "accessibility",
    name: "topicSpotlight.tabs.accessibility",
  },
  {
    slug: "user-research",
    name: "topicSpotlight.tabs.userResearch",
  },
  {
    slug: "ux-writing",
    name: "topicSpotlight.tabs.userWriting",
  },
  {
    slug: "vr",
    name: "topicSpotlight.tabs.vr",
  },
  {
    slug: "code",
    name: "topicSpotlight.tabs.code",
  },
];
const PAGE_SIZE = 12;

export default function Index({
  allPosts,
  preview,
  allTools,
  otherPosts,
  interviewPosts,
  topicRes,
}) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const intl = useIntl();

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>
            {intl.formatMessage({id: "index.header.title"})}
            👾.
          </title>
        </Head>
        <Container>
          <Intro />
          <EditorPick2 header={intl.formatMessage({ id: "editpicker.title"})} post={heroPost} />
          <ProductList posts={morePosts} />
          <div className="mt-32 pb-10 px-3 xl:px-0">
            <h4 className="text-3xl text-gray-900 font-bold leading-6 text-title-1">
              {intl.formatMessage({id: "designtool.title"})}
            </h4>
          </div>
        </Container>
        <DesignTool allTools={allTools} />
        <Container>
          <SourcePanel />
          <TopicSpolights tabs={TAB_ITEMS} topics={topicRes} />
          <Aspiring posts={interviewPosts} />
          <Feeds posts={otherPosts} />
        </Container>
      </Layout>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getCombinedPostsForHome(preview, 7, 0)) || [];
  const allTools = (await getAllToolsForHome(preview, PAGE_SIZE, 0)) || [];
  const otherPosts = (await getCombinedPostsForHome(preview, 8, 7)) || [];
  const interviews =
    (await getCommonQuery(preview, ["interview"], "article", 4, 0)) || [];
  let topicRes = {};

  for (let index = 0; index < TAB_ITEMS.length; index++) {
    const tag = TAB_ITEMS[index].slug;
    const res = (await getCommonQuery(preview, [tag], "article", 6, 0)) || [];
    topicRes[tag] = res.data;
  }

  return {
    props: {
      allPosts: allPosts.data,
      allTools: allTools.data,
      otherPosts: otherPosts.data,
      interviewPosts: interviews.data,
      topicRes,
      preview,
    },
    revalidate: 20,
  };
}
