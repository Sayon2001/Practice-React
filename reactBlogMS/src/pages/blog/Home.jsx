import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Card from './components/Card'
import axios from 'axios'
import { baseUrl } from '../../config'

const Home = () => {
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const response = await axios.get(`${baseUrl}/blog`)
        console.log(response)
        if (response.status === 200) {
            setBlogs(response.data.data)
        }

    }
    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <Layout>
            <div className='flex flex-wrap justify-center space-x-5 mt-6'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Layout>
    )
}

export default Home
