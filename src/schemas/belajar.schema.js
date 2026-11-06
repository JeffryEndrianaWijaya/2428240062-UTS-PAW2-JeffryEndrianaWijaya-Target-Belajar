import z from "zod";

export const storebelajarschema = z.object({
    topic: z.string().trim().min(1, 'Nama topic tidak boleh kosong'),
    target_hours: z.number().min(1, 'jam tidak boleh 0'),
    completed_hours: z.number().min(0, 'jam selesai tidak boleh kurang dari 0'),
    deadline: z.date().min(0, "deadline  tidak boleh kurang dari 0")
})

export const updatebelajarschema = z.object({
    topic: z.string().trim().min(1, 'Nama topic tidak boleh  kosong'),
    target_hours: z.number().min(1, 'jam tidak boleh 0'),
    completed_hours: z.number().min(0, 'jam selesai tidak boleh kurang dari 0'),
    deadline: z.date().min(0, "deadline  tidak boleh kurang dari 0")
})