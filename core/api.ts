import axios from "axios";
import { ExerciseType } from "./types";

const API = axios.create({ baseURL: "http://192.168.0.4:8080" });

// export const getExercisesBasedOnPlan = (plan: string) => API.get(`/exercises/${plan}`);
export const getExercises = () => API.get("/exercises");
export const setNumOfKilos = (id: string, numOfKilos: number) => API.patch(`/exercises/${id}`, { numOfKilos });

export const getRecords = () => API.get("/records");
export const createRecord = (exercise: ExerciseType, newNumOfKilos: number, createdAt: Date) => API.post(`/records`, { exercise, newNumOfKilos, createdAt });