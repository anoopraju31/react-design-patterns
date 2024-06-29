# Single Responsibility Principle 
The **Single Responsibility Principle (SRP)** is one of the five SOLID principles of object-oriented design. It states that a class or a module should have only one reason to change, meaning it should have only one job or responsibility. In the context of React development, this principle can be applied to components to ensure they are *focused* and *manageable*.

## Applying SRP in React
1. **Component Decomposition**
    - Break down complex components into smaller, reusable ones, each handling a single responsibility.
    - Example: Instead of having a large `UserProfile` component, break it down into `UserDetails`, `UserAvatar`, and `UserPosts` components.

2. **Seperation of Concerns**
    - Seperate presentational and container components
    - Presentational components handle the UI, while container components manage state and logic.
    - Example:
        ``` jsx
        // Presentational Component
        const UserList = ({ users }) => {
            return (
                <li >{user.name}</li>
            )
        }

        // Container Component
        const UserListContainer = () => {
            const [users, setUsers] = useState([])

            useEffect(() => {
                fetchUsers().then(setUsers)
            }, [])

            return ( 
                <ul>
                    {users.map(user => <UserListItem key={user.id} user={user} />)}
                </ul>
            )
        }
        ```
3. **Seperation of Concerns**
    - Separate logic into different components based on their responsibility. For instance, fetching data from an API can be separated into a custom hook.
    ``` jsx
    // Custom hook for fetching user data
    const useUserData = (userId) => {
        const [user, setUser] = useState(null)
        
        useEffect(() => {
            fetchUser(userId).then(data => setUser(data))
        }, [userId])
        
        return user
    }

    const UserProfile = ({ userId }) => {
        const user = useUserData(userId)
        
        if (!user) return <div>Loading...</div>
        
        return (
            <div>
                <UserAvatar avatarUrl={user.avatarUrl} />
                <UserDetails name={user.name} email={user.email} />
            </div>
        )
    }
    ```
4. **Presentational and Container Components**
    - Split components into **presentational** (or **stateless**) components and **container** (or **stateful**) components.
    ``` jsx
    // Presentational component
    const UserDetails = ({ name, email }) => (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )

    // Container component
    const UserContainer = ({userId}) => {
        const [user, setUser] = useState(null)
        
        useEffect(() => {
            fetchUser(userId).then(user => setState(user));
        }, [userId])
    
        
        if (!user) return <div>Loading...</div>;
        
        return <UserDetails name={user.name} email={user.email} />;
    }
    ```
## Benefits of Applying SRP in React
- **Maintainability:** Easier to understand and modify components since each has a single responsibility.
- **Reusability:** Smaller, well-defined components can be reused across different parts of the application.
- **Testability:** Components with a single responsibility are easier to test in isolation.
- **Scalability:** Helps in scaling the application by organizing code better and making it easier to add new features.

By adhering to the Single Responsibility Principle in React, you ensure that your components remain focused, making your codebase more manageable and robust.