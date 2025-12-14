import { projects } from "@/lib/data";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
