import express from "express";
import MemoryModal from "../models/memory.js";


export const createMemory = async (req,res) => {
    const memory =req.body;
    const newMemory = new MemoryModal({

        ...memory,
        createAt: new Date().toISOString()
    })
    try {
        await newMemory.save();
        res.status(201).json(newMemory);
    }
    catch(error) {
        res.status(404).json({
            message:"something went wrong"
        })
    }
};

export const getMemories = async (req,res) => {
    try {
        const memories = await MemoryModal.find();
        res.status(200).json(memory);
    } catch (error) {
        res.status(404).json({message: "something went wrong"})
    }
}