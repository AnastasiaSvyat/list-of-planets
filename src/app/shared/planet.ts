export interface Planet {
    name: string,
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: number,
    population: number,
    residents: Array<string>,
    films: Array<string>,
    created: Date,
    edited: Date,
    url: string
}