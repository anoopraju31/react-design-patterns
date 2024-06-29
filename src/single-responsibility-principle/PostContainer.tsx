import type { FC } from 'react'
import usePosts from './usePosts.hook'
import UserPost from './UserPost'

const PostContainer: FC = () => {
	const posts = usePosts()

	return (
		<div className='max-w-3xl w-full mx-auto py-20 px-6 md:px-0 flex flex-col gap-2'>
			{posts.map((post) => (
				<UserPost key={post.id} {...post} />
			))}
		</div>
	)
}

export default PostContainer
