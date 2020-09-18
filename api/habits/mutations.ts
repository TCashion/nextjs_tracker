// graphQL mutations are where we "modify" things
// like a POST request in a REST API

export const habitMutations = {
    Mutation: {
        async addHabit(_: any, { habit }: any) {
            console.log('add habit: ', habit);
        }
    }
};