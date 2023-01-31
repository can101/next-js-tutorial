/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ note }) => {
    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>Note: {note.title} </h1>
        </div>
    )
}

export async function getServerSideProps({ params, req, res }) {
    const url =  `${process.env.API_URL}/api/note/${params.id}`;
    const response = await fetch(url);
    if (!response.ok) {
        res.writeHead(302, {
            Location: '/notes'
        })
        res.end();

        return {
            props: {}
        }
    }
    const { data } = await response.json();
    return {
        props: { note: data }
    }
}
