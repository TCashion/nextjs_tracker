// these types 'extend' the standard req and res objects
import { NextApiRequest, NextApiResponse } from 'next'

// Long Way
// export default (req: NextApiRequest, res: NextApiResponse) => {
//     res.setHeader('Content-Type', 'application/json')
//     res.statusCode = 200
//     res.end(JSON.stringify({
//         test: 'Hello Travis'
//     }))
// }

// Short Way
export default (req: NextApiRequest, res: NextApiResponse) => {
    // other serverless / lambda functions go here 
    console.log('Hello, Travis'); // prints on dev env console

    res.status(200).json({
        test: 'Hello, Travis'
    });
}