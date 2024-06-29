# Compound Component

In React, a compound component is a design pattern that allows components to work together as a group while still maintaining flexibility and separation of concerns. This pattern is useful for creating complex UI components where multiple subcomponents need to interact or share state.

#### Example: Building a Compound Component
Let's create a simple tab component to demonstrate the compound component pattern.

1. Creating the Tabs and Tab Components
```jsx
    // Tabs.js
    import React, { useState, createContext, useContext } from 'react'

    // Create a Context for the Tabs
    const TabsContext = createContext()

    const Tabs = ({ children, defaultIndex = 0 }) => {
        const [activeIndex, setActiveIndex] = useState(defaultIndex)

        return (
            <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
                <div className="tabs">{children}</div>
            </TabsContext.Provider>
        )
    }

    const TabList = ({ children }) => {
        return <div className="tab-list">{children}</div>
    }

    const Tab = ({ children, index }) => {
        const { activeIndex, setActiveIndex } = useContext(TabsContext)
        
        const isActive = activeIndex === inde

        return (
            <button
            className={`tab ${isActive ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            >
            {children}
            </button>
        )
    }

    const TabPanels = ({ children }) => {
        return <div className="tab-panels">{children}</div>
    }

    const TabPanel = ({ children, index }) => {
        const { activeIndex } = useContext(TabsContext)

        return activeIndex === index ? <div className="tab-panel">{children}</div> : null
    }

    export { Tabs, TabList, Tab, TabPanels, TabPanel }
```

2. Using the Compound Component
``` jsx
    // App.js
    import React from 'react'
    import { Tabs, TabList, Tab, TabPanels, TabPanel } from './Tabs'

    const App = () => {
        return (
            <Tabs defaultIndex={0}>
                <TabList>
                    <Tab index={0}>Tab 1</Tab>
                    <Tab index={1}>Tab 2</Tab>
                    <Tab index={2}>Tab 3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel index={0}>Content for Tab 1</TabPanel>
                    <TabPanel index={1}>Content for Tab 2</TabPanel>
                    <TabPanel index={2}>Content for Tab 3</TabPanel>
                </TabPanels>
            </Tabs>
        )
    }

    export default App
```
#### Explanations
1. **Context:** A `TabsContext` is created to manage the state of which tab is currently active. This context provides the active index and a method to change it.

2. **Tabs Component:** The main `Tabs` component initializes the context and provides it to all child components.

3. **TabList and Tab:** The `TabList` component wraps around individual `Tab` components. Each `Tab` receives an `index` prop to identify which tab it is. When a `Tab` is clicked, it updates the active index in the context.

4. **TabPanels and TabPanel:** The `TabPanels` component wraps around individual `TabPanel` components. Each `TabPanel` checks the context to see if it should be displayed based on the active index.

#### Benefits of the Compound Component Pattern
- **Separation of Concerns:** Each subcomponent has a clear responsibility, making the code easier to understand and maintain.
- **Flexibility:** Users of the component can compose the subcomponents in various ways, giving them flexibility in how they use the compound component.
- **State Management:** State is managed in a centralized context, allowing subcomponents to communicate and share state without prop drilling.

This pattern is especially useful in larger, more complex applications where components need to be flexible and reusable.