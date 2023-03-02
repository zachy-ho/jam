export const Preconditions = {
  checkExists: <T>(i: T) => {
    if (i == null) {
      throw new Error('Item does not exist.');
    }

    return i;
  },
};
