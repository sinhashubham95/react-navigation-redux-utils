let validateFormat = function(format) {};

if (__DEV__) {
  validateFormat = function(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
      );
    } else {
      error = new Error(format);
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

export default invariant;
