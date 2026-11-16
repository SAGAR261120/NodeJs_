// Done with try catch

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         fn(req, res, next)
//     }
//     catch (error) {
//         res.status(error.code || 500).json({
//             success: true,
//             message: error.message
//         })
//     }
// }


// Done with promises
const asyncHandler = (fn) => {
    Pr.resolve(fn(req, res, next)).catch((error) => next(error))
}



export { asyncHandler }