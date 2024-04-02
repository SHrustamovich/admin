export const formLabel = (
    title: string,
    name: string,
    addRole?: {
        [key: string]: string | number;
    }
) => {
    const rules =
        addRole !== undefined
            ? [
                  {
                      required: true,
                      message: `Iltimos ${title} maydonni to'ldirirng !`,
                  },
                  addRole,
              ]
            : [
                  {
                      required: true,
                      message: `Iltimos ${title} maydonni to'ldirirng !`,
                  },
              ];

    return {
        label: title,
        name: name,
        rules,
    };
};
