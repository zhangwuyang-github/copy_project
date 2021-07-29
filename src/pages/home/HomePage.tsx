import React from 'react'

import Header from './component/Header/Header'

const HomePage: React.FC = () => {
    return (
        <div style={styles.container}>
            <Header />
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#f8f8f8'
    }
}

export default HomePage
