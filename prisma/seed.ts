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
    const item1 = await prisma.item.upsert({
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
    const item2 = await prisma.item.upsert({
        where: {url: 'l9-KNJTc_UU'},
        update: {},
        create: {
            title: 'Check out Prisma with Next.js 2',
            url: 'l9-KNJTc_UU',
            shareBy: {
                connect: [{id: user.id}]
            },
            like: 242,
            dislike: 44,
            description: 'Lorem Ipsum 2'
        },
    })
    console.log({user, item1, item2})
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
