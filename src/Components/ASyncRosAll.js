
const fetchFromGitHub = async (endPoint) => {
    const url = `https://api.github.com${endPoint}`
    const response = await fetch(url)
    return await response.json()
}

export const showUserAndRepos = async (handle) => {
    const [user, repos] = await Promise.all([
        fetchFromGitHub(`/users/${handle}`),
        fetchFromGitHub(`/users/${handle}/repos`)
    ])

    console.log(user.name)
    console.log(`${repos.length} repos`)

}