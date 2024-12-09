import type { ObjectId } from "mongodb";

export interface Mahasiswa {
    _id:ObjectId,
    nim:String,
    nama:String,
    prodi:String
}