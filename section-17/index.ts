import { z } from 'zod';
import fs from 'node:fs';

const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()]))
});

type Data = z.infer<typeof dataSchema>;

type NoZodData = {
    key: string;
    title: string;
    id: number;
    values: (string | number)[]
}

function output(data: Data) {
    console.log(data)
}

const content = JSON.parse(fs.readFileSync('data.json').toString());
const parseData = dataSchema.parse(content);

output(parseData);
