import React from 'react'
import Layout from '../../components/Layout'
import Card from './components/Card'

const Home = () => {
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
