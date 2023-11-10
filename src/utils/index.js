export const addBook = async (title, author, genre) => {
    try {
        console.log("addBook function in the Utils folder")
        console.log(title, author, genre)
        const response = await fetch("http://localhost:5000/addBook", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "title": title,
                "author": author,
                "genre": genre
            })
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}