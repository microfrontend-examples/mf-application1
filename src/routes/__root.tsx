import {createRootRoute, Outlet} from '@tanstack/react-router'

export const Route = createRootRoute({
    component: Page
})

function Page() {
    return(
        <div className="app1 pt-16">
            <Outlet />
        </div>
    )
}