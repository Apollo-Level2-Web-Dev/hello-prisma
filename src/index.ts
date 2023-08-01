import { PrismaClient } from "@prisma/client";
import app from './app'

const prisma = new PrismaClient();
const port = process.env.PORT || 3003
async function main() {
    app.listen(port, () => {
        console.log(`Server running at ${port}`);
    })
}

main();