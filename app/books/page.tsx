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
      body: JSON.stringify({ title, author, quantity }),
    })
    fetchBooks()
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h1>Books</h1>

      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" onChange={e => setAuthor(e.target.value)} />
      <input
        type="number"
        placeholder="Quantity"
        onChange={e => setQuantity(Number(e.target.value))}
      />
      <button onClick={addBook}>Add Book</button>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author} - {book.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}
