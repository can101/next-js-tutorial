import React from "react";
import { useRouter } from "next/router"

const Page = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            Note {id}
            <button onClick={() => router.push('/')}>go to home</button>
            <button onClick={() => router.back()}>go to back</button>
        </div>
    )
}

export default Page