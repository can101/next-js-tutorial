import React from "react";
import Link from 'next/link';

const Page = () => {
    const notes = new Array(15).fill(1).map((e, i) => ({ id: i+1, title: `Note ${i+1}` }))
    return (
        <div>
            <h1>Note index path</h1>
            {notes.map(({ id, title }) => (
                <div key={id}>
                    <Link href="/notes/[id]" as={`/notes/${id}`}>
                        <strong>{title}</strong>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Page