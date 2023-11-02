export const charactersAll = `
    query AllCharacters ($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
        info {
            count
            pages
        }
        results {
            id
            name
            status
            species
            image
            location{
                name
            }
            episode {
                name
            }
        }
        }
    }
`

export const getSingleCharacter = `
    query getSingleCharacter ($id: ID!) {
        character(id: $id) {
        id
        name
        status
        species
        image
        gender
        location{
            name
        }
        episode {
            name
        }
        }
    }
`