import { useEffect, useState } from 'react'

export type Post = {
	id: number
	userId: number
	title: string
	body: string
}

const usePosts = (): Post[] => {
	const [post, setPosts] = useState<Post[]>([])

	useEffect(() => {
		const getPosts = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')
			const data = await response.json()

			setPosts(data)
		}

		getPosts()
	})
	return post
}

export default usePosts
