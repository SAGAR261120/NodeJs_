class ApiError extends Error {
    constructor(
        success,
        message = "something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.success = success
        this.message = message
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructur)
        }
    }

}