import Link from "next/link";

export default function Cards({ tools }) {
    return (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            {tools.map((tool) => (
                <div
                    key={tool.email}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={tool.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <Link href={tool.uri} >
                            <a target="_blank" className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900">{tool.name}</p>
                                <p className="text-sm text-gray-500 truncate">{tool.description}</p>
                            </a>
                        </Link>

                    </div>
                </div>
            ))}
        </div>
    )
}
