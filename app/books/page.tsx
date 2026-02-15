"use client"
import { useEffect, useState } from "react"

export default function BooksPage() {
  const [books, setBooks] = useState<any[]>([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [quantity, setQuantity] = useState(0)

  const fetchBooks = async () => {
    const res = await fetch("/api/books")
    const data = await res.json()
    setBooks(data)
  }

  const addBook = async () => {
    await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ img, title, author, quantity }),
    })
    fetchBooks()
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className=" flex flex-col bg-gray-200 h-screen p-5 m-5 rounded-xl m-2">
      <div className="flex flex-row bg-gray-300 p-5 rounded-xl  ">
        <ul className="flex gap-5   ">
          {books.map(book => (
            <li key={book.id}>
              <div className="flex flex-col text-center bg-white rounded-xl shadow-[5px_5px_5px_black] hover:scale-105 transition-transform duration-300">
                <div className=" "><img className=" rounded-t-xl " src={book.img} alt={book.title} width={150} /></div>
                <div className=" text-white font-bold bg-green-950 pt-5 w-[150px] rounded-b-xl pb-5 ">
                  <p>{book.title} </p>
                  <p>{book.author} </p>
                  <p className="">{book.quantity}</p>
                </div>

              </div>

            </li>
          ))}
        </ul>

      </div>


      <div>
        <h1>Add Book</h1>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input placeholder="Author" onChange={e => setAuthor(e.target.value)} />
        <input
          type="number"
          placeholder="Quantity"
          onChange={e => setQuantity(Number(e.target.value))}
        />
        <button onClick={addBook}>Add Book</button>

      </div>



    </div>
  )
}
