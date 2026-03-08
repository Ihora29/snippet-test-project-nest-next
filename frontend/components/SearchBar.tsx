"use client";

import { useState } from "react";

type Props = {
    onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-2 mb-4"
        >
            <input
                type="text"
                placeholder="Search snippets..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 rounded w-full"
            />

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded"
            >
                Search
            </button>
        </form>
    );
}