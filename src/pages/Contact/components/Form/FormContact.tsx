import React, { useState } from 'react';
import {  Field, ErrorMessage, Form, Formik  } from 'formik';
import emailjs from '@emailjs/browser'
import { InputContainerStyle } from '.';
import { KEYS_EMAILJS, KEY_RECAPTCHA } from '../../../../data';
import { Button } from '../../../../components';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';




export interface FormContactProps {
}

export interface FormContactValues {
	fullName: string; 
	email: string;
	message: string;
}

const validationSchema = Yup.object().shape({
	fullName: Yup.string()
		.required('El nombre es requerido')
		.min(3, 'El nombre debe tener al menos 3 letras'),
	email: Yup.string()
		.email('El correo electrónico no es válido')
		.required('El correo electrónico es requerido'),
	message: Yup.string()
		.required('El mensaje es requerido')
		.min(10, 'El mensaje debe tener al menos 10 letras')
		.max(80, 'El mensaje no puede exceder los 80 caracteres'),
  });

const FormContact: React.FC<FormContactProps> = () => {

	const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

	const handleCaptchaChange = (value: string | null) => {
		if (value) {
			setIsCaptchaVerified(true);
		} else {
			setIsCaptchaVerified(false);
		}
	};

	const handleSubmit =  (
		values: FormContactValues,
		{ setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
	) => {
			if(isCaptchaVerified){
				const formattedFormValues = values as unknown as Record<string, unknown>

				// Envía el correo electrónico utilizando EmailJS
				emailjs.send(KEYS_EMAILJS.SERVICE_ID, KEYS_EMAILJS.TEMPLATE_ID, formattedFormValues, KEYS_EMAILJS.USER_ID)
				.then((response)=> {
				// limpia el formulario despues del envio exitoso
					if(response.status == 200){
						resetForm()
						alert('El mensaje ha sido enviado correctamente.')
					}
				}), (error) => {
					alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente más tarde. ')
				}
				setSubmitting(false)
			}
		}	

	return (
		<Formik<FormContactValues>
			initialValues={{fullName: '', email: '', message: ''}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form id='form'>
				<InputContainerStyle>
					<label htmlFor='fullName'>Nombre y Apellido</label>
					<Field type='text' id='fullName' name='fullName'/>
					<ErrorMessage name='fullName' component='p'/>
				</InputContainerStyle>
				<InputContainerStyle>
					<label htmlFor='email'>Correo Electrónico</label>
					<Field type='email' id='email' name='email'/>
					<ErrorMessage name='email' component='p'/>
				</InputContainerStyle>
				<InputContainerStyle>
					<label htmlFor='message'>Mensaje</label>
					<Field as='textarea' id='message' name='message' rows={8}/>
					<ErrorMessage name='message' component='p'/>
				</InputContainerStyle>
				<ReCAPTCHA sitekey={KEY_RECAPTCHA} onChange={handleCaptchaChange}/>
				<Button label='Enviar' isSubmit={true} onClick={undefined}/>
			</Form>
		</Formik>
	)
}

export default FormContact;
