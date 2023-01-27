import { NextApiRequest, NextApiResponse } from 'next'

class CustomError extends Error {
    code: number;
    constructor(message: string, code: number) {
        super(message);
        this.code = code;
    }
}


function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case "GET":
                return res.status(200).end();
            case "POST":
                return res.status(200).end();
            default:
                throw new CustomError("not implemented method", 405)
        }
    } catch (err: any) {
        return res.status(err.code).json({ message: err.message });
    }
}

export default handler