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
            title:"book1",
            author:"author1",
            quantity:10,
            img:'/book1.jpg',
        }
    })
    const book2=await prisma.book.create({
        data:{
            title:"book2",
            author:"author2",
            quantity:20,
            img:"/book2.jpg",
        }
    })
    console.log({user1,user2,book1,book2})
}
main()
.catch((e)=>console.error(e))
.finally(async ()=>{await prisma.$disconnect()

})
