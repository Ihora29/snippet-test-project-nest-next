"use client";

import SnippetList from "../components/SnippetList";
import SnippetForm from "../components/SnippetForm";

export default function Home() {

    function handleCreated() {
        window.location.reload();
    }

    return (
        <main className="max-w-2xl mx-auto p-6">

            <h1 className="text-2xl font-bold mb-4">
                Snippet Vault
            </h1>

            <SnippetForm onCreated={handleCreated} />

            <div className="mt-6">
                <SnippetList />
            </div>

        </main>
    );
}