import type { FC } from 'react'
import usePosts from './usePosts.hook'
import PostCard from './PostCard'

const PostContainer: FC = () => {
	const posts = usePosts()

	return (
		<div className='max-w-3xl w-full mx-auto py-20 px-6 md:px-0 flex flex-col gap-2'>
			{posts.map((post) => (
				<PostCard key={post.id} post={post}>
					<PostCard.Title />
					<PostCard.Body />
					<PostCard.User />
					<PostCard.Buttons />
				</PostCard>
			))}
		</div>
	)
}

export default PostContainer
