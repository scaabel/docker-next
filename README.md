This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pre-requisites
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started
To build the development docker image, run the following command.
```bash
./harbor build
```

To start the development server, run the following command.
```bash
./harbor up
```

To stop the development server, run the following command.
```bash
./harbor stop
```

For more information, run the following command.
```bash
./harbor help
or
./harbor -h
or
./harbor --help
or
./harbor
```

#### Ease of use
To make it easier to run the commands, you can add the following to your `.bashrc` or `.zshrc` file.
```bash
alias harbor='./harbor'
```

After adding the alias, you can run the commands without the `./` prefix.
```bash
harbor build
harbor up
harbor stop
```