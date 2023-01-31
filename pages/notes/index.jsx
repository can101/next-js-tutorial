/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({ notes }) => {
    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>My Notes</h1>

            <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                {notes.data.map(note => (
                    <div key={note.id} sx={{ width: '33%', p: 2 }}>
                        <Link href="/notes/[id]" as={`/notes/${note.id}`} sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <div sx={{ variant: 'containers.card', }}>
                                <strong>{note.title}</strong>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const url = await `${process.env.API_URL}/api/note`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            notes: data
        }
    }
}