// Create a new router instance
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "@/routeTree.gen.ts";
import {StrictMode} from "react";
import './index.css'

const router = createRouter({routeTree})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const Root = () => {
    return (
        <StrictMode>
                <RouterProvider router={router} basepath='/portal/application-1'/>
        </StrictMode>
    )
}