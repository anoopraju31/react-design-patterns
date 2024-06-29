import type { FC } from 'react'
import PostContainer from './compound-component/PostContainer'
// import PostContainer from './single-responsibility-principle/PostContainer'

const App: FC = () => {
	return (
		<div>
			<PostContainer />
		</div>
	)
}

export default App
