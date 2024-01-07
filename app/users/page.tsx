import React from 'react'
import Link from 'next/link'

interface User {
    id: number
    name: string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()

    return (
        <main>
            <h1 className='title'>Users</h1>
            <ul className='users-list'>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <Link href='/' className='button'>
                Back Home
            </Link>
        </main>
    )
}

export default UsersPage
