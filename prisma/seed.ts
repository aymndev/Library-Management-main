import { PrismaClient } from "@prisma/client"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import bcrypt from 'bcryptjs';

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" })
const prisma = new PrismaClient({ adapter });
async function main (){
    const hashedAdminPassword = await bcrypt.hash("aymane123", 10)
    const hashedUserPassword = await bcrypt.hash("amine", 10)
    const user1=await prisma.user.upsert({
        where: { email: "aymane@gmail.com" },
        update: {},
        create: {
            name:"aymane",
            email:"aymane@gmail.com",
            password:hashedAdminPassword,
            role:"admin",
            status:"approved",
        }
    })
    const user2=await prisma.user.upsert({
        where: { email: "amine@gmail.com" },
        update: {},
        create: {
            name:"amine",
            email:"amine@gmail.com",
            password:hashedUserPassword,
            role:"user",
            status:"approved",
        }
    })
    const book1=await prisma.book.create({
        data:{
            title:"Deep Thinking",
            author:"Garry",
            quantity:10,
            img:'/book1.jpg',
        }
    })
    const book2=await prisma.book.create({
        data:{
            title:"The Alchemist",
            author:"john",
            quantity:20,
            img:"/book2.jpg",
        }
    })
    const book3=await prisma.book.create({
        data:{
            title:"Every thing is F*cked",
            author:"Mark Manson",
            quantity:5,
            img:"/book3.webp",
        }
    })
    console.log({user1,user2,book1,book2,book3})
}
main()
.catch((e)=>console.error(e))
.finally(async ()=>{await prisma.$disconnect()

})
