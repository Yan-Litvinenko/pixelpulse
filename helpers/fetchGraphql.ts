export default async function fetchGraphQl<T>(query: string): Promise<T> {
    try {
        const response = await fetch('/api/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Pragma: 'no-cache',
                Expires: '0',
            },
            body: JSON.stringify({ query }),
        });

        const { data, errors } = await response.json();

        if (errors) {
            throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);
        }

        return data;
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}
