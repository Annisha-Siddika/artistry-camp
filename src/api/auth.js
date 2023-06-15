
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        role: 'student'
    }

    fetch(`${import.meta.env.VITE_API_URL}/users`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

