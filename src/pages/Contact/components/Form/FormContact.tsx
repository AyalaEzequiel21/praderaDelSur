import React from 'react';
import {  Field, ErrorMessage, Form, Formik  } from 'formik';
import emailjs from 'emailjs-com'
import { InputContainerStyle } from '.';
import { KEYS_EMAILJS } from '../../../../data';
import { Button } from '../../../../components';


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
			const formattedFormValues = values as unknown as Record<string, unknown>
			// Envía el correo electrónico utilizando EmailJS
			await emailjs.send(KEYS_EMAILJS.SERVICE_ID, KEYS_EMAILJS.TEMPLATE_ID, formattedFormValues, KEYS_EMAILJS.USER_ID)

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
		<Formik<FormContactValues>
			initialValues={{fullName: '', email: '', message: ''}}
			validate={validateForm}
			onSubmit={handleSubmit}
		>
			<Form>
				<InputContainerStyle>
					<label htmlFor='fullName'>Nombre y Apellido</label>
					<Field type='text' id='fullName' name='fullName'/>
					<ErrorMessage name='fullName' component='div'/>
				</InputContainerStyle>
				<InputContainerStyle>
					<label htmlFor='email'>Correo Electrónico</label>
					<Field type='email' id='email' name='email'/>
					<ErrorMessage name='email' component='div'/>
				</InputContainerStyle>
				<InputContainerStyle>
					<label htmlFor='message'>Mensaje</label>
					<Field type='textarea' id='message' name='message'/>
					<ErrorMessage name='message' component='div'/>
				</InputContainerStyle>
				<Button label='Enviar' isSubmit={true} onClick={undefined}/>
			</Form>
		</Formik>
	)
};

export default FormContact;
