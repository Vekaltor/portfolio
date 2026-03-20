import './App.css'
import AppProviders from './AppProviders.tsx'
import AppMainLayout from './components/layout/AppMainLayout.tsx'
import AppInitUiPlugins from "./AppInitUiPlugins.tsx";

function App() {
    return (
        <AppProviders>
            <AppInitUiPlugins>
                <AppMainLayout/>
            </AppInitUiPlugins>
        </AppProviders>
    )
}

export default App
