export interface ExerciseType {
    _id: string,
    name: string,
    numOfSeries: number,
    numOfRepeats: string,
    numOfKilos: number,
    plan: string,
    image?: any,
    createdAt: string
}

export interface RecordType {
    _id: string,
    exercise: ExerciseType,
    newNumOfKilos: number,
    createdAt: string
}