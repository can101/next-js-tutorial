/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>Note: {id} </h1>
            <button onClick={() => router.push('/')}>go to home</button>
            <button onClick={() => router.back()}>go to back</button>
        </div>
    )
}