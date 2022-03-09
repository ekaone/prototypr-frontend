import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/tools/intro'
import NewPagination from '@/components/pagination'
import { getAllPostsForToolsSubcategoryPage, getPostsByPageForToolsSubcategoryPage } from '@/lib/api'
const PAGE_SIZE = 13;

export default function ToolboxPage({allPosts = [], preview, pagination}) {
    //pagination is like {"total":1421,"pageSize":12,"page":2,"pageCount":119}
    let heroPost;
    let morePosts;
    let coverImage;
    if (allPosts && allPosts.length) {
        heroPost = allPosts[0]
        morePosts = allPosts.slice(1)
        coverImage = heroPost.attributes.legacyFeaturedImage ? heroPost.attributes.legacyFeaturedImage:''
    }
    const router = useRouter()

    const onPageNumChange = (pageNo) => {
        router.push(`/toolbox/ux-tools/page/${pageNo}`)
      }

    return (
        <Layout activeNav={'toolbox'} preview={preview}>
            <Container>
            {
                pagination && pagination.page == 1&& (
                    <>
                        <Intro title={'Color Tools (This is a demo - it should be UX Tools!)'} />
                        <div className='text-xl mb-6'>
                        <p>1. See the page: ux-tools/page/[pageNo]</p><br/>
                        <p>2. Check the query: <code>${`import { getAllPostsForToolsSubcategoryPage, getPostsByPageForToolsSubcategoryPage } from '@/lib/api'`}</code></p>
                        <br/><p>3. The parameters need modifying - search for: <code>${`tags:{slug:{in:["color"]}}`}</code></p>
                        </div>
                        {heroPost && (
                            <HeroPost
                            title={heroPost.attributes.title}
                            coverImage={coverImage}
                            date={heroPost.attributes.date}
                            author={(heroPost.attributes.author &&heroPost.attributes.author.data) ?heroPost.attributes.author.data.attributes:'https://prototypr.gumlet.io/wp-content/uploads/2021/09/2021-09-17-10-09-02.2021-09-17-10_10_54-f3ijc-1.gif'}
                            slug={heroPost.attributes.slug}
                            excerpt={heroPost.attributes.excerpt}
                            type="toolbox"
                            />
                        )}   
                    </>
                )
            }
            {
                pagination && pagination.page ? (
                    morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} type="toolbox" />
                ): (
                    allPosts.length > 0 && <MoreStories posts={allPosts} type="toolbox" />
                )
            }
            
            <NewPagination 
                total={pagination?.total}
                pageSize={PAGE_SIZE}
                currentPage={pagination?.page}
                onPageNumChange={(pageNum) => {onPageNumChange(pageNum)}}
            />
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ preview = null, params}) {
    const pageSize = PAGE_SIZE
    const page = params.pageNo
    const allPosts = (await getPostsByPageForToolsSubcategoryPage(preview, pageSize, page )) || []
    
    console.log(allPosts)
    const pagination = allPosts.meta.pagination
    return {
        props: {
            allPosts: allPosts.data, preview, pagination
        },
    }
  }

export async function getStaticPaths() {
    const allPosts = (await getAllPostsForToolsSubcategoryPage(null, PAGE_SIZE, 0)) || []
    const pagination = allPosts.meta.pagination
    const pageCount = pagination.pageCount
    const pageCountArr = new Array(pageCount).fill(' ');
    return {
        paths: pageCountArr && pageCountArr.map((pageNo) => {
            return `/toolbox/ux-tools/page/${pageNo}`
        }) || [],
        fallback: true,
    }
}