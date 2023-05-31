import React from 'react';
import { Formik, Field, ErrorMessage, Form  } from 'formik';
import emailjs from 'emailjs-com'

export interface FormContactProps {
}

interface FormContactValues {
	fullName: string; 
	email: string;
	message: string;
}

const FormContact: React.FC<FormContactProps> = () => {

	const handleSubmit = async (
		values: FormContactValues,
		{ setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
	) => {
		try {
			// Envía el correo electrónico utilizando EmailJS
			await emailjs.send()

			// limpia el formulario despues del envio exitoso
			resetForm()
			alert('El mensaje ha sido enviado correctamente.')
		} catch (error) {
			alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente más tarde. ')
		} finally {
			setSubmitting(false)
		}
	}

	const validateForm = (values: FormContactValues) => {
		const errors: Partial<FormContactValues> = {}

		if(!values.fullName) {
			errors.fullName = 'Este campo es requerido.'
		}

		if (!values.email) {
			errors.email = 'Este campo es requerido.';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Dirección de correo electrónico inválida.';
		}
		
		if (!values.message) {
			errors.message = 'Este campo es requerido.';
		}
		
		return errors;
	}

	return (
		<>form</>
	)
};

export default FormContact;
