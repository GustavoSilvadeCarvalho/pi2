import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

async function createAccount(formData:FormData) {
    'use server'

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    await prisma.user.create({
        data: {
            name,
            email,
        }
    })


    redirect('/portal/login')
}

const AuthActions = {
    createAccount,
}

export default AuthActions;