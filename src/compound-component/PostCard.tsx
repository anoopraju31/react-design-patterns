import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react'
import { Post } from './usePosts.hook'

type PostCardContext = {
	post: Post
}

type Address = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: {
		lat: string
		lng: string
	}
}

type Company = {
	name: string
	catchPhrase: string
	bs: string
}

type User = {
	id: number
	name: string
	username: string
	email: string
	address: Address
	phone: string
	website: string
	company: Company
}

const PostCardContext = createContext<PostCardContext | undefined>(undefined)

function usePostCardContext() {
	const context = useContext(PostCardContext)

	if (!context)
		throw new Error('usePostCardContext must be used within a PostCard')

	return context
}

type PostCardProps = PropsWithChildren & {
	post: Post
}

export default function PostCard({ children, post }: PostCardProps) {
	return (
		<PostCardContext.Provider value={{ post }}>
			<div className='flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2'>
				{children}
			</div>
		</PostCardContext.Provider>
	)
}

PostCard.Title = function PostCardTitle() {
	const { post } = usePostCardContext()

	return <h2 className='text-lg font-semibold'>{post.title}</h2>
}

PostCard.Body = function PostCardContent() {
	const { post } = usePostCardContext()

	return <p>{post.body}</p>
}

PostCard.User = function PostCardUser() {
	const [user, setUser] = useState<User | null>(null)
	const { post } = usePostCardContext()

	useEffect(() => {
		const getUser = async (userId: number) => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users/${userId}`,
			)
			const data = await response.json()

			setUser(data)
		}

		getUser(post.userId)
	}, [post])

	return <p className='text-sm text-neutral-400'>By {user?.name}</p>
}

PostCard.Buttons = function PostCardButtons() {
	return (
		<div className='flex flex-row gap-2'>
			<button>Read More</button>
			<button>Comments</button>
		</div>
	)
}
