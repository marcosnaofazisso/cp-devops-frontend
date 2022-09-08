import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        var t0 = performance.now()
        try {
            axios.get(url)
                .then(response => { setData(response.data) })

        } catch (error) {
            console.log("Error: " + error)
        }
        console.log(JSON.stringify(data))
        var t1 = performance.now()
        console.log('Axios -> Time taken to execute:' + (t1 - t0) + ' milliseconds')
    }, [])

    return { data }

}
