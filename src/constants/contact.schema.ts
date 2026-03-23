import * as yup from 'yup'

export const contactSchema = yup.object({
    name: yup.string().required('Imię jest wymagane'),
    email: yup.string().email('Nieprawidłowy email').required('Email jest wymagany'),
    subject: yup.string().optional(),
    message: yup.string().min(10, 'Minimum 10 znaków').required('Wiadomość jest wymagana'),
})

export type ContactFormData = yup.InferType<typeof contactSchema>
