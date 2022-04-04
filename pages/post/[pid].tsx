import { GetServerSidePropsContext, NextPage } from 'next'

const PostPage: NextPage<{ pid: number }> = ({ pid }) => {
   return <>Post: {pid}</>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
   return {
      props: {
         pid: ctx.query['pid'],
      },
   }
}

export default PostPage
