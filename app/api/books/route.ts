import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const book = await prisma.book.create({
    data: {
      title: body.title,
      author: body.author,
      quantity: body.quantity,
    },
  })

  return NextResponse.json(book)
}

export async function GET() {
  const books = await prisma.book.findMany()
  return NextResponse.json(books)
}

