"use client";

import { useState } from "react";
import { api } from "../lib/api";

export default function SnippetForm({ onCreated }: any) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();

        await api.post("/snippets", {
            title,
            content,
            type: "note",
        });

        setTitle("");
        setContent("");

        onCreated();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <input
                className="border p-2 w-full"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                className="border p-2 w-full"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />

            <button className="bg-blue-700 text-white px-4 py-2">
                Create
            </button>
        </form>
    );
}