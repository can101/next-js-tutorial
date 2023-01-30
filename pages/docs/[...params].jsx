/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter();
    const {params} = router.query;
    console.log(params);
    return (
        <div>
            Note
        </div>
    )
}

export default Page