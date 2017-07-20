module.exports = {
    GDSError: GDSError
};

function GDSError(gdsObject) {
    this.message = gdsObject && gdsObject.message || '';
    this.code = gdsObject && gdsObject.status && gdsObject.status.length > 0 && gdsObject.status[0].gdscode || -1;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, GDSError);
    } else {
        this.stack = (new Error()).stack;
    }
}

GDSError.prototype = Object.create(Error.prototype);
GDSError.prototype.name = 'GDSError';
