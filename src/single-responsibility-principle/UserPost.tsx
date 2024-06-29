import type { FC } from 'react'
import type { Post } from './usePosts.hook'

const UserPost: FC<Post> = ({ id, userId, title, body }) => {
	return (
		<div id={`post-${id}-${userId}`} className=''>
			<h2 className='font-bold '> {title} </h2>
			<p> {body} </p>
		</div>
	)
}

export default UserPost
