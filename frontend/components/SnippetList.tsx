"use client";

import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function SnippetList() {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchSnippets() {
        try {
            const res = await api.get("/snippets");
            setSnippets(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSnippets();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!snippets.length) return <p>No snippets yet</p>;

    return (
        <div className="space-y-3">
            {snippets.map((s: any) => (
                <div key={s._id} className="border p-3 rounded">
                    <h3 className="font-bold">{s.title}</h3>
                    <p>{s.content}</p>
                </div>
            ))}
        </div>
    );
}