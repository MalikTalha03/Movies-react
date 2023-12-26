import React from 'react'

const AddMovie = (prop) => {
    function postdata(){
        const title = document.getElementById('title').value
        const genre = document.getElementById('genre').value
        const year = document.getElementById('year').value
        const producer = document.getElementById('producer').value
        const rating = document.getElementById('rating').value
        const poster = document.getElementById('poster').value
        const data = { title, genre, year, producer, rating, poster }
        fetch('http://localhost:8086/api/movies', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Authorization':  prop.authcookie,
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("Movie Added Successfully")
            window.location.href = '/movies';
        })
    }
  return (
    <div>
            <div>
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                    <label htmlFor="genre">Genre</label>
                    <input type="text" id="genre" name="genre" />
                    <label htmlFor="year">Year</label>
                    <input type="text" id="year" name="year" />
                    <label htmlFor="producer">Producer</label>
                    <input type="text" id="producer" name="producer" />
                    <label htmlFor="rating">Rating</label>
                    <input type="text" id="rating" name="rating" />
                    <label htmlFor="poster">Poster</label>
                    <input type="file" id="poster" name="poster" />
                    <button type="submit">Add</button>
                </form>
            </div>
    </div>
  )
}

export default AddMovie