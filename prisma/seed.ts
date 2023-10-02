import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.upsert({
        where: {email: 'alice@prisma.io'},
        update: {},
        create: {
            email: 'alice@prisma.io',
            password: 'fc5e038d38a57032085441e7fe7010b0', //helloworld
        },
    })
    const item = await prisma.item.upsert({
        where: {url: 'eQlaPV1SNL4'},
        update: {},
        create: {
            title: 'Check out Prisma with Next.js',
            url: 'eQlaPV1SNL4',
            shareBy: {
                connect: [{id: user.id}]
            },
            like: 12,
            dislike: 22,
            description: 'Lorem Ipsum'
        },
    })
    console.log({user, item})
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
