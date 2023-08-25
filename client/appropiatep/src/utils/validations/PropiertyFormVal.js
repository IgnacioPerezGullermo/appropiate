import { z } from 'zod';

export const PropiertyFormVal = z.object({
  email: z.string().email({ message: 'Ingrese un mail para contactarte' }),
  name: z.string().min(7, { message: 'Agrega nombre y apellido' }),
});
