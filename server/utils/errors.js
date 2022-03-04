class ValidationError extends Error {}

const handleError = (err, req, res, next) => {

    console.error(err);
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .send({
            error: err instanceof ValidationError ? err.error : 'Sorry try again in few minutes.',
        });
};

module.exports = {
    handleError,
    ValidationError,
};