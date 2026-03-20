import AppContent from "./AppContent.tsx";
import AppFooter from "./AppFooter.tsx";
import AppHeader from "./AppHeader.tsx";


function AppMainLayout() {
    return (
        <div className="relative">
            <AppHeader/>
            <AppContent/>
            <AppFooter/>
        </div>
    )
}

export default AppMainLayout
