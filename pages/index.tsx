import React, { useEffect, useState } from 'react'

const Home = () => {

    const [avocatoList, setAvocatoList] = useState<TProduct[]>([])

    useEffect(() => {
        window.fetch('api/avocato')
            .then(res => res.json())
            .then(({ data, length }) => {
                setAvocatoList(data)
            })
    }, [])

    return (
        <div>
            <h1>Hello world!</h1>
            {avocatoList.map((avocato) => <div>{avocato.name}</div>)}
        </div>
    )
}

export default Home