export type PositiveInteger<N extends number> = number extends N ? N : `${N}` extends `-${bigint}` ? never : N;
