/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import axios from 'axios'

export default ({ data }) => {
    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>My Notes</h1>

            <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                {data.data.map(note => (
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
    // const url = `${process.env.API_URL}/api/note`;
    // console.log(url)
    const res = await fetch("http://localhost:3000/api/note");
    const data = await res.json();
    console.log(data);
    return {
        props: {
            data
        }
    }
}
