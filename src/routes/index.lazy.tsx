import { createLazyFileRoute } from '@tanstack/react-router'
import Page from "@/app/dashboard/page.tsx";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <Page />
    )
}